import { Alert, Snackbar } from "@mui/material"

export default function CustomSnack({open, type, text, close}) {
    const anchor = { vertical: 'bottom', horizontal: 'center' }

    return (
    <Snackbar open={open} autoHideDuration={100} anchorOrigin={ anchor } >
        <Alert variant="filled" onClose={close} severity={type} sx={{ width: '100%' }}>
            {text}
        </Alert>
    </Snackbar>
    )
}