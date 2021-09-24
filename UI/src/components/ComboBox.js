import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export default function ComboBox() {
    const [val, setVal] = useState()

    const handleChange = (val) => {
        setVal(val);
    }

    return(
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Grupo Sanguineo</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={val}
                label="Grupo Sanguineo"
                onChange={handleChange}
            >
                <MenuItem value={-1}>Seleleccionar</MenuItem>
                <MenuItem value={1}>O-</MenuItem>
                <MenuItem value={2}>O+</MenuItem>   
                <MenuItem value={3}>A-</MenuItem>
                <MenuItem value={4}>A+</MenuItem> 
                <MenuItem value={5}>B-</MenuItem>
                <MenuItem value={6}>B+</MenuItem> 
                <MenuItem value={7}>AB-</MenuItem>
                <MenuItem value={8}>AB+</MenuItem>              
            </Select>
        </FormControl>
    )
}