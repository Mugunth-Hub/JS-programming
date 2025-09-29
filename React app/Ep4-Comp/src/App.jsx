import './App.css'
import Footer from "./componets/Footer"
import Content from "./components/Content"

function App(){

  let user ="Mugunthan"

  return(
    <div className="app">
    <Header user = {user}/>
    <Content/>
    <Footer user = "Mugunthan"/>
    </div>
  )
}

export default App
