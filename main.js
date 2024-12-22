const toggleButton = document.getElementById('btn');
const contentDiv = document.getElementById('content');

btn.addEventListener('click', () => {
    if (contentDiv.classList.contains('hidden')) {
        contentDiv.classList.remove('hidden'); 
        btn.textContent = 'Hide Courses'; 
    } else {
        contentDiv.classList.add('hidden');
        btn.textContent = 'View All Courses';
    }
});