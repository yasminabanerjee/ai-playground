exports.handler = async function (event) {
  const { text } = JSON.parse(event.body);

  const response = await fetch(
    "https://router.huggingface.co/hf-inference/models/facebook/bart-large-cnn",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_TOKEN}`,
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

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};
