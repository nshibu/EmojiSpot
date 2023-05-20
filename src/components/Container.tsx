import { FC, ReactNode } from "react";

type DefaultHTMLProps<T extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[T];

interface CustomComponentProps extends DefaultHTMLProps<"div"> {
  children?: ReactNode;
  // Add any additional custom props here
}
const Container: FC<CustomComponentProps> = ({ children, ...rest }) => {
  return (
    <div
      {...rest}
      className="relative mx-auto h-auto  max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      {children}
    </div>
  );
};

export default Container;
