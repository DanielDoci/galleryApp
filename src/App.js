import ImagesList from './components/imagesList/ImagesList';
import Nav from './components/Nav';
import Upload from './components/upload/Upload';
import { Container } from '@mui/material';
import AuthContext from './context/AuthContext';
import Modal from './components/Modal';


function App() {
  return (
 
    <Container sx={{ textAlign: 'center', marginTop: '1rem'}}>
     <AuthContext>
        <Modal />
        <Nav />
        <Upload />
        <ImagesList />
      
     </AuthContext>
    </Container>

  );
}

export default App;
