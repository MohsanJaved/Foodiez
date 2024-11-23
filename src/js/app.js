

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
    },
  });


// Replace 'YOUR_API_KEY' with your Google Translate API key
var apiKey = 'YOUR_API_KEY';
        
$('#language-select').change(function() {
  var selectedLanguage = $(this).val();
  translateContent(selectedLanguage);
});

function translateContent(language) {
  var content = 'Hello, world!'; // Replace with your content
  
  $.ajax({
    url: 'https://translation.googleapis.com/language/translate/v2',
    type: 'POST',
    dataType: 'json',
    data: {
      key: apiKey,
      q: content,
      target: language
    },
    success: function(response) {
      var translatedText = response.data.translations[0].translatedText;
      $('#translated-content').text(translatedText);
    },
    error: function(xhr, status, error) {
      console.log('Translation error:', error);
    }
  });
}













