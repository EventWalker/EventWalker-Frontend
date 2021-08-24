
import './index.css';
import LandingPage from "./pages/LandingPage";
import {Switch, Route} from "react-router-dom"
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import ManagersHome from "./component/ManagersHome";
import EventManager from "./component/EventManager";
import EventAttendee from "./component/EventAttendee";
import AddEvent from "./component/AddEvent";
import AccountProfile from "./component/AccountProfile";


function App() {
  return (
    <main>
      <Switch>
      <Route path ="/" component={LandingPage} exact/>
      <Route path ="/signup" component={SignupPage}/>
      <Route path ="/signin" component={SigninPage}/>
      <Route path ="/managershome" component={ManagersHome}/>
      <Route path ="/eventmanager" component={EventManager}/>
      <Route path ="/eventattendee" component={EventAttendee}/>
      <Route path ="/addevent" component={AddEvent}/>
      <Route path ="/profile" component={AccountProfile}/>
        </Switch>
    </main>
  );
}

export default App;
