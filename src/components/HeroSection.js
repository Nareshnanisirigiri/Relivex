// import React from "react";
// import { Box, Typography, Button, Container, Grid } from "@mui/material";
// import { motion } from "framer-motion";
// import productImage from "../assets/images/product.png";

// export default function HeroSection() {
//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         background: "linear-gradient(to right, #0f172a, #1e293b)",
//         pt: 5
//       }}
//     >
//       <Container>
//         <Grid container spacing={4} alignItems="center">
          
//           {/* LEFT CONTENT */}
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <Typography
//                 variant="h3"
//                 sx={{
//                   fontWeight: "bold",
//                   mb: 2,
//                   fontSize: { xs: "2rem", md: "3rem" }
//                 }}
//               >
//                 Stop Neck, Back & Shoulder Pain
//               </Typography>

//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 3,
//                   color: "#cbd5e1",
//                   fontSize: { xs: "1rem", md: "1.2rem" }
//                 }}
//               >
//                 Advanced herbal powder formula for fast muscle relief.
//               </Typography>

//               <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   size="large"
//                   sx={{ borderRadius: "30px", px: 4 }}
//                 >
//                   Buy Now
//                 </Button>

//                 <Button
//                   variant="outlined"
//                   color="primary"
//                   size="large"
//                   sx={{ borderRadius: "30px", px: 4 }}
//                 >
//                   Watch Video
//                 </Button>
//               </Box>
//             </motion.div>
//           </Grid>

//           {/* RIGHT IMAGE */}
//           <Grid item xs={12} md={6} textAlign="center">
//             <motion.img
//               src={productImage}
//               alt="Relivex Product"
//               style={{
//                 width: "100%",
//                 maxWidth: "400px"
//               }}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//             />
//           </Grid>

//         </Grid>
//       </Container>
//     </Box>
//   );
// }









// import React, { useEffect, useState } from "react";
// import { Box, Typography, Button, Container, Grid } from "@mui/material";
// import { motion } from "framer-motion";

// import bgVideo from "../assets/videos/v2.mp4";
// import productImage from "../assets/images/product.png";
// import h1Video from "../assets/videos/h1.mp4";
// import h2Video from "../assets/videos/h2.mp4";

// export default function HeroSection() {
//   const mediaList = [
//     { type: "image", src: productImage },
//     { type: "video", src: h1Video },
//     { type: "video", src: h2Video },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // 🔄 Auto switch every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % mediaList.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         height: "100vh",
//         overflow: "hidden",
//         display: "flex",
//         alignItems: "center",
//         color: "#fff",
//       }}
//     >
//       {/* 🔥 Background Video */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         style={{
//           position: "absolute",
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           zIndex: -2,
//         }}
//       >
//         <source src={bgVideo} type="video/mp4" />
//       </video>

//       {/* 🔥 Dark Overlay */}
//       <Box
//         sx={{
//           position: "absolute",
//           width: "100%",
//           height: "100%",
//           background: "rgba(0,0,0,0.65)",
//           zIndex: -1,
//         }}
//       />

//       <Container>
//         <Grid container spacing={6} alignItems="center">
          
//           {/* LEFT TEXT */}
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, x: -80 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1 }}
//             >
//               <Typography
//                 variant="h2"
//                 sx={{
//                   fontWeight: "bold",
//                   mb: 3,
//                   fontSize: { xs: "2rem", md: "3.2rem" },
//                 }}
//               >
//                 Stop Knee, Back & Shoulder Pain Naturally
//               </Typography>

//               <Typography
//                 variant="h6"
//                 sx={{ mb: 4, color: "#e2e8f0" }}
//               >
//                 Advanced Herbal Formula That Works Fast & Safe
//               </Typography>

//               <Button
//                 variant="contained"
//                 size="large"
//                 sx={{
//                   borderRadius: "50px",
//                   px: 6,
//                   backgroundColor: "#22c55e",
//                   color: "#000",
//                   fontWeight: "bold",
//                   "&:hover": {
//                     backgroundColor: "#16a34a",
//                   },
//                 }}
//               >
//                 Get Relief Now
//               </Button>
//             </motion.div>
//           </Grid>

//           {/* RIGHT MEDIA (Same Size Image & Videos) */}
//           <Grid item xs={12} md={6} textAlign="center">
//             <motion.div
//               key={currentIndex}
//               initial={{ opacity: 0, y: 60 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               style={{ display: "flex", justifyContent: "center" }}
//             >
//               <Box
//                 sx={{
//                   width: { xs: "280px", md: "420px" },
//                   height: { xs: "280px", md: "420px" },
//                   borderRadius: "20px",
//                   overflow: "hidden",
//                   boxShadow: "0 0 35px rgba(34,197,94,0.4)",
//                 }}
//               >
//                 {mediaList[currentIndex].type === "image" ? (
//                   <Box
//                     component="img"
//                     src={mediaList[currentIndex].src}
//                     alt="Relivex Product"
//                     sx={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                   />
//                 ) : (
//                   <Box
//                     component="video"
//                     src={mediaList[currentIndex].src}
//                     autoPlay
//                     muted
//                     playsInline
//                     sx={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                   />
//                 )}
//               </Box>
//             </motion.div>
//           </Grid>

//         </Grid>
//       </Container>
//     </Box>
//   );
// }















import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

import bgVideo from "../assets/videos/v2.mp4";
import productImage from "../assets/images/product.png";
import h1Video from "../assets/videos/h1.mp4";
import h2Video from "../assets/videos/h2.mp4";

// ✅ Move outside component
const mediaList = [
  { type: "image", src: productImage },
  { type: "video", src: h1Video },
  { type: "video", src: h2Video },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaList.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []); // ✅ No ESLint error now

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.65)",
          zIndex: -1,
        }}
      />

      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                  fontSize: { xs: "2rem", md: "3.2rem" },
                }}
              >
                Stop Knee, Back & Shoulder Pain Naturally
              </Typography>

              <Typography variant="h6" sx={{ mb: 4, color: "#e2e8f0" }}>
                Advanced Herbal Formula That Works Fast & Safe
              </Typography>

              <Button
                variant="contained"
                size="large"
                sx={{
                  borderRadius: "50px",
                  px: 6,
                  backgroundColor: "#22c55e",
                  color: "#000",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#16a34a",
                  },
                }}
              >
                Get Relief Now
              </Button>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6} textAlign="center">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  width: { xs: "280px", md: "420px" },
                  height: { xs: "280px", md: "420px" },
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 0 35px rgba(34,197,94,0.4)",
                }}
              >
                {mediaList[currentIndex].type === "image" ? (
                  <Box
                    component="img"
                    src={mediaList[currentIndex].src}
                    alt="Relivex Product"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <Box
                    component="video"
                    src={mediaList[currentIndex].src}
                    autoPlay
                    muted
                    playsInline
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}