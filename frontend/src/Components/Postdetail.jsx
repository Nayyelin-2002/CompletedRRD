import { Link, useSubmit } from "react-router-dom";
import { ClockIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
function Postdetail(props) {
  const submitdelete = useSubmit();
  const deletepost = () => {
    const confirmbox = window.confirm("Are u sure to delete this post");
    if (confirmbox) {
      submitdelete(null, {
        method: "delete",
      });
    }
  };

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
      <div className="footer">
        <Link to={"edit-post"}>
          <p className="btn sm">Edit</p>
        </Link>
        <p className="btn sm" onClick={deletepost}>
          Delete
        </p>
      </div>
    </section>
  );
}

export default Postdetail;
