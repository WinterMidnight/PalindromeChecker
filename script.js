document.getElementById('check-btn').addEventListener('click', function() {
    const input = document.getElementById('text-input').value;

    if (!input) {
        alert('Please input a value.'); // Alert if input is empty
        return;
    }

    const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');

    // Update result based on palindrome check
    if (isPalindrome) {
        document.getElementById('result').textContent = `${input} is a palindrome.`;
    } else {
        document.getElementById('result').textContent = `${input} is not a palindrome.`;
    }
});
