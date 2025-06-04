import React, { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import Controls from './Controls';
import CalendarTable from './CalendarTable';

function App() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <div>
      <CalendarHeader />
      <Controls month={month} setMonth={setMonth} year={year} setYear={setYear} />
      <CalendarTable month={month} year={year} />
    </div>
  );
}


export default App;
