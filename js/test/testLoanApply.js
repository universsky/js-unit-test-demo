/** testLoanApply.js  :   test loanApply.js 
 *  loanApply amount limit
 *    -1 : loanAmount || contractAmount is 0 or less than 0
 *     1 : loanAmount is greater than contractAmount
 *     0 : loanAmount is OK
 **/


module ("test loanApply.js");
test("loanAmount || contractAmount is 0 or less than 0", function(){
	var actual1 = loanApplyAmountLimit(0,100);
	var expected1 = -1;
	equal(actual1, expected1 );

    var actual2 = loanApplyAmountLimit(10,0);
	var expected2 = -1;
	equal(actual2, expected2 );

	var actual3 = loanApplyAmountLimit(0,0);
	var expected3 = -1;
	equal(actual3, expected3 );
	
	 
});

test("loanAmount is greater than contractAmount", function(){
	var actual = loanApplyAmountLimit(5000,1000);
	var expected = -1;
	equal(actual, expected );
	
	 
});


test("loanAmount is greater than contractAmount", function(){
	var actual = loanApplyAmountLimit(5000,1000);
	var expected = 1;
	equal(actual, expected );
	
	 
});

test("loanAmount is OK", function(){
	var actual = loanApplyAmountLimit(100,500);
	var expected = 0;
	equal(actual, expected);
	


});

test("Failed test : loanAmount is NOT OK", function(){
	var actual = loanApplyAmountLimit(1000,200);
	var expected = 0;
	equal(actual, expected);
});
 