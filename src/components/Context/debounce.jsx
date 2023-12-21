export const debounce = (func,delay)=>{
    let timer = null;
    return (...args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func(...args);
        },delay);
    };
};