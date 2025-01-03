(function() {
    function displayCount() {
        const countEl = document.querySelector('#count');
        if (countEl) {
            countEl.textContent = '0';
        }
    }
    async function updateCount() {
        const res = await fetch('https://ycwlq1bmwf.execute-api.ap-southeast-1.amazonaws.com/prod', {
            method: 'POST',            
        })
        console.log('result', res);
        displayCount();
    }

    console.log('Hello from script.js');
    displayCount();
    updateCount();
})();