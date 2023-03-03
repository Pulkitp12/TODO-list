{
    const a=document.getElementById('in');
    const b=document.getElementById('abc');
    function add(){
        if(a.value===""){
            let k=document.createElement('div');
        k.setAttribute("class","alert alert-warning fs-5");
        k.textContent="ADD SOMETHING";
        document.body.prepend(k);
        setTimeout(()=>{
            k.parentNode.removeChild(k);
        },2000);
        }
        else{
            let k=document.createElement('div');
            k.setAttribute("class","alert alert-success fs-5");
            k.textContent="TASK ADDED";
            document.body.prepend(k);
            setTimeout(()=>{
                k.parentNode.removeChild(k);
            },2000);
        let c=a.value;
        let d=document.createElement('li');
        let btns=document.createElement('button');
        btns.setAttribute("class","btn btn-danger");
        d.textContent=c;
        d.setAttribute("class","list-group-item list-group-item-dark mb-2 d-flex justify-content-between");
        btns.textContent="del";
        d.append(btns);
        b.appendChild(d);  
        }
        let hat= document.querySelector('ul');
        hat.addEventListener('click',function(e){
            console.log(e.target)
            let del=e.target.parentNode;
            b.removeChild(del);
        })
        }
        
}