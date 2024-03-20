import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import styles from "./global.module.css";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";
import 'regenerator-runtime/runtime'

const poppins = Poppins({
  subsets: ["devanagari"],
  weight: "300",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Claim Smart",
  description: "Enabling you, making you smarter!!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen w-full overflow-y-auto", styles.container)}>
        <main
          className={cn(
            "h-full w-full flex flex-col justify-center items-center p-[15px] flex-nowrap",
            poppins.className,
          )}
        >
          {children}
        </main>
        <Toaster position="bottom-center" toastOptions={{
          className: '',
          duration: 1000,
        }} />
      </body>
    </html>
  );
}
