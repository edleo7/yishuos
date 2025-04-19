import Image from "next/image";

export const metadata = {
  title: "关于我们 | 易术科技",
  description: "了解易术科技的团队、愿景和使命，探索我们如何通过创新技术解决方案帮助企业实现数字化转型。",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">关于我们</h1>
              <p className="text-xl text-muted-foreground mb-6">
                易术科技是一家专注于提供创新技术解决方案的公司，致力于帮助企业实现数字化转型
              </p>
              <p className="text-muted-foreground">
                我们的团队由一群充满激情的技术专家组成，拥有丰富的行业经验和专业知识，为客户提供最优质的服务
              </p>
            </div>
            <div className="bg-gray-200 h-[300px] rounded-lg flex items-center justify-center">
              <span className="text-gray-500">公司形象图片</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">我们的愿景</h2>
              <p className="text-muted-foreground">
                成为技术创新领域的领导者，通过提供卓越的技术解决方案，帮助企业应对数字化时代的挑战，实现可持续发展
              </p>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>引领技术创新</li>
                <li>赋能企业转型</li>
                <li>培养专业人才</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">我们的使命</h2>
              <p className="text-muted-foreground">
                通过技术创新和专业服务，帮助企业优化流程、提升效率、创造价值，实现业务增长和数字化转型
              </p>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>客户价值至上</li>
                <li>持续技术创新</li>
                <li>专业团队协作</li>
                <li>社会责任担当</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">我们的核心价值观</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="p-6 bg-card border rounded-lg">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">我们的团队</h2>
          <p className="text-xl text-muted-foreground text-center max-w-[800px] mx-auto mb-12">
            由经验丰富的专业人才组成，致力于为客户提供最佳解决方案
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">照片</span>
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary mb-2">{member.position}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">公司发展历程</h2>
          <div className="space-y-12">
            {companyHistory.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="text-xl font-bold">{item.year}</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const coreValues = [
  {
    title: "创新",
    description: "不断探索新技术、新方法，推动行业发展",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" x2="12" y1="8" y2="12" />
        <line x1="12" x2="12.01" y1="16" y2="16" />
      </svg>
    )
  },
  {
    title: "专业",
    description: "拥有深厚的技术积累和行业知识",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  },
  {
    title: "协作",
    description: "团队协作，共同创造卓越的解决方案",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    title: "责任",
    description: "对客户、员工和社会负责，践行企业责任",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  },
];

const teamMembers = [
  {
    name: "张伟",
    position: "首席执行官",
    description: "拥有15年技术和管理经验，曾在多家知名科技公司担任高管职位"
  },
  {
    name: "李明",
    position: "技术总监",
    description: "资深软件架构师，精通多种编程语言和技术栈，带领团队攻克技术难题"
  },
  {
    name: "王芳",
    position: "产品经理",
    description: "专注于用户体验和产品设计，擅长将客户需求转化为优秀产品"
  },
  {
    name: "赵强",
    position: "研发主管",
    description: "拥有丰富的软件开发经验，负责公司核心产品的研发工作"
  },
];

const companyHistory = [
  {
    year: "2023",
    title: "业务扩展",
    description: "拓展AI解决方案业务线，成功为多家企业提供智能化转型服务"
  },
  {
    year: "2022",
    title: "技术创新",
    description: "推出云服务平台，为企业提供一站式云解决方案"
  },
  {
    year: "2021",
    title: "团队扩张",
    description: "团队规模扩大到50人，组建专业的研发、产品和服务团队"
  },
  {
    year: "2020",
    title: "公司成立",
    description: "易术科技正式成立，开始为企业提供技术咨询和软件开发服务"
  },
]; 