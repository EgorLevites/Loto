$(document).ready(function() {
    var loto = [];
    var maxNumbers = 7; // Change this if you want more or fewer lotto numbers
  
    function generateLottoNumbers() {
      loto = [];
      var i = 0;
      
      while (i < maxNumbers) {
        var num = Math.floor(Math.random() * 36 + 1);
        if (!loto.includes(num)) {
          loto.push(num);
          i++;
        } 
      }
      displayLottoNumbers();
    }
  
    function displayLottoNumbers() {
      var lottoNumbersDiv = $("#lottoNumbers");
      lottoNumbersDiv.empty();
      for (var i = 0; i < loto.length; i++) {
        var numBadge = $("<span class='badge badge-primary mx-1'>" + loto[i] + "</span>");
        lottoNumbersDiv.append(numBadge);
        numBadge.hide().fadeIn(); // Apply fade in animation
      }
    }
  
    $("#lotteryBtn").click(function() {
      generateLottoNumbers();
    });
  
    $("#restartBtn").click(function() {
      $("#lottoNumbers .badge").fadeOut(function() {
        $(this).remove(); // Remove the badge after fade out
      });
    });
  });