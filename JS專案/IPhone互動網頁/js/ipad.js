// 找到 input type="radio" //對應的 name=""
let ipad_colorOptions = document.getElementsByName('color');
let ipad_GBOptions = document.getElementsByName('GBinfo');
let ipad_WiFiOptions = document.getElementsByName('WiFi');

// 宣告 會變動資料 變數
// 找到左圖顯示
let ipad_productImg = document.querySelector('#productImg');
// 找到總價格顯示
let ipad_price = document.querySelector('#price');
// 找到稅率顯示
let tex = document.querySelector('#tex');
// 找到月支付顯示
let monthPay = document.querySelector('#monthPay');

ipadrender();

function ipadrender() {
    ipad_showColor();
    ipad_showGB();
    ipad_showWiFi();
    ipadcheckedName();
}

// 建立產出html
function ipad_showColor() {
    let colorBlock = document.querySelector('#color-title + .block');
    let text = '';
    products.ipad.color.forEach(x => {

        text += `<div class="col-6">
                        <input type="radio" name="color" id="${x.colorEnName}" value="${x.colorEnName}" class="d-none">
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

function ipad_showGB() {
    let GBBlock = document.querySelector('#GB-title + .block .GBinfo-area');
    let text = '';
    products.ipad.GBinfo.forEach(x => {

        text += `<div class="col-6">
                            <input type="radio" name="GBinfo" id="${x.size}" value="${x.size}" class="d-none">
                            <label class="item d-block GBinfo-item m-1" for="${x.size}">
                                <div class="content text-center py-2">
                                    <h4>${x.description}</h4>
                                    <p><small>NT$${x.lowestPrice}</small></p>
                                </div>
                            </label>
                        </div>`
    })
    GBBlock.innerHTML = text;
}

function ipad_showWiFi() {
    let WiFiBlock = document.querySelector('#WiFi-title + .block .WiFi-area');
    let text = '';
    products.ipad.WiFi.forEach(x => {

        text += `<div class="col-6">
                            <input type="radio" name="WiFi" id="${x.value}" value="${x.value}" class="d-none">
                            <label class="item d-block WiFi-item m-1" for="${x.value}">
                                <div class="content text-center py-2">
                                    <h4>${x.title}</h4>
                                    <p><small>NT$${x.lowestPrice}</small></p>
                                </div>
                            </label>
                        </div>`
    })
    WiFiBlock.innerHTML = text;
}

function ipadcheckedName() {
    ipad_colorOptions[0].checked = true;
    ipad_GBOptions[0].checked = true;
    ipad_WiFiOptions[0].checked = true;
}

// 當按下不同按鈕時，做改變
// input type="radio" //對應的 name=""
// 顏色按鈕 改變圖片
ipad_colorOptions.forEach(x => {
    x.addEventListener('click', ipad_ChangeImg);
})
// 規格容量按鈕 改變價格
ipad_GBOptions.forEach(x => {
    x.addEventListener('click', ipad_ChangePrice);
})
// WiFi按鈕 改變價格
ipad_WiFiOptions.forEach(x => {
    x.addEventListener('click', ipad_ChangePrice);
})

// 改變價格 價格會受到 規格容量、WiFi 而改變
function ipad_ChangePrice() {
    let checkGB;
    let checkWiFi;
    // 容量
    ipad_GBOptions.forEach(x => {
        if (x.checked)
            checkGB = (x.value).toString();
    });
    //WiFi
    ipad_WiFiOptions.forEach(y => {
        if (y.checked)
            checkWiFi = (y.value).toString();
    });
    //找到 產品資料來源 //對不同容量、wifi 的價格方案加總
    var itemPrice = products.ipad.productsPrice.filter(x => {
        return x.title == checkGB + ',' + checkWiFi;
    })

    ipad_price.textContent = `NT$${itemPrice[0].price}`;
    tex.textContent = itemPrice[0].tex;
    monthPay.textContent = itemPrice[0].monthPay;
}
// 改變圖片
function ipad_ChangeImg() {
    let checkColor;
    // 找到匹配顏色
    ipad_colorOptions.forEach(x => {
        if (x.checked)
            checkColor = (x.value).toString();
    });
    // ipad_WiFiOptions.forEach(y => {
    //     if (y.checked)
    //         checkWiFi = (y.value).toString();
    // });
    // 對應顏色
    let imgName = checkColor;
    if (checkColor == true)
        imgName += '';
    ipad_productImg.innerHTML = `<img src="img/ipad${imgName}.png" class="w-100">`
}