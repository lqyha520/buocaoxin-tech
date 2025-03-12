'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiUsers, FiAward, FiTrendingUp, FiGlobe } from 'react-icons/fi'

const stats = [
  { id: 1, label: '服务客户', value: '500+', icon: <FiUsers /> },
  { id: 2, label: '行业经验', value: '10年+', icon: <FiAward /> },
  { id: 3, label: '年增长率', value: '35%', icon: <FiTrendingUp /> },
  { id: 4, label: '覆盖城市', value: '50+', icon: <FiGlobe /> },
]

const AboutSection = () => {
  return (
    <section className="section bg-light" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">关于我们</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">布草芯科技 - 智能布草管理领导者</h3>
            <p className="text-gray-600 mb-4">
              布草芯科技成立于2013年，是国内领先的智能布草管理解决方案提供商。我们专注于将RFID技术应用于布草管理领域，为酒店、医院、洗涤厂等行业客户提供全方位的智能化管理服务。
            </p>
            <p className="text-gray-600 mb-4">
              经过十年的发展，布草芯科技已服务超过500家企业客户，产品覆盖全国50多个城市。我们拥有一支由RFID技术专家、软件工程师和行业顾问组成的专业团队，致力于不断创新，为客户创造更大价值。
            </p>
            <p className="text-gray-600 mb-6">
              我们的使命是通过技术创新，让布草管理更简单、更高效、更可靠，帮助客户降低运营成本，提升服务品质。
            </p>
            <Link href="/about" className="btn btn-primary">
              了解更多
            </Link>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[350px] w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="布草芯科技团队"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-primary text-3xl mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection 