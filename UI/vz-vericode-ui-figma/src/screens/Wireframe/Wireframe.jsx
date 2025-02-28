import React from "react";
import { MdiArrowDownDrop1 } from "../../icons/MdiArrowDownDrop1";
import { MdiArrowDownDrop2 } from "../../icons/MdiArrowDownDrop2";

function Wireframe() {
  return (
    <>
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
              <div className="absolute w-[152px] top-0 left-[71px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Inria_Serif',Helvetica] font-bold text-ls-primary text-[32px] tracking-[0] leading-10">
                VeriCode
              </div>

              <p className="absolute top-10 left-0 font-headings-h6 font-[number:var(--headings-h6-font-weight)] text-lsblack text-[length:var(--headings-h6-font-size)] text-center tracking-[var(--headings-h6-letter-spacing)] leading-[var(--headings-h6-line-height)] whitespace-nowrap [font-style:var(--headings-h6-font-style)]">
                A play on Verizon and code verification
              </p>
            </div>
          </div>
        </header>

        <div className="absolute w-[1375px] h-[237px] top-20 left-0 border border-dashed border-black">
          <div className="absolute w-[239px] h-[42px] top-[185px] left-[162px]">
            <div className="relative w-[237px] h-[42px] bg-ls-white rounded-[10px] border border-solid border-black shadow-[0px_4px_4px_#00000040]">
              <MdiArrowDownDrop1 className="!absolute !w-8 !h-8 !top-1 !left-[204px]" />
              <div className="absolute top-[9px] left-14 opacity-50 font-subtitle-subtitle-small font-[number:var(--subtitle-subtitle-small-font-weight)] text-black text-[length:var(--subtitle-subtitle-small-font-size)] tracking-[var(--subtitle-subtitle-small-letter-spacing)] leading-[var(--subtitle-subtitle-small-line-height)] whitespace-nowrap [font-style:var(--subtitle-subtitle-small-font-style)]">
                Select LLM’s
              </div>
            </div>
          </div>

          <img
            className="absolute w-[788px] h-[50px] top-[185px] left-[430px]"
            alt="Primary button"
            src="https://c.animaapp.com/WbZ1KeN7/img/primary-button.png"
          />

          <div className="absolute w-[1054px] h-[145px] top-5 left-[162px]">
            <div className="relative w-[1052px] h-[145px] bg-ls-white rounded-[10px] border border-solid border-black shadow-[0px_4px_4px_#00000040]">
              <div className="absolute top-[60px] left-[37px] opacity-50 font-subtitle-subtitle-small font-[number:var(--subtitle-subtitle-small-font-weight)] text-black text-[length:var(--subtitle-subtitle-small-font-size)] tracking-[var(--subtitle-subtitle-small-letter-spacing)] leading-[var(--subtitle-subtitle-small-line-height)] whitespace-nowrap [font-style:var(--subtitle-subtitle-small-font-style)]">
                Past The Code...
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-[1375px] h-[47px] top-[317px] left-0 bg-ls-white">
          <div className="relative w-[531px] h-[42px] top-[5px] left-[814px]">
            <div className="absolute w-[311px] h-[42px] top-0 left-[219px]">
              <div className="relative h-11 -top-px -left-px bg-ls-white rounded-[10px] border border-solid border-black shadow-[0px_4px_4px_#00000040]">
                <MdiArrowDownDrop2 className="!absolute !w-[37px] !h-[37px] !top-[3px] !left-[270px]" />
                <div className="absolute w-[119px] top-2.5 left-[74px] opacity-50 font-subtitle-subtitle-small font-[number:var(--subtitle-subtitle-small-font-weight)] text-ls-white text-[length:var(--subtitle-subtitle-small-font-size)] tracking-[var(--subtitle-subtitle-small-letter-spacing)] leading-[var(--subtitle-subtitle-small-line-height)] [font-style:var(--subtitle-subtitle-small-font-style)]">
                  Select LLM’s
                </div>
              </div>
            </div>

            <p className="absolute w-[219px] top-[7px] left-0 font-subtitle-subtitle-small font-[number:var(--subtitle-subtitle-small-font-weight)] text-lsblack text-[length:var(--subtitle-subtitle-small-font-size)] tracking-[var(--subtitle-subtitle-small-letter-spacing)] leading-[var(--subtitle-subtitle-small-line-height)] [font-style:var(--subtitle-subtitle-small-font-style)]">
              Merge the result with :
            </p>
          </div>
        </div>

        <div className="absolute w-[1375px] h-[578px] top-[366px] left-0">
          <div className="flex w-[1375px] items-center justify-center gap-2.5 relative">
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

            <img
              className="w-[330px] h-[555px] left-[1045px] absolute top-3.5"
              alt="Cards"
              src="https://c.animaapp.com/WbZ1KeN7/img/cards.png"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Wireframe