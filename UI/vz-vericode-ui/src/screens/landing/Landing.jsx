import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import MergeCard from "./MergeCard";

import * as serviceApi from "../../apiutil/vericodeServiceaApi";

function Landing() {

  const [form, setForm] = useState({ question: "", model: "ALL",selectedModels:[],mergeModel:"",showResults: false,showMergeModel: false });
  const [models, setModels] = useState([]);
  const [summarymodels, setSummarymodels] = useState([]);
  const [modelsResponse, setModelsResponse] = useState([]);

  useEffect(() => {
    serviceApi.get_api("get-models").then((response) => {
      setModels(response);
      setForm((prev) => ({
        ...prev,
        selectedModels: response?.map(o => o.model_name),
      }));
    }).catch((error) => {
      console.log("error", error);
    });

    serviceApi.get_api("get-summarize-models").then((response) => {
      setSummarymodels(response);
    }).catch((error) => {
      console.log("error", error);
    });

  }, []);


  function handleModelChange(event) {

    setModelsResponse([])
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));


      

      if((name == 'model' && value.toUpperCase() == "ALL") ){
        setForm((prev) => ({
          ...prev,
          selectedModels: models.map(o => o.model_name),
        }));
      }
      else{
        setForm((prev) => ({
          ...prev,
          selectedModels: [value],
        }));
      }
 


  }

  function handleModelResponse(data) {
    modelsResponse.push(data);
    setModelsResponse(modelsResponse);
  }

  function handleMergeResponse(data) {
    console.log("mergeData", data);
    }
  

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleMergeModelChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,showMergeModel: true
    }));
  }

  

  function onSubmit(event) {
    setModelsResponse([])
    if(form?.question && form?.model){
      setForm((prev) => ({...prev, showResults: true}));
    }    
  }
  return (
    <>
    
<div  className="grid grid-cols-1 grid-flow-row-dense w-full h-full">
    <div id = "header" className=" border border-indigo-600">
    <header className=" w-full h-20 top-0 left-0 bg-transparent">
              <div className="relative w-full h-20">
                <div className="flex flex-wrap w-full items-center justify-center gap-[10px_10px] absolute top-0 left-0 bg-ls-gray">
                  <div className="relative flex-1 grow h-20 bg-[#d9d9d9]" />
                </div>

                <div className="absolute w-72 h-16 top-[11px] left-1/2 ">
                  <div className="absolute  top-0 [text-shadow:0px_4px_4px_#00000040] [font-family:'Inria_Serif',Helvetica] font-bold text-ls-primary text-[42px] tracking-[0] leading-10 ">
                    <span className="text-[#f50a23]" >VeriCode</span>
                  </div>

                  <p className="absolute top-10 right-[71px]  font-headings-h6 font-[number:var(--headings-h6-font-weight)] text-lsblack text-[length:var(--headings-h6-font-size)] text-center tracking-[var(--headings-h6-letter-spacing)] leading-[var(--headings-h6-line-height)] whitespace-nowrap [font-style:var(--headings-h6-font-style)]">
                    A play on VeriCode and code verification
                  </p>
                </div>
              </div>
            </header>
    </div>
    <div id="body" className="bg-white w-full  grid grid-cols-1">

      <div id="form" className=" w-full h-[237px] grid grid-cols-2">
  
              <div className=" w-full h-[145px] py-1 col-span-2">
                <textarea name="question" onChange={handleChange} value={form.question}className=" w-full h-[145px] bg-ls-white rounded-[10px] border border-solid border-black shadow-[0px_4px_4px_#00000040] p-1" placeholder="Ask a question or paste the code here...">

                </textarea>
              </div>
              <div className=" w-full h-[42px] flex flex-row col-span-2">
                  <div className="mx-2">Select Models: </div>
                  <div className=" w-[237px]  bg-ls-white rounded-[10px] border border-solid border-black shadow-[0px_4px_4px_#00000040] ">
                  <select name = "model" onChange={handleModelChange} className=" cursor-pointer w-[237px]  rounded-[10px] p-2" label="Select Version">
                    <option>ALL</option>
                    {models && models.map(o => {
                      return (
                        <option key={o.model_id} value={o.model_name}>
                          {o.model_name}
                        </option>
                      );
                    })}

                  </select>
                  </div>
                  <div className="grow px-1"><input type='button' value='Submit' onClick={onSubmit} className=" cursor-pointer   w-full h-[42px] bottom-0 right-0 bg-ls-primary rounded-[10px] border border-solid border-black shadow-[0px_4px_4px_#00000040] text-1xl font-bold bg-[#f50a23]  hover:bg-red-800 " /></div>
                  
              </div>



      </div>
      {form?.showResults && form?.model.toUpperCase() == "ALL" && <div id='additional-control' className="grid grid-cols-2 bg-ls-white border-t  border-gray-400 pt-2">
            <div className="mx-2  text-right ">Merge the result with : </div>
            <div className=" w-full h-[47px] ">
              
                 
              <div className=" w-[237px] h-[42px] bg-ls-white rounded-[10px] border border-solid border-black shadow-[0px_4px_4px_#00000040]">
                  <select name="mergeModel" onChange={handleMergeModelChange} className=" cursor-pointer w-[237px] h-[42px] rounded-[10px] p-2" label="Select Version">
                  <option>Select</option>
                  {summarymodels && summarymodels?.map(o => {
                      return (
                        <option key={o.model_id} value={o.model_name}>
                          {o.model_name}
                        </option>
                      );
                    })}
                  </select>
              </div>
            </div>        
      </div>}


      
      {form?.showResults && form?.selectedModels && <Cards handleResponse = {handleModelResponse} form={form} />}
    </div>
    <div id="footer" className="fixed bottom-0 left-1/2" >
      
            <footer className="pt-2">
              <p className="flex my-3 justify-center top-[27px] left-[554px] font-headings-h6 font-[number:var(--headings-h6-font-weight)] text-lsblack text-[length:var(--headings-h6-font-size)] text-center tracking-[var(--headings-h6-letter-spacing)] leading-[var(--headings-h6-line-height)] whitespace-nowrap [font-style:var(--headings-h6-font-style)]">
                © 2025 VeriCode. All rights reserved.
              </p>
            </footer>
      </div> 
</div>


{ form && form?.showMergeModel  && 
      <div name="mergeModel" className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all  w-1/2 ">
              <div className="bg-white ">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-base font-semibold text-gray-900" id="modal-title">Merged Results with : {form?.mergeModel}</h3>
                    <div className="mt-2">
                      {form?.mergeModel && modelsResponse?.length > 0 ? <MergeCard key={form?.mergeModel} mergeModelName={form?.mergeModel} form={form}  modelsResponse={modelsResponse} /> : "Please try again..."}
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto" onClick={() =>!  setForm((prev) => ({
      ...prev,
      showMergeModel: false
    }))}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      }

</>
  );
};

export default Landing;