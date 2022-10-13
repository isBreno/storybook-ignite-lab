import { ReactNode } from "react";
import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export interface HeadingProps {
  size?: '0xl' | 'xl' | '2xl';
  children: ReactNode,
  asChild: ReactNode
}

const Heading = ({ children, size = "xl", asChild }: HeadingProps) => {
  const Comp = asChild ? Slot : 'h2'

 return (
  <Comp className={clsx("text-gray-100", {
    "text-0xl": size === "0xl",
    "text-xl": size === "xl",
    "text-2xl": size === "2xl",
  })}>
    { children }
  </Comp>
 )

}

export default Heading