import { Container } from '@/components/Container';
import { SectionWrapper } from '@/components/SectionWrapper';
import { FAQSection } from '@/components/FAQSection';
import { contactFAQ } from '@/data/faq';
import { Button } from '@/components/Button';
import { GridCoverage } from '@/components/GridCoverage';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

function ContactHero() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-xifoz-base overflow-hidden">
      <GridCoverage className="absolute inset-0" opacity={0.25} />
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <span
            className={cn(
              'text-xs font-semibold uppercase tracking-[0.2em] text-xifoz-blue mb-4 block transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            Contact
          </span>
          <h1
            className={cn(
              'text-4xl md:text-5xl lg:text-6xl font-normal text-xifoz-text tracking-tight mb-6 transition-all duration-700 delay-100',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            Let us start a conversation
          </h1>
          <p
            className={cn(
              'text-lg md:text-xl text-xifoz-text-secondary leading-relaxed transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            Whether you need a security assessment, compliance support, or ongoing protection, we are here to help.
          </p>
        </div>
      </Container>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-xifoz-surface border border-xifoz-text/5 rounded-card p-8 md:p-12 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-xifoz-success/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-xifoz-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-xifoz-text mb-2">Thank you for reaching out</h3>
        <p className="text-sm text-xifoz-text-secondary">
          We have received your message and will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-xifoz-text mb-2">
            Full Name
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-xifoz-base border border-xifoz-text/10 rounded-lg text-sm text-xifoz-text placeholder:text-xifoz-text-secondary/40 focus:outline-none focus:border-xifoz-blue/30 transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-xifoz-text mb-2">
            Email Address
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-xifoz-base border border-xifoz-text/10 rounded-lg text-sm text-xifoz-text placeholder:text-xifoz-text-secondary/40 focus:outline-none focus:border-xifoz-blue/30 transition-colors"
            placeholder="john@company.com"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-xifoz-text mb-2">
            Company
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 bg-xifoz-base border border-xifoz-text/10 rounded-lg text-sm text-xifoz-text placeholder:text-xifoz-text-secondary/40 focus:outline-none focus:border-xifoz-blue/30 transition-colors"
            placeholder="Company Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-xifoz-text mb-2">
            Service Interested In
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 bg-xifoz-base border border-xifoz-text/10 rounded-lg text-sm text-xifoz-text focus:outline-none focus:border-xifoz-blue/30 transition-colors appearance-none cursor-pointer"
          >
            <option value="">Select a service</option>
            <option value="penetration-testing">Penetration Testing</option>
            <option value="vulnerability-assessment">Vulnerability Assessment</option>
            <option value="managed-security">Managed Security Services</option>
            <option value="soc">SOC as a Service</option>
            <option value="cloud-security">Cloud Security</option>
            <option value="compliance">Compliance Consulting</option>
            <option value="incident-response">Incident Response</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-xifoz-text mb-2">
          Message
        </label>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-xifoz-base border border-xifoz-text/10 rounded-lg text-sm text-xifoz-text placeholder:text-xifoz-text-secondary/40 focus:outline-none focus:border-xifoz-blue/30 transition-colors resize-none"
          placeholder="Tell us about your security needs..."
        />
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}

export default function Contact() {
  return (
    <>
      <ContactHero />

      {/* Contact Form & Details */}
      <SectionWrapper background="dim" padding="normal">
        <Container>
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-normal text-xifoz-text tracking-tight mb-6">
                Send us a message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-normal text-xifoz-text tracking-tight mb-6">
                Contact information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-xifoz-blue/5 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-xifoz-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-xifoz-text mb-1">Email</p>
                    <a
                      href="mailto:support@xifoz.com"
                      className="text-sm text-xifoz-text-secondary hover:text-xifoz-blue transition-colors"
                    >
                      support@xifoz.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-xifoz-blue/5 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-xifoz-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-xifoz-text mb-1">Phone</p>
                    <a
                      href="tel:+917999994828"
                      className="text-sm text-xifoz-text-secondary hover:text-xifoz-blue transition-colors"
                    >
                      +91 79999 94828
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-xifoz-blue/5 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-xifoz-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-xifoz-text mb-1">Office</p>
                    <p className="text-sm text-xifoz-text-secondary">
                      Cyber Hub, DLF Phase 3<br />
                      Gurugram, Haryana 122002<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-xifoz-blue/5 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-xifoz-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-xifoz-text mb-1">Business Hours</p>
                    <p className="text-sm text-xifoz-text-secondary">
                      Monday — Friday: 9:00 AM — 6:00 PM IST<br />
                      24/7 Emergency Response Available
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-card overflow-hidden border border-xifoz-text/5 bg-xifoz-base aspect-video flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin size={32} className="mx-auto mb-3 text-xifoz-blue/30" />
                  <p className="text-sm text-xifoz-text-secondary">
                    Gurugram, Haryana 122002
                  </p>
                  <p className="text-xs text-xifoz-text-secondary/60 mt-1">
                    Serving clients across India and globally
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper background="base">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-normal text-xifoz-text tracking-tight mb-4">
                Common questions
              </h2>
              <p className="text-base text-xifoz-text-secondary">
                Quick answers to frequently asked questions about contacting us.
              </p>
            </div>
            <FAQSection items={contactFAQ} />
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
