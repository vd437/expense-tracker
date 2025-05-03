// expenses.js

// التحقق من الفورم وإضافة المصروف
document.getElementById('expenseForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const category = document.getElementById('category').value;
  const amount = document.getElementById('amount').value;
  const date = document.getElementById('date').value;
  const notes = document.getElementById('notes').value;

  // تحقق من وجود كل الحقول
  if (!category || !amount || !date) {
    alert('من فضلك، تأكد من إدخال جميع الحقول المطلوبة.');
    return;
  }

  // بيانات المصروف الجديد
  const newExpense = {
    category,
    amount,
    date,
    notes,
  };

  // جلب المصروفات من LocalStorage
  const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

  // إضافة المصروف الجديد إلى المصروفات
  expenses.push(newExpense);

  // حفظ المصروفات في LocalStorage
  localStorage.setItem('expenses', JSON.stringify(expenses));

  // الرجوع إلى صفحة لوحة التحكم
  window.location.href = 'dashboard.html';
});
