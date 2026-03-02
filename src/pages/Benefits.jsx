import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const ingredients = [
  {
    title: "Curcumin (250mg)",
    image:
      "https://thumbs.dreamstime.com/b/fresh-turmeric-rhizome-curcumin-powder-wooden-table-plant-background-404347197.jpg",
    description:
      "Curcumin is a clinically researched anti-inflammatory compound that helps reduce swelling, joint stiffness, and long-term discomfort.",
    benefits: [
      "Reduces inflammation naturally",
      "Improves flexibility",
      "Speeds up recovery",
      "Supports antioxidant protection",
    ],
  },
  {
    title: "Boswellia Serrata (250mg)",
    image:
      "https://media.istockphoto.com/id/2070759272/photo/boswellia-serrata.jpg?s=612x612&w=0&k=20&c=-EBg4mCtwapZf4tj9xH3ePw9WSlyy4dB91ceQ62RzBg=",
    description:
      "Boswellia helps maintain cartilage integrity and improves joint lubrication for smoother movement.",
    benefits: [
      "Reduces stiffness",
      "Improves joint comfort",
      "Supports cartilage health",
      "Enhances mobility",
    ],
  },
  {
    title: "Ginger Extract (250mg)",
    image:
      "https://media.istockphoto.com/id/647402644/photo/ginger-root-and-ginger-powder-in-the-bowl.jpg?s=612x612&w=0&k=20&c=cMu11RTfDuNT4C8DAgzYnEaxuX8O612sFtsNQvCfS9I=",
    description:
      "Ginger extract promotes circulation and works synergistically with curcumin for enhanced anti-inflammatory support.",
    benefits: [
      "Natural pain relief",
      "Improves blood flow",
      "Supports digestion",
      "Boosts immune response",
    ],
  },
  {
    title: "Collagen Type II (40mg)",
    image:
      "https://www.lizearle.com/dw/image/v2/BGJR_PRD/on/demandware.static/-/Library-Sites-le-content-global/default/dw1c1c7a03/images/articles/what-is-collagen/Blog-Header-Collagen-Desktop.jpg?sw=720&q=85",
    description:
      "Undenatured Collagen Type II strengthens cartilage structure and improves cushioning between joints.",
    benefits: [
      "Supports cartilage repair",
      "Improves joint cushioning",
      "Maintains joint structure",
      "Enhances flexibility",
    ],
  },
  {
    title: "Piper Nigrum Extract (5mg)",
    image:
      "https://starhiherbs.com/images/products/black-pepper-extract-1.jpg",
    description:
      "Piper Nigrum enhances absorption of curcumin and other nutrients for maximum effectiveness.",
    benefits: [
      "Boosts nutrient absorption",
      "Enhances bioavailability",
      "Improves formula efficiency",
      "Maximizes results",
    ],
  },
];

export default function Benefits() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #fff8f3, #eef2ff)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Floating Background Glow */}
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          background: "radial-gradient(circle,#ff9800,transparent)",
          borderRadius: "50%",
          top: -100,
          left: -100,
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ py: 12, position: "relative", zIndex: 2 }}>
        {/* HERO */}
        <MotionBox
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          sx={{ textAlign: "center", mb: 14 }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              background: "linear-gradient(45deg,#ff6a00,#ff3d00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Advanced Joint Support Formula
          </Typography>

          <Typography variant="h6" color="black" mt={3}>
            Powerful combination of clinically researched ingredients for mobility, flexibility and comfort.
          </Typography>
        </MotionBox>

        {/* INGREDIENT SECTIONS */}
        {ingredients.map((item, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            sx={{ mb: 14 }}
          >
            <Grid container spacing={8} alignItems="center">
              {/* IMAGE */}
              <Grid item xs={12} md={6}>
                <MotionCard
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  sx={{
                    borderRadius: 6,
                    overflow: "hidden",
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "420px",
                      objectFit: "cover",
                    }}
                  />
                </MotionCard>
              </Grid>

              {/* CONTENT */}
              <Grid item xs={12} md={6}>
                <Typography variant="h4" fontWeight="bold" gutterBottom sx={{color:"black"}}>
                  {item.title}
                </Typography>

                <Typography variant="body1" sx={{ mb: 4 , color:"black"}}>
                  {item.description}
                </Typography>

                {/* Benefits List */}
                <Grid container spacing={2}>
                  {item.benefits.map((benefit, i) => (
                    <Grid item xs={12} sm={6} key={i}>
                      <MotionBox
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Chip
                          label={`✔ ${benefit}`}
                          sx={{
                            width: "100%",
                            py: 2,
                            fontSize: "0.95rem",
                            background: "#0f0f0f",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                          }}
                        />
                      </MotionBox>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </MotionBox>
        ))}

        {/* FINAL CTA */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{
            textAlign: "center",
            py: 10,
            borderRadius: 10,
            background: "linear-gradient(135deg,#ff6a00,#ff3d00)",
            color: "white",
            boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Experience Freedom of Movement
          </Typography>

          <Typography sx={{ mt: 3, mb: 5 }}>
            Reduce stiffness. Improve flexibility. Support your joints naturally.
          </Typography>

          <MotionBox whileHover={{ scale: 1.1 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                background: "white",
                color: "#ff3d00",
                fontWeight: "bold",
                px: 6,
                py: 1.5,
                borderRadius: "50px",
              }}
            >
              Order Now
            </Button>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}