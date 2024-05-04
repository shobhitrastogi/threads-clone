import { ThemeProvider } from "@/components/ui/theme-provider";
import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Threads",
  description: "Threads app to share your thoughts",
};

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
   <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
   </>
  );
}