// Template-enhanced component (UNIQUE VERSION)
// Generated: 2025-08-21T11:24:18.055Z
// Section: services
// Category: services
// Template ID: services-c002
// Page: Home
// Component: Services

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  Code2,
  Palette,
  Globe,
  Shield,
  Rocket,
  Users,
  BarChart3,
  Cpu
} from "lucide-react"

export default function BankProServices() {
  const services = [
    {
      id: "banking-as-a-service",
      title: "Banking-as-a-Service",
      description: "Seamlessly integrate banking capabilities into your platform",
      longDescription: "Our Banking-as-a-Service solution allows you to offer a full suite of banking services to your customers, without the hassle of building and maintaining your own infrastructure.",
      icon: Rocket,
      benefits: [
        "Instant account creation and management",
        "Secure payments and money transfers",
        "Comprehensive reporting and analytics",
        "Regulatory compliance support"
      ],
      pricing: "Custom pricing based on usage",
      timeline: "4-8 weeks to get started",
      featured: true,
      badge: "Most Popular"
    },
    {
      id: "custom-fintech-solutions",
      title: "Custom Fintech Solutions",
      description: "Tailored financial technology built for your business",
      longDescription: "Our team of fintech experts will work closely with you to design and develop custom solutions that address your unique business needs, from lending platforms to wealth management tools.",
      icon: Code2,
      benefits: [
        "Full-stack development expertise",
        "Agile methodology",
        "Cloud-native architecture",
        "Continuous integration/deployment"
      ],
      pricing: "Project-based pricing",
      timeline: "4-12 weeks per project"
    },
    {
      id: "compliance-and-security",
      title: "Compliance & Security",
      description: "Ensure your fintech solutions meet regulatory standards",
      longDescription: "Our compliance and security services help you navigate the complex regulatory landscape, protect your customers' data, and maintain the highest standards of security.",
      icon: Shield,
      benefits: [
        "Regulatory compliance assessments",
        "Penetration testing and vulnerability assessments",
        "Secure infrastructure design and implementation",
        "Ongoing monitoring and incident response"
      ],
      pricing: "Custom quotes available",
      timeline: "1-2 weeks per engagement",
      badge: "Essential"
    },
    {
      id: "data-analytics",
      title: "Data Analytics & Insights",
      description: "Unlock the power of your financial data",
      longDescription: "Our data analytics services provide you with the insights you need to make informed business decisions. We'll help you collect, analyze, and visualize your financial data to drive growth and optimize your operations.",
      icon: BarChart3,
      benefits: [
        "Data integration and warehousing",
        "Advanced analytics and predictive modeling",
        "Customized reporting and dashboards",
        "Actionable recommendations"
      ],
      pricing: "Starting at $5,000/month",
      timeline: "4-8 weeks to implement"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            BankPro Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Solutions Tailored to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Your Fintech Business Needs
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Detailed solutions designed to address your specific challenges and drive growth
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <div key={service.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${service.featured 
                    ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}>
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${service.featured 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary'
                        }
                      `}>
                        <Icon className="size-7" />
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <Badge variant={service.featured ? "default" : "secondary"}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                      
                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          {service.longDescription}
                        </p>
                      )}
                      
                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Pricing:</span>
                            <span className="text-sm font-semibold">
                              {service.pricing}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <span className="text-sm font-semibold">
                              {service.timeline}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={service.featured ? "default" : "outline"}
                          className="group/btn"
                        >
                          Get Started
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < services.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <h3 className="text-2xl font-semibold mb-3">Need a Custom Fintech Solution?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team of experts can help you design and build tailored solutions to meet your unique requirements. Let's discuss how we can support your fintech business.
          </p>
          <Button size="lg">
            Schedule a Consultation
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}