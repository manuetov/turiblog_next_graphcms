import Head from 'next/head'
import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget} from '../components/index'
import { getPosts } from '../services' 

export default function Home({ posts }) {
  // console.log(posts)
  return (
    <div className="container mx-auto px-2">
      <Head>
        <title>Andalucía Turismo</title>
        <meta name="description" content="Andalucía turismo ocio gastronomia cultura playa arte"/>
        <meta property="og:title" content="Andalucía Turismo"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 gap-6">
        <div className="grid md:grid-cols-2 md:col-span-8 lg:grid-cols-3 lg:col-span-8 xl:grid-cols-3 xl:col-span-8 gap-6">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="md:col-span-4 lg:col-span-4 xl:col-span-4 col-span-1">
          <div className="lg:sticky md:sticky relative top-6">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(){
  const posts = (await getPosts()) || [] 

  return {
    props: { posts },
  }
}
