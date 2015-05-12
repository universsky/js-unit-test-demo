/** loanApply.js 
 *  loanApply amount limit
 *    -1 : loanAmount || contractAmount is 0 or less than 0
 *     1 : loanAmount is greater than contractAmount
 *     0 : loanAmount is OK
 **/

function loanApplyAmountLimit(loanAmount,contractAmount){
	if (loanAmount <= 0 || contractAmount <= 0){
		return -1;
	}

	var ratio = loanAmount / contractAmount;
	if( ratio > 1 ){
		return 1;
	}else{
		return 0;
	}
	
}
