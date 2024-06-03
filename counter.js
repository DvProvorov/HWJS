let count = 0;
function decreaseCount() {
    if (count !== 0) {
        count--;
        updateCount();
    }
}
function increaseCount() {
    count++;
    updateCount();
}
function updateCount() {
    document.getElementById('countDisplay').innerText = count;
}
document.getElementById('decreaseButton').addEventListener('click', decreaseCount);
document.getElementById('increaseButton').addEventListener('click', increaseCount);
