document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".menu-btn");
    const contents = document.querySelectorAll(".content");

    // تأكد من أن جميع الأزرار والمحتويات يتم تحميلها بشكل صحيح
    console.log("Buttons loaded:", buttons);
    console.log("Contents loaded:", contents);

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // أولا نخفي كل المحتويات
            contents.forEach(content => {
                content.classList.remove("active");
                console.log("Hiding content:", content);
            });

            // نعرض المحتوى الذي يتوافق مع الزر الذي تم النقر عليه
            const contentId = button.getAttribute("data-content");
            console.log("Content ID:", contentId);

            const activeContent = document.getElementById(contentId);
            if (activeContent) {
                activeContent.classList.add("active");
                console.log("Showing content:", activeContent);
            } else {
                console.log("No content found for ID:", contentId);
            }
        });
    });
});
// جلب زر Back
const backButton = document.querySelector('.back-btn');

// وظيفة زر Back: الانتقال إلى صفحة home.html
backButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});
