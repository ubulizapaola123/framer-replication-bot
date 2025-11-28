import { Button } from "./ui/button";
import { MessageSquare } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 cream-section">
      <div className="container">
        {/* Who Are We Section */}
        <div className="text-center mb-16">
          <span className="section-badge mb-4">who we are</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
            Who Are We? The Brain Of Africa's Tech Ecosystem
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            At NexaTech Rwanda, we are more than just a tech company—we are the architects of Africa's digital future.
          </p>
          <Button className="rounded-full gap-2">
            <MessageSquare className="w-4 h-4" />
            Book a call
          </Button>
        </div>

        {/* Blue CTA Box */}
        <div className="blue-gradient rounded-3xl p-10 text-primary-foreground mb-16">
          <h3 className="font-serif text-3xl font-medium mb-4">Africa Tech Brain</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-md">
            Leveraging cutting-edge technology to enhance efficiency, precision, and sustainability in every project.
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-center gap-2 text-sm">
              <span className="text-yellow-300">✦</span> AI-Powered Business Solutions
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-yellow-300">✦</span> Custom Tech Solutions
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-yellow-300">✦</span> African AI Innovation
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-yellow-300">✦</span> Pan-African Cloud Infrastructure
            </li>
          </ul>
          <Button variant="outline" className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
            <MessageSquare className="w-4 h-4" />
            Join Us
          </Button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="font-serif text-5xl font-medium text-foreground mb-2">4</div>
            <div className="font-medium text-foreground mb-2">Total Product</div>
            <p className="text-sm text-muted-foreground">
              We have officially in process of launching our main projects
            </p>
          </div>
          <div>
            <div className="font-serif text-5xl font-medium text-foreground mb-2">97%</div>
            <div className="font-medium text-foreground mb-2">Success Rate</div>
            <p className="text-sm text-muted-foreground">
              Consistently delivering exceptional results that exceed users expectations.
            </p>
          </div>
          <div>
            <div className="font-serif text-5xl font-medium text-foreground mb-2">1 Year</div>
            <div className="font-medium text-foreground mb-2">In business</div>
            <p className="text-sm text-muted-foreground">
              Half a decade of shaping digital experiences and driving business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
