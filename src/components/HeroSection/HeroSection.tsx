import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import * as classes from "./styles";
import IHero from "@/types/hero";

interface Props {
  className?: string;
  data: IHero;
}

export default function HeroSection({ className, data }: Props) {
  const { title, description, numberOfClients, ctaButtonText } = data;

  return (
    <section className={className} css={classes.section}>
      <Container maxWidth="lg">
        <Typography css={classes.title} component="h1" variant="h1">
          {title}
        </Typography>
        <Typography css={classes.description} component="p" variant="subtitle1">
          {description}
        </Typography>
        <div css={classes.buttonWrap}>
          <Button>
            <span css={classes.rocketIcon}>🚀</span>
            {ctaButtonText}
          </Button>
        </div>
        <Rating css={classes.rating} value={5} readOnly />
        <Typography css={classes.clients} component="p" variant="caption">
          {numberOfClients}
        </Typography>
      </Container>
    </section>
  );
}
