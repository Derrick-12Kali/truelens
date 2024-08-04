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
    const apiKey = 'a91e0ecdc9f148629671a95665539052'; //API key
    const nigerianSources = [
        'punchng.com',
    ];

    let apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(text)}&apiKey=${apiKey}`;

    //sorting parameter if it is provided
    if (sortBy) {
        apiUrl += `&sortBy=${sortBy}`;
    }

    //use default Nigerian sources
    apiUrl += `&domains=${nigerianSources.join(',')}`;

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

    if (data.articles && data.articles.length > 0) {
        data.articles.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('article');
            articleDiv.innerHTML = `
                <p>Title: ${article.title}</p>
                <p>Source: ${article.source.name}</p>
                <p><a href="${article.url}" target="_blank">Read more</a></p>
            `;
            resultDiv.appendChild(articleDiv);
        });
    } else {
        resultDiv.classList.add('credible');
        resultDiv.textContent = 'No relevant articles found.';
    }
}
