import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

import { grpahCMSImageLoader } from '../util'

const PostCard = ({ post }) => {
  // console.log(post)

  return (
    <div className="mb-8 rounded-lg bg-white pb-12 shadow-lg lg:p-2">
      <div className="relative mb-6 overflow-hidden pb-60 shadow-md">
        <img
          src={post.featuredImage.url}
          alt="{post.featuredImage.url}"
          className="absolute h-60 w-full rounded-t-lg object-cover object-top shadow-lg lg:rounded-lg"
        />
      </div>
      <h1 className="crusor-pointer mb-8 text-center text-lg font-semibold transition duration-500 hover:text-green-600">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="mb-8 block w-full flex-col items-center justify-center text-center lg:flex">
        <div className="mb-4 mr-8 flex w-full items-center justify-center lg:mb-0 lg:w-auto">
          <Image
            unoptimized
            loader={grpahCMSImageLoader}
            alt={post.author.name}
            height="50px"
            width="50px"
            className="rounded-full align-middle"
            src={post.author.photo.url}
          />
          <p className="ml-2 inline pr-2 align-middle text-xs text-gray-700">
            {post.author.name}
          </p>
          <div className="font-medium text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 inline h-6 w-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-xs">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </span>
          </div>
        </div>
        <p className="mb-8 pt-6 text-center text-sm leading-relaxed tracking-wide text-gray-700">
          {post.excerpt}
        </p>
        <div className="text-center">
          <Link href={`/post/${post.slug}`}>
            <span className="inline-block transform cursor-pointer rounded-full bg-green-600 px-4 py-1 text-sm text-white transition duration-500 hover:-translate-y-1">
              Continua leyendo
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default PostCard
