import React from 'react';

import IconButton from  '../template/iconButton';
import Grid from '../template/grid';

export default props => (
    <div role="form" className="row todoForm">
        <Grid cols="12 9 10">
            <input className="form-control" id="description" name="description"
                placeholder="Adicione uma Tarefa" type="text" 
                value={props.description}
                onChange={props.handleChange}/>
        </Grid>
        <Grid cols="12 3 2">
            <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
            <IconButton style="info" icon="search" onClick={props.handleSearch} />
            <IconButton style="default" icon="close" onClick={props.handleClear} />
        </Grid>
    </div>
);