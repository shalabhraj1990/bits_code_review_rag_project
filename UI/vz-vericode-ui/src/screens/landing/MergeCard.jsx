import Spinner from "../../utilities/Spinner";
import Loading from "../../utilities/Loading";
import  {useEffect, useState } from "react";
import * as serviceApi from "../../apiutil/vericodeServiceaApi";

const MergeCard = ({mergeModelName,modelsResponse,form}) => {
    const [loading, setLoading] = useState(true);
    const [modeInfo, setModeInfo] = useState({});
      useEffect(() => {
        if(form && mergeModelName && modelsResponse?.length > 0){
          const code = form?.question;
          let context = "";
          const uniqueModelsResponse = Array.from(new Set(modelsResponse.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));
          uniqueModelsResponse?.map((res,index) => {
            context += `Context ${index} : \n` + res?.text + `\n ----------- \n`;
          })
          const prompt =  `Code :\n ${code} \n ----------- \n ${context}`;
          const payload = {
            question: prompt,
            model_name: mergeModelName,
          };
          serviceApi.post_api("get-merge-response/",payload).then((response) => {
            setLoading(false);
            setModeInfo(response);
        }).catch((error) => {
          setLoading(false);
        });
      }
       
      }, [mergeModelName]);


    return (
      <div id="card" className=" w-full h-[547px]   shadow-[0px_4px_4px_#00000040] rounded-[30px_30px_30px_30px]">

        <div className=" w-[506px] h-[42px]  flex  items-center justify-center bg-[#d9d9d9] rounded-[30px_30px_0px_0px]">
          <div className=" w-[200px] h-7 top-[7px]  font-subtitle-subtitle-large font-[number:var(--subtitle-subtitle-large-font-weight)] text-black text-[length:var(--subtitle-subtitle-large-font-size)] tracking-[var(--subtitle-subtitle-large-letter-spacing)] leading-[var(--subtitle-subtitle-large-line-height)] [font-style:var(--subtitle-subtitle-large-font-style)]">
            <b>{mergeModelName} result</b>
          </div>
        </div>
        {
        loading ? <Loading /> : modeInfo && modeInfo?.text ?
        <textarea className="p-1 w-[508px] h-[505px] top-[42px] left-0 bg-ls-white rounded-[0px_0px_30px_30px] focus:outline-none" value={modeInfo?.text} /> : "No data found.Please try again!!!"
        }
    </div>
    )}

export default MergeCard;