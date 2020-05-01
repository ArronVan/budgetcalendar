import React from 'react';
import { getAllDaysInMonth, getDayOfWeekName } from './DateFunctions'

class Calendar extends React.Component {
    constructor(props) {
        super(props);

        console.log(getAllDaysInMonth(Date.now()));
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.props.changeSelectedDate(new Date(2020, 3, 1));
    }

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
        return (
            <>
                <button onClick={this.onClick}>Click2</button>
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
            </>
        );
    }
}

export default Calendar;