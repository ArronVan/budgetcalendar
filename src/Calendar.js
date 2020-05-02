import React from 'react'
import { getAllDaysInMonth, getDayOfWeekName } from './DateFunctions'
import { FixedSizeList as List } from 'react-window'
import { getDate, isSameDay } from 'date-fns'

import './Calendar.css'

class Calendar extends React.Component {
    getBudgetValueOnDay(budget, additions, subtractions) {
        let value = budget;

        var i;
        for (i = 0; i < additions.length; i++)
            value += additions[i].value;
        for (i = 0; i < subtractions.length; i++)
            value -= subtractions[i].value;
        
        return value;
    }

    render() {
        let budget = this.props.budget;
        let allDaysInMonth = getAllDaysInMonth(this.props.selectedDate);

        return (
            <>
                <button onClick={() => this.props.changeSelectedDate(new Date(2020, 3, 1))}>Click2</button>
                <ul>
                    {this.props.dates.map((day, index) => {
                        return <li key={index}>
                            Date: {getDayOfWeekName(day.date)} - Budget: {budget = this.getBudgetValueOnDay(budget, day.increases, day.decreases)} - Additions:[{day.increases.map((inc) => {
                                return <>
                                    {inc.description}: {inc.value}&nbsp;
                                </>;
                            })}]
                            - Subtractions[{day.decreases.map((dec) => {
                                return <>
                                    {dec.description}: {dec.value}&nbsp;
                                </>
                            })}]
                        </li>
                    })}
                </ul>
                <List
                    height={500}
                    width={500}
                    itemSize={60}
                    itemCount={allDaysInMonth.length}
                >
                    {({ index, style }) => (
                        <div style={style}
                            onClick={() => this.props.changeSelectedDate(allDaysInMonth[index])}
                            className={isSameDay(allDaysInMonth[index], this.props.selectedDate) ? "CalendarListSelected" : "CalendarList"}>
                            {getDayOfWeekName(allDaysInMonth[index])} {getDate(allDaysInMonth[index])}: {this.props.getBudgetAmountOnDate(allDaysInMonth[index])}
                            &nbsp;Transactions: +{this.props.getAddTransactionsOnDate(allDaysInMonth[index]).length} -{this.props.getSubTransactionsOnDate(allDaysInMonth[index]).length}
                        </div>
                    )}
                </List>
            </>
        );
    }
}

export default Calendar;