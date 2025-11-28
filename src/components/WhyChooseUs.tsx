import { Button } from "./ui/button";
import { Smartphone, Plus, Heart } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "AI-Powered Business Solutions",
    description: "We build smart automation solutions for African enterprises to Rwanda's thriving tech ecosystem.",
  },
  {
    icon: Plus,
    title: "Custom Tech Solutions",
    description: "We design end-to-end tech solutions for Africa and Rwanda to enhance its Tech",
  },
  {
    icon: Heart,
    title: "African AI Innovation",
    description: "We are leading our africa ai innovation hub creation through our different solutions",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 cream-section">
      <div className="container">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <span className="section-badge mb-4">Why choose us</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
            Digital Solutions for Africa
          </h2>
          <p className="text-muted-foreground mb-8">
            NexaTech Rwanda pioneers Africa's digital transformation by delivering innovative tech solutions that empower businesses and governments for sustainable development.
          </p>
          <div className="flex items-center gap-4">
            <Button className="rounded-full gap-2">
              <span className="w-4 h-4">📋</span>
              Get started
            </Button>
            <Button variant="outline" className="rounded-full">
              How we work?
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
