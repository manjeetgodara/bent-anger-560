let url="https://636dca9f91576e19e32fec5c.mockapi.io/women";

let bag=[];
fetch(url).then((res)=>res.json()).then((data)=>{
bag.push(data);
displayTable(data);

});

let searchBox=document.querySelector(".search").addEventListener("input",function(){
    let q=document.querySelector(".searchBox").value;
   
  let newData=  bag[0].filter((elem)=>{
        return elem.brand.toLowerCase().includes(q.toLowerCase());
    });
    displayTable(newData)
})



function displayTable(data){
    document.querySelector("#container").innerHTML="";
    data.forEach(element => {
        let div=document.createElement("div");
        
        let image=document.createElement("img");
          image.setAttribute("src",element.img);

        let Price=document.createElement("h3");
            Price.innerText=element.price;
        let Brand=document.createElement("h5");
              Brand.innerText=element.brand;
        let color=document.createElement("p");
           color.innerText="Color:-"+element.color;
        let btn=document.createElement("button");
btn.innerText="Add To Cart";
        document.querySelector("#container").append(div);

        div.append(image,Price,Brand,color,btn);
    });
}

document.querySelector("select").addEventListener("change",function(){
    let selected=document.querySelector("select").value;
    if(selected=="HTL"){
        bag[0].sort((a,b)=> b.price-a.price);
    }
    if(selected=="LTH"){
        bag[0].sort((a,b)=> a.price-b.price);
    }
    console.log(bag[0]);
})