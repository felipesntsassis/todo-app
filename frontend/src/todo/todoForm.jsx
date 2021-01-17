import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IconButton from  '../template/iconButton';
import Grid from '../template/grid';
import { add, changeDescription, clear, search } from './todoActions';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentDidMount() {
        this.props.search();
    }

    keyHandler (e) {
        const { add, search, description} = this.props;

        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description);
        } else if (e.key === 'Escape') {
            this.props.clear();
        }
    }

    render() {
        const { add, search, description} = this.props;

        return (
            <div role="form" className="row todoForm">
                <Grid cols="12 9 10">
                    <input className="form-control" id="description" name="description"
                        placeholder="Adicione uma Tarefa" type="text" 
                        value={this.props.description}
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}/>
                </Grid>
                <Grid cols="12 3 2">
                    <IconButton style="primary" icon="plus" onClick={() => add(description)} />
                    <IconButton style="info" icon="search" onClick={() => search()} />
                    <IconButton style="default" icon="close" onClick={() => this.props.clear()} />
                </Grid>
            </div>
        );
    }
};

const mapStateToProps = state => ({description: state.todo.description});
const mapDispatchToProps = dispatch => bindActionCreators(
    { add, changeDescription, clear, search }, dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
