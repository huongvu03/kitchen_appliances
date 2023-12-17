import { useEffect, useState, } from 'react';
import { Link, useParams } from "react-router-dom";
import '../css/BlogDetails2.css';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

function BlogDetails2(){
    const { id } = useParams();
    const [blog, setBlogs] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try{
            //đọc file json thứ nhất
            const dataJson = await fetch('../blogs2.json');
            const data = await dataJson.json();
            //lay book dua vao id
            const selectedBook =data.find((item)=> item.id ==id);
            setBlogs(selectedBook);
            
          }catch (error){
            console.log('error reading json');
          }
        };
        fetchData();
      }, []);
      console.log(blog);
      if (!blog) {
        return <h1> Loading...</h1>
      }
    
    return(
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
            <div className='BlogDetals'>
            <div className='BlogDetals'>
                
                <br/>
                <h1>
                    {blog.title}
                </h1>
                <br/>
                <br/>
                <div><img  src={'../'+blog.image[0]} alt=''/></div>
                <br/>
                <div className='BlogDetals_text'>{blog.desc}</div>
                <div  className='BlogDetals_text'>
                {blog.description.map((p) => (
                    <p>{p}</p>
                ))}
                </div>
                <div className='BlogDetals_food'>
                    <div  className='BlogDetals_food1'>
                    <br/>
                    <h3>{blog.name_food}</h3>
                    <br/>
                    <div><img  src={'../'+blog.image[1]} alt=''/></div>
                    <br/>
                    <h4>Ingredients</h4>
                    <ul>
                        {blog.ingredients.map((i) => (
                        <li>{i}</li>
                    ))}
                    </ul>
                    <h4>Step</h4>
                    <ol>
                        {blog.step.map((i) => (
                        <li>{i}</li>
                    ))}
                    </ol>
                    <h4>{blog.note_title}</h4>
                        {blog.note_text.map((i) => (
                        <p>{i}</p>
                    ))}
                    <br/>
                </div>
                </div>
            </div>
            <br/>
            <div className='BlogDetail_a'><Link to='/products'>Shop Now →</Link></div>
            <br/>
            </div>
        </div>
    )
}
export default BlogDetails2;