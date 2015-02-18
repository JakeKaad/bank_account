var BankAccount = {
  balance: 0,
  withdraw: function(amount) {
    this.balance -= amount;
  },
  deposit: function(amount) {
    this.balance += amount;
  }
};

$(function() {
  $("#create_account").submit(function(event){
    var accountName = $("#account_name").val();
    var initialDeposit = parseInt($("#initial_deposit").val());

    var newAccount = Object.create(BankAccount);
    newAccount.name = accountName;
    newAccount.deposit(initialDeposit);

    $("ul#accounts_list").append("<li><span class='account_anchor'>" + newAccount.name + "</span></li>");

    $("#account_name").val("");
    $("#initial_deposit").val("");

    $('.account_anchor').last().click(function(){
      updateBalanceDisplay(newAccount.balance);
      $("#account-name").text(newAccount.name);
      $('#deposit_withdrawal').submit(function(event) {
        var withdrawalAmount = parseInt($("#withdrawal").val());
        var depositAmount = parseInt($("#deposit").val());

        $("#deposit").val("");
        $("#withdrawal").val("");

        if (withdrawalAmount === parseInt(withdrawalAmount)) {
          newAccount.withdraw(withdrawalAmount);
        } else if (depositAmount === parseInt(depositAmount)) {
          newAccount.deposit(depositAmount);
        }
        updateBalanceDisplay(newAccount.balance);
        event.preventDefault();
      });
    });

    event.preventDefault();
  });
});

var updateBalanceDisplay = function(balance) {
  $('#account_balance').remove();
  $('#balance_display').append("<input type='text' id='account_balance' class='form-control' placeholder='" + (balance).toString() + "' disabled>")
};
