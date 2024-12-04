# Web Application Hosting on AWS

## Overview

This project involves designing and implementing a simple web application using a JavaScript stack of your choice (e.g., MEAN, MERN, or a similar stack). The web application will perform CRUD (Create, Read, Update, Delete) operations on a dataset of interest and will be hosted on AWS EC2 instances with various AWS services including **DynamoDB**, **S3**, and **AWS SDK** for JavaScript integration. The web application is designed for high availability, scalability, and efficient use of AWS cloud services.

### Key Features

- **JavaScript Stack**: Use any modern JavaScript stack (e.g., **MERN**, **MEAN**, etc.). Replace MongoDB with **DynamoDB** for data storage.
- **CRUD Operations**: Allow users to perform CRUD operations on a dataset of interest.
- **High Availability Architecture**: Deploy the application across multiple **EC2 instances** in different **Availability Zones** for fault tolerance. Use **CloudFront** for faster content delivery.
- **AWS SDK Integration**: Use the **AWS SDK** for JavaScript to interact programmatically with various AWS services from the backend.
- **DynamoDB Integration**: Use **DynamoDB** to store and manage the dataset. The table will contain at least three attributes.
- **S3 Image Upload**: Allow users to upload images for items. Store the images in an **S3 bucket**, and associate them with the corresponding item in the **DynamoDB** table.
- **Lambda Function**: Create a **Lambda function** that triggers when an item is added, responsible for resizing uploaded images in an **S3 bucket**.

## System Architecture

The architecture for the project will use a combination of AWS services for high availability, performance, and scalability. Below is an overview of the major components used:

1. **EC2 Instances**: Multiple EC2 instances in different **Availability Zones** will host the web application to provide redundancy and high availability.
2. **Elastic Load Balancer (ELB)**: An **ELB** will distribute incoming requests across multiple EC2 instances for improved reliability.
3. **CloudFront**: **CloudFront** is used to ensure faster delivery of the application content across regions.
4. **DynamoDB**: A **NoSQL database** that stores data related to items in the application. The table has at least three attributes for storing product details.
5. **S3 Buckets**: Images uploaded by users are stored in **S3** buckets. Images can be updated or deleted along with the corresponding item.
6. **Lambda Function**: A serverless function is triggered when a new item is added, resizing uploaded images and saving the resized versions in a separate bucket if needed.

## Technology Stack

- **Frontend**: Use JavaScript-based frontend frameworks, such as **React** (in the **MERN** stack) or **Angular** (in the **MEAN** stack).
- **Backend**: **Node.js** and **Express.js** are used for handling requests and providing the API endpoints.
- **Database**: **DynamoDB** for storing application data.
- **AWS Services**:
  - **EC2**: Hosting the web application backend and frontend.
  - **Elastic Load Balancer (ELB)**: Distributes incoming requests to multiple EC2 instances.
  - **CloudFront**: Content Delivery Network (CDN) for faster load times.
  - **S3**: Storage for user-uploaded images.
  - **Lambda**: Image resizing and processing upon item creation.
  - **AWS SDK**: Used in the backend for interacting with AWS services.

## Features Walkthrough

### 1. CRUD Operations
- Users can **create**, **read**, **update**, and **delete** records related to the chosen dataset.
- The dataset could be anything of interest, such as product listings, blog posts, or other items.
- Each item can have an associated image, which is uploaded via the application and stored in **S3**.

### 2. Image Upload & Management
- Users can upload images when creating a new item.
- Images are stored in **S3**, and their URLs are saved in **DynamoDB** to link them to the relevant item.
- Users can also update images, and the system retains both old and new versions in the **S3 bucket**.
- When an item is deleted, the associated image is also deleted from the **S3 bucket**.

### 3. Lambda Function
- A **Lambda function** is triggered whenever a new item is created.
- This function processes the uploaded image by resizing it and storing the resized version in a separate **S3 bucket** if needed.

### 4. High Availability & Scalability
- The application is deployed in multiple **Availability Zones** to ensure high availability.
- **Elastic Load Balancer (ELB)** distributes traffic across EC2 instances.
- **CloudFront** ensures that the application is served quickly to users, regardless of their geographic location.

## Getting Started

### Prerequisites
- **Node.js** (v14 or later)
- **AWS Account** with access to EC2, S3, DynamoDB, Lambda, and CloudFront
- **AWS CLI** installed and configured on your local machine

### Installation Steps

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/YourUsername/aws-web-app-hosting.git
    cd aws-web-app-hosting
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Set Up Environment Variables**:
    - Create a `.env` file in the root directory with the required environment variables, such as AWS credentials, DynamoDB table name, S3 bucket name, etc.

4. **Deploy to AWS**:
    - **EC2 Instances**: Create and configure EC2 instances.
    - **Elastic Load Balancer**: Set up ELB to distribute requests across EC2 instances.
    - **CloudFront**: Configure CloudFront for fast content delivery.
    - **DynamoDB**: Create a DynamoDB table with the required attributes.
    - **S3 Buckets**: Create buckets for storing uploaded images and resized images.
    - **Lambda Function**: Deploy a Lambda function to handle image resizing.

5. **Run the Application**:
    - SSH into your EC2 instances and run:
    ```bash
    npm start
    ```

### Running Locally
- To test the application locally before deploying to AWS:
    ```bash
    npm run dev
    ```

## AWS Architecture Diagram

Ensure you create a detailed architecture diagram illustrating the high availability setup using AWS standard icons. This can be drawn using PowerPoint or a tool like **Lucidchart**.

## Deliverables
- **Architecture Diagram**: Use AWS standard icons to illustrate the high availability setup.
- **GitHub Repository**: Source code of the web application, available at [GitHub Repository](https://github.com/YourUsername/aws-web-app-hosting).
- **Presentation/Demo**: Highlight the functionality and features of the web application.
- **DNS of Deployed App**: Link to your deployed application hosted on **AWS**.

## Submission
- Submit the required form ([Submission Form](https://forms.gle/wVmGuUHJMAURbz2j7)) with the following details:
  - GitHub repository link of the application.
  - DNS of your ELB.
  - Domain name of your CloudFront distribution.
  - Private IPs of your EC2 instances.
  - Attach the architecture diagram and presentation/demo.

### Important Notes
- **Do not terminate any instances or resources** after submission; simply stop them to avoid data loss.
- Be mindful of **AWS Free Tier limitations** to avoid incurring additional costs. Monitor resource usage and stop instances when not in use.

## Evaluation Criteria
- **Adherence to Requirements**: Meeting all project requirements and guidelines.
- **Functionality & Usability**: The web application should be fully functional and user-friendly.
- **Architecture Design**: Quality of the architecture, including high availability and use of AWS services.
- **AWS Integration**: Effective use of **AWS SDK** and other services.
- **Documentation & Presentation**: Clarity and thoroughness of both the documentation and presentation.
