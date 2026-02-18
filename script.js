// Improved output formatting and handling for summarization

function displaySummary(summary) {
    // Create a container for the summary
    const summaryContainer = document.getElementById('summary');

    // Clear existing content
    summaryContainer.innerHTML = '';

    // Create a new paragraph for the summary
    const summaryParagraph = document.createElement('p');
    summaryParagraph.innerHTML = summary;
    summaryParagraph.style.whiteSpace = 'pre-wrap'; // This allows better text wrapping

    // Append the new summary to the container
    summaryContainer.appendChild(summaryParagraph);
}

// Usage example:
// displaySummary('This is an example summary that demonstrates improved formatting and handling.');