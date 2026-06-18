export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'XIFOZ transformed our security posture. Their proactive approach identified vulnerabilities we did not know existed, and their remediation guidance was practical and actionable.',
    author: 'Rajesh Sharma',
    role: 'CTO',
    company: 'FinTech Solutions India',
    initials: 'RS',
  },
  {
    quote: 'Working with XIFOZ gave us the confidence to pursue enterprise clients. Their SOC 2 compliance support was thorough, professional, and completed ahead of schedule.',
    author: 'Priya Menon',
    role: 'VP Engineering',
    company: 'CloudScale SaaS',
    initials: 'PM',
  },
  {
    quote: 'The penetration testing team at XIFOZ is exceptional. They found critical vulnerabilities that previous assessments missed, and their report quality is the best we have seen.',
    author: 'Amit Kumar',
    role: 'CISO',
    company: 'HealthFirst Hospitals',
    initials: 'AK',
  },
  {
    quote: 'Their incident response team was on-site within hours when we faced a ransomware attempt. Their calm, methodical approach contained the threat and minimized business disruption.',
    author: 'Sarah Chen',
    role: 'Director of IT',
    company: 'Global Manufacturing Corp',
    initials: 'SC',
  },
  {
    quote: 'XIFOZ does not just sell services — they build partnerships. Their security awareness training reduced our phishing click rate from 18% to under 3% in six months.',
    author: 'David Osei',
    role: 'Security Manager',
    company: 'EduTech Platform',
    initials: 'DO',
  },
  {
    quote: 'The compliance consulting team guided us through ISO 27001 certification with expertise and patience. Their documentation templates alone saved us hundreds of hours.',
    author: 'Neha Gupta',
    role: 'Head of Operations',
    company: 'DataVault Solutions',
    initials: 'NG',
  },
];
