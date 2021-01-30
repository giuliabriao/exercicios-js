function funcao4() //FUNFOU
{
    console.log( d );
}


var a = 1; //FUNFOU

function funcao1() //FUNFOU
{
    console.log( a );
}


funcao1(); //FUNFOU


function funcao2() //UNDEFINED
{
    console.log( b );
}


funcao2(); //UNDEFINED


var b = 2; //UNDEFINED
let c = 3; //FUNFOU


funcao3(); //FUNFOU


function funcao3() //FUNFOU
{
    console.log( c );
}


let d = 4; //FUNFOU


funcao4(); ///FUNFOU
funcao5();
funcao6();
funcao7();
funcao8();
funcao9();
funcao10();
funcao11();


function funcao5() //FUNFOU
{
    if ( true )
    {
        var e = 5; //FUNFOU
    }

    console.log( e );
}


function funcao6() //MORREU
{
    if ( true )
    {
        var f = 6; //MORREU
    }
    console.log( f );
    
}


function funcao7() //MORREU
{
    var g = 7; //MORREU
    console.log( g );
}



function funcao8() //MORREU
{
    let h = 8; //MORREU
    console.log( h );
}


function funcao9()
{
    for ( var i = 0; i <= 9; i++ )
    {
    }

    console.log( i );
}


function funcao10()
{
    for ( let j = 0; j <= 10; j++ )
    {
    }

    console.log( i );
}


function funcao11()
{
    console.log( k );

    let k = 11;
}