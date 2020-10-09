import Button from '../Components/Component/Button/Button'
import {loginEmail} from '../Firebase/client'
import Client from '../Firebase/client'

export default function Login (){

const handleClick = () => {
loginEmail().then(user => {

    console.log(user)
} ) .catch(err => {console.log(err)

})


}

return(<>



<h1>Soy login</h1>
<Button Onclick={handleClick}>login whit firebase</Button>
<Client></Client>



<style jsx>{`
hi{
    font-size: 2000px;
}
`}</style>
</>


)
}