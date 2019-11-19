import React from 'react';
import AdvInput from './AdvInput';

const formData = {
    username : {
        elementType : 'input',
        elementConfig : {
            type : 'text',
            placeholder : 'username here'
        },
        elementValue : ''
    },
    country : {
        elementType : 'select',
        elementConfig :  {
            placeholder : 'Country',
            options : [
                {value : 'IN' , desc : 'India'},
                {value : 'US' , desc : 'United State'},
                {value : 'UN' , desc : 'United Kingdom'}
            ]
        },
        elementValue : ''
    }
}
class AdvForm extends React.Component{
    state = {
        username : '',
        country : ''
    }
    inputHandler(inputIdentifier, event){
        console.log(inputIdentifier, event.target.value);
        this.setState ( {
            [inputIdentifier] : event.target.value
        })
    }
    render(){
        return(
            <>
            <form>
                <AdvInput elementType={formData.username.elementType}
                         elementConfig={formData.username.elementConfig}
                 elementValue = {this.state.username} changed ={this.inputHandler.bind(this, 'username')} />

                 <AdvInput elementType={formData.country.elementType}
                         elementConfig={formData.country.elementConfig}
                 elementValue = {this.state.country} changed ={this.inputHandler.bind(this, 'country')} />
                  
            </form>
            </>
        )
    }
}

export default AdvForm;