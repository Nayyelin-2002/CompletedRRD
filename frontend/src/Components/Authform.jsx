import React from "react";
import {
  Link,
  Form,
  useSearchParams,
  useActionData,
  useNavigation,
} from "react-router-dom";

function Authform() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const data = useActionData();
  //   console.log(isLogin);
  const navigatelocation = useNavigation();
  const issubmitting = navigatelocation.state === "submitting";
  return (
    <section className="formsection">
      <div>
        <p>{isLogin ? "Login into your account" : "Create your new account"}</p>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((error) => {
              return <li key={error}>{error}</li>;
            })}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <Form method="post">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button className="btn">
            {issubmitting ? "Submitting" : isLogin ? "login" : "singup"}
          </button>
        </Form>
        {isLogin ? (
          <p className="create">
            Don't have an account?
            <Link className="new" to={"/auth?mode=signup"}>
              Create an account
            </Link>
          </p>
        ) : (
          <p className="create">
            Already have an account?
            <Link className="new" to={"/auth?mode=login"}>
              Login here
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}

export default Authform;
