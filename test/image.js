const image = document.querySelector("img");

const observer = new IntersectionObserver((entries) => {
    for(const entry of entries){
        if(entry.isIntersecting){
            entry.target.style.animation = "animImage 4s ease-in-out";
        }
    }
})

observer.observe(image)