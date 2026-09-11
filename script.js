// ========================================
// PORTFOLIO JAVASCRIPT
// ชุติพนธ์ ก่ำดี
// ========================================


// ========================================
// 1. MOBILE MENU
// ========================================

const menuButton =
    document.querySelector(".menu-toggle");

const navigation =
    document.querySelector(".nav-menu");


if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("show");

        if (navigation.classList.contains("show")) {

            menuButton.textContent = "✕";

        } else {

            menuButton.textContent = "☰";

        }

    });

}


// ========================================
// 2. ปิดเมนูเมื่อกด Navigation
// ========================================

const menuLinks =
    document.querySelectorAll(".nav-menu a");


menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("show");

        if (menuButton) {
            menuButton.textContent = "☰";
        }

    });

});


// ========================================
// 3. TYPING EFFECT
// ========================================

const typingName =
    document.getElementById("typing-name");

const nameText =
    "ชุติพนธ์ ก่ำดี";

let currentCharacter = 0;


function typeName() {

    if (!typingName) return;

    if (currentCharacter < nameText.length) {

        typingName.textContent +=
            nameText[currentCharacter];

        currentCharacter++;

        setTimeout(typeName, 120);

    }

}


typeName();


// ========================================
// 4. SCROLL FADE-IN
// ========================================

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    const screenHeight =
        window.innerHeight;


    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;


        if (elementTop < screenHeight - 100) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();


// ========================================
// 5. ACTIVE NAVIGATION
// ========================================

const sections =
    document.querySelectorAll("section[id]");


function updateActiveNavigation() {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    menuLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();


// ========================================
// 6. SMOOTH SCROLL
// ========================================

menuLinks.forEach(link => {

    link.addEventListener("click", event => {

        const target =
            document.querySelector(
                link.getAttribute("href")
            );


        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ========================================
// 7. BACK TO TOP BUTTON
// ========================================

const backToTop =
    document.createElement("button");


backToTop.className =
    "back-to-top";

backToTop.textContent = "↑";

backToTop.setAttribute(
    "aria-label",
    "กลับขึ้นด้านบน"
);


document.body.appendChild(backToTop);


// แสดงปุ่มเมื่อเลื่อนลง

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


// กดปุ่มเพื่อกลับด้านบน

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ========================================
// 8. ตรวจสอบรูปโปรไฟล์
// ========================================

const profileImage =
    document.querySelector(
        ".profile-photo img"
    );


if (profileImage) {

    profileImage.addEventListener(
        "load",
        () => {

            console.log(
                "โหลดรูปโปรไฟล์สำเร็จ ✓"
            );

        }
    );


    profileImage.addEventListener(
        "error",
        () => {

            console.log(
                "ไม่พบไฟล์ profile.jpg"
            );

        }
    );

}


// ========================================
// 9. START MESSAGE
// ========================================

console.log(
    "Portfolio ของ ชุติพนธ์ ก่ำดี พร้อมใช้งานแล้ว 🏐🎨"
);