import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://images.pexels.com/photos/8583757/pexels-photo-8583757.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="fpImg"
        />
        <span className="fpName">ApartHotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.pexels.com/photos/12715585/pexels-photo-12715585.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="fpImg"
        />
        <span className="fpName">ApartHotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.pexels.com/photos/8089185/pexels-photo-8089185.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="fpImg"
        />
        <span className="fpName">ApartHotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.pexels.com/photos/7587828/pexels-photo-7587828.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="fpImg"
        />
        <span className="fpName">ApartHotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
