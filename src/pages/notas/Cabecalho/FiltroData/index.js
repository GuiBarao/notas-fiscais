
function FiltroData({inicioValue, inicioOnChange, fimValue, fimOnChange}) {
    
    const style_date = " mt-2 bg-main_color rounded-lg p-1 text-black border-solid border border-black"
    const style_label = "text-black ml-2 text-[11px] absolute bg-main_color h-auto"

    return (
                
            <div className={"flex flex-row gap-2 "}>
                
                <div className="flex flex-col">
                    <label className = {style_label}>Data Inicial</label>
                    <input value={inicioValue} onChange={(e) => {inicioOnChange(e.target.value)}} type='date' className= {style_date} />
                </div>

                <div className="flex flex-col">

                    <label className = {style_label}>Data Final</label>
                    <input value={fimValue} onChange={(e) => {fimOnChange(e.target.value)}} type='date' className={style_date} />
                </div>
                
            </div>

    );
}

export default FiltroData;