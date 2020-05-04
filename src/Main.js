import React from 'react'
import Calendar from './Calendar'
import InputFields from './InputFields'
import Transaction from './Transaction'
import { getMonthName } from './DateFunctions'
import { getYear, getDate, isBefore, isSameDay } from 'date-fns'
import Grid from '@material-ui/core/Grid'

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

        this.changeBudget = this.changeBudget.bind(this);
        this.getBudgetAmountOnDate = this.getBudgetAmountOnDate.bind(this);
        this.changeSelectedDate = this.changeSelectedDate.bind(this);
        this.getAddTransactionsOnDate = this.getAddTransactionsOnDate.bind(this);
        this.getSubTransactionsOnDate = this.getSubTransactionsOnDate.bind(this);
        this.addTransactionOnSelectedDate = this.addTransactionOnSelectedDate.bind(this);
    }

    addDate = (date) => {
        this.setState((state, props) => ({
            dates: [...this.state.dates, date]
        }));
    }

    changeBudget(amount) {
        this.setState({
            budget: amount
        });
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

    addTransactionOnSelectedDate(amount, description, isAdd) {
        for (var i = 0; i < this.state.dates.length; i++)
            if (isSameDay(this.state.selectedDate, this.state.dates[i].date))
            {
                var dateEntry;
                if (isAdd)
                {
                    dateEntry = this.state.dates;
                    dateEntry[i].increases = [...dateEntry[i].increases, {description: description, value: amount}];
                    this.setState({dates: dateEntry});
                }
                else
                {
                    dateEntry = this.state.dates;
                    dateEntry[i].decreases = [...dateEntry[i].decreases, {description: description, value: amount}];
                    this.setState({dates: dateEntry});
                }
                return;
            }

        var newDate = { date: this.state.selectedDate, increases: [], decreases: [] };
        if (isAdd)
            newDate.increases = [{description: description, value: amount}];
        else
            newDate.decreases = [{description: description, value: amount}];
        
        this.addDate(newDate);
    }

    render() {
        return (
            <>
                <p>
                    <h1>Current Balance: ${this.getBudgetAmountOnDate(this.state.selectedDate)}</h1>
                    Selected Date: {getMonthName(this.state.selectedDate)} {getDate(this.state.selectedDate)}, {getYear(this.state.selectedDate)}
                </p>
                <InputFields addTransactionOnSelectedDate={this.addTransactionOnSelectedDate} changeBudget={this.changeBudget}/>
                <Grid container justify="center" spacing={0}>
                    <Grid item xs>
                    <Calendar
                        budget={this.state.budget}
                        selectedDate={this.state.selectedDate}
                        changeSelectedDate={this.changeSelectedDate}
                        getBudgetAmountOnDate={this.getBudgetAmountOnDate}
                        getAddTransactionsOnDate={this.getAddTransactionsOnDate}
                        getSubTransactionsOnDate={this.getSubTransactionsOnDate}
                        dates={this.state.dates}
                        ref="calendar"
                    />
                    </Grid>
                    <Grid item xs>
                        <Transaction
                          increases={this.getAddTransactionsOnDate(this.state.selectedDate)}
                          decreases={this.getSubTransactionsOnDate(this.state.selectedDate)}
                        />
                    </Grid>
                </Grid>
            </>
        );
    };
}

export default Main;