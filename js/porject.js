// console.log('moaz')
// $('.hh').show();
// $('.hh').toggle();
// $('.hh').hide();


// $('button').click(function() {
//     $('.mian').animate({ 
//         width:'400px',
//        height:'600px',
//     } ,2000);
// })

// $('.mian').hover(
//     function (){
//         $('.mian').css('backgroundColor' , 'red')
//         $('.mian').animate({width:'500px' , height:'1000px'})
//     },
//     function(){
//         $('.mian').css('backgroundColor' , 'black')
//         $('.mian').animate( { width:'500px' , height:'1000px'})
//     },
//     4000
// )

// $('.mian').css( );
// $('.mian h1').css(
//     {
//         'backgroundColor': 'black',
//          color :'red',
//          'font-size':'80-px',
//          padding : '80px'
//     }
// )





// $('.mian').animate({
//     width:'400px', height:'400px'} ,3000 , function(){
//         $('.mian2').animate({width:'600px', height:'800px'} ,3000)     } 
// )





$('.section1').animate({width:'98.5%' }, 2000 , function() {

    $('.section1').animate( { height :  '100vh' } ,2000  ,
    function() {
        
        $('.section1 h1').slideDown(2000 , function() {
            

          $('.row .item').eq(0).slideDown(1500 , function(){

            $('.row .item').eq(1).slideDown(1500 , function(){


              $('.row .item').eq(2).slideDown(1500) 
            }) // end crod 2

          })// end crod1

        }) // end h1
    }

    )}    // end height
) // ENd width

 