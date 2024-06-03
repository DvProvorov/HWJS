document.addEventListener('DOMContentLoaded', function() {
    const colors = document.querySelectorAll('.color');

    colors.forEach(color => {
        color.addEventListener('click', function() {
            const textColor = this.style.backgroundColor;
            document.getElementById('text').style.color = textColor;
        });
    });
});


