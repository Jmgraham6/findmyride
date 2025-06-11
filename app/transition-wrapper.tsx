"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function TransitionWrapper({ duration, easing, animType, children }: {
  duration: string;
  easing: string;
  animType: string;
  children: ReactNode;
}) {
  const ANIM_DURATION = parseFloat(duration);
  const ANIM_EASING = JSON.parse(easing);
  const TRANSITION_ANIM_TYPE = animType;

  const transitionVariants: any = {
    FADE_IN: {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } },
    },
    SLIDE_IN_LEFT: {
      hidden: { x: -50, opacity: 0 },
      show: { x: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } },
    },
    SLIDE_IN_RIGHT: {
      hidden: { x: 50, opacity: 0 },
      show: { x: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } },
    },
    ZOOM_IN: {
      hidden: { scale: 0.8, opacity: 0 },
      show: { scale: 1, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } },
    },
    FLIP_IN_X: {
      hidden: { rotateX: 90, opacity: 0, transformPerspective: 600 },
      show: { rotateX: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } },
    },
    FLIP_IN_Y: {
      hidden: { rotateY: 90, opacity: 0, transformPerspective: 600 },
      show: { rotateY: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } },
    },
  };

  const transitionProps = {
    variants: transitionVariants[TRANSITION_ANIM_TYPE],
    initial: "hidden",
    whileInView: "show",
    viewport: { once: true, amount: 0 },
  };

  return (
    <motion.section {...transitionProps} className="w-full">
      {children}
    </motion.section>
  );
}
