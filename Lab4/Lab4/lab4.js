function Account() {
    let name, password;
    let balance = 0;

    return {
        Put_Name: function (input_name) {
            this.name = input_name;
        },
        Put_Password: function (input_pw) {
            this.password = input_pw;
        },
        MakeDeposit : function(input_number){
            if(input_number<0)
                return "Error";
            let deposit_balance=input_number;
            balance=deposit_balance+balance;
            return balance;
            },
        MakeWithDraw : function(input_pw,input_number) {
            if(input_pw !== owner.password)
                return "PWError";
            else if(input_number>balance &&input_number<0)
                return "Error";

            let withdraw_balance = input_number;
            balance=balance-withdraw_balance;

            return balance;
        },
        GetBalance : function(input_pw){
            if(input_pw !==owner.password)
                return "PWError";
            return balance;
        }
    }

}
var owner=Account();

document.querySelector(".new_account").addEventListener("click", function ()  {
        let name = document.querySelector(".text_box").value;
        let password = document.querySelector(".password_box_ac").value;

        owner.Put_Name(name);
        owner.Put_Password(password);


        document.getElementById("new-account-div").style.display="none";
        document.getElementById("main-menu-div").style.display="initial";
})

document.querySelector(".deposit").addEventListener("click", function () {
    let deposit_balance = parseInt(document.querySelector(".number_input").value);

    let dbalance=owner.MakeDeposit(deposit_balance);

    if(dbalance ==="Error")
        document.querySelector("#error-view").innerHTML="MONEY RANGE IS INCORRECT";

    document.querySelector(".number_input").value="";
    document.querySelector(".password_box_num").value="";
    document.querySelector("#balance-view").innerHTML=dbalance;

})

document.querySelector(".withdraw").addEventListener("click", function () {
    let withdraw_balance = parseInt(document.querySelector(".number_input").value);

    let wpassword = document.querySelector(".password_box_num").value;
    let wbalance = owner.MakeWithDraw(wpassword, withdraw_balance);

    document.querySelector("#error-view").innerHTML = "";


    if (wbalance === "Error") {
        document.querySelector("#balance-view").innerHTML = "";
        document.querySelector("#error-view").innerHTML = "MONEY RANGE IS INCORRECT";
    }

    else if (wbalance === "PWError") {
        document.querySelector("#balance-view").innerHTML = "";
        document.querySelector("#error-view").innerHTML = "PASSWORD IS INCORRECT";
    }

    document.querySelector(".number_input").value="";
    document.querySelector(".password_box_num").value="";
    document.querySelector("#balance-view").innerHTML=wbalance;



})

document.querySelector(".check").addEventListener("click", function () {

    var gbpw=document.querySelector(".password_box_num").value;
    var ggbalance=owner.GetBalance(gbpw);

    document.querySelector("#error-view").innerHTML = "";

    if(ggbalance === "PWError")
        document.querySelector("#error-view").innerHTML = "PASSWORD IS INCORRECT";

    document.querySelector("#balance-view").innerHTML=ggbalance;

})


