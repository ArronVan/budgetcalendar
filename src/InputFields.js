import React from 'react'
import NumberFormat from 'react-number-format'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup';

class InputFields extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showChangeBudget: false,
            showAddTransaction: true,
            currencyValue: null,
            isAdd: true
        };

        this.changeBudget = this.changeBudget.bind(this);
        this.addTransaction = this.addTransaction.bind(this);
    }

    changeBudget() {
        this.props.changeBudget(this.state.currencyValue);
        this.setState({currencyValue: null});
    }

    addTransaction() {
        this.props.addTransactionOnSelectedDate(this.state.currencyValue, "Test", this.state.isAdd);
        this.setState({currencyValue: null, isAdd: true});
    }

    render() {
        return (
            <>
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