"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟表单提交
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 提交成功后跳转到感谢页面
    router.push("/contact/thanks");
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">联系我们</h1>
            <p className="text-xl text-muted-foreground">
              无论您有任何疑问或需求，我们都随时为您提供支持和帮助
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">联系信息</h2>
              <p className="text-muted-foreground mb-8">
                您可以通过以下方式联系我们，我们的专业团队将尽快回复您的咨询
              </p>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{info.title}</h3>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="font-semibold text-lg mb-4">关注我们</h3>
                <div className="flex gap-4">
                  {socialMedia.map((social, index) => (
                    <Link
                      href={social.link}
                      key={index}
                      className="w-10 h-10 flex items-center justify-center bg-muted rounded-full hover:bg-primary/10 transition-colors"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* 微信二维码 */}
            <div className="mt-12 border border-border rounded-lg p-6 bg-card">
              <h3 className="font-semibold text-lg mb-4 text-center">扫码关注我们的微信</h3>
              <div className="flex justify-center mb-4">
                <div className="w-48 h-48 bg-white p-3 rounded-md flex items-center justify-center">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">微信二维码</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-center text-muted-foreground">
                关注我们的微信公众号，获取最新资讯和技术分享
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">发送消息</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name">姓名</Label>
                  <Input 
                    id="name" 
                    name="name"
                    placeholder="请输入您的姓名" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">邮箱</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="请输入您的邮箱" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">公司名称</Label>
                  <Input 
                    id="company" 
                    name="company"
                    placeholder="请输入您的公司名称" 
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">留言内容</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="请输入您的留言内容" 
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "提交中..." : "发送消息"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">办公地点</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-card border rounded-lg overflow-hidden">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-500">办公室图片</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{office.city}</h3>
                  <p className="text-muted-foreground mb-4">{office.address}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">{office.phone}</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#">查看地图</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">常见问题</h2>
          <p className="text-xl text-muted-foreground text-center max-w-[800px] mx-auto mb-12">
            以下是我们客户经常问到的一些问题，希望对您有所帮助
          </p>
          <div className="max-w-[800px] mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            准备开始您的项目？
          </h2>
          <p className="text-xl max-w-[600px] mx-auto mb-8 text-primary-foreground/80">
            联系我们，讨论您的需求，获取专业解决方案
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="tel:+8612345678910">立即拨打电话</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

const contactInfo = [
  {
    title: "电子邮件",
    content: "contact@yishutech.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  },
  {
    title: "电话",
    content: "+86 123 4567 8910",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  },
  {
    title: "地址",
    content: "北京市海淀区科技园路88号",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  },
  {
    title: "工作时间",
    content: "周一至周五 9:00 - 18:00",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  }
];

const socialMedia = [
  {
    name: "微信",
    link: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
        <path d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
        <path d="M16 22c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-4Z" />
      </svg>
    )
  },
  {
    name: "微博",
    link: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    )
  },
  {
    name: "领英",
    link: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }
];

const offices = [
  {
    city: "北京总部",
    address: "北京市海淀区科技园路88号智能大厦15层",
    phone: "+86 123 4567 8910"
  },
  {
    city: "上海分公司",
    address: "上海市浦东新区张江高科技园区博云路2号6栋",
    phone: "+86 21 8765 4321"
  },
  {
    city: "深圳分公司",
    address: "深圳市南山区科技园南区高新南七道数字大厦8层",
    phone: "+86 755 8901 2345"
  }
];

const faqs = [
  {
    question: "你们提供哪些服务？",
    answer: "我们提供软件开发、云服务、数据分析和AI解决方案等多种技术服务，可以根据客户需求提供定制化解决方案。"
  },
  {
    question: "如何开始与贵公司合作？",
    answer: "您可以通过本页面的联系表单、电话或电子邮件与我们联系，我们的客户经理将在24小时内回复您，并安排后续沟通。"
  },
  {
    question: "项目开发周期通常是多久？",
    answer: "项目周期取决于需求复杂度和规模，小型项目通常需要1-3个月，中型项目3-6个月，大型项目可能需要6个月以上。我们会在项目启动前提供详细的时间规划。"
  },
  {
    question: "贵公司如何保障项目质量？",
    answer: "我们拥有严格的质量管理流程，包括需求分析、设计评审、代码审查、自动化测试和用户验收测试等环节，确保交付高质量的产品。"
  }
]; 