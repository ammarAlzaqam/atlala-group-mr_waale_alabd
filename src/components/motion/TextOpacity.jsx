import { motion, useInView } from "motion/react";
import { stagger } from "motion";
import { useRef } from "react";

const effects = {
  fade: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  },

  slideUp: {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },

  slideDown: {
    hidden: {
      opacity: 0,
      y: -40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },

  slideLeft: {
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },

  slideRight: {
    hidden: {
      opacity: 0,
      x: -40,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },

  scale: {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  },

  rotate: {
    hidden: {
      opacity: 0,
      rotate: -20,
      y: 20,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      y: 0,
    },
  },

  blur: {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
    },
  },

  wave: {
    hidden: {
      opacity: 0,
      y: 20,
      rotate: 8,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
    },
  },
};

export function MovingTitleText({
  text,
  effect = "slideUp",
  duration = 0.5,
  staggerTime = 0.08,
  once = true,
  className = "",
  from = "first",
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once,
    amount: 0.3,
  });

  const selectedEffect = effects[effect] || effects.slideUp;

  const containerVariants = {
    hidden: {},

    visible: {
      transition: {
        delayChildren: stagger(staggerTime, {
          from,
        }),
      },
    },
  };

  const wordVariants = {
    hidden: selectedEffect.hidden,

    visible: {
      ...selectedEffect.visible,

      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // تقسيم النص إلى كلمات بدل الحروف
  const words = text.trim().split(/\s+/);

  return (
    <motion.h1
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      aria-label={text}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={wordVariants}
          aria-hidden="true"
          className={`inline-block ${className}`}
        >
          {word}
          {index !== words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export function MovingDesText({
  text,
  effect = "slideUp",
  duration = 0.5,
  staggerTime = 0.08,
  once = true,
  className = "",
  from = "first",
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once,
    amount: 0.3,
  });

  const selectedEffect = effects[effect] || effects.slideUp;

  const containerVariants = {
    hidden: {},

    visible: {
      transition: {
        delayChildren: stagger(staggerTime, {
          from,
        }),
      },
    },
  };

  const wordVariants = {
    hidden: selectedEffect.hidden,

    visible: {
      ...selectedEffect.visible,

      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // تقسيم النص إلى كلمات بدل الحروف
  const words = text.trim().split(/\s+/);

  return (
    <motion.p
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      aria-label={text}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={wordVariants}
          aria-hidden="true"
          className={`inline-block ${className}`}
        >
          {word}
          {index !== words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.p>
  );
}
