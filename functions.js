// Function to animate the piha image pan upwards
function pihaAnimation() {
    var pihaWrapper = document.querySelector('.pihaWrapper');
    var currentPosition = pihaWrapper.scrollTop;
    var targetPosition = 0;
    var duration = 2500; // 2.5 seconds

    var startTime = null;

    function step(currentTime) {
        if (!startTime) startTime = currentTime;
        var progress = currentTime - startTime;
        pihaWrapper.scrollTop = easeInOut(progress, currentPosition, targetPosition - currentPosition, duration);

        if (progress < duration) {
            requestAnimationFrame(step);
        }
    }

    function easeInOut(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(step);
}

// Call the piha animation function
pihaAnimation();
