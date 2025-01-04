(function() {
    function displayCount(value) {
        const countEl = document.querySelector('#count');
        if (countEl) {
            countEl.textContent = value || '0';
        }
    }
    async function updateCount() {
        const res = await fetch('https://ycwlq1bmwf.execute-api.ap-southeast-1.amazonaws.com/prod/lambda', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }        
        })
        const data = await res.json();
        console.log('result', data);
        displayCount(data.visitor_count);
    }

    console.log('Hello from script.js');
    displayCount();
    updateCount();
})();