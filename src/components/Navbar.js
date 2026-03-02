import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = ["Home", "Benefits", "How It Works", "Reviews"];

  return (
    <>
      <AppBar position="sticky" elevation={0} sx={{ background: "#0f172a" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#22c55e" }}
          >
            Relivex
          </Typography>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box>
              {menuItems.map((item) => (
                <Button key={item} sx={{ color: "white", ml: 2 }}>
                  {item}
                </Button>
              ))}
              <Button
                variant="contained"
                color="primary"
                sx={{ ml: 3, borderRadius: "20px" }}
              >
                Buy Now
              </Button>
            </Box>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton onClick={() => setOpen(true)} sx={{ color: "white" }}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, background: "#1e293b", height: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 2
            }}
          >
            <IconButton onClick={() => setOpen(false)} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {menuItems.map((item) => (
              <ListItem button key={item}>
                <ListItemText
                  primary={item}
                  sx={{ color: "white", textAlign: "center" }}
                />
              </ListItem>
            ))}
          </List>

          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: "20px", width: "80%" }}
            >
              Buy Now
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}