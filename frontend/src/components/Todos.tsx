

    

interface Todo {
    title: string;
    description: string;
    done?: boolean
  }

interface TodosProps{
    todos: Todo[];
}

export function Todos({todos}:TodosProps) {
    return <div> {todos.map((prop,index)=>{
        return <div className="flex flex-col mt-10" key={index}>
    <div className="rounded-lg bg-red-100 w-80 h-max text-center px-2 py-2 shadow-xl grid grid-cols-3 ">
        <div className="col-span-2 ">
            <div className="flex">
                <div className="font-medium">
                    Title:
                </div>
                <div className="px-2">
                    {prop.title}
                </div>
                
            </div>
            <div className="flex">
                <div className="font-medium">
                Description:
                </div>
                <div className="px-2">
                {prop.description}
                </div>
            </div>
        </div>
        <div className="col-span-1 place-content-center" >
        <button type="button" className="text-white bg-red-400 hover:bg-red-300 focus:ring-4 focus:ring-red-300 font-medium 
                        rounded-lg text-sm px-5 py-2.5">Done</button>

        </div>
          
        
        
    
    </div>
</div>

    })}</div>
    
}

