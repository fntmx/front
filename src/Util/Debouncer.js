let interval;

export function Debouncer(cb, timeout){
    clearInterval(interval);

    interval = setInterval(() => {
        cb();
        clearInterval(interval);
    }, timeout);
}