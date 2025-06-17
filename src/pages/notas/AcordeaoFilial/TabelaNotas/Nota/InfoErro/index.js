
function InfoErro({mensagem, log}) {

    const style_titulo = "m-0 text-lg font-semibold"
    const style_info = "text-base font-medium"

    return  (
        <section className="w-full min-h-24 flex flex-row justify-between items-stretch">

            <div className="text-text_secondary p-5 text-center w-6/12">
                <h1 className={style_titulo}>Mensagem:</h1>
                <p className={style_info}>{mensagem}</p>
            </div>

            <div className="w-px min-h-16 bg-border_secondary self-stretch mt-6 mb-6"></div>

            <div className="text-text_secondary p-5 text-center w-6/12">
                <h1 className={style_titulo}>Log:</h1>
                <p className={style_info}>{log}</p>
            </div>

        </section>
    );
}

export default InfoErro;