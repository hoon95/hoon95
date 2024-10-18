import React, { useState, useEffect } from 'react';
import "./SearchBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
  const [isCursorVisible, setCursorVisible] = useState(true);

  // 커서 깜빡임 효과
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="input_group">
      <span className="search_icon">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>
      <input
        type="text"
        value={isCursorVisible ? '|' : ''}
      />
    </div>
  );
}

export default SearchBar;
