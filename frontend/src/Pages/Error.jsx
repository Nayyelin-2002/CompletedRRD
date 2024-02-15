import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
function Error() {
  return (
    <section className="errorpage">
      <ExclamationTriangleIcon className="erroricon" />
      <p>There is an error</p>
      <Link to={"/"} className="errtohome">
        Go back
      </Link>
    </section>
  );
}

export default Error;
