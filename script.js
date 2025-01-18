function handleCategory(category) {
    alert(`Fetching menu comparisons for ${category}...`);
    // Later, this will navigate to a dynamic page for each category.
}

// Email collection
document.getElementById("email-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    alert(`Thank you for subscribing with: ${email}`);
    // Later, send email to your database or API.
});
