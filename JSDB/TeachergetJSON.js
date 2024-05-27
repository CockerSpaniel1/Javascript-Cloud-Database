fetch('https://jsonplaceholder.typicode.com/users')
.then(Response=>Response.json())
.then(users=>{
    const demo=document.getElementById("demo");

    //重複為每個用戶建立HTML
    users.forEach(e=>{
        const d=document.createElement('div');
        d.classList.add('mydiv');
        d.innerHTML=`
            <h2>${e.name}</h2>
            <p>名字:${e.username}<br>
            電郵:${e.email}<br>
            網站:${e.website}<br>
            地址:${e.address.street}, ${e.address.city}, ${e.address.zipcode}<br>
            經緯:${e.address.geo.lat},${e.address.geo.lng}<br>
            電話:${e.phhone}<br>
            公司:${e.company.name}</p>
        `;

        //將使用者的div ,加到demo 中
        demo.appendChild(d);
    });
})
.catch(error=> console.log("擷取使用者資料錯誤：",error));
