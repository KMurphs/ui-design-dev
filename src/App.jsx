import './App.css';
import NavBar from "./components/NavBar"
import AsideBar from "./components/AsideBar"



function App() {
  return (
    <div className="App flex rounded-3xl overflow-hidden">
      <NavBar/> 
      <main className="w-3/5 flex flex-col m-8 justify-between">
        
        <section className="p-8 bg-yellow-400 rounded-2xl text-left">
          <h1 className="text-lg text-white font-bold">Hello Barbara!</h1>
          <h2 className="text-sm text-gray-100">Welcome back to Clean My Mac</h2>
        </section>

        <section>
          <h2 className="flex w-full justify-between items-center mb-4 text-sm"><span className="font-bold">December 2-8</span><span className="p-1 px-3 rounded-lg bg-blue-50 text-xs text-gray-400"><i className="lni lni-display mr-1"></i>Month</span>   </h2>
          <ul className="flex w-full justify-between border-gray-50 border-t-2 border-b-2 pt-2 pb-2 text-xs">
            <li className="flex flex-col items-center rounded-xl p-2 py-2"><span className="pb-2 text-2xs font-bold">Mon</span><span className="text-gray-300">2</span><span className="mt-1 rounded-full inline-block w-1 h-1 bg-blue-500"></span></li>
            <li className="flex flex-col items-center rounded-xl p-2 py-2"><span className="pb-2 text-2xs font-bold">Mon</span><span className="text-gray-300">2</span><span className="mt-1 rounded-full inline-block w-1 h-1 bg-blue-500"></span></li>
            <li className="flex flex-col items-center rounded-xl p-2 py-2"><span className="pb-2 text-2xs font-bold">Mon</span><span className="text-gray-300">2</span><span className="mt-1 rounded-full inline-block w-1 h-1 bg-blue-500"></span></li>
            <li className="flex flex-col items-center rounded-xl p-2 py-2 bg-red-400"><span className="pb-2 text-2xs font-bold text-white">Mon</span><span className="text-gray-300">2</span><span className="mt-1 rounded-full inline-block w-1 h-1 bg-blue-500"></span></li>
            <li className="flex flex-col items-center rounded-xl p-2 py-2"><span className="pb-2 text-2xs font-bold">Mon</span><span className="text-gray-300">2</span><span className="mt-1 rounded-full inline-block w-1 h-1 bg-blue-500"></span></li>
            <li className="flex flex-col items-center rounded-xl p-2 py-2"><span className="pb-2 text-2xs font-bold">Mon</span><span className="text-gray-300">2</span><span className="mt-1 rounded-full inline-block w-1 h-1 bg-blue-500"></span></li>
            <li className="flex flex-col items-center rounded-xl p-2 py-2"><span className="pb-2 text-2xs font-bold">Mon</span><span className="text-gray-300">2</span><span className="mt-1 rounded-full inline-block w-1 h-1 bg-blue-500"></span></li>
          </ul>
        </section>
        
        <section>
          <h2 className="flex w-full justify-between mb-4 text-sm font-bold"><span>Weekly Reports</span><span className="text-xs"><span className="mx-2">Today</span><span className="mx-2">Today</span><span className="mx-2">Today</span></span>   </h2>
          <ul className="flex w-full justify-between">
            <li className="flex flex-col"><span>icone</span><span>System Junk</span><span>35Gb</span></li>
            <li className="flex flex-col"><span>icone</span><span>System Junk</span><span>35Gb</span></li>
            <li className="flex flex-col"><span>icone</span><span>System Junk</span><span>35Gb</span></li>
            <li className="flex flex-col"><span>icone</span><span>System Junk</span><span>35Gb</span></li>
          </ul>
        </section>

        
        <section>
          <h2 className="flex w-full justify-between mb-4 text-sm font-bold"><span>Update Monitoring</span>   </h2>
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
