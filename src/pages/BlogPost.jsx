import React from 'react';
import { useParams } from 'react-router-dom';
import BlogContent from '../content/Blog';
import { FaUser } from "react-icons/fa";
import { TiCalendarOutline } from "react-icons/ti";
import Reply from './ReplyMail';

const formatDate = (dateStr) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const date = new Date(dateStr.split('/').reverse().join('-'));
    return date.toLocaleDateString('en-GB', options);
};

const Blog1 = ({ blog }) => {
    return (
        <div className='container-fluid  pt-3'>
            <div className='row'>
                <div className='col-md-3 p-lg-4 d-flex p-md-3 blog-sidebar d-none d-sm-none d-md-block overflow-hidden'>
                    <div className=''>
                        <h4 className=' pb-3 '>{blog.maintitle}</h4>
                        <a href={`#${blog?.breifNote?.title.replace(/\s+/g, '-')}`} className='text-decoration-none text-white'>
                            <p className='fw-bold'>{blog?.breifNote?.title}</p>
                        </a>
                        <hr />
                        {blog?.breifNote?.topics.map((topic, index) => (
                            <div key={index}>
                                <a href={`#${topic?.subTopic.replace(/\s+/g, '-')}`} className='text-decoration-none text-white'>
                                    <p className='fw-bold'>{topic?.subTopic}</p>
                                </a>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='col-12 col-md-9 p-sm-5 blog-content'>
                    <h2 className='font-color fw-bold'>{blog.maintitle}</h2>
                    <img src={blog.image} alt="blog1" className='w-100 shadow-sm' />
                    <div className='d-flex flex-wrap d-inline pt-4 gap-1'>
                        <p className='d-flex blog-info' style={{ fontSize: "15px" }}>
                            <FaUser size={15} className='blog-info me-1' />Updated By Admin on
                        </p>
                        <p className='d-flex blog-info' style={{ fontSize: "15px" }}>
                            <TiCalendarOutline size={18} className='blog-info me-1' />{formatDate(blog.createdAt)}
                        </p>
                    </div>
                    <div>
                        <p>{blog.introduction.description}</p>
                        {blog?.introduction?.functionality.map((point, index) => (
                            <ul key={index} dangerouslySetInnerHTML={{ __html: point }} />
                        ))}
                        <p className='mb-2'>{blog?.introduction?.note}</p>
                        <h5 className='fw-bold' id={blog?.breifNote?.title.replace(/\s+/g, '-')}>{blog?.breifNote?.title}</h5>
                        <p>{blog?.breifNote?.description}</p>
                        {blog?.breifNote?.type.map((type, index) => (
                            <p key={index} dangerouslySetInnerHTML={{ __html: type }} />
                        ))}
                        {blog?.breifNote?.topics.map((topic, index) => (
                            <div key={index} id={topic?.subTopic.replace(/\s+/g, '-')} >
                                <h5 className='fw-bold' >{topic?.subTopic}</h5>
                                <p>{topic?.title}</p>
                                {topic?.keypoints.map((keypoint, index) => (
                                    <ul key={index} dangerouslySetInnerHTML={{ __html: keypoint }} />
                                ))}
                            </div>
                        ))}
                        <p>{blog?.conclusion}</p>
                    </div>
                    <Reply />
                </div>
            </div>
        </div>
    );
};

const Blog2 = ({ blog }) => {
    return (
        <div className='container-fluid  pt-3'>
            <div className='row'>
                <div className='col-md-3 p-lg-4 d-flex p-md-3 blog-sidebar d-sm-none d-md-block'>
                    <div className=''>
                        <h4 className=' pb-3 '>{blog.maintitle}</h4>
                        {blog?.breifNote?.topics.map((topic, index) => (
                            <div key={index}>
                                <a href={`#${topic?.title.replace(/\s+/g, '-')}`} className='text-decoration-none text-white'>
                                    <p className='fw-bold'>{topic?.title}</p>
                                </a>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='col-12 col-md-9 p-sm-5  blog-content' >
                    <h2 className='font-color fw-bold'>{blog.maintitle}</h2>
                    <img src={blog.image} alt="blog1" className='w-100 shadow-sm' />
                    <div className='d-flex flex-wrap d-inline pt-4 gap-1'>
                        <p className='d-flex blog-info' style={{ fontSize: "15px" }}>
                            <FaUser size={15} className='blog-info me-1' />Updated By Admin on
                        </p>
                        <p className='d-flex blog-info' style={{ fontSize: "15px" }}>
                            <TiCalendarOutline size={18} className='blog-info me-1' />{formatDate(blog.createdAt)}
                        </p>
                    </div>
                    <div>
                        <p>{blog?.introduction}</p>
                        {blog?.breifNote?.topics.map((topic, index) => (
                            <div key={index} id={topic?.title.replace(/\s+/g, '-')}>
                                <h5 className='fw-bold' >{topic?.title}</h5>
                                <p>{topic?.description}</p>
                                {topic?.keypoints?.map((keypoint, kpIndex) => (
                                    <ul key={kpIndex} dangerouslySetInnerHTML={{ __html: keypoint }} />
                                ))}
                            </div>
                        ))}
                        <p>{blog?.conclusion}</p>
                    </div>
                    <Reply />
                </div>
            </div>
        </div>
    );
};

const Blog3 = ({ blog }) => {
    return (
        <div className='container-fluid '>
            <div className='row'>
                <div className='col-md-3 p-lg-4 d-flex p-md-3 blog-sidebar d-sm-none d-md-block'>
                    <div className=''>
                        <h4 className=' pb-3 '>{blog.maintitle}</h4>
                        {blog?.breifNote?.topics.map((topic, index) => (
                            <div key={index}>
                                <a href={`#${topic?.title.replace(/\s+/g, '-')}`} className='text-decoration-none text-white'>
                                    <p className='fw-bold'>{topic?.title}</p>
                                </a>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='col-12 col-md-9 p-sm-5  blog-content' style={{ overflowY: 'auto', height: '100vh' }}>
                    <h2 className='font-color fw-bold'>{blog.maintitle}</h2>
                    <img src={blog.image} alt="blog1" className='w-100 shadow-sm' />
                    <div className='d-flex flex-wrap d-inline pt-4 gap-1'>
                        <p className='d-flex blog-info' style={{ fontSize: "15px" }}>
                            <FaUser size={15} className='blog-info me-1' />Updated By Admin on
                        </p>
                        <p className='d-flex blog-info' style={{ fontSize: "15px" }}>
                            <TiCalendarOutline size={18} className='blog-info me-1' />{formatDate(blog.createdAt)}
                        </p>
                    </div>
                    <div>
                        <p>{blog?.introduction}</p>
                        {blog?.breifNote?.topics.map((topic, index) => (
                            <div key={index} id={topic?.title.replace(/\s+/g, '-')}>
                                <h5 className='fw-bold' >{topic?.title}</h5>
                                <p>{topic?.description}</p>
                                {topic?.keypoints?.map((keypoint, kpIndex) => (
                                    <ul key={kpIndex} dangerouslySetInnerHTML={{ __html: keypoint }} />
                                ))}
                            </div>
                        ))}
                        <p>{blog?.conclusion}</p>
                    </div>
                    <Reply />
                </div>
            </div>
        </div>
    );
};

const BlogPost = () => {
    const { index } = useParams();
    const blog = BlogContent[index];

    if (!blog) {
        return <div>Blog post not found</div>;
    }

    let currentBlog;
    if (index === "0") {
        currentBlog = <Blog1 blog={blog} />;
    } else if (index === "1") {
        currentBlog = <Blog2 blog={blog} />;
    } else if (index === "2") {
        currentBlog = <Blog3 blog={blog} />;
    }
    return currentBlog;
};


export default BlogPost;
