export const ContactButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col space-y-2 md:space-y-3 z-50">
    
      <button className="bg-portfolio-orange hover:bg-portfolio-orange/90 text-white px-3 py-2 md:px-6  md:py-3 rounded-md  transition-all duration-200 shadow-lg text-sm md:text font-bold">
        Behance
      </button>
      <button className="bg-portfolio-green hover:bg-portfolio-green/90 text-background px-3 py-2 md:px-6  md:py-3 rounded-md  transition-all duration-200 shadow-lg text-sm md:text-base font-bold">
        LinkedIn
      </button>
      <button className="bg-white hover:bg-gray-100 text-black px-3 py-10 md:px-10 md:py-3 rounded-md transition-all duration-200 shadow-lg text-sm md:text-base font-bold">
        Contact me
      </button>
    </div>
  );
};