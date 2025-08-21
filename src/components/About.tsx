// Template-enhanced component (UNIQUE VERSION)
// Generated: 2025-08-21T11:24:18.611Z
// Section: about
// Category: about
// Template ID: about-c001
// Page: About
// Component: About

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb
} from "lucide-react"

export default function BankProAbout() {
  const values = [
    {
      icon: Target,
      title: "Empowering Businesses",
      description: "Our mission is to empower businesses of all sizes to thrive in the digital age with our innovative banking solutions."
    },
    {
      icon: Lightbulb,
      title: "Pioneering Innovation",
      description: "We're constantly pushing the boundaries of what's possible in fintech, bringing cutting-edge technology to our clients."
    },
    {
      icon: Heart,
      title: "Customer-Centric",
      description: "Your success is our top priority. We build every feature with our users' needs and goals at the center."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "From startups to enterprises, we're helping businesses worldwide transform their financial operations."
    }
  ]

  const stats = [
    { value: "2015", label: "Founded", icon: Award },
    { value: "10K+", label: "Clients Served", icon: Users },
    { value: "99.99%", label: "Uptime", icon: TrendingUp },
    { value: "20+", label: "Countries", icon: Globe }
  ]

  const team = [
    {
      name: "John Doe",
      role: "CEO & Co-Founder",
      image: "JD",
      bio: "Former VP of Finance at FinTech Corp. 15+ years of experience in the banking industry."
    },
    {
      name: "Jane Smith",
      role: "CTO & Co-Founder", 
      image: "JS",
      bio: "Ex-Google engineer. Passionate about building secure and scalable fintech solutions."
    },
    {
      name: "Michael Lee",
      role: "Head of Product",
      image: "ML",
      bio: "Award-winning product manager with experience at leading financial institutions."
    },
    {
      name: "Emily Chen",
      role: "VP of Operations",
      image: "EC",
      bio: "Former executive at a top-tier bank. Expertise in process optimization and customer experience."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About BankPro
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Revolutionizing the
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Future of Banking
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a team of visionary fintech experts on a mission to transform the way businesses access and manage their financial services.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2015, BankPro was born out of a frustration with the complexity and limitations of traditional banking solutions. 
                We saw an opportunity to leverage cutting-edge technology to create a more accessible, efficient, and user-friendly banking experience.
              </p>
              <p>
                Today, we're proud to serve over 10,000 businesses worldwide, helping them streamline their financial operations and unlock new growth opportunities.
              </p>
              <p>
                Our commitment to innovation, customer success, and global impact drives everything we do. We're constantly exploring new ways to empower our clients and shape the future of the banking industry.
              </p>
            </div>
            <Button className="group">
              Discover Our Story
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "BankPro has transformed the way we manage our finances, allowing us to focus on growing our business."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- John Doe, CEO of TechStartup</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-muted-foreground">
              The principles that guide our actions and shape our vision for the future of banking.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Talented Team</h3>
            <p className="text-muted-foreground">
              The visionary individuals behind BankPro, working together to revolutionize the banking industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              View All Team Members
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "BankPro has completely transformed the way we manage our finances. 
                The platform is intuitive, secure, and has helped us streamline our operations."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  JD
                </div>
                <div className="text-left">
                  <div className="font-semibold">Jane Doe</div>
                  <div className="text-sm text-muted-foreground">CFO, TechStartup Inc.</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}