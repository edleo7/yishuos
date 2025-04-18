import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-2xl">
          易术科技
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link 
            href="/" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            首页
          </Link>
          <Link 
            href="/about" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            关于我们
          </Link>
          <Link 
            href="/products" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            产品与服务
          </Link>
          <Link 
            href="/join-us" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            加入我们
          </Link>
          <Link 
            href="/contact" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            联系我们
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden md:flex">
            咨询服务
          </Button>
          <Button className="hidden md:flex">立即联系</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">打开菜单</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
} 