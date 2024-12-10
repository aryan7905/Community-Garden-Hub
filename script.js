// Handle form submission
document.getElementById("queryForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from reloading the page

    const query = document.getElementById("queryInput").value.trim();

    if (query) {
        alert("Thank you for your query! We will get back to you soon.");
        document.getElementById("queryInput").value = ""; // Clear the input field
    } else {
        alert("Please enter a question before submitting."); // Show error
    }
});
