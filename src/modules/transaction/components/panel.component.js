import React from  'react'
import {useSelector} from 'react-redux'
import { Select,Container,Dropdown } from 'semantic-ui-react'


const Panel = () => {
     
const users = useSelector((state) => state.users.data)

const stateOptions = users.map((state, index) => ({
  key: state.id[index],
  text: state.name,
  value: state.name[index]
}))



const handleWallets = (event) => {
    let name = event.target;
    console.log(name);
}
    
    return(  
        <Container>
            <h3>Select the user you want to transfer pagacoints to</h3>
              <Select
                    placeholder='Select User'
                    options={stateOptions}
                    onChange={handleWallets}
                    id="name"
              />
            <h3>Select wallet</h3>  
                <Select
                    placeholder='Select User'
                    options={stateOptions}
                />
        </Container>
    )
}


export default Panel;