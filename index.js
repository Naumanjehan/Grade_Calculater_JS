// Add your JavaScript code here
function calculate()
{
    let sub1=parseInt(document.getElementById("html").value);
    let sub2=parseInt(document.getElementById("css").value);
    let sub3=parseInt(document.getElementById("js").value);
    let sub4=parseInt(document.getElementById("bs").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100)
    {
        alert("Enter the marks under 100");
    }
    
    else
    {
        let obtain = sub1 + sub2 + sub3 + sub4;
        document.getElementById("obtain").value = obtain;  

        let outputHtml=sub1;
        document.getElementById("output-html").value=outputHtml;

        let outputCss=sub2;
        document.getElementById("output-css").value=outputCss;

        let outputJs=sub3;
        document.getElementById("output-js").value=outputJs;

        let outputBs=sub4;
        document.getElementById("output-bs").value=outputBs;

        let per=(obtain/400)*100;
        document.getElementById("per").value=per;
        
        let grade;
        if(per<=100 && per>=90)
        {
        document.getElementById("grade").value="A+";
        }
        else if (per<=89 && per>=85) 
    {
        document.getElementById("grade").value="A";
    } 
    else if (per<=84 && per>=80) 
    {
        document.getElementById("grade").value="A-";
    } 
    else if (per<=79 && per>=75) 
    {
        document.getElementById("grade").value="B+"
    }
    else if (per<=74 && per>=71) 
    {
        document.getElementById("grade").value="B";
    } 
    else if (per<=70 && per>=68) 
    {
        document.getElementById("grade").value="B-";
    }
    else if (per<=67 && per>=64) 
    {
        document.getElementById("grade").value="C+";
    }
    else if (per<=63 && per>=61) 
    {
        document.getElementById("grade").value="C";
    }
    else if (per<=60 && per>=57) 
    {
        document.getElementById("grade").value="C-";
    }
    else if (per<=56 && per>=53) 
    {
        document.getElementById("grade").value="D+";
    }
    else if (per<=52 && per>=50) 
    {
        document.getElementById("grade").value="D";
    }

    else if (per<=49.9999) 
    {
        document.getElementById("grade").value=" You Are fail! but Don't Worry try for your best in future";
    }
    
    }


}

// const marks= +prompt("Enter Your Marks");
//     if  (marks<=100 && marks>=90)
//     {
//         console.log("A+")
//     }
    
//     else if (marks>100) 
//     {
//         console.log("KINDLY ENTER 0 - 9 VALUE")
//     }
//     else if (marks=!NaN)
//      {
//         console.log("TYPE ANY NUMBER");
//      }






// const number1 = prompt("enter your hours");
// alert(number1*60*60);


// const number1 =+prompt("enter your first number");
// const number2 =+prompt("enter your 2nd number");
// let number3=  number1+number2;

// if(number1 === number2)
// {
//     let number4 = number3*3;
//     alert(number4);
// }
// else
// {
//     alert("Different Number");
// }