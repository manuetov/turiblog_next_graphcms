import Head from 'next/head'
import { FeaturedPosts } from '../sections/index'
import { PostCard, Categories, PostWidget } from '../components/index'
import { getPosts } from '../services'

export default function Home({ posts }) {
  // console.log(posts)
  return (
    <div className="container mx-auto px-2">
      <html lang="es">
        <Head>
          <title>Andalucía Turismo</title>
          <meta
            name="description"
            content="Andalucía turismo ocio gastronomia cultura playa arte"
          />
          <meta property="og:title" content="Andalucía Turismo" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </html>
      <FeaturedPosts />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12">
        <div className="grid gap-6 md:col-span-8 md:grid-cols-2 lg:col-span-8 lg:grid-cols-3 xl:col-span-8 xl:grid-cols-3">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 md:col-span-4 lg:col-span-4 xl:col-span-4">
          <div className="relative top-6 md:sticky lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
    revalidate: 10,
  }
}
