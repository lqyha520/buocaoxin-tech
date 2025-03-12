'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiCheckCircle } from 'react-icons/fi'

const solutions = [
  {
    id: 1,
    title: '酒店布草管理',
    description: '为星级酒店提供从采购、入库、发放到洗涤、报废的全流程布草管理解决方案，提高运营效率，降低布草损耗。',
    benefits: [
      '实时监控布草库存和流转状态',
      '自动化盘点，节省人力成本',
      '精确统计布草使用寿命和损耗率',
      '防止布草丢失，降低采购成本'
    ],
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    link: '/solutions/hotel'
  },
  {
    id: 2,
    title: '医院布草管理',
    description: '针对医院特殊需求，提供符合医疗卫生标准的布草管理方案，确保布草清洁卫生，防止交叉感染。',
    benefits: [
      '严格分区管理，防止交叉感染',
      '追踪布草消毒和灭菌流程',
      '自动预警布草使用次数超限',
      '提供合规性报告，满足卫生监管要求'
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    link: '/solutions/hospital'
  },
  {
    id: 3,
    title: '洗涤厂管理',
    description: '为专业洗涤厂提供布草收发、分拣、洗涤、质检全流程管理系统，提高处理效率，保证洗涤质量。',
    benefits: [
      '自动化收发和分拣流程',
      '精确记录每批布草的洗涤次数',
      '质量问题追溯和统计分析',
      '客户布草分类管理，提高服务质量'
    ],
    image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    link: '/solutions/laundry'
  }
]

const SolutionSection = () => {
  return (
    <section className="section bg-white" id="solutions">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">行业解决方案</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
            布草芯科技根据不同行业特点，提供定制化的智能布草管理解决方案，满足各类客户的特定需求。
          </p>
        </motion.div>

        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <motion.div 
              key={solution.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="relative h-[300px] lg:h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-primary">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                <h4 className="font-bold text-lg mb-3">主要优势：</h4>
                <ul className="space-y-2 mb-8">
                  {solution.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href={solution.link} className="btn btn-primary">
                  了解详情
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionSection 