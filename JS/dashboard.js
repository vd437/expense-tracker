// dashboard.js

// التحقق إذا كان المستخدم مسجل دخوله
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (!loggedInUser) {
  window.location.href = 'index.html';  // لو مش مسجل دخول، يرجع لصفحة التسجيل
}

// عرض اسم المستخدم
document.getElementById('username').textContent = loggedInUser.name;

// حساب إجمالي المصروفات
function calculateTotalExpense() {
  const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  const totalExpense = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
  document.getElementById('total-expense').textContent = totalExpense.toFixed(2);
}

// تسجيل الخروج
document.getElementById('logoutBtn').addEventListener('click', function () {
  localStorage.removeItem('loggedInUser');
  window.location.href = 'index.html';  // بعد الخروج، يرجع لصفحة التسجيل
});

// حساب إجمالي المصروفات عند تحميل الصفحة
calculateTotalExpense();
