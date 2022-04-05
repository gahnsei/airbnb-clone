import gridPhotos from "../Group77.png";
const Header = () => {
  return (
    <section className="header">
      <img src={gridPhotos} alt="grid" className="header-grid" />
      <h1 className="header-title">Online Experience</h1>
      <p className="header-paragraph">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};

export default Header;
