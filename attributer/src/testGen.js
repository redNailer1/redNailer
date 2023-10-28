const {OpenAIClient, AzureKeyCredential} = require("@azure/openai");
const fs = require('fs');

const endpoint = process.env["AZURE_OPENAI_ENDPOINT"];
const azureApiKey = process.env["AZURE_OPENAI_KEY"];


const url = "localhost:3000"

async function main() {
    const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
    const deploymentId = "gpt-4";

    console.log("Test:er on duty: ");

    try {
        const data = fs.readFileSync('../../features/nagellacker.feature', 'utf8');
        const code = fs.readFileSync("../../red_nailer_react/src/NagellackerGenerierer.js", 'utf8');
        const messages = [
            {role: "system", content: "Du heißt Test:er und bist in der Lage, die Selenium Tests zu schreiben"},
            {
                role: "user",
                content: `Kannst du einen simplen Code produzieren, der Selenium Tests in JavaScript mit ChromeDriver für die Seite unter ${url} erstellt.
                Nutze dafür das Szenario ${data} und suche Elemente nach den Data Test aus dem JavaScript Code ${code}`
            }
        ];
        const result = await client.getChatCompletions(deploymentId, messages);
        const content = result.choices[0].message.content;

        console.log(content);
    } catch(e) {
        console.log('Error:', e.stack);
    }


    console.log("Test:er done");
}

main().catch((err) => {
    console.error("The sample encountered an error:", err);
});

module.exports = {main};