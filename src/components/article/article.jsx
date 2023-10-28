import "./article.css";

function Article({ imgUrl, date, title }) {
  return (
    <div className="gpt3__blog-container__article">
      <div className="gpt3__blog-container__article-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="gpt3_blog-container__article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
}

export default Article;
