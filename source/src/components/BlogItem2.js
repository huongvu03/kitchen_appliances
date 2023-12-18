import 'bootstrap/dist/css/bootstrap.css';
import "../css/BlogItem2.css";
import { useNavigate } from 'react-router-dom';
function BlogItem2({ blog }) {
    const navigate = useNavigate();
    return (
        <div >
            <div >
                <div className='BlogItem_grid'>
                    <div><img src={blog.image[0]} alt='' /></div>
                    <div className='BlogItem_text'>
                        <br/>
                        <h3>{blog.title}</h3>
                        <div className='BlogItem_des'>{blog.desc}</div>
                        <div className='BlogItem_button'>
                        <button onClick={() => navigate(`/blog-detail2/${blog.id}`)}>KEEP READING → </button>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogItem2;
