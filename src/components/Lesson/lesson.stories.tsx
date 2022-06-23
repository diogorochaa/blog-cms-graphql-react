import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Lesson } from "./lesson";

export default {
  title: "Example/Lesson",
  component: Lesson,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    type: {
      options: ["class", "live"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Lesson>;

const Template: ComponentStory<typeof Lesson> = (args) => <Lesson {...args} />;

export const LessonsArgs = Template.bind({});
LessonsArgs.args = {
  title: "Título da aula",
  slug: "aula-1",
  availableAt: new Date("2020-01-01"),
  type: "live",
};
