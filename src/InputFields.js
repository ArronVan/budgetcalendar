import React from 'react'
import NumberFormat from 'react-number-format'
import Radio from '@material-ui/core/Radio'
import Button from '@material-ui/core/Button'
import WarningIcon from '@material-ui/icons/Warning';

import './InputFields.css'

class InputFields extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showChangeBudget: false,
            showAddTransaction: false,
            transactionDescription: "",
            currencyValue: null,
            isAdd: true,
            showBudgetError: false,
            showTransactionNameError: false,
            showTransactionValueError: false
        };

        this.changeBudget = this.changeBudget.bind(this);
        this.addTransaction = this.addTransaction.bind(this);
        this.showChangeBudget = this.showChangeBudget.bind(this);
        this.showAddTransaction = this.showAddTransaction.bind(this);
        this.closeAll = this.closeAll.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    handleOutsideClick(e) {
        if (this.node.contains(e.target)) {
            return;
        }
        
        this.closeAll();
    }

    changeBudget() {
        if (this.state.currencyValue == null || !this.state.currencyValue > 0)
        {
            this.setState({showBudgetError: true});
            return;
        }

        this.props.changeBudget(this.state.currencyValue);
        this.props.createNotification("success", "Initial Balance Changed", "Your initial balance has been changed to $" + this.state.currencyValue.toFixed(2) + "!");
        this.setState({currencyValue: null});
        this.closeAll();
    }

    addTransaction() {
        var isValid = true;
        if (this.state.transactionDescription == null || this.state.transactionDescription.replace(/\s/g,"") === "") {
            isValid = false;
            this.setState({showTransactionNameError: true});
        }
        else
            this.setState({showTransactionNameError: false});
        
        if (this.state.currencyValue == null || !this.state.currencyValue > 0) {
            isValid = false;
            this.setState({showTransactionValueError: true});
        }
        else
            this.setState({showTransactionValueError: false});
        
        if (!isValid)
            return;

        this.props.addTransactionOnSelectedDate(this.state.currencyValue, this.state.transactionDescription, this.state.isAdd);
        this.props.createNotification("success", "Transaction Added", "Your transaction has been successfully added!");
        this.setState({transactionDescription: "", currencyValue: null, isAdd: true});
        this.closeAll();
    }

    showChangeBudget() {
        this.closeAll();
        this.setState({showChangeBudget: true});

        document.addEventListener('click', this.handleOutsideClick, false);
    }

    showAddTransaction() {
        this.closeAll();
        this.setState({showAddTransaction: true});

        document.addEventListener('click', this.handleOutsideClick, false);
    }

    closeAll() {
        this.setState({
            transactionDescription: "",
            currencyValue: null,
            isAdd: true,
            showChangeBudget: false,
            showAddTransaction: false,
            showBudgetError: false,
            showTransactionNameError: false,
            showTransactionValueError: false
        });

        document.removeEventListener('click', this.handleOutsideClick, false);
    }

    render() {
        return (
            <div ref={node => { this.node = node; }}>
                <Button style={{marginRight: '10px'}} variant="contained" onClick={this.showChangeBudget}>Change Initial Balance</Button>
                <Button style={{marginLeft: '10px'}} variant="contained" onClick={this.showAddTransaction}>Add Transaction</Button>
                <div className="InputField">
                    {this.state.showChangeBudget ?
                    <>
                        Enter the value that you want your new initial budget to be.
                        <br/>
                        <WarningIcon style={{color: 'red', opacity: (this.state.showBudgetError ? 1 : 0)}}/>
                        <NumberFormat
                          value={this.state.currencyValue}
                          thousandSeparator={true}
                          allowNegative={false}
                          prefix={'$'}
                          placeholder="$0.00"
                          decimalScale={2}
                          onValueChange={(values) => { this.setState({currencyValue: values.floatValue}); }}
                          className="InputFieldInput"
                          style={{marginTop: '10px', borderColor: (this.state.showBudgetError ? 'red' : 'initial')}}
                        />
                        <br/>
                        {this.state.showBudgetError ?
                        <div style={{color: 'red'}}>Value must be greater than $0.</div>
                        : ''}
                        <Button style={{marginTop: '10px', marginRight: '10px'}} variant="contained" color="secondary" onClick={this.closeAll}>Cancel</Button>
                        <Button style={{marginTop: '10px', marginLeft: '10px'}} variant="contained" color="primary" onClick={this.changeBudget}>Change</Button>
                    </> : ''}
                    {this.state.showAddTransaction ?
                    <>
                        Enter the name of your new transaction, its value, and if it should increase or decrease your overall budget.
                        <br/>
                        <WarningIcon style={{color: 'red', opacity: (this.state.showTransactionNameError ? 1 : 0)}}/>
                        <input
                          type="text"
                          className="InputFieldInput"
                          placeholder="Enter Name"
                          value={this.state.transactionDescription}
                          onChange={(event) => this.setState({transactionDescription: event.target.value})}
                          style={{marginTop: '10px', borderColor: (this.state.showTransactionNameError ? 'red' : 'initial')}}
                        />
                        <div style={{color: 'red'}}>
                            {this.state.showTransactionNameError ?
                            'Name field cannot be empty.' : ''}
                        </div>
                        <br/>
                        <WarningIcon style={{color: 'red', opacity: (this.state.showTransactionValueError ? 1 : 0)}}/>
                        <NumberFormat
                          value={this.state.currencyValue}
                          thousandSeparator={true}
                          allowNegative={false}
                          prefix={'$'}
                          placeholder="$0.00"
                          decimalScale={2}
                          onValueChange={(values) => { this.setState({currencyValue: values.floatValue}); }}
                          className="InputFieldInput"
                          style={{borderColor: (this.state.showTransactionValueError ? 'red' : 'initial')}}
                        />
                        <div style={{color: 'red'}}>
                            {this.state.showTransactionValueError ?
                            'Value must be greater than $0.' : ''}
                        </div>
                        <div style={{marginTop: '10px'}}>
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
                        </div>
                        <br/>
                        <Button style={{marginRight: '10px'}} variant="contained" color="secondary" onClick={this.closeAll}>Cancel</Button>
                        <Button style={{marginLeft: '10px'}} variant="contained" color="primary" onClick={this.addTransaction}>Add</Button>
                    </> : ''}
                </div>
            </div>
        )
    }
}

export default InputFields;