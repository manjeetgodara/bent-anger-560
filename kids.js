let url="https://636ddc13b567eed48acb2527.mockapi.io/Kids";

let bag=[];
let cartItem=JSON.parse(localStorage.getItem("cartProduct"))||[];
fetch(url).then((res)=>res.json()).then((data)=>{
bag.push(data);
displayTable(data);
});

let searchBox=document.querySelector(".search").addEventListener("input",function(){
    let q=document.querySelector(".searchBox").value;
   
  let newData=  bag[0].filter((elem)=>{
        return elem.brand.toLowerCase().includes(q.toLowerCase());
    });
    displayTable(newData);
})

function displayTable(data){
    document.querySelector("#container").innerHTML="";
    data.forEach(element => {
        let div=document.createElement("div");
        
        let image=document.createElement("img");
          image.setAttribute("src",element.img);

        let price=document.createElement("h3");
            price.innerText=element.price;
        let Brand=document.createElement("h5");
              Brand.innerText=element.brand;
        let color=document.createElement("p");
           color.innerText="Color:-"+element.color;
        let btn=document.createElement("button");
btn.innerText="Add To Cart";
btn.addEventListener("click",function(){
    cartItem.push(element);
    localStorage.setItem("cartProduct",JSON.stringify(cartItem));
    })
        
        document.querySelector("#container").append(div);

        div.append(image,price,Brand,color,btn);
    });
}

//change name on homepage after login
document.querySelector(".sign-up a").innerHTML=(localStorage.getItem("name"));