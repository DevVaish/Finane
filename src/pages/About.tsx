import { Link } from "react-router-dom";
import { Shield, Heart, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import TeamCard from "@/components/TeamCard";

import aboutHero from "@/assets/about-hero.jpg";
import teamMeeting from "@/assets/about-team-meeting.jpg";
import ctaImage from "@/assets/cta-person.jpg";
import teamBenjamin from "@/assets/team-benjamin.jpg";
import teamAva from "@/assets/team-ava.jpg";
import teamIsabella from "@/assets/team-isabella.jpg";

const About = () => {
  const values = [
    { icon: <Shield className="h-8 w-8" />, title: "Integrity", description: "We uphold honesty." },
    { icon: <Heart className="h-8 w-8" />, title: "Client-Centricity", description: "We prioritize clients." },
    { icon: <Users className="h-8 w-8" />, title: "Trust", description: "Trust drives everything." },
    { icon: <Award className="h-8 w-8" />, title: "Excellence", description: "Excellence defines us." },
  ];

  const team = [
    { name: "Benjamin Harris", role: "Business Development Manager", image: teamBenjamin },
    { name: "Ava Moore", role: "Payroll Manager", image: teamAva },
    { name: "Isabella Miller", role: "Audit Associate", image: teamIsabella },
  ];

  const partners = ["Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5"];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1">
              <img 
                src={aboutHero} 
                alt="Business professionals discussing" 
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:col-span-1 text-center space-y-6">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
                Building trust through financial excellence
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Accruefy simplifies complex finances into clear strategies, helping your business grow with confidence.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            <div className="lg:col-span-1 space-y-4">
              <img 
                src={teamMeeting} 
                alt="Team meeting" 
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground text-center mb-8">
            Partnered Brands, Proven Success
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="text-muted-foreground/50 font-display text-xl font-medium"
              >
                Logo{partner.replace("Partner ", "")}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={teamMeeting} 
                alt="Team collaboration" 
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-xl p-6 shadow-xl">
                <div className="text-center">
                  <p className="font-display text-4xl font-bold">90%</p>
                  <p className="text-sm opacity-80">Saving</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                Our journey towards financial excellence
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Accruefy began with a vision to make accounting transparent and dependable. We've earned the trust of businesses by combining accuracy with integrity in all we do.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We go beyond numbers—helping clients understand finances, plan strategically, and stay ahead. With expert guidance and smart tools, we turn complexity into clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-4">
            How we guide your success
          </h2>
          <p className="text-muted-foreground text-lg text-center mb-12 max-w-2xl mx-auto">
            We value trust, use our expertise to guide you, and focus on clear, honest support that helps your business grow.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                  {value.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
            Your dedicated financial professionals
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <TeamCard key={member.name} {...member} />
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
                Get expert accounting assistance now
              </h2>
              <Button asChild variant="secondary" size="lg" className="bg-card text-foreground hover:bg-card/90">
                <Link to="/pricing">Get Started</Link>
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

export default About;
