$(document).ready(function() {
  
    var spins = 0;
      $('.spin-button').click(function() {
      spins++;
          var randDegree = Math.floor(Math.random() * 1800) + 1;
      var totalDegree = spins * 1800 + randDegree;
          $('#wheel').css({'transform' : 'rotate(' + totalDegree + 'deg)'});
      });
    
    $('.fa-heart').click(function() {
      $('.overlay').fadeIn();
    })
    
    $('.overlay').click(function() {
      $(this).fadeOut();
    })
  
  });
 function ketThucHanhdong() {
    setTimeout(function() {
      window.location.href = 'slide.html'; // Thay đổi URL đích của bạn
    }, 6000); // 10000 milliseconds = 10 giây
  }
  
  // Gọi hàm khi hành động kết thúc (thay thế dòng này bằng hành động cụ thể của bạn)
  ketThucHanhdong();