import React from "react";
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live";

type contents = {
  key: string;
  classes: string;
  content: contents[] | string;
  codeOptions?: {
    enable: boolean;
    noInline?: boolean;
  };
};

interface MiddleProps {
  contents: contents[];
}

const display = (item: contents): any => {
  if (item.codeOptions) {
    mid = (
      <LiveProvider
        code={item.content as string}
        noInline={item.codeOptions.noInline}
      >
        <LiveEditor />
        <LivePreview />
        <LiveError />
      </LiveProvider>
    );
  } else {
    var mid;
    if (typeof item.content === "string") {
      mid = item.content;
    } else {
      mid = item.content.map((item) => display(item));
    }
  }
  return (
    <div className={item.classes} key={item.key}>
      {mid}
    </div>
  );
};

export const Middle: React.FC<MiddleProps> = ({ contents }) => {
  return (
    <div className="middle">
      {contents.map((item) => {
        return display(item);
      })}
    </div>
  );
};
