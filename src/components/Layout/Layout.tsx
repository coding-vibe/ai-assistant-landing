import { ReactNode } from "react";
import Header from "./Header";
import * as classes from "./styles";

interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div css={classes.wrap}>
      <Header />
      <main css={classes.main}>{children}</main>
    </div>
  );
}
