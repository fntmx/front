let timeout = null;

export default function Debouncer(callback, delay){
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        callback();
    }, delay);
}