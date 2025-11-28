import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="py-32 blue-gradient relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container relative">
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-primary-foreground mb-4">
            Join Africa's Tech Revolution – Start Today!
          </h2>
          <p className="font-serif text-2xl md:text-3xl text-primary-foreground/80 mb-10">
            Through Joining NexaTech Rwanda
          </p>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-primary-foreground bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-10"
          >
            Join Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
