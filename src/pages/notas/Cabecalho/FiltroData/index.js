
function FiltroData({inicioValue, inicioOnChange, fimValue, fimOnChange}) {
    
    const style_date = " mt-2 bg-main_color rounded-lg p-1 text-text_secondary border-solid border border-border_secondary"
    const style_label = "text-text_secondary ml-2 text-[11px] absolute bg-background_primary h-auto"

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