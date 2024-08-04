
# TrueLens News Detector

TrueLens News Detector is a web application designed to help users 
analyze and verify the credibility of news articles based on specific keywords. 
The application utilizes the NewsAPI to fetch news articles from various 
sources and provides a way to sort them by relevance, popularity, or published date.

## Features

- Analyze news articles based on keywords.
- Filter results by relevance, popularity, or published date.
- Displays articles from Nigerian news sources like Punch, Vanguard, NTA, and ThisDayLive.
- AdSense integration for monetization.
- Modern design with Poppins font and a light blue theme.
- Responsive design for various screen sizes.

## Getting Started

### Prerequisites

- A web browser (Chrome, Firefox, Safari, etc.)
- Internet connection

### Installation

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/TrueLens-News-Detector.git
    ```

2. Navigate to the project directory:
    ```bash
    cd TrueLens-News-Detector
    ```

3. Ensure all files are in the correct structure:
    ```
    TrueLens-News-Detector/
    ├── index.html
    ├── style.css
    ├── script.js
    ├── favicon.ico
    ```

### Running the Application

1. Open `index.html` in your preferred web browser.

## Usage

1. Open the TrueLens News Detector application.
2. Paste the keyword in the textarea.
3. Select the sorting option from the dropdown menu (None, Relevancy, Popularity, Published Date).
4. Click the "Analyze" button to fetch and display the news articles.
5. View the results in the "result" section.
6. Ads will be displayed as specified in the layout.

## Code Structure

### HTML (index.html)

- Contains the structure of the webpage including the form for keyword input, sorting options, and results display.
- Includes links to external resources like Google Fonts and AdSense.
- Links to the external CSS and JavaScript files.

### CSS (style.css)

- Styles for the entire application, including the layout, fonts, colors, and responsiveness.
- Applies the Poppins font and a light blue theme.

### JavaScript (script.js)

- Handles the logic for fetching news articles using the NewsAPI.
- Processes user input, applies sorting filters, and updates the DOM with the fetched articles.

## AdSense Integration

- AdSense scripts are included in the HTML to display ads on the webpage.
- Ensure to replace the placeholders with your actual AdSense client ID and ad slot ID.

## Adding a Favicon

- The favicon is included by linking to `favicon.ico` in the `<head>` section of the HTML.

## License

This project is licensed under the MIT License. See the (LICENSE) file for more details.

## Acknowledgements

- [Google Fonts](https://fonts.google.com/)
- [NewsAPI](https://newsapi.org/)
- [Google AdSense](https://www.google.com/adsense/start/)

---
