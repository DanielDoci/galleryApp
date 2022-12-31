import { Send } from '@mui/icons-material';
import { Button } from '@mui/material';

const SubmitButton = () => {
  return (
    <Button sx={{ml: '9rem'}} variant="outlined" endIcon={<Send />} type="submit">
      Submit
    </Button>
  );
};

export default SubmitButton;
