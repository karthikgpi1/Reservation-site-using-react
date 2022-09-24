import "./list.css";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";

import { useLocation } from "react-router-dom";

import { useState } from "react";
import { format } from "date-fns/esm";
import { DateRange } from "react-date-range";
// import { faListSquares } from "@fortawesome/free-solid-svg-icons";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  console.log(location);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="isTitle">Search</h1>
            <div className="isItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="isItem">
              <label>Check-in-Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="isItem">
              <label>Options</label>
              <div className="isOptions">
                <div className="isOptionItem">
                  <span className="isOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="isOptionInput" />
                </div>
                <div className="isOptionItem">
                  <span className="isOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="isOptionInput" />
                </div>
                <div className="isOptionItem">
                  <span className="isOptionText">Adult</span>
                  <input
                    min={1}
                    type="number"
                    className="isOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="isOptionItem">
                  <span className="isOptionText">Children</span>
                  <input
                    min={0}
                    type="number"
                    className="isOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="isOptionItem">
                  <span className="isOptionText">Room </span>
                  <input
                    min={1}
                    type="number"
                    className="isOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};

export default List;
