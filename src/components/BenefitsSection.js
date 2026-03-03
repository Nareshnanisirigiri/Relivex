import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  Modal,
  IconButton
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ScienceIcon from "@mui/icons-material/Science";
import SpaIcon from "@mui/icons-material/Spa";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import MedicationIcon from "@mui/icons-material/Medication";
import HealingIcon from "@mui/icons-material/Healing";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import BiotechIcon from "@mui/icons-material/Biotech";

import { motion, AnimatePresence } from "framer-motion";

const benefits = [
  {
    title: "Knee Joint Supplement India",
    icon: <AccessibilityNewIcon sx={{ fontSize: 40 }} />,
    content:
      "Premium knee joint supplement specially formulated for Indian adults suffering from joint stiffness and osteoarthritis."
  },
  {
    title: "Best Supplement for Knee Pain",
    icon: <HealingIcon sx={{ fontSize: 40 }} />,
    content:
      "Clinically designed formulation targeting inflammation, cartilage damage and mobility issues."
  },
  {
    title: "Curcumin Supplement for Knee OA",
    icon: <ScienceIcon sx={{ fontSize: 40 }} />,
    content:
      "Advanced curcumin technology supports reduction of inflammation in knee osteoarthritis patients."
  },
  {
    title: "Boswellia Supplement Knee Osteoarthritis",
    icon: <SpaIcon sx={{ fontSize: 40 }} />,
    content:
      "Boswellia extract helps reduce joint swelling and improves flexibility naturally."
  },
  {
    title: "CurQlife Curcumin Supplement",
    icon: <BiotechIcon sx={{ fontSize: 40 }} />,
    content:
      "High bioavailability CurQlife® technology delivers superior curcumin absorption for joint protection."
  },
  {
    title: "Boswellin Super Supplement",
    icon: <LocalPharmacyIcon sx={{ fontSize: 40 }} />,
    content:
      "Boswellin® Super enhances anti-inflammatory action for better mobility and reduced stiffness."
  },
  {
    title: "UC-II Collagen Knee Supplement",
    icon: <MedicationIcon sx={{ fontSize: 40 }} />,
    content:
      "Undenatured Type II Collagen works via immune modulation to protect and repair joint cartilage."
  }
];

export default function PremiumBenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % benefits.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleOpen = (index) => {
    setActiveIndex(index);
    setOpen(true);
  };

  return (
    <Box
      sx={{
        py: 8,
        background: "linear-gradient(135deg, #f3f5f9)"
      }}
    >
      <Container>

        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 6,
            fontWeight: "bold",
            color: "#111",
            fontSize: { xs: "1.6rem", md: "2.5rem" }
          }}
        >
          Advanced Knee & Joint Health Benefits
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {benefits.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card
                  onClick={() => handleOpen(index)}
                  sx={{
                    cursor: "pointer",
                    textAlign: "center",
                    p: 3,
                    borderRadius: 4,
                    background:
                      activeIndex === index
                        ? "rgba(34,197,94,0.25)"
                        : "#fff",
                    border:
                      activeIndex === index
                        ? "1px solid #22c55e"
                        : "1px solid rgba(0,0,0,0.05)",
                    boxShadow:
                      activeIndex === index
                        ? "0 0 20px #22c55e"
                        : "0 4px 15px rgba(0,0,0,0.1)"
                  }}
                >
                  <Box sx={{ color: "#22c55e" }}>
                    {item.icon}
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{ mt: 1, fontWeight: 500 }}
                  >
                    {item.title}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* FIXED MOBILE RESPONSIVE MODAL */}
        <AnimatePresence>
          {open && (
            <Modal
              open={open}
              onClose={() => setOpen(false)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 2
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  maxHeight: "90vh",
                  overflowY: "auto"
                }}
              >
                <Box
                  sx={{
                    background: "#0f172a",
                    borderRadius: 4,
                    p: { xs: 3, md: 4 },
                    color: "#fff",
                    position: "relative"
                  }}
                >
                  <IconButton
                    onClick={() => setOpen(false)}
                    sx={{
                      position: "absolute",
                      right: 10,
                      top: 10,
                      color: "#fff"
                    }}
                  >
                    <CloseIcon />
                  </IconButton>

                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      color: "#22c55e",
                      fontSize: { xs: "1.2rem", md: "1.5rem" }
                    }}
                  >
                    {benefits[activeIndex].title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#cbd5e1",
                      lineHeight: 1.7,
                      fontSize: { xs: "0.95rem", md: "1rem" }
                    }}
                  >
                    {benefits[activeIndex].content}
                  </Typography>
                </Box>
              </motion.div>
            </Modal>
          )}
        </AnimatePresence>

      </Container>
    </Box>
  );
}