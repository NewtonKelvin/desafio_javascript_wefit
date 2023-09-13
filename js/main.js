$("div.btn-group-vertical").addClass("btn-group-horizontal");
$("div.btn-group-vertical").removeClass("btn-group-vertical");

$("div.jumbotron ").addClass("text-right text-light bg-secondary");

$("a.btn.btn-primary.btn-lg").removeClass("btn-primary");
$("a.btn.btn-lg").addClass("btn-success");

$("img").attr("height", "170");

$("img:eq(0)").attr(
  "src",
  "https://www.thefutureperfectglobal.com/adminRegistry/admin-assets/images/blog/1769454963.jpg"
);
$("h5.card-title:eq(0)").text("Natureza");

$("img:eq(1)").attr(
  "src",
  "https://images.unsplash.com/photo-1558006508-cbc464758811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
);
$("h5.card-title:eq(1)").text("Animais");
$("a.btn.btn-primary:eq(1)").addClass("btn-success");
$("a.btn.btn-success:eq(1)").removeClass("btn-primary");

$("img:eq(2)").attr(
  "src",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/mousover-img-1.jpg"
);

$("img:eq(3)").attr(
  "src",
  "https://www.montessori.org/wp-content/uploads/2015/06/tech2.jpg?x62955"
);
$("h5.card-title:eq(3)").text("Tecnologia");

$("li.list-group-item:eq(0)").removeClass("active");

var quartoItem = document.createElement("li");
$(quartoItem).addClass("list-group-item active");
$(quartoItem).text("Quarto item");
$("li.list-group-item").last().after(quartoItem);

var quintoItem = document.createElement("li");
$(quintoItem).addClass("list-group-item");
$(quintoItem).text("Quinto item");
$("li.list-group-item").last().after(quintoItem);
