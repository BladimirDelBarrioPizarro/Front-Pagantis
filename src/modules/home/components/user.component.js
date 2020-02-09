import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import { Icon, Table } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {getWalletsByUserIdAction} from '../../wallets/actions/wallet.actions'

const User = user => {
    const {name} = user.user;
    const {department} = user.user
    const {id} = user.user
    const dispatch = useDispatch();
    const getWallets = () => dispatch(getWalletsByUserIdAction(id,name));
    
    return(
      <Table.Row>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{department}</Table.Cell>
        <Table.Cell>
          <Link to={`wallets/${id}`}>
            <Icon onClick={e => {getWallets(id,name)}} size='big' name='book'/>
          </Link>
        </Table.Cell>
      </Table.Row>
    )
}


export default User;