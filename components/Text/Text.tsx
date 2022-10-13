import { ReactNode } from "react";
import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import React from "react";

export interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode,
  asChild: ReactNode
}

const Text = ({ children, size = "md", asChild }: TextProps) => {
  const Comp = asChild ? Slot : 'h2'

 return (
  <Comp className={clsx("text-gray-100", {
    "text-sm": size === "sm",
    "text-md": size === "md",
    "text-lg": size === "lg",
  })}>
    { children }
  </Comp>
 )

}

export default Text