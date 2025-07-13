const dropdown_container = document.querySelector(".dropdown_container");
const dropdown_title = document.querySelector(".dropdown_title");
const arrow = dropdown_title.lastElementChild;
let rotation = 180;
arrow.style.transform = `rotate(${rotation}deg)`;

let state = "closed";
dropdown_title.addEventListener("click", () => {
    rotation = rotation === 180 ? 0 : 180;
    arrow.style.transform = `rotate(${rotation}deg)`;
    switch (state) {
        case "closed":
            const dropdown_content = document.createElement("div");
            dropdown_content.classList.add("dropdown_content");
            dropdown_container.childNodes.forEach((child) => {
                if (child.className === "dropdown_label") {
                    const dropdown_item = document.createElement("div");
                    dropdown_item.classList.add("dropdown_item");
                    const text = document.createElement("h1");
                    text.innerText = child.id;
                    dropdown_item.appendChild(text);
                    dropdown_content.appendChild(dropdown_item);
                }
            });
            dropdown_container.appendChild(dropdown_content);
            console.log("opened");
            state = "opened";
            break;
        case "opened":
            const content = document.querySelector(".dropdown_content");
            dropdown_container.removeChild(content);
            console.log("closed");
            state = "closed";
            break;
    }
});
