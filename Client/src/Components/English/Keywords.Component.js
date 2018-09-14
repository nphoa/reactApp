import React , {Component} from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import {Link} from 'react-router-dom';
import * as urls from './../../API/url';
import callApiAxios from './../../API/callApi';
class KeywordsComponent extends Component{
    constructor(props){
      super(props);
      this.state = {
        keywords:[]
      }
    }
    callApi(url,token){
        fetch(url,{
            method:'GET',
            headers:{
              'Content-Type': 'application/json',
              'Authorization':token
            }
        }).then((res)=>{
           return res.json();
        }).then(response=>{
            console.log(response);
        })
        .catch((error)=>{
          console.log(error);
        });
    }
    componentDidMount(){
      //let token = 'Bearer '+sessionStorage.getItem('token');
      //this.callApi(urls.url_get_keywords,token);
      this.props.getKeywords();
      
    }
    onDeleteHandle = (id,event) => {
      event.preventDefault();
      let token = 'Bearer '+sessionStorage.getItem('token');
      let url = urls.url_get_deleteKeyword+`?id=${id}`;
      callApiAxios(url,'GET','',token).then((res)=>{
        if(res.data.status == 200){
          this.props.getKeywords();
      }
      });
    }
    showContentKeyword = (keywords) => {
        let result = null;
       if(keywords != null && keywords.length > 0){
            result = keywords.map((item,index)=>{
                return (
                    <tr key={index}>
                    <td>{item.keyword}</td>
                    <td>{item.type}</td>
                    <td>{item.vietnamese}</td>
                    <td>
                        <Link to ={`/addKeyword/${item.id}`} href='' className='btn btn-warning'>Edit</Link>
                        <a href='' onClick={(e) =>this.onDeleteHandle(item.id,e)} className='btn btn-danger'>Delete</a>
                    </td>
                  </tr>
                )
            })
       }
       return result;
    }
    render(){
        return(
            <div className="animated fadeIn">

    
            <Row>
              <Col sm={12}>
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify"></i> Combined All Table
                    <Link to='/addKeyword' className='btn btn-info'>Add New Keyword</Link>
                  </CardHeader>
                  <CardBody>
                    <Table hover bordered striped responsive size="sm">
                      <thead>
                      <tr>
                        <th>Keyword</th>
                        <th>keywordType</th>
                        <th>Viernames</th>
                        <th>Action</th>
                      </tr>
                      </thead>
                      <tbody>
                            {this.showContentKeyword(this.props.keywords)}
                   
                      </tbody>
                    </Table>
                    <nav>
                      <Pagination>
                        <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                        <PaginationItem active>
                          <PaginationLink tag="button">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                      </Pagination>
                    </nav>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div> 
        )
    }
}

export default KeywordsComponent