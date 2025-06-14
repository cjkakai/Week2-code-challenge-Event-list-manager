const form = document.getElementById('guest-form');
const guestInput = document.getElementById('guest-name');
const guestList = document.getElementById('guest-list')
let guestCount =0;
const maxGuest = 10;

//stop form from submitting the normal way
form.addEventListener('submit',function(e){
e.preventDefault();

//get the trimmed name from the input
const name = guestInput.value.trim();

//prevent empty name or if guest limit is reached
if (name === "")return;
if(guestCount >= maxGuest){
    alert("Guest limit reached")
    return;
}

//create a new list with guest name
const li = document.createElement('li');
li.innerHTML = 
`<span class="guest-name">${name}</span>
<button class="toggle-rsvp">Attending<button/>
<button class="remove">Remove<button/>
<button class="edit">Edit</button>
`;
guestList.appendChild(li);
guestCount++;
guestInput.value = ""

//remove function for each guest
 li.querySelector(".remove").addEventListener("click", () => {
    li.remove();
    guestCount--;
  })

  //toggle function
  li.querySelector(".toggle-rsvp").addEventListener("click", (e) => {
    e.target.textContent =
      e.target.textContent === "Attending" ? "Not Attending" : "Attending";})

 //edit function
    li.querySelector(".edit").addEventListener("click", () =>
    {
     const newName = prompt("Update guest name:, name");   
     if (newName) li.querySelector(".guest-name").textContent = newName;
    })
})