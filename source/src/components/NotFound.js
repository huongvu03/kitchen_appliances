import { useNavigate } from 'react-router-dom';
import '../css/LogIn.css';

function NotFound() {
    const navigate = useNavigate();
    const navigateNew = () => {
        navigate("/#newarrival");
        setTimeout(() => {
            const productSection = document.getElementById("newarrival");
            if (productSection) {
                productSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    }

    return (
        <div className='Notfound' onClick={navigateNew}>
             <div className='NotFoundimg'>
            <div className='NotFoundcontent'>
                <h3>Page Not Found 404</h3>
                We know this is'nt what you're looking for. Let's find something new arrival.
                <div><button>Find your flavour</button></div>

            </div>
          <img src="./homeimg/notfound.png" alt="new arrival"/>
            
            </div>
        </div>
    );
} export default NotFound;