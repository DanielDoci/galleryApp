import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Typography } from '@mui/material';
import moment from 'moment';    //npm install moment
import Options from './Options';
import useFirestore from '../../firebase/useFirestore';




export default function StandardImageList() {
  
  const { documents } = useFirestore();
  return (
    <ImageList variant="quilted" cols={3} rowHeight={300}>
      {documents.map((item) => (
        <ImageListItem key={item?.id}
        sx={{
          opacity: '0.8',
          cursor: 'arrow',
          '&:hover': {opacity: 1} 
          }} 
          >
        <Options imageId={item.id} />
        <img 
        src={`${item?.data?.imageURL}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item?.data?.imageURL}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
             
             loading="lazy"
           />
                    <Typography
                variant="body2"
                component="span"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 135,
                  color: 'rgb(0,255,255)',
                  background: 'rgba(0,0,0, .9)',
                  p: '10px',
                  borderTopRightRadius: 8,
                  borderTopLeftRadius: 8
                }}
          >
             {moment(item?.data?.timestamp?.toDate()).fromNow()}
           </Typography>
        </ImageListItem>
      ))}
    </ImageList>
  );
}








