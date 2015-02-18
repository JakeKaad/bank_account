// Create new accounts spec: accounts are created with a balance of 0
// display active accounts:
// Withdraw from selected accounts: subtract withdrawal amount from account balance
// deposit into selected accounts: add deposit amount to account balance
// display selected account's balance:

describe("BankAccount", function() {
  describe("balance", function() {
    it("sets initial balance to 0", function() {
      var testBankAccount = Object.create(BankAccount);
      expect(testBankAccount.balance).to.equal(0);
    });
  });

  describe("withdraw", function() {
    it("sets a new balance to be balance minus the withdrawal amount", function(){
      var testBankAccount = Object.create(BankAccount);
      testBankAccount.balance = 30;
      testBankAccount.withdraw(20);
      expect(testBankAccount.balance).to.equal(10);
    });
  });

  describe("deposit", function() {
    it("sets a new balance to be balance plus the deposit amount", function() {
      var testBankAccount = Object.create(BankAccount);
      testBankAccount.balance = 30;
      testBankAccount.deposit(20);
      expect(testBankAccount.balance).to.equal(50);
    });
  });
});
