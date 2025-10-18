import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { MyThemeContext } from "./../../context/ThemeContext";
import CustomizedSwitches from "./MUISwitch";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEls, setAnchorEls] = useState({
    mentorship: null,
    expert: null,
    freelancing: null,
    more: null,
  });
  const [collapse, setCollapse] = useState({
    mentorship: false,
    expert: false,
    freelancing: false,
    more: false,
  });

  // const { toggleTheme, themeMode } = useContext(MyThemeContext);

  // console.log(themeMode);

  const handleOpen = (event, id) => {
    setAnchorEls((prev) => ({
      ...prev,
      [id]: event.currentTarget,
    }));
  };

  const handleClose = (id) => {
    setAnchorEls((prev) => ({
      ...prev,
      [id]: null,
    }));
  };

  const toggleDrawer = (state) => () => setOpenDrawer(state);

  const toggleCollapse = (id) => {
    setCollapse((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
        }}
      >
        <Typography variant="h6" color="textPrimary" fontWeight="bold">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            {" "}
            Codementor
          </Link>
        </Typography>

        {/* Desktop Menu */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* Mentorship */}
          <Button color="inherit" onClick={(e) => handleOpen(e, "mentorship")}>
            Mentorship ▼
          </Button>
          <Menu
            anchorEl={anchorEls.mentorship}
            open={Boolean(anchorEls.mentorship)}
            onClose={() => handleClose("mentorship")}
          >
            <MenuItem onClick={() => handleClose("mentorship")}>
              Find a Mentor
            </MenuItem>
            <MenuItem onClick={() => handleClose("mentorship")}>
              Become a Mentor
            </MenuItem>
            <MenuItem onClick={() => handleClose("mentorship")}>
              Pricing
            </MenuItem>
          </Menu>

          {/* Expert help */}
          <Button color="inherit" onClick={(e) => handleOpen(e, "expert")}>
            Expert help ▼
          </Button>
          <Menu
            anchorEl={anchorEls.expert}
            open={Boolean(anchorEls.expert)}
            onClose={() => handleClose("expert")}
          >
            <MenuItem onClick={() => handleClose("expert")}>
              Code Review
            </MenuItem>
            <MenuItem onClick={() => handleClose("expert")}>
              Pair Programming
            </MenuItem>
            <MenuItem onClick={() => handleClose("expert")}>
              Debug Assistance
            </MenuItem>
          </Menu>

          {/* Freelancing */}
          <Button color="inherit" onClick={(e) => handleOpen(e, "freelancing")}>
            Freelancing ▼
          </Button>
          <Menu
            anchorEl={anchorEls.freelancing}
            open={Boolean(anchorEls.freelancing)}
            onClose={() => handleClose("freelancing")}
          >
            <MenuItem onClick={() => handleClose("freelancing")}>
              Find Freelance Jobs
            </MenuItem>
            <MenuItem onClick={() => handleClose("freelancing")}>
              Hire Developers
            </MenuItem>
            <MenuItem onClick={() => handleClose("freelancing")}>
              Remote Projects
            </MenuItem>
          </Menu>

          {/* More */}
          <Button color="inherit" onClick={(e) => handleOpen(e, "more")}>
            More ▼
          </Button>
          <Menu
            anchorEl={anchorEls.more}
            open={Boolean(anchorEls.more)}
            onClose={() => handleClose("more")}
          >
            <MenuItem onClick={() => handleClose("more")}>Blog</MenuItem>
            <MenuItem onClick={() => handleClose("more")}>Community</MenuItem>
            <MenuItem onClick={() => handleClose("more")}>Help Center</MenuItem>
          </Menu>

          <Button color="inherit">Become a mentor</Button>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Login
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            About
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Contact
          </Link>
        </Box>

        {/* Mobile Drawer */}
        <IconButton
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 260, p: 2 }}>
            <Typography variant="h6" fontWeight="bold" mb={1}>
              Menu
            </Typography>
            <Divider sx={{ mb: 2 }} />

            {/* Mentorship */}
            <ListItemButton onClick={() => toggleCollapse("mentorship")}>
              <ListItemText primary="Mentorship" />
              {collapse.mentorship ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={collapse.mentorship}>
              <List sx={{ pl: 4 }}>
                <ListItemButton>
                  <ListItemText primary="Find a Mentor" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Become a Mentor" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Pricing" />
                </ListItemButton>
              </List>
            </Collapse>

            {/* Expert */}
            <ListItemButton onClick={() => toggleCollapse("expert")}>
              <ListItemText primary="Expert help" />
              {collapse.expert ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={collapse.expert}>
              <List sx={{ pl: 4 }}>
                <ListItemButton>
                  <ListItemText primary="Code Review" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Pair Programming" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Debug Assistance" />
                </ListItemButton>
              </List>
            </Collapse>

            {/* Freelancing */}
            <ListItemButton onClick={() => toggleCollapse("freelancing")}>
              <ListItemText primary="Freelancing" />
              {collapse.freelancing ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={collapse.freelancing}>
              <List sx={{ pl: 4 }}>
                <ListItemButton>
                  <ListItemText primary="Find Freelance Jobs" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Hire Developers" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Remote Projects" />
                </ListItemButton>
              </List>
            </Collapse>

            {/* More */}
            <ListItemButton onClick={() => toggleCollapse("more")}>
              <ListItemText primary="More" />
              {collapse.more ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={collapse.more}>
              <List sx={{ pl: 4 }}>
                <ListItemButton>
                  <ListItemText primary="Blog" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Community" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Help Center" />
                </ListItemButton>
              </List>
            </Collapse>

            <Divider sx={{ my: 2 }} />

            <ListItemButton>
              <ListItemText primary="Become a mentor" />
            </ListItemButton>
            <ListItemButton component={Link} to="/login">
              <ListItemText primary="Log in" />
            </ListItemButton>
            <Typography variant="h6" color="textPrimary" fontWeight="bold">
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                {" "}
                Codementor
              </Link>
            </Typography>
          </Box>
        </Drawer>

        <CustomizedSwitches />
      </Toolbar>
    </AppBar>
  );
}
