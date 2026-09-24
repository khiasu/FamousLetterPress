import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="section-lg bg-ivory" aria-label="Start a project">
      <div className="container-narrow text-center">
        <Reveal>
          <hr className="divider mx-auto mb-12" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-6">
            Have a project{" "}
            <span className="italic font-light">in mind?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg text-taupe mb-10 max-w-lg mx-auto">
            Whether it&apos;s a wedding invitation, a set of business cards, or
            something entirely new — we&apos;d love to hear about it.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/start-a-project" size="lg">
              Start a Project
            </Button>
            <Button
              href="https://wa.me/919366012345"
              variant="outline"
              size="lg"
              external
            >
              WhatsApp Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
