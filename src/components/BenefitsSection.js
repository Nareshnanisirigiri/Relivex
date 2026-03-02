import React from "react";
import { Box, Typography, Container, Grid, Card, CardContent } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import SpaIcon from "@mui/icons-material/Spa";
import VerifiedIcon from "@mui/icons-material/Verified";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: <FlashOnIcon sx={{ fontSize: 50, color: "#22c55e" }} />,
    title: "Fast Pain Relief",
    description: "Starts working within minutes to reduce muscle discomfort."
  },
  {
    icon: <SpaIcon sx={{ fontSize: 50, color: "#22c55e" }} />,
    title: "100% Herbal Formula",
    description: "Made with natural anti-inflammatory ingredients."
  },
  {
    icon: <LocalHospitalIcon sx={{ fontSize: 50, color: "#22c55e" }} />,
    title: "Doctor Inspired",
    description: "Carefully designed for safe and effective pain management."
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 50, color: "#22c55e" }} />,
    title: "Lab Tested & Safe",
    description: "Quality checked to ensure safety and purity."
  }
];

export default function BenefitsSection() {
  return (
    <Box sx={{ py: 8, backgroundColor: "#1e293b" }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 6,
            fontWeight: "bold",
            fontSize: { xs: "1.8rem", md: "2.5rem" }
          }}
        >
          Why Choose Relivex?
        </Typography>

        <Grid container spacing={4}>
          {benefits.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    backgroundColor: "#0f172a",
                    textAlign: "center",
                    p: 3,
                    borderRadius: 4,
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 0 20px #22c55e"
                    }
                  }}
                >
                  <CardContent>
                    {item.icon}
                    <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#cbd5e1" }}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}