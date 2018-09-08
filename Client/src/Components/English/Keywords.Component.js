import React , {Component} from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import {Link} from 'react-router-dom';
class KeywordsComponent extends Component{
    showContentKeyword = (keywords) => {
        let result = null;
       if(keywords != null && keywords.length > 0){
            result = keywords.map((item,index)=>{
                return (
                    <tr>
                    <td>{item.keyword}</td>
                    <td>{item.keywordType}</td>
                    <td>{item.vietnames}</td>
                    <td>
                        <a href='' className='btn btn-warning'>Edit</a>
                        <a href='' className='btn btn-danger'>Delete</a>
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