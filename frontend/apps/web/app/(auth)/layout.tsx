import * as React from "react"
import Link from "next/link"
import { BrandLogo } from "@/components/auth/brand-logo"
import { AuthBrandPanel } from "@/components/auth/auth-brand-panel"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowLeft, Shield } from "lucide-react"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-svh w-full flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 flex h-14 w-full items-center justify-between border-b border-border/60 bg-background/80 px-4 sm:px-8 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <BrandLogo size="default" />
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
          >
            <ArrowLeft className="size-3.5" />
            <span className="hidden sm:inline">Back to</span> Overview
          </Link>
          <div className="h-4 w-px bg-border" />
          <ThemeToggle />
        </div>
      </header>

      {/* Main Split Layout */}
      <div className="flex flex-1 w-full">
        {/* Form Column */}
        <main className="flex flex-1 flex-col items-center justify-center p-4 sm:p-8 lg:p-12">
          <div className="w-full max-w-[440px] flex flex-col items-center justify-center">
            {children}
          </div>

          {/* Security & Legal Footer for mobile/desktop */}
          <footer className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Shield className="size-3 text-emerald-500" />
              <span>256-bit SSL Secure</span>
            </span>
            <span>•</span>
            <Link href="#" className="hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="#" className="hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="#" className="hover:underline underline-offset-4">
              Security
            </Link>
          </footer>
        </main>

        {/* Brand Showcase Column (desktop only) */}
        <AuthBrandPanel />
      </div>
    </div>
  )
}
