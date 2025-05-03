// utils.js

// إضافة مصروف إلى LocalStorage
function addExpenseToLocalStorage(expense) {
  const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  expenses.push(expense);
  localStorage.setItem('expenses', JSON.stringify(expenses));
}

// حساب إجمالي المصروفات
function calculateTotalExpenses() {
  const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  return expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
}

// التحقق من وجود إيميل مكرر عند إنشاء حساب
function isEmailExists(email) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  return users.some(user => user.email === email);
}

// إضافة المستخدم إلى LocalStorage عند التسجيل
function addUserToLocalStorage(user) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
}

// التحقق من صحة كلمة المرور عند التسجيل
function isPasswordValid(password, confirmPassword) {
  return password === confirmPassword;
}

