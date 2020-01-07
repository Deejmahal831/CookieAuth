// var isOfAge;
// window.onload = function(){
//     if(isOfAge != ''){
//         var a = isOfAge + "=";
//         if(a != ''){
//             var decodedCookie = this.decodeURIComponent(document.cookie);
//             var ca = decodedCookie.split(';');
//             for(var i = 0; i < ca.length; i++){
//                 var c = ca[i];
//                 while(c.charAt(0) == ''){
//                     c = c.substring(1);
//                 }
//                 if(c.indexOf(a) == 0){
//                     return c.substring(a.length, c.length);
//                 }
//                 var splitCookie = c.split('=');
//                 for(var o = 0; o < splitCookie.length; o++){
//                     var d = splitCookie[o];
//                     if(d == "true"){
//                         document.location.href = 'pass.html'; //Add your site you want to go to if 18+
//                     }
//                     if(d == "false"){
//                         document.location.href = 'fail.html'; //Add your site you want to go to if not 18+
//                     }
//                 }
//             }
//             return "";
//         }
//     }   
    
// }

function setCookie(){
    var date = new Date();
    var userYear = document.getElementById("DOBYear").value;
    var convertedYear = parseInt(userYear);
    var userMonth = document.getElementById("DOBMonth").value;
    var convertedMonth = parseInt(userMonth);
    var userDay = document.getElementById("DOBDay").value;
    var convertedDay = parseInt(userDay);

    if(convertedYear < date.getFullYear() - 18){
        isOfAge = true;
        document.cookie = "isOfAge=" + isOfAge + ";path=/";       //add secure
        document.location.href = 'pass.html'; //Add your site you want to go to if 18+
    }
    else if(convertedYear <= date.getFullYear() - 18){
        if(convertedMonth < date.getMonth()){
            isOfAge = true;
            document.cookie = "isOfAge=" + isOfAge + ";path=/";
            document.location.href = 'pass.html'; //Add your site you want to go to if 18+
        }
        else if(convertedMonth <= date.getMonth()){
            if(convertedDay <= date.getDate()){
                isOfAge = true;
                document.cookie = "isOfAge=" + isOfAge + ";path=/";
                document.location.href = 'pass.html'; //Add your site you want to go to if 18+
            }
            else{
                isOfAge = false;
                document.cookie = "isOfAge=" + isOfAge + ";path=/";
                document.location.href = 'fail.html'; //Add your site you want to go to if not 18+
            }
        }
        else{
            isOfAge = false;
            document.cookie = "isOfAge=" + isOfAge + ";path=/";
            document.location.href = 'fail.html'; //Add your site you want to go to if not 18+
        }
    }
    else{
        isOfAge = false;
        document.cookie = "isOfAge=" + isOfAge + ";path=/";
        document.location.href = 'fail.html'; //Add your site you want to go to if not 18+
    }
}
