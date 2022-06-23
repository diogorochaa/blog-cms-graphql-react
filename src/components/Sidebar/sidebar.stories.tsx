import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Sidebar } from "./sidebar";

export default {
  title: "Example/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => <Sidebar />;

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
