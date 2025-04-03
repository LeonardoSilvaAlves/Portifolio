// Gráfico de habilidades
const ctx = document.getElementById('skills-chart').getContext('2d');
const skillsChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Atendimento ao Público', 'Gestão Administrativa', 'Sistemas de Gestão', 'Pacote Office', 'Programação'],
        datasets: [{
            label: 'Minhas Habilidades',
            data: [90, 85, 80, 90, 70],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2
        }]
    },
    options: {
        scale: {
            ticks: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});
