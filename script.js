// script.js
const subjects = [
    "Accounting (9706)",
    "Biology (9700)",
    "Business (9609)",
    "Chemistry (9701)",
    "Computer Science (9618)",
    "Economics (9708)",
    "English Language (9093)",
    "Mathematics (9709)",
    "Further Mathematics (9231)",
    "Media Studies (9607)",
    "Physics (9702)",
    "Psychology (9990)"
];

//Sort names in ascending order
let subjects_list = subjects.sort();
//reference
let input = document.getElementById("input");
//Execute function on keyup
input.addEventListener("keyup", (e) => {
    //loop through above array
    //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
    removeElements();
    for (let i of subjects_list) {
        //convert input to lowercase and compare with each string
        if (
            i.toLowerCase().startsWith(input.value.toLowerCase()) &&
            input.value != ""
        ) {
            //create li element
            let listItem = document.createElement("li");
            //One common class name
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames('" + i + "')");
            //Display matched part in bold
            let word = "<b>" + i.substr(0, input.value.length) + "</b>";
            word += i.substr(input.value.length);

            console.log(i);

            //display the value in array
            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);
            document.querySelector(".list").style.padding = "6px";
            document.querySelector(".footer").style.top = "-60px";
            document.querySelector(".footer").style.marginBottom = "0";
        }
    }
});
function displayNames(value) {
    input.value = value;
    document.querySelector("#heading").innerHTML = "AS/AL Resources for "+value;
    document.querySelector(".input").classList.add("hide");
    document.querySelector(".refresh").style.display = "block";
    document.querySelector("."+value.toLowerCase().substr(0,3)+"-res").classList.remove("hide");
    document.querySelector(".search-box").style.marginBottom = "0";

    document.querySelector(".footer").style.top = "10rem";
    document.querySelector(".footer").style.marginBottom = "7rem";
    removeElements();
    document.querySelector(".list").style.padding = "0px";
}
function removeElements() {
    //clear all the item
    document.querySelector(".footer").style.top = "105px";
    document.querySelector(".footer").style.marginBottom
    document.querySelector(".list").style.padding = "0px";
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
        item.remove();
    });
}