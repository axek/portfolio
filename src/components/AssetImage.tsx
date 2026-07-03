import NextImage, { type ImageProps } from "next/image";
import { asset } from "@/lib/asset";

export function AssetImage({ src, ...props }: ImageProps) {
  const resolvedSrc = typeof src === "string" ? asset(src) : src;
  return <NextImage src={resolvedSrc} {...props} />;
}
