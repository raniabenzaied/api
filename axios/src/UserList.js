import React from 'react'
import { ListGroup }  from 'react-bootstrap';

const UserList = ({user}) =>  {
  return (
    <div className='userList'>
        <ListGroup>
        {user.map((el) =>(
         
         <div className='list' >
        <ListGroup.Item> ID : {el.id} </ListGroup.Item>
        <ListGroup.Item> Name : {el.name} </ListGroup.Item>
        <ListGroup.Item> UserName : {el.username} </ListGroup.Item>
        <ListGroup.Item> Email : {el.email} </ListGroup.Item>
        <ListGroup.Item> Street : {el.address.street} </ListGroup.Item>
        <ListGroup.Item> Suite : {el.address.suite} </ListGroup.Item>
        <ListGroup.Item> City : {el.address.city} </ListGroup.Item>
        <ListGroup.Item> Zipcode : {el.address.zipcode} </ListGroup.Item>
        <ListGroup.Item> Phone : {el.phone} </ListGroup.Item>
        <ListGroup.Item> Website : {el.website} </ListGroup.Item>
        <ListGroup.Item> Company Name : {el.company.name} </ListGroup.Item>
        <ListGroup.Item> Company Bs : {el.company.bs} </ListGroup.Item>
        <ListGroup.Item> Company catchPhrase : {el.company.catchPhrase} </ListGroup.Item>




         </div>

        ))}
    </ListGroup>
   </div>
  )}
export default UserList
