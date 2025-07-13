function update_slide(index) {
    slide.style.backgroundImage = img_array[index];
    actual_circle.style.backgroundColor = "var(--button_unpressed)";
    actual_circle = navigation_bar.children[index];
    actual_circle.style.backgroundColor = "var(--button_pressed)";
    actual_img = index;
}

img_array = [
    "url('https://www.hdwallpapers.in/download/landscape_of_mountains_and_forest_4k_hd_vaporwave-HD.jpg')",
    "url('https://4kwallpapers.com/images/wallpapers/vaporwave-sunset-2560x1080-15302.jpg')",
    "url('https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/c44b60c6-d3b5-43d9-b17e-4c509177ddf8/Vaporwave+sunset')",
    "url('https://i.pinimg.com/736x/8a/3b/74/8a3b7440930561182bee982a31bbf617.jpg')",
    "url('https://www.hdwallpapers.in/download/retro_car_synthwave_city_ocean_moon_background_4k_hd_vaporwave-HD.jpg')",
    "url('https://api.videobolt.net/v2/assets/37899916/img?screenType=none&noRedirect=true&key=nuusgqylwa')",
    "url('https://i.redd.it/2as5mszzs3l11.png')",
    "url('https://images2.alphacoders.com/754/754606.jpg')",
    "url('https://wallpapercave.com/wp/wp10413594.jpg')",
    "url('https://w0.peakpx.com/wallpaper/173/751/HD-wallpaper-synthwave-planet-retrowave-sky-background-vaporwave.jpg')",
    "url('https://w0.peakpx.com/wallpaper/12/686/HD-wallpaper-pacific-coast-vaporwave.jpg')",
];

let actual_img = 0;
const slide = document.querySelector(".slide");

const navigation_bar = document.createElement("div");
navigation_bar.classList.add("navigation_bar");

let circle_count = 0;
img_array.forEach(() => {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.id = circle_count++;
    circle.addEventListener("click", () => {
        update_slide(parseInt(circle.id));
        resetInterval();
    });
    navigation_bar.appendChild(circle);
});

let actual_circle = navigation_bar.firstChild;
actual_circle.style.backgroundColor = "var(--button_pressed)";
slide.style.backgroundImage = img_array[actual_img];
slide.appendChild(navigation_bar);

const left_arrow = document.querySelector("#left_arrow");
left_arrow.addEventListener("click", () => {
    actual_img = (actual_img - 1 + img_array.length) % img_array.length;
    update_slide(actual_img);
});

const right_arrow = document.querySelector("#right_arrow");
right_arrow.addEventListener("click", () => {
    actual_img = (actual_img + 1) % img_array.length;
    update_slide(actual_img);
    resetInterval();
});

let slide_interval = null;

function startInterval() {
    slide_interval = setInterval(() => {
        update_slide((actual_img + 1) % img_array.length);
    }, 5000);
}

function resetInterval() {
    clearInterval(slide_interval);
    startInterval();
}

startInterval();
