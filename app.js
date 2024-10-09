<<<<<<< HEAD
let btn=document.querySelector('button');
let input=document.querySelector('#myInput');
//let p=document.querySelector('p');
let body=document.querySelector('body')



btn.addEventListener('click',async ()=>{
    

    let clgArr=await getData();

        
        
        console.log(clgArr.length)
        show(clgArr);
    //     let p=document.createElement('p');
    //     p.innerText=data;
    // body.append(p);ll
    
    
    
    
})
async function show(clgArr){
    for(col of clgArr){
        let list=document.querySelector('#list');
        let li=document.createElement('li');
        li.innerText=col.name;
        list.appendChild(li);
console.log(col.name)
    }
   
}
async function getData(){
    let url='http://universities.hipolabs.com/search?name=';
    let country=document.querySelector('input').value;

    try{
    let req=await axios.get(url+country);
    
    //console.log(req.data[i].name);
    return req.data;
    }
    catch(err){
        console.log('error')
        return 'error'
    }


}




  

=======
let btn=document.querySelector('button');
let input=document.querySelector('#myInput');
//let p=document.querySelector('p');
let body=document.querySelector('body')



btn.addEventListener('click',async ()=>{
    

    let clgArr=await getData();

        
        
        console.log(clgArr.length)
        show(clgArr);
    //     let p=document.createElement('p');
    //     p.innerText=data;
    // body.append(p);
    
    
    
    
})
async function show(clgArr){
    for(col of clgArr){
        let list=document.querySelector('#list');
        let li=document.createElement('li');
        li.innerText=col.name;
        list.appendChild(li);
console.log(col.name)
    }
   
}
async function getData(){
    let url='http://universities.hipolabs.com/search?name=';
    let country=document.querySelector('input').value;

    try{
    let req=await axios.get(url+country);
    
    //console.log(req.data[i].name);
    return req.data;
    }
    catch(err){
        console.log('error')
        return 'error'
    }


}




  

>>>>>>> d6375e8125c161a58cfce12879d46c18ea0b9217
  