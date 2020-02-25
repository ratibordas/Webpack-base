export default


function animationText() {
    const Text = document.querySelector(".secondtext");

    Text.classList.add("t");
    Text.classList.add("text");
    
}

let timeRid = setInterval(() => animationText(), 3000);

