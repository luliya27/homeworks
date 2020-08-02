// 畫面一開始
// disabled禁止使用 設置
document.getElementById("btn_start").disabled = false; //不禁止
document.getElementById("btn_restart").disabled = true;
document.getElementById("btn_checkanswer").disabled = true;
document.getElementById("input_answer").disabled = true;
document.getElementById("btn_guess").disabled = true;

//先產生4個亂數(數字不同)
let answer = 0;
let Num = []

// 遊戲開始
function startplay() {
    // document.getElementById("btn_start");
    document.getElementById("btn_start").disabled = true;
    document.getElementById("btn_restart").disabled = false;
    document.getElementById("btn_checkanswer").disabled = false;
    document.getElementById("input_answer").disabled = false;
    document.getElementById("btn_guess").disabled = false;

    randomNum(); // 產生亂數
}

// 產生亂數
function randomNum() {
    for (let i = 0; i < 4; i++) {
        Num[i] = Math.floor(Math.random() * 10)
        for (let j = 0; j < i; j++) {
            if (Num[i] == Num[j]) {
                i--; //　4個數字
                break;
            }
        }
    }
    // 2、答案 變數
    answer = 0;
    answer = Num.join('');
    deleteRecord(); // 洗掉　猜數字紀錄
}

// 洗掉　猜數字紀錄
function deleteRecord() {
    // 找到　顯示紀錄位置
    var record = document.querySelector(".showguessnumber");
    var first = record.firstElementChild; //介面會返回 first的第一個子元素(唯讀) 
    while (first) {
        first.remove();
        first = record.firstElementChild;
    }
}

// 放棄重來
function restart() {
    document.getElementById("btn_start").disabled = false; //不禁止
    document.getElementById("btn_restart").disabled = true;
    document.getElementById("btn_checkanswer").disabled = true;
    document.getElementById("input_answer").disabled = true;
    document.getElementById("btn_guess").disabled = true;
}

// 查看答案
function checkanswer() {
    alert(`答案為${answer}`)
}


// 猜數字　過程　//送出按鈕
function guess() {
    // 找到　Id('input_answer')
    if (document.getElementById('input_answer').value.length == 0) {
        // 如果　猜數字輸入框　為空值
        alert('請輸入數字')
    } else {
        let showguessnumber = document.querySelector('.showguessnumber') //建立變數 猜數字顯示板 
        let div = document.createElement('div') //建立變數 div
        let ABspan = document.createElement('span') //建立變數 span
        showguessnumber.appendChild(div) //增加div標籤　於猜數字顯示板 
        div.className = 'input-group-text bg-light show'　//顯示 輸入的數字
        div.appendChild(ABspan) //增加ABspan標籤　於div


        //1.先取得輸入框中的值　並回傳至(dom產生的第二個span)
        var inputanswer = document.getElementById('input_answer').value
        // alert(input_answer);
        var inputspan = document.createElement('span') //建立變數　輸入數字顯示於顯示板
        div.appendChild(inputspan)　//增加inputspan標籤　於div
        inputspan.innerText = inputanswer //顯示輸入的數字

        var a = 0
        var b = 0
        //2.輸入框的 輸入數字與產生的亂數，比對有幾A幾B，將ab的值存起來並回傳於框列(dom產生的第一個span)
        for (var i = 0; i < answer.length; i++) {
            for (var j = 0; j < inputanswer.length; j++) {
                if (answer[i] == inputanswer[j]) {
                    if (i == j) {
                        a++;
                    }
                    else{
                        b++;
                    }
                    
                }
            }
        }
        ABspan.innerText = `${a}A${b}B` //顯示　幾Ａ幾Ｂ標籤

        //3.if(產生的亂數 == 在輸入框中輸入的數字)
        if (answer == inputanswer) {
            // 成功　綠色標記
            // 添加class樣式屬性
            ABspan.className = 'input-group-text text-white font-weight-bold m-1 mr-3 bg-success' //判斷紅綠背景
            document.getElementById("btn_restart").disabled = true;
            document.getElementById("btn_checkanswer").disabled = true;
            document.getElementById("btn_guess").disabled = true;
            document.getElementById("btn_start").disabled = false; //不禁止
            document.getElementById("input_answer").disabled = true;
            // alert('贏了');
        } else {
            // 失敗　紅色標記
            // 添加class樣式屬性
            ABspan.className = 'input-group-text text-white font-weight-bold m-1 mr-3 bg-danger' //判斷紅綠背景
        }
    }
}