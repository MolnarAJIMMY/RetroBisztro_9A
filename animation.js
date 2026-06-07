let index = 0;
const images = document.querySelectorAll('.carousel img');

function nextImage() {
    images[index].classList.remove('active');

    index = (index + 1) % images.length;

    images[index].classList.add('active');
}

setInterval(nextImage, 3000);


setInterval(nextImage, 3000);


setInterval(nextImage, 3000);

 window.onload = function(){
           document.getElementById('welcome-box').style.display = 'block';
           document.getElementById('overlay').style.display = 'block';
        }
        function bezar(){
            document.getElementById('welcome-box').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
        }

function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

// Mobil dropdown működés
document.querySelectorAll("nav ul li").forEach(li => {
    li.addEventListener("click", function(e) {
        if (window.innerWidth <= 768) {
            let dropdown = this.querySelector(".dropdown-content");
            if (dropdown) {
                dropdown.classList.toggle("show");
                e.stopPropagation();
            }
        }
    });
});

const images = document.querySelectorAll('.zoomable');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');



// --- Cursor karika mozgatása ---
const ring = document.querySelector('.cursor-ring');

document.addEventListener('mousemove', (e) => {
    ring.style.top = e.clientY + 'px';
    ring.style.left = e.clientX + 'px';
});

// Kattintás animáció
document.addEventListener('click', () => {
    ring.style.transform = 'translate(-50%, -50%) scale(0.6)';
    setTimeout(() => {
        ring.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 150);
});


// --- Lightbox működés ---
const images = document.querySelectorAll('.zoomable');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

images.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';

        setTimeout(() => {
            lightbox.classList.add('show');
        }, 10);
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('show');

    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 400);
});


