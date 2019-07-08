import React,{Component} from 'react'
import {Autocomplete,Col,Row,Button,Icon,TextInput,Textarea, Card} from 'react-materialize'
import Tag1 from './tag1.js'

const lang= {"Gus Fring": null,"Saul Goodman": null,"Tuco Salamanca": 'https://placehold.it/250x250'};
const comp={"Gus Fring": null,"Saul Goodman": null,"Tuco Salamanca": 'https://placehold.it/250x250'};
class AddPost extends Component{
    constructor(props) {
        super(props);
        this.state = {
            langtags:[],
            comptags:[]
        };
    }
    enterPressed1 = (event) => {
        var code = event.keyCode || event.which;
        if(code === 13) { 
            var tmp=event.target.value;
            if(tmp!=="")
            {
                const tmp1=this.state.langtags;
                tmp1.push(tmp);
                this.setState({langtags:tmp1})
            }
            event.target.value='';
            // alert(this.state.langtags);
        } 
    }
    enterPressed2 = (event) => {
        var code = event.keyCode || event.which;
        if(code === 13) { 
            var tmp=event.target.value;
            if(tmp!=="")
            {
                const tmp1=this.state.comptags;
                tmp1.push(tmp);
                this.setState({comptags:tmp1})
            }
            event.target.value='';
            // alert(this.state.comptags);
        } 
    }
    render(){
        return(
            <Row>
                <center>
                <Col m={3} s={12}></Col>
                <Col m={6} s={12}>
                <Card className="blue-grey darken-1" style={{color:"white",fontSize:'1.5em'}}>
                    <Row>
                        <br></br>
                        <div>Title :</div>
                        <Col s={1}></Col>
                        <TextInput s={10}/>
                    </Row>
                    <Row>
                        <div>Languages :</div>
                        <Col m={1} s={1}></Col>
                        <Autocomplete onKeyPress={this.enterPressed1.bind(this)}
                         m={10} s={10}
                         options={{data:lang}}
                         placeholder="Enter languages and press Enter" />
                        <Col m={1} s={1}></Col>
                        {this.state.langtags.map((value, index) => {
                                    if(value!=="")
                                        return <Tag1 name={value}></Tag1>
                                    else
                                        return null;
                        })}
                        
                    </Row>
                    <Row>
                        <div>Company :</div>
                        <Col s={1}></Col>
                        <Autocomplete onKeyPress={this.enterPressed2.bind(this)}
                         s={10} 
                         options={{data:comp}}
                         placeholder="Enter company name and press Enter" />
                        <Col s={1}></Col>
                        {this.state.comptags.map((value, index) => {
                                    if(value!=="")
                                        return <Tag1 name={value}></Tag1>
                                    else
                                        return null;
                        })}
                    </Row>
                    <Row style={{marginBottom:0}}>
                        <div>Description :</div>
                        <Col s={1}></Col>
                        <Textarea data-length={1000} style={{height:"10em",border:"1px solid white",padding:"1em"}}
                          s={10}
                          m={10}
                          l={10}
                          xl={10}
                        />
                    </Row>
                    <Button type="submit" waves="light" style={{marginBottom:"10px"}}>
                        Submit
                        <Icon right>
                        send
                        </Icon>
                    </Button>
                </Card>
                </Col>
                <Col m={3} s={12}></Col>
                </center>
            </Row>
        )
    }
}
export default AddPost