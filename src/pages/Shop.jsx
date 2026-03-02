import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  IconButton,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import productBox from "../assets/product-box.jpeg";
import productFront from "../assets/product-front.jpeg";
import productBack from "../assets/product-back.jpeg";

export default function Product() {
  const [qty, setQty] = useState(1);
  const [selectedImage, setSelectedImage] = useState(productBox);

  return (
    <Container sx={{ py: 8 }}>

      <Grid container spacing={6} alignItems="center">

        {/* ================= LEFT IMAGE SECTION ================= */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              component="img"
              src={selectedImage}
              alt="Super Knee"
              sx={{
                width: "100%",
                borderRadius: 4,
                boxShadow: 5,
              }}
            />

            {/* Thumbnail Images */}
            <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
              {[productBox, productFront, productBack].map((img, i) => (
                <Box
                  key={i}
                  component="img"
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  sx={{
                    width: 80,
                    height: 80,
                    objectFit: "cover",
                    borderRadius: 2,
                    cursor: "pointer",
                    border:
                      selectedImage === img
                        ? "3px solid #c44982"
                        : "1px solid #ddd",
                  }}
                />
              ))}
            </Box>
          </motion.div>
        </Grid>

        {/* ================= RIGHT DETAILS SECTION ================= */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <Typography variant="h4" fontWeight="bold">
              Super Knee Sachets
            </Typography>

            <Typography variant="h6" color="#c44982" sx={{ mt: 1 }}>
              ₹799
            </Typography>

            <Typography sx={{ mt: 2 }} color="text.secondary">
              Advanced herbal nutraceutical formula with Curcumin,
              Boswellia, Ginger Extract & Collagen for fast knee
              and joint relief.
            </Typography>

            <Divider sx={{ my: 3 }} />

            {/* Quantity Selector */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>
                <RemoveIcon />
              </IconButton>

              <Typography>{qty}</Typography>

              <IconButton onClick={() => setQty(qty + 1)}>
                <AddIcon />
              </IconButton>
            </Box>

            {/* Add to Cart Button */}
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                py: 1.5,
                fontSize: "16px",
                backgroundColor: "#c44982",
                "&:hover": { backgroundColor: "#a63b6c" },
              }}
            >
              Add to Cart
            </Button>

            <Typography sx={{ mt: 2 }} variant="body2">
              ✔ Sugar Free  
              ✔ 48x More Bioavailable  
              ✔ Orange Flavour  
              ✔ 15 x 5g Sachets
            </Typography>

          </motion.div>
        </Grid>
      </Grid>

      {/* ================= BENEFITS SECTION ================= */}
      <Box sx={{ mt: 10 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Benefits
        </Typography>

        <Typography color="text.secondary">
          • Reduces knee & joint pain  
          • Improves mobility  
          • Anti-inflammatory support  
          • Strengthens cartilage  
        </Typography>
      </Box>

      {/* ================= INGREDIENTS ================= */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Ingredients
        </Typography>

        <Typography color="text.secondary">
          Curcumin (CurQlife), Boswellia Serrata Extract,
          Ginger Extract, Piper Nigrum Extract,
          Undenatured Collagen Type II.
        </Typography>
      </Box>

      {/* ================= USAGE ================= */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Recommended Usage
        </Typography>

        <Typography color="text.secondary">
          Take one sachet daily with 200ml of water or as
          directed by healthcare professional.
        </Typography>
      </Box>

    </Container>
  );
}


