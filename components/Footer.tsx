'use client'

import Link from 'next/link'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">布草芯科技</h3>
            <p className="text-gray-300 mb-4">
              致力于为酒店、医院等行业提供智能布草管理解决方案，通过RFID技术实现布草全生命周期管理。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FiGithub size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white">
                  产品
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-300 hover:text-white">
                  解决方案
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">解决方案</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/hotel" className="text-gray-300 hover:text-white">
                  酒店布草管理
                </Link>
              </li>
              <li>
                <Link href="/solutions/hospital" className="text-gray-300 hover:text-white">
                  医院布草管理
                </Link>
              </li>
              <li>
                <Link href="/solutions/laundry" className="text-gray-300 hover:text-white">
                  洗涤厂管理
                </Link>
              </li>
              <li>
                <Link href="/solutions/custom" className="text-gray-300 hover:text-white">
                  定制化解决方案
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">联系我们</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FiMapPin className="mt-1 flex-shrink-0" />
                <span>上海市浦东新区张江高科技园区科苑路88号</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone />
                <span>400-888-8888</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail />
                <span>contact@buocaoxin.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} 布草芯科技. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 