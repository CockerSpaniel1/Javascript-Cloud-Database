fetch("https://jsonplaceholder.typicode.com/users")
.then(Response=>Response.json())
.then(users=>{
    const demo=document.getElementById("demo");
    
    users.forEach( e=>{
        const d = document.createElement('div');
        d.classList.add('mydiv')
        d.innerHTML = `
        <h2>${e.name}</h2>
        <p>名字: ${e.username}<br>
        電郵: ${e.email}<br>
        網站: ${e.website}<br>
        地址: ${e.address.street}, ${e.address.city} , ${e.address.zipcode}<br>
        經緯: ${e.address.lng} ,${e.address.lat} <br>
        電話: ${e.phone}<br>
        公司:${e.company.name}</p>
        `

        demo.appendChild(d);
    })
})
.catch(error=>console.log("擷取使用者資料錯誤: ", error));