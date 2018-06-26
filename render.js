var uri_enc = encodeURI(location.href);
var data = "url=" + uri_enc;
$.ajax({
  type: "POST",
  url: "https://asset.netpartner.jp/medium.php",
  cache: false,
  data: data,
  success: function(html){
    $( '#result' ) . html(html);
  }
});
