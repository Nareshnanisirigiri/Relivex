import { Box, Container, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AuthLanding() {
  const roles = ["User", "Admin", "Vendor"];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          textAlign="center"
          color="white"
          fontWeight="bold"
          mb={6}
        >
          Choose Your Login Type
        </Typography>

        <Grid container spacing={4}>
          {roles.map((role) => (
            <Grid item xs={12} md={4} key={role}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card sx={{ borderRadius: 4 }}>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h5" fontWeight="bold" mb={2}>
                      {role}
                    </Typography>
                    <Button
                      component={Link}
                      to={`/login/${role.toLowerCase()}`}
                      variant="contained"
                      fullWidth
                    >
                      Login
                    </Button>
                    <Button
                      component={Link}
                      to={`/register/${role.toLowerCase()}`}
                      variant="outlined"
                      fullWidth
                      sx={{ mt: 2 }}
                    >
                      Register
                    </Button>
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