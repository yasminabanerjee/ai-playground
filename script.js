const HF_TOKEN = "abcd";

async function runAI() {
  const text = document.getElementById("inputText").value;
  const output = document.getElementById("output");

  if (!text.trim()) {
    output.innerText = "Please enter some text first.";
    return;
  }

  output.innerText = "Summarizing...";

  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: text,
          parameters: {
            max_length: 150,
            min_length: 40,
            do_sample: false,
          },
        }),
      }
    );

    const result = await response.json();

    if (result[0]?.summary_text) {
      output.innerText = result[0].summary_text;
    } else if (result.error) {
      output.innerText = "Error: " + result.error;
    } else {
      output.innerText = "Something went wrong. Try again.";
    }
  } catch (err) {
    output.innerText = "Request failed: " + err.message;
  }
}
