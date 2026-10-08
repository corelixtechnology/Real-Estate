import React from "react";
import { motion } from "framer-motion";

const defaultAnimationVariants = {
  blurIn: {
    hidden: { filter: "blur(10px)", opacity: 0 },
    show: {
      filter: "blur(0px)",
      opacity: 1,
      transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
    },
  },
  blurInUp: {
    hidden: { filter: "blur(10px)", opacity: 0, y: 16 },
    show: {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  },
  blurInDown: {
    hidden: { filter: "blur(10px)", opacity: 0, y: -16 },
    show: {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  },
  slideDown: {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.85 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] },
    },
  },
};

export function TextAnimate({
  children,
  animation = "blurInUp",
  by = "character",
  startOnView = true,
  once = true,
  delay = 0,
  duration,
  className = "",
  segmentClassName = "",
  as: Component = "p",
  style = {},
  ...props
}) {
  if (typeof children !== "string") {
    // If not a pure string, render children directly or convert to string if possible
    return (
      <Component className={className} style={style} {...props}>
        {children}
      </Component>
    );
  }

  const selectedVariants = defaultAnimationVariants[animation] || defaultAnimationVariants.blurInUp;

  // Stagger intervals based on granularity
  const staggerTime =
    by === "character" ? 0.015 : by === "word" ? 0.06 : 0.12;

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerTime,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: selectedVariants.hidden,
    show: {
      ...selectedVariants.show,
      transition: {
        ...(selectedVariants.show.transition || {}),
        ...(duration ? { duration } : {}),
      },
    },
  };

  const MotionComponent = motion[Component] || motion.div;

  if (by === "character") {
    // Split by words first so that words wrap properly on small screens
    const words = children.split(" ");

    return (
      <MotionComponent
        className={className}
        style={style}
        variants={containerVariants}
        initial="hidden"
        whileInView={startOnView ? "show" : undefined}
        animate={!startOnView ? "show" : undefined}
        viewport={{ once: true, margin: "-20px" }}
        {...props}
      >
        {words.map((word, wordIdx) => (
          <span
            key={`word-${wordIdx}`}
            style={{ display: "inline-block", whiteSpace: "nowrap" }}
          >
            {Array.from(word).map((char, charIdx) => (
              <motion.span
                key={`char-${wordIdx}-${charIdx}`}
                variants={itemVariants}
                className={segmentClassName}
                style={{ display: "inline-block", willChange: "transform, opacity, filter" }}
              >
                {char}
              </motion.span>
            ))}
            {wordIdx < words.length - 1 && (
              <span style={{ display: "inline-block", width: "0.28em" }}>&nbsp;</span>
            )}
          </span>
        ))}
      </MotionComponent>
    );
  }

  if (by === "word") {
    const words = children.split(" ");

    return (
      <MotionComponent
        className={className}
        style={style}
        variants={containerVariants}
        initial="hidden"
        whileInView={startOnView ? "show" : undefined}
        animate={!startOnView ? "show" : undefined}
        viewport={{ once: true, margin: "-20px" }}
        {...props}
      >
        {words.map((word, idx) => (
          <span
            key={`word-${idx}`}
            style={{ display: "inline-block" }}
          >
            <motion.span
              variants={itemVariants}
              className={segmentClassName}
              style={{ display: "inline-block", willChange: "transform, opacity, filter" }}
            >
              {word}
            </motion.span>
            {idx < words.length - 1 && (
              <span style={{ display: "inline-block", width: "0.28em" }}>&nbsp;</span>
            )}
          </span>
        ))}
      </MotionComponent>
    );
  }

  if (by === "line") {
    const lines = children.split("\n");

    return (
      <MotionComponent
        className={className}
        style={style}
        variants={containerVariants}
        initial="hidden"
        whileInView={startOnView ? "show" : undefined}
        animate={!startOnView ? "show" : undefined}
        viewport={{ once: true, margin: "-20px" }}
        {...props}
      >
        {lines.map((line, idx) => (
          <motion.span
            key={`line-${idx}`}
            variants={itemVariants}
            className={segmentClassName}
            style={{
              display: "block",
              minHeight: line === "" ? "1em" : undefined,
              willChange: "transform, opacity, filter"
            }}
          >
            {line === "" ? "\u00A0" : line}
          </motion.span>
        ))}
      </MotionComponent>
    );
  }

  // by === "text"
  return (
    <MotionComponent
      className={className}
      style={style}
      variants={itemVariants}
      initial="hidden"
      whileInView={startOnView ? "show" : undefined}
      animate={!startOnView ? "show" : undefined}
      viewport={{ once: true, margin: "-20px" }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}


export function TextAnimateDemo() {
  return (
    <TextAnimate animation="blurInUp" by="character" once>
      Blur in by character
    </TextAnimate>
  );
}

export function TextAnimateDemo5() {
  return (
    <TextAnimate animation="fadeIn" by="line" as="p">
      {`Fade in by line as paragraph\n\nFade in by line as paragraph\n\nFade in by line as paragraph`}
    </TextAnimate>
  );
}

export default TextAnimate;



