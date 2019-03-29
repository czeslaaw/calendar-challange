import { getFirstWeekDay, getMonthDays } from './dateUtils';

describe('getMonthDays', () => {
    test('should get all days in month and days from week preceding if there is overlap', () => {
        const days = getMonthDays('2019-05-01');
        expect(days.length).toBe(34);
    });

    test('should get all days in month when month starts on Sunday', () => {
        const days = getMonthDays('2019-09-01');
        expect(days.length).toBe(30);
    });

    test('should get all days in month in January', () => {
        const days = getMonthDays('2019-01-01');
        expect(days.length).toBe(33);
    });
});

describe('getFirstWeekDay', () => {
    test('should return Sunday when it happens on the same month', () => {
        expect(getFirstWeekDay(new Date('2019-09-01')).toJSON())
            .toBe(new Date('2019-09-01').toJSON())
    });

    test('should return Sunday when it happens on different month', () => {
        expect(getFirstWeekDay(new Date('2019-05-01')).toJSON())
            .toBe(new Date('2019-04-28').toJSON())
    });
});