import './Calculator.css'

import React, {Component} from 'react'

import Button from '../Components/Button'
import Display from '../Components/Display'

// eslint-disable-next-line import/no-anonymous-default-export
export default class Calculator extends Component{
    
    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigito = this.addDigito.bind(this)
    }
    
    clearMemory(){
        console.log('limpa')
    }

    setOperation(operation){
        console.log(operation)
    }

    addDigito(n){
        console.log(n)
    }
    
    render(){
        
            
        
        return (
            <div className="Calculator">
                <Display value={100}/>
                <Button label="AC" click={ this.clearMemory}  />
                <Button label="/" click={this.setOperation} />
                <Button label="7" click={this.addDigito}/>
                <Button label="8" click={this.addDigito}/>
                <Button label="9" click={this.addDigito}/>
                <Button label="*" click={this.setOperation}/>
                <Button label="4" click={this.addDigito}/>
                <Button label="5" click={this.addDigito}/>
                <Button label="6" click={this.addDigito}/>
                <Button label="-" click={this.setOperation}/>
                <Button label="1" click={this.addDigito}/>
                <Button label="2" click={this.addDigito}/>
                <Button label="3" click={this.addDigito}/>
                <Button label="+" click={this.setOperation} />
                <Button label="0" click={this.addDigito} />
                <Button label="." click={this.addDigito}/>
                <Button label="=" click={this.setOperation}/>
                       
            
                
            </div>
        )
    }
}
