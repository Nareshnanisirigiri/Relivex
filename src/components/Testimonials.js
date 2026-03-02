import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating
} from "@mui/material";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Ramesh Kumar",
    review:
      "My back pain reduced in just 3 days. Amazing product! Highly recommended.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    review:
      "I use Relivex after long office hours. Neck pain is almost gone!",
    rating: 5
  },
  {
    name: "Arjun Reddy",
    review:
      "Very effective and natural. I feel relief within minutes.",
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#1e293b" }}>
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
          What Our Customers Say
        </Typography>

        <Grid container spacing={4}>
          {reviews.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    backgroundColor: "#0f172a",
                    borderRadius: 4,
                    p: 3,
                    textAlign: "center",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 0 20px #22c55e"
                    }
                  }}
                >
                  <CardContent>
                    <Avatar
                      sx={{
                        width: 70,
                        height: 70,
                        margin: "0 auto",
                        mb: 2,
                        bgcolor: "#22c55e"
                      }}
                    >
                      {item.name.charAt(0)}
                    </Avatar>

                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {item.name}
                    </Typography>

                    <Rating
                      value={item.rating}
                      readOnly
                      sx={{ mb: 2 }}
                    />

                    <Typography
                      variant="body2"
                      sx={{ color: "#cbd5e1" }}
                    >
                      "{item.review}"
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