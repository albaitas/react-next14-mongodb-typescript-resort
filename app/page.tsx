import Hero from './components/Hero';
import Banner from './components/Banner';
import Services from './components/Services';
import FeaturedRooms from './components/FeaturedRooms';
import Link from 'next/link';
import { fetchRooms } from './lib/fetchRooms';

const Home = async () => {
  const rooms = await fetchRooms();

  return (
    <>
      <Hero hero='roomsHero'>
        <Banner title='luxurious rooms' subtitle='deluxe rooms starting at 299 Eur'>
          <Link href='/rooms' className='btn-primary'>
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms rooms={rooms} />
    </>
  );
};

export default Home;
