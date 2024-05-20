// AlertDialog.jsx
import { Dialog, DialogTitle, DialogContent, DialogContentText, Button } from '@mui/material';

export default function AlertDialog({ open, handleClose, alertMessage }) {
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Alert</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {alertMessage}
        </DialogContentText>
      </DialogContent>
      <Button onClick={handleClose}>Okay</Button>
    </Dialog>
  );
};
