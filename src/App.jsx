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
            <li className="flex flex-col items-center rounded-xl p-2 py-2 bg-red-400"><span className="pb-2 text-2xs font-bold text-white">Mon</span><span className="text-gray-300">2</span><span className="mt-1 rounded-full inline-block w-1 h-1 bg-white"></span></li>
            <li className="flex flex-col items-center rounded-xl p-2 py-2"><span className="pb-2 text-2xs font-bold">Mon</span><span className="text-gray-300">2</span><span className="mt-1 rounded-full inline-block w-1 h-1 bg-blue-500"></span></li>
            <li className="flex flex-col items-center rounded-xl p-2 py-2"><span className="pb-2 text-2xs font-bold">Mon</span><span className="text-gray-300">2</span><span className="mt-1 rounded-full inline-block w-1 h-1 bg-blue-500"></span></li>
            <li className="flex flex-col items-center rounded-xl p-2 py-2"><span className="pb-2 text-2xs font-bold">Mon</span><span className="text-gray-300">2</span><span className="mt-1 rounded-full inline-block w-1 h-1 bg-blue-500"></span></li>
          </ul>
        </section>
        
        <section>
          <h2 className="flex w-full justify-between mb-4 text-sm"><span className="font-bold">Weekly Reports</span><span className="text-xs"><span className="mx-2 text-gray-300">Today</span><span className="mx-2 font-bold">Today</span><span className="mx-2 text-gray-300">Today</span></span>   </h2>
          <ul className="flex w-full justify-between">
            <li className="flex flex-col border-gray-100 rounded-2xl border pt-3 w-20"><span className="inline-block w-7 h-7 border rounded-lg mx-auto">i</span><span className="text-2xs mt-3 mb-1 text-gray-500">System Junk</span><span className="mb-3 font-medium text-indigo-800">35Gb</span></li>
            <li className="flex flex-col border-gray-100 rounded-2xl border pt-3 w-20"><span className="inline-block w-7 h-7 border rounded-lg mx-auto">i</span><span className="text-2xs mt-3 mb-1 text-gray-500">System Junk</span><span className="mb-3 font-medium text-indigo-800">35Gb</span></li>
            <li className="flex flex-col border-gray-100 rounded-2xl border pt-3 w-20"><span className="inline-block w-7 h-7 border rounded-lg mx-auto">i</span><span className="text-2xs mt-3 mb-1 text-gray-500">System Junk</span><span className="mb-3 font-medium text-indigo-800">35Gb</span></li>
            <li className="flex flex-col border-gray-100 rounded-2xl border pt-3 w-20"><span className="inline-block w-7 h-7 border rounded-lg mx-auto">i</span><span className="text-2xs mt-3 mb-1 text-gray-500">System Junk</span><span className="mb-3 font-medium text-indigo-800">35Gb</span></li>
          </ul>
        </section>

        
        <section>
          <h2 className="flex w-full justify-between mb-4 text-sm font-bold"><span>Update Monitoring</span>   </h2>
          <ul className="flex w-full justify-between">
            <li className="flex justify-between border-gray-100 rounded-2xl border items-center"><span className="p-4 flex flex-col justify-between items-start"><span className="text-xs mb-1">System Files</span><span className="text-2xs text-gray-300">December 2019</span></span> <span className="h-3/5 inline-block my-1 border-l border-gray-1200 w-1 "></span> <span className="mx-4">25%</span></li>
            <li className="flex justify-between border-gray-100 rounded-2xl border items-center"><span className="p-4 flex flex-col justify-between items-start"><span className="text-xs mb-1">System Files</span><span className="text-2xs text-gray-300">December 2019</span></span> <span className="h-3/5 inline-block my-1 border-l border-gray-1200 w-1 "></span> <span className="mx-4">25%</span></li>
          </ul>
        </section>

      </main>
      <AsideBar/>

    </div>
  );
}

export default App;
