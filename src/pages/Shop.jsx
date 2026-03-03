import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  IconButton,
  Divider,
  TextField,
  Snackbar,
  Alert,
  Paper
} from "@mui/material";
import { motion } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import ScienceIcon from "@mui/icons-material/Science";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import productBox from "../assets/product-box.jpeg";
import productFront from "../assets/product-front.jpeg";
import productBack from "../assets/product-back.jpeg";

import Lottie from "lottie-react";
import mixingAnimation from "../lottie/mixing-water.json";


import Inventory2Icon from "@mui/icons-material/Inventory2";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import NoFoodIcon from "@mui/icons-material/NoFood";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MedicationIcon from "@mui/icons-material/Medication";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// ✅ CORRECT PARTICLES IMPORTS
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Product() {
  const price = 799;
  const discountPercent = 20;

  const [qty, setQty] = useState(1);
  const [selectedImage, setSelectedImage] = useState(productBox);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(discountPercent);
  const [openSnack, setOpenSnack] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const discountedPrice = price - (price * discount) / 100;
  const total = discountedPrice * qty;

  const applyCoupon = () => {
    if (coupon.toLowerCase() === "relivex10") {
      setDiscount(30);
    } else {
      setDiscount(discountPercent);
    }
  };

  return (
    <Container sx={{ py: { xs: 5, md: 8 } }}>

      {/* ================= TOP SECTION ================= */}
      <Grid container spacing={6} alignItems="center">

  {/* IMAGE + DESCRIPTION */}
  <Grid item xs={12} md={6}>
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div whileHover={{ scale: 1.05 }}>
        <Box
          component="img"
          src={selectedImage}
          alt="Super Knee"
          sx={{
            width: "100%",
            borderRadius: 4,
            boxShadow: "0 20px 50px rgba(0,0,0,0.2)"
          }}
        />
      </motion.div>

      {/* THUMBNAILS */}
      <Box sx={{ display: "flex", gap: 2, mt: 3, flexWrap: "wrap" }}>
        {[productBox, productFront, productBack].map((img, i) => (
          <motion.img
            key={i}
            src={img}
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedImage(img)}
            style={{
              width: 75,
              height: 75,
              objectFit: "cover",
              borderRadius: 12,
              cursor: "pointer",
              border:
                selectedImage === img
                  ? "3px solid orange"
                  : "1px solid #ddd"
            }}
          />
        ))}
      </Box>

      {/* DESCRIPTION */}
      <Paper
        sx={{
          mt: 4,
          p: 3,
          borderRadius: 4,
          background: "linear-gradient(135deg,#fff3e0,#fff8f3)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
        }}
      >
        <Typography
          sx={{
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "#555",
            display: "-webkit-box",
            WebkitLineClamp: showMore ? "unset" : 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            transition: "all 0.3s ease",
            
          }}
        >
          Super Knee is a once-daily, orange-flavoured sachet that you dissolve in
          a glass of water and drink after food. Each 5g sachet contains 5 powerful,
          synergistic ingredients — including 2 internationally patented extracts —
          formulated by pain management specialists specifically for mild to
          moderate knee osteoarthritis.
        </Typography>

        <Button
          onClick={() => setShowMore(!showMore)}
          sx={{
            mt: 1,
            textTransform: "none",
            fontWeight: "bold",
            color: "#f27c06"

          }}
        >
          {showMore ? "View Less" : "View More"}
        </Button>
      </Paper>
    </motion.div>
  </Grid>

  {/* DETAILS */}
  <Grid item xs={12} md={6}>
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Typography variant="h4" fontWeight="bold">
        Super Knee Sachets
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Typography sx={{ textDecoration: "line-through", color: "gray" }}>
          ₹{price}
        </Typography>

        <Typography
          variant="h4"
          sx={{ color: "#f27c06", fontWeight: "bold" }}
        >
          ₹{discountedPrice}
        </Typography>

        <Typography sx={{ color: "green" }}>
          {discount}% OFF
        </Typography>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* QUANTITY SELECTOR */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 , color: "black"}}>

        <IconButton
          onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
          sx={{
            width: 45,
            height: 45,
            color:"black",
            borderRadius: "50%",
            border: "2px solid #000",
            "&:hover": {
              backgroundColor: "#000",
              color: "#fff",
              transform: "scale(1.1)"
            }
          }}
        >
          <RemoveIcon />
        </IconButton>

        <Typography
          sx={{
            fontSize: 20,
            fontWeight: "bold",
            minWidth: 30,
            textAlign: "center"
          }}
        >
          {qty}
        </Typography>

        <IconButton
          onClick={() => setQty(qty + 1)}
          sx={{
            width: 45,
            height: 45,
            color:"black",
            borderRadius: "50%",
            border: "2px solid #000",
            "&:hover": {
              backgroundColor: "#000",
              color: "#fff",
              transform: "scale(1.1)"
            }
          }}
        >
          <AddIcon />
        </IconButton>
      </Box>

      {/* COUPON */}
      <Box sx={{ display: "flex", gap: 2, mt: 3, flexWrap: "wrap" }}>
        <TextField
          size="small"
          label="Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        <Button variant="outlined" onClick={applyCoupon}>
          Apply
        </Button>
      </Box>

      {/* TOTAL */}
      <Paper
        sx={{
          mt: 4,
          p: 3,
          borderRadius: 4,
          background: "rgba(231,126,6,0.1)"
        }}
      >
        <Typography variant="h6">
          Total: ₹{total}
        </Typography>
      </Paper>

      {/* ADD TO CART */}
      <Button
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          py: 1.5,
          fontWeight: "bold",
          background: "linear-gradient(135deg, #e0a104, #e0bb6a)",
          boxShadow: "0 10px 30px rgba(224,161,4,0.4)",
          "&:hover": {
            transform: "translateY(-3px)"
          }
        }}
        onClick={() => setOpenSnack(true)}
      >
        Add to Cart
      </Button>
    </motion.div>
  </Grid>
