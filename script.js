//function validateInput () {
document.addEventListener("DOMContentLoaded", function(event) {
let loanInput = document.getElementById("loan_amount_entry").value;
if (loanInput.oninput != Number) {
	alert("Please input a valid number with 5 to 8 digits without any decimal ',' or '.'!");
	return;
}
}, false);

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