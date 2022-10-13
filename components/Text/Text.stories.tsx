import Text from "./Text";
import {Meta, StoryObj} from "@storybook/react"
import { TextProps } from "./Text";

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    size: "sm",
    children: "Lorem Ipsum"
  },
  argTypes: {

  }
}

export const Small: StoryObj<TextProps> = {}
export const Medium: StoryObj<TextProps> = {
  args: {
    size: "md"
  }
}
export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg"
  }
}