
////////////////////////////////////!1. MẢNG - ARRAY IN JAVASCRIPT:
/*
    1. Tạo mảng
    - Cách mảng
    - Sử dụng
    - Kiểm tra data type
    2. Truy xuất mảng
    - Độ dài mảng
    - Lấy phần tử theo index
*/

    var daylaArray = [
        'Javascript',
        'PHP',
        'Ruby',
        null,
        undefined,
        {},
        123,
    ];

    console.log(daylaArray); //-> hiện mảng

    console.log(daylaArray[3]); //-> hiện ra phần tử thứ 3 trong mảng

    console.log(Array.isArray(daylaArray)); //-> Kiểm tra có phải Array hay ko



    ////////////////////////////////////!2. LÀM VIỆC VỚI MẢNG - ARRAY:
    /*
        Keyword: Javascript Array Method:

        toString() - chuyển array sang chuỗi
    
        join() -  hàm join sẽ tạo nhiều tùy biến giữa các chữ

        push() - thêm các phần tử mới vào cuối mảng
        pop() - xóa phần tử cuối mảng và hiện ra phần tử vừa xóa

        unshift() - thêm các phần tử mới vào đầu mảng
        shift() - xóa phần tử đầu mảng và hiện ra phần tử vừa xóa

        slice(a, b) - cắt lấy phần tử từ vị trí a đến vị trí b

        splice( 1, 2, 'c', 'd', 'e') - ( 1:vị trí phần tử là 1 ,  2:số phần tử muốn xóa từ vị trí,  'cde':'các phần tử muốn thêm vào vị trí đó')

        concat() - nối 2 array với nhau
        
        [...a, 1, 2, "a", "b"] - spread operators - kế thừa mảng a vào mảng b

        !DÙNG ĐỂ THÊM XÓA SẢN PHẦM VÀ NHIỀU THỨ KHÁC
        !ICRUD - Initial, Create, Read, Update, Delete sản phẩm:
    */

    var languagesA = [ 'Javascript', 'PHP', 'Ruby'];

    var languagesB = [ 'A', 'B', 'C' ];

    console.log(languagesA.toString()); //!-> toString() - chuyển Array sang String, đổi sang chuỗi thì sẽ mặc định có dấu ngăn cách là dấu ','

    console.log(languagesA.join('-,+')); //!-> join() - tạo dấu ở giữa các chữ -> A - B - C, A ! B ! C, A B C

    console.log(languagesA.push('Dart', 'Khanh')); //-> push() - thêm các phần tử mới vào mảng
    console.log(languagesA.pop()); //-> pop() - xóa phần tử cuối mảng và hiện ra phần tử vừa xóa -> 'Ruby'

    console.log(languagesA.unshift('A', 'B', 'C')) //-> unshift() - thêm các phần tử mới vào đầu mảng
    console.log(languagesA.shift()); //-> shift() - xóa phần tử đầu mảng và hiện ra phần tử vừa xóa -> 'Javascript'

    console.log(languagesA.slice(1, 2)) //!-> slice(a, b) - cắt lấy phần tử từ vị trí a đến vị trí b -> "PHP"
    console.log(languagesA.slice(-2, -1)) //!-> slice(a, b) - cắt lấy phần tử từ vị trí a đến vị trí b -> "PHP"

    console.log(languagesA.splice( 1, 2, 'Dart', 'MM')) //!-> splice( 1, 2, 'c', 'd', 'e') - ( 1:vị trí phần tử là 1 ,  2:số phần tử muốn xóa từ vị trí,  cde:'phần tử muốn thêm vào vị trí đó')

    console.log(languagesB.concat(languagesA)); //-> concat() - nối array A vào array B

    languagesB = [...languagesA];   //!-> spread operators - kế thừa mảng a vào mảng b

    languagesA.sort(); //-> sort() - sắp xếp phần tử theo bảng chữ cái
    languagesA.reverse(); //-> reverse() - đảo ngược phần tử
    var arr_daonguoc = '';
    for (var i = arr_input.length - 1; i >=0; i--){ //-> đảo ngược phần tử
        arr_daonguoc += arr_input[i];
    }

    let nhapCacSo = String(prompt('Enter a sequence of Number, separated by commas ","')); //!-> split(',') String to Array
    let nhapCacSo1 = nhapCacSo.split(','); //!-> split(',') String to Array

    let reduce = (a, b) => Number(a) + Number(b);


    //!CREATE: THÊM
    let array = [];

    let menu = [
        'hung',
        1,
        2,
        'loc',
    ];

    menu.push('Khoai tây chiên'); //->  push() - thêm các phần tử mới vào cuối mảng

    let newItem = prompt('New item: ');
    menu.push(newItem); //-> push() - thêm phần tử vừa nhập


    //!READ: HIỆN CẢ arr - HIỆN TỪNG PHẦN TỬ BẰNG arr[1,2,3,...]: THEO CHIỀU NGANG:
    let menu = ['hung', 1, 2, 'loc'];

    console.log(menu);   //-> hiện cả mảng
    console.log(...menu); //-> hiện cả mảng đẹp theo spread operator

    console.log(menu[1]); //-> hiện phần tử ở vị trí thứ 1,2,3,4...
    console.log(menu[2]);
    console.log(menu[menu.length - 1]) //-> hiện phần tử cuối cùng trong mảng

    let i = 9;
    console.log(menu[i]); //-> hiện phần tử ở vị trí thứ 9

    let x = prompt('Nhập vào:' );
    console.log(menu[x]); //-> hiện phần tử ở vị trí nhập vào


    //!READ: HIỆN CẢ arr = VÒNG FOR: THEO CHIỀU DỌC: BẮT BUỘC PHẢI CÓ ĐỘ DÀI MẢNG CÓ GIÁ TRỊ MỚI HIỆN ĐƯỢC:
    let menu = ['hung', 1, 2, 'loc'];

    let i = 0;

    console.log(menu[i]); //-> hiện 'hung'
            
    for (let i = 0; i < menu.length; i++){ //-> hiện cả mảng xuôi
        console.log(menu[i]);
    }
    
    for (let i = menu.length - 1; i >= 0; i--){ //-> hiện cả mảng ngược
        console.log(menu[i]);
    }


    //!UPDATE: SỬA
    menu[1] = 'Cơm gạo nứt';
    console.log(menu);

    let a = prompt('Sửa thành món: ');
    menu[2] = a; //-> sửa thành món a ở vị trí 2 trong mảng
    console.log(menu)


    //!DELETE: XÓA
    let menu2 = [
        'cháo gà',
        1,
        2,
        'loc',
    ];

    menu2.splice(0, 1);
    console.log(menu);

    
    //!UPDATE ALL:
    for (let i = 0; i < menu.length; i++){ //-> sửa mảng thành các chữ in hoa
        menu[i] = menu[i].toUpperCase();
    }
    

    //!NGƯỜI DÙNG NHẬP = VÒNG WHILE:
    let n;

    while(true){          
        n = Number(prompt('Enter a number: ')); //-> Nhập sai đến khi nào đúng thì đóng, break:
        if (n){
            alert('Hợp lệ');
            break;
        }
    }

    console.log(n);
    




