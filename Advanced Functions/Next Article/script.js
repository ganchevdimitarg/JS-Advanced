function getArticleGenerator(articles) {
    const tokens = articles;
    let startIndex = 0;

    return () => {
        let nextIndex = startIndex++;
        if (tokens.length - 1 >= nextIndex) {
            let article = document.createElement('article');
            article.textContent = tokens[nextIndex];
            let content = document.getElementById('content');
            content.appendChild(article);
        }
    }
}