// 找到 input type="radio" //對應的 name=""
let iphone_ColorOptions = document.getElementsByName('iphone_color');
let iphone_GBOptions = document.getElementsByName('iphone_GBinfo');

// 宣告 會變動資料 變數
// 找到左圖顯示
let iphone_productImg = document.querySelector('#iphone_productImg');
// 找到總價格顯示
let iphone_price = document.querySelector('#iphone_price');

iphonerender();

function iphonerender() {
    iphone_showColor();
    iphone_showGB();
    iphonecheckedName();
}

// 建立產出html
function iphone_showColor() {
    let colorBlock = document.querySelector('#iphonecolor-title + .block');
    let text = '';
    products.iphone.color.forEach(x => {

        text += `<div class="col-6">
                <input type="radio" name="iphone_color" id="${x.colorEnName}" value="${x.colorEnName}" class="d-none">
                    <label class="item d-block color-item m-1" for="${x.colorEnName}">
                        <div class="content text-center py-2">
                            <img src="${x.img}" class="w-25">
                            <h4 class="h6">${x.colorName}</h4>
                        </div>
                    </label>
            </div>`
    })
    colorBlock.insertAdjacentHTML('beforeend', text);
}

function iphone_showGB() {
    let GBBlock = document.querySelector('#iphoneGB-title + .block .iphoneGBinfo-area');
    let text = '';
    products.iphone.GBinfo.filter(x => {

        text += `<div class="col-4">
                    <input type="radio" name="iphone_GBinfo" id="${x.size}" value="${x.size}" class="d-none">
                    <label class="item d-block GBinfo-item m-1" for="${x.size}">
                        <div class="content text-center py-2">
                            <h4>${x.description}</h4>
                            <p><small>NT$${x.lowestPrice}</small></p>
                        </div>
                    </label>
                </div>`
    })
    
    console.log(products.iphone.GBinfo.size);
    GBBlock.innerHTML = text;
}

function iphonecheckedName() {
    iphone_ColorOptions[0].checked = true;
    iphone_GBOptions[0].checked = true;
}

// 當按下不同按鈕時，做改變
// input type="radio" //對應的 name=""
// 顏色按鈕 改變圖片
iphone_ColorOptions.forEach(x => {
    x.addEventListener('click', iphone_ChangeImg);
})
// 規格容量按鈕 改變價格
iphone_GBOptions.forEach(x => {
    x.addEventListener('click', iphone_ChangePrice);
})

// 改變價格 價格會受到 規格容量
function iphone_ChangePrice() {
    let checkGB;
    // 容量
    iphone_GBOptions.forEach(x => {
        if (x.checked)
            checkGB = (x.value).toString();
    });

    var itemPrice = products.iphone.productsPrice.filter(x => {
        return x.title == checkGB;
    })

    // var iphoneprice = document.getElementById('iphone_price');
    // iphoneprice.innerText=`NT$ ${itemPrice[0].price}`;
    iphone_price.textContent = `NT$ ${itemPrice[0].price}`;
}
// 改變圖片
function iphone_ChangeImg() {
    let checkColor;
    // 找到匹配顏色
    iphone_ColorOptions.forEach(x => {
        if (x.checked)
            checkColor = (x.value).toString();
    });
    // 對應顏色
    let imgName = checkColor;
    if (checkColor == true)
        imgName += '';
    iphone_productImg.innerHTML = `<img src="img/iphone11${imgName}.png" class="w-100">`
}