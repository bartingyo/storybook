import {
  AvatarFallback,
  AvatarImage,
  Avatar as DefaultAvatar
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import { ComponentProps } from "react";

const avatarVariants = cva("block rounded-full overflow-hidden", {
  variants: {
    size: {
      sm: "size-7",
      md: "size-8",
      lg: "size-9",
      xl: "size-10"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

type AvatarVariantProps = VariantProps<typeof avatarVariants>;
export type Size = AvatarVariantProps["size"];

type Props = {
  isOnline?: boolean;
  onClick?: () => void;
} & AvatarVariantProps &
  Pick<ComponentProps<typeof AvatarImage>, "alt" | "src">;

export default function Avatar({ size, isOnline, src, alt, onClick }: Props) {
  return (
    <div className="relative inline-block size-fit">
      <DefaultAvatar className={cn(avatarVariants({ size }))} onClick={onClick}>
        <AvatarImage
          className="aspect-square size-full object-cover"
          src={src}
          alt={alt}
        />
        <AvatarFallback>
          <Image
            className="aspect-square size-full object-cover"
            src="https://scontent.fyvr2-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=cp0_dst-png_s74x74&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=j2KhZf5Uq1IQ7kNvwEn0d5x&_nc_oc=AdnauS0XVliZy2pXCS-HqgzK4jCF7GuxkvXYvrdUkKdyBkytx2pGkypXTnnjAdceEb18XE6z_PNOntmXkSdKroIf&_nc_zt=24&_nc_ht=scontent.fyvr2-1.fna&oh=00_AfO6xrhDjw-pVIMTBXmjgwdMEgDPUxewclZP9AXizwbXHg&oe=6871097A"
            alt="avatar placeholder image"
            width={40}
            height={40}
          />
        </AvatarFallback>
      </DefaultAvatar>

      {isOnline && (
        <span
          className={cn(
            "inline-block bg-green-400 rounded-full",
            "absolute bottom-0 right-0",
            "border border-white",
            size === "sm" || size === "md" ? "size-2" : "size-3"
          )}
          data-testid="presence-indicator"
        />
      )}
    </div>
  );
}

// size
// 28 x 28
// 32 x 32
// 36 x 36
// 40 x 40
