import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">联系我们</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            如果您对我们的产品和服务有任何疑问，或者想了解更多信息，请随时与我们联系。
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
              <FaPhone className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">电话咨询</h3>
            <p className="text-gray-600">+86 400-123-4567</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
              <FaEnvelope className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">电子邮件</h3>
            <p className="text-gray-600">info@buocaoxin-tech.com</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">公司地址</h3>
            <p className="text-gray-600">上海市浦东新区张江高科技园区</p>
          </div>
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6">发送消息</h3>
          <form>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">姓名</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="您的姓名"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">邮箱</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="您的邮箱地址"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 mb-2">主题</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="消息主题"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">消息内容</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="请输入您的消息..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                发送消息
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 