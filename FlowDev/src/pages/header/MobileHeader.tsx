import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import style from "./Header.module.css";

interface MobileHeaderProps {
  handleDrawerToggle: () => void;
  drawerOpen: boolean;
  handleNavigation: (path: string) => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  handleDrawerToggle,
  drawerOpen,
  handleNavigation,
}) => {
  return (
    <>
      <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle} sx={{ "& .MuiDrawer-paper": { width: "35vw" } }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("/landing")}>
              <ListItemText primary="Início" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("/sobre")}>
              <ListItemText primary="Sobre Nós" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("/clientes")}>
              <ListItemText primary="Clientes" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("/equipe")}>
              <ListItemText primary="Equipe" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("/contato")}>
              <ListItemText primary="Contato" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default MobileHeader;
