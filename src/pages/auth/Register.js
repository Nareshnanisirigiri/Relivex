import { Box, Container, TextField, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function Register() {
  const { role } = useParams();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif')",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Box
            sx={{
              background: "rgba(255,255,255,0.9)",
              p: 5,
              borderRadius: 4,
              boxShadow: 5,
            }}
          >
            <Typography variant="h4" mb={3} fontWeight="bold">
              {role?.toUpperCase()} Registration
            </Typography>

            <TextField label="Full Name" fullWidth sx={{ mb: 2 }} />
            <TextField label="Email" fullWidth sx={{ mb: 2 }} />
            <TextField label="Password" type="password" fullWidth sx={{ mb: 3 }} />

            <Button variant="contained" fullWidth>
              Register
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}