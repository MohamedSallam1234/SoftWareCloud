import express from 'express'

import multer from 'multer'
import sharp from 'sharp'
import crypto from 'crypto'

import connectDB from './connectDB.js'
import { uploadFile, deleteFile, getObjectSignedUrl } from './s3.js'
import Posts  from './models/posts.js'
import mongoose from "mongoose";
import * as bodyParser from "express";

const app = express()



const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

connectDB()

const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex')

app.get("/api/posts", async (req, res) => {
  try {
    const posts = await Posts.find().sort({created: -1}).exec();
    const postsWithImageUrl = [];
    for (let post of posts) {
      const newPost = { ...post._doc }; // Create a new object and copy the properties of the post
      newPost.imageUrl = await getObjectSignedUrl(newPost.imageName);
      console.log(newPost.imageUrl);
      postsWithImageUrl.push(newPost);
    }
    res.send(postsWithImageUrl);
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: 'Server error' });
  }
});

app.post('/api/posts', upload.single('image'), async (req, res) => {
  const file = req.file
  const caption = req.body.caption
  const imageName = generateFileName()

  const fileBuffer = await sharp(file.buffer)
      .resize({ height: 1920, width: 1080, fit: "contain" })
      .toBuffer()

  await uploadFile(fileBuffer, imageName, file.mimetype)

  const post = new Posts({
    _id: new mongoose.Types.ObjectId(),
    imageName,
    caption,
  });

  await post.save();

  res.status(201).send(post)
})

app.delete("/api/posts/:imageName", async (req, res) => {
  console.log(req.params.imageName);
  const imageName = req.params.imageName;
  const post = await Posts.findOne({ imageName: imageName });

  if (!post) {
    return res.status(404).send({ message: 'Post not found' });
  }

  await deleteFile(post.imageName);
  await post.deleteOne();

  res.send(post);
});




app.listen(8080, () => console.log("listening on port 8080"))
