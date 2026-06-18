import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface CodeMockupProps {
  className?: string;
}

const codeLines = [
  { text: 'version: "3.8"', color: 'text-purple-400' },
  { text: '', color: '' },
  { text: 'services:', color: 'text-blue-400' },
  { text: '  security-mesh:', color: 'text-cyan-400' },
  { text: '    image: xifoz/security-mesh:latest', color: 'text-green-400' },
  { text: '    container_name: xifoz-shield', color: 'text-xifoz-text-inverse/70' },
  { text: '    restart: always', color: 'text-xifoz-text-inverse/70' },
  { text: '    environment:', color: 'text-blue-400' },
  { text: '      - THREAT_MODE=proactive', color: 'text-yellow-400' },
  { text: '      - LOG_LEVEL=verbose', color: 'text-yellow-400' },
  { text: '      - POLICY=zero-trust', color: 'text-yellow-400' },
  { text: '    ports:', color: 'text-blue-400' },
  { text: '      - "443:443"', color: 'text-orange-400' },
  { text: '      - "8080:8080"', color: 'text-orange-400' },
  { text: '    volumes:', color: 'text-blue-400' },
  { text: '      - ./certs:/etc/xifoz/certs:ro', color: 'text-xifoz-text-inverse/70' },
  { text: '      - ./logs:/var/log/xifoz', color: 'text-xifoz-text-inverse/70' },
  { text: '    networks:', color: 'text-blue-400' },
  { text: '      - mesh-network', color: 'text-cyan-400' },
  { text: '    healthcheck:', color: 'text-blue-400' },
  { text: '      test: ["CMD", "xifoz", "status"]', color: 'text-xifoz-text-inverse/70' },
  { text: '      interval: 30s', color: 'text-xifoz-text-inverse/70' },
  { text: '      timeout: 10s', color: 'text-xifoz-text-inverse/70' },
  { text: '      retries: 3', color: 'text-xifoz-text-inverse/70' },
];

export function CodeMockup({ className }: CodeMockupProps) {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= codeLines.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn('rounded-card overflow-hidden bg-[#1a1a2e] border border-white/10', className)}>
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#16162a] border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <div className="ml-4 text-xs text-white/30 font-mono">xifoz-shield.yml</div>
      </div>
      {/* Code content */}
      <div className="p-4 md:p-6 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
        {codeLines.map((line, index) => (
          <div
            key={index}
            className={cn(
              'transition-opacity duration-300',
              index < visibleLines ? 'opacity-100' : 'opacity-0'
            )}
          >
            {line.text ? (
              <span className={line.color || 'text-xifoz-text-inverse/80'}>{line.text}</span>
            ) : (
              <br />
            )}
          </div>
        ))}
        <div className="inline-block w-2 h-4 bg-xifoz-cyan/70 animate-pulse mt-1" />
      </div>
    </div>
  );
}
