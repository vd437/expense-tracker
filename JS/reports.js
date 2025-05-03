// reports.js

// جلب المصروفات من LocalStorage
const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// إعداد البيانات لرسم البياني الدائري (Pie Chart) حسب النوع
const categories = expenses.reduce((acc, expense) => {
  if (acc[expense.category]) {
    acc[expense.category] += parseFloat(expense.amount);
  } else {
    acc[expense.category] = parseFloat(expense.amount);
  }
  return acc;
}, {});

const categoryLabels = Object.keys(categories);
const categoryData = Object.values(categories);

// رسم بياني دائري لتوزيع المصروفات حسب النوع
const ctxCategory = document.getElementById('categoryChart').getContext('2d');
new Chart(ctxCategory, {
  type: 'pie',
  data: {
    labels: categoryLabels,
    datasets: [{
      data: categoryData,
      backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33A1FF'],
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  }
});

// إعداد البيانات لرسم بياني عمودي (Bar Chart) حسب الشهر
const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
const monthlyExpenses = new Array(12).fill(0);

expenses.forEach(expense => {
  const expenseMonth = new Date(expense.date).getMonth();
  monthlyExpenses[expenseMonth] += parseFloat(expense.amount);
});

// رسم بياني عمودي للمصاريف حسب الشهر
const ctxMonthly = document.getElementById('monthlyChart').getContext('2d');
new Chart(ctxMonthly, {
  type: 'bar',
  data: {
    labels: months,
    datasets: [{
      label: 'المصروفات الشهرية',
      data: monthlyExpenses,
      backgroundColor: '#FF5733',
      borderColor: '#FF5733',
      borderWidth: 1,
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }
});
      
