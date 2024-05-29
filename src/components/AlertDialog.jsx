// AlertDialog.jsx
import { Dialog, DialogTitle, DialogContent, DialogContentText, Button } from '@mui/material';

export default function AlertDialog({ open, handleYes, handleClose, alertMessage, isSecondButton=false, redirect=false }) {
  

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Alert</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {alertMessage}
        </DialogContentText>
      </DialogContent>
      <div style={{padding: '10px', display: 'flex', flexDirection:'column'}}>
        <Button style={{color: 'white', backgroundColor: '#797EF6'}} onClick={redirect ? handleYes : handleClose}>Yes</Button>
        {isSecondButton && <Button className='text-[#797EF6]' onClick={handleClose}>No</Button>}
      </div>
    </Dialog>
  );
};
