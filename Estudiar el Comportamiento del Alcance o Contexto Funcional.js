function funcion1() {              //Global
    var a = 2;

    function funcion3() {          //Funcion hijo de funcion1
        var b = 5;

        function funcion5() {      //Funcion hijo de funcion3
            console.log(a, b);
        }
    }
};


function funcion2() {      //Global
    var a = 7;

    function funcion4() {  //Funcion hijo de funcion2
        console.log(a);
    }
}

funcion1();

funcion2();

// console.log(a); referenceError