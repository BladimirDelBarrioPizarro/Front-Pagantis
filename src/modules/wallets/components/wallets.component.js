import React from 'react';
import {useSelector} from 'react-redux';
import { Table } from 'semantic-ui-react'
import Wallet from './wallet.component.js'

const Wallets = () => {

  const wallets = useSelector((state) => state.wallets.data)
 
  return(
   <React.Fragment>
     <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Wallets</Table.HeaderCell>
        <Table.HeaderCell>Pagacoint</Table.HeaderCell>
        <Table.HeaderCell>Transaction</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body >
      {wallets.map((wallet,key) =>
          <Wallet key={key} wallet={wallet}/>
        
       )}
  </Table.Body>
  </Table>
   </React.Fragment>   
  )  
   
}

export default Wallets;