import React from "react";
import { Box, Typography, Grid, Container, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import img from "../../assets/flowdevwhite.svg";
import styles from "./FotterPage.module.css";
import { Link as ScrollLink } from "react-scroll";
import { Link as MUILink } from "@mui/material";

const FooterPage: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0000FF",
        color: "#fff",
        pt: 4,
        pb: 2,
        textAlign: "center",
        borderTopLeftRadius: "24px",
        borderTopRightRadius: "24px",
      }}
    >
      <Container maxWidth="lg">
        {/* Logo and Navigation Links */}
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={4} textAlign="center">
            <Box
              component="img"
              src={img}
              alt="logo"
              sx={{
                maxWidth: { xs: "80px", md: "100px" },
                height: "auto",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
              alignItems: "center",
            }}
          >
            {["Home", "About", "Portfolio", "Services", "Contact"].map(
              (text) => (
                <ScrollLink
                  key={text}
                  to={text.toLowerCase()}
                  smooth={true}
                  duration={500}
                >
                  <MUILink
                    color="inherit"
                    underline="none"
                    className={styles.link}
                  >
                    {text}
                  </MUILink>
                </ScrollLink>
              )
            )}
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              alignItems: "center",
            }}
          >
            {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon].map(
              (Icon, idx) => {
                const urls = [
                  "https://www.instagram.com/flowdev__?igsh=MWFtanhvNGloYzIwaA==", // Facebook
                  "https://www.instagram.com/flowdev__?igsh=MWFtanhvNGloYzIwaA==", // Instagram
                  "https://www.linkedin.com/company/flow-dev-services/", // Twitter
                  "https://www.linkedin.com/company/flow-dev-services/", // LinkedIn
                ];

                return (
                  <IconButton
                    key={idx}
                    href={urls[idx]}
                    color="inherit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.holographicIcon}
                  >
                    <Icon />
                  </IconButton>
                );
              }
            )}
          </Grid>
        </Grid>

        <Box
          sx={{
            borderBottom: "5px solid #888",
            my: 3,
            width: "100%",
          }}
        />

        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} md={4} textAlign="left">
            <Typography className={styles.font}>
              Made by @FlowDevelopment
            </Typography>
          </Grid>
          {/* <Grid
            item
            xs={12}
            md={4}
            sx={{ display: "flex", justifyContent: "center", gap: 2 }}
          >
            {["Privacy Policy", "Terms of Service", "Cookies Settings"].map(
              (text) => (
                <Link
                  key={text}
                  className={styles.link}
                  href={`/${text.toLowerCase().replace(/\s+/g, "")}`}
                  color="inherit"
                  underline="none"
                >
                  {text}
                </Link>
              )
            )}
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterPage;
