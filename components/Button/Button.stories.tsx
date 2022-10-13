import Button from "./Button";
import {Meta, StoryObj} from "@storybook/react"
import { ButtonComponentsProps } from "./Button";

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    text: "Lorem Ipsum",
  },
  
} as Meta<ButtonComponentsProps>

export const Default: StoryObj<ButtonComponentsProps> = {}
export const Hover: StoryObj<ButtonComponentsProps> = {
  args: {
    hover: true
  }
}
export const Focus: StoryObj<ButtonComponentsProps> = {
  args: {
    focus: true
  }
}