"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="font-bold text-2xl text-white flex items-center">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">易术科技</span>
          </Link>
          
          <nav className="hidden md:flex gap-8">
            <Link 
              href="/" 
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              首页
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              关于我们
            </Link>
            <Link 
              href="/products" 
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              产品与服务
            </Link>
            <Link 
              href="/join-us" 
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              加入我们
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              联系我们
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden md:flex border-white/20 text-white hover:bg-white/10 rounded-full"
              asChild
            >
              <Link href="/contact">咨询服务</Link>
            </Button>
            
            <Button 
              className="hidden md:flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 rounded-full"
              asChild
            >
              <Link href="/products">立即了解</Link>
            </Button>
            
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <span className="sr-only">打开菜单</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
} 