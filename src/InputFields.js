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
            transactionDescription: "",
            currencyValue: null,
            isAdd: true
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
        this.props.changeBudget(this.state.currencyValue);
        this.props.createNotification("success", "Initial Balance Changed", "Your initial balance has been changed to $" + this.state.currencyValue.toFixed(2) + "!");
        this.setState({currencyValue: null});
        this.closeAll();
    }

    addTransaction() {
        this.props.addTransactionOnSelectedDate(this.state.currencyValue, this.state.transactionDescription, this.state.isAdd);
        this.props.createNotification("success", "Transaction Added", "Your transaction has been successfully added!");
        this.setState({transactionDescription: "", currencyValue: null, isAdd: true});
        this.closeAll();
    }

    showChangeBudget() {
        if (!this.state.showChangeBudget)
            this.setState({transactionDescription: "", currencyValue: null, isAdd: true});

        this.setState({showChangeBudget: true});
        this.setState({showAddTransaction: false});

        document.addEventListener('click', this.handleOutsideClick, false);
    }

    showAddTransaction() {
        if (!this.state.showAddTransaction)
            this.setState({transactionDescription: "", currencyValue: null, isAdd: true});

        this.setState({showAddTransaction: true});
        this.setState({showChangeBudget: false});

        document.addEventListener('click', this.handleOutsideClick, false);
    }

    closeAll() {
        this.setState({transactionDescription: "", currencyValue: null, isAdd: true});
        this.setState({showChangeBudget: false});
        this.setState({showAddTransaction: false});

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
                        <Button style={{marginTop: '30px', marginLeft: '10px'}} variant="contained" color="primary" onClick={this.changeBudget}>Change</Button>
                    </> : ''}
                    {this.state.showAddTransaction ?
                    <>
                        <input
                          type="text"
                          className="InputFieldInput"
                          placeholder="Enter Description"
                          value={this.state.transactionDescription}
                          onChange={(event) => this.setState({transactionDescription: event.target.value})}
                        />
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
                        <Button style={{marginTop: '30px', marginLeft: '10px'}} variant="contained" color="primary" onClick={this.addTransaction}>Add</Button>
                    </> : ''}
                </div>
            </div>
        )
    }
}

export default InputFields;