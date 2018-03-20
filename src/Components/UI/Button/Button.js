import React from 'react';

require('./Button.css')

const button = (props) => (
    <button
        className={"Button " + props.btnType}
        onClick={props.clicked} style={{width: props.width || "100%"}} >{props.children}</button>

);

export default button;