import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { VideoJS } from '../components/videojs'

const Index = () => {

  const videoJsOptions = {
    preload: true,
    autoplay: true,
    controls: false,
    responsive: true,
    fluid: true,
    loop: true,
    muted: true,
    techOrder: ['youtube'],
    sources: [{
      src: 'https://www.youtube.com/watch?v=FpR5v5c4a-c',
      type: 'video/youtube'
    }],
    youtube: {
      customVars: {
        wmode: "transparent",
        iv_load_policy: 3,
        modestbranding: 0,
      }
    }
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <div id='hero' className='relative h-screen overflow-hidden'>
          <div className="videoContainer">
            <VideoJS options={videoJsOptions} />
          </div>
          <div className='absolute inset-0 z-10'></div>
        </div>
      </Layout>
    </>
  )
}

export default Index
