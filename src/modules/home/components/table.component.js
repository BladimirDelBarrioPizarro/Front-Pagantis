import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getUsersAction} from '../actions/user.actions'
import { Icon, Menu, Table } from 'semantic-ui-react'
import User from './user.component'

const TableExamplePadded = () => {

    const dispatch = useDispatch();
    const getUsers = () => dispatch(getUsersAction());
    useEffect( () => {
      getUsers()
    },[]);     

    const users = useSelector((state) => state.users.data)
 
return(
    <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Department</Table.HeaderCell>
        <Table.HeaderCell>Wallets</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body >
      {users.map((user,key) =>
          <User key={key} user={user}/>
        
       )}
  </Table.Body>
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)}

export default TableExamplePadded;
