$(document).ready(function()
{
for(var count=1;count<=100;count++)
{if(count%3==0 && count%5==0)
$('.out').append("FizzBuzz</br>");
else if(count%5==0)
$('.out').append("Fizz</br>");
else if(count%3==0)
$('.out').append("Buzz</br>");
else 
$('.out').append(count+'</br>');
}
});