import { ReactNode } from 'react';
import { ProfileCard } from './ProfileCard';
import { Navigation } from './Navigation';
import { ContactButtons } from './ContactButtons';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ContactButtons />
      
      <div className="flex gap-12 p-12 pt-24">
        <aside className="flex-shrink-0">
          <ProfileCard />
        </aside>
        
        <main className="flex-1 max-w-4xl">
          {children}
        </main>
      </div>
    </div>
  );
};