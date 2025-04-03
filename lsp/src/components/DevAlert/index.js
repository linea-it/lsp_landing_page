import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function DevAlert() {
  return (
    <Alert severity="warning">
      <AlertTitle>This is a development and testing version of this platform.</AlertTitle>
      Do not use its data or reference it in any way.
      <br />
      The production instance will be available soon.
    </Alert>
  )
}
