$(function () {
// heavy reliance on id as class can be added to elements later and then further appended together
   var timeDisplay = $('#currentDay' , '.time-block')
   var currentDay = dayjs().format("MM/DD/YYYY")
   $("#currentDay").text(currentDay)
   $(".saveBtn").on("click", function() {
      var keyID = $(this).parent().attr("id")
      var textValue = $(this).siblings(".description").val()
      localStorage.setItem(keyID, textValue)
   })
   $("#9 .description").val(localStorage.getItem("09"))
   $("#10 .description").val(localStorage.getItem("10"))
   $("#11 .description").val(localStorage.getItem("11"))
   $("#12 .description").val(localStorage.getItem("12"))
   $("#13 .description").val(localStorage.getItem("13"))
   $("#14 .description").val(localStorage.getItem("14"))
   $("#15 .description").val(localStorage.getItem("15"))
   $("#16 .description").val(localStorage.getItem("16"))
   var currentTime = dayjs().format("H")

   $(".time-block").each(function() {
      var divBlock = $(this).attr("id")
      if (divBlock < currentTime) {
         $(this).addClass("past")
      }

      else if (divBlock == currentTime) {
         $(this).addClass("present")
      }

      else {
         $(this).addClass("future")
      }


   })

   console.log(currentTime)
});   

