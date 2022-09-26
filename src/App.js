import { useState } from "react";
// import InCrease from "./components/InCrease";
// import ChooseGift from "./components/ChooseGift";
// import GetInput from "./components/GetInput";
// import CheckRadio from "./components/CheckRadio";
// import CheckBox from "./components/CheckBox";
// import ToDoList from "./components/ToDoList";
// import Content from "./components/Content";
import Avatar from "./components/Avatar";
function App() {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show)
  }
  return (
    // <InCrease />
    // <ChooseGift />
    // <GetInput />
    // <CheckRadio />
    // <CheckBox />
    // <ToDoList />
    // {show && <Content />}

    <div>
      <button onClick={handleToggle}>Toggle</button>
      {show && <Avatar />}
    </div>

  );
}

export default App;
