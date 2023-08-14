import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"

export default function Home() {

  return (
    <>
      <header className="">
        <Navbar />
        <ProductList />
        <Footer/>
        
      </header>
      
    </>
  )
 
}