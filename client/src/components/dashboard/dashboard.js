import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getPost} from '../../action/post'
import { Row,Col } from 'react-materialize'
import { Scrollbars } from 'react-custom-scrollbars';

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
    console.log("!!!!!!!!!!")
    let postConetent;
    if(posts==null)
    {
       postConetent=<div>No Post</div>
    }
    else
    {
      postConetent=this.props.postmap
    }
    return(
        <Row style={{overflow:"hidden"}}>
            <div><br/></div>
            <Col m={3} s={12}>
                
            </Col>
            <Col m={6} s={12}>
                <Scrollbars style={{width:"100%",height:"88vh", }}>
                    
                </Scrollbars>
            </Col>
            <Col m={3} s={12}>
            
            </Col>
        </Row>
    )
}
}

const mapStateToProps=state=>({
    post:state.post
})
export default connect(mapStateToProps,{getPost})(Dashboard)
