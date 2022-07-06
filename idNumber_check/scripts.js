function input_check(form) {
    // let doc_num1 = document.input_form.idNum_front.value;
    // let doc_num2 = document.input_form.idNum_back.value;
    let doc_num1 = form.idNum_front.value;
    let doc_num2 = form.idNum_back.value;

    let input_num = doc_num1 + '-' + doc_num2;
    alert(input_num);

    // const input_num = prompt("주민등록번호를 입력하세요.");

    let b1 = 2;
    let b2 = 8;

    var sum_1 = 0;
    for (let i = 0; i <= 5; i++) {
        var a1 = parseInt(input_num[i]) * b1;
        b1++;
        sum_1 += a1;
    }

    var sum_2 = 0;
    for (let i = 7; i <= 12; i++) {
        var a2 = parseInt(input_num[i]) * b2;
        b2++;
        if (b2 == 10) {
            b2 = 2;
        } else if (b2 == 11) {
            b2 = 3;
        } else if (b2 == 12) {
            b2 = 4;
        } else if (b2 == 13) {
            b2 = 5;
        }
        sum_2 += a2;
    }

    let check_num = (sum_1 + sum_2) % 11;

    let check_sub = 11 - check_num;

    if (check_sub == 10) {
        check_sub = 0;
    } else if (check_sub == 11) {
        check_sub = 1;
    }

    const digit_check = new String(check_sub);

    if (digit_check[0] == input_num.substring(13, 14)) {
        alert(`${input_num} (O)`);
    } else {
        alert(`${input_num} (X)`);
    }
}

// ------------------------------------------------------------------------------

// let jumin = prompt("주민번호 입력");
// let w = 2, hap = 0, chk;

// for (let i = 0; i < jumin.length - 1; i++) {
//     if (i == 6)
//         continue;

//     hap += parseInt(jumin.substring(i, i + 1)) * w;

//     w++;

//     if (w == 10)
//         w = 2;
// }          //---합을 구하는 for문

// chk = 11 - (hap % 11);

// if (chk == 10)
//     chk = 0;
// else if (chk == 11)
//     chk = 1;

// if (chk == parseInt(jumin.substring(13, 14)))
//     str = jumin + "(O)";
// else
//     str = jumin + "(X)";

// console.log(str);