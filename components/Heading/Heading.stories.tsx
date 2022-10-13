import Heading from "./Heading";
import {Meta, StoryObj} from "@storybook/react"
import { HeadingProps } from "./Heading";

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    size: "0xl",
    children: "Lorem Ipsum"
  },
  argTypes: {

  }
}

export const Small: StoryObj<HeadingProps> = {}
export const Medium: StoryObj<HeadingProps> = {
  args: {
    size: "xl"
  }
}
export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "2xl"
  }
}