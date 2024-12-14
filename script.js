// إجابات صحيحة
const correctFullName = "abdelkhalek jarrou";
const correctWifeName = "ikram eddahby";

// عند النقر على الصورة يظهر صندوق الإدخال
document.getElementById('profilePicture').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'block';
});

// عند إرسال النموذج
document.getElementById('loginFormContent').addEventListener('submit', function(event) {
    event.preventDefault();

    // قراءة المدخلات
    const fullName = document.getElementById('fullName').value.trim().toLowerCase();
    const wifeName = document.getElementById('wifeName').value.trim().toLowerCase();

    // التحقق من الأجوبة
    if (fullName === correctFullName && wifeName === correctWifeName) {
        // إضافة تأثير blur على الجسم
        document.body.style.filter = 'blur(5px)';
        
        // فتح القفل
        const lockIcon = document.getElementById('locked');
        lockIcon.classList.add('open');  // إضافة التأثير التدريجي لفتح القفل
        
        // تغيير القفل إلى المفتوح
        document.getElementById('lockIcon').textContent = '🔓';

        // التوجيه لصفحة أخرى بعد 2 ثانية (لتكون التأثيرات مرئية)
        setTimeout(() => {
            window.location.href = 'acceuil.html';  // استبدل بالصفحة التالية
        }, 2000);
    } else {
        alert("أجوبتك غير صحيحة! حاول مرة أخرى.");
    }
});
