import './App.css';
import NavBar from "./components/NavBar"
import AsideBar from "./components/AsideBar"



function App() {
  return (
    <div className="App flex rounded-4xl overflow-hidden">
      <NavBar/> 
      <main className="w-3/5 flex flex-col m-7 justify-between">
        
        <section className="p-8 bg-yellow-400">
          <h1>Hello Barbara</h1>
          <h2>Welcome back to Clean My Mac</h2>
        </section>

        <section>
          <h2 className="flex w-full justify-between"><span>December 2-8</span><span>1 2</span>   </h2>
          <ul className="flex w-full justify-between">
            <li className="flex flex-col"><span>Mon</span><span>2</span><span>.</span></li>
            <li className="flex flex-col"><span>Mon</span><span>2</span><span>.</span></li>
            <li className="flex flex-col"><span>Mon</span><span>2</span><span>.</span></li>
            <li className="flex flex-col"><span>Mon</span><span>2</span><span>.</span></li>
            <li className="flex flex-col"><span>Mon</span><span>2</span><span>.</span></li>
            <li className="flex flex-col"><span>Mon</span><span>2</span><span>.</span></li>
            <li className="flex flex-col"><span>Mon</span><span>2</span><span>.</span></li>
          </ul>
        </section>
        
        <section>
          <h2 className="flex w-full justify-between"><span>Weekly Reports</span><span><span>Today</span><span>Today</span><span>Today</span></span>   </h2>
          <ul className="flex w-full justify-between">
            <li className="flex flex-col"><span>icone</span><span>System Junk</span><span>35Gb</span></li>
            <li className="flex flex-col"><span>icone</span><span>System Junk</span><span>35Gb</span></li>
            <li className="flex flex-col"><span>icone</span><span>System Junk</span><span>35Gb</span></li>
            <li className="flex flex-col"><span>icone</span><span>System Junk</span><span>35Gb</span></li>
          </ul>
        </section>

        
        <section>
          <h2 className="flex w-full justify-between"><span>Update Monitoring</span>   </h2>
          <ul className="flex w-full justify-between">
            <li className="grid"><span>System Files</span><span>December 2019</span><span>25%</span></li>
            <li className="grid"><span>System Files</span><span>December 2019</span><span>25%</span></li>
          </ul>
        </section>

      </main>
      <AsideBar/>

    </div>
  );
}

export default App;
