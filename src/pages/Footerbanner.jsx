import React, { useRef, useState, useEffect } from 'react';
import splitStringUsingRegex from '../utils/splitStringUsingRegex';
import { motion } from 'framer-motion';

const fontStyle = {
    fontSize: '80px',
    color: '#fff',
    fontWeight: 'bold',
    textShadow: '2px 2px 5px #5d5d5d'
};

const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 }
};

export default function Footerbanner() {
    const text1 = "One";
    const text2 = "One step Closer.";
    const headingChars = splitStringUsingRegex(text2);
    
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            style={{
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                width: '100vw',
                backgroundImage: `url('https://se-prod-webapp-media.s3.amazonaws.com/assets/landingPage/warranty-bg.webp')`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <h1 style={fontStyle}>{text1}</h1>
            <motion.h1
                ref={ref}
                initial="hidden"
                animate={inView ? "reveal" : "hidden"}
                transition={{ staggerChildren: 0.05 }}
                aria-live="polite"
            >
                {headingChars.map((char, index) => (
                    <motion.span
                        key={`${char}-${index}`}
                        transition={{ duration: 0.5 }}
                        variants={charVariants}
                        style={fontStyle}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    );
}
