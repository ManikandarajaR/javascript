let input = prompt("What would you like to do?");
let todos = ['Mani','Saravana','Sri'];
while(input !== 'quit' && input !== 'q' ){
    
  

    if(input === 'list'){
          console.log('***************');
            for(let i = 0; i < todos.length ;++i){
                console.log(`${i} : ${todos[i]}`);
            }
          console.log('***************');       
    }
    else if(input  === 'new')
    {
        const newTodo = prompt("Ok What is you new todo");
        todos.push(newTodo);
        console.log(`${newTodo} Added to todos` );
    }
    else if(input === 'delete'){

        const index =parseInt(prompt("Ok , Enter an index to Delete"));
        if(!Number.isNaN(index)){
            const deleted = todos.splice(index,1);
            console.log(`Ok Deleted sucessfully : ${deleted}`);
        }
        else{
            console.log("Unknown index");
        }
    }
    input = prompt("What would you like to do?");
}
console.log("You won");