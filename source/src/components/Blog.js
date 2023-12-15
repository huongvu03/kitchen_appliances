import 'bootstrap/dist/css/bootstrap.css';
import BlogItem from './BlogItem';
import { Pagination } from "react-bootstrap";
import { useState } from 'react';
import "../css/Blog.css";

function Blog({ blogs }) {
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

    return (<div className="bloglist_page container">
        {/* <div className='searchBlog'>
            <p>Search input</p>
        </div> */}
        <div className='bloglist container'>
            <div className="bloglist_card_item">
                {currentBlog.map(blog => (
                    <div className="bloglist_card_item_body">
                        <BlogItem key={blog.id} blog={blog} />
                    </div>
                ))}
            </div>
            <div className="bloglist_pagination"><Pagination>{pageItems}</Pagination></div>
        </div>
    </div>
    )
}
export default Blog