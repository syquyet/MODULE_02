function handle_bai05() {
    const string_1 = prompt("nhập chuỗi ký tự 1") || "";
    const string_2 = prompt("nhập chuỗi ký tự 2") || "";
    const array_1 = string_1.split("");
    const array_2 = string_2.split("");
    console.log(11, array_1);
    console.log(22, array_2);
  
    const isPermutation = checkPermutation(array_1, array_2);
    isPermutation
      ? console.log(string_1 + "và" + string_2 + "là chuỗi hoán vị của nhau")
      : console.log(
          string_1 + "và" + string_2 + " không là chuỗi hoán vị của nhau"
        );
  }
  function checkPermutation(str_1: string[], str_2: string[]): boolean {
    if (str_1.length != str_2.length) {
      return false;
    }
    for (let m = 0; m < str_1.length; m++) {
      for (let n = 0; n < str_2.length; n++) {
        if (str_1[m] === str_2[n]) {
          str_1.splice(m, 1);
          str_2.splice(n, 1);
           m--;
        }
      }
    }
  
    return str_1.length == 0 && str_2.length == 0;
  }
  