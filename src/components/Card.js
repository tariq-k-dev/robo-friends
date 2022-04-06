import './Card.scss';

const Card = ({ name, imgUrl, email }) => {
  return (
    <div className='card br3 pa3 tc grow'>
      <img src={imgUrl} alt={`Robot ${name}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
