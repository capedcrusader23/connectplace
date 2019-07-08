import React,{Component} from 'react'
import {Chip} from 'react-materialize'
class Tag1 extends Component{

    render(){
        return(
            <Chip close>
                {this.props.name}
            </Chip>
        )
    }
}
export default Tag1