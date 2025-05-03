// auth.js

// تسجيل الدخول
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    window.location.href = 'dashboard.html';
  } else {
    alert('البريد الإلكتروني أو كلمة المرور غير صحيحة');
  }
});

// إنشاء حساب
document.getElementById('registerForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert('كلمة المرور وتأكيد كلمة المرور غير متطابقتين');
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];

  if (users.find(u => u.email === email)) {
    alert('البريد الإلكتروني موجود بالفعل');
    return;
  }

  const newUser = { name, email, password };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  alert('تم إنشاء الحساب بنجاح!');
  window.location.href = 'index.html';  // بعد التسجيل، نرجع لصفحة تسجيل الدخول
});
      
