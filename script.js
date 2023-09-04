fetch('https://jsonplaceholder.typicode.com/users')

const btn = document.getElementById("btn")


btn.addEventListener("click",function(){
    
    const datos = {
        Nombre: document.getElementById('name').value,
        Apellido: document.getElementById('lname').value,
        FechadeNacimiento: document.getElementById('fecha').value
    }
    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
        };

        fetch('https://jsonplaceholder.typicode.com/users',options)
        .then(data=> {
            if (!data.ok) {
                throw Error(data.status);
               }
               return data.json();
              }).then(datos => {
              console.log(datos);
                }).catch(e => {
              console.log(e);
              });
       


    console.log(datos)
})