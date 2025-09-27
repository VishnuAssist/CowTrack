import React, { useEffect, useState } from "react";
import { Box, Button, Paper, TextField, Typography, Alert } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";
import { setCredentials, logout } from "../../slice/loginSliceFixedInput";
import { useNavigate } from "react-router";

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error } = useAppSelector((state) => state.login);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(setCredentials({ username, password }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboards/CowDashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        backgroundImage: `url("/image/cow.jpg")`, // your cow image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {!isAuthenticated ? (
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
            width: 350,
            bgcolor: "rgba(255, 255, 255, 0.1)", // makes card semi-transparent
            backdropFilter: "blur(-10px)", // adds slight blur for better readability
            boxShadow: "0px 4px 20px rgba(0,0,0,0.3)", // keeps card visible
          }}
        >
        

          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
          />

          {error && (
            <Alert severity="error" sx={{ mt: 1, mb: 1 }}>
              {error}
            </Alert>
          )}

          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            sx={{ mt: 2, borderRadius: 2 }}
          >
            Login
          </Button>
        </Paper>
      ) : (
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
            width: 350,
            textAlign: "center",
            bgcolor: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(6px)",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Welcome, Vishnu!
          </Typography>
          <Button
            fullWidth
            variant="contained"
            color="error"
            onClick={handleLogout}
            sx={{ borderRadius: 2 }}
          >
            Logout
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default LoginPage;
