// রেজিস্ট্রেশন ফর্ম সাবমিট হ্যান্ডলার
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const bloodGroup = this.bloodGroup.value;
    const phone = this.phone.value.trim();

    const messageEl = document.getElementById('registerMessage');

    if (!name || !email || !bloodGroup || !phone) {
        messageEl.textContent = "সব ফিল্ড পূরণ করুন।";
        messageEl.style.color = "red";
        return;
    }

    if (!/^\d{11}$/.test(phone)) {
        messageEl.textContent = "সঠিক ১১ অংকের ফোন নম্বর দিন।";
        messageEl.style.color = "red";
        return;
    }

    messageEl.textContent = "নিবন্ধন সফল হয়েছে! ধন্যবাদ রক্তদাতা হওয়ার জন্য।";
    messageEl.style.color = "green";

    this.reset();
});

// লগইন ফর্ম সাবমিট হ্যান্ডলার
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.email.value.trim();
    const password = this.password.value.trim();

    const messageEl = document.getElementById('loginMessage');

    if (!email || !password) {
        messageEl.textContent = "ইমেইল এবং পাসওয়ার্ড দিন।";
        messageEl.style.color = "red";
        return;
    }

    // এখানে বাস্তব লগইন যাচাইয়ের জন্য সার্ভার কল হবে (যেহেতু এখন ক্লায়েন্ট সাইড তাই সিমুলেট করা)
    if(email === "user@example.com" && password === "password123") {
        messageEl.textContent = "লগইন সফল হয়েছে! স্বাগতম।";
        messageEl.style.color = "green";
    } else {
        messageEl.textContent = "ইমেইল বা পাসওয়ার্ড ভুল হয়েছে।";
        messageEl.style.color = "red";
    }
});

// যোগাযোগ ফর্ম সাবমিট হ্যান্ডলার
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    const messageEl = document.getElementById('contactMessage');

    if (!name || !email || !message) {
        messageEl.textContent = "সব ফিল্ড পূরণ করুন।";
        messageEl.style.color = "red";
        return;
    }

    messageEl.textContent = "আপনার বার্তা প্রেরণ সফল হয়েছে। ধন্যবাদ!";
    messageEl.style.color = "green";

    this.reset();
});
