const slides = document.querySelector('.slides');
        const slide = document.querySelectorAll('.slide');
        const next = document.getElementById('next');
        const prev = document.getElementById('prev');
        let index = 0;

        function showSlide(index) {
            const slideWidth = slide[index].clientWidth;
            slides.style.transform = 'translateX(' + (-slideWidth * index) + 'px)';
        }

        next.addEventListener('click', () => {
            index = (index + 1) % slide.length;
            showSlide(index);
        });

        prev.addEventListener('click', () => {
            index = (index - 1 + slide.length) % slide.length;
            showSlide(index);
        });

        showSlide(index); // Show the first slide initially