// Template-enhanced component (UNIQUE VERSION)
// Generated: 2025-08-21T11:24:18.451Z
// Section: page-header
// Category: page-header
// Template ID: page-header-c001
// Page: About
// Component: PageHeaderAbout

import { Badge } from "@/components/ui/badge"

export default function BankProAboutPageHeader() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 size-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 size-48 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-16 sm:py-20 lg:py-24 max-w-4xl">
          {/* Optional Badge */}
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About BankPro
          </Badge>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Empowering Businesses with
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Innovative Banking Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            At BankPro, we're dedicated to providing cutting-edge banking services that help fintech startups, small-to-medium businesses, and enterprises
            unlock their full potential. Our comprehensive suite of solutions is designed to streamline your financial operations and drive your success.
          </p>
        </div>
      </div>
    </section>
  )
}