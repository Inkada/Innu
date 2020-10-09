import Nav from '../Components/Component/Nav/Nav'
import Bar from '../Components/Component/Charts/Bar';


export default function Filtros (){
return(<>

<div>
<Nav></Nav>
<aside>
<h1>Soy filtros</h1>
<container>
<span><Bar></Bar></span>
<span><Bar></Bar></span>
</container>
<container>
<span><Bar></Bar></span>
<span><Bar></Bar></span>
</container>
</aside>
</div>

<style jsx>{`

div {
    display: flex;
}

container{
    display: flex;
    flex-direction: row;
    
}

span {
   height: 200px;
   padding: 20px;
}

hi{
    font-size: 2000px;
}
`}</style>
</>


)
}