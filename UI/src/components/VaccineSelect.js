import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import { URLService } from 'src/services/URLService';
import { DataContext } from 'src/context';

export default function VaccineSelect({ valueChanged }) {
    const [pendingVaccines, setPendingVaccines] = React.useState([])
    const [givenVaccines, setGivenVaccines] = React.useState([])
    const [selected, setSelected] = React.useState({})
    const { currentChildId } = React.useContext(DataContext);

    const getVaccines = () => {
        fetch(URLService.getVaccinesURL + currentChildId)
            .then((response) => response.json())
            .then((data) => {
                setPendingVaccines(data.pending);
                setGivenVaccines(data.given);
            })
            .catch((error) => { console.log(error) });
    }

    React.useEffect(() => {
        getVaccines();
    }, [])

    const handleChange = (e) => {
        setSelected(e.target.value);
        valueChanged(e.target.value);
    }

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Vacuna</InputLabel>
        <Select defaultValue="" id="grouped-native-select" label="Grouping" onChange={handleChange}>
            <ListSubheader>Pendientes</ListSubheader>
                { pendingVaccines.map((vac, i) => (
                    <MenuItem key={i} value={vac}>{ vac.vaccine + " " + vac.dosis }</MenuItem>
                )) }
            <ListSubheader>Recibidas</ListSubheader>
                { givenVaccines.map((vac) => (
                    <MenuItem disabled value={vac}>{ vac.vaccine + " " + vac.dosis }</MenuItem>
                )) }
        </Select>
        </FormControl> 
    );
}