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
        const modal = document.getElementById('apiData');
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

// Add these event listeners for the projects
document.getElementById('project1').addEventListener('mouseover', function() {
    this.style.backgroundColor = "#e0e0e0";
});

document.getElementById('project1').addEventListener('mouseout', function() {
    this.style.backgroundColor = "";
});

document.getElementById('project1').addEventListener('click', function() {
    const moreDetails = this.querySelector('.more');
    moreDetails.hidden = !moreDetails.hidden;
});

document.getElementById('project1').addEventListener('dblclick', function() {
    const moreDetails = this.querySelector('.more');
    moreDetails.hidden = true;
});

document.getElementById('project1').addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('Custom Context Menu for Project 1');
});

// Add more event listeners if you have more projects...
