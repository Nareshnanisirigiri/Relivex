import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

export default function PainVideosSection() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#1e293b" }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 6, fontWeight: "bold", color: "#fff" }}
        >
          Pain Relief & AI Insights Videos
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Back & Shoulder Pain */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/KGOv7sDiW_U"
                title="Back and Shoulder Pain Relief"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
                }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>
            <Typography variant="subtitle1" sx={{ mt: 1, color: "#cbd5e1" }}>
              Back & Shoulder Pain Relief Exercises
            </Typography>
          </Grid>

          {/* AI Knee Pain Video */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/9EViXM8AsfA"
                title="AI Knee Pain Prediction"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
                }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>
            <Typography variant="subtitle1" sx={{ mt: 1, color: "#cbd5e1" }}>
              AI Insights on Knee Arthritis
            </Typography>
          </Grid>

          {/* Joint Pain Guide */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/O6kzVMZcPks"
                title="Joint Pain Guide"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
                }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>
            <Typography variant="subtitle1" sx={{ mt: 1, color: "#cbd5e1" }}>
              Comprehensive Knee, Back & Shoulder Pain Guide
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}