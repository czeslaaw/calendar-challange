const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export function formatDate(date) {
    return `${date.getDate()} ${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;
}

export function formatMonth(date) {
    return `${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;
}

export function startOfDay(date) {
    date = new Date(date);
    date.setHours(0, 0, 0, 0);

    return date;
}

export function startOfMonth(date) {
    date = startOfDay(date);
    date.setDate(1);

    return date;
}

export function isSameMonth(date1, date2) {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth()
    )
}

export function isBetweenDates(date, from, to) {
    return date && from && to && date > from && date <= to;
}

export function getDateString(date) {
    return date.toJSON().split('T')[0];
}

export function nextMonth(date) {
    date = new Date(date);
    return new Date(date.setMonth(date.getMonth() + 1))
}

export function previousMonth(date) {
    date = new Date(date);
    return new Date(date.setMonth(date.getMonth() - 1))
}

function nextDay(date) {
    date = new Date(date);
    return new Date(date.setDate(date.getDate() + 1))
}

function previousDay(date) {
    date = new Date(date);
    return new Date(date.setDate(date.getDate() - 1))
}

export function getMonthDays(date) {
    const startDate = startOfMonth(date);
    startDate.setDate(1);
    const endDate = previousDay(nextMonth(startDate));
    const days = [];
    let currentDate = getFirstWeekDay(date);

    while (currentDate <= endDate) {
        days.push(currentDate);

        currentDate = nextDay(currentDate);
    }

    return days;
}

export function getFirstWeekDay(date) {
    date = new Date(date);
    date.setDate(date.getDate() - date.getDay());

    return date;
}