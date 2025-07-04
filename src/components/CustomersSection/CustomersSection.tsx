import Image from "next/image";
import { motion } from "framer-motion";

import Customer from "@/types/customer";
import * as classes from "./styles";

interface Props {
  customers: Customer[];
}

const CustomersSection = ({ customers }: Props) => {
  return (
    <section css={classes.section}>
      <div css={classes.containerStyles}>
        <motion.div
          css={classes.scrollerStyles}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...customers, ...customers].map(({ id, name, logo }, index) => (
            <Image
              key={`${id}-${index}`}
              src={logo.url}
              alt={name}
              width={logo.width}
              height={logo.height}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomersSection;
