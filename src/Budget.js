import React from 'react';
import Calendar from './Calendar';
import { getMonthName } from './DateFunctions'
import { getYear, getDate, isBefore, isSameDay } from 'date-fns';

class Budget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            budget: 500.05,
            selectedDate: Date.now(),
            dates: [
                {date: new Date(2020, 2, 25),
                 increases: [{description: "Add Money 1", value: 100}, {description: "Add Money 2", value: 200.5}],
                 decreases: [{description: "Pay Money 1", value: 20}]
                },
                {date: new Date(2020, 4, 1),
                 increases: [{description: "Add Money 1", value: 300}],
                 decreases: [{description: "Pay Money 1", value: 500}]
                }
            ]
        };

        this.addDate = this.addDate.bind(this);
        this.getBudgetAmountOnCurrentDate = this.getBudgetAmountOnCurrentDate.bind(this);
        this.changeSelectedDate = this.changeSelectedDate.bind(this);
    }

    addDate() {
        this.setState((state, props) => ({
            dates: [...this.state.dates, {date: 3, increases: [100], decreases: [50], value: 1000}],
        }));
    }

    addDate2 = (date) => {
        this.setState((state, props) => ({
            dates: [...this.state.dates, date]
        }));
    }

    changeSelectedDate(date) {
        this.setState((state, props) => ({
            selectedDate: date
        }));
    }

    getBudgetAmountOnCurrentDate() {
        let amount = this.state.budget;

        var i;
        for (i = 0; i < this.state.dates.length; i++) {
            let indexDate = this.state.dates[i];

            if (isBefore(indexDate.date, this.state.selectedDate) || isSameDay(indexDate.date, this.state.selectedDate)) {
                var j;
                for (j = 0; j < indexDate.increases.length; j++) {
                    amount += indexDate.increases[j].value;
                }
                for (j = 0; j < indexDate.decreases.length; j++) {
                    amount -= indexDate.decreases[j].value;
                }
            }
        }

        return amount;
    }

    render() {
        return (
            <>
                <p>
                    Selected Date: {getMonthName(this.state.selectedDate)} {getDate(this.state.selectedDate)}, {getYear(this.state.selectedDate)}
                    <br/>
                    Budget: {this.getBudgetAmountOnCurrentDate()}
                </p>
                <button onClick={this.addDate}>Click</button>
                <Calendar budget={this.state.budget} changeSelectedDate={this.changeSelectedDate} dates={this.state.dates} addDate={this.addDate2} ref="calendar" />
            </>
        );
    };
}

export default Budget;