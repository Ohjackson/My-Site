interface ProfileImageProps {
  alt: string;
}

export const ProfileImage = ({ alt }: ProfileImageProps) => {
  return (
    <div className="relative mx-auto h-72 w-72 overflow-hidden rounded-3xl border border-slate-200 shadow-lg dark:border-slate-700 md:h-80 md:w-80">
      <img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
    </div>
  );
};
