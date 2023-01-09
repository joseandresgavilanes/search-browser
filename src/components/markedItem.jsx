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
    <div href="#" onClick={handleClick}>
      {left}
      <div>{center}</div>
      {right}
    </div>
  );
};

export default MarkedItem;
