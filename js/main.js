$(document).ready(function(){
    var firstNum = 0
    var operator
    var string
    $("span").not(".operator").click(function(){
      $("#screen").text($("#screen").text() + $(this).text());
    })
    $("#cancel").click(function(){
      $("#screen").empty()
    })
    $(".operator").not("#calc").click(function(){
	firstNum = $("#screen").text()
	 $("#screen").empty()
	 console.log(firstNum)
  	operator = $(this).text().replace('x', '*').replace('\u00F7', '/')
  	console.log(operator)
    })
    $("#calc").click(function(){
      string = (firstNum + operator + $("#screen").text())
      console.log(string)
      console.log(eval(string))
      $("#screen").text(eval(string))
    })
  })
