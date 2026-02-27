import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
    const { threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true } = options;
    const ref = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) {
                        observer.unobserve(element);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold, rootMargin, once]);

    return { ref, isVisible };
}

export function useCounterAnimation(target: number, duration: number = 2000, isActive: boolean = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isActive) return;
        let startTime: number | null = null;
        const startValue = 0;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(startValue + (target - startValue) * eased));
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        requestAnimationFrame(animate);
    }, [target, duration, isActive]);

    return count;
}