</Grid>

      {/* ================= PRODUCT OVERVIEW ================= */}
      <Box sx={{ mt: 14, position: "relative" }}>

        {/* PARTICLES BACKGROUND */}
        <Particles
          id="tsparticles"
          init={async (engine) => {
            await loadSlim(engine);
          }}
          options={{
            background: { color: { value: "transparent" } },
            particles: {
              number: { value: 40 },
              size: { value: 3 },
              move: { enable: true, speed: 1 },
              opacity: { value: 0.3 }
            }
          }}
          style={{ position: "absolute", top: 0, left: 0 }}
        />

        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          sx={{
            mb: 6,
            background: "linear-gradient(90deg, #f27c06, #e0bb6a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          PRODUCT OVERVIEW
        </Typography>

        {/* FLOATING IMAGE */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            component="img"
            src={selectedImage}
            sx={{ width: { xs: 180, md: 250 }, mb: 6 }}
          />
        </motion.div>

        {/* HOW TO USE */}
        <Grid container spacing={4}>
          {[
            { icon: <ScienceIcon sx={{ fontSize: 40, color: "#f27c06" }} />, text: "Empty the sachet into a glass" },
            { icon: <WaterDropIcon sx={{ fontSize: 40, color: "#f27c06" }} />, text: "Add 200 ml of water" },
            { icon: <LocalDrinkIcon sx={{ fontSize: 40, color: "#f27c06" }} />, text: "Stir well until dissolved" },
            { icon: <CheckCircleIcon sx={{ fontSize: 40, color: "#f27c06" }} />, text: "Drink immediately — once daily after food" }
          ].map((step, i) => (
            <Grid item xs={12} md={6} key={i}>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
                <Paper sx={{ p: 3, borderRadius: 4, display: "flex", alignItems: "center", gap: 3 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "#f27c06",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold"
                    }}
                  >
                    {i + 1}
                  </Box>
                  {step.icon}
                  <Typography>{step.text}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* LOTTIE */}
        <Box sx={{   justifyContent: "center" }}>
          <Lottie animationData={mixingAnimation} style={{ width: 0}} />
        </Box>
      </Box>

{/* ================= KEY PRODUCT DETAILS ================= */}
<Box sx={{ mt: 4 }}>

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <Typography
      variant="h5"
      fontWeight="bold"
      textAlign="center"
      sx={{
        mb: 6,
        background: "linear-gradient(90deg,#f27c06,#e0bb6a)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}
    >
      Key Product Details
    </Typography>
  </motion.div>

  <Grid container spacing={4}>

    {[
      {
        icon: <Inventory2Icon sx={{ fontSize: 40 }} />,
        text: "Pack: 15 sachets per box (15-day supply)"
      },
      {
        icon: <EmojiFoodBeverageIcon sx={{ fontSize: 40 }} />,
        text: "Flavour: Orange (pleasant taste)"
      },
      {
        icon: <NoFoodIcon sx={{ fontSize: 40 }} />,
        text: "Sugar-Free (uses sucralose — safe, non-caloric sweetener)"
      },
      {
        icon: <LocalFireDepartmentIcon sx={{ fontSize: 40 }} />,
        text: "Only 4.5 kcal per sachet"
      },
      {
        icon: <MedicationIcon sx={{ fontSize: 40 }} />,
        text: "Easy-to-dissolve granules — no large pills to swallow"
      }
    ].map((item, i) => (

      <Grid item xs={12} sm={6} md={4} key={i}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2, duration: 0.6 }}
          whileHover={{ y: -10 }}
        >
          <Paper
            sx={{
              p: 4,
              height: "100%",
              borderRadius: 5,
              textAlign: "center",
              backdropFilter: "blur(20px)",
              background: "rgba(255,255,255,0.75)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease"
            }}
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{
                color: "#f27c06",
                marginBottom: 15
              }}
            >
              {item.icon}
            </motion.div>

            <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
              {item.text}
            </Typography>
          </Paper>
        </motion.div>
      </Grid>

    ))}

  </Grid>
</Box>



{/* ================= FAQ SECTION ================= */}
<Box sx={{ mt: 14 }}>

  <Typography
    variant="h4"
    textAlign="center"
    fontWeight="bold"
    sx={{
      mb: 6,
      background: "linear-gradient(90deg,#f27c06,#e0bb6a)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }}
  >
    Frequently Asked Questions
  </Typography>

  {[
    {
      q: "How does Super Knee work?",
      a: "Super Knee contains 5 scientifically studied ingredients that work together to reduce joint inflammation through multiple biological pathways, protect cartilage from further damage through immune modulation, and improve joint mobility and reduce stiffness — naturally and without long-term painkiller side effects."
    },
    {
      q: "How long before I notice results?",
      a: "Some benefits like pain reduction may begin in 5-7 days. For optimal results including stiffness and mobility improvement, consistent daily use for 60-90 days is recommended."
    },
    {
      q: "Is Super Knee safe for daily use?",
      a: "Yes. All ingredients have strong safety profiles. However, consult your doctor if pregnant, nursing, or taking prescription medications."
    },
    {
      q: "Why is CurQlife® curcumin better?",
      a: "Standard curcumin has poor absorption. CurQlife® delivers up to 48 times more curcumin into the bloodstream with faster and longer activity."
    },
    {
      q: "What makes the collagen different?",
      a: "It contains Undenatured Type II Collagen (UC-II), which works through immune modulation (oral tolerance) to protect cartilage rather than just supplying amino acids."
    },
    {
      q: "Can I take it with other medications?",
      a: "Consult your doctor if you are on blood thinners, diabetes medication, or other prescriptions."
    },
    {
      q: "Is it suitable for diabetics?",
      a: "Yes. It is sugar-free and contains only 4.5 kcal per sachet using sucralose."
    },
    {
      q: "Can young people use it?",
      a: "It is formulated for adults 40+ with mild to moderate knee OA. Young adults should consult a healthcare professional."
    },
    {
      q: "Why sachets instead of tablets?",
      a: "Better absorption, easier consumption, pleasant taste, and allows higher ingredient dosage."
    },
    {
      q: "Is it vegetarian?",
      a: "UC-II is derived from chicken sternum cartilage, so it is non-vegetarian."
    }
  ].map((item, index) => {

    const isOpen = openFAQ === index;

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
      >
        <Paper
          sx={{
            mb: 2,
            borderRadius: 4,
            backdropFilter: "blur(20px)",
            background: "rgba(255,255,255,0.85)",
            boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
            overflow: "hidden"
          }}
        >

          {/* Question Row */}
          <Box
            onClick={() => setOpenFAQ(isOpen ? null : index)}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 3,
              cursor: "pointer"
            }}
          >
            <Typography fontWeight="bold">
              {item.q}
            </Typography>

            {/* Rotating Arrow */}
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <KeyboardArrowDownIcon sx={{ fontSize: 30, color: "#f27c06" }} />
            </motion.div>

          </Box>

          {/* Animated Answer */}
          <motion.div
            initial={false}
            animate={{
              height: isOpen ? "auto" : 0,
              opacity: isOpen ? 1 : 0
            }}
            transition={{ duration: 0.4 }}
            style={{ overflow: "hidden" }}
          >
            <Box sx={{ px: 3, pb: 3 }}>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                {item.a}
              </Typography>
            </Box>
          </motion.div>

        </Paper>
      </motion.div>
    );
  })}

</Box>


      <Snackbar open={openSnack} autoHideDuration={3000} onClose={() => setOpenSnack(false)}>
        <Alert severity="success" variant="filled">
          Product added to cart successfully!
        </Alert>
      </Snackbar>

    </Container>
  );
}