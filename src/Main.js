import React from 'react'
import Calendar from './Calendar'
import InputFields from './InputFields'
import Transaction from './Transaction'
import { getMonthName } from './DateFunctions'
import { getYear, getDate, isBefore, isSameDay } from 'date-fns'
import Grid from '@material-ui/core/Grid'
import {NotificationContainer, NotificationManager} from 'react-notifications'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'

import './Main.css'
import 'react-notifications/lib/notifications.css';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            budget: 0,
            selectedDate: Date.now(),
            dates: [],
            resetModalOpen: false
        };

        this.changeBudget = this.changeBudget.bind(this);
        this.getBudgetAmountOnDate = this.getBudgetAmountOnDate.bind(this);
        this.changeSelectedDate = this.changeSelectedDate.bind(this);
        this.getAddTransactionsOnDate = this.getAddTransactionsOnDate.bind(this);
        this.getSubTransactionsOnDate = this.getSubTransactionsOnDate.bind(this);
        this.addTransactionOnSelectedDate = this.addTransactionOnSelectedDate.bind(this);
        this.deleteTransactionOnSelectedDate = this.deleteTransactionOnSelectedDate.bind(this);
        this.createNotification = this.createNotification.bind(this);
        this.closeResetModal = this.closeResetModal.bind(this);
        this.openResetModal = this.openResetModal.bind(this);
        this.resetAllData = this.resetAllData.bind(this);
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

    deleteTransactionOnSelectedDate(index, isAdd) {
        var dateIndex;
        for (var i = 0; i < this.state.dates.length; i++)
            if (isSameDay(this.state.selectedDate, this.state.dates[i].date)) {
                dateIndex = i;
                break;
            }
        
        if (dateIndex == null)
            return;
        
        var dateEntry = this.state.dates;
        var newArray = [];
        if (isAdd) {
            for (i = 0; i < dateEntry[dateIndex].increases.length; i++) {
                if (i !== index) {
                    newArray = [...newArray, dateEntry[dateIndex].increases[i]];
                }
            }
            dateEntry[dateIndex].increases = newArray;
        }
        else {
            for (i = 0; i < dateEntry[dateIndex].decreases.length; i++) {
                if (i !== index) {
                    newArray = [...newArray, dateEntry[dateIndex].decreases[i]];
                }
            }
            dateEntry[dateIndex].decreases = newArray;
        }

        this.setState({dates: dateEntry});
    }

    createNotification(type, title, message) {
        switch (type) {
            case 'success':
                NotificationManager.success(message, title);
                break;
            case 'warning':
                NotificationManager.warning(message, title);
                break;
            case 'error':
                NotificationManager.error(message, title);
                break;
            default:
                NotificationManager.info(message, title);
        }
    }

    closeResetModal() {
        this.setState({resetModalOpen: false});
    }
    
    openResetModal() {
        this.setState({resetModalOpen: true});
    }

    resetAllData() {
        this.setState({
            budget: 0,
            selectedDate: Date.now(),
            dates: []
        });
        this.closeResetModal();
        this.createNotification('info', null, "All transactions have been removed and the current balance has been set to $0.");
    }

    render() {
        return (
            <>
                <NotificationContainer/>
                <p>
                    <h1>Current Balance: ${this.getBudgetAmountOnDate(this.state.selectedDate)}</h1>
                    Selected Date: {getMonthName(this.state.selectedDate)} {getDate(this.state.selectedDate)}, {getYear(this.state.selectedDate)}
                </p>
                <InputFields
                  addTransactionOnSelectedDate={this.addTransactionOnSelectedDate}
                  changeBudget={this.changeBudget}
                  createNotification={this.createNotification}
                />
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
                        createNotification={this.createNotification}
                        ref="calendar"
                    />
                    </Grid>
                    <Grid item xs>
                        <div className="transaction">
                            <Transaction
                            increases={this.getAddTransactionsOnDate(this.state.selectedDate)}
                            decreases={this.getSubTransactionsOnDate(this.state.selectedDate)}
                            deleteTransactionOnSelectedDate={this.deleteTransactionOnSelectedDate}
                            createNotification={this.createNotification}
                            />
                        </div>
                    </Grid>
                </Grid>
                <div className="reset">
                    <Button className="reset" color="secondary" onClick={this.openResetModal}>Reset All</Button>
                </div>
                <Modal
                  open={this.state.resetModalOpen}
                  onClose={this.closeResetModal}
                >
                    <div className="modal">
                        This will remove all transactions and set the initial balance to $0.
                        <br/>
                        Are you sure you want to reset?
                        <br/>
                        <div style={{marginTop: '10px', textAlign: 'right'}}>
                            <Button style={{marginRight: '10px'}} variant="contained" onClick={this.closeResetModal}>Cancel</Button>
                            <Button style={{marginLeft: '10px'}} variant="contained" color="secondary" onClick={this.resetAllData}>Yes, Reset</Button>
                        </div>
                    </div>
                </Modal>
            </>
        );
    };
}

export default Main;