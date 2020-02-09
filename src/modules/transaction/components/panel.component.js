import React from  'react'
import {useSelector,useDispatch} from 'react-redux'
import {getWalletsByNameAction} from '../actions/panel.actions';
import { Select,Container } from 'semantic-ui-react'


const Panel = () => {
     
const users = useSelector((state) => state.users.data)

const optionsUser = users.map((state, index) => ({
  key: state.id[index],
  text: state.name,
  value: state.name[index]
}))

const dispatch = useDispatch();
const getWalletsByName = (name) => dispatch(getWalletsByNameAction(name));
const walletsByName = useSelector((state) => state.userWallets.data)

const handleWallets = (event) => {
    let name = event.target.textContent;
    console.log(name);
    getWalletsByName(name);
}


const optionsUserWallets = walletsByName.map((state, index) => ({
    key: state.id[index],
    text: state.bank
  }))
    
    return(  
        <Container>
            <h3>Select the user you want to transfer pagacoints to</h3>
              <Select
                    placeholder='Select User'
                    options={optionsUser}
                    onChange={handleWallets}
                    id="name"
              />
            <h3>Select wallet</h3>  
                <Select
                    placeholder='Select User'
                    options={optionsUserWallets}
                />
             <h3>Select import</h3>  
               
        </Container>
    )
}


export default Panel;