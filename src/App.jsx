import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Greeting from './components/Greeting'
import ProductInfo from './components/ProductInfo'
import Person from './components/Person'
import Weather from './components/Weather'
import UserStatus from './components/UserStatus'
import UseStateTry from './components/UseStateTry'
import ExampleThree from './components/ExampleThree'
import ToDoList from './components/ToDoList'
import Profile from './components/Profile'
import ShoppingList from './components/ShoppingList'
import CopyInput from './components/CopyInput'
import UserProfile from './components/context/UserProfile'
import { UserProvider } from './components/context/UserContext'
import UpdateProfile from './components/context/UpdateProfile'
import Counter from './components/useReducer/Counter'
import UserefExample from './components/useRef/UserefExample'
import Timer from './components/useRef/Timer'
import Fetch from './components/customHooks/Fetch'
import CounterTwo from './components/projects-react/Counter'
import UseIdExample from './components/UseIdExample'
import Todo from './components/projects-react/Todo/Todo'
import Calculator from './components/projects-react/Calculator/Calculator'
import ToggleBg from './components/ToggleBG/ToggleBg'
import Hidden from './components/projects-react/HiddenSearchBar/HiddenSearchBAr'
import Testimonials from './components/projects-react/Testimonials/Testimonials'
import Accordion from './components/projects-react/Accordion/Accordion'
import FormValidation from './components/projects-react/Form-Validation/FormValidation'



function App() {
  //   const [count,setCount]= useState(0)
  
  // const handler = () => {
    //   setCount(count+1)
    // }

  return (
    <div className=''>
      <FormValidation />
      {/* <Hidden />
       */}
       {/* <Testimonials /> */}
     
{/* <Header /> */}
{/* <MainContent /> */}
{/* <Footer count={count} handler={handler} /> */}
{/* <Greeting timeOfDay={'Afternoon'} /> */}
{/* <ProductInfo /> */}
{/* <Person name='Bahaa' age="28" isMarried={true} count={count} handler={() => setCount(count-1)}/> */}
{/* <Person >
  <div className="border p-4 mt-4">
  <h1>Bahaa</h1>
<p>28</p>
  </div>
</Person> */}
{/* <Weather temperature={28} /> */}
{/* <UserStatus loggedIn = {true} isAdmin={false}/> */}
{/* <UseStateTry /> */}
{/* <ExampleThree /> */}
{/* <ToDoList /> */}
{/* <Profile /> */}
{/* <ShoppingList /> */}
{/* <CopyInput /> */}
{/* <UserProvider>
<UserProfile/>
<UpdateProfile />
</UserProvider> */}
{/* <Counter /> */}
 {/* <Fetch />
  */}
  {/* <UseIdExample /> */}
  {/* <CounterTwo /> */}
  {/* <Todo /> */}
 
    </div>
  )
}

export default App
