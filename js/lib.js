// const productList = [
//     {id:"1", name:"Hoa Gì Không Biết", price:"30000", img:"../assets/images/flower1.jpg", link:"product-detail.html"  },
//     {id:"2", name:"Hoa Gì Không Biết", price:"20000", img:"../assets/images/flower2.jpg", link:"product-detail.html"  },
//     {id:"3", name:"Hoa Gì Không Biết", price:"20000", img:"../assets/images/flower3.jpg", link:"product-detail.html"  },
// ];



const productList = [
    {
        id: "1",
        name: "Hoa Hồng Đỏ",
        price: "30000",
        img: "../assets/images/flower1.jpg",
        link: "product-detail.html",
        desc: "Hoa hồng đỏ là biểu tượng quen thuộc của tình yêu, sự lãng mạn và những cảm xúc chân thành. Với sắc đỏ nổi bật, loài hoa này thường được dùng để gửi gắm lời yêu thương, sự trân trọng và lòng biết ơn đến người nhận. Những cánh hoa mềm mại, hương thơm dịu nhẹ cùng vẻ đẹp sang trọng giúp hoa hồng đỏ phù hợp trong nhiều dịp như sinh nhật, lễ tình nhân, kỷ niệm hoặc dùng để trang trí không gian thêm ấm áp, tinh tế và đầy cảm xúc."
    },
    {
        id: "2",
        name: "Hoa Hướng Dương",
        price: "20000",
        img: "../assets/images/flower2.jpg",
        link: "product-detail.html",
        desc: "Hoa hướng dương mang vẻ đẹp rực rỡ, tươi sáng và tràn đầy năng lượng tích cực. Với đặc điểm luôn hướng về phía mặt trời, loài hoa này tượng trưng cho niềm tin, hy vọng, sự kiên định và tinh thần lạc quan trong cuộc sống. Màu vàng nổi bật của hoa tạo cảm giác vui vẻ, ấm áp và gần gũi. Hoa hướng dương rất thích hợp để tặng bạn bè, người thân hoặc dùng trong các dịp chúc mừng, khai trương, tốt nghiệp nhằm gửi lời động viên và may mắn."
    },
    {
        id: "3",
        name: "Hoa Tulip",
        price: "20000",
        img: "../assets/images/flower3.jpg",
        link: "product-detail.html",
        desc: "Hoa tulip sở hữu vẻ đẹp nhẹ nhàng, thanh lịch và đầy cuốn hút. Những cánh hoa mềm mại, dáng hoa đơn giản nhưng tinh tế giúp tulip trở thành lựa chọn yêu thích trong các bó hoa hiện đại. Loài hoa này thường tượng trưng cho tình yêu dịu dàng, sự chân thành, niềm vui và những khởi đầu mới tốt đẹp. Với nhiều màu sắc khác nhau, hoa tulip phù hợp để tặng trong dịp sinh nhật, lễ kỷ niệm, ngày đặc biệt hoặc dùng để trang trí bàn làm việc, phòng khách thêm sang trọng và tươi mới."
    },
];


function loadAllProduct(){
    for (let i of productList){
        ThemProduct(i);
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


function ThemProduct(product){
    // const ctn = document.createElement("div");
    // ctn.setAttribute("class","container");
    const productItem=document.createElement("div");
    productItem.setAttribute("class","product-item");
    // Product image
    const productImg= document.createElement("div");
    productImg.setAttribute("class","product-image");

    const image=document.createElement("img");
    image.setAttribute("src",product.img);
    image.setAttribute("alt","Hoa");
    productImg.appendChild(image);     
    // Product-info
    const productInfo = document.createElement("div");
    productInfo.setAttribute("class","product-info");
    // p1
    const myPara1=document.createElement("p");
    const text1=document.createTextNode(product.name);
    myPara1.setAttribute("class","myPara1");
    myPara1.appendChild(text1);
    //p2
    const myPara2=document.createElement("p");
    const text2=document.createTextNode("Giá: " + product.price + "đ /túi");
    myPara2.appendChild(text2);
    myPara2.setAttribute("class","myPara2");
    //a
    const myLink=document.createElement("a");
    myLink.setAttribute("href",product.link+"?id=" + product.id);
    myLink.setAttribute("target","_blank");
    const text3=document.createTextNode("Xem Chi Tiết");
    myLink.appendChild(text3);
    myLink.setAttribute("class","myLink");

    productInfo.appendChild(myPara1);
    productInfo.appendChild(myPara2);
    productInfo.appendChild(myLink);

    //append vào productItem
    productItem.appendChild(productImg);
    productItem.appendChild(productInfo);
   
    
    //append vào body
    document.getElementById("product-list").appendChild(productItem);
}