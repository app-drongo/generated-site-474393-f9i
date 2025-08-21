// Template-enhanced component (UNIQUE VERSION)
// Generated: 2025-08-21T11:24:19.280Z
// Section: pricing
// Category: pricing
// Template ID: pricing-c001
// Page: Products
// Component: Pricing

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

export default function BankProPricing() {
  const plans = [
    {
      name: "Starter",
      description: "Get started with BankPro's basic banking services",
      price: "$0",
      period: "/month",
      badge: null,
      features: [
        "1 bank account",
        "Basic transaction processing",
        "Email support",
        "500MB storage",
        "Basic reporting"
      ],
      cta: "Start for Free",
      popular: false
    },
    {
      name: "Business",
      description: "Grow your business with BankPro's comprehensive banking solutions",
      price: "$49",
      period: "/month",
      badge: "Most Popular",
      features: [
        "Unlimited bank accounts",
        "Advanced transaction processing",
        "Priority email and phone support",
        "50GB storage",
        "Advanced reporting and analytics",
        "Custom branding",
        "API access",
        "Dedicated account manager"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      description: "Tailored banking services for large organizations",
      price: "Custom",
      period: "",
      badge: "Contact Sales",
      features: [
        "Dedicated banking infrastructure",
        "Customized workflows and integrations",
        "24/7 phone and on-site support",
        "Unlimited storage",
        "Advanced security and compliance",
        "Dedicated account team",
        "Custom training and onboarding"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            BankPro Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Flexible Pricing for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Your Business
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Choose the BankPro plan that fits your needs. No hidden fees, no surprises. 
            Cancel or upgrade anytime.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Monthly
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Annual
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 20%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={cn(
                "relative overflow-hidden transition-all duration-300 hover:shadow-lg",
                plan.popular 
                  ? "border-primary/50 shadow-lg shadow-primary/10 scale-105" 
                  : "border-border/50 hover:border-primary/20"
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {plan.badge}
                  </Badge>
                )}
                
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">
                  {plan.description}
                </CardDescription>
                
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground mb-1">{plan.period}</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={cn(
                    "w-full text-base py-6",
                    plan.popular 
                      ? "bg-primary hover:bg-primary/90" 
                      : ""
                  )}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === "Business" && (
                  <p className="text-center text-sm text-muted-foreground">
                    14-day free trial • No credit card required
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">
            Tailored Banking Solutions for Your Enterprise
          </h3>
          <p className="text-muted-foreground mb-6">
            If you have specific banking requirements, our enterprise team is here to 
            help. Let's discuss how BankPro can be customized to meet your organization's needs.
          </p>
          <Button variant="outline" size="lg">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}