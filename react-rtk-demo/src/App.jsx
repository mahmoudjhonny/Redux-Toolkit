import "./App.css";
import { CakeView } from "./features/cake/CakeView";
import { IcecreameView } from "./features/iceCreame/IcecreameView";
import { UserView } from "./features/user/UserView";

function App() {
  return (
    <div className="App">
      <CakeView />
      <IcecreameView />
      <UserView />
    </div>
  );
}

export default App;
