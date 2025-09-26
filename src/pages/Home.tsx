import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const projects = [
  { name: 'Mind Hush', description: 'AI-driven mental health chatbot', color: 'bg-slate-700' },
  { name: 'Lotto Strategies', description: 'Lottery Strategy tools and Guidance', color: 'bg-red-600' },
  { name: 'LORDEV', description: 'Soft Dev Company site', color: 'bg-blue-600' },
  { name: 'More Life', description: 'Event Management and Ticketing System', color: 'bg-gray-600' },
  { name: 'TV BITS', description: 'Streaming Platform', color: 'bg-red-700' },
  { name: 'Cumberland Biotherapeutics', description: 'Health-focused organization site', color: 'bg-blue-700' },
  { name: 'Noble Adventure', description: 'Travel and Tourism Company', color: 'bg-blue-500' },
  { name: 'GYM REPAIRS', description: 'Gym Repair and Maintenance Company site', color: 'bg-gray-700' },
];

const tools = [
  { name: 'Figma', icon: '🎨' },
  { name: 'ChatGPT', icon: '🤖' },
  { name: 'Miro', icon: '📝' },
  { name: 'Jira', icon: '📋' },
  { name: 'Sketch', icon: '✏️' },
  { name: 'Maze', icon: '🧩' },
  { name: 'Photoshop', icon: '🖼️' },
  { name: 'Illustrator', icon: '🎭' },
];

