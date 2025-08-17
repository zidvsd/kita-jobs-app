import { useEffect, useState } from "react";
const useResponsiveToggle = (breakpoint: number = 768) => {
  const [isToggled, setIsToggled] = useState(window.innerWidth >= breakpoint);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= breakpoint) {
        setIsToggled(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return { isToggled, setIsToggled };
};

export default useResponsiveToggle;
