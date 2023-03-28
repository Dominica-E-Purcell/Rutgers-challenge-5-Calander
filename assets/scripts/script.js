$(function () {
// heavy reliance on id as class can be added to elements later and then further appended together
   var calenderListElementTime = $('#hour', '.minimalist')
   var calenderListElementText = $('#input-text', '.minimalist')
   var calenderListElementSaveButton = $('#save-btn', '.minimalist')
   var timeDisplay = $('#currentDay' , '.time-block')
   
   // taking the clutter from HTML and stream lining it with jQuery
   calenderListElementText.textarea('').addClass('col-8 col-md-10', 'description', 'row-3')
   calenderListElementTime.attr('row').addClass('col-2 col-md-1', 'text-center', 'p-4');
   calenderListElementSaveButton.on('click', localStorage).attr('<button></button>').addClass('col-2 col-md-1')
   timeDisplay.attr(dayjs().format('dddd, MMMM D YYYY, h:mm:ss'));
   
// A funtion that should create an array loop it and then compare the resault of to loop to outside widget 
function main() {
   var calenderListElementTime = [
        9 + 'AM',
        10 + 'AM',
        11 + 'AM',
        12 + 'PM',
        1 + 'PM',
        2 + 'PM',
        3 + 'PM',
        4 + 'PM',
        5 + 'PM',
      ];
    for (var i = 0; i < calenderListElementTime.length; i++) {
        var calenderListElementTime = $("<main>", '<li>' + abilities[i] + '</li>', "</main>");
      }
    // adding in the css
      if (calenderListElementTime === dayjs().format('h: a')()) {
        calenderListElementText.css.addClass('present');
      } else if (calenderListElementTime <= dayjs().format('h: a')()) {
        calenderListElementText.css.addClass('past');
    } else (calenderListElementTime >= dayjs().format('h: a')())
            calenderListElementText.css.addClass('future'); 
    };

});   

