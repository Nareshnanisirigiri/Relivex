// import {
//   Container,
//   Typography,
//   Grid,
//   Box,
//   Card,
//   CardContent,
//   Stepper,
//   Step,
//   StepLabel,
// } from "@mui/material";
// import { motion } from "framer-motion";

// const MotionBox = motion(Box);
// const MotionCard = motion(Card);

// const steps = [
//   {
//     title: "Step 1: Absorption Boost",
//     image:
//       "https://starhiherbs.com/images/products/black-pepper-extract-1.jpg",
//     content:
//       "Piper Nigrum Extract enhances bioavailability, ensuring Curcumin and other nutrients are absorbed efficiently into the bloodstream.",
//   },
//   {
//     title: "Step 2: Inflammation Reduction",
//     image:
//       "https://thumbs.dreamstime.com/b/fresh-turmeric-rhizome-curcumin-powder-wooden-table-plant-background-404347197.jpg",
//     content:
//       "Curcumin and Ginger work together to reduce inflammation at the root level, helping relieve stiffness and discomfort in joints.",
//   },
//   {
//     title: "Step 3: Cartilage Protection",
//     image:
//       "https://media.istockphoto.com/id/2070759272/photo/boswellia-serrata.jpg?s=612x612&w=0&k=20&c=-EBg4mCtwapZf4tj9xH3ePw9WSlyy4dB91ceQ62RzBg=",
//     content:
//       "Boswellia helps protect cartilage from breakdown and supports smoother joint movement.",
//   },
//   {
//     title: "Step 4: Joint Repair & Support",
//     image:
//       "https://www.lizearle.com/dw/image/v2/BGJR_PRD/on/demandware.static/-/Library-Sites-le-content-global/default/dw1c1c7a03/images/articles/what-is-collagen/Blog-Header-Collagen-Desktop.jpg?sw=720&q=85",
//     content:
//       "Undenatured Collagen Type II strengthens cartilage structure and improves cushioning between joints.",
//   },
// ];

// export default function HowItWorks() {
//   return (
//     <Box
//       sx={{
//         background: "linear-gradient(to bottom, #fff8f3, #eef2ff)",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Background Glow */}
//       <Box
//         sx={{
//           position: "absolute",
//           width: 300,
//           height: 300,
//           background: "radial-gradient(circle,#ff9800,transparent)",
//           borderRadius: "50%",
//           top: -100,
//           right: -100,
//           filter: "blur(120px)",
//           zIndex: 0,
//         }}
//       />

//       <Container maxWidth="lg" sx={{ py: 12, position: "relative", zIndex: 2 }}>
//         {/* HERO SECTION */}
//         <MotionBox
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           sx={{ textAlign: "center", mb: 12 }}
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
//             How It Works
//           </Typography>

//           <Typography variant="h6" color="black" mt={3}>
//             A scientifically designed 4-step process for joint comfort and mobility
//           </Typography>
//         </MotionBox>

//         {/* STEP SECTIONS */}
//         {steps.map((step, index) => (
//           <MotionBox
//             key={index}
//             initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             sx={{ mb: 14 }}
//           >
//             <Grid container spacing={8} alignItems="center">
//               {/* IMAGE */}
//               <Grid item xs={12} md={6}>
//                 <MotionCard
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ type: "spring", stiffness: 200 }}
//                   sx={{
//                     borderRadius: 6,
//                     overflow: "hidden",
//                     boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
//                   }}
//                 >
//                   <img
//                     src={step.image}
//                     alt={step.title}
//                     style={{
//                       width: "100%",
//                       height: "420px",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </MotionCard>
//               </Grid>

//               {/* CONTENT */}
//               <Grid item xs={12} md={6}>
//                 <Typography variant="h4" fontWeight="bold" gutterBottom sx={{color:"black"}}>
//                   {step.title}
//                 </Typography>

//                 <Typography variant="body1" sx={{ mb: 4, color:"black" }}>
//                   {step.content}
//                 </Typography>

//                 <Card
//                   sx={{
//                     borderRadius: 4,
//                     background: "#080808",
//                     boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
//                   }}
//                 >
//                   <CardContent>
//                     <Typography variant="body2" color="text.secondary">
//                       This step plays a crucial role in ensuring maximum
//                       effectiveness of the formula and long-term joint support.
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             </Grid>
//           </MotionBox>
//         ))}

//         {/* SUMMARY SECTION */}
//         <MotionBox
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           sx={{
//             textAlign: "center",
//             py: 10,
//             borderRadius: 10,
//             background: "linear-gradient(135deg,#ff6a00,#ff3d00)",
//             color: "white",
//             boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
//           }}
//         >
//           <Typography variant="h4" fontWeight="bold">
//             Complete Joint Protection Cycle
//           </Typography>

//           <Typography sx={{ mt: 3 }}>
//             Absorb → Reduce Inflammation → Protect Cartilage → Strengthen & Support
//           </Typography>
//         </MotionBox>
//       </Container>
//     </Box>
//   );
// }


import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import HealingIcon from "@mui/icons-material/Healing";
import SpaIcon from "@mui/icons-material/Spa";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const steps = [
  {
    icon: <HealingIcon sx={{ fontSize: 50 }} />,
    title: "Step 1 – Absorption",
    description:
      "Powerful herbal ingredients enter your bloodstream and begin targeting inflammation in knees, neck, shoulders and backbone.",
  },
  {
    icon: <SpaIcon sx={{ fontSize: 50 }} />,
    title: "Step 2 – Reduce Inflammation",
    description:
      "Natural anti-inflammatory compounds calm swollen joints and relax stiff muscles.",
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 50 }} />,
    title: "Step 3 – Repair & Strengthen",
    description:
      "Supports cartilage repair and improves joint lubrication for smoother movement.",
  },
  {
    icon: <SelfImprovementIcon sx={{ fontSize: 50 }} />,
    title: "Step 4 – Restore Mobility",
    description:
      "Improves flexibility, reduces pain, and helps you move freely again.",
  },
];

export default function HowItWorks() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
        py: 12,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">

        {/* HEADER */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          textAlign="center"
          mb={10}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            color="white"
          >
            How It Works
          </Typography>

          <Typography
            variant="h6"
            color="rgba(255,255,255,0.7)"
            mt={2}
          >
            Natural Science Backed Joint Pain Relief Process
          </Typography>
        </MotionBox>

        {/* STEPS GRID */}
        <Grid container spacing={5}>
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <MotionCard
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                sx={{
                  backdropFilter: "blur(20px)",
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: 6,
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                  height: "100%",
                  textAlign: "center",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(45deg,#ff6a00,#ff3d00)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px auto",
                      boxShadow:
                        "0 10px 30px rgba(255,106,0,0.6)",
                    }}
                  >
                    {step.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {step.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {step.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>

        {/* FINAL SECTION */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          textAlign="center"
          mt={12}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            color="white"
          >
            Feel the Difference in Just Weeks
          </Typography>

          <Typography
            variant="body1"
            color="rgba(255,255,255,0.7)"
            mt={2}
          >
            Trusted for knee pain, backbone stiffness, shoulder tension, and neck discomfort.
          </Typography>
        </MotionBox>
      </Container>
    </Box>
  );
}