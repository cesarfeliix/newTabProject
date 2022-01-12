$(document).ready(function(){
    function showTime(){
        // to get current time/ date.
        var date = new Date();
        // to get the current hour
        var h = date.getHours();
        // to get the current minutes
        var m = date.getMinutes();
        //to get the current second
        var s = date.getSeconds();
        //to get the current second
        var day = date.getDate();
        //to get the current month short string
        var shortMonth = date.toLocaleString('en-us', { month: 'short' }); /* Jun */
        //to get the current weekday short string
        var weekDay = date.toLocaleDateString ("en-us", { weekday: "short" }); /* Mon */

        
       //conditions for times behavior 
        m = ( m < 10 ) ? m = "0" + m : m;
        s = ( s < 10 ) ? s = "0" + s : s;
        
        //putting time in one variable
        var time = h + ":" + m;

        //putting today's date into one variable
        var today = weekDay + ", " + day + " " + shortMonth;

        //putting current time into a div and displaying it the html document
        $('#clock').html(time);

        //putting today's date into a div and displaying it the html document
        $('#today').html(today);

        //to change time in every seconds
        setTimeout(showTime, 1000);
      }
    showTime();
});