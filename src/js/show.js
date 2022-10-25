(() => {
    const show = (objects = [])  => {
        for (let i = 0; i < objects.length; i++) {
            const object = objects[i];
            const windowHeight = window.innerHeight;
            const elementTop = object.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible / 2) {
                object.classList.add("active");
            }
        }
    };
    const shows = document.querySelectorAll(".show-with, [data-show-with]");

    for (let i = 0; i < shows.length; i++) {
        const object = shows[i];
        if (object.dataset['show-with']) {
            object.classList.add('show-with');
            object.classList.add(object.dataset['show-with']);
        }
    }
    
    let ticking = false;
    window.addEventListener("load", () => {
        show(shows);
    });
    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                show(shows);
               ticking = false;
            });
            ticking = true;
        }
    });
})();