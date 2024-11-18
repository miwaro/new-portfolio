import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { Key, useEffect, useRef } from "react";

type AnimatedTextProps = {
  text: string | string[] | undefined | null;
  key: (Key & (string | string[])) | null | undefined;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  solution?: string;
  repeatDelay?: number;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
  setDefinitionHasRendered?: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};
export const AnimatedText = ({
  text,
  once,
  repeatDelay,
  animation = defaultAnimations,
  setDefinitionHasRendered,
  solution,
}: AnimatedTextProps) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { transition: { staggerChildren: 0.03 } },
        hidden: {},
      }}
      aria-hidden
    >
      {textArray.map((line, lineIndex) => (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            lineHeight: "1.3",
            fontSize: "24px",
          }}
          key={`${line}-${lineIndex}`}
        >
          {line?.split(" ").map((word, wordIndex) => (
            <span key={`${word}-${wordIndex}`}>
              {word.split("").map((char, charIndex) => (
                <motion.span key={`${char}-${charIndex}`} variants={animation}>
                  {char}
                </motion.span>
              ))}
              <span>&nbsp;</span>
            </span>
          ))}
        </div>
      ))}
    </motion.div>
  );
};