const articles = [
  {
    title: 'The Clash Between Aesthetic Trends and Usability: Where Do We Draw the Line?',
    description: 'This article explores the tension between trendy aesthetics and practical usability in design, emphasizing the need for balance.',
    date: 'Aug 4, 2024',
    readTime: '3 min read'
  },
  {
    title: 'Design Systems: Your Ultimate Cheat Code for UX Design Success',
    description: 'Design systems streamline UX design by providing reusable components and consistent guidelines.',
    date: 'Aug 18, 2024',
    readTime: '2 min read'
  },
  {
    title: 'Social Media Hesitation: It\'s More Than Just Procrastination',
    description: 'Social media hesitation often runs deeper than procrastination.',
    date: 'Jan 20, 2025',
    readTime: '2 min read'
  }
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section>
        <div className="flex items-center gap-8">
          <div>
            <h1 className="text-6xl font-bold text-foreground">
              UX/UI
              <br />
              <span className="text-portfolio-text-muted">DESIGNER</span>
            </h1>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed">
              Passionate about crafting intuitive, engaging experiences that bring ideas to life. 
              With a focus on beauty, clarity, and purpose, I transform visions into timeless digital products.
            </p>
          </div>
          
          <div className="flex gap-4">
            <Card className="bg-portfolio-orange p-6 text-background">
              <CardContent className="p-0">
                <div className="text-3xl font-bold">2</div>
                <div className="text-sm">Years</div>
              </CardContent>
            </Card>
            
            <Card className="bg-portfolio-orange p-6 text-background">
              <CardContent className="p-0">
                <div className="text-3xl font-bold">+20</div>
                <div className="text-sm">Projects</div>
              </CardContent>
            </Card>
            
            <Card className="bg-portfolio-green p-6 text-background">
              <CardContent className="p-0">
                <div className="text-3xl font-bold">90%</div>
                <div className="text-sm">Success</div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
          <Card className="bg-portfolio-orange p-4 text-background text-center">
            <CardContent className="p-0">
              <div className="text-sm font-medium">DYNAMIC ANIMATION</div>
              <div className="text-xs">MOTION DESIGNER</div>
            </CardContent>
          </Card>
          <Card className="bg-portfolio-green p-4 text-background text-center">
            <CardContent className="p-0">
              <div className="text-sm font-medium">SKETCH, WIREFRAME, UX</div>
              <div className="text-xs">PROTOTYPING</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent Projects */}
      <section>
        <h2 className="text-4xl font-bold text-foreground mb-2">
          RECENT
          <br />
          <span className="text-portfolio-text-muted">PROJECTS</span>
        </h2>
        
        <div className="space-y-4 mt-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border hover:bg-secondary/50 transition-colors cursor-pointer">
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${project.color} rounded-lg`}></div>
                  <div>
                    <h3 className="font-semibold text-foreground">{project.name}</h3>
                    <p className="text-sm text-portfolio-text-muted">{project.description}</p>
                  </div>
                </div>
                <ExternalLink className="text-portfolio-text-muted" size={20} />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-4xl font-bold text-foreground mb-8">
          2 YEARS OF
          <br />
          <span className="text-portfolio-text-muted">EXPERIENCE</span>
        </h2>
        
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-foreground">Associate UI/UX Designer</h3>
              <span className="text-portfolio-text-muted">Code District</span>
            </div>
            <p className="text-portfolio-text-muted text-sm mb-1">
              Designed intuitive web/mobile UIs, maintained the design system, and ensured smooth cross-functional collaboration
            </p>
            <div className="flex justify-between items-center text-sm text-portfolio-text-muted">
              <span>07/2024 - Present</span>
              <span>Full time Onsite, Lahore, Pakistan</span>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-foreground">Associate UI/UX Designer</h3>
              <span className="text-portfolio-text-muted">LORDEV</span>
            </div>
            <p className="text-portfolio-text-muted text-sm mb-1">
              Designed scalable interfaces, ensured design system consistency, and supported product teams through research and design delivery
            </p>
            <div className="flex justify-between items-center text-sm text-portfolio-text-muted">
              <span>01/2024 - 07/2024</span>
              <span>Remote Part time, Lahore, Pakistan</span>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-foreground">Creative Designer</h3>
              <span className="text-portfolio-text-muted">IOI Technology</span>
            </div>
            <p className="text-portfolio-text-muted text-sm mb-1">
              Developed user-centric web/mobile wireframes and prototypes for a global IT services provider, enhancing UX with positive user feedback
            </p>
            <div className="flex justify-between items-center text-sm text-portfolio-text-muted">
              <span>01/2023 - 06/2023</span>
              <span>Part time Hybrid, Lahore, Pakistan</span>
            </div>
          </div>
        </div>
      </section>

      {/* Working Tools */}
      <section>
        <h2 className="text-4xl font-bold text-foreground mb-8">
          WORKING
          <br />
          <span className="text-portfolio-text-muted">TOOLS</span>
        </h2>
        
        <div className="grid grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <Card key={index} className="bg-card border-border p-4 text-center hover:bg-secondary/50 transition-colors">
              <CardContent className="p-0">
                <div className="text-2xl mb-2">{tool.icon}</div>
                <div className="text-sm font-medium text-foreground">{tool.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Design Thoughts */}
      <section>
        <h2 className="text-4xl font-bold text-foreground mb-8">
          DESIGN
          <br />
          <span className="text-portfolio-text-muted">THOUGHTS</span>
        </h2>
        
        <div className="space-y-6">
          {articles.map((article, index) => (
            <Card key={index} className="bg-card border-border hover:bg-secondary/50 transition-colors cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-foreground text-lg leading-tight flex-1 pr-4">
                    {article.title}
                  </h3>
                  <ExternalLink className="text-portfolio-text-muted flex-shrink-0" size={20} />
                </div>
                <p className="text-portfolio-text-muted text-sm mb-3 leading-relaxed">
                  {article.description}
                </p>
                <div className="flex justify-between items-center text-xs text-portfolio-text-muted">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <h2 className="text-4xl font-bold text-foreground mb-8">
          LET'S WORK
          <br />
          <span className="text-portfolio-text-muted">TOGETHER</span>
        </h2>
        
        <Card className="bg-card border-border">
          <CardContent className="p-8 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-portfolio-text-muted">Name</label>
                <Input className="mt-1 bg-background border-border" placeholder="Enter your name" />
              </div>
              <div>
                <label className="text-sm text-portfolio-text-muted">Email</label>
                <Input className="mt-1 bg-background border-border" placeholder="Enter your email" />
              </div>
            </div>
            
            <div>
              <label className="text-sm text-portfolio-text-muted">Subject</label>
              <Input className="mt-1 bg-background border-border" placeholder="Enter subject" />
            </div>
            
            <div>
              <label className="text-sm text-portfolio-text-muted">Message</label>
              <Textarea className="mt-1 bg-background border-border" rows={6} placeholder="Enter your message" />
            </div>
            
            <Button className="bg-portfolio-orange hover:bg-portfolio-orange/90 text-background w-full py-6 text-lg">
              Send Message
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}