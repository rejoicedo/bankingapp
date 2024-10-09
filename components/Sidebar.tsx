import Link from 'next/link'
import React from 'react'

const Sidebar = ({ user }: SiderbarProps) => {
  return (
    <section className="sidebar">
        <nav className="flex flex-col gap-4">
            <Link href="/" className='' />
        </nav>
    </section>
  )
}

export default Sidebar