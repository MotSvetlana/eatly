// Section - Frequently Asked Questions
const rows = Array.from(document.querySelectorAll('.questions__row'));
const answers = Array.from(document.querySelectorAll('.questions__answer'));

rows.forEach((el) => {
    el.addEventListener('click', (e) => {
        el.classList.toggle('active');
        
        let content = el.nextElementSibling;

        content.classList.toggle('active');

        })
})
