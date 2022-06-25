import React from "react";

import { Avatar } from "../Avatar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Workshop/Avatar",
    component: Avatar,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

const Template = (args) => <Avatar {...args} />;

export const Round = Template.bind({});
Round.args = {
    round: true,
    name: "Avi Cohen",
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    name: "Avi Cohen",
};

export const Square = Template.bind({});
Square.args = {
    round: false,
    name: "Avi Cohen",
};

export const Small = Template.bind({});
Small.args = {
    size: "small",
    name: "Avi Cohen",
};

export const Medium = Template.bind({});
Medium.args = {
    size: "medium",
    name: "Avi Cohen",
};

export const Large = Template.bind({});
Large.args = {
    size: "large",
    name: "Avi Cohen",
};

export const Image = Template.bind({});
Image.args = {
    name: "",
};