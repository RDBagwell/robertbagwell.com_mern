export const isURL = (str)=>{
    var tarea = str;
    if (tarea.indexOf("http://") == 0 || tarea.indexOf("https://") == 0) {
       return true;
    }
    return false;
}