import { Link } from "react-router-dom";
import { ClockIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
function Postdetail(props) {
  return (
    <section className="detail">
      <div className="deHead">
        <div>
          <h3>Title - {props.post.title}</h3>
          <p className="date">
            <ClockIcon className="clock" />
            Posted at - {props.post.date}
          </p>
        </div>
        <Link to={"/"}>
          <ArrowLeftIcon className="arrowleft" />
        </Link>
      </div>
      <img src={props.post.image} alt="" />
      <p>Description - {props.post.description}</p>
    </section>
  );
}

export default Postdetail;
