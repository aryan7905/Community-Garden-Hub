// Add event listener to the form
document.getElementById("queryForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from reloading the page

    // Get the value from the query input
    const query = document.getElementById("queryInput").value.trim();

    if (query) {
        // Simulate query submission
        alert("Thank you for your query! We will get back to you soon.");

        // Clear the input field after submission
        document.getElementById("queryInput").value = "";
    } else {
        // Show error if the input is empty
        alert("Please enter a question before submitting.");
    }
});
