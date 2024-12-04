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
let chosenProductIdList = [];//ရွေးပြီးသား element တွေရဲ့ id ကိုဒီအထဲမှာ array ပုံစံနဲ့သိမ်းထားမယ်။
let chosenCard;
let nthItem = 1;
let grandTotal = 0;
function choose(obj){
    let chosenProductId = obj.id.slice(4);
    if (chosenProductIdList.includes(chosenProductId)){//ရွေးပြီးသား element id list ထဲမှာပါတဲ့အခါ။
        alert("already been added")
    } else {
        chosenCard = cards[chosenProductId - 1];
        document.getElementsByClassName("itemInCart")[0].innerHTML += 
        `<div class="item${nthItem}">
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
                  onblur="calculateAmount()"
                  value="1"
                />
            <div><img
                src="./delete-icon-13.jpg"
                id="delete${nthItem}"
                onclick="removeItem(this)"
            /></div>
        </div>`
        nthItem ++;
        chosenProductIdList.push(chosenProductId);// id list ထဲကို ရွေးလိုက်တဲ့ဟာရဲ့ id ပေါင်းထည့်မယ်။
    }
}
function removeItem(obj){
    let removeCardId = obj.id.slice(6);//delete ရဲ့ id no ကိုရှာမယ်။ delete ရဲ့  id no နဲ့ iem ရဲ့ id no နဲ့ကတူတဲ့အတွက် ဖြုတ်ရမယ့် element ကိုသိသွားမယ်။
    document.getElementsByClassName(`item${removeCardId}`)[0].remove();//ဒါက element တစ်ခုလုံးကို ဖြုတ်လိုက်တာ
    let index = chosenProductIdList.indexOf(removeCardId); //element ကိုဖြုတ်ရုံနဲ့မပြီးသေးဘူး။ chosenProductIdList ထဲကပါဖြုတ်ရမယ်။ သူက ရွေးထားတဲ့ id တွေကိုစုထားတာဆိုတော့ သူ့ဆီကပါဖြုတ်ရမယ်။
    chosenProductIdList.splice(index,1);
}
function calculateAmount(){
    let itemCountInputs = document.getElementsByClassName("count");
    for (let index = 0; index < itemCountInputs.length; index++) {
        grandTotal += itemCountInputs[index].value;
    }
    console.log(grandTotal);
}
