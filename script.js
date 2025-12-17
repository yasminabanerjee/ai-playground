async function runAI() {
  const input = document.getElementById("inputText").value;
  const outputDiv = document.getElementById("output");

  if (!input.trim()) {
    outputDiv.innerText = "Please enter some text first.";
    return;
  }

  outputDiv.innerText = "Thinking...";

  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inputs: input })
      }
    );

    const result = await response.json();

    if (result?.[0]?.summary_text) {
      outputDiv.innerText = result[0].summary_text;
    } else {
      outputDiv.innerText = "No output returned. Try different text.";
    }
  } catch (err) {
    outputDiv.innerText = "Error contacting AI service.";
    console.error(err);
  }
}
