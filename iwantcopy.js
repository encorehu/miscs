javascript:(function(){
  var doc=document;
  var body=doc.body;
  body.onselectstart=body.oncopy=body.onpaste=body.onkeydown=body.oncontextmenu=body.onmousemove=body.onselectstart=body.ondragstart=doc.onselectstart=doc.oncopy=doc.onpaste=doc.onkeydown=doc.oncontextmenu=null;
  for(let node of document.querySelectorAll('*')){
    if(node.style!=undefined){
      var objcss=window.getComputedStyle(node);
      if(undefined!==objcss["userSelect"]&&'auto'!=objcss["userSelect"]){
        node.setAttribute('style','user-select:auto !important');
        continue
      }
      
      if(undefined!==objcss["webkitUserSelect"]&&'auto'!=objcss["webkitUserSelect"]){
        node.setAttribute('style','-webkit-user-select:auto !important');
        continue
      }
      if(undefined!==objcss["mozUserSelect"]&&'auto'!=objcss["mozUserSelect"]){
        node.setAttribute('style','-moz-user-select:auto !important');
        continue
      }
    }
  }
  alert('已解除文本复制与右键限制!');
})()
