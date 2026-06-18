import { Container } from '@/components/Container';
import { SectionWrapper } from '@/components/SectionWrapper';
import { TestimonialCard } from '@/components/TestimonialCard';
import { testimonials } from '@/data/testimonials';

export function TestimonialsSection() {
  return (
    <SectionWrapper background="dim">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-xifoz-blue mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-xifoz-text tracking-tight mb-4">
            Trusted by security-conscious organizations
          </h2>
          <p className="text-base text-xifoz-text-secondary max-w-xl mx-auto">
            Here is what our clients say about working with XIFOZ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              initials={testimonial.initials}
            />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
