/* JSON- JavaScript Object Notation
           JSON: Number, Boolean, Null, Array, Object
           Stringify (Mã Hoá- Encode) / Parse (Giải mã- Decode)*/

    //Khai báo biến JSON
var jsonArray= '["java","php"]'    // Array
var jsonObject= '{"name":"Xuan","age":18}'

    //Từ js chuyển thành JSON
var a= 1;
console.log(typeof JSON.stringify(a));
    //Từ JSON chuyển thành js
var b= '1'
console.log(typeof JSON.parse(b));
var c = '"abc"'
console.log(typeof JSON.parse(c));        