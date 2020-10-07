import Nav from '../Components/Component/Nav/Nav'
import Bar from '../Components/Component/Charts/Bar';


export default function Filtros (){
return(<>

<div>
<Nav></Nav>
<h1>Soy filtros</h1>
<Bar></Bar>
</div>

<style jsx>{`

div {
    display: flex;
}

Bar{
    max-width: 100%;
}

hi{
    font-size: 2000px;
}
`}</style>
</>


)
}