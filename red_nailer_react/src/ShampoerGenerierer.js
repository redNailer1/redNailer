import React from "react";
import {Checkbox, FormControlLabel, Grid, MenuItem, Select, TextField, Button} from "@mui/material";

function MyForm() {
    const [name, setName] = React.useState("");
    const [effect, setEffect] = React.useState([]);
    const [duration, setDuration] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [manufacturer, setManufacturer] = React.useState([]);
    const [price, setPrice] = React.useState("");
    const [siliconeFree, setSiliconeFree] = React.useState(false);
    const [errors, setErrors] = React.useState({});

    const handleChange = (setFunction) => (e) => {
        setFunction(e.target.value);
    };

    const handleCheckboxChange = (setFunction) => (e) => {
        setFunction(e.target.checked);
    };

    const validateForm = () => {
        let errorsObj = {}

        if (!name) errorsObj['name'] = 'Pflichtfeld';
        if (!effect.length) errorsObj['effect'] = 'mindestens ein Effekt auswählen';
        if (!manufacturer.length) errorsObj['manufacturer'] = 'mindestens ein Hersteller auswählen';
        if (!price) errorsObj['price'] = 'Pflichtfeld';

        setErrors(errorsObj);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField 
                    label="Name" 
                    fullWidth 
                    value={name}
                    onChange={handleChange(setName)}
                    error={!!errors.name}
                    helperText={errors.name}
                    inputProps={{ "data-testid": "testid-name" }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Select
                    label="Effekt"
                    fullWidth
                    multiple
                    value={effect}
                    onChange={handleChange(setEffect)}
                    error={!!errors.effect}
                    helperText={errors.effect}
                    inputProps={{ "data-testid": "testid-effect" }}
                >
                    <MenuItem value="Volumen">Volumen</MenuItem>
                    <MenuItem value="Repair">Repair</MenuItem>
                    <MenuItem value="Glanz">Glanz</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField 
                    label="Einwirkzeit"
                    fullWidth 
                    value={duration}
                    onChange={handleChange(setDuration)}
                    type='number'
                    inputProps={{ "data-testid": "testid-duration" }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField 
                    label="Beschreibung"
                    fullWidth
                    value={description}
                    onChange={handleChange(setDescription)}
                    inputProps={{ "data-testid": "testid-description" }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Select
                    label="Hersteller"
                    fullWidth
                    value={manufacturer}
                    onChange={handleChange(setManufacturer)}
                    error={!!errors.manufacturer}
                    helperText={errors.manufacturer}
                    inputProps={{ "data-testid": "testid-manufacturer" }}
                >
                    <MenuItem value="Wella">Wella</MenuItem>
                    <MenuItem value="Schwarzkopf">Schwarzkopf</MenuItem>
                    <MenuItem value="Plantur">Plantur</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    label="Preis"
                    fullWidth
                    value={price}
                    onChange={handleChange(setPrice)}
                    type='number'
                    error={!!errors.price}
                    helperText={errors.price}
                    inputProps={{ "data-testid": "testid-price" }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControlLabel 
                    control={<Checkbox color="primary" checked={siliconeFree} onChange={handleCheckboxChange(setSiliconeFree)} inputProps={{ "data-testid": "testid-siliconeFree" }}/>}
                    label="Silikonfrei"
                />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={validateForm} style={{ marginRight: "10px" }}>Speichern</Button>
                <Button variant="contained">Abbrechen</Button>
            </Grid>
        </Grid>
    );
}

export default MyForm