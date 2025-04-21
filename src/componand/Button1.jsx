import'../assets/css/button.css'
const Button1 =(props)=>{
    const name ="log in"
return(
   <button className='btn'style={{
    backgroundColor:props.color,
    margin:"6px"
   }} >{props.name}</button>
)
}
export default Button1;