import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Video } from "./video";

export default {
  title: "Example/Video",
  component: Video,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Video>;

const Template: ComponentStory<typeof Video> = (args) => <Video {...args} />;

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  label: "Video",
};
