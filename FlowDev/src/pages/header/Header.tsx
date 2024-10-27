import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MobileHeader from "./MobileHeader";
import logo from "../../assets/flowdev.svg";
import style from "./Header.module.css";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <AppBar position="static" className={style.toolbar}>
      <Container maxWidth="lg">
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="logo" width={40} style={{ marginRight: 8 }} />

          {!isMobile && (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexGrow: 1,
                }}
              >
                <Button
                  color="inherit"
                  onClick={() => navigate("/landing")}
                  sx={{ textTransform: "none" }}
                  className={style.buttonHeader}
                >
                  Home
                </Button>
                <Button
                  color="inherit"
                  onClick={() => navigate("/sobre")}
                  sx={{ textTransform: "none" }}
                  className={style.buttonHeader}
                >
                  About
                </Button>
                <Button
                  color="inherit"
                  onClick={() => navigate("/clientes")}
                  sx={{ textTransform: "none" }}
                  className={style.buttonHeader}
                >
                  Portfolio
                </Button>
                <Button
                  color="inherit"
                  onClick={() => navigate("/equipe")}
                  sx={{ textTransform: "none" }}
                  className={style.buttonHeader}
                >
                  Services
                </Button>
              </div>
              <Button
                variant="contained"
                className={style.button}
                sx={{ textTransform: "none", marginLeft: "auto" }}
              >
                Contact Us
              </Button>
            </>
          )}

          {isMobile && (
            <MobileHeader
              handleDrawerToggle={handleDrawerToggle}
              drawerOpen={drawerOpen}
              handleNavigation={handleNavigation}
            />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
