import "./App.css";
import logo from "./assets/techarea.png";
function App() {
  return (
    <div className="flex flex-col justify-center  items-center mx-auto px-10 space-y-4">
      <img src={logo} className="size-64" />
      <h1 className="font-bold text-xl md:text-4xl">Welcome to techarea</h1>
      <p>Your trusted patner for custom software development and ai products</p>

      <p>
        Contact:{" "}
        <a href="mailto:contact.techarea@gmail.com" className="text-blue-500">
          contact.techarea@gmail.com
        </a>
      </p>
    </div>
  );
}

export default App;
