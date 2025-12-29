import { Link } from "react-router-dom";
import { FileText, TrendingUp, Calculator, Clock, Users, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";

import bookkeepingImage from "@/assets/service-bookkeeping.jpg";
import cashflowImage from "@/assets/service-cashflow.jpg";
import taxImage from "@/assets/service-tax.jpg";
import ctaImage from "@/assets/cta-person.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const Services = () => {
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
    {
      title: "Tax Filing Assistance",
      description: "Accurate, timely tax filing services to meet deadlines and minimize any potential penalties.",
      image: taxImage,
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "Custom Payroll Solutions",
      description: "Streamlined payroll services to ensure timely and accurate employee payments every time.",
      image: bookkeepingImage,
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Financial Statement",
      description: "Comprehensive financial statements to provide clarity and guide better decision-making.",
      image: cashflowImage,
      icon: <BarChart className="h-6 w-6" />,
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
              Achieving financial clarity through services
            </h1>
            <p className="text-muted-foreground text-lg">
              Our comprehensive suite of accounting services is designed to meet the unique needs of your business, 
              from bookkeeping to strategic tax planning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-4">
            Smart approaches to financial success
          </h2>
          <p className="text-muted-foreground text-lg text-center mb-12 max-w-2xl mx-auto">
            Our proven process blends expert advice and clear steps to bring you financial clarity, confidence, and long-term business success.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Smart Solutions", desc: "Data-driven insights and innovative tools to solve challenges." },
              { step: "02", title: "Financial Clarity", desc: "Clear understanding of your financial position and goals." },
              { step: "03", title: "Efficient Strategies", desc: "Streamlined strategies to boost productivity and cut costs." },
              { step: "04", title: "Tax Optimization", desc: "Strategic plans to maximize deductions and reduce liability." },
            ].map((item) => (
              <div key={item.step} className="bg-card rounded-xl p-6 shadow-sm">
                <span className="inline-block text-primary font-display text-sm font-semibold mb-3">{item.step}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
            Client testimonials and success stories
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
                Ready to transform your financial management?
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Let us help you achieve financial clarity and business success with our expert services.
              </p>
              <Button asChild variant="secondary" size="lg" className="bg-card text-foreground hover:bg-card/90">
                <Link to="/contact">Get Started Today</Link>
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

export default Services;
