import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '布草芯科技 - 智能布草解决方案提供商',
  description: '布草芯科技致力于为酒店、医院等行业提供智能布草管理解决方案，通过RFID技术实现布草全生命周期管理。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
} 