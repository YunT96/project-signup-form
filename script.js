document.addEventListener('DOMContentLoaded', function() {
    console.log("Script Loaded");

    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            this.classList.add('touched');
        });

        input.addEventListener('focus', function() {
            this.classList.remove('touched');
        });
    });
});