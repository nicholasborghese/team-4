//account = [first name, last name, email, password, account type, state, date joined]
var database = new Array();

var firstName, lastName, email, password, accountType, state, dateJoined;

function createAccount(firstName, lastName, email, password, accountType, state, dateJoined)
{
  var account = [firstName, lastName, email, password, accountType, state, dateJoined];
  var num = 0;
  while(database[num] != null)
  {
    num++;
  }
  database[num] = account;
}

function checkAccount(email, password)
{
  var num = 0;
  while(database[num] != null)
  {
    if(database[num][2] == email)
    {
      if(database[num][3] == password)
      {
        //alert("Welcome " + firstName + "!");
        console.log("Welcome " + database[num][0] + "!");
        return;
      }
      else
      {
        //alert("Incorrect password");
        console.log("Incorrect password");
        return;
      }
    }
    num++;
  }
    //alert("Email not found");
    console.log("Email not found");
    return;
}

function accountDays(dateJoined)
{
  var date1 = dateJoined;
  var d = new Date();
  var date2 = d.getDate();
  var timeDiff = Math.abs(date2.getTime() - date1.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  console.log(diffDays);
  //return diffDays;
}

//var daysFunction = require('./time.js');
//var days = daysFunction.days();

//createAccount(firstName, lastName, email, password, accountType, state, dateJoined)
createAccount('John', 'Smith', 'JSmith@gmail.com', 'password', 'donor', 'NY', 09/20/18);
createAccount('Susan', 'Gold', 'SGold@aol.com', 'helloWorld', 'donor', 'NM', 08/22/17);
createAccount('Matt', 'Thomas', 'MThomas@yahoo.com', 'qwerty', 'event participant', 'FL', 06/13/15);
createAccount('Melissa', 'Van Nordan', 'MVannordan@gmail.com', 'pa$$w0rd', 'ambassador', 'IN', 03/8/18);

checkAccount('MThomas@yahoo.com', 'qwerty');
checkAccount('SGold@aol.com', 'helloWrld');
checkAccount('MVanordan@gmail.com', 'pa$$w0rd');

//accountDays(database[1][6]);
//accountDays(database[2][6]);
