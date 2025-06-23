const timeFormate=(min)=>{
    const hours = Math.floor(min/60);
    const minRem = min%60;
    return `${hours}h ${minRem}m`;
}

export default timeFormate;