document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("matrixCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 300);
    const drops = [];

    
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * canvas.height;
    }

    function drawMatrix() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#0f0";
        ctx.font = "15pt monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = String.fromCharCode(Math.floor(Math.random() * 94) + 33);
            ctx.fillText(text, i * 20, drops[i] * 20);

            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }
   

    function animateMatrix() {
        drawMatrix();
        requestAnimationFrame(animateMatrix);
    }

    animateMatrix();
});
