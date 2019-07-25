import React,{Component} from 'react'
import {Card,Col,Row,Button,CardPanel} from 'react-materialize'
import Tag from './tag.js'
import {addlike,removelike} from '../../action/post'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Test1 extends Component
{
        render(){
        
        return(
            <Row>
                <center>
                    <Col m={1} s={12}></Col>
                    <Col m={10} s={12}>
                        <CardPanel className="z-depth-5 deep-purple lighten-1 white-text" style={{fontSize:"24px",borderRadius:"10px"}}>
                            <div>Title</div>
                            <div>By</div>
                            <div>Description</div>
                            <div>Languages</div>
                            <div>Company</div>
                        </CardPanel>
                    </Col>
                    <Col m={1} s={12}></Col>
                </center>
            </Row>
        )
    }
}

export default Test1