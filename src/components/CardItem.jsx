const CardItem = (props) => {
  const { image, stats, location, title, price, openSpots } = props;
  let badgeText;
  if (openSpots === 0) {
    badgeText = `SOLD OUT`;
  } else if (location === "Online") {
    badgeText = `ONLINE`;
  }
  return (
    <div className="card-item">
      {badgeText && <span className="card-sold-out">{badgeText}</span>}
      <img src={image} alt="" className="card-img" />
      <span className="card-rating">
        <i class="fa-solid fa-star"></i>
        {stats.rating} ({stats.reviewCount}) | {location}
      </span>
      <span>{title}</span>
      <span>
        <b>From ${price}</b> / person
      </span>
    </div>
  );
};

export default CardItem;
