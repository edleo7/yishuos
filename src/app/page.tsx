import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            创新技术 <span className="text-primary">驱动未来</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px] mb-8">
            易术科技为企业提供全方位技术解决方案，助力企业数字化转型
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/products">了解我们的产品</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">联系我们</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            我们的优势
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 border rounded-lg bg-card">
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            我们的服务
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-[800px] mx-auto mb-12">
            为企业提供全方位的技术解决方案
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col p-6 border rounded-lg bg-card">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button variant="link" className="self-start p-0" asChild>
                  <Link href={service.link}>了解更多</Link>
                </Button>
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
            <Link href="/contact">立即联系</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "创新技术",
    description: "采用最新技术，为客户提供前沿解决方案",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  },
  {
    title: "专业团队",
    description: "拥有丰富经验的技术团队，提供专业服务",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    title: "定制服务",
    description: "根据客户需求，提供个性化的解决方案",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M12 2v2" />
        <path d="M12 22v-2" />
        <path d="m17 20.66-1-1.73" />
        <path d="M11 10.27 7 3.34" />
        <path d="m20.66 17-1.73-1" />
        <path d="m3.34 7 1.73 1" />
        <path d="M14 12h8" />
        <path d="M2 12h2" />
        <path d="m20.66 7-1.73 1" />
        <path d="m3.34 17 1.73-1" />
        <path d="m17 3.34-1 1.73" />
        <path d="m7 20.66 1-1.73" />
      </svg>
    )
  },
];

const services = [
  {
    title: "软件开发",
    description: "提供定制化软件开发服务，包括Web应用、移动应用和企业级解决方案。",
    link: "/products#software-development"
  },
  {
    title: "云服务",
    description: "提供云基础设施规划、部署和管理服务，助力企业实现云转型。",
    link: "/products#cloud-services"
  },
  {
    title: "数据分析",
    description: "利用先进技术帮助企业收集、分析和可视化数据，为决策提供支持。",
    link: "/products#data-analytics"
  },
  {
    title: "AI解决方案",
    description: "开发和部署人工智能解决方案，帮助企业实现流程自动化和智能决策。",
    link: "/products#ai-solutions"
  }
];
