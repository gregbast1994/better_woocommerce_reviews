jQuery( document ).ready(function($){
  // star ratings
  $('.fa-star').click(function(){
    // declarations
    let rating = $(this).attr('data-rating');
    let parent = $(this).parent();
    let p_id = parent.attr('data-product-id');
    let feature = parent.attr('data-feature');

    // change stars
    $('.' + p_id + '-' + feature + '.fa-star').removeClass('fas')
    for( let i = 1; i <= rating; i++ ){
      $('.' + p_id + '-' + feature + '.star-' + i).addClass( 'fas' );
    }

    //set rating
    $('#' + p_id + '-' + feature).val(rating);
  });

});