//!Array.forEach(), map(), filter(), find(), some(). reduce():
//array.forEach():
    //calls a function (a callback function) once for each array element.
    //calls a function (a callback function) uses only the value parameter.
    //is easy to use
    //but for is faster than forEach().
    //for:
    var array = [1,2,3];
    for (var i = 0; i < array.length; i++){
        console.log(i);
    }
    //array.forEach():
    var array1 = [1,2,3];
    array1.forEach(function(value, index, array){
        console.log(value);
    })

//array.map():
    //creates a new array by performing a function on each array element.
    //does not execute the function for array elements without values.
    //does not change the original array.
    //calls a function (a callback function) uses only the value parameter.
    //map() is faster than forEach(), for is faster than map() & forEach().
    const numbers1 = [45, 4, 9, 16, 25, 30, 1, 2];
    const numbers2 = numbers1.map(myFunction1);

    function myFunction1(value, index, array) {
        return value - 5;
    }

    console.log(numbers2);

//array.filter(): Xoa'
    //creates a new array with array elements that passes a test.
    //calls a function (a callback function) uses only the value parameter.
    const numbers3 = [45, 4, 9, 16, 25, 30 , 1 , 2];
    const over18 = numbers3.filter(myFunction2);

    function myFunction2(value, index, array) {
        return value > 18;
    }

    console.log(numbers3);
    console.log(over18);

//array.find():
    //returns the value of the first array element that passes a test function.
    const numbers4 = [4, 9, 16, 25, 29];
    let first = numbers4.find(myFunction3);

    function myFunction3(value, index, array) {
        return value > 18;
    }

    console.log(first);

//array.some():
    //check if some array values pass a test.
    const numbers5 = [1,2,3,100,200,5,6];
    let someOver18 = numbers5.some(myFunction4);

    function myFunction4(value, index, array){
        return value > 18;
    }

    console.log(someOver18);

//array.reduce():
    //runs a function on each array element to produce (reduce it to) a single value.
    //works from left-to-right in the array.
    //does not reduce the original array.
    const numbers6 = [1,2,3,4,5,6,100,200];
    let sum1 = numbers6.reduce(myFunction5);

    function myFunction5(total, value, index, array){
        return total + value;
    }

    console.log(sum1);


    const numbers7 = [1,2,3,4,5,6,100,200];
    let sum2 = numbers6.reduce(myFunction6, 500);

    function myFunction6(total, value, index, array){
        return total + value;
    }

    console.log(sum2);

