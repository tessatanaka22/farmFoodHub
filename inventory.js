//Initialize the pie chart
document.addEventListener('DOMContentLoaded', function(){
    const ctx = document.createElement('canvas');
    document.getElementById('pie-chart').appendChild(ctx);
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Vegetables', 'Grains', 'Diary', 'Meat'],
            datasets: [{
                data: [30, 15, 30, 25],
                backgroundColor:[
                    '#f44336', //Red for Vegetables
                    '#ffc107', //Yellow for Grains
                    '#4CAF50', //Green for Diary
                    '#ff9800', //Orange for Meat
                ],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {legend:{display:false}}
        }
    });
});