import "./hotel.css";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MailList from "../components/mailList/MailList";
import Footer from "../components/footer/Footer";
import { useState } from "react";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1643384.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571453.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/261045/pexels-photo-261045.jpeg?cs=srgb&dl=pexels-pixabay-261045.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?cs=srgb&dl=pexels-christa-grover-1910472.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?cs=srgb&dl=pexels-pixabay-259580.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/6207819/pexels-photo-6207819.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6207819.jpg&fm=jpg",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>103 west Oxford USA</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotetPriceHighLight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div key={i} className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Sandaway Suites & Beach</h1>
              <p className="hotelDesc">
                It features a private beach area with relaxing chairs. The
                Oxford-Bellevue Ferry is 1 minutes drive away. Each room at the
                Sandaway Suites & Beach features water views and free Wi-Fi. A
                small seating area is included in each of the uniquely styled
                waterfront rooms. Kayaks and bicycles are available for hire.
                Bike the 40.7 km Easton Bike Loop, which begins just 6.4 km from
                the Sandaway. Shopping and dining in the town of Oxford or Saint
                Michaels which is 11.3 km away by car ferry. Couples in
                particular like the location ??? they rated it 9.8 for a
                two-person trip.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the Oxford, this property has an excellent location
                score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
