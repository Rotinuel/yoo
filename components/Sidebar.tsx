"use client"
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Footer from './Footer'

const Sidebar = ({user}: SiderbarProps) => {
    const pathname = usePathname();
  return (
    <section className='sidebar'>
        <nav className="flex flex-col gap-4">
            <Link className="mb-8 cursor-pointer flex items-center gap-2" href="/">
                <Image 
                    src="/icons/logo.svg"
                    width={34}
                    height={34}
                    alt='yoo logo'
                    className='size-[24px] max-xl:size-14'
                />
                <h1 className="sidebar-logo">Yoo</h1>
            </Link>
            {sidebarLinks.map((item)=>{
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                return (
                    <Link className={cn('sidebar-link', {'bg-bank-gradient': isActive})} href={item.route} key={item.label}>
                        <div className="relative size-6">
                            <Image src={item.imgURL} alt={item.label} fill className={cn({'brightness-[3] invert-0': isActive})}/>
                        </div>
                        <p className={cn('sidebar-label', {'!text-white' : isActive})}>{item.label}</p>
                    </Link>
                )
            })}
            USER
        </nav>
        <Footer user={user} type="desktop"/>
    </section>
  )
}

export default Sidebar