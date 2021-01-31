import './index.css';
import Profile from "../../assets/profile.jpg";





export default function AsideBar() {
  return (
    <aside className=" w-2/5 flex flex-col">
      
      <div className=" m-7 mt-8 flex justify-end items-center">
        <span className="ml-5"><i className="lni lni-display"></i></span>
        <span className="ml-5"><i className="lni lni-display"></i></span>
        <span className="inline-block h-8 w-8 bg-gray-400 rounded-lg ml-5 overflow-hidden"><img src={Profile} alt=""/></span>
      </div>
    
      <div className="bg-gray-100 flex-grow other-functions p-7">
        <div className="component-group grid">
          <h1 className="block text-left">Other Functions</h1>
          <div className="flex flex-col p-1 bg-white rounded-xl"><div className="function-header bg-red-200 rounded-lg p-1 pr-2 flex justify-between"> <span className="function-icon rounded inline-block w-6 h-6 bg-red-300">ic</span> 1</div><div className="function-data px-2 pt-3 pb-3 mt-1"><label htmlFor="fct" className="text-xs flex justify-between items-center"><span>Optimization</span><input id="fct" type="checkbox" className="ml-4"/></label></div></div>
          <div className="flex flex-col p-1 bg-white rounded-xl"><div className="function-header bg-red-200 rounded-lg p-1 pr-2 flex justify-between"> <span className="function-icon rounded inline-block w-6 h-6 bg-red-300">ic</span> 1</div><div className="function-data px-2 pt-3 pb-3 mt-1"><label htmlFor="fct" className="text-xs flex justify-between items-center"><span>Optimization</span><input id="fct" type="checkbox" className="ml-4"/></label></div></div>
          <div className="flex flex-col p-1 bg-white rounded-xl"><div className="function-header bg-red-200 rounded-lg p-1 pr-2 flex justify-between"> <span className="function-icon rounded inline-block w-6 h-6 bg-red-300">ic</span> 1</div><div className="function-data px-2 pt-3 pb-3 mt-1"><label htmlFor="fct" className="text-xs flex justify-between items-center"><span>Optimization</span><input id="fct" type="checkbox" className="ml-4"/></label></div></div>
          <div className="flex flex-col p-1 bg-white rounded-xl"><div className="function-header bg-red-200 rounded-lg p-1 pr-2 flex justify-between"> <span className="function-icon rounded inline-block w-6 h-6 bg-red-300">ic</span> 1</div><div className="function-data px-2 pt-3 pb-3 mt-1"><label htmlFor="fct" className="text-xs flex justify-between items-center"><span>Optimization</span><input id="fct" type="checkbox" className="ml-4"/></label></div></div>
        </div>
      </div>
    
      <div className="bg-gray-100 flex-grow other-statistics p-7 pt-0">
        <div className="component-group grid">
          <h1 className="block text-left">Statistics of Cleaning</h1>
          <div className="flex flex-col p-5 bg-white rounded-xl">
            <div className="statistics-header flex justify-between items-stretch">
              <span className="text-uppercase text-xs text-left">current: friday<h2 className="text-base mt-2">58%</h2></span>
              <span className=""><i className="lni lni-display"></i> <i className="lni lni-display"></i></span>
            </div>
            <ul className="statistics-data flex justify-between ">
              <li className="flex flex-col-reverse items-center mt-4"><span className="mt-3 text-xs text-gray-300">MO</span> <span className="bar-track bg-gray-100 w-1 h-20 inline-flex items-end"><span className="bar-value inline-block w-full h-3/4 bg-blue-200"></span></span></li>
              <li className="flex flex-col-reverse items-center mt-4"><span className="mt-3 text-xs text-gray-300">MO</span> <span className="bar-track bg-gray-100 w-1 h-20 inline-flex items-end"><span className="bar-value inline-block w-full h-1/2 bg-blue-200"></span></span></li>
              <li className="flex flex-col-reverse items-center mt-4"><span className="mt-3 text-xs text-gray-300">MO</span> <span className="bar-track bg-gray-100 w-1 h-20 inline-flex items-end"><span className="bar-value inline-block w-full h-2/5 bg-blue-200"></span></span></li>
              <li className="flex flex-col-reverse items-center mt-4"><span className="mt-3 text-xs text-gray-300">MO</span> <span className="bar-track bg-gray-100 w-1 h-20 inline-flex items-end"><span className="bar-value inline-block w-full h-5/6 bg-yellow-400"></span></span></li>
              <li className="flex flex-col-reverse items-center mt-4"><span className="mt-3 text-xs text-gray-300">MO</span> <span className="bar-track bg-gray-100 w-1 h-20 inline-flex items-end"><span className="bar-value inline-block w-full h-3/4 bg-blue-200"></span></span></li>
              <li className="flex flex-col-reverse items-center mt-4"><span className="mt-3 text-xs text-gray-300">MO</span> <span className="bar-track bg-gray-100 w-1 h-20 inline-flex items-end"><span className="bar-value inline-block w-full h-5/6 bg-blue-200"></span></span></li>
              <li className="flex flex-col-reverse items-center mt-4"><span className="mt-3 text-xs text-gray-300">MO</span> <span className="bar-track bg-gray-100 w-1 h-20 inline-flex items-end"><span className="bar-value inline-block w-full h-1/2 bg-blue-200"></span></span></li>
            </ul>
          </div>
        </div>
      </div>


    </aside>

  );
}

