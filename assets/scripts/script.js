
   var calenderListElementTime = $('#hour')
   var calenderListElementText = $('#input-text')
   var calenderListElementSaveButton = $('#save-btn')
   var timeDisplay = $('#currentDay')
   
   calenderListElementText.textarea('').addClass('col-8 col-md-10', 'description', 'row-3')
   calenderListElementTime.attr('row', 'time-block').addClass('col-2 col-md-1', 'text-center', 'p-4');
   calenderListElementSaveButton.attr('<button></button>').addClass('col-2 col-md-1')
   timeDisplay.attr(dayjs().format('dddd, MMMM D YYYY, h:mm:ss'));


function () {
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
    
      if (calenderListElementTime === dayjs().format('h: a')()) {
        calenderListElementText.addClass('present');
      } else if (calenderListElementTime <= dayjs().format('h: a')()) {
        calenderListElementText.addClass('past');
    } else (calenderListElementTime >= dayjs().format('h: a')()) {
            calenderListElementText.addClass('future'); 
    }
)};
    
      




    
    
    
    
    
    
    
    
    
    
    
    
    

   