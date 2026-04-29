const productList = [
    {id:"1", name:"hoa 1", price:"30000", img:"../assets/images/flower1.jpg", link:"#!"  },
    {id:"2", name:"hoa 2", price:"20000", img:"../assets/images/flower2.jpg", link:"#!"  },
    {id:"3", name:"hoa 3", price:"20000", img:"../assets/images/flower3.jpg", link:"#!"  },
];
function loadProduct(){
    for (let i in productList){
        ThemProduct(productList[i].img, productList[i].name, productList[i].price);
    }
    
}

function truyenThamSo(){
    const linkAnh=document.createElement("input");
    linkAnh.setAttribute("type","text");
    linkAnh.setAttribute("class","linkAnh");
    linkAnh.setAttribute("placeholder","Link Ảnh");

    const tenSp=document.createElement("input");
    tenSp.setAttribute("type","text");
    tenSp.setAttribute("class","tenSp");
    tenSp.setAttribute("placeholder","Tên Sản Phẩm");

    const giaSp=document.createElement("input");
    giaSp.setAttribute("type","text");
    giaSp.setAttribute("class","giaSp");
    giaSp.setAttribute("placeholder","Giá Sản Phẩm");

   
    
    const myBtn=document.createElement("input");
    myBtn.setAttribute("type","button");
    myBtn.setAttribute("value","submit");
    myBtn.addEventListener("click", function(){
        ThemProduct(linkAnh.value, tenSp.value, giaSp.value);
    });
    
    const myForm=document.createElement("form");
    myForm.setAttribute("class","myForm");
    myForm.appendChild(linkAnh);
    myForm.appendChild(tenSp);
    myForm.appendChild(giaSp);
    myForm.appendChild(myBtn);
    document.getElementById("product-list").appendChild(myForm);
}


function ThemProduct(imgLink, tenSp, giaSp){
    const productItem=document.createElement("div");
    productItem.setAttribute("class","product-item");
    // Product image
    const productImg= document.createElement("div");
    productImg.setAttribute("class","product-image");

    const image=document.createElement("img");
    image.setAttribute("src",imgLink);
    image.setAttribute("alt","Hoa");
    productImg.appendChild(image);
    

        
    // Product-info
    const productInfo = document.createElement("div");
    productInfo.setAttribute("class","product-info");
    // p1
    const myPara1=document.createElement("p");
    const text1=document.createTextNode(tenSp);
    myPara1.appendChild(text1);
    //p2
    const myPara2=document.createElement("p");
    const text2=document.createTextNode("Giá: " + giaSp + "đ /túi");
    myPara2.appendChild(text2);
    //a
    const myLink=document.createElement("a");
    myLink.setAttribute("href","https://www.w3schools.com/");
    myLink.setAttribute("target","_blank");
    const text3=document.createTextNode("Xem Chi Tiết");
    myLink.appendChild(text3);

    productInfo.appendChild(myPara1);
    productInfo.appendChild(myPara2);
    productInfo.appendChild(myLink);

    //append vào productItem
    productItem.appendChild(productImg);
    productItem.appendChild(productInfo);
    //append vào body
    document.getElementById("product-list").appendChild(productItem);
}