// import {
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Box,
//   Avatar,
//   Rating,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

// const MotionBox = motion(Box);
// const MotionCard = motion(Card);

// const reviews = [
//   { name: "Rajesh Kumar", profession: "Software Engineer", rating: 5, review: "My knee pain reduced drastically within 3 weeks." },
//   { name: "Anita Sharma", profession: "Yoga Instructor", rating: 5, review: "Excellent for shoulder and neck pain." },
//   { name: "Vikram Reddy", profession: "Business Owner", rating: 4, review: "Back pain improved significantly." },
//   { name: "Sneha Patel", profession: "Teacher", rating: 5, review: "My neck stiffness reduced quickly." },
//   { name: "Arjun Mehta", profession: "Fitness Trainer", rating: 5, review: "Amazing joint support." },
//   { name: "Priya Nair", profession: "Doctor", rating: 4, review: "Good formulation for joint relief." },
//   { name: "Suresh Yadav", profession: "Driver", rating: 5, review: "Back pain relief after long driving hours." },
//   { name: "Kavitha Rao", profession: "Homemaker", rating: 5, review: "Shoulder pain reduced within a month." },
//   { name: "Rohit Verma", profession: "IT Consultant", rating: 4, review: "Laptop neck pain improved." },
//   { name: "Deepa Singh", profession: "Nurse", rating: 5, review: "Standing knee pain relief." },
//   { name: "Manoj Gupta", profession: "Accountant", rating: 5, review: "Back stiffness reduced." },
//   { name: "Neha Kapoor", profession: "Designer", rating: 4, review: "Shoulder tension relief." },
//   { name: "Amit Das", profession: "Gym Owner", rating: 5, review: "Excellent joint supplement." },
//   { name: "Shalini Iyer", profession: "Professor", rating: 5, review: "More flexibility and energy." },
//   { name: "Rahul Jain", profession: "Entrepreneur", rating: 4, review: "Backbone discomfort reduced." },
//   { name: "Meena Kulkarni", profession: "Physiotherapist", rating: 5, review: "Inflammation control is great." },
//   { name: "Kiran Reddy", profession: "Engineer", rating: 5, review: "Knee pain relief noticeable." },
//   { name: "Lakshmi Devi", profession: "Retired Officer", rating: 4, review: "Reduced stiffness." },
//   { name: "Harish Kumar", profession: "Sales Manager", rating: 5, review: "Neck and shoulder relief." },
//   { name: "Pooja Malhotra", profession: "Marketing Executive", rating: 5, review: "Highly recommended." },
// ];

// export default function Reviews() {
//   const [ratingValue, setRatingValue] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const end = 4.8;
//     const duration = 2000;
//     const incrementTime = 20;

//     const step = (end / duration) * incrementTime;

//     const timer = setInterval(() => {
//       start += step;
//       if (start >= end) {
//         start = end;
//         clearInterval(timer);
//       }
//       setRatingValue(start);
//     }, incrementTime);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <Box sx={{ background: "linear-gradient(to bottom,#fff8f3,#eef2ff)", py: 12 }}>
//       <Container maxWidth="lg">

//         {/* HERO SECTION */}
//         <MotionBox
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           sx={{ textAlign: "center", mb: 10 }}
//         >
//           <Typography
//             variant="h3"
//             fontWeight="bold"
//             sx={{
//               background: "linear-gradient(45deg,#ff6a00,#ff3d00)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             Customer Reviews
//           </Typography>

//           <Typography variant="h6" color="black" mt={2}>
//             Trusted for Knee, Back, Shoulder & Neck Pain Relief
//           </Typography>

//           {/* Animated Counter */}
//           <Typography
//             variant="h2"
//             fontWeight="bold"
//             sx={{ mt: 4, color:"black" }}
//           >
//             {ratingValue.toFixed(1)} / 5
//           </Typography>

//           <Rating
//             value={4.8}
//             precision={0.1}
//             readOnly
//             size="large"
//             sx={{ mt: 1 }}
//           />

//           <Typography variant="body2" color="black" mt={1}>
//             Based on 2,000+ Happy Customers
//           </Typography>
//         </MotionBox>

//         {/* REVIEWS GRID */}
//         <Grid container spacing={4}>
//           {reviews.map((item, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <MotionCard
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 whileHover={{ y: -8 }}
//                 transition={{ duration: 0.5 }}
//                 viewport={{ once: true }}
//                 sx={{
//                   borderRadius: 5,
//                   boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
//                   height: "100%",
//                 }}
//               >
//                 <CardContent>
//                   <FormatQuoteIcon sx={{ fontSize: 35, color: "#ff6a00" }} />

