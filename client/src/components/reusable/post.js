import React,{Component} from 'react'
import {Card,Col,Row,Button} from 'react-materialize'
import Tag from './tag.js'
import {addlike,removelike} from '../../action/post'
import {connect} from 'react-redux'
let tags;
let upvotes;
let downvotes;
class Post extends Component{
    constructor(props)
    {
        super(props);
        tags=this.props.tags;
       this.state={
           upvotes:[],
           downvotes:[]
       }
    }
    componentWillMount()
    {
        this.setState({
            upvotes:this.props.upvotes,
            downvotes:this.props.downvotes
        })

        console.log(this.state)
    }
    doup(id)
    {
        this.props.addlike(id)
    }
    componentWillReceiveProps(nextProp)
    {
     //this.setState({
       //upvotes:this.props.post.post.upvotes
     //})
     console.log(this.props.post.post.upvotes)
    }
    render(){
        
        return(
            <Row>
                <center>
                <Col m={3} s={12}></Col>
                <Col m={6} s={12}>
                <Card
                className="blue-grey darken-1"
                textClassName="white-text"
                title={this.props.title}
                actions={[<a>
                    <p>{this.state.upvotes.length}</p>
                    <Button
                        floating
                        large
                        className="green"
                        waves="light"
                        icon="thumb_up"
                        onClick={this.doup.bind(this,this.props.id2)}
                        />
                </a>,
                <a>
                    <p>{this.state.downvotes.length}</p>
                    <Button
                        floating
                        large
                        className="red"
                        waves="light"
                        icon="thumb_down"
                        
                        />
                </a>]}
                >
                By - {this.props.author}
                <br/><br/>
                {
                tags.map((value, index) => {
                    return <Tag name={value}></Tag>
                })}
                </Card>
                </Col>
                <Col m={3} s={12}></Col>
                </center>
            </Row>
        )
    }
}
const mapStateToProps=state=>({
    post:state.post
})
export default connect(mapStateToProps,{addlike,removelike})(Post)