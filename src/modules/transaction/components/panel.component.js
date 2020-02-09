import React,{useState} from  'react'
import {useSelector,useDispatch} from 'react-redux'
import {getWalletsByNameAction} from '../actions/panel.actions';
import { Select,Container } from 'semantic-ui-react'


const Panel = () => {

const[showWallet,setShowWallet] = useState(false)     
const[showImport,setShowImport] = useState(false)     
    
const users = useSelector((state) => state.users.data)

const optionsUser = users.map((state, index) => ({
  key: state.id[index],
  text: state.name
}))

const username = localStorage.getItem('userName')
const optionsNameFilter = optionsUser.filter(item => item.text !== username)

const dispatch = useDispatch();
const getWalletsByName = (name) => dispatch(getWalletsByNameAction(name));
const walletsByName = useSelector((state) => state.userWallets.data)

const handleName = (event) => {
    let name = event.target.textContent;
    console.log(name);
    getWalletsByName(name);
    setShowWallet(true)
}

const handleWallet = (event) => {
    console.log(event.target.textContent)
}


const optionsUserWallets = walletsByName.map((state, index) => ({
    key: state.id[index],
    text: state.bank
  }))
    

    return(  
        <Container>
              <Select
                    placeholder='Select the user you want to transfer pagacoints to'
                    options={optionsNameFilter}
                    onChange={handleName}
                    button={true}
                    id="name"
              />
            {showWallet ? 
            <div> 
                <Select
                    placeholder='Select Wallet'
                    options={optionsUserWallets}
                    onChange={handleWallet}
                    button={true}
                    id="wallet"
                />
            </div>    
            :''}

            {showImport?
                <h3>Select import</h3>  
            :''}
             
               
        </Container>
    )
}


export default Panel;