
function date()
{
    let d = new Date();
  document.querySelector('.date').innerHTML=`<h2>${d.toDateString()}</h2>`;
  for(element of JSON.parse(window.localStorage.getItem("0")))
  {
    document.getElementById('list').insertAdjacentHTML("beforeend",element);
  }
   
}

let tasks=[];
let id=0;
if(JSON.parse(window.localStorage.getItem("0")).length===0)
{
     tasks=[];
     id=0;
}
else
{
   tasks=JSON.parse(window.localStorage.getItem("0"));
   id=JSON.parse(window.localStorage.getItem("0")).length;
}


function addTask()
{
    let input=document.getElementById('addtask');
    let value=input.value;
    if(value)
    {
        const text=`<li id="${id}"> <img src="uncheck.png" class="uncheck" status="uncheck"  onclick='completeTask("${id}")'> <span>${value}</span> <img src="trash.png" class="delete" onclick='removeTask("${id}")'> </li>`
        document.getElementById('list').insertAdjacentHTML("beforeend",text);
        tasks[id]=text;
        window.localStorage.setItem("0",JSON.stringify(tasks));
        id++;
        input.value="";
    }
}

function clearTasks()
{  let list=document.getElementById('list');
    while(list.hasChildNodes())
    {
      list.removeChild(list.firstChild);
    } 
    id=0; 
    tasks=[];
    window.localStorage.setItem("0",JSON.stringify(tasks));
}


function removeTask(id)
{
    document.getElementById(id).remove();
   /* let ar=(JSON.parse(window.localStorage.getItem("0")));
    console.log(ar);*/
    tasks[id]="";
    //console.log(tasks);
    window.localStorage.setItem("0",JSON.stringify(tasks));
}

function completeTask(id)
{
    const li=document.getElementById(id);
    const img=li.querySelector('img');
    if(img.status==="uncheck")
    {
        img.status="check";
        img.src="greencheck.png";
        li.querySelector('span').style.textDecoration="line-through";
    }

    else
    {
        img.status="uncheck";
        img.src="uncheck.png";
        li.querySelector('span').style.textDecoration="none";
    }
}