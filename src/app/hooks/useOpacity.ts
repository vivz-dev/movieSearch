import { useEffect, useState } from 'react';

function useOpacity(){
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          const maxScroll = 600;
          const newOpacity = Math.max(1 - (scrollTop / maxScroll), 0);
          setOpacity(newOpacity);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return {opacity}
}

export default useOpacity;