import Link from 'next/link';
import Image from 'next/image';
import { RoomProps } from '../types';

const Room = ({ room }: RoomProps) => {
  return (
    <article className='room'>
      <div className='img-container'>
        <Image src={room.img} alt='room' width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto' }} />
        <div className='price-top'>
          <h6>Eur{room.price}</h6>
          <p>per night</p>
        </div>
        <Link href={`/rooms/${room.slug}`} className='btn-primary room-link'>
          Features
        </Link>
      </div>
      <p className='room-info'>{room.name}</p>
    </article>
  );
};

export default Room;
