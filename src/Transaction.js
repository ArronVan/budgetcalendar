import React from 'react'

class Transaction extends React.Component {
    render() {
        return (
            <>
                {this.props.increases.map((item, index) => {
                    return <>
                        +${item.value} {item.description}
                        <br/>
                    </>
                })}
                <br/>
                {this.props.decreases.map((item, index) => {
                    return <>
                        -${item.value} {item.description}
                        <br/>
                    </>
                })}
            </>
        )
    }
}

export default Transaction;
