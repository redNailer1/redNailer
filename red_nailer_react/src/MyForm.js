import React from "react";
import { Button, Checkbox, FormControl, FormControlLabel, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";

function MyForm() {
    const [farbe, setFarbe] = React.useState("Rot");
    const [dauerDerManikuere, setDauerDerManikuere] = React.useState("");
    const [beschreibung, setBeschreibung] = React.useState("");
    const [hersteller, setHersteller] = React.useState(["Essie"]);
    const [preis, setPreis] = React.useState("");
    const [hemafrei, setHemafrei] = React.useState(false);
    const [errors, setErrors] = React.useState({});

    const handleChange = (event, setter) => {
        setter(event.target.value);
    };

    const validateForm = () => {
        let errors = {};
        if(!farbe) errors.farbe = "Farbe ist erforderlich.";
        if(beschreibung.length > 10) errors.beschreibung = "Beschreibung darf nicht länger als 10 Zeichen sein.";
        if(!hersteller.length) errors.hersteller = "Mindestens ein Hersteller muss ausgewählt sein.";
        if(!preis) errors.preis = "Preis ist erforderlich.";
        setErrors(errors);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                    <InputLabel>Farbe</InputLabel>
                    <Select value={farbe} onChange={(e) => handleChange(e, setFarbe)} error={!!errors.farbe}>
                        <MenuItem value="Rot">Rot</MenuItem>
                        <MenuItem value="Gelb">Gelb</MenuItem>
                        <MenuItem value="Blau">Blau</MenuItem>
                    </Select>
                    {errors.farbe && <FormHelperText>{errors.farbe}</FormHelperText>}
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label="Dauer der Maniküre" fullWidth value={dauerDerManikuere} onChange={(e) => handleChange(e, setDauerDerManikuere)}/>
            </Grid>
            <Grid item xs={12}>
                <TextField label="Beschreibung" fullWidth value={beschreibung} onChange={(e) => handleChange(e, setBeschreibung)} error={!!errors.beschreibung} helperText={errors.beschreibung}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                    <InputLabel>Hersteller</InputLabel>
                    <Select multiple value={hersteller} onChange={(e) => handleChange(e, setHersteller)} error={!!errors.hersteller}>
                        <MenuItem value="Essie">Essie</MenuItem>
                        <MenuItem value="OPI">OPI</MenuItem>
                        <MenuItem value="Catrice">Catrice</MenuItem>
                    </Select>
                    {errors.hersteller && <FormHelperText>{errors.hersteller}</FormHelperText>}
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label="Preis" fullWidth value={preis} onChange={(e) => handleChange(e, setPreis)} error={!!errors.preis} helperText={errors.preis}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControlLabel control={<Checkbox color="primary" checked={hemafrei} onChange={(e) => handleChange(e, setHemafrei)}/>} label="Hemafrei"/>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={validateForm}>Speichern</Button>
                <Button style={{marginLeft: "10px"}} variant="contained">Abbrechen</Button>
            </Grid>
        </Grid>
    );
}

export default MyForm