import Container from '../components/container'
import Image from 'next/image'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'
import { Section } from '../components/section'

type Props = {
  allPosts: Post[]
}

const Preview = ({ title, coverImage, youtubeUri }: Post) => {
  console.log(title, coverImage, youtubeUri)
  return (
    <div className="w-full">
      <div className="w-full">
        <img src={coverImage} />
      </div>
      <div className="text-white p-2 text-2xl font-medium">
      {title}
      </div>
    </div>
  )
}

const Index = ({ allPosts }: Props) => {

  const validPosts = allPosts.filter(post => (post.type || '').toLowerCase() === 'video')

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        < Section className="pt-48">
          <div className='grid gap-4 grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 bg-red'>
            {validPosts.length > 0 && (validPosts.map(post => (<Preview key={post.slug} {...post} />)))}
          </div>
        </ Section>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'type',
    'youtubeUri',
  ])

  return {
    props: { allPosts },
  }
}
