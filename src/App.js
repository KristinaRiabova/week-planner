import React, { useState } from 'react';
import './App.css';
import Week from './Week';
import DayExpanded from './DayExpanded';

function App() {
  const [selectedDay, setSelectedDay] = useState(null);

  const [weekDays, setWeekDays] = useState ([
    {
      date: "Monday",
      tasks: [
        {
          title: "Task 1",
          description: "Description for Task 1",
          startTime: "10:00 AM",
          endTime: "11:30 AM",
        },
        {
          title: "Task 2",
          description: "Description for Task 2",
          startTime: "2:00 PM",
          endTime: "3:30 PM",
        },
      ],
    },
    {
      date: "Tuesday",
      tasks: [
        {
          title: "Task 3",
          description: "Description for Task 3",
          startTime: "9:00 AM",
          endTime: "10:30 AM",
        },
      ],
    },
    {
      date: "Wednesday",
      tasks: [
        {
          title: "Task 4",
          description: "Description for Task 4",
          startTime: "1:00 PM",
          endTime: "2:30 PM",
        },
        {
          title: "Task 5",
          description: "Description for Task 5",
          startTime: "3:00 PM",
          endTime: "4:30 PM",
        },
      ],
    },
    {
      date: "Thursday",
      tasks: [
        {
          title: "Task 6",
          description: "Description for Task 6",
          startTime: "11:00 AM",
          endTime: "12:30 PM",
        },
      ],
    },
    {
      date: "Friday",
      tasks: [
        {
          title: "Task 7",
          description: "Description for Task 7",
          startTime: "10:00 AM",
          endTime: "11:30 AM",
        },
        {
          title: "Task 8",
          description: "Description for Task 8",
          startTime: "2:00 PM",
          endTime: "3:30 PM",
        },
      ],
    },
    {
      date: "Saturday",
      tasks: [],
    },
    {
      date: "Sunday",
      tasks: [],
    },
  ]);
  

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const addTask = (day, newTask) => {
   
    const updatedDay = { ...day };

    updatedDay.tasks.push(newTask);

    const updatedWeekDays = [...weekDays];

    const dayIndex = updatedWeekDays.findIndex((d) => d.date === updatedDay.date);

    if (dayIndex !== -1) {
      
      updatedWeekDays[dayIndex] = updatedDay;

      setWeekDays(updatedWeekDays);
    }
  };
  
  const removeTask = (day, index) => {
    const updatedDay = { ...day };
    updatedDay.tasks.splice(index, 1);
    const dayIndex = weekDays.findIndex((d) => d.date === updatedDay.date);
  
    if (dayIndex !== -1) {
      const updatedWeekDays = [...weekDays];
  
      updatedWeekDays[dayIndex] = updatedDay;
      setWeekDays(updatedWeekDays);
    }
  };
  

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Week
              days={weekDays}
              onDayClick={handleDayClick}
              activeDay={selectedDay}
              onAddTask={addTask}
              onRemoveTask={removeTask}
            />
          </div>
          <div className="col-md-9">
            <h1 className="mt-4">Planner</h1>
            <p className="mt-4">Click on the day to see details</p>
            <p className="mt-4">You can add a task if the entire form is filled out.</p>
            {selectedDay && (
              <DayExpanded day={selectedDay} onAddTask={addTask} onRemoveTask={removeTask} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;