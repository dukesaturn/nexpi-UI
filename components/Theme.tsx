import { ReactNode } from "react";
import "./Theme.css";
import { ThemeProvider } from "next-themes";
import React from 'react';

interface ThemeProps {
  children : ReactNode;
}
const Theme = ({children}: ThemeProps) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}

export default Theme;