import Link from "next/link";
import Image from "next/image";
import { LogoPaths } from "../headerData";
import * as classes from "./styles";

interface Props {
  className?: string;
}

export default function Logo({ className }: Props) {
  return (
    <Link className={className} href="/">
      <Image
        css={classes.logo}
        src={LogoPaths.General}
        width={138}
        height={48}
        alt="logo"
      />
    </Link>
  );
}
