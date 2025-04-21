import './App.css'
import Headings1 from"./componand/Headings1"
import Button from"./componand/Button1"
function app() {
console.log("hello world")
  return (
    <div> 
    <h1 className="heading">HELLO WORLD</h1>
    <p className='lorem2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consectetur iusto aliquam tempore assumenda nostrum doloremque adipisci, officia nam harum ab architecto fugit nesciunt iure corporis praesentium molestias laborum. A?</p>
    <Button name="LOG IN"color="green"/>
    <h1 className="heading">HELLO </h1>
    <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consectetur iusto aliquam tempore assumenda nostrum doloremque adipisci, officia nam harum ab architecto fugit nesciunt iure corporis praesentium molestias laborum. A?</p>
    <h1 className='name'>THIS IS MY PAGES</h1>
    <Button name="RESISTRATION"color="yellow"/> <br/>
     <Button name="SUBMIT"color="blue"/> <br/>
     <Button name="SHOW"color="orange"/> <br/>

  </div>
  )
}
export default app; 
