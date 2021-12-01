const FormatDate = (fecha) => {
    const date = new Date(fecha)
    const finaldate = date.getFullYear() + '-' +  (date.getMonth() + 1)  + '-' + date.getDate();
    return finaldate;
}

export {
    FormatDate
}