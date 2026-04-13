"use client";

import { CSSProperties, ReactNode } from "react";

interface LinkButtonProps {
  href: string;
  target?: string;
  rel?: string;
  style?: CSSProperties;
  hoverStyle?: CSSProperties;
  children: ReactNode;
}

export function LinkButton({
  href,
  target,
  rel,
  style,
  hoverStyle,
  children,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      style={style}
      onMouseEnter={(e) => {
        if (hoverStyle)
          Object.assign(e.currentTarget.style, hoverStyle);
      }}
      onMouseLeave={(e) => {
        if (style) Object.assign(e.currentTarget.style, style);
      }}
    >
      {children}
    </a>
  );
}
