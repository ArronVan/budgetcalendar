import React from 'react'
import NumberFormat from 'react-number-format'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Button from '@material-ui/core/Button'

class InputFields extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showChangeBudget: false,
            showAddTransaction: false,
            currencyValue: null,
            isAdd: true
        };

        this.changeBudget = this.changeBudget.bind(this);
        this.addTransaction = this.addTransaction.bind(this);
        this.showChangeBudget = this.showChangeBudget.bind(this);
        this.showAddTransaction = this.showAddTransaction.bind(this);
    }

    changeBudget() {
        this.props.changeBudget(this.state.currencyValue);
        this.setState({currencyValue: null});
    }

    addTransaction() {
        this.props.addTransactionOnSelectedDate(this.state.currencyValue, "Test", this.state.isAdd);
        this.setState({currencyValue: null, isAdd: true});
    }

    showChangeBudget() {
        if (!this.state.showChangeBudget)
            this.setState({currencyValue: null});

        this.setState({showChangeBudget: true});
        this.setState({showAddTransaction: false});
    }

    showAddTransaction() {
        if (!this.state.showAddTransaction)
            this.setState({currencyValue: null, isAdd: true});

        this.setState({showAddTransaction: true});
        this.setState({showChangeBudget: false});
    }

    render() {
        return (
            <>
                <Button variant="contained" onClick={this.showChangeBudget}>Change Initial Budget</Button>
                <Button variant="contained" onClick={this.showAddTransaction}>Add Transaction</Button>
                <br/>
                {this.state.showChangeBudget ?
                <>
                    <NumberFormat
                      value={this.state.currencyValue}
                      thousandSeparator={true}
                      allowNegative={false}
                      prefix={'$'}
                      placeholder="$0.00"
                      decimalScale={2}
                      onValueChange={(values) => { this.setState({currencyValue: values.floatValue}); }}
                    />
                    <button onClick={this.changeBudget}>Change</button>
                </> : ''}
                {this.state.showAddTransaction ?
                <>
                    <NumberFormat
                      value={this.state.currencyValue}
                      thousandSeparator={true}
                      allowNegative={false}
                      prefix={'$'}
                      placeholder="$0.00"
                      decimalScale={2}
                      onValueChange={(values) => { this.setState({currencyValue: values.floatValue}); }}
                    />
                    <RadioGroup value={this.state.isAdd} onChange={() => this.setState({isAdd: !this.state.isAdd})}>
                        <FormControlLabel value={false} control={<Radio />} label="Decreasing" />
                        <FormControlLabel value={true} control={<Radio />} label="Increasing" />
                    </RadioGroup>
                    <button onClick={this.addTransaction}>Add</button>
                </> : ''}
            </>
        )
    }
}

export default InputFields;