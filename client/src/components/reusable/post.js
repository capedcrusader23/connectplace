import React,{Component} from 'react'
import {Card,Col,Row,Button} from 'react-materialize'
import Tag from './tag.js'
import {addlike,removelike} from '../../action/post'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Post extends Component
{
    constructor(props)
    {
        super(props);
       
       this.state={
           upvotes:[],
           downvotes:[],
           tags:[],
           company:[]
       }
    }
    componentWillMount()
    {
        this.setState({
            upvotes:this.props.upvotes,
            downvotes:this.props.downvotes,
            tags:this.props.tags,
            company:this.props.company
        })

       this.props.tags.map((val,index)=>{
           console.log(val["name"])
       })
        console.log(this.state)
    }
    componentWillReceiveProps(nextProps)
    { 
      if(nextProps.post.up)
      {
        this.setState({
            upvotes:nextProps.post.up.upvotes
        })
        this.setState({
          downvotes:nextProps.post.up.downvotes  
        })
      } 
    }
    doup(id)
    {
        this.props.addlike(id)
    }
    dodown(id)
    {
        this.props.removelike(id)
    }
  
    render(){
        
        return(
            <Row>
                <center>
                <Card
                className="blue-grey darken-1"
                textClassName="white-text"state
                title={this.props.title}state
                actions={[
                    <Col m={6} s={6}><Button
                        floating
                        large
                        className="green"
                        waves="light"
                        icon="thumb_up"
                        onClick={this.doup.bind(this,this.props.id2)}
                    />
                  <p>{this.state.upvotes.length}</p>
                    </Col>,
                    <Col m={6} s={6}><Button
                        floating
                        large
                        className="red"
                        waves="light"
                        icon="thumb_down"
                        onClick={this.dodown.bind(this,this.props.id2)}
                    />
                  <p>{this.state.downvotes.length}</p>
                    </Col>
                ]}
                >
                By - {this.props.author.name}
                <br/><br/>
                <p>Languages/Topic</p>
                {
                this.state.tags.map((value, index) => {
                    return <Link to={`/topic/${value.language}`}><Tag name={value.name}></Tag></Link>
                })}
                <p>Company</p>
                {
                this.state.company.map((value, index) => {
                    return <Link to={`/company/${value.company}`}><Tag name={value.name}></Tag></Link>
                })}
                </Card>
                </center>
            </Row>
        )
    }
}

const mapStateToProps=state=>({
    post:state.update
})
export default connect(mapStateToProps,{addlike,removelike})(Post)