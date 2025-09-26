import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const articles = [
  {
    title: 'The Clash Between Aesthetic Trends and Usability: Where Do We Draw the Line?',
    description: 'This article explores the tension between trendy aesthetics and practical usability in design, emphasizing the need for balance. It argues that while visual appeal is important, it should never compromise user experience.',
    date: 'Aug 4, 2024',
    readTime: '3 min read'
  },
  {
    title: 'Design Systems: Your Ultimate Cheat Code for UX Design Success',
    description: 'Design systems streamline UX design by providing reusable components and consistent guidelines, making product development faster and more scalable. They are the ultimate cheat code for maintaining quality while accelerating delivery.',
    date: 'Aug 18, 2024',
    readTime: '2 min read'
  },
  {
    title: 'Social Media Hesitation: More Than Just Procrastination',
    description: 'Social media hesitation often runs deeper than procrastination. It is about fear, pressure, and emotional barriers. Behind every delayed post is a story of self-doubt, overthinking, and the fear of being misunderstood.',
    date: 'Jan 20, 2025',
    readTime: '2 min read'
  }
];

export default function Writings() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section>
        <h1 className="text-6xl font-bold text-foreground">
          UX/UI
          <br />
          <span className="text-portfolio-text-muted">DESIGNER</span>
        </h1>
        <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed">
          Passionate about crafting intuitive, engaging experiences that bring ideas to life. 
          With a focus on beauty, clarity, and purpose, I transform visions into timeless digital products.
        </p>
      </section>

      {/* Design Thoughts */}
      <section>
        <h2 className="text-4xl font-bold text-foreground mb-8">
          DESIGN
          <br />
          <span className="text-portfolio-text-muted">THOUGHTS</span>
        </h2>
        
        <div className="space-y-8">
          {articles.map((article, index) => (
            <Card key={index} className="bg-card border-border hover:bg-secondary/50 transition-colors cursor-pointer group">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-foreground text-2xl leading-tight flex-1 pr-6 group-hover:text-portfolio-orange transition-colors">
                    {article.title}
                  </h3>
                  <ExternalLink className="text-portfolio-text-muted group-hover:text-portfolio-orange transition-colors flex-shrink-0 mt-1" size={24} />
                </div>
                <p className="text-portfolio-text-muted mb-6 leading-relaxed text-lg">
                  {article.description}
                </p>
                <div className="flex justify-between items-center text-sm text-portfolio-text-muted">
                  <span className="font-medium">{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}