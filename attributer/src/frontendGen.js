const {OpenAIClient, AzureKeyCredential} = require("@azure/openai");
const fs = require('fs');
const example = "import React from \"react\";\n" +
    "import {Checkbox, FormControlLabel, Grid, MenuItem, Select, TextField, Button} from \"@mui/material\";\n" +
    "\n" +
    "function MyForm() {\n" +
    "    const [farbe, setFarbe] = React.useState(\"Rot\");\n" +
    "    const [hersteller, setHersteller] = React.useState([]);\n" +
    "    const [dauerDerManiküre, setDauerDerManiküre] = React.useState(\"\");\n" +
    "    const [beschreibung, setBeschreibung] = React.useState(\"\");\n" +
    "    const [preis, setPreis] = React.useState(0.0);\n" +
    "    const [hemafrei, setHemafrei] = React.useState(false);\n" +
    "    const [errors, setErrors] = React.useState({});\n" +
    "\n" +
    "    const handleChange = (setFunction) => (e) => {\n" +
    "        setFunction(e.target.value);\n" +
    "    };\n" +
    "\n" +
    "    const handleCheckboxChange = (setFunction) => (e) => {\n" +
    "        setFunction(e.target.checked);\n" +
    "    };\n" +
    "\n" +
    "    const validateForm = () => {\n" +
    "        let errorsObj = {}\n" +
    "\n" +
    "        if (!farbe) errorsObj['farbe'] = 'Pflichtfeld'\n" +
    "        if (!hersteller.length) errorsObj['hersteller'] = 'mindestens ein Hersteller auswählen'\n" +
    "        if (beschreibung.length > 10) errorsObj['beschreibung'] = 'maximale Länge: 10'\n" +
    "        if (!preis) errorsObj['preis'] = 'Pflichtfeld'\n" +
    "\n" +
    "        setErrors(errorsObj);\n" +
    "    };\n" +
    "\n" +
    "    return (\n" +
    "        <Grid container spacing={2}>\n" +
    "            <Grid item xs={12} sm={6}>\n" +
    "                <TextField \n" +
    "                    label=\"Farbe\" \n" +
    "                    fullWidth \n" +
    "                    select\n" +
    "                    value={farbe}\n" +
    "                    onChange={handleChange(setFarbe)}\n" +
    "                    error={!!errors.farbe}\n" +
    "                    helperText={errors.farbe}\n" +
    "                >\n" +
    "                    <MenuItem value=\"Rot\">Rot</MenuItem>\n" +
    "                    <MenuItem value=\"Gelb\">Gelb</MenuItem>\n" +
    "                    <MenuItem value=\"Blau\">Blau</MenuItem>\n" +
    "                </TextField>\n" +
    "            </Grid>\n" +
    "            <Grid item xs={12} sm={6}>\n" +
    "                <TextField \n" +
    "                    label=\"Dauer der Maniküre\"\n" +
    "                    fullWidth \n" +
    "                    value={dauerDerManiküre}\n" +
    "                    onChange={handleChange(setDauerDerManiküre)}\n" +
    "                    type='number'\n" +
    "                />\n" +
    "            </Grid>\n" +
    "            <Grid item xs={12} sm={6}>\n" +
    "                <TextField \n" +
    "                    label=\"Beschreibung\"\n" +
    "                    fullWidth\n" +
    "                    value={beschreibung}\n" +
    "                    onChange={handleChange(setBeschreibung)}\n" +
    "                    error={!!errors.beschreibung}\n" +
    "                    helperText={errors.beschreibung}\n" +
    "                />\n" +
    "            </Grid>\n" +
    "            <Grid item xs={12} sm={6}>\n" +
    "                <Select\n" +
    "                    label=\"Hersteller\"\n" +
    "                    fullWidth\n" +
    "                    multiple\n" +
    "                    value={hersteller}\n" +
    "                    onChange={handleChange(setHersteller)}\n" +
    "                    error={!!errors.hersteller}\n" +
    "                    helperText={errors.hersteller}\n" +
    "                >\n" +
    "                    <MenuItem value=\"Essie\">Essie</MenuItem>\n" +
    "                    <MenuItem value=\"OPI\">OPI</MenuItem>\n" +
    "                    <MenuItem value=\"Catrice\">Catrice</MenuItem>\n" +
    "                </Select>\n" +
    "            </Grid>\n" +
    "            <Grid item xs={12} sm={6}>\n" +
    "                <TextField\n" +
    "                    label=\"Preis\"\n" +
    "                    fullWidth\n" +
    "                    value={preis}\n" +
    "                    onChange={handleChange(setPreis)}\n" +
    "                    type='number'\n" +
    "                    error={!!errors.preis}\n" +
    "                    helperText={errors.preis}\n" +
    "                />\n" +
    "            </Grid>\n" +
    "            <Grid item xs={12} sm={6}>\n" +
    "                <FormControlLabel \n" +
    "                    control={<Checkbox color=\"primary\" checked={hemafrei} onChange={handleCheckboxChange(setHemafrei)}/>} \n" +
    "                    label=\"Hemafrei\"\n" +
    "                />\n" +
    "            </Grid>\n" +
    "            <Grid item xs={12}>\n" +
    "                <Button variant=\"contained\" color=\"primary\" onClick={validateForm} style={{ marginRight: \"10px\" }}>Speichern</Button>\n" +
    "                <Button variant=\"contained\">Abbrechen</Button>\n" +
    "            </Grid>\n" +
    "        </Grid>\n" +
    "    );\n" +
    "}\n" +
    "\n" +
    "export default MyForm";


const endpoint = process.env["AZURE_OPENAI_ENDPOINT"];
const azureApiKey = process.env["AZURE_OPENAI_KEY"];

const jsonFile = require("../static/nagellacker.json");

const messages = [
    {role: "system", content: "Du heiß Amperion:er und bist in der Lage, die Form-Components in React zu generieren"},
    {
        role: "user",
        content: `Kannst du aus folgender JSON-Beschreibung die statische Form React Komponente generieren: ${JSON.stringify(jsonFile)}.
        Nutze als Vorlage ${JSON.stringify(example)}.
        Nutze inline styling.
        Bitte hinzufüge 'Speichern' und 'Abbrechen' Buttons. Beim Klicken auf 'Speichern' validiere die Form gegen die angegeben Regeln.
        Bitte spare dir deine Kommentare und gebe nur Code aus.
        Schreibe einen Gedicht zum Thema`
    }
];

async function main() {
    const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
    const deploymentId = "gpt-4";

    console.log("Amperion:er on duty: ");

    const result = await client.getChatCompletions(deploymentId, messages);
    const content = result.choices[0].message.content;

    const indexOfFirstSeparator = content.indexOf("import");
    const indexOfSecondSeparator = content.lastIndexOf(";");

    const code = content.substring(indexOfFirstSeparator, indexOfSecondSeparator);

    fs.writeFile('../../red_nailer_react/src/MyForm.js', code, function (err) {
        if (err) throw err;
        console.log('File saved!');
    });

    console.log("Amperion:er done");
}

main().catch((err) => {
    console.error("The sample encountered an error:", err);
});

module.exports = {main};