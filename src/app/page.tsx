import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      {/* 英雄区 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 科技感背景 */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-slate-900/90" />
          <div className="absolute w-full h-full bg-[url('/images/grid.svg')] bg-center opacity-[0.12]" />
          
          {/* 动态光斑效果 */}
          <div className="blob blob-primary w-[500px] h-[500px] top-[-100px] right-[-100px]"></div>
          <div className="blob blob-secondary w-[600px] h-[600px] bottom-[-200px] left-[-100px]"></div>
          <div className="blob blob-accent w-[300px] h-[300px] top-[40%] left-[30%]"></div>
        </div>

        {/* 几何线条装饰 */}
        <div className="absolute inset-0 -z-5 opacity-20">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,800 L1200,0" stroke="url(#line-gradient)" strokeWidth="1.5" fill="none" />
            <path d="M200,800 L1200,200" stroke="url(#line-gradient)" strokeWidth="1" fill="none" />
            <path d="M400,800 L1200,400" stroke="url(#line-gradient)" strokeWidth="0.8" fill="none" />
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(0,128,255,0.3)" />
                <stop offset="100%" stopColor="rgba(0,224,198,0)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container px-4 mx-auto z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="space-y-8">
              {/* 品牌Slogan */}
              <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.2s" }}>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none">
                  <span className="gradient-text">不破不立</span>
                </h1>
              </div>
              
              {/* 公司使命 */}
              <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.4s" }}>
                <p className="text-2xl md:text-4xl text-gray-200 mt-4 font-medium">
                  用<span className="gradient-text-accent px-1">AI</span>重构生产力
                </p>
              </div>
              
              {/* 描述文字 */}
              <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.6s" }}>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                  易术科技致力于通过前沿AI技术赋能企业，打破传统生产模式的束缚，
                  建立全新的生产力范式。
                </p>
              </div>
              
              {/* 按钮区 */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-slide-up opacity-0" style={{ animationDelay: "0.8s" }}>
                <Button asChild size="lg" className="rounded-full gradient-border bg-slate-900/60 hover:bg-slate-800/80 text-white border-none shadow-lg shadow-blue-700/20 px-8 py-6 text-lg">
                  <Link href="/products">立即了解</Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full border-slate-700 text-gray-300 hover:text-white hover:border-slate-500 px-8 py-6 text-lg">
                  <Link href="/contact">联系我们</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 向下滚动指示器 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-gray-400">
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </section>

      {/* 创新科技部分 */}
      <section className="py-24 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>

        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">创新科技，引领未来</span>
            </h2>
            <p className="text-gray-400 text-lg">我们提供前沿的技术解决方案，帮助企业重塑业务流程，提升效率，实现数字化转型</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass p-8 rounded-2xl hover:translate-y-[-8px] transition-all duration-500 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:gradient-text transition-colors">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 数字展示部分 */}
      <section className="py-20 relative">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <span className="gradient-text">{stat.value}</span>
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA部分 */}
      <section className="py-24 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        </div>
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto glass rounded-3xl p-12 border border-slate-700/30">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">准备好一起创造未来了吗？</span>
              </h2>
              <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
                加入我们的创新征程，探索AI技术如何为您的企业带来全新机遇
              </p>
              <Button asChild size="lg" className="rounded-full gradient-border bg-slate-900/60 hover:bg-slate-800/80 text-white border-none shadow-lg shadow-purple-700/20 px-8 py-6 text-lg">
                <Link href="/contact">联系我们，开启合作</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    title: "人工智能解决方案",
    description: "通过先进的AI技术，提供智能决策支持、自动化流程和数据分析，帮助企业提升效率与创新力。",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2H2v10h10V2Z" />
        <path d="M22 12h-6v10h10V12h-4Z" />
        <path d="M12 12H7v10h10V12h-5Z" />
        <path d="M12 7V2" />
        <path d="M7 12V7" />
        <path d="M22 7h-5" />
        <path d="M22 12V7" />
      </svg>
    ),
  },
  {
    title: "数字化转型咨询",
    description: "定制化的数字战略规划，结合行业最佳实践，帮助企业平稳高效地实现数字化转型。",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
        <path d="m12 12 4 10 1.7-4.3L22 16Z" />
      </svg>
    ),
  },
  {
    title: "智能软件开发",
    description: "打造定制化、高性能的软件系统，满足企业特定需求，提升运营效率与用户体验。",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m16 18 6-6-6-6" />
        <path d="m8 6-6 6 6 6" />
      </svg>
    ),
  },
];

const stats = [
  { value: "5年+", label: "行业经验" },
  { value: "50+", label: "企业客户" },
  { value: "100+", label: "成功案例" },
  { value: "98%", label: "客户满意度" }
];
