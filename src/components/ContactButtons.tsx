export const ContactButtons = () => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col space-y-3 z-50">
      <button className="bg-card hover:bg-secondary text-foreground px-6 py-3 rounded-full transition-all duration-200 shadow-lg">
        Contact me
      </button>
      <button className="bg-portfolio-orange hover:bg-portfolio-orange/90 text-background px-6 py-3 rounded-full transition-all duration-200 shadow-lg">
        Behance
      </button>
      <button className="bg-portfolio-green hover:bg-portfolio-green/90 text-background px-6 py-3 rounded-full transition-all duration-200 shadow-lg">
        LinkedIn
      </button>
    </div>
  );
};