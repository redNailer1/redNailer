const {Builder, By, Key, until} = require('selenium-webdriver');

const color = 'Rot';
const duration = 40;
const description = 'Dies ist eine sehr lange Beschreibungstext und sollte mehr als zehn Zeichen umfassen und damit zu lang sein';
const manufacturer = ['Essie', 'OPI'];
const price = 9.99;
const hemafrei = true;

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000/');

        const colorField = await driver.findElement(By.css('[data-testid="testid-Farbe"]'));
        const durationField = await driver.findElement(By.css('[data-testid="testid-Dauer der Maniküre"]'));
        const descriptionField = await driver.findElement(By.css('[data-testid="testid-Beschreibung"]'));
        const manufacturerField = await driver.findElement(By.css('[data-testid="testid-Hersteller"]'));
        const priceField = await driver.findElement(By.css('[data-testid="testid-Preis"]'));
        const hemafreiField = await driver.findElement(By.css('[data-testid="testid-hemafrei"]'));

        await colorField.click();
        await colorField.sendKeys(color);

        await durationField.sendKeys(duration);

        await descriptionField.sendKeys(description);

        for(let m of manufacturer){
            await manufacturerField.click();
            await manufacturerField.sendKeys(m);
        }

        await priceField.sendKeys(price);

        if(hemafrei){
            await hemafreiField.click();
        }

        const saveButton = await driver.findElement(By.css('[data-testid="testid-Speichern"]'));
        await saveButton.click();

        const errorFields = ["Farbe", "Beschreibung", "Preis"];
        for(let error of errorFields){
            const errorField = await driver.findElement(By.css(`[data-testid="testid-${error}"]`));
            const errorClass = await errorField.getAttribute('class');
            if (!errorClass.includes('Mui-error')) {
                console.error('Test failed: field validation did not trigger');
            }
        }

    } finally {
        await driver.quit();
    }
})();
