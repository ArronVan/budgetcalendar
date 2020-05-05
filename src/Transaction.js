import React from 'react'
import Button from '@material-ui/core/Button'

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
    }

    render() {
        return (
            <div ref={node => { this.node = node; }}>
                <ul className="list">
                    {this.props.increases.map((item, index) => {
                        return <>
                            <li className="plus">
                                +${item.value} {item.description}
                                <button className="delete-btn" onClick={() => this.enableDeleteConfirm(index, true)}>x</button>
                            </li>
                            {index === this.state.deleteSelected && this.state.onAdd ? <>
                                Are you sure you want to delete this transaction?
                                <br/>
                                <Button style={{marginTop: '10px', marginRight: '10px'}} variant="contained" color="primary" onClick={this.disableDeleteConfirm}>Cancel</Button>
                                <Button style={{marginTop: '10px', marginLeft: '10px'}} variant="contained" color="secondary" onClick={() => this.deleteTransaction(index, true)}>Delete</Button>
                            </> : ''}
                        </>
                    })}
                    {this.props.decreases.map((item, index) => {
                        return <>
                            <li className="minus">
                                -${item.value} {item.description}
                                <button className="delete-btn" onClick={() => this.enableDeleteConfirm(index, false)}>x</button>
                            </li>
                            {index === this.state.deleteSelected && !this.state.onAdd ? <>
                                Are you sure you want to delete this transaction?
                                <br/>
                                <Button style={{marginTop: '10px', marginRight: '10px'}} variant="contained" color="primary" onClick={this.disableDeleteConfirm}>Cancel</Button>
                                <Button style={{marginTop: '10px', marginLeft: '10px'}} variant="contained" color="secondary" onClick={() => this.deleteTransaction(index, false)}>Delete</Button>
                            </> : ''}
                        </>
                    })}
                </ul>
            </div>
        )
    }
}

export default Transaction;
