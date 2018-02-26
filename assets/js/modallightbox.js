// Get the <span> element that closes the modal
var closeModalSpan = document.getElementsByClassName("close")[0];

function hideModal(){
  modal.style.display = "none";
}

// When user clicks on <span> (x), hide the modal
closeModalSpan.onclick = function() {
  hideModal();
}

// when user press esc, hide the modal
$(document).keydown(function(event) {
  if (event.keyCode == 27) {
    hideModal();
  }
});


// Get the image, opens the modal and add the image in it
var modal = document.getElementById('myModal');


function addModel(comicImgElem) {
    launchLightbox();
    document.getElementById("modalImg").src = comicImgElem.src; // set image url in modal
    modal.style.display = "block";  // show modal
    document.getElementById('caption').innerHTML = comicImgElem.alt; // put comic title in caption
}

function launchLightbox() {
        var cls = document.getElementsByClassName("comic_image");
        for (n=0, length = cls.length; n < length; n++) {
            cls[n].id= "oct_" + (n + 1);
        }
    };
