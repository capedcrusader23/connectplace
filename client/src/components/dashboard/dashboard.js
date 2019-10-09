import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getPost} from '../../action/post'
import { Row,Col } from 'react-materialize'
import { Scrollbars } from 'react-custom-scrollbars';
import Popular from '../reusable/mostpopular'
import  ADD from '../reusable/addpost'

class Dashboard extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            posts:{},
            show:false
        }
    }
componentWillMount()
{
this.props.getPost();
}

render(){

    console.log(this.state.show)
    const {posts}=this.props.post;
    let postConetent;
    if(posts==null)
    {
       postConetent=<div><h4>No posts</h4></div>
    }
    else
    {
      postConetent=this.props.postmap
    }
    return(
        <div>
            
            <Row style={{marginTop:40,marginLeft:20}}>
                <Col m={8} s={12}>
                    <div style={{columnCount:2}}>
                        <ADD/>
                        <br/>
                        {postConetent}
                    </div> 
                </Col>
                <Col m={3} s={12}>
                    <Popular></Popular>
                </Col>
            </Row>
        </div>
    )
}
}

const mapStateToProps=state=>({
    post:state.post
})
export default connect(mapStateToProps,{getPost})(Dashboard)
