export const ContactButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col space-y-2 md:space-y-3 z-50">
      <button className="bg-card hover:bg-secondary text-foreground px-3 py-2 md:px-6 md:py-3 rounded-full transition-all duration-200 shadow-lg text-sm md:text-base">
        Contact me
      </button>
      <button className="bg-portfolio-orange hover:bg-portfolio-orange/90 text-background px-3 py-2 md:px-6 md:py-3 rounded-full transition-all duration-200 shadow-lg text-sm md:text-base">
        Behance
      </button>
      <button className="bg-portfolio-green hover:bg-portfolio-green/90 text-background px-3 py-2 md:px-6 md:py-3 rounded-full transition-all duration-200 shadow-lg text-sm md:text-base">
        LinkedIn
      </button>
    </div>
  );
};