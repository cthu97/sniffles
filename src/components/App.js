import React, {useState} from "react";
import TopNav from "./TopNav";
import Home from "./Home";
import Form from "./Form";
import LoginPage from "./Login";
import Profile from "./Profile";
import ChatRoomList from "./ChatRoomList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import "./App.css";

//candidate stuff
import CandidatesList from "./Candidates/CandidatesList";

// chat
import Chat from "./Chat/Chat";
import { SocketProvider } from "../socketContext";
import { MainProvider } from "../mainContext";
import { UsersProvider } from "../usersContext";
import Candidates from "./Candidates/CandidatesList";

//register stuff
import onSave from "./Register";

// const profile = {
//   id: 1,
//   imageURL: 'https://tinyurl.com/kb7dhhck',
//   name: 'Bigboi',
//   breed: 'Maltese',
//   location: 'Vancouver',
//   gender: 'male',
//   age: 3,
//   size: 'small',
//   owner: 'BigBoiOwner',
//   email: 'a@a.com',
//   password: 'a',
//   description: 'actually very smol'
// }
 

function App(props) {
  console.log('props', props)
  console.log("props.location.state", props.location.state);
  const [profile] = useState(props.location.state.profile[0]);
  console.log('profile', profile);

  return profile.name ? ( 
    <div className="App">
          {/* <Route exact path="/">
            <Redirect to="/Candidate" />
          </Route> */}

          {/* <Route path="/profile"> */}
            <TopNav />
            <Profile profile={profile} />
          {/* </Route> */}

          <Route path="/register">
            <h1> register </h1>
            <Form onSave={onSave} submit={"Create"} />
          </Route>

          <Route path="/candidate">
            <h1> candidate </h1>
            <TopNav />
            <CandidatesList profile={profile} />
          </Route>       

          <MainProvider>
            <UsersProvider>
              <SocketProvider>
                <Route path="/messages">
                  <TopNav />
                  <ChatRoomList profile={profile} />
                </Route>
                <Route path="/message">
                  <Chat />
                </Route>
              </SocketProvider>
            </UsersProvider>
          </MainProvider>
    </div>
  ) : (<div><h1>PLS LOG IN THX</h1></div>)
};
export default withRouter(App);
