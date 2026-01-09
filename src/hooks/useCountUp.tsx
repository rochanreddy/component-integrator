import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface UseCountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  suffix?: string;
}

export const useCountUp = ({ start = 0, end, duration = 2, suffix = "" }: UseCountUpOptions) => {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;

      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (endTime - startTime), 1);
        const easeOutQuad = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeOutQuad * (end - start) + start);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [isInView, start, end, duration]);

  return { ref, count: `${count}${suffix}` };
};
