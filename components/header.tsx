import Link from 'next/link'

const Header = () => {
  return (
    <div className="fixed w-full overflow-hidden z-50">
      <div className="flex items-center justify-between top-0 left-0 text-white p-10 h-full">
        <div className='text-5xl'>
          <Link passHref href='/'>
            <a className='font-medium'>
              caos films
            </a>
          </Link>
        </div>
        <div className='flex gap-8 text-3xl'>
          <Link passHref href='/video'>
            <a>
              video
            </a>
          </Link>
          <Link passHref href='/photo'>
            <a>
              photo
            </a>
          </Link>
          <Link passHref href='/contact'>
            <a>
              contact
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
