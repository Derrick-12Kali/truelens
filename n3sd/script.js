document.getElementById('analyzeButton').addEventListener('click', () => {
    const articleText = document.getElementById('articleText').value;
    const sortBy = document.getElementById('sortBy').value;
    if (articleText) {
        analyzeText(articleText, sortBy);
    } else {
        alert('Please paste the news article text.');
    }
});

function analyzeText(text, sortBy) {
    const apiKey = 'aOgjx3M7ElgLEQIJufWRzXrb38oWJMvQF_4dkSIWUYmL__Rt'; // Replace with your Currents API key
    let apiUrl = `https://api.currentsapi.services/v1/search?keywords=${encodeURIComponent(text)}&language=en&country=ng&apiKey=${apiKey}`;

    // Add sorting parameter if provided
    if (sortBy) {
        apiUrl += `&sort_by=${sortBy}`;
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayResult(data);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while analyzing the text.');
        });
}

function displayResult(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.className = 'result';
    resultDiv.innerHTML = ''; // Clear previous results

    if (data.news && data.news.length > 0) {
        data.news.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('article');
            articleDiv.innerHTML = `
                <p>Title: ${article.title}</p>
                <p>Source: ${article.author ? article.author : 'Unknown'}</p>
                <p><a href="${article.url}" target="_blank">Read more</a></p>
            `;
            resultDiv.appendChild(articleDiv);
        });
    } else {
        resultDiv.classList.add('credible');
        resultDiv.textContent = 'No relevant articles found.';
    }
}
