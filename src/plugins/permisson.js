/**指令注册 */

export default {
    install: (app) => {
        app.directive('ztx', (el, binding)=>{
            if(binding.value === 1) return;
            if(el.parentNode){
                el.parentNode.removeChild(el);
            }else{
                console.log('没有父节点')
                el.style.display = 'none';  //简单点
            }
        });
    }
}