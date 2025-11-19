import { useState ,useEffect} from "react";
import {Link, useNavigate ,useLocation} from "react-router-dom";

export default function ComingSoonModal() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate(); // initialize navigate function
  const location = useLocation(); //force rerender of coming-soon when we already on coming soon link link

  //use when we load this component our window scroll to the top
  //because React does not automatically scroll the page to the top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleGoBack = () => {
    navigate(-1); // go back to the previous page
  };
  return (
    <div className="container Coming-soon ">
      <h3>🚧 Oops!</h3>
      <p>This feature isn’t active yet, but it’s on the way.</p>
      <button onClick={handleGoBack} className='p-2 Hero-button btn btn-primary fs-5 mb-5 me-5'><i className="fa-solid fa-arrow-left"></i> Back</button>
      <Link to="/" className='p-2 Hero-button btn btn-primary fs-5 mb-5'><i className="fa-solid fa-house"></i> Home</Link>
    </div>
  );
}
