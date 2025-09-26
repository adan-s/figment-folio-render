import profilePhoto from '@/assets/profile-photo.jpg';

export const ProfileCard = () => {
  return (
    <div className="bg-card p-8 rounded-2xl w-80 flex flex-col items-center text-center space-y-6">
      <div className="relative">
        <img 
          src={profilePhoto} 
          alt="Maryam Saeed" 
          className="w-48 h-48 rounded-2xl object-cover"
        />
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-portfolio-orange w-8 h-8 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-background rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold text-foreground">Maryam Saeed</h2>
        <div className="mt-4 relative">
          <div className="w-12 h-0.5 bg-portfolio-orange mx-auto"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-portfolio-orange rounded-full"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-portfolio-orange rounded-full"></div>
        </div>
      </div>
      
      <p className="text-portfolio-text-muted text-sm leading-relaxed">
        A UI/UX Designer blending creativity and strategy to build standout digital products.
      </p>
    </div>
  );
};