// import {ChatEngine} from 'react-chat-engine';
// import './App.css';

// import ChatFeed from './components/ChatFeed';
// const App = () => {
//     return (
//         <ChatEngine
//         height = '100vh'
//         projectID="06dac780-ded0-455c-adbe-549f013a1484"
//         userName="user1"
//         userSecret="123"
//         renderChatFeed = {(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
//         />
//     );
// }
// export default App;

import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '06dac780-ded0-455c-adbe-549f013a1484';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;