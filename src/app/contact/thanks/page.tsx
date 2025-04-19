import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "感谢您的留言 | 易术科技",
  description: "感谢您联系易术科技，我们已收到您的留言，将尽快回复您。",
};

export default function ThanksPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">感谢您的留言</h1>
            <p className="text-xl text-muted-foreground">
              我们已收到您的信息，将尽快与您联系
            </p>
          </div>
        </div>
      </section>

      {/* Thank You Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="mb-10">
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">提交成功</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                感谢您对易术科技的关注与支持。我们的团队已收到您的留言，将在1-2个工作日内与您联系。
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/">返回首页</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/products">了解我们的产品</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 