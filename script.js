async function runAI() {
  const input = document.getElementById("inputText").value;
  const outputDiv = document.getElementById("output");

  if (!input.trim()) {
    outputDiv.innerText = "Please enter some text first.";
    return;
  }

  if (!window.summarizer) {
    outputDiv.innerText = "Model is still loading... please wait a moment.";
    return;
  }

  outputDiv.innerText = "Summarizing...";

  try {
    const result = await window.summarizer(input);
    outputDiv.innerText = result[0].summary_text;
  } catch (err) {
    outputDiv.innerText = "Error running AI model.";
    console.error(err);
  }
}
