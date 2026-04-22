"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import * as React from "react"

type MotionSectionProps = HTMLMotionProps<"div"> & {
  delay?: number
}

export function FadeInSection({ delay = 0, children, ...props }: MotionSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
