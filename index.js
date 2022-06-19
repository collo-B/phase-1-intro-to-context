// Your code here
function createEmployeeRecord(array){
    return new Object({
      firstName : array[0],
      familyName : array[1],
      title : array[2],
      payPerHour : array[3],
      timeInEvents : [],
      timeOutEvents : []
    })
  }
  
  function createEmployeeRecords(rows){
    let arr = []
    rows.forEach(element => {
      arr.push(createEmployeeRecord(element))
    });
    return arr
  }
  
  function createTimeInEvent(param, timeIn){
    let update = timeIn.split(" ")
    
    param.timeInEvents.push(new Object({
      type : "TimeIn",
      date : update[0],
      hour : parseInt(update[1])
    }))
    return param
  }
  
  function createTimeOutEvent(param, timeOut){
    let update = timeOut.split(" ")
    
    param.timeOutEvents.push(new Object({
      type : "TimeOut",
      date : update[0],
      hour : parseInt(update[1])
    }))
    return param
  }
  
  let day = "Hello World".split(" ")
  console.log(day)

  function hoursWorkedOnDate(param){
    let hours = (param.timeOutEvents[0].hour - param.timeInEvents[0].hour) / 100
    return hours
  }
  
  function wagesEarnedOnDate(param, param2){
    let wages = hoursWorkedOnDate(param, param2) * param.payPerHour
    return wages
  }
  
  function allWagesFor(param){
    let i;
    let hours = 0
    for(i = 0; i < param.timeInEvents.length; i++){
      hours += (param.timeOutEvents[i].hour - param.timeInEvents[i].hour) / 100
    }
    return hours * param.payPerHour
  
  }
  let employees = [sRecord, rRecord]

function calculatePayroll(employees){
  let sum = 0
  for(let employee of employees){
    console.log(employee)
    sum += allWagesFor(employee)
  }
  return sum
}

console.log(calculatePayroll(employees))