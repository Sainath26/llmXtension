const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const cors = require("cors");
const { GOOGLE_API_KEY } = require("./apikey");
const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");

app.use(bodyParser.json());
app.use(
  cors({
    origin: true,
  })
);

app.post("/llmx", (req, res) => {
  const receivedData = req.body;
  console.log("line 19");
  console.log(receivedData);
  var data = JSON.stringify(receivedData);
  getAiResponse(data).then((response) => {
    res.status(200).json({ message: response });
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

async function getAiResponse(data) {
  const llm = new ChatGoogleGenerativeAI({
    apiKey: GOOGLE_API_KEY,
    model: "gemini-1.5-flash",
    temperature: 0,
    maxRetries: 2,
  });
  const aiMsg = await llm.invoke([
    [
      "system",
      'You are a helpful tutor who clears doubts in clear consise way. Add "?" where ever applicable',
    ],
    ["human", data],
  ]);

  return aiMsg.content;
}
