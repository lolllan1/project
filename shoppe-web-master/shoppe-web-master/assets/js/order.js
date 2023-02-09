"use strict";
$(function () {
    $("#pagination").load("/assets/html/pagination.html");
    console.log(123)
});

function orderPageAll(){
    changActivePage('order-all')
    $(".status-order").empty()
    $(".status-order").append("<div>Trạng thái: Tất cả</div>")
}

function orderPagePending(){
    changActivePage('order-pending');
    $(".status-order").load("/assets/html/button-order.html");
}

function orderPageDone(){
    changActivePage('order-done')
    $(".status-order").empty()
    $(".status-order").append("<div>Trạng thái: Đã thanh toán</div>")
}

function orderPageCancel(){
    changActivePage('order-cancel')
    $(".status-order").empty()
    $(".status-order").append("<div>Trạng thái: Đã huỷ</div>")

}

function changActivePage(pageActive){
    const navLinks = Array.from(document.getElementsByClassName("nav-link"));
    navLinks.forEach(element => element.classList.remove('active', 'base-shoppe-bg'))

    var navActive = document.getElementById(pageActive);
    navActive.classList.add('active', 'base-shoppe-bg');
    navActive.classList.remove('text-dark')
}

function paymentOder(){
    alert("Đã thanh toán thành công!")
}

function cancelOrder(){
    alert("Đã huỷ đơn hàng thành công!")
}