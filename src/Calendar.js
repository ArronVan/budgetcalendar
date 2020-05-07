import React from 'react'
import { getAllDaysInMonth, getDayOfWeekShortName } from './DateFunctions'
import { FixedSizeList as List } from 'react-window'
import { getDate, getMonth, getYear, isSameDay } from 'date-fns'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import NumberFormat from 'react-number-format'
import Grid from '@material-ui/core/Grid'

import './Calendar.css'

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            month: getMonth(this.props.selectedDate),
            year: getYear(this.props.selectedDate)
        }
    }

    render() {
        var inputtedDate = new Date(this.state.year, this.state.month, 1);
        inputtedDate.setFullYear(this.state.year);
        
        var allDaysInMonth = getAllDaysInMonth(inputtedDate);

        return (
            <>
                <div className="CalendarListHeader">
                    <Grid container justify="center" spacing={0}>
                        <Grid item xs={6}>
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
                        </Grid>
                        <Grid item xs={6}>
                            <NumberFormat
                                defaultValue={this.state.year}
                                thousandSeparator={false}
                                allowNegative={false}
                                decimalScale={0}
                                isAllowed={(values => {return values.value === "" || values.floatValue < 10000;})}
                                onValueChange={(values) => {
                                this.setState({
                                    year: values.floatValue > 0 ? values.floatValue : 0
                                    });}
                                }
                                className="YearInput"
                            />
                        </Grid>
                    </Grid>
                    <br/>
                    <Grid container justify="center" spacing={0}>
                        <Grid item xs={3} style={{textAlign: 'left'}}>
                            Day of Month
                        </Grid>
                        <Grid item xs={7}>
                            Budget Amount
                        </Grid>
                        <Grid item xs={2}>
                            Transactions
                        </Grid>
                    </Grid>
                </div>
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
                                     <Grid container justify="center" spacing={0}>
                                         <Grid item xs={2} style={{fontSize: 20, textAlign: 'left'}}>
                                            {getDayOfWeekShortName(allDaysInMonth[index])}
                                         </Grid>
                                         <Grid item xs={1} style={{fontSize: 20}}>
                                             {getDate(allDaysInMonth[index])}
                                         </Grid>
                                         <Grid item xs={7} style={{fontSize: 20}}>
                                            {this.props.getBudgetAmountOnDate(allDaysInMonth[index]) < 0 ? '-' : ''}
                                            ${Math.abs(this.props.getBudgetAmountOnDate(allDaysInMonth[index]))}
                                         </Grid>
                                         <Grid item xs={2}>
                                             <div style={{color: '#2ecc71', fontSize: '20px', top: 0, right: 30, position: 'absolute'}}>
                                                {this.props.getAddTransactionsOnDate(allDaysInMonth[index]).length > 0 ?
                                                "+" + this.props.getAddTransactionsOnDate(allDaysInMonth[index]).length
                                                : ''}
                                             </div>
                                             <div style={{color: '#c0392b', fontSize: '20px', bottom: 0, right: 30, textAlign: 'right', position: 'absolute'}}>
                                                {this.props.getSubTransactionsOnDate(allDaysInMonth[index]).length > 0 ?
                                                "-" + this.props.getSubTransactionsOnDate(allDaysInMonth[index]).length
                                                : ''}
                                             </div>
                                         </Grid>
                                     </Grid>
                            </div>
                        )}
                    </List>
                </div>
            </>
        );
    }
}

export default Calendar;