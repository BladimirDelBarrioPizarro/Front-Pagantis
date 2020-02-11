import React,{useState} from  'react'
import {useSelector,useDispatch} from 'react-redux'
import {getWalletsByNameAction} from '../actions/panel.actions'
import {postTransactionAction} from '../actions/panel.actions'
import { Select,Container,Input,Button } from 'semantic-ui-react'
import Swal from 'sweetalert2'

const Panel = ({match}) => {

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
const [bank,setBank] = useState('');

const handleName = (event) => {
    let name = event.target.textContent;
    getWalletsByName(name);
    setShowWallet(true)
}

const handleWallet = (event) => {
    setBank(event.target.textContent)
    setShowImport(true)
}


const optionsUserWallets = walletsByName.map((state, index) => ({
    key: state.id[index],
    text: state.bank
  }))

const handleTransaction = () => {
  let {id} = match.params;  
  const idWalletTrans = id;
  const walletRecep = walletsByName.filter(wallet => wallet.bank === bank)
  console.log(walletRecep)
  const idWalletRecep = walletRecep[0].id;
  const pagaCointsTrans = walletRecep[0].pagacoint;
  let pagacoints = document.getElementById('import').value;
  console.log("Id receptor "+idWalletRecep)
  console.log("Id transmisor"+idWalletTrans)
  console.log("pagaCointsTrans: "+pagaCointsTrans)
  console.log("pagacoints "+pagacoints)
  let trans = {
    idTrans:idWalletTrans,
    idRecep:idWalletRecep,
    pagacoint:pagacoints
  }
  if(pagaCointsTrans<pagacoints){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You do not have enough paycoints to perform the operation',
      footer: '<b>Transaction Error<b/>'
    })
    document.getElementById('import').value=''
  }
  else{
    console.log('Transaccion')
    const transaction = (trans) => dispatch(postTransactionAction(trans));
    if(transaction()){
      
    }
  }
  

}    

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
            <div>
                <Input
                label={{ basic: true, content: '$' }}
                labelPosition='right'
                placeholder='Enter pagacoints...'
                id="import"
              />
              <Button
                content='make transaction'
                primary
                onClick={handleTransaction}
              />
            </div>
            :''}
             
               
        </Container>
    )
}


export default Panel;