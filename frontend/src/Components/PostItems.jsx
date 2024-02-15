import { Link } from "react-router-dom";
import { ClockIcon } from "@heroicons/react/24/solid";
function PostItems(props) {
  return (
    <section className="post">
      <Link to={`${props.posts.id}`}>
        <img src={props.posts.image} alt="" />
      </Link>
      <Link to={`${props.posts.id}`}>
        <p className="title">TITLE - {props.posts.title} </p>
      </Link>
      <p className="date">
        <ClockIcon className="clock" />
        Date -{props.posts.date}
      </p>
      <hr />
    </section>
  );
}

export default PostItems;
