import Image from "next/image";

type Props = {
  className?: string;
};

export function AxekLogo({ className }: Props) {
  return (
    <Image
      src="/axek-logo.png"
      alt="axek designs"
      width={600}
      height={600}
      className={className}
      style={{ imageRendering: "pixelated" }}
      priority
    />
  );
}
