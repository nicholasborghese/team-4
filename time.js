
var d = new Date();
//var month = [0, 31, 59, 90, 120, 151, 181, 212, 242, 272, 303, 333];
var day = d.getDate();
var month = d.getMonth();
if(month == 0)
{
  month = 0;
}
else if(month == 1)
{
  month = 31;
}
else if(month == 2)
{
  month = 59;
}
else if(month == 3)
{
  month = 90;
}
else if(month == 4)
{
  month = 120;
}
else if(month == 5)
{
  month = 151;
}
else if(month == 6)
{
  month = 181;
}
else if(month == 7)
{
  month = 212;
}
else if(month == 8)
{
  month = 242;
}
else if(month == 9)
{
  month = 272;
}
else if(month == 10)
{
  month = 303;
}
else
{
  month = 333;
}
var total = day + month;
console.log(total);