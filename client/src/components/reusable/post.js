import React,{Component} from 'react'
import {Card,Col,Row,Button} from 'react-materialize'
import Tag from './tag.js'

let tags;
class Post extends Component{
    constructor(props)
    {
        super(props);
        tags=this.props.tags;
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
                    <Button
                        floating
                        large
                        className="green"
                        waves="light"
                        icon="thumb_up"
                        />
                </a>,
                <a>
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
export default Post