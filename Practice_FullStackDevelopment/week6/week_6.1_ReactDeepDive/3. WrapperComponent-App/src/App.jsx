//A wrapper component is a component that takes other 'react' component as an input
function App() {
  return <div>
    {/* Anything inside 'CardWrapper' is(are) child(ren) */}
    <CardWrapper>
      <CardWrapper>
        <CardWrapper>
          <TextComponent/>
        </CardWrapper>
      </CardWrapper>
    </CardWrapper>
    <b></b>
    <b></b>
    <CardWrapper>
      Its second CARD
    </CardWrapper>
  </div>
 }

//children --> everything written inside when 'CardWrapper' is rendered in when calling the component as above
//in above component or function
//so, 'CardWrapper' can be written once but inner logic can be written as need as in above function or component

 function CardWrapper({children}){
 //create a div which has a border
 //And inside div, renders the prop(children)
  return <div style={{border: "2px solid black", padding: 25, margin: 15}}>
    {/* all children are being rendered */}
    {children}
  </div>
 }

 function TextComponent(){
  return <div>
    Hi there from TEXT Component !!! 
  </div>
 }

export default App
