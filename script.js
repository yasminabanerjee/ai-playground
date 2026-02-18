async function runAI() {
    try {
        // Call your summarization function here, assuming it's defined elsewhere
        const summary_text = await summarizer();

        // Display summary in the output div
        const outputDiv = document.getElementById('output');

        // Clear previous content
        outputDiv.innerHTML = '';

        // Use preformatted text for better readability
        const pre = document.createElement('pre');
        pre.textContent = summary_text;
        outputDiv.appendChild(pre);
    } catch (error) {
        // Handle error gracefully
        console.error('Error occurred while summarizing:', error);
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = '<p>An error occurred while generating the summary. Please try again later.</p>';
    }
}