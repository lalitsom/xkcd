// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// when user click esc, it closes the modal

$(document).keydown(function(event) { 
  if (event.keyCode == 27) { 
    $('#myModal').hide();
  }
});

// Get the image, opens the modal and add the image in it
var modal = document.getElementById('myModal');


function addModel(elem) {

 launchLightbox();
  var testId;
  testId = elem.src;

var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = testId;	
}
function launchLightbox() {
        var cls = document.getElementsByClassName("comic_image"); 
        for (n=0, length = cls.length; n < length; n++) {
            cls[n].id= "oct_" + (n + 1); 
        }
		
    }; 