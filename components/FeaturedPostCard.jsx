import React from 'react'
import moment from 'moment'
// import Image from 'next/image';
import Link from 'next/link'

const FeaturedPostCard = ({ post }) => {
  // console.log(post)

  return (
    <div className="relative h-48">
      <div
        className="absolute inline-block h-48 w-full rounded-lg bg-cover bg-center bg-no-repeat shadow-md"
        style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
      />
      <div className="absolute h-48 w-full rounded-lg bg-gradient-to-b from-gray-400 via-gray-700 to-black bg-center opacity-50" />
      <div className="absolute flex h-full w-full flex-col items-center justify-center rounded-lg p-4">
        <p className="text-shadow mb-4 text-xs font-semibold text-white">
          {moment(post.createdAt).format('MMM DD, YYYY')}
        </p>
        <p className="text-shadow mb-4 text-center text-lg font-semibold text-white">
          {post.title}
        </p>
        {/* <div className="flex items-center absolute bottom-5 w-full justify-center">
        <Image
          unoptimized
          alt={post.author.name}
          height="30px"
          width="30px"
          className="align-middle drop-shadow-lg rounded-full"
          src={post.author.photo.url}
        />
        <p className="inline align-middle text-white text-shadow ml-2 font-medium">{post.author.name}</p>
      </div> */}
      </div>
      <Link href={`/post/${post.slug}`}>
        <span className="absolute h-full w-full cursor-pointer" />
      </Link>
    </div>
  )
}
export default FeaturedPostCard
