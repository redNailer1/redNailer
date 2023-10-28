const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

let options = new chrome.Options();
options.addArguments('start-maximized');
options.addArguments('disable-infobars');
options.addArguments('--disable-extensions');

let driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();

async function testFormValidation() {
    try {
        await driver.get('http://localhost:3000');

        // Testdaten
        let testData = [
            { farbe: 'Rot', dauerDerManiküre: 40, beschreibung: 'Dies ist eine sehr lange Beschreibungstext und sollte mehr als zehn Zeichen umfassen und damit zu lang sein', hersteller: ["Essie", "OPI"], preis: 9.99, hemafrei: true },
            { farbe: 'Grün', dauerDerManiküre: 40, beschreibung: 'Kurze Beschreibung', hersteller: ["Essie", "OPI"], preis: 9.99, hemafrei: true },
            { farbe: 'Rot', dauerDerManiküre: 40, beschreibung: 'Kurze Beschreibung', hersteller: ["Essie", "OPI"], preis: null, hemafrei: true },
            { farbe: 'Rot', dauerDerManiküre: 40, beschreibung: 'Kurze Beschreibung', hersteller: ["Essie", "OPI"], preis: 'kein Preis', hemafrei: true },
            { farbe: null, dauerDerManiküre: 40, beschreibung: 'Kurze Beschreibung', hersteller: ["Essie", "OPI"], preis: 9.99, hemafrei: true }
        ];

        for (let data of testData) {
            // Formular ausfüllen
            await driver.findElement(By.css('[data-testid="testid-Farbe"]')).sendKeys(data.farbe);
            await driver.findElement(By.css('[data-testid="testid-Dauer der Maniküre"]')).sendKeys(data.dauerDerManiküre);
            await driver.findElement(By.css('[data-testid="testid-Beschreibung"]')).sendKeys(data.beschreibung);
            await driver.findElement(By.css('[data-testid="testid-Hersteller"]')).sendKeys(data.hersteller);
            await driver.findElement(By.css('[data-testid="testid-Preis"]')).sendKeys(data.preis);
            await driver.findElement(By.css('[data-testid="testid-hemafrei"]')).click();

            // Speichern-CTA betätigen
            await driver.findElement(By.css('[data-testid="testid-Speichern"]')).click();

            // Überprüfen, ob das Speichern nicht erfolgreich war
            let errorMessage = await driver.findElement(By.css('.error-message')).getText();
            assert(errorMessage.length > 0, 'Speichern war erfolgreich, obwohl es fehlschlagen sollte');

            // Überprüfen, ob das Eingabefeld als Fehler markiert ist
            let errorFields = await driver.findElements(By.css('.error-field'));
            assert(errorFields.length > 0, 'Es wurden keine Fehlerfelder markiert');
        }
    } finally {
        await driver.quit();
    }
}

testFormValidation()