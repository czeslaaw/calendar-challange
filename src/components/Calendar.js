import React, { useState, useMemo } from 'react';
import {
    formatMonth,
    getMonthDays,
    getDateString,
    startOfMonth,
    nextMonth,
    previousMonth,
    isSameMonth, isBetweenDates,
} from '../utils/dateUtils';
import { chunk } from '../utils/utils';

import './Calendar.css';

export function Calendar({ availableDates, onSelectCheckInDate, onSelectCheckOutDate }) {
    const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));
    const [selectedDay, setSelectedDay] = useState(null);
    const [hoverDay, setHoverDay] = useState(null);

    const rows = useMemo(
        () => chunk(getMonthDays(currentMonth), 7),
        [currentMonth]
    );

    function setPreviousMonth() {
        setCurrentMonth(previousMonth(currentMonth));
    }

    function setNextMonth() {
        setCurrentMonth(nextMonth(currentMonth));
    }

    function selectDay(day) {
        if (selectedDay) {
            onSelectCheckOutDate(day);
        } else {
            setSelectedDay(day);
            onSelectCheckInDate(day);
        }
    }

    function checkAvailability(day) {
        return availableDates.has(getDateString(day));
    }

    function renderDays() {
        return rows.map((row) => {
            const rowIndex = row[0].valueOf();

            return (
                <tr key={rowIndex}>
                    {renderDayRow(row)}
                </tr>
            );
        });
    }

    function renderDayRow(row) {
        return row.map((day) => {
            const isInMonth = isSameMonth(day, currentMonth);
            const isAvailable = day ? checkAvailability(day) : false;

            const events = isAvailable ? {
                onClick: () => selectDay(day),
                onMouseEnter: () => setHoverDay(day),
                onMouseLeave: () => setHoverDay(null),
            } : {};

            return (
                <td className={getDayClassName(day, isAvailable, isInMonth)}
                    key={day.valueOf()}
                    {...events}>
                    {isInMonth && day.getDate()}
                </td>
            );
        });
    }

    function getDayClassName(day, isAvailable, isInMonth) {
        const classNames = ['calendar__day'];

        if (!isInMonth) {
            classNames.push('calendar__day--empty');
        }

        if (!isAvailable) {
            classNames.push('calendar__day--unavailable');
        }

        if (selectedDay && day.valueOf() === selectedDay.valueOf()) {
            classNames.push('calendar__day--selected');
        }

        if (isBetweenDates(day, selectedDay, hoverDay)) {
            classNames.push('calendar__day--hover')
        }

        return classNames.join(' ');
    }

    return (
        <div className="calendar">
            <div className="calendar__control-container">
                <button
                    className="calendar__previous-month"
                    onClick={setPreviousMonth}>
                    ←
                </button>
                <div className="calendar__current-month">
                    {formatMonth(currentMonth)}
                </div>
                <button
                    className="calendar__next-month"
                    onClick={setNextMonth}>
                    →
                </button>
            </div>
            <table className="calendar__days">
                <thead>
                    <tr>
                        <th>Su</th>
                        <th>Mo</th>
                        <th>Tu</th>
                        <th>We</th>
                        <th>Th</th>
                        <th>Fr</th>
                        <th>Sa</th>
                    </tr>
                </thead>
                <tbody>
                    {renderDays()}
                </tbody>
            </table>
        </div>
    );
}

