# 🌍 Mundo Cripto Analyser API V1

Mundo Cripto Analyser API is a backend service designed to analyze cryptocurrencies by their contract address.

## 🚀 Features
- Retrieve risk analysis reports for tokens
- Fast and reliable API responses
- Free to use

## 📌 Base URL
```
https://mundo-cripto-analyser-api.vercel.app/v1
```

## 📖 Endpoints
### 🔍 Get Token Report
**URL:**
```
GET /tokens/{contract_address}/report
```

**Description:**
Returns an analysis report for a given cryptocurrency contract address.

**Parameters:**
- `{contract_address}`: The contract address of the token to analyze.

**Example Request:**
```
GET https://mundo-cripto-analyser-api.vercel.app/v1/tokens/0x1234567890abcdef/report
```

**Expected Response:**
```json
{
  "token": "ExampleToken",
  "risk_score": 85,
  "details": "This token has a medium risk level."
  And +50 another informations
}
```

## 🛠 Technologies Used
- Node.js
- Express.js
- Axios
- Vercel (for deployment)

## 📜 License
This project is licensed under the MIT License.

---

This API as been developed by <a href="www.linkedin.com/in/lukasdesouza">Lukas De Souza</a>, with the help of RugCheck.



