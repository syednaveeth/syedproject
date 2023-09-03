const list=[];
            function l(){
            dodo();
            let dolist="";
            for(let i=0;i<list.length;i++){
            let save= list[i];
            let ht= `
            <p>
             ${save}
             <button 
             id="delete-button"
             onclick = 
            "list.splice(${i},1);
             l(); "
            > Delete </button> 
            </p>
            `;
            dolist+=ht;
            } 
        console.log(dolist);
        document.querySelector('.p').innerHTML=dolist;
        
        }
    function dodo(){
        const ll=  document.querySelector('.in');
        let h = ll.value
        list.push(h);
        console.log(list);
        ll.value=' ';
        }   
        