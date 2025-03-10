import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function FooterSection() {
  return (
    <footer className=" space-y-6 py-8 md:py-12 lg:py-24 ">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with Next.js, tRPC, and Server Components. This is a test
          project for educational purposes.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/Andresws12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="sm">
              GitHub
            </Button>
          </Link>
          <Link
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="sm">
              Next.js
            </Button>
          </Link>
          <Link
            href="https://trpc.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="sm">
              tRPC
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
