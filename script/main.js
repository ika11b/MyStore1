// ელემენტების მოძებნა ID-ის მიხედვით
const burger = document.getElementById('burger');
const navMenu = document.getElementById('nav-menu');

// ღილაკზე დაჭერის ფუნქცია
burger.addEventListener('click', () => {
    // ნავიგაციას ვუმატებთ/ვაკლებთ 'active' კლასს
    navMenu.classList.toggle('active');
    
    // თავად ღილაკს ვუმატებთ 'toggle' კლასს ანიმაციისთვის
    burger.classList.toggle('toggle');
});

// ლინკზე დაჭერისას მენიუს დახურვა (მოსახერხებელია მომხმარებლისთვის)
document.querySelectorAll('#nav-menu ul li a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        burger.classList.remove('toggle');
    });
});
