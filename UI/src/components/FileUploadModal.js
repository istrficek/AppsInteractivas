import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Card, CardContent, CardHeader, CardMedia, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles'
import { DataContext } from 'src/context';
import { LoadingButton } from '@mui/lab';

const styles = {
    inputFile: {
        opacity: "0",
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: "-1"
    },
    inputFileWrapper: {
        "& button svg": {
        color: "inherit"
        }
    },
    modalStyle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        //width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }
};

const useStyles = makeStyles(styles);

export default function FileUploadModal({ open, handleClose, selectedImage }) {  
    const { currentUser } = React.useContext(DataContext);      
    const [image, setImage] = React.useState(undefined)
    const [imageURL, setImageURL] = React.useState(currentUser.picture);
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        if (image) {            
            setImageURL(URL.createObjectURL(image));
        }
    }, [image]);

    const handleSelectImage = (e) => {
        setImage(e.target.files[0])        
    }

    const handleUploadImage = () => {
        setLoading(true);
        selectedImage(image);
    }

    const classes = useStyles();

    let hiddenFile = React.createRef();
    const onFocus = e => {
        hiddenFile.current.click(e);
    };


  return (
    <div>
      <Modal
        open={open}
        onClose={ handleClose }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card className={classes.modalStyle}>
            <CardHeader title='Subir Imagen' />
            <CardMedia
                sx={{ cursor:'pointer', maxHeight: '40%', maxWidth: '40%' }}
                onClick={onFocus}
                component="img"
                //height="140"
                image={imageURL}
                alt="Imagen Subida"
            />
            <CardContent>
                <div className={classes.inputFileWrapper}>
                    <input
                        type="file"
                        className={classes.inputFile}
                        multiple={false}
                        ref={hiddenFile}
                        onChange={handleSelectImage}
                    />  
                    <Stack>
                        <Typography> { image? image.name : 'Subir Imagen' } </Typography>                                        
                        <LoadingButton loading={loading} onClick={handleUploadImage} variant='outlined' >Cambiar Imagen</LoadingButton>
                    </Stack>
                </div>
            </CardContent>
        </Card>
      </Modal>
    </div>
  );
}
