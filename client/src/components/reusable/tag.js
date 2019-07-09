import React,{Component} from 'react'
import {Chip} from 'react-materialize'

class Tag extends Component{

    render(){
        return(
            <Chip>
                {this.props.name}
            </Chip>
        )
    }
}
export default Tag