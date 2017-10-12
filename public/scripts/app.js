console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $.ajax({
    method:'GET',
    url: '/api/profile',
    success: onSuccess,
    error: onError
  })

});

function onSuccess(json) {
  console.log(json)
  $('.about').append(`<p>My name is ${json.name}</p>`);
  $('.about').append(`<p>My GitHub Link is ${json.githubLink}</p>`);
  $('.about').append(`<p>My personal site is " + ${json.personalSiteLink}</p>`);
  $('.about').append(`<p>I currently live in " + ${json.currentCity}</p>`)

}

function onError(err) {
  console.log('uh oh, there was an error: '+ err);
}
