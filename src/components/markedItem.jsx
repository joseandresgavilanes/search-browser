import React from "react";
import { useMemo } from "react";
import "../styles/Results.css";

const MarkedItem = ({ item, onClick, query }) => {
  const { left, center, right } = useMemo(
    () => getPositions(item, query),
    [item, query]
  );

  function getPositions(item, query) {
    const index = item.title.toLowerCase().indexOf(query);
    const left = item.title.slice(0, index);
    const center = item.title.slice(index, index + query.length);
    const right = item.title.slice(index + query.length);

    return {
      left,
      center,
      right,
    };
  }

  function handleClick(e) {
    onClick(item);
  }

  return (
    <div className="result_container">
      <div className="result_container_more">
        https://krugercorp.com/
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
      <div className="result_container_result" href="#" onClick={handleClick}>
        {item.title}
      </div>
      <p className="result_container_text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloremque,
        ad ex cum tempora accusantium facere! Dolorem hic alias placeat!
      </p>
    </div>
  );
};

export default MarkedItem;
