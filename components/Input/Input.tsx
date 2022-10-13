import { MagnifyingGlass } from 'phosphor-react';
import { HTMLAttributes, InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'


export interface InputComponent extends InputHTMLAttributes<HTMLInputElement> {
 
}

interface TextInputLabelProps extends HTMLAttributes<HTMLSpanElement> {
  label: string
}

function TextInputLabel(props: TextInputLabelProps) {
  return (
    <span className='text-sm' {...props}>
      {props.label}
    </span>
  )
}

interface TextInputContentProps {
  children: ReactNode
}

function TextInputContent({ children }: TextInputContentProps) {
 return (
  <div className="flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full text-gray-100 text-sm placeholder:text-gray-900 outline outline-1 focus-within:outline-sky-500 mt-2">
    {children}
   </div>
 )
}

export interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon({ children }: TextInputIconProps) {
 return (
  <Slot className='w-6 h-6 text-gray-900'>
    { children }
  </Slot>
 )
}

function TextInputInput(props: InputComponent) {
  return (
    <input type="text" className='bg-transparent flex-1 text-gray-100 text-sm placeholder:text-gray-900 outline-none'  {...props}/>
  )
}

function TextInputRoot({ children }: TextInputContentProps) {
  return (
    <div className='w-full'>
    {children}
  </div>
  )
}





export const TextInput = {
  Content: TextInputContent,
  Input: TextInputInput,
  Icon: TextInputIcon,
  Label: TextInputLabel,
  Root: TextInputRoot
}
