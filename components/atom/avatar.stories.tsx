// 1. meta
// 2. stories
// 3. type meta and stories

import Avatar, { Size } from "@/components/atom/avatar";
import { Button } from "@/components/ui/button";
import { StoryObj, type Meta } from "@storybook/nextjs-vite";
import { useState } from "react";
import { expect, fn } from "storybook/test";

const sizeOptions: Size[] = ["sm", "md", "lg", "xl"];

const meta = {
  title: "Design System/Atom/Button",
  component: Avatar,
  args: {
    src: "https://external.fyvr2-1.fna.fbcdn.net/emg1/v/t13/2876907341281207127?url=https%3A%2F%2Fassets.iflscience.com%2Fassets%2FarticleNo%2F79584%2FaImg%2F84397%2Fhainan-meta.jpg&fb_obo=1&utld=iflscience.com&stp=c0.5000x0.5000f_dst-jpg_flffffff_p1000x522_q75_tt6&_nc_gid=Aewe_tAL3H9MKoPSCFy9Cw&_nc_oc=AdnEatJWP3nhE01gQiDNuKxFfsmHhLhCoSNCDf26yWi3M44_OdSlLvakF5DTwBNwJjp4DN5RYW0GF4y9UWXfkSl-&ccb=13-1&oh=06_Q3-zAbG4ZqMXRWL3yC4AC01oCxys2mbM4aBsP9i38ENQU_Qv&oe=684BBE2F&_nc_sid=c63717",
    alt: "avatar image",
    isOnline: false,
    size: "md",
    onClick: fn()
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: sizeOptions
    }
  }
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default = {} satisfies Story;
export const Small = {
  args: {
    size: "sm"
  }
} satisfies Story;
export const Large = {
  args: {
    size: "lg"
  }
} satisfies Story;
export const XLarge = {
  args: {
    size: "xl"
  }
} satisfies Story;

export const OnlineIndicator = {
  args: {
    isOnline: true
  }
} satisfies Story;

export const PlaceholderImage = {
  args: {
    src: "Invalid Image"
  }
} satisfies Story;

export const DynamicPresenceIndicator = {
  argTypes: {
    isOnline: {
      control: { disable: true }
    }
  },
  render: (args) => {
    const [isOnline, setIsOnline] = useState<boolean>(false);

    return (
      <div className="flex flex-col gap-4 items-start">
        <Avatar {...args} isOnline={isOnline} />

        <p>Is Online: {JSON.stringify(isOnline)}</p>
        <Button onClick={() => setIsOnline((prev) => !prev)}>
          {isOnline ? "Disconnect" : "Connect!"}
        </Button>
      </div>
    );
  },
  play: async ({ canvas, userEvent }) => {
    const button = await canvas.findByRole("button", { name: /connect/gi });
    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    const indicator = await canvas.findByTestId("presence-indicator");

    expect(indicator).toBeInTheDocument();
  }
} satisfies Story;
