import { Button } from "@/components/ui/button";
import Link from "next/link";

type ButtonLinkProps = {
  text: string;
  url?: string;
  className?: string;
};

export function ButtonLink({ text, url }: ButtonLinkProps) {
  return (
    <Button
      variant="link"
      className="m-0 p-0 h-[20px] ml-2 hover:text-purple-600 focus:text-purple-600"
    >
      {url ? <Link href={url}>{text}</Link> : <>{text}</>}
    </Button>
  );
}
