import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./button";

export default {
  title: "Example/Button",
  component: Button,

  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonArgs = Template.bind({});
ButtonArgs.args = {
  variant: "primary",
  label: "Button",
};
