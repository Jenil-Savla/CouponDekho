import Carousel from 'react-bootstrap/Carousel';
import coupon from './images/coupon.png';
import Companies from './Companies';

const Home = () => {

  const carouselStyle = {marginLeft: 70, marginRight: 70, marginTop: 10}
  return (
    <>
    <Carousel style={carouselStyle}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: '400px'}}
          src='https://cdn.grabon.in/gograbon/images/banners/banner-1677829116699/Promo%20Code.jpg'
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: '400px'}}
          src='https://cdn.grabon.in/gograbon/images/banners/banner-1677261622369/Discount%20Code.jpg'
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: '400px'}}
          src='https://cdn.grabon.in/gograbon/images/banners/banner-1659271006644/Discount%20Code.jpg'
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <Companies/>
    </>
  );
}

export default Home;