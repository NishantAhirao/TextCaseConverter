import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
 

function App() {
  return (
    <>
      <Navbar  title="TextConverter" />
      <div id="mycont" className="container my-4 ">
        <TextArea title="You can enter text below" />
       </div>
       <footer>
        <div class="center">
            Copyright &copy; www.textConverter.com. All rights reserved!
        </div>
    </footer>
    </>
  );
}

export default App;
