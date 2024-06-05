
const mip = document.getElementById('mip');
const mib = document.getElementById('btn');

let op = true;

mip.addEventListener('click', () => {
    
    mip.style.color = op ? 'red' : 'blue';  
    op = !op;
});

mib.addEventListener('click', () => {
    mip.style.color = op ? 'rgb(168, 60, 182)' : 'blue';
    op = !op;
});

