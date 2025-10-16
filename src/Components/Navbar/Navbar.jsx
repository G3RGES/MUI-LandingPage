import React, { useState } from "react";
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

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuId, setMenuId] = useState(null);
  const [collapse, setCollapse] = useState({
    mentorship: false,
    expert: false,
    freelancing: false,
    more: false,
  });

  const handleOpen = (event, id) => {
    setAnchorEl(event.currentTarget);
    setMenuId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuId(null);
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
          codementor
        </Typography>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button color="inherit" onClick={(e) => handleOpen(e, "mentorship")}>
            Mentorship ▼
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={menuId === "mentorship"}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Find a Mentor</MenuItem>
            <MenuItem onClick={handleClose}>Become a Mentor</MenuItem>
            <MenuItem onClick={handleClose}>Pricing</MenuItem>
          </Menu>

          <Button color="inherit" onClick={(e) => handleOpen(e, "expert")}>
            Expert help ▼
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={menuId === "expert"}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Code Review</MenuItem>
            <MenuItem onClick={handleClose}>Pair Programming</MenuItem>
            <MenuItem onClick={handleClose}>Debug Assistance</MenuItem>
          </Menu>

          <Button color="inherit" onClick={(e) => handleOpen(e, "freelancing")}>
            Freelancing ▼
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={menuId === "freelancing"}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Find Freelance Jobs</MenuItem>
            <MenuItem onClick={handleClose}>Hire Developers</MenuItem>
            <MenuItem onClick={handleClose}>Remote Projects</MenuItem>
          </Menu>

          <Button color="inherit" onClick={(e) => handleOpen(e, "more")}>
            More ▼
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={menuId === "more"}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Blog</MenuItem>
            <MenuItem onClick={handleClose}>Community</MenuItem>
            <MenuItem onClick={handleClose}>Help Center</MenuItem>
          </Menu>

          <Button color="inherit">Become a mentor</Button>
          <Button color="inherit">Log in</Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "black",
              "&:hover": { bgcolor: "grey.800" },
              px: 3,
              py: 1,
            }}
          >
            Sign Up
          </Button>
        </Box>

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
            <ListItemButton>
              <ListItemText primary="Log in" />
            </ListItemButton>
            <ListItemButton
              sx={{
                bgcolor: "black",
                color: "white",
                "&:hover": { bgcolor: "grey.800" },
                mt: 1,
              }}
            >
              <ListItemText primary="Sign Up" />
            </ListItemButton>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
