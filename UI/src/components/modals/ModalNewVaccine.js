import { Fade, Modal, Box, Typography, Backdrop, Card, CardHeader, CardContent } from "@mui/material";
import NewVaccineForm from "./forms/NewVaccineForm";

export default function ModalNewVaccine ({ open, close }){
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handleClose = () => {
        close();
    }

    return(
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
            <Card sx={style}>
                <CardHeader title="Programar Nuevo Control"></CardHeader>                
                <CardContent>
                    <NewVaccineForm></NewVaccineForm>
                </CardContent>
            </Card>          
        </Fade>
      </Modal>
    )
}