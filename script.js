const spanEl = document.querySelector(".span");
const bgEl = document.querySelector(".Top-bg-cont");

bgEl.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";

    const size = Math.random()*100;

    spanEl.style.width = size + "px"
    spanEl.style.height = size + "px"

    bgEl.appendChild(spanEl);

    setTimeout(() => {
        spanEl.remove();
    }, 3000)
});