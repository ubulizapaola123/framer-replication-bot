import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "How Do You Understand Africa Needs?",
    answer: "We conduct extensive research and work closely with local communities and businesses across Africa to understand the unique challenges and opportunities in the region's tech landscape.",
  },
  {
    question: "How Do You Get Design Ecosystem?",
    answer: "Our design ecosystem is built on collaborative frameworks, leveraging local talent and international best practices to create solutions that are both innovative and culturally relevant.",
  },
  {
    question: "How Do You Build And Scale Together?",
    answer: "We partner with businesses, governments, and organizations to build scalable solutions, providing ongoing support and resources to ensure sustainable growth and impact.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-badge mb-4">Questions</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            Got questions? <span className="font-bold">We've got answers</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Explore our frequently asked questions to find the information you need about our services and process.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-xl px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-serif text-lg hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Partner Logos */}
        <div className="flex items-center justify-center gap-12 mt-16 opacity-50">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-2xl">◐</span>
            <span className="font-medium">Logoipsum</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-2xl">✳</span>
            <span className="font-medium">Logoipsum</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-2xl">◉</span>
            <span className="font-medium">Logoipsum</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
