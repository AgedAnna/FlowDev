import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface MobileHeaderProps {
  handleDrawerToggle: () => void;
  drawerOpen: boolean;
  handleNavigation: (sectionId: string) => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  handleDrawerToggle,
  drawerOpen,
  handleNavigation,
}) => {
  return (
    <>
      <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
        <MenuIcon style={{ color: "#3200FF" }} />
      </IconButton>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ "& .MuiDrawer-paper": { width: "35vw" } }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("home")}>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("about")}>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("portfolio")}>
              <ListItemText primary="Portfolio" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("services")}>
              <ListItemText primary="Services" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("contact")}>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default MobileHeader;
