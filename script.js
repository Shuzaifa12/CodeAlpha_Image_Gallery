// Function to initialize a slider
function initSlider(sliderContainer) {
    const slides = sliderContainer.querySelectorAll(".slide"); // Select slides specific to this container
    const leftButton = sliderContainer.querySelector(".leftarrow");
    const rightButton = sliderContainer.querySelector(".rightarrow");

    let counter = 0; // Start index for the slider

    // Set initial positions of slides
    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    });

    // Function to move to the previous slide
    const goPrev = () => {
        if (counter > 0) {
            counter--;
            updateSlider();
        }
    };

    // Function to move to the next slide
    const goNext = () => {
        if (counter < slides.length - 1) {
            counter++;
            updateSlider();
        }
    };

    // Function to update the position of slides
    const updateSlider = () => {
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        });
    };

    // Attach event listeners to buttons
    leftButton.addEventListener("click", goPrev);
    rightButton.addEventListener("click", goNext);
}

// Initialize sliders for both `nature_div` and `food_div`
const natureSlider = document.querySelector(".nature_div");
const foodSlider = document.querySelector(".food_div");
const _3DSlider = document.querySelector("._3D_div");

initSlider(natureSlider);
initSlider(foodSlider);
initSlider(_3DSlider);
