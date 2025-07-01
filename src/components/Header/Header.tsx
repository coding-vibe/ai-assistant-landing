import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material/styles";
import Button from "@/components/Button";
import { navigation } from "./headerData";
import Logo from "./Logo";
import * as classes from "./styles";

export default function Header() {
  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <header css={classes.header}>
      <Container maxWidth="lg">
        <nav css={classes.flexContainer}>
          <div css={classes.flexContainer}>
            <Logo css={classes.logo} />
            <List css={[classes.desktop, classes.flexContainer]} component="ul">
              {navigation.navLinksLeft.map((navLink) => (
                <ListItem key={navLink.label} disablePadding>
                  <ListItemButton component="a" href={navLink.path}>
                    <Typography variant="body2">{navLink.label}</Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
          <div css={classes.flexContainer}>
            <List css={classes.desktop} component="ul">
              {navigation.navLinksRight.map((navLink) => (
                <ListItem key={navLink.label} disablePadding>
                  <ListItemButton component="a" href={navLink.path}>
                    <Typography variant="body2">{navLink.label}</Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <div css={classes.gradientBorderButtonWrapper}>
              <Button
                href={navigation.button.path}
                css={classes.gradientBorderButton}
                text={navigation.button.label}
              />
            </div>
            <IconButton
              edge="start"
              css={[classes.mobile, classes.burgerButton]}
              aria-labelledby="open-mobile-menu"
              aria-label="open mobile menu"
            >
              <MenuIcon fontSize={isTablet ? "large" : "medium"} />
            </IconButton>
          </div>
        </nav>
      </Container>
    </header>
  );
}
