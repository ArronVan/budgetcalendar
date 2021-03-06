import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { addComma } from './DateFunctions'

import './Transaction.css'

class Transaction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onAdd: true,
            deleteSelected: -1
        }

        this.enableDeleteConfirm = this.enableDeleteConfirm.bind(this);
        this.disableDeleteConfirm = this.disableDeleteConfirm.bind(this);
        this.deleteTransaction = this.deleteTransaction.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    handleOutsideClick(e) {
        if (this.node.contains(e.target)) {
            return;
        }
        
        this.disableDeleteConfirm();
    }

    enableDeleteConfirm(index, add) {
        this.setState({onAdd: add, deleteSelected: index});
        document.addEventListener('click', this.handleOutsideClick, false);
    }

    disableDeleteConfirm() {
        this.setState({deleteSelected: -1});
        document.removeEventListener('click', this.handleOutsideClick, false);
    }

    deleteTransaction(index, isAdd) {
        this.props.deleteTransactionOnSelectedDate(index, isAdd);
        this.props.createNotification('info', null, "Your transaction has been removed.");
    }

    render() {
        return (
            <div ref={node => { this.node = node; }}>
                <b style={{fontSize: 20}}>Transactions</b>
                <ul className="list">
                    {this.props.increases.map((item, index) => {
                        return <>
                            <li className="plus">
                                <Grid container justify="center" spacing={0}>
                                    <Grid item xs style={{textAlign: 'left'}}>
                                        {item.description}
                                    </Grid>
                                    <Grid item xs style={{textAlign: 'right'}}>
                                        +${addComma(item.value)}
                                        <button className="delete-btn" onClick={() => this.enableDeleteConfirm(index, true)}>x</button>
                                    </Grid>
                                </Grid>
                            </li>
                            {index === this.state.deleteSelected && this.state.onAdd ? <>
                                Are you sure you want to remove this transaction?
                                <br/>
                                <Button style={{marginTop: '10px', marginRight: '10px'}} variant="contained" color="primary" onClick={this.disableDeleteConfirm}>Cancel</Button>
                                <Button style={{marginTop: '10px', marginLeft: '10px'}} variant="contained" color="secondary" onClick={() => this.deleteTransaction(index, true)}>Remove</Button>
                            </> : ''}
                        </>
                    })}
                    {this.props.decreases.map((item, index) => {
                        return <>
                            <li className="minus">
                                <Grid item xs style={{textAlign: 'left'}}>
                                    {item.description}
                                </Grid>
                                <Grid item xs style={{textAlign: 'right'}}>
                                    -${addComma(item.value)}
                                </Grid>
                                <button className="delete-btn" onClick={() => this.enableDeleteConfirm(index, false)}>x</button>
                            </li>
                            {index === this.state.deleteSelected && !this.state.onAdd ? <>
                                Are you sure you want to remove this transaction?
                                <br/>
                                <Button style={{marginTop: '10px', marginRight: '10px'}} variant="contained" color="primary" onClick={this.disableDeleteConfirm}>Cancel</Button>
                                <Button style={{marginTop: '10px', marginLeft: '10px'}} variant="contained" color="secondary" onClick={() => this.deleteTransaction(index, false)}>Remove</Button>
                            </> : ''}
                        </>
                    })}
                </ul>
            </div>
        )
    }
}

export default Transaction;
