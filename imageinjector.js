document.addEventListener("DOMContentLoaded", function() {
    // Get the image parent element
    let imageParent = document.querySelector(".image-wrap");
    // Some of my pages have the image parent element as image-wrapper, so I have to include this conditional, but it is not necessary.
    const baseName = imageParent.getAttribute("data-imgname");
    const imageCount = imageParent.getAttribute("data-imgcount"); // Number of images

    for (let i = 1; i <= imageCount; i++) {
        const imgContainer = document.createElement("div");
        const img = document.createElement("img");
        // Setting the srcset attribute for responsive images
        img.setAttribute("srcset", `
            /photo/${baseName}/${baseName}_${i}_450.webp 450w,
            /photo/${baseName}/${baseName}_${i}_750.webp 750w,
            /photo/${baseName}/${baseName}_${i}_1000.webp 1000w,
            /photo/${baseName}/${baseName}_${i}_2000.webp 2000w,
        `);
        // Setting the src attribute for fallback
        img.setAttribute("src", `photo/${baseName}/${baseName}_${i}_2000.webp`);
        img.setAttribute("alt", "");

        imgContainer.appendChild(img);
        imgContainer.classList.add("image-container");
        imageParent.appendChild(imgContainer);
    }
});