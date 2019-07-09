import React,{Component} from 'react'
import {Card,Col,Row} from 'react-materialize'
import {fetchcompanies,fetchlang} from '../../action/post'
import {connect} from 'react-redux'
import Tag from '../reusable/tag2'
class Popular extends Component{
    constructor()
    {
        super()
        {
           this.state={
               companies:[],
               lang:[]
           }     
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
        <div>
            <div>
                Most Popular topics
           {this.state.lang.map((value, index) => {
                    return <Tag name={value.cat} count={value.count}></Tag>
                })}
            </div>
            <div>
                Most popular companies
                {this.state.companies.map((value, index) => {
                    return <Tag name={value.name} count={value.count}></Tag>
                })}
            </div>
        </div>
    )
}
}
const mapStateToProps=state=>({
    post:state.post
})
export default connect(mapStateToProps,{fetchcompanies,fetchlang})(Popular)