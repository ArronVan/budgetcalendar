import React from 'react'
import NumberFormat from 'react-number-format'
import Radio from '@material-ui/core/Radio'
import Button from '@material-ui/core/Button'

import './InputFields.css'

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
        this.closeAll = this.closeAll.bind(this);
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

    closeAll() {
        this.setState({currencyValue: null, isAdd: true});
        this.setState({showChangeBudget: false});
        this.setState({showAddTransaction: false});
    }

    render() {
        return (
            <>
                <Button style={{marginRight: '10px'}} variant="contained" onClick={this.showChangeBudget}>Change Initial Budget</Button>
                <Button style={{marginLeft: '10px'}} variant="contained" onClick={this.showAddTransaction}>Add Transaction</Button>
                <div className="InputField">
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
                        className="InputFieldInput"
                        />
                        <br/>
                        <Button style={{marginTop: '30px', marginRight: '10px'}} variant="contained" color="secondary" onClick={this.closeAll}>Cancel</Button>
                        <Button style={{marginTop: '30px', marginLeft: '10px'}} variant="contained" color="primary" onClick={() => {this.changeBudget(); this.closeAll();}}>Change</Button>
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
                        className="InputFieldInput"
                        />
                        <br/>
                        <Radio
                          checked={!this.state.isAdd}
                          onChange={() => this.setState({isAdd: !this.state.isAdd})}
                          value={false}
                        /> Decreasing
                        <Radio
                          checked={this.state.isAdd}
                          onChange={() => this.setState({isAdd: !this.state.isAdd})}
                          value={true}
                        /> Increasing
                        <br/>
                        <Button style={{marginTop: '30px', marginRight: '10px'}} variant="contained" color="secondary" onClick={this.closeAll}>Cancel</Button>
                        <Button style={{marginTop: '30px', marginLeft: '10px'}} variant="contained" color="primary" onClick={() => {this.addTransaction(); this.closeAll();}}>Add</Button>
                    </> : ''}
                </div>
            </>
        )
    }
}

export default InputFields;