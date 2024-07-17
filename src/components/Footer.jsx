import { EnvelopeFill, GeoAltFill } from 'react-bootstrap-icons'
import logo from '../assets/Logo-fav.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer >
      <div className='container py-3'>
        <div className='d-flex align-items-center'>
          <img src={logo} alt="logo" width="60px" />
          <b className='footer-title'>CuMinds</b>
        </div>
        <div className='row'>
          <div className='col-md-6'>
          <b className='footer-subtitle'>Contact </b>
          <p className='footer-description'><GeoAltFill/> Covai Tech Park, 4th South Cross Street, Kovai Thirunagar, Nehru Nagar East, Coimbatore, Tamil Nadu 641014.</p>
          <p className='footer-description'><EnvelopeFill/> support@cumindsin.com</p>
          </div>
          <div className='col-md-4'>
          <b className='footer-subtitle'>Pages </b>
          <Link to='/aboutUs' className='text-decoration-none'><div className='footer-description'>About</div></Link>
          <Link to='/' className='text-decoration-none'><div className='footer-description'>Learn & Grow</div></Link>
          <Link to='/service' className='text-decoration-none'><div className='footer-description'>Services</div></Link>
          <Link to='/blog' className='text-decoration-none'> <div className='footer-description'>Knowledge Hub</div></Link>

          </div>
        </div>
        

      </div>
    </footer>
  )
}
