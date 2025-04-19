import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "产品与服务 | 易术科技",
  description: "探索易术科技提供的创新技术解决方案，包括软件开发、云服务、数据分析和人工智能解决方案。",
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">我们的产品与服务</h1>
            <p className="text-xl text-muted-foreground">
              易术科技提供全方位的技术解决方案，帮助企业实现数字化转型，提高效率，创造价值
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">全方位解决方案</h2>
              <p className="text-muted-foreground">
                易术科技提供的解决方案涵盖软件开发、云服务、数据分析和人工智能等多个领域，满足企业在数字化转型过程中的各种需求
              </p>
              <p className="text-muted-foreground">
                我们的团队拥有丰富的行业经验和技术专长，能够为不同规模和行业的企业提供定制化的解决方案
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg flex items-center justify-center h-[300px]">
              <span className="text-gray-500">解决方案图示</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Products */}
      <section id="software-development" className="py-16 md:py-24 bg-muted">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">我们的核心产品</h2>
          <div className="space-y-16">
            {products.map((product, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className={`order-2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="bg-gray-200 rounded-lg flex items-center justify-center h-[250px]">
                    <span className="text-gray-500">{product.title}产品图示</span>
                  </div>
                </div>
                <div className={`space-y-4 order-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <h3 id={product.id} className="text-2xl font-bold">{product.title}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary flex-shrink-0">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">成功案例</h2>
          <p className="text-xl text-muted-foreground text-center max-w-[800px] mx-auto mb-12">
            我们已经成功为多家企业提供了技术解决方案，帮助他们实现业务增长
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((item, index) => (
              <div key={index} className="border rounded-lg overflow-hidden bg-card">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-500">案例图片</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.category}</p>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="#">查看详情</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">服务流程</h2>
          <p className="text-xl text-muted-foreground text-center max-w-[800px] mx-auto mb-12">
            我们的专业团队将全程陪伴您，从需求分析到产品交付
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative bg-card border rounded-lg p-6">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              准备开始您的项目？
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              联系我们，讨论您的需求，获取专业解决方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">咨询服务</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#">下载产品手册</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const products = [
  {
    id: "software-development",
    title: "软件开发",
    description: "提供定制化软件开发服务，包括Web应用、移动应用和企业级解决方案，满足企业各种业务需求。",
    features: [
      "Web应用开发",
      "移动应用开发",
      "企业管理系统",
      "电子商务平台",
      "定制化解决方案"
    ]
  },
  {
    id: "cloud-services",
    title: "云服务",
    description: "提供云基础设施规划、部署和管理服务，帮助企业实现业务上云，提高系统可靠性和扩展性。",
    features: [
      "云架构设计",
      "云迁移服务",
      "云安全解决方案",
      "混合云部署",
      "云资源优化"
    ]
  },
  {
    id: "data-analytics",
    title: "数据分析",
    description: "利用先进技术帮助企业收集、处理和分析数据，提供可视化报表和洞察，支持业务决策。",
    features: [
      "数据采集与处理",
      "数据可视化",
      "预测分析",
      "商业智能解决方案",
      "数据驱动决策支持"
    ]
  },
  {
    id: "ai-solutions",
    title: "AI解决方案",
    description: "开发和部署人工智能解决方案，帮助企业实现流程自动化、智能决策和创新应用。",
    features: [
      "自然语言处理",
      "计算机视觉",
      "智能推荐系统",
      "智能客服",
      "预测性维护"
    ]
  }
];

const cases = [
  {
    title: "某大型零售企业数字化转型",
    category: "软件开发 | 数据分析",
    description: "帮助客户构建全渠道电商平台，整合线上线下数据，提升用户体验和销售业绩。"
  },
  {
    title: "某金融机构云迁移项目",
    category: "云服务 | 安全解决方案",
    description: "为客户设计和实施安全可靠的混合云架构，保障业务连续性和数据安全。"
  },
  {
    title: "某制造企业智能工厂解决方案",
    category: "AI解决方案 | 数据分析",
    description: "通过AI和物联网技术，帮助客户实现生产过程智能化，提高生产效率和产品质量。"
  }
];

const process = [
  {
    title: "需求分析",
    description: "深入了解客户业务需求，分析现有系统和流程，确定项目目标和范围。"
  },
  {
    title: "方案设计",
    description: "基于需求分析，设计技术架构和解决方案，制定项目计划和时间表。"
  },
  {
    title: "开发实施",
    description: "按照计划进行开发和测试，确保产品质量和进度，定期向客户汇报。"
  },
  {
    title: "交付与支持",
    description: "产品交付、部署和上线，提供技术培训和长期维护支持。"
  }
]; 