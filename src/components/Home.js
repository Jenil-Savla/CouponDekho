import Carousel from 'react-bootstrap/Carousel';
import coupon from './images/coupon.png';
import Companies from './Companies';

const Home = () => {

  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: '400px'}}
          src='https://cdn.grabon.in/gograbon/images/banners/banner-1677829116699/Promo%20Code.jpg'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: '400px'}}
          src='https://cdn.grabon.in/gograbon/images/banners/banner-1677261622369/Discount%20Code.jpg'
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: '400px'}}
          src='https://cdn.grabon.in/gograbon/images/banners/banner-1659271006644/Discount%20Code.jpg'
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Companies/>
    </>
  );
}

export default Home;