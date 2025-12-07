function choice(minute)
{
    //this is a function that takes what the user clicked(which button was chosen).

    // It takes the select value we chose and gives a value according to what was taken in the function(minute). 
    document.getElementById("mySelect").value = minute; 
}

//While operating other pages of breaks, show the 10-break time.
$(document).ready(function(){
    select(10);
})

function select(val)
{
    // this function gets a value and according to it the function decides what to inter.
    let father = document.getElementById("Timers");

    // a journey throught all the childs of the main div.
    for (let i = 0; i < father.children.length; i++) 
    {
        father.children[i].style.display = "none";
    }

    document.getElementById('Timer'+val).style.display = "";

    /*
    switch (val) 
    {
        case 10:
            document.getElementById("Timer10").style.display = "";
            break;
        
        case 15:
            document.getElementById("Timer15").style.display = "";
            break;

        case 20:
            document.getElementById("Timer20").style.display = "";
            break;

        case 30:
            document.getElementById("Timer30").style.display = "";
            break;

        case 40:
            document.getElementById("Timer40").style.display = "";
            break;

        default:
            break;
    }
    */
}
