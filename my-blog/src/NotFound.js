import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <diV className='not-found'>
            <h2>Sorry</h2>
            <p>That page can not be found</p>
            <Link to="/">Back to the homepage...</Link>
        </diV>
    );
}
 
export default NotFound;