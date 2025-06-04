import React, { useState } from 'react';

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const Controls = ({ month, setMonth, year, setYear }) => {
  const [editing, setEditing] = useState(false);
  const [tempYear, setTempYear] = useState(year);

  const changeMonth = (direction) => {
    let newMonth = month + direction;
    let newYear = year;

    if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    } else if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    }

    setMonth(newMonth);
    setYear(newYear);
  };

  const changeYear = (direction) => setYear(prev => prev + direction);

  return (
    <div>
      <select id="month-select" value={month} onChange={(e) => setMonth(Number(e.target.value))}>
        {monthNames.map((m, index) => (
          <option key={index} value={index}>{m}</option>
        ))}
      </select>

      {editing ? (
        <input
          id="year-input"
          type="number"
          value={tempYear}
          onChange={(e) => setTempYear(Number(e.target.value))}
          onBlur={() => { setYear(tempYear); setEditing(false); }}
          autoFocus
        />
      ) : (
        <span
          id="year-text"
          onDoubleClick={() => {
            setTempYear(year);
            setEditing(true);
          }}
        >
          {year}
        </span>
      )}

      <div>
        <button id="prev-month-btn" onClick={() => changeMonth(-1)}>&lt; </button>
        <button id="next-month-btn" onClick={() => changeMonth(1)}> &gt;</button>
        <button id="prev-year-btn" onClick={() => changeYear(-1)}>&lt;&lt; </button>
        <button id="next-year-btn" onClick={() => changeYear(1)}> &gt;&gt;</button>
      </div>
    </div>
  );
};

export default Controls;
