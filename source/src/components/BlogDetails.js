import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "../css/BlogDetail.css";
import React from 'react';
function BlogDetail({ blogs }) {
    const { id } = useParams();
    const blog = blogs.find(blog => blog.id === parseInt(id));
    console.log(blog);
    return (
        <div className="blogdetail_page container">

            <div className="blogdetail_banner">
                <img src={"../" + blog.image[1]} alt='' />
            </div>
            <div className="blogdetail_title">
                <h1>{blog.name}</h1>
            </div>
            <div className="blogdetail_content">
                <ul>
                    {blog.content.map((c) => (
                        <li><p>{c}</p></li>
                    ))}
                </ul>

            </div>


        </div>


    )
}
export default BlogDetail;