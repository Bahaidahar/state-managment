"use client";
import { PropsWithChildren } from "react";
import { ThemeProvider as ThemeWrapper } from "next-themes";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeWrapper attribute="class" disableTransitionOnChange>
      {children}
    </ThemeWrapper>
  );
};

export default ThemeProvider;
