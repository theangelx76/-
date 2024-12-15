// Initial state
let toggleState = true;

// Select the button and message elements
const button = document.getElementById('toggleButton');
const message = document.getElementById('message');

// Add an event listener for the button
button.addEventListener('click', () => {
    if (toggleState) {
        // Function 1: First action
        message.textContent = 'تم تفعيل الكبراته!';
        button.textContent = 'اطفاء';
    } else {
        // Function 2: Second action
        message.textContent = 'تم اطفاء الكبراته';
        button.textContent = 'تشغيل';
    }
    // Toggle the state
    toggleState = !toggleState;
});
