'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiTag, FiDatabase, FiSmartphone, FiBarChart2 } from 'react-icons/fi'

const products = [
  {
    id: 1,
    title: 'RFID智能标签',
    description: '耐高温、耐洗涤的RFID标签，可缝制在布草内部，使每件布草拥有唯一身份标识。',
    icon: <FiTag size={40} />,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    link: '/products/rfid-tags'
  },
  {
    id: 2,
    title: '智能盘点系统',
    description: '通过手持设备或固定式读取器，实现布草快速盘点，提高工作效率，减少人为错误。',
    icon: <FiDatabase size={40} />,
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    link: '/products/inventory-system'
  },
  {
    id: 3,
    title: '移动管理应用',
    description: '支持iOS和Android的移动应用，让管理人员随时随地查看布草状态、盘点记录和统计数据。',
    icon: <FiSmartphone size={40} />,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    link: '/products/mobile-app'
  },
  {
    id: 4,
    title: '数据分析平台',
    description: '强大的数据分析工具，提供布草使用寿命、损耗率、周转率等关键指标，辅助决策。',
    icon: <FiBarChart2 size={40} />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    link: '/products/data-analytics'
  }
]

const ProductSection = () => {
  return (
    <section className="section bg-light" id="products">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">我们的产品</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            布草芯科技提供全套智能布草管理解决方案，从RFID标签到数据分析平台，覆盖布草管理全生命周期。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={product.link}>
                <div className="card h-full flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="text-primary mb-4">{product.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                    <div className="text-primary font-medium">了解更多 →</div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductSection 