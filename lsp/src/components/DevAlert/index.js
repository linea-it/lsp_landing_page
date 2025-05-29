"use client";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useAuth } from '@/contexts/AuthContext';

export default function DevAlert() {
  const { settings } = useAuth();
  return (
    settings?.is_dev && (
      <Alert severity="warning">
        <AlertTitle>This is a development and testing version of this platform.</AlertTitle>
        Do not use its data or reference it in any way.
        <br />
        The production instance will be available soon.
      </Alert>
    )
  )
}
