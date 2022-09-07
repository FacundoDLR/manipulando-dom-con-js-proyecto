export const uniqueDates = (tasks) => {
    const unique = [];
    tasks.forEach(task => {
        if(!unique.includes(task.dateFormat)) unique.push(task.dateFormat); // si no existe task.dateFormat dentro de nuestro arreglo unique, lo agregas. Y si existe, pues simplemente no va a hacer nada.
    });
    return unique;
}

export const orderDates = (dates) => {
    return dates.sort((a, b) => {
        const firstDate = moment(a, 'DD/MM/YYYY');
        const secondDate = moment(b, 'DD/MM/YYYY');
        return firstDate - secondDate;
    })
}