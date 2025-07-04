import { useEffect, useState } from "react";

function useWindowDimensions() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      handleResize();

      window.addEventListener("resize",handleResize)

      return ()=>window.removeEventListener("resize",handleResize)
    }

    
  }, []);

  return dimensions;
}

export default useWindowDimensions;
