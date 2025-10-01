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
      
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 p-4 md:p-8 lg:p-12 pt-24 md:pt-32 lg:pt-36 justify-center items-center lg:items-start max-w-7xl mx-auto">
        <aside className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:block">
          <ProfileCard />
        </aside>
        
        <main className="flex-1 w-full lg:max-w-4xl">
          {children}
        </main>
      </div>
    </div>
  );
};
