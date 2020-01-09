import React, {Component} from 'react';
import {connect} from "react-redux";
import './Guard.css';

class Guard extends Component {
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    render() {
        let success = {
            background: 'white'
        };
        return (
            <div className="card m-5">
                <div className="card-header">
                    Guard
                </div>
                <div className="card-body">
                    <div className='guard'>
                        <div>
                            <div className='password-input' style={{backgroundColor: this.props.stateSuccess ? 'green' : 'white'}}>
                                {Array(this.props.secretNum.length + 1).join('*')}
                            </div>
                        </div>
                        <div className='numpad'>
                            {this.numbers.map(num => (
                                <button key={num} onClick={() => this.props.addNum(num)}>{num}</button>
                            ))}
                            <button onClick={this.props.delNum}>←</button>
                            <button onClick={this.props.checkNum}>E</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {secretNum: state.secretNum, stateSuccess: state.success};
};

const mapDispatchToProps = dispatch => {
    return {
        addNum: (num) => dispatch({type: 'ADD_NUM', value: num}),
        delNum: () => dispatch({type: 'DEL_NUM'}),
        checkNum: () => dispatch({type: 'CHECK_NUM'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Guard);