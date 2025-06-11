function format_date(data) {
    let [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
}

export default format_date;