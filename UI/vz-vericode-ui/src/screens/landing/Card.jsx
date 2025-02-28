import Spinner from "../../utilities/Spinner";
import Loading from "../../utilities/Loading";
import  {useEffect, useState } from "react";
import * as serviceApi from "../../apiutil/vericodeServiceaApi";

const Card = ({modelName,form}) => {
    const [loading, setLoading] = useState(true);
    const [modeInfo, setModeInfo] = useState({});
      useEffect(() => {
        const payload = {
          question: form?.question,
          model_name: modelName,
        };
        serviceApi.post_api("get-model-response/",payload).then((response) => {
            setLoading(false);
            setModeInfo(response);
        }).catch((error) => {
          setLoading(false);
        });
      }, [modelName]);


    return (
        <div id="card" className=" w-[508px] h-[547px]   shadow-[0px_4px_4px_#00000040] rounded-[30px_30px_30px_30px]">

        <div className=" w-[506px] h-[42px]  flex  items-center justify-center bg-[#d9d9d9] rounded-[30px_30px_0px_0px]">
          <div className=" w-[200px] h-7 top-[7px]  font-subtitle-subtitle-large font-[number:var(--subtitle-subtitle-large-font-weight)] text-black text-[length:var(--subtitle-subtitle-large-font-size)] tracking-[var(--subtitle-subtitle-large-letter-spacing)] leading-[var(--subtitle-subtitle-large-line-height)] [font-style:var(--subtitle-subtitle-large-font-style)]">
            <b>{modelName} result</b>
          </div>
        </div>
        {
        loading ? <Loading /> : modeInfo && modeInfo?.text ?
        <textarea className="p-1 w-[508px] h-[505px] top-[42px] left-0 bg-ls-white rounded-[0px_0px_30px_30px] focus:outline-none" value={modeInfo?.text} /> : "<span> No data found... </span>"
        }
    </div>
    )}

export default Card;