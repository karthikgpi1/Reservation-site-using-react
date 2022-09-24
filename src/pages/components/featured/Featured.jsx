import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/1302991/pexels-photo-1302991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dubai</h1>
          <h2>320 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/1450340/pexels-photo-1450340.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Maldives</h1>
          <h2>234 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/5733079/pexels-photo-5733079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Delhi</h1>
          <h2>123 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
