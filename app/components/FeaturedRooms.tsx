import { RoomsProps } from '../types';
import Room from './Room';

const FeaturedRooms = ({ rooms }: RoomsProps) => {
  const featuredRooms = rooms.filter((room) => room.featured);

  return (
    <section className='featured-rooms'>
      <div className='featured-rooms-center'>
        {featuredRooms.map((room) => {
          return <Room key={room._id} room={room} />;
        })}
      </div>
    </section>
  );
};

export default FeaturedRooms;
