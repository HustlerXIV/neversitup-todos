"use client";

import React, { useState } from "react";
import "./component.css";

interface CalendarProps {}

const Calendar: React.FC<CalendarProps> = () => {
  const [activeDay, setActiveDay] = useState<number | null>(
    new Date().getDay()
  );

  const getDateForDay = (day: number): number => {
    const currentDate = new Date();
    const daysToAdd = (day - currentDate.getDay() + 7) % 7;
    const targetDate = new Date(currentDate);
    targetDate.setDate(currentDate.getDate() + daysToAdd);
    return targetDate.getDate();
  };

  const handleDayClick = (day: number) => {
    setActiveDay(day);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="p-2">
        <div className="calendar-container flex bg-white shadow-md justify-start md:justify-center rounded-lg overflow-x-scroll mx-auto py-4 px-2 md:mx-12">
          {[0, 1, 2, 3, 4, 5, 6].map((day) => {
            const isActiveDate = activeDay === day;

            return (
              <div
                key={day}
                className={`flex group ${
                  isActiveDate
                    ? "bg-purple-300 shadow-lg light-shadow"
                    : "hover:bg-purple-100 hover:shadow-lg hover-light-shadow"
                } rounded-lg mx-1 cursor-pointer justify-center relative w-16 content-center sm:w-20 md:w-24 lg:w-28`}
                onClick={() => handleDayClick(day)}
              >
                {isActiveDate && (
                  <span className="flex h-3 w-3 absolute -top-1 -right-1">
                    <span className="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-purple-400 "></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                  </span>
                )}
                <div className="flex items-center px-4 py-4">
                  <div className="text-center">
                    <p
                      className={`text-${
                        isActiveDate ? "purple-900" : "gray-900"
                      } text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300`}
                    >
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][day]}{" "}
                    </p>
                    <p
                      className={`text-${
                        isActiveDate ? "purple-900" : "gray-900"
                      } mt-3 font-bold transition-all duration-300`}
                    >
                      {getDateForDay(day)}{" "}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
