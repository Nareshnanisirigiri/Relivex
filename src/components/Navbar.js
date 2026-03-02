import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Button,
  useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Benefits", path: "/benefits" },
    { name: "Uses", path: "/how-it-works" },
    { name: "Reviews", path: "/reviews" },
    

  ];

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#c44982" }}>
        <Toolbar>

          {/* ================= LEFT ================= */}
          <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
            {isMobile ? (
              <>
                <IconButton
                  onClick={() => setOpen(true)}
                  sx={{ color: "#fff" }}
                >
                  <MenuIcon />
                </IconButton>

                <IconButton sx={{ color: "#fff" }}>
                  <SearchIcon />
                </IconButton>
              </>
            ) : (
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Relivex
              </Typography>
            )}
          </Box>

          {/* ================= CENTER ================= */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isMobile ? (
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Relivex
              </Typography>
            ) : (
              menuItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: "#fff",
                    mx: 2,
                    "&:hover": { backgroundColor: "#352e31" },
                  }}
                >
                  {item.name}
                </Button>
              ))
            )}
          </Box>

          {/* ================= RIGHT ================= */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {!isMobile && (
              <IconButton sx={{ color: "#fff" }}>
                <SearchIcon />
              </IconButton>
            )}

            <IconButton sx={{ color: "#fff" }}>
              <AccountCircleIcon />
            </IconButton>

            <IconButton sx={{ color: "#fff" }}>
              <ShoppingCartIcon />
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {menuItems.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => setOpen(false)}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}