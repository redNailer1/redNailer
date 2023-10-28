const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const manicures = [];

app.use(cors());
app.use(bodyParser.json());

app.post("/manicure", (req, res) => {
    const manicure = req.body;
    manicure.id = Math.random().toString(36).substr(2, 9);
    manicures.push(manicure);
    res.json(manicure);
});

app.get("/manicure", (req, res) => {
    res.json(manicures);
});

app.put("/manicure/:id", (req, res) => {
    const id = req.params.id;
    const manicure = req.body;
    const index = manicures.findIndex((m) => m.id === id);
    if (index >= 0) {
        manicures[index] = manicure;
        res.json(manicure);
    } else {
        res.status(404).send("Maniküre nicht gefunden");
    }
});

app.delete("/manicure/:id", (req, res) => {
    const id = req.params.id;
    const index = manicures.findIndex((m) => m.id === id);
    if (index >= 0) {
        manicures.splice(index, 1);
        res.json({ message: "Erfolgreich gelöschte Maniküre" });
    } else {
        res.status(404).send("Maniküre nicht gefunden");
    }
});

app.listen(8080, () => {
    console.log("Server gestartet auf Port 8080");
});


