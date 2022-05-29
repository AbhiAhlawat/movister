import { Link } from "react-router-dom";

const started = [
  {
      display: 'Home',
      path: '/'
  },
  {
      display: 'Movies',
      path: '/movie'
  },
  {
      display: 'TV Series',
      path: '/tv'
  }
];

const Form = () => {
  return (
    <form>

      <div className="form-main">
        
        <button className="red-btn signup-btn">
          <span>
            <Link to="/Home">
              <button className="red-btn signup-btn"> Get Started </button>
            </Link>
          </span>
          <span className="chevron-right-arrow">
            <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
              <desc>chevron</desc>
              <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"></path>
            </svg>
          </span>
        </button>
      </div>
    </form>
  );
};



export default Form;
