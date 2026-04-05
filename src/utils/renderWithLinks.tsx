import React from "react";

export const renderWithLinks = (text: string): React.ReactNode[] => {
  const parts: React.ReactNode[] = [];
  const regex = /([^\[]*)\[([^\]]+)\]/g;
  let lastIndex = 0;

  text.replace(regex, (match, before: string, url: string, offset: number) => {
    const spaceIdx = before.lastIndexOf(" ");
    const plainText = spaceIdx >= 0 ? before.slice(0, spaceIdx + 1) : "";
    const label = spaceIdx >= 0 ? before.slice(spaceIdx + 1) : before;

    if (plainText) parts.push(plainText);
    parts.push(
      <a
        key={offset}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        {label}
      </a>,
    );
    lastIndex = offset + match.length;
    return match;
  });

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
};
