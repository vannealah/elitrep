function scanIdentifier() {
    // Select all items in the list (assuming they're list items within a container)
    var items = document.querySelectorAll("#example-list li");

    // Iterate through each item
    items.forEach(function(item) {
        // Check if the item has the data-identifier attribute
        var identifier = item.getAttribute("data-identifier");
        
        if (identifier) {
            // Perform an action with the item having the identifier
            console.log("Found item with identifier:", identifier);
            // Additional actions can be performed here
        }
    });
}

// Example usage, call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    scanIdentifier();
});

// Example HTML structure
/*
<ul id="example-list">
    <li data-identifier="123">Item 1</li>
    <li>Item 2</li>
    <li data-identifier="456">Item 3</li>
</ul>
*/
