// Selecting required elements
let i1 = document.querySelector("#i1");
let i2 = document.querySelector("#i2");
let i3 = document.querySelector("#i3");
let i4 = document.querySelector("#i4");
let i5 = document.querySelector("#i5");
let form = document.querySelector("form");
let textarea = document.querySelector("textarea");
let ul = document.querySelector("ul");

let selectedRating = null;

function resetIcons() {
    [i1, i2, i3, i4, i5].forEach((icon) => {
        icon.style.backgroundColor = "transparent"; 
    });
}


 let selectRating= (icon, ratingText) => {
    resetIcons(); 
    selectedRating = ratingText; 
    icon.style.backgroundColor = "wheat";
    
}


i1.addEventListener("click", () => selectRating(i1, "Sad"));
i2.addEventListener("click", () => selectRating(i2, "Unhappy"));
i3.addEventListener("click", () => selectRating(i3, "Avarage"));
i4.addEventListener("click", () => selectRating(i4, "Good"));
i5.addEventListener("click", () => selectRating(i5, "Excellent"));


 saveFeedback= (e) => {
    e.preventDefault(); // Prevent form default submission

    if (!selectedRating) {
        alert("Please select a rating before submitting!");
        return;
    }
    
    // if(selectRating(i1 , "sad")){
    //     ul.style.backgroundColor = "black"
    //     ul.style.color = "white"
    // }
    // else if(selectRating(i2, "Unhappy")){
    //     ul.style.backgroundColor = "rgb(164, 91, 40)"
    //     ul.style.color = "white"
    // }
    // else if(selectRating(i3, "Avarage")){
    //     ul.style.backgroundColor = "rgba(192, 90, 90, 0.826)"
    //     ul.style.color = "white"
    // }
    // else if(() => selectRating(i4, "Good")){
    //     ul.style.backgroundColor = "rgba(0, 128, 0, 0.535)"
    // }
    // else if(selectRating(i5, "Excellent")){
    //     ul.style.backgroundColor = "rgba(9, 181, 9, 0.718)"

    // }

    

    // Create a new list item
    let li = document.createElement("li");

    // Add rating to the list item
    let h2 = document.createElement("h2");
    h2.innerText = `Rating: ${selectedRating}`;
    li.appendChild(h2);
   


    // Add review to the list item
    if (textarea.value.trim() !== "") {
        let p = document.createElement("p");
        p.innerText = `Review: ${textarea.value}`;
        li.appendChild(p);
    }
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn"); // Add CSS class if required

    // Add delete button functionality
    deleteBtn.addEventListener("click", () => {
        ul.removeChild(li); // Remove the current list item
    });

    li.appendChild(deleteBtn);

    
    ul.appendChild(li);
   

   
    form.reset(); 
    resetIcons(); 
    selectedRating = null;
}

form.addEventListener("submit", saveFeedback);
