import { useParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

interface ProjectDetail {
  title: string;
  subtitle: string;
  description: string;
  problem?: string;
  goals?: string[];
  approach?: string;
  process?: string[];
  result?: string;
  reflection?: string;
  mockups: string;
}

const projectDetails: Record<string, ProjectDetail> = {
  'gym-repairs': {
    title: 'GYM REPAIRS',
    subtitle: 'PROJECT',
    description: 'A comprehensive platform for gym equipment repair services, streamlining the process for gym owners to find and schedule maintenance for their equipment.',
    problem: 'Gym owners face challenges in finding reliable repair services for their equipment, often leading to extended downtime and frustrated customers. Traditional maintenance scheduling was inefficient and lacked transparency.',
    goals: [
      'Create a seamless service request system',
      'Build credibility and professionalism through design',
      'Reduce time spent on repairs scheduling',
      'Meet the rapid response and quality standards'
    ],
    process: [
      'Extensive user research and competitive analysis',
      'Information architecture with card sorting and UX analysis',
      'Rapid prototyping of service requests and responses (organised)',
      'Usability studies and iterative designs (brand awareness goals)'
    ],
    reflection: 'The final design improved operational efficiency and supports Gym Repairs\' brand vision, making equipment repair management significantly easier for gym owners.',
    mockups: '/src/assets/gym-repairs-project.png'
  },
  'lordev': {
    title: 'LORDEV',
    subtitle: 'PROJECT',
    description: 'LORDEV is a software development company that offers a range of services to clients looking for premium software solutions. Their services include website, mobile app, and desktop development.',
    problem: 'LORDEV needed a modern, professional website that would effectively showcase their software development expertise and attract potential clients looking for high-quality development services.',
    goals: [
      'Clearly communicate services in a simple and clear way',
      'Keep the website friendly, modern, and trustworthy',
      'Focus on smooth user flow with strong CTA',
      'Use its fully responsive across devices'
    ],
    approach: 'I structured the layout into clear sections, used about Services, Why Choose Us, Call-to-Action elements, and experience testimonials. I focused on creating a harmonious and professional design that would resonate.',
    result: 'The project was a tremendous and personal one that builds trust and makes it easy for users to understand LORDEV\'s value - as stated in client feedback.',
    mockups: '/src/assets/lordev-project.png'
  },
  'lotto-strategies': {
    title: 'Lotto Strategies',
    subtitle: 'PROJECT',
    description: 'Lotto Strategies is designed to help users improve their lottery strategies through data analysis and strategic guidance.',
    problem: 'Many lottery players lack access to data-driven strategies and insights that could improve their chances of winning.',
    goals: [
      'Provide data-driven lottery analysis',
      'Create an intuitive interface for strategy planning',
      'Build user confidence through clear guidance',
      'Ensure mobile responsiveness for on-the-go access'
    ],
    mockups: '/src/assets/lotto-strategies-project.png'
  },
  'more-life': {
    title: 'MORE LIFE',
    subtitle: 'PROJECT',
    description: 'More Life offers comprehensive event management and ticketing solutions, helping organizers create memorable experiences.',
    problem: 'Event organizers struggled with fragmented systems for planning, promotion, and ticket sales, leading to inefficient workflows.',
    goals: [
      'Streamline event creation and management',
      'Integrate ticketing with promotional tools',
      'Provide analytics for event performance',
      'Create seamless user experience for both organizers and attendees'
    ],
    mockups: '/src/assets/more-life-project.png'
  },
  'tv-bits': {
    title: 'TV BITS',
    subtitle: 'PROJECT',
    description: 'TV BITS revolutionizes entertainment discovery by creating a platform where users can explore and stream content.',
    problem: 'Users faced difficulty discovering new content across multiple streaming platforms, leading to decision fatigue.',
    goals: [
      'Simplify content discovery across platforms',
      'Create personalized viewing recommendations',
      'Streamline the viewing experience',
      'Build an engaging and visually appealing interface'
    ],
    mockups: '/src/assets/tv-bits-project.png'
  },
  'noble-adventure': {
    title: 'NOBLE ADVENTURE',
    subtitle: 'PROJECT',
    description: 'Noble Adventure specializes in creating unforgettable travel experiences, offering curated tours and adventure packages.',
    goals: [
      'Inspire wanderlust through stunning visuals',
      'Build credibility with social proof',
      'Streamline the booking process',
      'Provide responsive mobile experience'
    ],
    process: [
      'Researched the bookable packages and database',
      'Mapping Best practices and understanding UX',
      'Focused live integration and ideation',
      'Executed final design and ensured responsive design'
    ],
    reflection: 'The final design captures the spirit of adventure while providing a practical booking platform that connects travelers with their next great experience.',
    mockups: '/src/assets/noble-adventure-project.png'
  }
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectDetails[slug] : null;

  if (!project) {
    return (
      <div className="text-center text-portfolio-text-muted">
        Project not found
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {/* Project Header */}
      <section>
        <h1 className="text-6xl font-bold text-foreground">
          {project.title}
          <br />
          <span className="text-portfolio-text-muted">{project.subtitle}</span>
        </h1>
        <p className="text-portfolio-text-muted mt-6 max-w-2xl leading-relaxed text-lg">
          {project.description}
        </p>
      </section>

      {/* Problem Statement */}
      {project.problem && (
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">
            PROBLEM <span className="text-portfolio-text-muted">STATEMENT</span>
          </h2>
          <p className="text-portfolio-text-muted leading-relaxed text-lg">
            {project.problem}
          </p>
        </section>
      )}

      {/* Goals & Objectives */}
      {project.goals && (
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">
            GOALS & <span className="text-portfolio-text-muted">OBJECTIVES</span>
          </h2>
          <ul className="space-y-3">
            {project.goals.map((goal, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-portfolio-orange rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-portfolio-text-muted text-lg">{goal}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* My Approach */}
      {project.approach && (
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">
            MY <span className="text-portfolio-text-muted">APPROACH</span>
          </h2>
          <p className="text-portfolio-text-muted leading-relaxed text-lg">
            {project.approach}
          </p>
        </section>
      )}

      {/* Design Process */}
      {project.process && (
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">
            DESIGN <span className="text-portfolio-text-muted">PROCESS</span>
          </h2>
          <ul className="space-y-3">
            {project.process.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-portfolio-orange rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-portfolio-text-muted text-lg">{step}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Result */}
      {project.result && (
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">
            RESULT
          </h2>
          <p className="text-portfolio-text-muted leading-relaxed text-lg">
            {project.result}
          </p>
        </section>
      )}

      {/* Final Reflection */}
      {project.reflection && (
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">
            FINAL <span className="text-portfolio-text-muted">REFLECTION</span>
          </h2>
          <p className="text-portfolio-text-muted leading-relaxed text-lg">
            {project.reflection}
          </p>
        </section>
      )}

      {/* Design Mockups */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-6">
          DESIGN <span className="text-portfolio-text-muted">MOCKUPS</span>
        </h2>
        <Card className="bg-card border-border">
          <CardContent className="p-0">
            <img 
              src={project.mockups} 
              alt={`${project.title} Design Mockups`}
              className="w-full h-auto rounded-lg"
            />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}