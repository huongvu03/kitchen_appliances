import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import '../css/BlogList2.css';
import BlogItem2 from "./BlogItem2";
import { Pagination } from "react-bootstrap";
import { useState } from 'react';
import { Link } from "react-router-dom";

function BlogList({blogs}){
    const [activePage, setActivePage] = useState(1);
    const blogsPerPage = 3;
    const handlePageChange = (pageNumber) => { setActivePage(pageNumber); };
    const indexOfLastBlog = activePage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlog = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
    const pageItems = [];
    for (let number = 1; number <= Math.ceil(blogs.length / blogsPerPage); number++) {
        pageItems.push(
            <Pagination.Item key={number} active={number === activePage} onClick={() => handlePageChange(number)}>
                {number}
            </Pagination.Item>
        );
    }
    return (
    <div>
        <div>
            <Carousel>
            <Carousel.Item>
            <div className='BlogList_grid'>
                    <div className='BlogList_grid_left'>
                        <div>Give your home a festive scent with a slow cooker holiday simmer</div>
                        <button><Link to='/blog-detail2/2'>Learn More »</Link></button>
                    </div>
                    <img className="d-block w-100 "
                        src="../blog_img/blog_img_2_1.jpg" height={"450px"}
                        alt="Second slide" />
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className='BlogList_grid'>
                    <div className='BlogList_grid_left'>
                        <div>Give your home a festive scent with a slow cooker holiday simmer</div>
                        <button><Link to='/blog-detail2/3'>Learn More »</Link></button>
                    </div>
                    <img className="d-block w-100 "
                        src="../blog_img/blog_img_3_1.jpg" height={"450px"}
                        alt="Second slide" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='BlogList_grid'>
                    <div className='BlogList_grid_left'>
                        <div>Give your home a festive scent with a slow cooker holiday simmer</div>
                        <button><Link to='/blog-detail2/4'>Learn More »</Link></button>
                    </div>
                    <img className="d-block w-100 "
                        src="../blog_img/blog_img_4_1.jpg" height={"450px"}
                        alt="Second slide" />
                </div>
            </Carousel.Item>
            </Carousel>
        </div>

        <div >
            <div >
                <div>
                    {currentBlog.map(b => (
                        <div >
                            <BlogItem2 key={b.id} blog={b} />
                        </div>
                    ))}
                </div>
                <div className="bloglist_pagination"><Pagination>{pageItems}</Pagination></div>
            </div>
        </div>
    </div>
    )
}
export default BlogList;