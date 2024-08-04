const button = document.querySelector('button');
button.addEventListener('click', function(){
    let userInput = prompt('what do you want to display here?')
    document.getElementById('goal_name').innerText = userInput;
});

const draggables = document.querySelectorAll(".goal_item");
const droppables = document.querySelectorAll("goal_carousel_container")