import { useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false)

  const links = [
    {
      label: 'Início',
      url: '#index',
    },
    {
      label: 'Funcionalidades',
      url: '#project',
    },
    {
      label: 'FAQ',
      url: '#faq',
    },
    {
      label: 'Equipe',
      url: '#team',
    },
    {
      label: 'Blog',
      url: '#blog',
    },
  ]

  return (
    <nav className='bg-black100 fixed top-0 left-0 w-full z-50'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex-shrink-0 flex items-center'>
            <a
              href='/'
              className='text-white hover:text-te_blue transition-all font-[Nunito Sans] font-black text-xl'>
              Table Ease
            </a>
          </div>
          <div className='hidden md:flex flex-1 justify-center'>
            <div className='ml-10 flex items-center space-x-4'>
              {links.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  className='text-white hover:text-te_blue transition-all font-[Montserrat]'>
                  {item.label}
                </a>
              ))}
            </div>
            <div></div>
          </div>
          <div>

          </div>
          
        </div>
      </div>

      <div className={`${open ? 'block' : 'hidden'} md:hidden`}>
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          {links.map((item) => (
            <a
              key={item.url}
              href={item.url}
              className='block text-white hover:text-orange font-Montserrat py-4 border-t-2 border-white'>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Header
