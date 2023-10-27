const {OpenAIClient, AzureKeyCredential} = require("@azure/openai");
const fs = require('fs');
const example = "import React from \"react\";\n" +
    "import {Checkbox, FormControlLabel, Grid, MenuItem, Select, TextField} from \"@mui/material\";\n" +
    "\n" +
    "\n" +
    "function MyForm() {\n" +
    "    const [selectedHersteller, setSelectedHersteller] = React.useState([]);\n" +
    "\n" +
    "    const handleChange = (e) => {\n" +
    "        setSelectedHersteller(e.target.value);\n" +
    "    };\n" +
    "\n" +
    "    return (\n" +
    "        <Grid container spacing={2}>\n" +
    "            <Grid item xs={12} sm={6}>\n" +
    "                <TextField label=\"Dauer der Maniküre\" fullWidth name='dauerDerManikuere'/>\n" +
    "            </Grid>\n" +
    "            <Grid item xs={12} sm={6}>\n" +
    "                <TextField label=\"Beschreibung\" fullWidth name='beschreibung'/>\n" +
    "            </Grid>\n" +
    "            <Grid item xs={12} sm={6}>\n" +
    "                <Select\n" +
    "                    label=\"Farbe\"\n" +
    "                    value={\"Rot\"}\n" +
    "                    fullWidth\n" +
    "                    variant=\"outlined\"\n" +
    "                >\n" +
    "                    <MenuItem value={\"Rot\"}>Rot</MenuItem>\n" +
    "                    <MenuItem value={\"Gelb\"}>Gelb</MenuItem>\n" +
    "                    <MenuItem value={\"Blau\"}>Blau</MenuItem>\n" +
    "                </Select>\n" +
    "            </Grid>\n" +
    "            <Grid item xs={12} sm={6}>\n" +
    "                <Select\n" +
    "                    label=\"Hersteller\"\n" +
    "                    fullWidth\n" +
    "                    variant=\"outlined\"\n" +
    "                    multiple\n" +
    "                    value={selectedHersteller}\n" +
    "                    onChange={handleChange}\n" +
    "                >\n" +
    "                    <MenuItem value={\"Essie\"}>Essie</MenuItem>\n" +
    "                    <MenuItem value={\"OPI\"}>OPI</MenuItem>\n" +
    "                    <MenuItem value={\"Catrice\"}>Catrice</MenuItem>\n" +
    "                </Select>\n" +
    "            </Grid>\n" +
    "            <Grid item xs={12} sm={6}>\n" +
    "                <TextField label=\"Preis\" fullWidth name='preis'/>\n" +
    "            </Grid>\n" +
    "            <Grid item xs={12} sm={6}>\n" +
    "                <FormControlLabel\n" +
    "                    control={<Checkbox color=\"primary\" name='hemafrei'/>}\n" +
    "                    label=\"hemafrei\"\n" +
    "                />\n" +
    "            </Grid>\n" +
    "        </Grid>\n" +
    "    );\n" +
    "}\n" +
    "\n" +
    "export default MyForm;"


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
        Bitte spare dir deine Kommentare und gebe nur Code aus.`
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