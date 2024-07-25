import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BlogContent from '../content/Blog';
import { FaUser } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// const Blogs = () => {
//     const content = BlogContent;

//     const responsive = {
//         desktop: {
//             breakpoint: { max: 3000, min: 1024 },
//             items: 3,
//         },
//         tablet: {
//             breakpoint: { max: 1024, min: 464 },
//             items: 2,
//         },
//         mobile: {
//             breakpoint: { max: 464, min: 0 },
//             items: 1,
//         },
//     };

//     const formatDate = (dateStr) => {
//         const options = { day: 'numeric', month: 'short', year: 'numeric' };
//         const date = new Date(dateStr.split('/').reverse().join('-'));
//         return date.toLocaleDateString('en-GB', options);
//     };

//     const CustomLeftArrow = ({ onClick }) => {
//         return (
//             <button
//                 className="custom-left-arrow rounded-circle button-primary"
//                 onClick={onClick}
//                 style={{
//                     border: 'none',
//                     zIndex: 999,
//                     position: 'absolute',
//                     right: '65px', // Adjusted to place it next to the right arrow
//                     top: '5%',
//                     cursor: 'pointer',
//                     padding: '5px',
//                 }}
//             >
//                 <IoIosArrowBack size={24} />
//             </button>
//         );
//     };

//     const CustomRightArrow = ({ onClick }) => {
//         return (
//             <button
//                 className="custom-right-arrow rounded-circle button-primary"
//                 onClick={onClick}
//                 style={{
//                     border: 'none',
//                     zIndex: 999,
//                     position: 'absolute',
//                     right: '20px', // Positioned at the top right end
//                     top: '5%',
//                     cursor: 'pointer',
//                     padding: '5px',
//                 }}
//             >
//                 <IoIosArrowForward size={24} />
//             </button>
//         );
//     };

//     return (
//         <div className='container mt-5 pt-5 blog'>
//             <div className='w-75'>
//                 <div className='title title'> KNOWLEDGE HUB</div>
//                 <div className='sub-title'>Discover your world at the Knowledge Hub.</div>
//             </div>
//             <div style={{ position: 'relative' }} className='gap-2'>
//                 <Carousel
//                     responsive={responsive}
//                     swipeable
//                     autoPlaySpeed={3000}
//                     slidesToSlide={1}
//                     showDots
//                     infinite={true}
//                     customLeftArrow={<CustomLeftArrow />}
//                     customRightArrow={<CustomRightArrow />}
//                     dotListClass='custom-dot-list'

//                 >
//                     {content.map((blog, index) => (
//                         <div key={index} className=" mt-5 pt-4 pt-sm-0">
//                             <Link to={`/blog/${index}`} className="text-decoration-none">
//                                 <div className="d-flex flex-column rounded-3 p-sm-4" style={{ height: "25rem" }}>
//                                     <img
//                                         src={blog.image}
//                                         alt="blog"
//                                         className='w-100 rounded-3 shadow-sm'
//                                         style={{ height: "13rem" }}
//                                     />
//                                     <h5 className="font-color fw-bold mt-3">{blog.maintitle}</h5>
//                                     <p className='font-color'>{formatDate(blog.createdAt)}</p>
//                                 </div>
//                             </Link>
//                         </div>
//                     ))}
//                 </Carousel>
//             </div>
//         </div>
//     );
// };


const Blogs = () => {
    const content = BlogContent;

    const formatDate = (dateStr) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const date = new Date(dateStr.split('/').reverse().join('-'));
        return date.toLocaleDateString('en-GB', options);
    };

    return (
        <div className='container blog w-100 '>
            <div className='w-75 py-5'>
                <div className='title title'> KNOWLEDGE HUB</div>
                <div className='sub-title'>Discover your world at the Knowledge Hub.</div>
            </div>
            <div className='d-flex row '>
                {content.map((blog, index) => (
                    <div key={index} className=" py-5 d-flex justify-content-center">
                        <div className=" border rounded-4 w-75">
                            <img
                                src={blog.image}
                                alt="blog"
                                className='w-100 rounded-1 shadow-sm'
                            />
                            <div className='px-4'>
                                <p className=' blog-info pt-3' style={{ fontSize: "15px" }}>
                                    <FaUser size={15} className=' me-1' />Updated By Admin on
                                    <p className='font-color ps-1 d-inline'>{formatDate(blog.createdAt)}</p>
                                </p>
                                <h5 className="font-color fw-bold ">{blog.maintitle}</h5>
                                <Link to={`/blog/${index}`} className="text-decoration-none pb-3 ">
                                    <p className='font-color' style={{fontSize:"14px"}}>{`READ MORE >`}</p>
                                </Link>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
};
export default Blogs;