//                   <Typography variant="body1" sx={{ mb: 3 }}>
//                     {item.review}
//                   </Typography>

//                   <Rating value={item.rating} readOnly />

//                   <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
//                     <Avatar sx={{ bgcolor: "#ff6a00", mr: 2 }}>
//                       {item.name.charAt(0)}
//                     </Avatar>
//                     <Box>
//                       <Typography fontWeight="bold">
//                         {item.name}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {item.profession}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </CardContent>
//               </MotionCard>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// }









import {
  Container,
  Typography,
  Box,
  Avatar,
  Rating,
  IconButton,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MotionBox = motion(Box);

const reviews = [
  { name: "Rajesh Kumar", profession: "Software Engineer", rating: 5, review: "My knee pain reduced drastically within 3 weeks." },
  { name: "Anita Sharma", profession: "Yoga Instructor", rating: 5, review: "Excellent for shoulder and neck pain." },
  { name: "Vikram Reddy", profession: "Business Owner", rating: 4, review: "Back pain improved significantly." },
  { name: "Sneha Patel", profession: "Teacher", rating: 5, review: "My neck stiffness reduced quickly." },
  { name: "Arjun Mehta", profession: "Fitness Trainer", rating: 5, review: "Amazing joint support." },
  { name: "Priya Nair", profession: "Doctor", rating: 4, review: "Good formulation for joint relief." },
  { name: "Suresh Yadav", profession: "Driver", rating: 5, review: "Back pain relief after long driving hours." },
  { name: "Kavitha Rao", profession: "Homemaker", rating: 5, review: "Shoulder pain reduced within a month." },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [ratingValue, setRatingValue] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animated rating counter
  useEffect(() => {
    let start = 0;
    const end = 4.8;
    const duration = 2000;
    const incrementTime = 20;
    const step = (end / duration) * incrementTime;

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setRatingValue(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#667eea,#764ba2)",
        display: "flex",
        alignItems: "center",
        py: 10,
      }}
    >
      <Container maxWidth="md">

        {/* HEADER */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            fontWeight="bold"
            color="white"
          >
            What Our Customers Say
          </Typography>

          <Typography
            variant="h2"
            fontWeight="bold"
            color="white"
            mt={3}
          >
            {ratingValue.toFixed(1)} / 5
          </Typography>

          <Rating
            value={4.8}
            precision={0.1}
            readOnly
            size="large"
            sx={{ mt: 1, "& .MuiRating-iconFilled": { color: "#FFD700" } }}
          />

          <Typography color="white" mt={1}>
            Based on 2,000+ Verified Reviews
          </Typography>
        </Box>

        {/* CAROUSEL */}
        <Box
          sx={{
            position: "relative",
            height: { xs: 350, md: 280 },
          }}
        >
          <AnimatePresence mode="wait">
            <MotionBox
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -40 }}
              transition={{ duration: 0.6 }}
              sx={{
                backdropFilter: "blur(15px)",
                background: "rgba(255,255,255,0.15)",
                borderRadius: 6,
                padding: 5,
                color: "white",
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                border: "1px solid rgba(255,255,255,0.3)",
                textAlign: "center",
              }}
            >
              <FormatQuoteIcon sx={{ fontSize: 40, mb: 2 }} />

              <Typography variant="h6" mb={3}>
                {reviews[index].review}
              </Typography>

              <Rating
                value={reviews[index].rating}
                readOnly
                sx={{
                  "& .MuiRating-iconFilled": { color: "#FFD700" },
                }}
              />

              <Box
                mt={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Avatar sx={{ bgcolor: "#ffffff", color: "#764ba2", mr: 2 }}>
                  {reviews[index].name.charAt(0)}
                </Avatar>

                <Box textAlign="left">
                  <Typography fontWeight="bold">
                    {reviews[index].name}
                  </Typography>
                  <Typography variant="body2">
                    {reviews[index].profession}
                  </Typography>
                </Box>
              </Box>
            </MotionBox>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <IconButton
            onClick={prevSlide}
            sx={{
              position: "absolute",
              top: "50%",
              left: -40,
              transform: "translateY(-50%)",
              color: "white",
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <IconButton
            onClick={nextSlide}
            sx={{
              position: "absolute",
              top: "50%",
              right: -40,
              transform: "translateY(-50%)",
              color: "white",
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}