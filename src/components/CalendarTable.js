import React from "react";

const getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDay = (month, year) => {
  return new Date(year, month, 1).getDay();
};

const CalendarTable = ({ month, year }) => {
  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDay(month, year);
  const weeks = [];
  let currentDay = 1 - firstDay;

  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      week.push(currentDay > 0 && currentDay <= daysInMonth ? currentDay : '');
      currentDay++;
    }
    weeks.push(week);
  }

  return (
    <table id="days-table" border="1">
      <thead>
        <tr>
          {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((day, idx) => (
            <th key={idx}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, i) => (
          <tr key={i}>
            {week.map((day, j) => (
              <td key={j}>{day}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CalendarTable;
