// (function () {
//     autoPlayYouTubeModal();

//     //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
//     function autoPlayYouTubeModal() {
//         var trigger = $("body").find('[data-toggle="modal"]');
//         trigger.click(function () {
//             var theModal = $(this).data("target"),
//                 videoSRC = $(this).attr("data-theVideo"),
//                 videoSRCauto = videoSRC + "?autoplay=1";
//             $(theModal + ' iframe').attr('src', videoSRCauto);
//             $(theModal + ' button.closeVideo').click(function () {
//                 $(theModal + ' iframe').attr('src', videoSRC);
//             });
//         });
//     }
// })();

$(function(){
  $('.modal').modal({
      show: false
  }).on('hidden.bs.modal', function(){
      $(this).find('video')[0].pause();
  });
});