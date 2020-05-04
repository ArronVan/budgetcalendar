import React from 'react'
import { getAllDaysInMonth, getDayOfWeekName } from './DateFunctions'
import { FixedSizeList as List } from 'react-window'
import { getDate, getMonth, getYear, isSameDay } from 'date-fns'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import NumberFormat from 'react-number-format'

import './Calendar.css'

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            month: getMonth(this.props.selectedDate),
            year: getYear(this.props.selectedDate),
            yearInput: getYear(this.props.selectedDate).toString()
        }
    }

    render() {
        let allDaysInMonth = getAllDaysInMonth(new Date(this.state.year, this.state.month, 1));

        return (
            <>
                {/*
                <ul>
                    {this.props.dates.map((day, index) => {
                        return <li key={index}>
                            Date: {getDayOfWeekName(day.date)} - Budget: {this.props.getBudgetAmountOnDate(day.date)} - Additions:[{day.increases.map((inc) => {
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
                */}
                <FormControl>
                    <Select value={this.state.month} onChange={(event) => this.setState({month: event.target.value})}>
                        <MenuItem value={0}>Janurary</MenuItem>
                        <MenuItem value={1}>Feburary</MenuItem>
                        <MenuItem value={2}>March</MenuItem>
                        <MenuItem value={3}>April</MenuItem>
                        <MenuItem value={4}>May</MenuItem>
                        <MenuItem value={5}>June</MenuItem>
                        <MenuItem value={6}>July</MenuItem>
                        <MenuItem value={7}>August</MenuItem>
                        <MenuItem value={8}>September</MenuItem>
                        <MenuItem value={9}>October</MenuItem>
                        <MenuItem value={10}>November</MenuItem>
                        <MenuItem value={11}>December</MenuItem>
                    </Select>
                </FormControl>
                <NumberFormat
                  defaultValue={this.state.year}
                  thousandSeparator={false}
                  allowNegative={false}
                  decimalScale={0}
                  isAllowed={(values => {return values.floatValue < 10000;})}
                  onValueChange={(values) => {
                      this.setState({
                          year: values.floatValue > 0 ? values.floatValue : 0
                        });}
                    }
                />
                <div className="List">
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
                </div>
            </>
        );
    }
}

export default Calendar;