const button = document.querySelector('button');
button.addEventListener('click', function(){
    create_goal();
});

/*
    function: create_goal()

    Summary: Creates an empty goal card. A goal card consists of a goal name,
    description, notes/accomplishments, a calendar for tracking, and a draggable button
    Inputs: none
    Outputs: none
*/
function create_goal () {
    // create goal card as div
    let goal_card = document.createElement("div");
    goal_card.setAttribute("class", "goal_card");

    // create header
    let goal_title = document.createElement("span");
    goal_title.setAttribute("id","goal_name");
    let name_input = prompt('What is your goal?');
    goal_title.append(name_input)

    // create notes form
    let goal_notes = document.createElement("form");
    goal_notes.setAttribute("id","goal_notes");
    let form_details = document.createElement("input");
    form_details.setAttribute("type","text","placeholder","Notes, accmoplishments");
    form_details.setAttribute("placeholder","Notes, accomplishments");
    goal_notes.appendChild(form_details);

    // create calendar
    let calendar = document.createElement("div");
    calendar.setAttribute("id","calendar");
    calendar.innerText = "Calendar goes here";

    // create drag indicator
    let drag_indicator = document.createElement("div");
    drag_indicator.setAttribute("class","drag_indicator");
    drag_indicator.innerText = "=="

    // add newly created elements to goal card
    goal_card.appendChild(goal_title);
    goal_card.appendChild(goal_notes);
    goal_card.appendChild(calendar);
    goal_card.appendChild(drag_indicator)

    // add goal card to goal carousel
    let goal_carousel = document.querySelector("#goal_carousel_container");
    goal_carousel.appendChild(goal_card);
}