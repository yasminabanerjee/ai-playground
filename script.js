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
    const result = await window.summarizer(input, {
      max_length: 150,
      min_length: 30,
    });
    
    // Format the output with proper line breaks and styling
    const summaryText = result[0].summary_text;
    outputDiv.innerHTML = `<p style=\"word-wrap: break-word; white-space: normal; line-height: 1.6;\">${summaryText}</p>`;
    console.log("Full summary:", summaryText);
  } catch (err) {
    outputDiv.innerText = "Error running AI model.";
    console.error("Error details:", err);
  }
}