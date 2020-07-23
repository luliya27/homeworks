//Ex 找出名字的Ascii code
function GetName(char) {

    for (let i = 33; i < 88888; i++) {
        //一次只能找一個
        if (String.fromCharCode(i) == char) {
            console.log(i);
            // console.log(char);
        }
        // console.log(i+","+String.fromCharCode(i));
    }
}
GetName("蕭");//34157
GetName("雅");//38597
GetName("蓮");//34030
// console.log(GetName("蕭")); 
// console.log(GetName("雅")); 
// console.log(GetName("蓮")); 


//Ex 找出名字的Ascii code
// 1.檢查不得為空白或非String型別   
// 2.一次傳遞完整姓名至function參數   
// 3.將結果儲存成Array陣列   
// 4.顯示Code

fullCharCode("蕭雅蓮");
fullCharCode("Luliya");

function fullCharCode(allname) {
    let name = "";
    if (typeof allname == "string") {
        const Numarray = Array.from(allname);
        console.log(allname);
        for (let i = 0; i < Numarray.length; i++) {
            name += allname.charCodeAt(i) + ",";
            
        }
        console.log(name)
    }
    else{
        console.log("輸入字串不正確");
    }
}


