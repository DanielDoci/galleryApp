import { Add } from '@mui/icons-material';
import { Fab, Input } from '@mui/material';
import { useRef } from 'react';

const Form = ({ setFiles }) => {
  const fileRef = useRef();     //  Ref for input value
  const handleClick = () => {
    fileRef.current.click();
  };
  const handleChange = (e) => {
    setFiles([...e.target.files]);
    fileRef.current.value = null;   //Upload the same image again
  };
  return (
    <form>
      <Input
        type="file"
        inputProps={{ multiple: true }}  // Upload more than 1 images
        sx={{ display: 'none', color:'red' }}
        inputRef={fileRef}
        onChange={handleChange}
      />
      <Fab  title='Upload' color="primary" aria-label="add" onClick={handleClick}>
        <Add  fontSize="large" />
      </Fab>
    </form>
  );
};

export default Form;

