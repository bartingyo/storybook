// 1. meta

import Button from "@/components/atom/button";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Bell, Pen, Plus, ThumbsUp } from "lucide-react";
import { fn } from "storybook/test";

/** Reusable Button Component */
const meta = {
  title: "Design System/Atom/Button",
  component: Button,
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    disabled: false,
    onClick: fn()
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "text", "link"],
      description: "different appearance of the button"
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg", "icon-sm", "icon-md", "icon-lg"],
      description:
        "Default md, icon-* must have only one icon as a child of button"
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Button>;

export default meta;

// 2. stories

type Story = StoryObj<typeof Button>;

export const Primary = {
  args: {
    children: (
      <>
        <Plus />
        <span>Add to Story</span>
      </>
    )
  }
} satisfies Story;

export const Secondary = {
  args: {
    children: (
      <>
        <Pen />
        <span>Edit Profile</span>
      </>
    ),
    variant: "secondary"
  }
} satisfies Story;

export const Text = {
  args: {
    children: (
      <>
        <ThumbsUp />
        <span>Like</span>
      </>
    ),
    variant: "text"
  }
} satisfies Story;

export const Icon = {
  args: {
    children: (
      <>
        <Bell />
      </>
    ),
    variant: "secondary",
    size: "icon-lg"
  }
} satisfies Story;

export const Link = {
  args: {
    children: "John Doe",
    variant: "link"
  }
} satisfies Story;

export const Disabled = {
  args: {
    disabled: true
  }
} satisfies Story;

export const Small = {
  args: {
    size: "sm"
  }
};
