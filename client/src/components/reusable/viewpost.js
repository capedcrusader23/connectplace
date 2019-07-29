import React,{Component} from 'react'
import {Card,Col,Row,Button,CardPanel} from 'react-materialize'
import Tag from './tag.js'
import {addlike,removelike} from '../../action/post'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class ViewPost extends Component
{
        render(){
        
        return(
            <Row style={{paddingTop:"2em"}}>
                <center>
                    <Col m={3} s={12}>
                        <div className="z-depth-3 deep-purple lighten-1 white-text" style={{borderRadius:"20px",padding:"1em",height:"auto",fontSize:"1em",margin:"0.5em",color:"black"}}>
                            <span style={{fontWeight:"400",fontSize:"1.2em"}}>Languages:</span> <br/><br/>
                            <Tag name="HTML"></Tag>
                            <Tag name="JS"></Tag>
                            <Tag name="Java"></Tag>
                            <Tag name="Python"></Tag>
                            <Tag name="DS"></Tag>
                            <Tag name="Algo"></Tag>
                        </div>
                        <br></br>
                        <div className="z-depth-3 indigo lighten-1 white-text" style={{borderRadius:"20px",padding:"1em",height:"auto",fontSize:"1em",margin:"0.5em",color:"black"}}>
                            <span style={{fontWeight:"400",fontSize:"1.2em"}}>Company:</span> <br/><br/>
                            <Tag name="Amazon"></Tag>
                            <Tag name="Adobe"></Tag>
                            <Tag name="Github"></Tag>
                            <Tag name="Tata"></Tag>
                            <Tag name="Cognizant"></Tag>
                            <Tag name="Infosis"></Tag>
                        </div>
                    </Col>
                    <Col m={9} s={12}>
                        <CardPanel className="z-depth-5 pink lighten-1 white-text flow-text" style={{borderRadius:"10px"}}>
                            <div className="cyan lighten-5" style={{color:"black",fontWeight:"500",borderRadius:"10px",padding:"1em",height:"auto",fontSize:"1em",margin:"0.5em"}}>Hack with Infy</div>
                            By: <Button className="orange" waves="light" style={{borderRadius:"40%",fontSize:"1em",margin:"0.5em"}}>Shriyam Verma</Button>
                            <div className="deep-orange lighten-5" style={{borderRadius:"20px",padding:"1em",height:"auto",fontSize:"1em",margin:"0.5em",color:"black"}}>
                                <div style={{fontWeight:"500",margin:"0.5em"}}>Description:</div>
                            <div style={{textAlign:"justify",margin:"0.5em"}}>Bro in 1st round u get 2 to 3 questions which is on hackerrank , now after that selected participants( they decide on the basis of total number of participants) go to round 2 in which there are total 3 questions now top 300 participants from the round 2 you will get interview for power programmer job Infosys and top 100 participants from round 2 selected for around 3 which is basically a hackathon ( on hackerearth ) which which will held in Infosys Pune headquarter.

                            Now for preparation purpose actually I also search on the net for Infosys hackwithinfy questions but there is no available questions I am trying to get the link of the hackerrank contest from my senior so that I I get the questions from round 1 and round 2 because one of my senior selected for power programmer interview.
                            Last year I also give hackwithinfy of my senior the round one was very easy few competitive programming and round 2 is medium level if you are efficient and fast in up then you will surely get in top 300.
                            </div>
                            </div>

                        <Row>
                            <Col m={1} s={1}></Col>
                            <Col m={5} s={5}><Button
                                floating
                                large
                                className="green pulse"
                                waves="light"
                                icon="thumb_up"
                                // onClick={this.doup.bind(this,this.props.id2)}
                            />
                            {/* <p>{this.state.upvotes.length}</p> */}
                                </Col>
                                <Col m={5} s={5}><Button
                                    floating
                                    large
                                    className="red pulse"
                                    waves="light"
                                    icon="thumb_down"
                                    // onClick={this.dodown.bind(this,this.props.id2)}
                                />
                            {/* <p>{this.state.downvotes.length}</p> */}
                            </Col>
                            <Col m={1} s={1}></Col>
                        </Row>


                            <div className="deep-orange lighten-5" style={{borderRadius:"20px",padding:"1em",height:"auto",fontSize:"1em",margin:"0.5em",color:"black"}}>
                                <div style={{fontWeight:"500",margin:"0.5em"}}>Comments:</div>
                                <div style={{textAlign:"justify"}}>
                                <div style={{margin:"0.5em",fontSize:"0.8em",fontWeight:"400"}}>Uphaar Dubey
                                    </div>
                                    <div className="white" style={{borderRadius:"20px",padding:"0.6em",maxWidth:"90%",height:"auto",fontSize:"0.6em",marginLeft:"2em",color:"black"}}>Nice Post</div>
                                    <div style={{margin:"0.5em",fontSize:"0.8em",fontWeight:"400"}}>Shriyam Verma
                                    </div>
                                    <div className="white" style={{borderRadius:"20px",padding:"0.6em",maxWidth:"90%",height:"auto",fontSize:"0.6em",marginLeft:"2em",color:"black"}}>Thanks ;)</div>

                                    <div style={{margin:"0.5em",fontSize:"0.8em",fontWeight:"400"}}>Name
                                    </div>
                                    <div>
                                        <input className="white" style={{marginLeft:"2em",maxWidth:"90%",borderRadius:"20px",padding:"0.6em",height:"auto",fontSize:"0.6em",color:"black"}} placeholder="Write Comment"></input>
                                        <center><Button className="cyan pulse" waves="light" style={{borderRadius:"30px",marginTop:"1em"}}>Add Comment</Button></center>
                                    </div>
                                </div>
                            </div>
                        </CardPanel>
                    </Col>
                </center>
            </Row>
        )
    }
}

export default ViewPost