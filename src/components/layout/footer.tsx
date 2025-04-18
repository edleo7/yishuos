import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-xl">易术科技</h3>
            <p className="text-muted-foreground">
              创新技术驱动未来，为企业提供全方位解决方案
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">首页</Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">关于我们</Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground">产品与服务</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">了解更多</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/join-us" className="text-muted-foreground hover:text-foreground">加入我们</Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">联系我们</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">联系方式</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>邮箱：contact@yishutech.com</li>
              <li>电话：+86 123 4567 8910</li>
              <li>地址：北京市海淀区科技园</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} 易术科技 版权所有</p>
        </div>
      </div>
    </footer>
  );
} 