
"use client";
import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useAuth } from "@/contexts/AuthContext";

export default function MainContainer({ children }) {
  const { settings } = useAuth();

  if (Object.keys(settings).length === 0) {
    return (
      <div>
        <Backdrop
          sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    )
  }

  return (
    <React.Fragment>
      <CssBaseline />
      {children}
    </React.Fragment>
  );
}
