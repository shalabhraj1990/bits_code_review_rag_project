import { MdiArrowDownDrop1 } from "../../icons/MdiArrowDownDrop1";
import { MdiArrowDownDrop2 } from "../../icons/MdiArrowDownDrop2";


export const Home = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1375px] h-[1024px] relative">
        <footer className="absolute w-[1375px] h-20 top-[944px] left-0 bg-ls-bg">
          <p className="absolute top-[27px] left-[554px] font-headings-h6 font-[number:var(--headings-h6-font-weight)] text-lsblack text-[length:var(--headings-h6-font-size)] text-center tracking-[var(--headings-h6-letter-spacing)] leading-[var(--headings-h6-line-height)] whitespace-nowrap [font-style:var(--headings-h6-font-style)]">
            © 2025 VeriCode. All rights reserved.
          </p>
        </footer>

        <header className="absolute w-[1375px] h-20 top-0 left-0 bg-transparent">
          <div className="relative w-[1375px] h-20">
            <div className="flex flex-wrap w-[1375px] items-center justify-center gap-[10px_10px] absolute top-0 left-0 bg-ls-gray">
              <div className="relative flex-1 grow h-20 bg-[#d9d9d9]" />
            </div>

            <div className="absolute w-72 h-16 top-[11px] left-[546px]">
              <div className="absolute w-[152px] top-0 left-[71px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Inria_Serif',Helvetica] font-bold text-ls-primary text-[32px] tracking-[0] leading-10 ">
                <span className="text-[#f50a23]" >VeriCode</span>
              </div>

              <p className="absolute top-10 left-0 font-headings-h6 font-[number:var(--headings-h6-font-weight)] text-lsblack text-[length:var(--headings-h6-font-size)] text-center tracking-[var(--headings-h6-letter-spacing)] leading-[var(--headings-h6-line-height)] whitespace-nowrap [font-style:var(--headings-h6-font-style)]">
                A play on Verizon and code verification
              </p>
            </div>
          </div>
        </header>

        <div className="absolute w-[1375px] h-[237px] top-20 left-0 ">
          <div className="absolute w-[239px] h-[42px] top-[185px]">
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

       
          <input type='button' value='Submit' className="absolute cursor-pointer   w-[780px] h-[42px] bottom-0 right-0 bg-ls-primary rounded-[10px] border border-solid border-black shadow-[0px_4px_4px_#00000040] text-1xl font-bold bg-[#f50a23] m-2 hover:bg-red-800" />


          <div className="absolute w-full h-[145px] py-1">
            <textarea className="relative w-full h-[145px] bg-ls-white rounded-[10px] border border-solid border-black shadow-[0px_4px_4px_#00000040] p-1" placeholder="Paste the code here...">

            </textarea>
          </div>
        </div>
        
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

        <div className="absolute flex w-full h-[578px] top-[400px] left-0">
          <div className="flex w-full items-center justify-center gap-2.5 relative">
            <div className="flex items-center justify-center gap-2.5 relative flex-1 grow">
              <div className="relative flex-1 grow h-[578px] bg-ls-white" />
            </div>

            <div className="absolute w-[508px] h-[547px] top-3.5 left-0 shadow-[0px_4px_4px_#00000040]">
              <div className="absolute w-[506px] h-[547px] top-0 left-px bg-ls-white rounded-[20px] shadow-[0px_4px_4px_#00000040]" />

              <div className="absolute w-[510px] h-[547px] top-0 left-0">
                <div className="absolute w-[506px] h-[42px] top-0 left-0.5 bg-[#d9d9d9] rounded-[30px_30px_0px_0px]">
                  <div className="absolute w-[134px] h-7 top-[7px] left-[186px] font-subtitle-subtitle-large font-[number:var(--subtitle-subtitle-large-font-weight)] text-black text-[length:var(--subtitle-subtitle-large-font-size)] tracking-[var(--subtitle-subtitle-large-letter-spacing)] leading-[var(--subtitle-subtitle-large-line-height)] [font-style:var(--subtitle-subtitle-large-font-style)]">
                    Open AI result:
                  </div>
                </div>

                <div className="absolute w-[508px] h-[505px] top-[42px] left-0 bg-ls-white rounded-[0px_0px_30px_30px]" />
              </div>
            </div>

            <div className="w-[508px] h-[547px] left-[526px] shadow-[0px_4px_4px_#00000040] absolute top-3.5">
              <div className="absolute w-[506px] h-[547px] top-0 left-px bg-ls-white rounded-[20px] shadow-[0px_4px_4px_#00000040]" />

              <div className="absolute w-[510px] h-[547px] top-0 left-0">
                <div className="absolute w-[506px] h-[42px] top-0 left-0.5 bg-[#d9d9d9] rounded-[30px_30px_0px_0px]">
                  <div className="absolute w-[134px] h-7 top-[7px] left-[186px] font-subtitle-subtitle-large font-[number:var(--subtitle-subtitle-large-font-weight)] text-black text-[length:var(--subtitle-subtitle-large-font-size)] tracking-[var(--subtitle-subtitle-large-letter-spacing)] leading-[var(--subtitle-subtitle-large-line-height)] [font-style:var(--subtitle-subtitle-large-font-style)]">
                    Lamma result:
                  </div>
                </div>

                <div className="absolute w-[508px] h-[505px] top-[42px] left-0 bg-ls-white rounded-[0px_0px_30px_30px]" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
