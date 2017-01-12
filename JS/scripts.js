$(document).ready(function() {

  $("form").submit(function(event) {
    var inputName = $("input#name").val();
    var inputAddress = $("input#address").val();
    var inputJewelry = $("input:radio[name=jewelry]:checked").val();
    var inputShoes = $("#shoes").val();

    $(".name").text(inputName);
    $(".address").text(inputAddress);
    $(".jewelry").text(inputJewelry);
    $(".shoes").text(inputShoes);

    $(".confirmation").show();
    event.preventDefault();

  });

});
