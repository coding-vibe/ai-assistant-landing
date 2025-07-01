import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Advantages from "@/components/Advantages";
import Feature from "@/types/feature";
import * as classes from "./styles";

interface Props {
  features: Feature[];
}

const FeaturesSection = ({ features }: Props) => {
  return (
    <section css={classes.section}>
      <div css={classes.inner}>
        {features.map((feature, position) => (
          <div key={feature.id} css={classes.featureCard}>
            <Image
              css={[classes.image, classes.mobileImage]}
              src={feature.mobileImage.url}
              alt={feature.title}
              width={feature.mobileImage.width}
              height={feature.mobileImage.height}
            />
            <div>
              <Typography css={classes.title} component="h2" variant="h2">
                {feature.title}
              </Typography>
              <Typography
                component="p"
                variant="body1"
                css={classes.description}
              >
                {feature.description}
              </Typography>
              {!!(feature.features && feature.features.length) && (
                <Advantages css={classes.advantages} items={feature.features} />
              )}

              <Button component={Link} href={feature.ctaLink}>
                {feature.ctaText}
              </Button>
            </div>
            <Image
              css={[
                classes.image,
                classes.desktopImage,
                position % 2 === 1 && classes.imageLeft,
              ]}
              src={feature.desktopImage.url}
              alt={feature.title}
              width={feature.desktopImage.width}
              height={feature.desktopImage.height}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
