
function scanText() {
    const input = document.getElementById("inputText").value.toLowerCase();
    const resultDiv = document.getElementById("result");

    const scamWords = ["verify", "congratulations", "urgent", "lottery", "click here", "limited time", "you won", "login now", "update your account"];
    const scamLinks = ["bit.ly", "tinyurl", ".xyz", ".ru", ".tk", "paypal-fake.com", "bank-fraud.com"];

    let danger = false;

    for (let word of scamWords) {
        if (input.includes(word)) {
            danger = true;
            break;
        }
    }

    for (let link of scamLinks) {
        if (input.includes(link)) {
            danger = true;
            break;
        }
    }

    if (danger) {
        resultDiv.innerHTML = "⚠️ Warning: This might be a scam!";
        resultDiv.style.color = "red";
    } else {
        resultDiv.innerHTML = "✅ Looks safe. But stay alert!";
        resultDiv.style.color = "green";
    }
}
