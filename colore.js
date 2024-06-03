document.getElementById('addBlockButton').addEventListener('click', function () {
    addColorBlock();
});
function addColorBlock() {
    let block = document.createElement('div');
    block.classList.add('color-block');
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    block.style.backgroundColor = randomColor;
    document.getElementById('container').appendChild(block);
    block.addEventListener('click', function () {
        this.parentNode.removeChild(this);
    });
}