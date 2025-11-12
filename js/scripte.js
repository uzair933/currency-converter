const input = document.getElementById("input");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convertButton = document.getElementById("convertButton");
const resultDiv = document.getElementById("result");

const fetchi = function (from, to, amount) {
    fetch(`https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            const rate = data.rates[to];
            const convertedAmount = (rate * amount).toFixed(2);
            resultDiv.innerHTML = `${amount} ${from} = ${convertedAmount} ${to}`;
        });
}

convertButton.addEventListener("click", function () {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amount = parseFloat(input.value);
    console.log(from, to, amount);
    console.log(typeof from);
    if (isNaN(amount) || amount <= 0) {
        resultDiv.innerHTML = "Please enter a valid amount.";
        return;
    }
    fetchi(from, to, amount);
});