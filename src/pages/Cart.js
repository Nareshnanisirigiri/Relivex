import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

import productBox from "../assets/product-box.jpeg"; // ✅ LOCAL IMAGE

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Super Knee Sachets (15 Days Pack)",
      price: 1499,
      quantity: 1,
      image: productBox, // ✅ USING LOCAL IMAGE
    },
  ]);

  const increment = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrement = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#f4f6f8,#e8f5e9,#fff3e0)",
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          fontWeight="bold"
          mb={6}
          textAlign="center"
        >
          Your Cart ({totalCount})
        </Typography>

        <Grid container spacing={4}>
          {/* LEFT SIDE - CART ITEMS */}
          <Grid item xs={12} md={8}>
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card
                    sx={{
                      display: "flex",
                      mb: 3,
                      borderRadius: 4,
                      boxShadow:
                        "0 10px 30px rgba(0,0,0,0.08)",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        width: 160,
                        objectFit: "cover",
                      }}
                      image={item.image}
                      alt={item.name}
                    />

                    <CardContent sx={{ flex: 1 }}>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                      >
                        {item.name}
                      </Typography>

                      <Typography
                        color="text.secondary"
                        mb={2}
                      >
                        ₹{item.price}
                      </Typography>

                      {/* Quantity Controls */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <IconButton
                          onClick={() =>
                            decrement(item.id)
                          }
                          sx={{
                            background: "#f1f1f1",
                          }}
                        >
                          <RemoveIcon />
                        </IconButton>

                        <Typography
                          variant="h6"
                          fontWeight="bold"
                        >
                          {item.quantity}
                        </Typography>

                        <IconButton
                          onClick={() =>
                            increment(item.id)
                          }
                          sx={{
                            background: "#f1f1f1",
                          }}
                        >
                          <AddIcon />
                        </IconButton>

                        <IconButton
                          onClick={() =>
                            removeItem(item.id)
                          }
                          sx={{ ml: 2 }}
                        >
                          <DeleteIcon color="error" />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </Grid>

          {/* RIGHT SIDE - SUMMARY */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  p: 3,
                  boxShadow:
                    "0 10px 30px rgba(0,0,0,0.08)",
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  mb={3}
                >
                  Order Summary
                </Typography>

                <Divider sx={{ mb: 2 }} />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    mb: 2,
                  }}
                >
                  <Typography>Total Items</Typography>
                  <Typography>
                    {totalCount}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    mb: 2,
                  }}
                >
                  <Typography>Total Price</Typography>
                  <Typography fontWeight="bold">
                    ₹{totalPrice}
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 3,
                    py: 1.5,
                    borderRadius: 3,
                    background:
                      "linear-gradient(45deg,#16a34a,#065f46)",
                  }}
                >
                  Proceed to Checkout
                </Button>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}