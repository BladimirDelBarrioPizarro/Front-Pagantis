import React,{useState} from  'react'
import {useSelector,useDispatch} from 'react-redux'
import {getWalletsByNameAction} from '../actions/panel.actions'
import {postTransactionAction} from '../actions/panel.actions'
import { Select,Container,Input,Button } from 'semantic-ui-react'
import Swal from 'sweetalert2'

const Panel = ({match,history}) => {

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
let walletsByName = useSelector((state) => state.userWallets.data)
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

if(walletsByName == undefined){
  walletsByName = []
}

const optionsUserWallets = walletsByName.map((state, index) => ({
    key: state.id[index],
    text: state.bank
  }))

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })   

let wallets = useSelector((state) => state.wallets.data)   
const handleTransaction = () => {
  const walletRecep = walletsByName.filter(wallet => wallet.bank === bank)
  console.log(wallets)
  let pagacoints = document.getElementById('import').value;
  let {id} = match.params;
  const idWalletTrans = Number.parseInt(id)
  const walletTrans = wallets.filter(item => item.id == idWalletTrans)
  console.log(walletTrans)
  const pagaCointsTrans = walletTrans[0].pagacoint 
  const idWalletRecep = walletRecep[0].id;        
      console.log("Id receptor "+idWalletRecep)
      console.log("Id transmisor"+id)
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
    history.push('/') 
  }
  else{
    console.log('Transaccion')
    swalWithBootstrapButtons.fire({
      title: `You are sure to make the transaction for ${pagacoints} pagacoints?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, transaction made!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        const transaction = (trans) => dispatch(postTransactionAction(trans));
        if(transaction(trans)){
          swalWithBootstrapButtons.fire(
            'Yes, transaction made!',
            'your pagacoints have been transferred.',
            'success'
          )
        }
        history.push('/') 
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your pagacoints is safe :)',
          'error'
        )
      }
      history.push('/') 
    }) 
  }
  document.getElementById('import').value = '';
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