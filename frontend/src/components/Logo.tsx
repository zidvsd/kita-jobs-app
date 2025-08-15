type LogoProps = {
  textSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  textIcon?: 4 | 6 | 8 | 10 | 12; // only allowed Tailwind spacing sizes
};

const Logo = ({ textSize = "2xl", textIcon = 8 }: LogoProps) => {
  type SizeKey = Exclude<LogoProps["textSize"], undefined>;

  const sizeClasses: Record<SizeKey, string> = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
  };

  // Use Exclude to remove undefined from keys
  const iconSizes: Record<Exclude<LogoProps["textIcon"], undefined>, string> = {
    4: "w-4 h-4",
    6: "w-6 h-6",
    8: "w-8 h-8",
    10: "w-10 h-10",
    12: "w-12 h-12",
  };

  return (
    <div className="flex flex-row items-center ">
      <img className={iconSizes[textIcon]} src="./app-logo.svg" alt="Logo" />
      <h1 className={`${sizeClasses[textSize]} font-bold`}>
        <span className="text-black">Kita</span>
        <span className="text-primary">Jobs</span>
      </h1>
    </div>
  );
};

export default Logo;
