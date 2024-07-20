import image from "../assets/images.png";
interface Props {
  title: string;
  description: string;
  src: string;
  url: string;
}

const NewsItem = ({ title, description, src, url }: Props) => {
  return (
    <>
      <div
        className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
        style={{ maxWidth: "350px" }}
      >
        <img
          src={src ? src : image}
          style={{ height: "200px", width: "330px" }}
          className="card-img-top"
          alt="News Image"
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">
            {description
              ? description.slice(0, 90)
              : "News is not available at this moment. Please check back later."}
          </p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
