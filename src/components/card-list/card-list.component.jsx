import CardContainer from "./card-container/card-container.component";
import "./card-list.styles.css";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => {
        return <CardContainer key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
