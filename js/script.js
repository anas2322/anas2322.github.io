document.getElementById('fetchApiData').addEventListener('click', function() {
    fetch("http://35.188.215.226:8000/my_program", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "name=Anas&program=cs"
    })
    .then(response => response.json())
    .then(data => {
        const modal = document.getElementById('apiDataContent');
        const span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        modal.querySelector('p').innerHTML = JSON.stringify(data);

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    });
});

function handleTabClick(event) {
    event.preventDefault();

    // Hide all content sections
    const contents = document.querySelectorAll('.main-content, .projects, .modal');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // Display the content section corresponding to the clicked tab
    const contentId = event.target.getAttribute('data-content');
    document.getElementById(contentId).style.display = 'block';
}

// Attach event listeners to tabs
const tabs = document.querySelectorAll('.navbar a');
tabs.forEach(tab => {
    tab.addEventListener('click', handleTabClick);
});
