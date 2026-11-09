import Illustration from "../assets/illustration-article.svg";
import Avatar from "../assets/image-avatar.webp";

const BlogCard = () => {
    return (
      <div className="card">
        <img className="card-image" src={Illustration} alt="abstact image"/>
        <div className="card-text-container">
          <p className="card-label">Learning</p>
          <p className="card-date">Published 21 Dec 2023</p>
          <h1>
            <a className="card-heading" href="#">HTML & CSS foundations</a>
          </h1>
          <p className="card-paragraph">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className="author-info">
          <img className="author-avatar" src={Avatar} alt="author-avatar"></img>
          <p className="author-name">Greg Hooper</p>
        </div>
      </div>
    );
}
export default BlogCard;