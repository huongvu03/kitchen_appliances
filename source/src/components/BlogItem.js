import "../css/BlogItem.css"
import { useNavigate } from 'react-router-dom';
function BlogItem({ blog }) {
    const navigate = useNavigate();
    return (
        <div className="blogitem">
            <hr></hr>
            <div className='blogitem_card' onClick={() => navigate(`/blogdetail/${blog.id}`)}>
                <div className='blogitem_card_body'>
                    <div className="blogitem_card_body_img"><img src={blog.image[0]} alt='' /></div>
                    <div className='blog_card_body_content'>
                        <div>
                            <h2 className="blog_name_title">{blog.name}</h2>
                            <br></br>
                            <h6 className="blog_name_content">{blog.content[0]}</h6>
                            <br></br>
                            <h5 className='blog_detail'>Keep reading ... </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default BlogItem;