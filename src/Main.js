import React from 'react';
import Calendar from './Calendar';
import { getMonthName } from './DateFunctions'
import { getYear, getDate, isBefore, isSameDay } from 'date-fns';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            budget: 500,
            selectedDate: Date.now(),
            dates: [
                {date: new Date(2020, 3, 19),
                 increases: [{description: "Add Money 1", value: 100}, {description: "Add Money 2", value: 200.5}],
                 decreases: [{description: "Pay Money 1", value: 20.3}]
                },
                {date: new Date(2020, 4, 11),
                 increases: [{description: "Add Money 1", value: 300.02}],
                 decreases: [{description: "Pay Money 1", value: 500}]
                }
            ]
        };

        this.addDate = this.addDate.bind(this);
        this.getBudgetAmountOnDate = this.getBudgetAmountOnDate.bind(this);
        this.changeSelectedDate = this.changeSelectedDate.bind(this);
        this.getAddTransactionsOnDate = this.getAddTransactionsOnDate.bind(this);
        this.getSubTransactionsOnDate = this.getSubTransactionsOnDate.bind(this);
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

    getBudgetAmountOnDate(date) {
        let amount = this.state.budget;

        var i;
        for (i = 0; i < this.state.dates.length; i++) {
            let indexDate = this.state.dates[i];

            if (isBefore(indexDate.date, date) || isSameDay(indexDate.date, date)) {
                var j;
                for (j = 0; j < indexDate.increases.length; j++) {
                    amount += indexDate.increases[j].value;
                }
                for (j = 0; j < indexDate.decreases.length; j++) {
                    amount -= indexDate.decreases[j].value;
                }
            }
        }

        return amount.toFixed(2);
    }

    getAddTransactionsOnDate(date) {
        for (var i = 0; i < this.state.dates.length; i++)
            if (isSameDay(date, this.state.dates[i].date))
                return this.state.dates[i].increases;
        
        return [];
    }

    getSubTransactionsOnDate(date) {
        for (var i = 0; i < this.state.dates.length; i++)
            if (isSameDay(date, this.state.dates[i].date))
                return this.state.dates[i].decreases;
        
        return [];
    }

    render() {
        return (
            <>
                <p>
                    Selected Date: {getMonthName(this.state.selectedDate)} {getDate(this.state.selectedDate)}, {getYear(this.state.selectedDate)}
                    <br/>
                    Budget: {this.getBudgetAmountOnDate(this.state.selectedDate)}
                </p>
                <button onClick={this.addDate}>Click</button>
                <Calendar
                    budget={this.state.budget}
                    selectedDate={this.state.selectedDate}
                    changeSelectedDate={this.changeSelectedDate}
                    getBudgetAmountOnDate={this.getBudgetAmountOnDate}
                    getAddTransactionsOnDate={this.getAddTransactionsOnDate}
                    getSubTransactionsOnDate={this.getSubTransactionsOnDate}
                    dates={this.state.dates}
                    addDate={this.addDate2}
                    ref="calendar"
                />
            </>
        );
    };
}

export default Main;