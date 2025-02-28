
export const Home = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full h-[1024px] relative">
        <footer className="absolute w-full h-20 top-[944px] left-0 bg-ls-bg">
          <p className="flex my-3 justify-center top-[27px] left-[554px] font-headings-h6 font-[number:var(--headings-h6-font-weight)] text-lsblack text-[length:var(--headings-h6-font-size)] text-center tracking-[var(--headings-h6-letter-spacing)] leading-[var(--headings-h6-line-height)] whitespace-nowrap [font-style:var(--headings-h6-font-style)]">
            © 2025 VeriCode. All rights reserved.
          </p>
        </footer>

        <header className="absolute w-full h-20 top-0 left-0 bg-transparent">
          <div className="relative w-full h-20">
            <div className="flex flex-wrap w-full items-center justify-center gap-[10px_10px] absolute top-0 left-0 bg-ls-gray">
              <div className="relative flex-1 grow h-20 bg-[#d9d9d9]" />
            </div>

            <div className="absolute w-72 h-16 top-[11px] left-1/2 ">
              <div className="absolute  top-0 [text-shadow:0px_4px_4px_#00000040] [font-family:'Inria_Serif',Helvetica] font-bold text-ls-primary text-[42px] tracking-[0] leading-10 ">
                <span className="text-[#f50a23]" >VeriCode</span>
              </div>

              <p className="absolute top-10 right-[71px]  font-headings-h6 font-[number:var(--headings-h6-font-weight)] text-lsblack text-[length:var(--headings-h6-font-size)] text-center tracking-[var(--headings-h6-letter-spacing)] leading-[var(--headings-h6-line-height)] whitespace-nowrap [font-style:var(--headings-h6-font-style)]">
                A play on Verizon and code verification
              </p>
            </div>
          </div>
        </header>

        <div id="form" className="absolute w-full h-[237px] top-20 left-0 ">
          <div className="absolute flex w-[239px] h-[42px] top-[185px]">
            <div className="mx-2">Select Models: </div>
            <div className="relative w-[237px] h-[42px] bg-ls-white rounded-[10px] border border-solid border-black shadow-[0px_4px_4px_#00000040] ">
            <select className="relative cursor-pointer w-[237px] h-[42px] rounded-[10px] p-2" label="Select Version">
              <option>ALL</option>
              <option>OpenAI</option>
              <option>Mistral</option>
              <option>Llama</option>
              <option>DeepSeek</option>
              <option>Falcan</option>
            </select>
            </div>
          </div>

  
          <input type='button' value='Submit' className="absolute cursor-pointer   w-[780px] h-[42px] bottom-0 right-0 bg-ls-primary rounded-[10px] border border-solid border-black shadow-[0px_4px_4px_#00000040] text-1xl font-bold bg-[#f50a23] m-2 hover:bg-red-800" />


          <div className="absolute w-full h-[145px] py-1">
            <textarea className="relative w-full h-[145px] bg-ls-white rounded-[10px] border border-solid border-black shadow-[0px_4px_4px_#00000040] p-1" placeholder="Paste the code here...">

            </textarea>
          </div>
        </div>
        <div id='results' className="">
        <div className="absolute w-full h-[47px] top-[317px] left-0 bg-ls-white border-t  border-gray-400 my-4">
          <div className="relative w-[531px] h-[42px] top-[5px] left-[814px]">
            <div className="absolute w-[311px] h-[42px] top-0 left-[219px]">
                                      <div className="relative w-[237px] h-[42px] bg-ls-white rounded-[10px] border border-solid border-black shadow-[0px_4px_4px_#00000040]">
            <select className="relative cursor-pointer w-[237px] h-[42px] rounded-[10px] p-2" label="Select Version">
              <option>ALL</option>
              <option>OpenAI</option>
              <option>Mistral</option>
              <option>Llama</option>
              <option>DeepSeek</option>
              <option>Falcan</option>
            </select>
            </div>
            </div>

            <p className="absolute w-[219px] top-[7px] left-0 font-subtitle-subtitle-small font-[number:var(--subtitle-subtitle-small-font-weight)] text-lsblack text-[length:var(--subtitle-subtitle-small-font-size)] tracking-[var(--subtitle-subtitle-small-letter-spacing)] leading-[var(--subtitle-subtitle-small-line-height)] [font-style:var(--subtitle-subtitle-small-font-style)]">
              Merge the result with :
            </p>
          </div>
        </div>

        <div id="cards" className="absolute flex flex-row w-full h-[578px] top-[400px] gap-2">
       
      

            <div id="card" className=" w-[508px] h-[547px]   shadow-[0px_4px_4px_#00000040] rounded-[30px_30px_30px_30px]">

                <div className=" w-[506px] h-[42px]  flex items-center justify-center bg-[#d9d9d9] rounded-[30px_30px_0px_0px]">
                  <div className=" w-[134px] h-7 top-[7px]  font-subtitle-subtitle-large font-[number:var(--subtitle-subtitle-large-font-weight)] text-black text-[length:var(--subtitle-subtitle-large-font-size)] tracking-[var(--subtitle-subtitle-large-letter-spacing)] leading-[var(--subtitle-subtitle-large-line-height)] [font-style:var(--subtitle-subtitle-large-font-style)]">
                    Open AI result
                  </div>
                </div>

                <textarea className=" w-[508px] h-[505px] top-[42px] left-0 bg-ls-white rounded-[0px_0px_30px_30px] focus:outline-none" />
             
            </div>
       
        </div>
        </div>
        
        {/* <div role="Loading" className="absolute  w-full h-screen flex items-center justify-center z-50 bg-gray-200 border-gray-200 hover:bg-gray-300 opacity-55"> 
          <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>

        </div> */}

      </div>
    </div>
  );
};
