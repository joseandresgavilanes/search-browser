import React from "react";
import { useMemo } from "react";

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
        <div className="result_container_more_link">
          https://krugercorp.com/
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
      <div className="result_container_result" href="#" onClick={handleClick}>
        {left}
        <div>{center}</div>
        {right}
      </div>
      <p className="result_container_text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloremque,
        ad ex cum tempora accusantium facere! Dolorem hic alias placeat!
      </p>
    </div>
  );
};

export default MarkedItem;
