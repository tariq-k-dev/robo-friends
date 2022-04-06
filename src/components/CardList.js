import Card from './Card';
import './CardList.scss';

const CardList = ({ robots }) => {
  const cardComponents = robots.map(({ id, name, imgUrl, email }, i) => {
    return <Card id={i} name={name} imgUrl={imgUrl} email={email} key={id} />;
  });

  return <section className='cards'>{cardComponents}</section>;
};

export default CardList;
