import { Home } from "./pages/home";
import { ChatProvider } from './context/chat'

function App() {
  return (
    <ChatProvider>
      <div className="App">
        <Home />
      </div>
    </ChatProvider>
  );
}

export default App;
