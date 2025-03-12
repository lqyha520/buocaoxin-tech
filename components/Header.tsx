'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu, FiX } from 'react-icons/fi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
              布
            </div>
          </div>
          <span className="text-xl font-bold text-dark">布草芯科技</span>
        </Link>

        {/* 桌面导航 */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-dark hover:text-primary font-medium">
            首页
          </Link>
          <Link href="/products" className="text-dark hover:text-primary font-medium">
            产品
          </Link>
          <Link href="/solutions" className="text-dark hover:text-primary font-medium">
            解决方案
          </Link>
          <Link href="/about" className="text-dark hover:text-primary font-medium">
            关于我们
          </Link>
          <Link href="/contact" className="text-dark hover:text-primary font-medium">
            联系我们
          </Link>
        </nav>

        {/* 移动端菜单按钮 */}
        <button className="md:hidden text-dark" onClick={toggleMenu}>
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* 移动端导航菜单 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-dark hover:text-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              首页
            </Link>
            <Link 
              href="/products" 
              className="text-dark hover:text-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              产品
            </Link>
            <Link 
              href="/solutions" 
              className="text-dark hover:text-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              解决方案
            </Link>
            <Link 
              href="/about" 
              className="text-dark hover:text-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              关于我们
            </Link>
            <Link 
              href="/contact" 
              className="text-dark hover:text-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              联系我们
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header 