import "./card-container.styles.css";

const CardContainer = (props) => {
  const { id, name, email } = props.monster;

  return (
    <div key={id} className="card-container">
      <img src={`https://robohash.org/${id}?set=set3&size=200x200`} alt="" />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default CardContainer;
