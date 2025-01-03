(function() {
    function displayCount() {
        const countEl = document.querySelector('#count');
        if (countEl) {
            countEl.textContent = '0';
        }
    }

    console.log('Hello from script.js');
    displayCount();
})();