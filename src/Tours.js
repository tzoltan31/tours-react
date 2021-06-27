import React from "react";
import { useState } from "react";

const Tours = ({ id, name, info, image, price, handleDelete }) => {
  const longInfo = info;
  const shortInfo = info.slice(0, 300);
  const [isLong, setIsLong] = useState(false);

  const handleToggle = () => {
    setIsLong(!isLong);
  };

  return (
    <article className="tour">
      <div className="tour__top">
        <img src={image} />
      </div>
      <div className="tour__bottom">
        <div className="tour__bottom_title">
          <h4 className="tour__bottom_name">{name}</h4>
          <h4 className="tour__bottom_price">${price}</h4>
        </div>
        <p>
          {isLong ? longInfo : shortInfo + "..."}
          <button className="toggle-info" onClick={handleToggle}>
            {isLong ? "Show less" : "Read more"}
          </button>
        </p>
        <button className="tour__bottom_btn" onClick={() => handleDelete(id)}>
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tours;
