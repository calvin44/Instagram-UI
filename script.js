// image files for posts
function generatePosts(startIndex, numberOfPicture) {
  for (let i = startIndex; i <= numberOfPicture; i++) {
    $(".posts").append(`
        <div class="col-4 post-container pointer">
            <img class="post" src="images/post-picture/post${i}.PNG" alt="" />
        </div>
    `);
  }
}

// generate first 9 picture
generatePosts(1, 9);

// default
$(".spin").css("display", "none");
// view more button click event
function morePicture() {
  // remove the button on load
  $(".moreAction").css("display", "none");
  $(".spin").css("display", "flex");
  setTimeout(() => {
    generatePosts(10, 18);
  }, 3000);
  setTimeout(() => {
    $(".spin").css("display", "none");
  }, 3000);
}
