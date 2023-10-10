document.addEventListener("DOMContentLoaded", function() {
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
  
      // Remove the active class from all navbar items
      const navItems = document.querySelectorAll('.navbar a');
      navItems.forEach(item => {
        item.classList.remove('active');
      });
  
      // Add the active class to the clicked navbar item
      event.target.classList.add('active');
  
      // Hide all content sections
      const contents = document.querySelectorAll('.main-content, .project, .modal');
      contents.forEach(content => {
        content.style.display = 'none';
      });
  
      // Display the content section corresponding to the clicked tab
      const contentId = event.target.getAttribute('data-content');
      const targetContent = document.getElementById(contentId);
      if (targetContent) {
        targetContent.style.display = 'block';
      } else {
        console.error("Target content not found for:", contentId);
      }
    }
  
    const projectCard = document.getElementById('projectsContent');
    projectCard.addEventListener('click', function() {
      this.style.backgroundColor = this.style.backgroundColor === 'yellow' ? '#fff' : 'yellow';
    });
  
    // 2. mouseover and mouseout events for the project title
    const projectTitle = document.querySelector('#projectsContent h3');
    projectTitle.addEventListener('mouseover', function() {
      this.style.color = 'red';
    });
    projectTitle.addEventListener('mouseout', function() {
      this.style.color = 'black';
    });
  
    // 3. dblclick event for project details
    projectCard.addEventListener('dblclick', function() {
      const details = this.querySelector('ul');
      details.style.display = details.style.display === 'none' ? 'block' : 'none';
    });
  
    // 4. Adding an input field dynamically to the project card
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.placeholder = 'Comment on this project...';
    projectCard.appendChild(inputField);
  
    // focus and blur events for the input field
    inputField.addEventListener('focus', function() {
      console.log('You are now commenting on the project.');
    });
    inputField.addEventListener('blur', function() {
      console.log('You stopped commenting.');
    });
    // Attach event listeners to tabs
    const tabs = document.querySelectorAll('.navbar a');
    tabs.forEach(tab => {
      tab.addEventListener('click', handleTabClick);
    });
  
    // Attach event listener for Read More functionality (If it exists)
    document.querySelectorAll('.read-more').forEach(button => {
      button.addEventListener('click', function() {
        const moreText = button.previousElementSibling;
        if (moreText.style.display === 'none' || !moreText.style.display) {
          moreText.style.display = 'block';
          button.textContent = "Read Less";
        } else {
          moreText.style.display = 'none';
          button.textContent = "Read More";
        }
      });
    });
  
  });

