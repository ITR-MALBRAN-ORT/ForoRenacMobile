import React,{useState, useRef} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import CodeVerificationUi from './CodeVerificationUi'
import { LOGIN_STACK } from '../../../navigation/NavigationConstants'
export default function CodeVerificationScreen() {
    const pin1Ref = useRef(null)
  const pin2Ref = useRef(null)
  const pin3Ref = useRef(null)
  const pin4Ref = useRef(null)    
  const [pin1, setPin1] = useState('') 
  const [pin2, setPin2] = useState('') 
  const [pin3, setPin3] = useState('') 
  const [pin4, setPin4] = useState('') 
  const [error, setError] = useState('')

  const code = useRoute()
  const navigate = useNavigation()

function verifyCode() {
    if(code.params.code == pin1 + pin2 + pin3 + pin4){
        setError('')
        navigate.navigate(LOGIN_STACK.RESET_PASSWORD_SCREEN)
    }else{
        setError('Codigo Invalido')
    }    
}



function handlePin1(key){
  if(key != '' && key != 'Backspace'){
    pin2Ref.current.focus()
    setPin1(key)
  }
}
function handlePin2(key){
  if(key == 'Backspace'){
    pin1Ref.current.focus()
    setPin2('')
  }
  if(key != '' && key != 'Backspace'){
    pin3Ref.current.focus()
    setPin2(key)
  }
}

function handlePin3(key){
  if(key == 'Backspace'){
    pin2Ref.current.focus()
    setPin2('')
  }
  if(key != '' && key != 'Backspace'){
    pin4Ref.current.focus()
    setPin3(key)
  }
}
function handlePin4(key){
  if(key == 'Backspace'){
    pin3Ref.current.focus()
    setPin4('')
  }
    setPin4(key)
}

  return <CodeVerificationUi
            verifyCode={verifyCode}
            handlePin={{handlePin1, handlePin2, handlePin3, handlePin4}}
            refs = {{pin1Ref, pin2Ref, pin3Ref, pin4Ref}}
            error={error} 
         />
}