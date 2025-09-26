import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  { 
    name: 'Mind Hush', 
    description: 'AI-driven mental health chatbot', 
    color: 'bg-slate-700',
    slug: 'mind-hush'
  },
  { 
    name: 'Lotto Strategies', 
    description: 'Lottery Strategy tools and Guidance', 
    color: 'bg-red-600',
    slug: 'lotto-strategies'
  },
  { 
    name: 'LORDEV', 
    description: 'Soft Dev Company site', 
    color: 'bg-blue-600',
    slug: 'lordev'
  },
  { 
    name: 'More Life', 
    description: 'Event Management and Ticketing System', 
    color: 'bg-gray-600',
    slug: 'more-life'
  },
  { 
    name: 'TV BITS', 
    description: 'Streaming Platform', 
    color: 'bg-red-700',
    slug: 'tv-bits'
  },
  { 
    name: 'Cumberland Biotherapeutics', 
    description: 'Health-focused organization site', 
    color: 'bg-blue-700',
    slug: 'cumberland-biotherapeutics'
  },
  { 
    name: 'Noble Adventure', 
    description: 'Travel and Tourism Company', 
    color: 'bg-blue-500',
    slug: 'noble-adventure'
  },
  { 
    name: 'GYM REPAIRS', 
    description: 'Gym Repair and Maintenance Company site', 
    color: 'bg-gray-700',
    slug: 'gym-repairs'
  },
];

export default function Projects() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
          UX/UI
          <br />
          <span className="text-portfolio-text-muted">DESIGNER</span>
        </h1>
        <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed">
          Passionate about crafting intuitive, engaging experiences that bring ideas to life. 
          With a focus on beauty, clarity, and purpose, I transform visions into timeless digital products.
        </p>
      </section>

      {/* Recent Projects */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 md:mb-8">
          RECENT
          <br />
          <span className="text-portfolio-text-muted">PROJECTS</span>
        </h2>
        
        <div className="space-y-4">
          {projects.map((project, index) => (
            <Link key={index} to={`/projects/${project.slug}`}>
              <Card className="bg-card border-border hover:bg-secondary/50 transition-colors cursor-pointer group">
                <CardContent className="p-4 md:p-6 flex items-center justify-between">
                  <div className="flex items-center gap-3 md:gap-4 min-w-0 flex-1">
                    <div className={`w-12 h-12 md:w-16 md:h-16 ${project.color} rounded-lg flex-shrink-0`}></div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-foreground text-base md:text-xl group-hover:text-portfolio-orange transition-colors truncate">
                        {project.name}
                      </h3>
                      <p className="text-portfolio-text-muted text-sm md:text-base line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                  <ExternalLink className="text-portfolio-text-muted group-hover:text-portfolio-orange transition-colors flex-shrink-0" size={20} />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}