import { CSSProperties } from "react";
import { LiveProvider, LivePreview, LiveEditor, LiveError } from "react-live";

const defaultCode = `() => {
  const [count, setCount] = React.useState(1);
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={(e) => {
          setCount(count + 1);
        }}
      >
        click me daddy
      </button>
    </div>
  );
}`;

export interface PlaygroundProps {
  code?: string;
  noInline?: boolean;
  LiveEditorStyle?: CSSProperties;
  LivePreviewStyle?: CSSProperties;
  LiveErrorStyle?: CSSProperties;
}

export const Playground: React.FC<PlaygroundProps> = ({
  code = defaultCode,
  LiveEditorStyle,
  LivePreviewStyle,
  LiveErrorStyle,
  noInline = false,
}) => {
  return (
    <LiveProvider code={code} noInline={noInline}>
      <LiveEditor style={LiveEditorStyle} />
      <LivePreview style={LivePreviewStyle} />
      <LiveError style={LiveErrorStyle} />
    </LiveProvider>
  );
};
