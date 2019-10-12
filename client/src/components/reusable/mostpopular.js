import React,{Component} from 'react'
import {Card,Col,Row} from 'react-materialize'
import {fetchcompanies,fetchlang} from '../../action/post'
import {connect} from 'react-redux'
import Tag from '../reusable/tag2'
import {Link} from 'react-router-dom'
class Popular extends Component{
    constructor()
    {
        super()
        this.state={
            companies:[],
            lang:[]
        }  
        
    }

    componentWillMount()
    {
        this.props.fetchcompanies();
        this.props.fetchlang();
    }
    componentWillReceiveProps(nextProps)
    {
       if(nextProps.post.lang)
       {
           this.setState({
               lang:nextProps.post.lang
           })
       }
       if(nextProps.post.categories)
       {
           this.setState({
               companies:nextProps.post.categories
           })
       }
    }

    render()
    {
        console.log(this.state)
    return(
        <Row style={{position:"fixed",maxWidth:400}}>
            <Col m={12} s={12}>
                <Card style={{fontWeight:"500",backgroundColor:"white",marginTop:0}}>
                    Most Popular topics<br></br><br></br>
                    {this.state.lang.map((value, index) => {
                        return  <Link to={`/topic/${value._id}`}><Tag name={value.cat} count={value.count}></Tag></Link>
                    })}
                </Card>
            </Col>
            <Col m={12} s={12}>
                <Card style={{fontWeight:"500",backgroundColor:"white"}}>
                    Most popular companies<br></br><br></br>
                    {this.state.companies.map((value, index) => {
                        return <Link to={`/company/${value._id}`}><Tag name={value.cat} count={value.count}></Tag></Link>
                    })}
                </Card>
            </Col>
        </Row>
    )
}
}
const mapStateToProps=state=>({
    post:state.post
})
export default connect(mapStateToProps,{fetchcompanies,fetchlang})(Popular)