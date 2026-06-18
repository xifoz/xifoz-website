import { Container } from '@/components/Container';
import { CodeMockup } from '@/components/CodeMockup';
import { GridCoverage } from '@/components/GridCoverage';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

export function SystemicResilience() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 bg-xifoz-structural overflow-hidden"
    >
      {/* Grid overlay */}
      <GridCoverage className="absolute inset-0" opacity={0.15} />
      <div className="absolute inset-0 bg-gradient-to-b from-xifoz-structural via-transparent to-xifoz-structural" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text */}
          <div
            className={cn(
              'transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            )}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-xifoz-cyan mb-4 block">
              Infrastructure
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-xifoz-text-inverse tracking-tight mb-6">
              Resilience is a system,{' '}
              <span className="text-xifoz-cyan">not a feature</span>
            </h2>
            <p className="text-base md:text-lg text-xifoz-text-inverse/70 leading-relaxed mb-8">
              We architect environments where failure is anticipated, contained, and automatically remediated. Our infrastructure-as-code approach ensures your security posture scales with your business.
            </p>
            <ul className="space-y-3">
              {[
                'Automated threat detection and response',
                'Infrastructure as code security controls',
                'Self-healing security architecture',
                'Continuous compliance validation',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-xifoz-cyan flex-shrink-0" />
                  <span className="text-sm text-xifoz-text-inverse/60">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Code Mockup */}
          <div
            className={cn(
              'transition-all duration-700 delay-300',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            )}
          >
            <CodeMockup />
          </div>
        </div>
      </Container>
    </section>
  );
}
