import React from 'react';
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import { Table,Icon,Button } from 'semantic-ui-react'


const Wallet = wallet => {
    const {id} = wallet.wallet
    const {pagacoint} = wallet.wallet
    const dispatch = useDispatch();
    
    return(
      <Table.Row>
        <Table.Cell><Icon name='euro sign' size='big'></Icon></Table.Cell>
        <Table.Cell>{pagacoint}</Table.Cell>
        <Table.Cell>
            <Link to={`/wallets/transaction/${id}`}
                      ><Button primary>Transaction</Button></Link></Table.Cell>
      </Table.Row>
    )
}


export default Wallet;