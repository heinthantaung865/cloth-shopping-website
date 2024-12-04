let cards = [
    {
        pName : "hoodies",
        code : "M0234",
        pPrice : 6000,
        pImage : "shirt1.jpg",
        gender : "men"
    },
    {
        pName : "manchester",
        code : "M0034",
        pPrice : 4000,
        pImage : "shirt2.jpg",
        gender : "men"
    
    },
    {
        pName : "Black Shirt",
        code : "M0299",
        pPrice : 5000,
        pImage : "shirt3.jpg",
        gender : "men"
    },
    {
        pName : "Blue Shirt",
        code : "M0534",
        pPrice : 2990,
        pImage : "shirt4.jpg",
        gender : "men"
    },
    {
        pName : "White Shirt",
        code : "M0204",
        pPrice : 3000,
        pImage : "shirt5.jpg",
        gender : "men"
    },
    {
        pName : "Bayern Shirt",
        code : "M0134",
        pPrice : 4500,
        pImage : "shirt6.jpg",
        gender : "men"
    },
    {
        pName : "White Adidas",
        code : "W0234",
        pPrice : 4500,
        pImage : "shirt1.jpg",
        gender : "woman"
        
    
    },
    {
        pName : "Pupple Adidas",
        code : "W0034",
        pPrice : 4000,
        pImage : "shirt2.jpg",
        gender : "woman"
        
    
    },
    {
        pName : "Midnight Adidas",
        code : "W0299",
        pPrice : 3990,
        pImage : "shirt3.jpg",
        gender : "woman"
        
    
    },
    {
        pName : "Silver Shirt",
        code : "W0534",
        pPrice : 1500,
        pImage : "shirt4.jpg",
        gender : "woman"
    },
    {
        pName : "Black Shirt",
        code : "W0204",
        pPrice : 6500,
        pImage : "shirt5.jpg",
        gender : "woman"

    },
    {
        pName : "Skyblue Shirt",
        code : "W0134",
        pPrice : 8500,
        pImage : "shirt6.jpg",
        gender : "woman"   
    }
];
let orderLocationPrice = 3000;
let chosenProductIdList = [];//ရွေးပြီးသား element တွေရဲ့ id ကိုဒီအထဲမှာ array ပုံစံနဲ့သိမ်းထားမယ်။
let chosenCard;
let nthItem = 1;
let grandTotal = orderLocationPrice;
let date = new Date();
let day = date.getDay();
function choose(obj){
    document.querySelector(".cart").style.display = "block";
    obj.style.display = "block";
    let chosenProductId = obj.id.slice(4);
    if (chosenProductIdList.includes(chosenProductId)){//ရွေးပြီးသား element id list ထဲမှာပါတဲ့အခါ။
        alert("already been added")
    } else {
        chosenCard = cards[chosenProductId - 1];
        document.getElementsByClassName("itemInCart")[0].innerHTML += 
        `<div class="item${chosenProductId}">
            <div><img src="./${chosenCard.gender}/${chosenCard.pImage}" /></div>
            <div>
                <div class="pname">${chosenCard.pName}</div>
                <div class="code">${chosenCard.code}</div>
            </div>
            <input
                  type="number"
                  name=""
                  class="count"
                  min="1"
                  max="9"
                  onblur="calculateAmountForItemCnt(this)"
                  onfocus = "findLastValidInput(this)"
                  value="1"
                  id = "count${chosenProductId}"
                />
            <div><img
                src="./delete-icon-13.jpg"
                id="delete${chosenProductId}"
                onclick="removeItem(this)"
            /></div>
        </div>`
        chosenProductIdList.push(chosenProductId);// id list ထဲကို ရွေးလိုက်တဲ့ဟာရဲ့ id ပေါင်းထည့်မယ်။
        calculateAmountForAddedProduct();

        if (day == 0 || day == 6){
            document.querySelector("#discountprice").innerHTML = cards[chosenProductId - 1].pPrice;
        }
    }
}
function checkDate(){
    if (day == 0 || day == 6){
        document.querySelector("#discounttitle").style.display = "block";
        for (const value of cards) {
            value.pPrice = value.pPrice - value.pPrice * 15/100;
        }
    }
}
function removeItem(obj){
    let removeCardId = obj.id.slice(6);//delete ရဲ့ id no ကိုရှာမယ်။ delete ရဲ့  id no နဲ့ item ရဲ့ id no နဲ့ကတူတဲ့အတွက် ဖြုတ်ရမယ့် element ကိုသိသွားမယ်။
    let itemsAmount = document.querySelector(`.item${removeCardId} > input`).value;
    grandTotal -= cards[removeCardId - 1].pPrice * itemsAmount;
    document.getElementsByClassName(`item${removeCardId}`)[0].remove();//ဒါက element တစ်ခုလုံးကို ဖြုတ်လိုက်တာ
    let index = chosenProductIdList.indexOf(removeCardId); //element ကိုဖြုတ်ရုံနဲ့မပြီးသေးဘူး။ chosenProductIdList ထဲကပါဖြုတ်ရမယ်။ သူက ရွေးထားတဲ့ id တွေကိုစုထားတာဆိုတော့ သူ့ဆီကပါဖြုတ်ရမယ်။
    chosenProductIdList.splice(index,1);
    document.getElementById("grand").innerHTML = grandTotal + " Ks"; 
    
    if(chosenProductIdList.length == 0){
        document.querySelector(".cart").style.animationName = "unShowCart";
        setTimeout(() => {
                document.querySelector(".cart").style.display = "none";
        }, 2000);
    }

}

function calculateAmountForAddedProduct(){
    grandTotal += chosenCard.pPrice;
    document.getElementById("grand").innerHTML = grandTotal + " Ks";
}
let lastValidInput;
function findLastValidInput(obj){
    lastValidInput = obj.value;
    console.log(obj.value);
}
function calculateAmountForItemCnt(obj){
    if (obj.value < 1 || obj.value > 9){
        alert("allow 1 to 9");
        obj.value = lastValidInput;
    } else {
        grandTotal -= cards[obj.id.slice(5) - 1].pPrice * lastValidInput;// ဘယ်နှစ်ခုဝယ်မလဲဆိုတာ ပြောင်းလိုက်တဲ့အခါ အရင်ရွေးထားတဲ့ AMOUNT ကိုပြန်နုတ်ရသေးတယ်။
        grandTotal += cards[obj.id.slice(5) - 1].pPrice * obj.value;
        document.getElementById("grand").innerHTML = grandTotal + " Ks";
    }
}
function checkLocationPrice(obj){
    grandTotal -= orderLocationPrice;
    orderLocationPrice = Number(obj.value);
    grandTotal += orderLocationPrice;
    document.getElementById("grand").innerHTML = grandTotal + " Ks";
}
function showOrderDetail(){
    let name = document.getElementById("yourname").value;
    let phoneNumber = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    document.querySelector(".orderdetail").innerHTML +=
    `<div>Thank You ${name}</div>
    <div>We received you order</div>
    <div>We will Deliver to your place at ${address}</div>
    <div>Before delivery, we well inform to your Phone ${phoneNumber}</div>`
}
