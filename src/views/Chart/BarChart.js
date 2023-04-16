const data = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    datasets: [
      {
        label: 'Sales',
        backgroundColor: '#f87979',
        data: [4, 2, 1, 3, 1, 4, 3, 2, 4, 2, 2, 1]
      }
    ]
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false
  };
  
  export { data, options };
  