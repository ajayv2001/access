const imageLinks = [
    { src: "/company-image/Frame 39548.png", alt: "Lab 1" },
    { src: "/company-image/Frame 39549.png" },
    { src: "/company-image/Frame 39550.png", alt: "Lab 3" },
   
];

const container = document.getElementById("popular-images");

imageLinks.forEach(link => {
    const img = document.createElement("img");
    img.src = link.src;
    img.alt = link.alt;
    container.appendChild(img);
});
