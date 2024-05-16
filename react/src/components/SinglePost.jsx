import { UserIcon, TrashIcon } from '@heroicons/react/solid'

export default function SinglePost({className, post,  deletePostClicked}) {
  const {caption, imageUrl} = post

  return (
      <div className={className + ' outline-1'} style={{width:650}}>

        <div className="flex flex-col space-y-2">

          <div className="flex flex-row items-center space-x-4 cursor-pointer active:opacity-80">
            <UserIcon className='cursor-pointer hover:text-gray-900 active:text-gray-700 h-14 w-14 text-gray-700' />
            <p className="text-lg  hover:underline">username</p>
          </div>

          <p className="text-base">{caption}</p>

          <div className="flex flex-row items-end space-x-4 justify-center">
            <img className="rounded" width="430" height="768" src={imageUrl}></img>

            <div className='flex flex-col space-y-4'>
              <div className='flex flex-col items-center' onClick={() => deletePostClicked({imageName:post.imageName})}>
                <TrashIcon className='cursor-pointer hover:text-gray-900 active:text-gray-700 h-14 w-14 text-gray-700' />
              </div>
            </div>
          </div>

        </div>
      </div>
  )
}
