import React from "react";
import {Checkbox, FormControlLabel, Grid, MenuItem, Select, TextField, Button} from "@mui/material";

function MyForm() {
    const [name, setName] = React.useState("");
    const [effekt, setEffekt] = React.useState([]);
    const [einwirkzeit, setEinwirkzeit] = React.useState("");
    const [beschreibung, setBeschreibung] = React.useState("");
    const [hersteller, setHersteller] = React.useState("");
    const [preis, setPreis] = React.useState(0.0);
    const [silikonfrei, setSilikonfrei] = React.useState(false);
    const [errors, setErrors] = React.useState({});
    
    const handleChange = (setFunction) => (e) => {
        setFunction(e.target.value);
    };
    
    const handleCheckboxChange = (setFunction) => (e) => {
        setFunction(e.target.checked);
    };
    
    const validateForm = () => {
        let errorsObj = {};
        
        if (!name) errorsObj['name'] = 'Pflichtfeld';
        if (!effekt.length) errorsObj['effekt'] = 'mindestens ein Effekt auswählen';
        if (!preis) errorsObj['preis'] = 'Pflichtfeld';
        if (!hersteller) errorsObj['hersteller'] = 'Pflichtfeld';
        
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
                    inputProps={{ "data-testid": "test-name" }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Select
                    label="Effekt"
                    fullWidth
                    multiple
                    value={effekt}
                    onChange={handleChange(setEffekt)}
                    error={!!errors.effekt}
                    helperText={errors.effekt}
                    inputProps={{ "data-testid": "test-effekt" }}
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
                    value={einwirkzeit}
                    onChange={handleChange(setEinwirkzeit)}
                    type='number'
                    inputProps={{ "data-testid": "test-einwirkzeit" }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    label="Beschreibung"
                    fullWidth
                    value={beschreibung}
                    onChange={handleChange(setBeschreibung)}
                    inputProps={{ "data-testid": "test-beschreibung" }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Select
                    label="Hersteller"
                    fullWidth
                    value={hersteller}
                    onChange={handleChange(setHersteller)}
                    error={!!errors.hersteller}
                    helperText={errors.hersteller}
                    inputProps={{ "data-testid": "test-hersteller" }}
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
                    value={preis}
                    onChange={handleChange(setPreis)}
                    type='number'
                    error={!!errors.preis}
                    helperText={errors.preis}
                    inputProps={{ "data-testid": "test-preis" }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControlLabel
                    control={<Checkbox color="primary" checked={silikonfrei} onChange={handleCheckboxChange(setSilikonfrei)} />}
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