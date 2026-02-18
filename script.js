function runAI(input) {
    // Assume some AI processing happens here to generate the summary
    let summary = generateSummary(input); // Placeholder for actual summary generation logic

    // Format the summary with HTML for better readability
    const formattedSummary = `
        <div style="white-space: pre-wrap; word-wrap: break-word;">
            ${summary}
        </div>
    `;

    // Display the formatted summary in the appropriate section of the webpage
    document.getElementById('summaryDisplay').innerHTML = formattedSummary;
}