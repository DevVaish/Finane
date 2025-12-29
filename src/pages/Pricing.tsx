import { Link } from "react-router-dom";
import { BarChart3, TrendingUp, CreditCard, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PricingCard from "@/components/PricingCard";
import TestimonialCard from "@/components/TestimonialCard";

import ctaImage from "@/assets/cta-person.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const Pricing = () => {
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

  const planDetails = [
    {
      title: "Basic Package",
      price: 99,
      description: "Essential support for small businesses and startups. Stay compliant with simple, reliable financial tracking and tax prep.",
      details: "Get peace of mind with hassle-free financial upkeep. Our Basic Package is ideal for entrepreneurs and early-stage startups who need foundational support to stay compliant and focused on growth.",
      features: [
        "Monthly financial statement preparation",
        "Basic tax filing for one business entity",
        "Up to 50 monthly transactions processed",
        "Email support during business hours",
        "Annual tax planning consultation",
      ],
    },
    {
      title: "Standard Plan",
      price: 199,
      description: "Perfect for growing businesses that require consistent financial oversight and strategic tax planning.",
      details: "Our Standard Plan supports growing businesses with advanced bookkeeping, proactive tax strategies, and ongoing consulting to fuel sustainable growth.",
      features: [
        "Weekly financial statement preparation",
        "Tax optimization strategies",
        "Up to 200 monthly transactions processed",
        "Priority email and phone support",
        "Quarterly tax planning sessions",
        "Cash flow forecasting",
      ],
    },
    {
      title: "Premium Package",
      price: 299,
      description: "Designed for established businesses needing advanced financial consulting and full-scale support.",
      details: "Our Premium Package is built for established businesses demanding comprehensive financial expertise, unlimited support, and customized reporting for complex needs.",
      features: [
        "Daily financial monitoring and reporting",
        "Advanced tax solutions and planning",
        "Unlimited transaction processing",
        "Dedicated account manager",
        "Custom reporting dashboards",
        "Strategic CFO advisory services",
        "Audit support and preparation",
      ],
    },
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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Custom solutions at competitive rates
            </h1>
            <p className="text-muted-foreground text-lg">
              Choose the plan that best fits your business needs. All plans include our core accounting expertise 
              with varying levels of service and support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.title} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Plan Details Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
            What we offer on every package
          </h2>
          
          <div className="space-y-12">
            {planDetails.map((plan, index) => (
              <div 
                key={plan.title} 
                className={`grid lg:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={`bg-card rounded-xl p-8 shadow-sm ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <h3 className="font-display text-sm text-primary font-medium mb-2">{plan.title}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-display text-4xl font-bold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground">USD / month</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <Button asChild className="w-full">
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">{plan.title} Details</h3>
                  <p className="text-muted-foreground mb-6">{plan.details}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Can I switch plans later?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
              },
              {
                question: "Is there a contract commitment?",
                answer: "No long-term contracts required. All plans are month-to-month, and you can cancel anytime.",
              },
              {
                question: "Do you offer custom enterprise solutions?",
                answer: "Yes, for large organizations with complex needs, we offer customized enterprise packages. Contact us for a personalized quote.",
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, ACH bank transfers, and can set up invoicing for enterprise clients.",
              },
            ].map((faq) => (
              <div key={faq.question} className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
            What our clients say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-semibold">
                Ready to get started?
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Choose a plan and transform your financial management today. Not sure which plan is right? Contact us for a free consultation.
              </p>
              <Button asChild variant="secondary" size="lg" className="bg-card text-foreground hover:bg-card/90">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img src={ctaImage} alt="Expert with tablet" className="rounded-2xl max-w-sm w-full shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
