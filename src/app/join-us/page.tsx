import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "加入我们 | 易术科技",
  description: "探索易术科技的职业机会，加入我们充满活力的团队，发挥您的专业技能，共同成长。",
};

export default function JoinUsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">加入我们</h1>
            <p className="text-xl text-muted-foreground">
              成为易术科技团队的一员，与充满激情的专业人士一起工作，发挥您的才能，共同成长
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">为什么选择易术科技</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 border rounded-lg bg-card">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">公司文化</h2>
              <p className="text-muted-foreground mb-6">
                在易术科技，我们注重创造一个开放、协作、创新的工作环境，让每一位员工都能发挥所长，实现个人价值
              </p>
              <ul className="space-y-4">
                {culturePoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center bg-primary rounded-full flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">{point.title}</h4>
                      <p className="text-muted-foreground">{point.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-200 h-[400px] rounded-lg flex items-center justify-center">
              <span className="text-gray-500">公司文化图片</span>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">职位空缺</h2>
          <p className="text-xl text-muted-foreground text-center max-w-[800px] mx-auto mb-12">
            探索我们当前的职位空缺，加入我们的团队
          </p>
          <div className="space-y-6">
            {positions.map((position, index) => (
              <div key={index} className="border rounded-lg p-6 bg-card">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{position.title}</h3>
                    <p className="text-muted-foreground">{position.department} | {position.location}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Button asChild>
                      <Link href="#">申请职位</Link>
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{position.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">要求：</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {position.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">申请流程</h2>
          <p className="text-xl text-muted-foreground text-center max-w-[800px] mx-auto mb-12">
            了解我们的招聘流程，为您的申请做好准备
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {applicationSteps.map((step, index) => (
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
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            准备好加入我们了吗？
          </h2>
          <p className="text-xl max-w-[600px] mx-auto mb-8 text-primary-foreground/80">
            探索职业机会，发挥您的才能，与我们一起创造未来
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">联系我们</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

const benefits = [
  {
    title: "专业成长",
    description: "提供丰富的学习和发展机会，包括技术培训、行业会议和内部分享",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    )
  },
  {
    title: "创新环境",
    description: "鼓励创新思维和尝试新技术，支持员工提出和实现创新想法",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M9.663 17h4.673M12 12v5M12 3v2M3.34 7l1.732 1M3.34 17l1.732-1M20.66 7l-1.732 1M20.66 17l-1.732-1M12 21.5a4 4 0 0 0 4-4h-8a4 4 0 0 0 4 4ZM8.4 7.794a4 4 0 1 0 7.2 0C15.187 5.985 12 3 12 3s-3.187 2.985-3.6 4.794Z"/>
      </svg>
    )
  },
  {
    title: "工作生活平衡",
    description: "灵活的工作安排，关注员工身心健康，提供各种福利和活动",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  },
];

const culturePoints = [
  {
    title: "开放透明",
    description: "我们崇尚开放透明的沟通，鼓励员工分享想法和反馈，共同决策和成长。"
  },
  {
    title: "协作共赢",
    description: "团队协作是我们的核心价值，我们相信通过合作可以创造更大的价值。"
  },
  {
    title: "持续学习",
    description: "我们鼓励持续学习和知识分享，定期举办技术分享和培训活动。"
  },
  {
    title: "尊重多元",
    description: "我们尊重每个人的独特性，创造一个包容、多元的工作环境。"
  }
];

const positions = [
  {
    title: "高级前端开发工程师",
    department: "研发部",
    location: "北京",
    description: "负责公司产品的前端开发工作，参与产品架构设计和技术选型，保证代码质量和性能。",
    requirements: [
      "3年以上前端开发经验",
      "精通React、Vue等前端框架",
      "熟悉现代前端工具链和开发流程",
      "具有良好的团队协作和沟通能力"
    ]
  },
  {
    title: "后端开发工程师",
    department: "研发部",
    location: "上海",
    description: "负责公司产品的后端服务开发，设计和实现高性能、可扩展的API和服务。",
    requirements: [
      "2年以上后端开发经验",
      "精通Java、Python或Go等编程语言",
      "熟悉分布式系统和微服务架构",
      "具有良好的问题解决能力"
    ]
  },
  {
    title: "产品经理",
    department: "产品部",
    location: "深圳",
    description: "负责产品规划和设计，收集和分析用户需求，制定产品路线图，协调开发团队实现产品目标。",
    requirements: [
      "2年以上产品经理经验",
      "具有良好的产品思维和用户体验意识",
      "优秀的沟通协调能力和项目管理能力",
      "熟悉软件开发流程和方法"
    ]
  }
];

const applicationSteps = [
  {
    title: "提交申请",
    description: "通过我们的官网或招聘平台提交您的简历和申请材料。"
  },
  {
    title: "初步筛选",
    description: "我们的招聘团队将审核您的申请，并进行初步电话沟通。"
  },
  {
    title: "技术面试",
    description: "通过初筛的候选人将参加技术面试，评估专业能力和技术水平。"
  },
  {
    title: "综合面试",
    description: "最终面试将评估您的综合素质和文化契合度，并讨论薪资待遇。"
  }
]; 