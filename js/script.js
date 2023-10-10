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
