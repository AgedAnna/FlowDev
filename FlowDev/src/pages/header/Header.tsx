import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MobileHeader from "./MobileHeader";
import logo from "../../assets/logo.svg";
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
      <Container maxWidth="lg" >
        <Toolbar>
          <div style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <img src={logo} alt="logo" width={40} style={{ marginRight: 8 }} />
            <Typography
              variant="h6"
              component="div"
              sx={{ textTransform: "none" }}
            >
              Dev Flow
            </Typography>
          </div>
          {isMobile ? (
            <>
              <MobileHeader
                handleDrawerToggle={handleDrawerToggle}
                drawerOpen={drawerOpen}
                handleNavigation={handleNavigation}
              />
            </>
          ) : (
            <>
              <Button
                color="inherit"
                onClick={() => navigate("/landing")}
                sx={{ textTransform: "none" }}
                className={style.buttonHeader}
              >
                Início
              </Button>
              <Button
                color="inherit"
                onClick={() => navigate("/sobre")}
                sx={{ textTransform: "none" }}
                className={style.buttonHeader}
              >
                Sobre Nós
              </Button>
              <Button
                color="inherit"
                onClick={() => navigate("/clientes")}
                sx={{ textTransform: "none" }}
                className={style.buttonHeader}
              >
                Clientes
              </Button>
              <Button
                color="inherit"
                onClick={() => navigate("/equipe")}
                sx={{ textTransform: "none" }}
                className={style.buttonHeader}
              >
                Equipe
              </Button>
              <Button
                color="inherit"
                onClick={() => navigate("/contato")}
                sx={{ textTransform: "none" }}
                className={style.buttonHeader}
              >
                Contato
              </Button>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
