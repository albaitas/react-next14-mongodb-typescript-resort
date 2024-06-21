import { TitleProps } from '../types';

const Title = ({ title }: TitleProps) => {
  return (
    <div className='section-title'>
      <h4>{title}</h4>
      <div />
    </div>
  );
};

export default Title;