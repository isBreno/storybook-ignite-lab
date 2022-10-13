import { TextInput } from "./Input";
import {Meta, StoryObj} from "@storybook/react"
import { InputComponent } from "./Input";
import { Envelope, LockKey } from "phosphor-react";

export default {
  title: 'Components/Input',
  component: TextInput.Root,
  args: {
    children: (
      <TextInput.Content>
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>
        <TextInput.Input placeholder="Type your e-mail address" />
      </TextInput.Content>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<InputComponent>

export const Default: StoryObj = {

}

export const EmailInput: StoryObj = {
  args: {
    children: (
      <TextInput.Content>
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>
        <TextInput.Input placeholder="Type your e-mail address" />
      </TextInput.Content>
    )
  },
}

export const PasswordInput: StoryObj<InputComponent> = {
  args: {
    children: (
      <TextInput.Content>
        <TextInput.Icon>
          <LockKey />
        </TextInput.Icon>
        <TextInput.Input placeholder="**********" />
      </TextInput.Content>
    )
    }
}

export const InputNoIcon: StoryObj<InputComponent> = {
  args: {
    children: (
      <TextInput.Content>
        <TextInput.Input placeholder="placeholder" />
      </TextInput.Content>
    )
    }
}

export const InputWithLabelNoIcon: StoryObj<InputComponent> = {
  args: {
    children: (
      <>
        <TextInput.Label label="label"/>
        <TextInput.Content>
        <TextInput.Input placeholder="placeholder" />
      </TextInput.Content>
      </>
    )
    },
}
export const InputWithLabelAndIcon: StoryObj<InputComponent> = {
  args: {
    children: (
      <>
        <TextInput.Label label="label"/>
        <TextInput.Content>
        <TextInput.Icon>
          <LockKey />
        </TextInput.Icon>
        <TextInput.Input placeholder="placeholder" />
      </TextInput.Content>
      </>
    )
    },
}