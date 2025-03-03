import Card from "./Card";
const Cards = ({form,handleResponse}) => {
   
    return (
        <div id="cards"className="flex flex-row gap-2 flex-wrap p-2 justify-center">
          
          {
          form?.selectedModels && form?.selectedModels.map((model) => 
            <Card key={model} modelName={model} form={form} cardResponse={handleResponse} />
          )
          }

         
      </div>
    )}

export default Cards;