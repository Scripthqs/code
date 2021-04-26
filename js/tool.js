function move(obj,at,tg,sp,cb){
                
    clearInterval(obj.timer);
    var cv = parseInt(getComputedStyle(obj,null)[at]);
    if(cv > tg){
        sp = -sp;
    }


    obj.timer = setInterval(function(){
        var ov = parseInt(getComputedStyle(obj,null)[at]);
        
        
        nv = ov + sp;

        if((sp > 0 && nv > tg) || (sp < 0 && nv < tg)){
            nv = tg;
        }


        obj.style[at] = nv +"px";

        if(nv === tg){
            clearInterval(obj.timer);
            cb && cb();
        }
        
    }, 30);
}