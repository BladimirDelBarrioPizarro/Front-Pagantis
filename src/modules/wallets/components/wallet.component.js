import React from 'react';
import {Link} from 'react-router-dom'
import { Table,Icon,Button } from 'semantic-ui-react'


const Wallet = wallet => {
    const {id} = wallet.wallet
    const {pagacoint} = wallet.wallet
    const {bank} = wallet.wallet
    const handlePagacoints = (pagacoint) => {
        console.log('handleP',pagacoint)
        localStorage.setItem('pagacoints',pagacoint)
    }
   return(
    <Table.Row onClick={handlePagacoints(pagacoint)}>
    <Table.Cell><Icon name='euro sign' size='big'></Icon>{bank}</Table.Cell>
    <Table.Cell>{pagacoint}</Table.Cell>
    <Table.Cell>
        <Link to={`/wallets/transaction/${id}`}
                  ><Button primary>Transaction</Button></Link></Table.Cell>
  </Table.Row>
   )  
}


export default Wallet;