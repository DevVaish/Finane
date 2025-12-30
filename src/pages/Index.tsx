import { Link } from "react-router-dom";
import { Phone, Star, ArrowRight, BarChart3, TrendingUp, FileText, Calculator, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";
import TeamCard from "@/components/TeamCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatCard from "@/components/StatCard";
import AnimatedSection from "@/components/AnimatedSection";

import heroImage from "@/assets/hero-accountant.jpg";
import bookkeepingImage from "@/assets/service-bookkeeping.jpg";
import cashflowImage from "@/assets/service-cashflow.jpg";
import taxImage from "@/assets/service-tax.jpg";
import ctaImage from "@/assets/cta-person.jpg";
import teamBenjamin from "@/assets/team-benjamin.jpg";
import teamAva from "@/assets/team-ava.jpg";
import teamIsabella from "@/assets/team-isabella.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const Index = () => {
  const services = [
    {
      title: "Bookkeeping and Reporting",
      description: "We keep your financial records accurate and provide detailed reports to support informed decisions.",
      image: bookkeepingImage,
      icon: <FileText className="h-6 w-6" />,
    },
    {
      title: "Cash Flow Management",
      description: "We optimize cash flow to ensure your business remains financially stable and continues to grow.",
      image: cashflowImage,
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      title: "Personalized Tax Solutions",
      description: "Tailored tax strategies to maximize savings and ensure complete compliance during tax season.",
      image: taxImage,
      icon: <Calculator className="h-6 w-6" />,
    },
  ];

  const pricingPlans = [
    {
      title: "Basic Package",
      description: "Essential support for small businesses and startups. Stay compliant with simple, reliable financial tracking and tax prep.",
      price: 99,
      features: ["Tax Filing Assistance", "Basic Bookkeeping Services", "Financial Consultation", "Monthly Reports"],
      icon: <BarChart3 className="h-6 w-6" />,
    },
    {
      title: "Standard Plan",
      description: "Perfect for growing businesses that require consistent financial oversight and strategic tax planning.",
      price: 199,
      features: ["Tax Optimizing Assistance", "Advanced Bookkeeping Services", "Financial Consultation & Solution", "Weekly Reports"],
      highlighted: true,
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      title: "Premium Package",
      description: "Designed for established businesses needing advanced financial consulting and full-scale support.",
      price: 299,
      features: ["Advanced Tax Solutions", "Advanced Bookkeeping Expertise", "Unlimited Consultation", "Custom reports"],
      icon: <CreditCard className="h-6 w-6" />,
    },
  ];

  const team = [
    { name: "Benjamin Harris", role: "Business Development Manager", image: teamBenjamin },
    { name: "Ava Moore", role: "Payroll Manager", image: teamAva },
    { name: "Isabella Miller", role: "Audit Associate", image: teamIsabella },
  ];

  const testimonials = [
    {
      name: "Natalie Evans",
      role: "CEO",
      company: "Innovatech Solutions",
      content: "Unmatched service and expertise! They revolutionized our financial strategy, unlocking significant savings while enhancing operational efficiency.",
      image: testimonial1,
    },
    {
      name: "Sarah Mitchell",
      role: "Chief Financial Officer",
      company: "Global Ventures",
      content: "Their expertise and personalized approach transformed our financial management. We've achieved significant growth and stability thanks to their strategic insights.",
      image: testimonial2,
    },
    {
      name: "James O'Connor",
      role: "Founder",
      company: "Eco Grow Solutions",
      content: "This team streamlined our accounting processes, allowing us to focus on scaling our business. Their attention to detail and efficiency is truly unmatched.",
      image: testimonial3,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero py-12 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                Simplifying accounting for your business
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                We transform numbers into financial success through expert-led strategies, personalized support, and unmatched precision.
              </p>
              <Button asChild size="lg" className="mt-4 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
              
              <div className="flex flex-wrap gap-4 pt-6">
                <div className="flex items-center gap-3 bg-card rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="relative w-8 h-8">
                    <div className="absolute inset-0 bg-primary rounded-full animate-pulse-glow" />
                    <div className="absolute inset-[2px] bg-card rounded-full flex items-center justify-center">
                      <span className="text-primary font-display font-bold text-sm">A</span>
                    </div>
                  </div>
                  <div>
                    <span className="font-display font-semibold text-foreground">ccruefy</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">5.0/4.50</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-card rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <span className="text-sm text-muted-foreground">Call us-</span>
                    <p className="font-medium text-foreground">441-9189 x9761</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img src={heroImage} alt="Professional accountant working" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
                
                {/* Stats overlay */}
                <div className="absolute top-4 left-4 bg-card/95 backdrop-blur rounded-xl p-4 shadow-lg animate-float">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                      <span className="text-xs font-bold text-accent-foreground">85%</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Accuracy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-xs font-bold text-primary-foreground">150%</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Growth</span>
                  </div>
                </div>
                
                {/* Progress overlay */}
                <div className="absolute bottom-4 right-4 bg-card/95 backdrop-blur rounded-xl p-4 shadow-lg w-48">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">Client Revenue Strategy</span>
                        <span className="font-medium text-foreground">99.8%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: '99.8%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">Tax Optimization</span>
                        <span className="font-medium text-foreground">70%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-accent rounded-full transition-all duration-1000" style={{ width: '70%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-center text-foreground mb-12">
              Transforming numbers into financial success
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "96%", label: "Client Satisfaction Rate" },
              { value: "20+", label: "Years of Experience" },
              { value: "500", label: "Successful Tax Filings Annually" },
              { value: "50+", label: "Tax Professionals on Team" },
            ].map((stat, index) => (
              <AnimatedSection key={stat.value} animation="scale-in" delay={index * 150}>
                <StatCard value={stat.value} label={stat.label} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="fade-in-up" className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Your trusted accounting partner awaits
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Accruefy, we blend expertise with technology to deliver bookkeeping, tax planning & financial consulting for businesses of all sizes.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["Expert Team of Professionals", "Client-Centric Approach", "Trusted by Industry Leaders", "Tailored Financial Solutions"].map((item, index) => (
                <span 
                  key={item} 
                  className="px-4 py-2 bg-card rounded-full text-sm text-foreground shadow-sm hover:shadow-md hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-12 mb-8">
              <div className="text-center group cursor-default">
                <p className="font-display text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">20+</p>
                <p className="text-sm text-muted-foreground">Years of Experience</p>
              </div>
              <div className="text-center group cursor-default">
                <p className="font-display text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">8K</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
            <Button asChild variant="outline" className="hover:scale-105 transition-transform duration-300">
              <Link to="/about">Learn more about us</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="flex justify-between items-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                Achieving financial clarity through services
              </h2>
              <Button asChild variant="outline" className="hidden md:flex group">
                <Link to="/services" className="flex items-center gap-2">
                  View all services <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} animation="fade-in-up" delay={index * 150}>
                <ServiceCard {...service} delay={index * 100} />
              </AnimatedSection>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline">
              <Link to="/services">View all services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
              Client testimonials and success stories
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} animation="scale-in" delay={index * 150}>
                <TestimonialCard {...testimonial} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left" className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-semibold">
                Get expert accounting assistance now
              </h2>
              <Button asChild variant="secondary" size="lg" className="bg-card text-foreground hover:bg-card/90 hover:scale-105 transition-all duration-300">
                <Link to="/pricing">Get Started</Link>
              </Button>
            </AnimatedSection>
            <AnimatedSection animation="slide-in-right" className="flex justify-center lg:justify-end">
              <img src={ctaImage} alt="Expert with tablet" className="rounded-2xl max-w-sm w-full shadow-2xl hover:shadow-3xl transition-shadow duration-500" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
              Your dedicated financial professionals
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} animation="fade-in-up" delay={index * 150}>
                <TeamCard {...member} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
              Custom solutions at competitive rates
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <AnimatedSection key={plan.title} animation="scale-in" delay={index * 150}>
                <PricingCard {...plan} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
