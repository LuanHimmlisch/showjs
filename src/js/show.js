(() => {
    const show = (objects = []) => {
        for (let i = 0; i < objects.length; i++) {
            const object = objects[i];

            if (!object.classList.contains('active')) {
                const windowHeight = window.innerHeight;
                const elementTop = object.getBoundingClientRect().top;
                const elementVisible = 150;

                if (elementTop < windowHeight - elementVisible / 2) {
                    if (object.classList.contains('wait')) {
                        const queue = Object.values(objects).filter((v) => v.classList.contains('wait') && !v.classList.contains('active'));
                        if (queue[0] === object) {
                            setTimeout(() => object.classList.add("active"), 100);
                        }
                    } else {
                        object.classList.add("active");
                    }
                }
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
    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                show(shows);
                ticking = false;
            });
            ticking = true;
        }
    });

    show(shows); // Check on start
})();