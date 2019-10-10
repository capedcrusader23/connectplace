import React,{Component} from 'react'
import Tag1 from './tag1.js'
import {connect} from 'react-redux'
import {toast,ToastContainer} from 'react-toastify';
import {withRouter,Link} from 'react-router-dom'

class AddPost extends Component{
    constructor(props) {
        super(props);
        this.state = 
        {

        };

    }
    componentWillMount()
    {
        this.props.getpostdata();
    }
    componentWillReceiveProps(nextProps)
    {
        
    }
   
    render(){
        return(
            
        )
    }
}

export default connect()(withRouter(SinglePost))