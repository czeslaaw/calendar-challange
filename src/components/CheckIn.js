import React, { useState } from 'react';
import { Calendar } from './Calendar';

import './CheckIn.css';
import { formatDate } from '../utils/dateUtils';

export function CheckIn({ price, rating, reviewsCount, availableDates }) {
    const [showCalendar, setShowCalendar] = useState(false);
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    function onSelectCheckOutDate(date) {
        setCheckOutDate(date);
        setShowCalendar(false);
    }

    return (
        <div className="check-in">
            <div className="check-in__price-container">
                <div className="check-in__price">
                    {price} zł
                </div>
                <div className="check-in__per-night">
                    per night
                </div>
            </div>
            <div className="check-in__rating-container">
                <div className="check-in__stars">
                    ★★★★☆
                </div>
                <div className="check-in__reviews-count">
                    {reviewsCount}
                </div>
            </div>
            <div className="check-in__dates">
                Dates
            </div>
            <div className="check-in__controls-container">
                <button
                    className="check-in__check-in"
                    onClick={() => setShowCalendar(isOpen => !isOpen)}>
                    Check In
                </button>
                <div className="check-in__arrow">
                    →
                </div>
                <button
                    className="check-in__check-out"
                    disabled={true}>
                    Check Out
                </button>
            </div>
            {showCalendar &&
            <Calendar availableDates={availableDates}
                      onSelectCheckInDate={setCheckInDate}
                      onSelectCheckOutDate={onSelectCheckOutDate} />}
            <div className="check-in__dates-container">
                <div className="check-in__check-in-date">
                    {checkInDate && formatDate(checkInDate)}
                </div>
                <div className="check-in__check-out-date">
                    {checkOutDate && formatDate(checkOutDate)}
                </div>
            </div>
        </div>
    );
}