import { EnvelopeFill, GeoAltFill } from 'react-bootstrap-icons'
import logo from '../assets/Logo-fav.png'
import { Link } from 'react-router-dom'
import BlogContent from '../content/Blog';
import { MdCalendarMonth } from "react-icons/md";


export default function Footer() {

  const sortedBlogContent = BlogContent.sort((a, b) => {
    const dateA = new Date(a.createdAt.split('/').reverse().join('-'));
    const dateB = new Date(b.createdAt.split('/').reverse().join('-'));

    return dateB - dateA; // Sort descending
  });

  const Post = sortedBlogContent.slice(0, 2);

  const formatDate = (dateStr) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const date = new Date(dateStr.split('/').reverse().join('-'));
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <footer >
      <div className='container py-3'>
        <div className='d-flex align-items-center'>
          <img src={logo} alt="logo" width="60px" />
          <b className='footer-title'>CuMinds</b>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <b className='footer-subtitle'>Contact </b>
            {/* <p className='footer-description'><GeoAltFill /> Covai Tech Park, 4th South Cross Street, Kovai Thirunagar, Nehru Nagar East, Coimbatore, Tamil Nadu 641014.</p> */}
            <p className='footer-description pt-2 '><EnvelopeFill /> support@cumindsin.com</p>
          </div>
          <div className='col-md-4'>
            <b className='footer-subtitle '>News & Blog </b>
            {Post.map((blog, index) => (
              <ul key={index} className='pt-2'>
                <Link to='/blog' className='text-decoration-none'>
                  <li className='footer-description'>
                    <span className='fw-bold'>{blog.maintitle}</span>
                    <p> <MdCalendarMonth className='me-2' />{formatDate(blog.createdAt)}</p>
                  </li>
                </Link>
              </ul>
            ))}
          </div>
          <div className='col-md-4'>
            <b className='footer-subtitle ms-3'>Policy </b>
            <ul className='d-flex gap-2 flex-column pt-2'>
              <Link to='/privacy' className='text-decoration-none '>
                <li className='footer-description'>Terms of Service</li>
              </Link>
              <Link to='/terms' className='text-decoration-none'>
                <li className='footer-description'>Privacy policy</li>
              </Link>
              <Link to='/terms' className='text-decoration-none'>
                <li className='footer-description'>Refund policy</li>
              </Link>
              <Link to='/terms' className='text-decoration-none'>
                <li className='footer-description'>Services & Pricing policy</li>
              </Link>
            </ul>
          </div>
        </div>


      </div>
    </footer>
  )
}
