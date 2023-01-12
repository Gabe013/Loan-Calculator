document.addEventListener("DOMContentLoaded", function(event) {
var loanInput = document.getElementById("loan_amount_entry");
	loanInput.addEventListener("keyup", function() {
var loan_amount_entry =	loanInput.value;	
if (loan_amount_entry.oninput != Number && [0-9],{5:8} === false) {
	alert("Please input a valid number with 5 to 8 digits without any decimal ',' or '.'!");
}

}, false);
  
});

/*
function loanCalculate (loanAmount,loanDuration) {
	if (loanDuration == 30 )
	{ 
		const loanTotalAmount = Math.round(loanAmount + (loanAmount*0.18));
		let LoanRate = 
	}
	else if (loanDuration == 20)
	{
		let loanTotalAmount = Math.round(loanAmount + (loanAmount*0.12));
	}

	else { let loanTotalAmount = Math.round(loanAmount + (loanAmount*0.06))
		
	}
 const loanTotalText = Number(document.getElementById("p2").innerHTML("TotalLoan Amount" + loanTotalAmount));
	const loanRateText = Number(document.getElementById("p2").innerHTML("TotalLoan Amount" + loanRate));
	
	return;
}
}

var loanAmount = Number(document.getElementById("loan-amount-entry").innerText);
	var loanDuration = Number(document.getElementById("loan-duration").innerText); */