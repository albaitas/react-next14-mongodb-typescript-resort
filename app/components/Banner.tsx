import { BannerProps } from '../types';

const Banner = ({ children, title, subtitle }: BannerProps) => {
  return (
    <div className='banner'>
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;