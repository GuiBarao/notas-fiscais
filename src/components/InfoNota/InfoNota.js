
function InfoNota({nomeInfo, arquivoIMG, altIMG, infoTexto }) {
    return (
        <div>
            <img src = {`/images/${arquivoIMG}.svg`} alt = {altIMG} />
            <h1>{nomeInfo}</h1>
            <h2>{infoTexto}</h2>
        </div>

    )
}

export default InfoNota;