import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "src/context";

export default function ComboBox({ value }) {
    const [val, setVal] = useState(value);
    const [elements, setElements] = useState([]);
    const { url } = useContext(DataContext);

    const handleChange = (val) => {
        setVal(val);
    }

    const getBloodTypes = () => {
        fetch(url + '/api/blood-type/get')
            .then((response) => response.json())
            .then((data) => {
                setElements(data);
            })
            .catch((error) => { console.log(error) });
    }

    useEffect(() => {
        getBloodTypes();
    }, [])

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
                { elements.map((bloodType, i) => {
                    return (
                        <MenuItem key={i} value={bloodType.id}>{bloodType.description}</MenuItem>
                    )
                }) }             
            </Select>
        </FormControl>
    )
}