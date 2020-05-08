import { isSunday, isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday, getMonth, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

export const getDayOfWeekName = (date) => {

    if (isSunday(date)) return 'Sunday';
    else if (isMonday(date)) return 'Monday';
    else if (isTuesday(date)) return 'Tuesday';
    else if (isWednesday(date)) return 'Wednesday';
    else if (isThursday(date)) return 'Thursday';
    else if (isFriday(date)) return 'Friday';
    else if (isSaturday(date)) return 'Saturday';
    
    return '';
}

export const getDayOfWeekShortName = (date) => {
    if (isSunday(date)) return 'SUN';
    else if (isMonday(date)) return 'MON';
    else if (isTuesday(date)) return 'TUES';
    else if (isWednesday(date)) return 'WED';
    else if (isThursday(date)) return 'THURS';
    else if (isFriday(date)) return 'FRI';
    else if (isSaturday(date)) return 'SAT';
    
    return '';
}

export const getMonthName = (date) => {
    let val = getMonth(date);

    if (val === 0) return 'Janurary';
    else if (val === 1) return 'Feburary';
    else if (val === 2) return 'March';
    else if (val === 3) return 'April';
    else if (val === 4) return 'May';
    else if (val === 5) return 'June';
    else if (val === 6) return 'July';
    else if (val === 7) return 'August';
    else if (val === 8) return 'September';
    else if (val === 9) return 'October';
    else if (val === 10) return 'November';
    else if (val === 11) return 'December';
    
    return '';
}

export const getAllDaysInMonth = (date) => {
    let startDate = startOfMonth(date);
    let endDate = endOfMonth(date);

    return eachDayOfInterval({ start: startDate, end: endDate });
}

export const addComma = (value) => {
    return value.toLocaleString('en', {
        minimumFractionDigits: 2
    });
}