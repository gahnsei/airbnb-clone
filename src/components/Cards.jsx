import CardItem from "./CardItem";
import data from "../db.json";
const Cards = () => {
  return (
    <section className="card-container">
      {data.map((ele) => (
        <CardItem key={ele.id} {...ele} />
      ))}
    </section>
  );
};

export default Cards;
