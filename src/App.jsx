import "./App.css";
import Nav from "./components/projects-react/Advanced-Filtering/Navigation/Nav";
import Products from "./components/projects-react/Advanced-Filtering/products/Products";
import Recomended from "./components/projects-react/Advanced-Filtering/Recomended/Recomended";
import Sidebar from "./components/projects-react/Advanced-Filtering/Sidebar/Sidebar";

function App() {
  return (
    <div className="">
      <Sidebar />
      <Nav />
      <Recomended />
      <Products />
    </div>
  );
}

export default App;
