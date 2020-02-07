import React from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
const User = user => {
console.log(user)

    return(
       
       
          
         <Table.Row>
        <Table.Cell>{user.user.name}</Table.Cell>
        <Table.Cell>{user.user.department}</Table.Cell>
        <Table.Cell><button>Wallets</button></Table.Cell>
      </Table.Row>
   
  
    )
}


export default User;