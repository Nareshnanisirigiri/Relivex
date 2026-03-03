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
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Ingredients", path: "/benefits" },
    { name: "Uses", path: "/how-it-works" },
    { name: "Reviews", path: "/reviews" },
  ];

  return (
    <>
      {/* 🔥 Gradient AppBar */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "linear-gradient(90deg, #ffffff, #16a34a, #065f46)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        }}
      >
        <Toolbar>

          {/* LEFT SECTION */}
          <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
            {isMobile ? (
              <>
                <IconButton onClick={() => setOpen(true)} sx={{ color: "#000" }}>
                  <MenuIcon />
                </IconButton>

                <IconButton
                  component={Link}
                  to="/search"
                  sx={{ color: "#000" }}
                >
                  <SearchIcon />
                </IconButton>
              </>
            ) : (
              <Typography
                variant="h5"
                component={Link}
                to="/"
                sx={{
                  color: "orange",
                  textDecoration: "none",
                  fontWeight: 700,
                  letterSpacing: 1.5,
                }}
              >
                Relivex
              </Typography>
            )}
          </Box>

          {/* CENTER MENU */}
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
                  color: "#ffffff",
                  textDecoration: "none",
                  fontWeight: 700,
                  letterSpacing: 1.2,
                }}
              >
                Relivex
              </Typography>
            ) : (
              menuItems.map((item) => (
                <motion.div key={item.name} whileHover={{ scale: 1.08 }}>
                  <Button
                    component={Link}
                    to={item.path}
                    sx={{
                      color: "#000",
                      mx: 2,
                      fontWeight: 600,
                      fontSize: "1rem",
                      letterSpacing: 0.8,
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: 0,
                        height: "3px",
                        bottom: 0,
                        left: 0,
                        backgroundColor: "#065f46",
                        transition: "0.3s",
                      },
                      "&:hover::after": {
                        width: "100%",
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </motion.div>
              ))
            )}
          </Box>

          {/* RIGHT SECTION */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {!isMobile && (
              <IconButton
                component={Link}
                to="/search"
                sx={{ color: "#fff" }}
              >
                <SearchIcon />
              </IconButton>
            )}

            <motion.div whileHover={{ scale: 1.2 }}>
              <IconButton
                component={Link}
                to="/auth"
                sx={{ color: "#fff" }}
              >
                <AccountCircleIcon />
              </IconButton>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }}>
              <IconButton
                component={Link}
                to="/cart"
                sx={{ color: "#fff" }}
              >
                <ShoppingCartIcon />
              </IconButton>
            </motion.div>
          </Box>

        </Toolbar>
      </AppBar>

      {/* 🔥 MOBILE DRAWER */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 260,
            background: "linear-gradient(180deg,#065f46,#16a34a)",
            color: "#fff",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={() => setOpen(false)} sx={{ color: "#fff" }}>
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
                  sx={{
                    borderRadius: 2,
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      letterSpacing: 0.5,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}

            {/* Extra Mobile Links */}
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/auth"
                onClick={() => setOpen(false)}
              >
                <ListItemText primary="Login / Register" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/cart"
                onClick={() => setOpen(false)}
              >
                <ListItemText primary="Cart" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}