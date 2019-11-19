import React from 'react';

const AdvInput = (props) => {
    let element = null;
    switch (props.elementType) {
        case 'input':
            element = <input
                type={props.elementConfig.type}
                placeholder={props.elementConfig.placeholder}
                value={props.elementValue}
                onChange={props.changed}
            />
            break;
        case 'select':
            element = <select>
                {props.elementConfig.options.map((val, index)=>{
                return <option key={index} value={val.value}>{val.desc}</option>
                })}
            </select>
            break;
        case 'textarea':
            element = <textarea>

            </textarea>
            break;
        default:
            element = <input
                type={props.elementConfig.type}
                placeholder={props.elementConfig.placeholder}
                value={props.elementValue}
                onChange={props.changed} />
    }
    return (
        <>
            {element} <br /> <br />
        </>
    )
}

export default AdvInput;