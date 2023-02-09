let typeProduct = [];
let shippingUnit = [];
let statusProduct = [];
let minPrice = 0;
let maxPrice = Number.MAX_VALUE;
let isManagerProduct = false;

"use strict";
$(function () {
  buildProduct();
});

function buildProduct() {
  getListProduct().then(
    function () {
      fillProductsToTable();
    },
  )
}

function fillterApply() {
  getTypeProduct();
  getShippingUnit();
  getStatusProduct();
  getFillterPrice();
  console.log(minPrice);
  console.log(maxPrice);

}

async function getListProduct() {

}

function fillProductsToTable() {
  $("#content-product").empty()
  for (let index = 0; index < 5; index++) {
    $(".content-product").append(`<div class="col-4">
    <div href="#" class="home-product-item">
      <div class="home-product-item__img"
        style="background-image: url(https://clickbuy.com.vn/uploads/2022/10/avt-iphone-14-pro-tim.png);">
      </div>
      <h4 class="home-product-item__name">
        <b>Bộ kem đặc trị vùng mắt Ohui Age Recovery Wrinkle Cut Serum.</b>
      </h4>
      <div class="home-product-item__price">
        <span class="home-product-item__price-current">Giá: 2.070.000đ</span>
      </div>
      <div class="home-product-item__price">
        <span class="home-product-item__price-current">Tình trạng: Mới</span>
      </div>
      <div class="home-product-item__price">
        <span class="home-product-item__price-current">Đơn vị vận chuyển: Hoả tốc</span>
      </div>
      <div class="home-product-item__price">
        <span class="home-product-item__price-current">Danh mục: Điện thoại</span>
      </div>
      <div class="input-group mb-3 input-group-lg w-100">
      
      ${isManagerProduct ?
        `<div class="d-flex justify-content-around w-100">
        <div>
        <a data-target="#modalProduct" onclick="editProduct(${index})">
          <button type="button" class="btn base-font base-shoppe-bg" >
          Chỉnh sửa</button></a>
        </div>
        <div>
          <button type="button" class="btn base-font bg-danger text-white" onclick="confirmDeleteProduct(${index})">Xoá sản phẩm</button>
        </div>
      </div>`
        :
        `<input type="number" class="form-control" id="input-product-${index}" value="0">
        <div class="input-group-prepend">
          <button type="button" class="btn base-font base-shoppe-bg" onclick="addToBasket('input-product-${index}', ${index})">Áp dụng</button>
        </div>`
      }

      </div>
      <div class="home-product-item__action">
        <span class="home-product-item__like home-product-item__like--liked">
          <i class="home-product-item__like-icon-empty far fa-heart"></i>
          <i class="home-product-item__like-icon-fill fas fa-heart"></i>
        </span>
        <div class="home-product-item__rating">
          <i class="home-product-item__star--gold fas fa-star"></i>
          <i class="home-product-item__star--gold fas fa-star"></i>
          <i class="home-product-item__star--gold fas fa-star"></i>
          <i class="home-product-item__star--gold fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <div class="home-product-item__sold">88 Đã bán</div>
      </div>
      <div class="home-product-item__favourite">
        <i class="fas fa-check "></i>
        <span>Yêu thích</span>
      </div>
      <div class="home-product-item__sale-off">
        <span class="home-product-item__sale-off-percent">43%</span>
        <span class="home-product-item__sale-off-label">GIẢM</span>
      </div>
    </div>
  </div>`)
  }


}

function getTypeProduct() {
  typeProduct = [];
  var checkedPhone = document.getElementById("phone").checked;
  if (checkedPhone) {
    typeProduct.push("PHONE")
  }
  var checkedComputer = document.getElementById("computer").checked;
  if (checkedComputer) {
    typeProduct.push("COMPUTER")
  }
  var checkedClothes = document.getElementById("clothes").checked;
  if (checkedClothes) {
    typeProduct.push("CLOTHES")
  }
  var checkedFootwear = document.getElementById("footwear").checked;
  if (checkedFootwear) {
    typeProduct.push("FOOTWEAR")
  }
}

function getShippingUnit() {
  shippingUnit = [];
  var checkedExpress = document.getElementById("express").checked;
  if (checkedExpress) {
    shippingUnit.push("EXPRESS")
  }
  var checkedFast = document.getElementById("fast").checked;
  if (checkedFast) {
    shippingUnit.push("FAST")
  }
  var checkedSave = document.getElementById("save").checked;
  if (checkedSave) {
    shippingUnit.push("SAVE")
  }
}

function getStatusProduct() {
  statusProduct = [];
  var statusNew = document.getElementById("statusNew").checked;
  if (statusNew) {
    shippingUnit.push("NEW")
  }
  var statusOld = document.getElementById("statusOld").checked;
  if (statusOld) {
    shippingUnit.push("OLD")
  }
}

function getFillterPrice() {
  minPrice = document.getElementById("minPrice").value;
  maxPrice = document.getElementById("maxPrice").value;
}

function clearFillter() {
  document.getElementById("phone").checked = false;
  document.getElementById("computer").checked = false;
  document.getElementById("clothes").checked = false;
  document.getElementById("footwear").checked = false;

  document.getElementById("express").checked = false;
  document.getElementById("fast").checked = false;
  document.getElementById("save").checked = false;

  document.getElementById("statusNew").checked = false;
  document.getElementById("statusOld").checked = false;

  document.getElementById("minPrice").value = "";
  document.getElementById("maxPrice").value = "";
}

function addToBasket(inpuId, productId) {
  quantity = document.getElementById(inpuId).value;
  if (quantity > 0) {
    let text = "Bạn có chắc mua sản phẩm?.";
    if (confirm(text) == true) {
      alert("Đã thêm sản phẩm vào giỏ")
      console.log("ĐÃ thêm", quantity, productId)
    }
  } else {
    alert("Số lượng sản phẩm phải lớn hơn 1")
  }
}

function navManagerProduct() {
  isManagerProduct = true;
  buildProduct();
}

function editProduct(productId) {
  console.log(productId)
  $('#modalProduct').modal('show')
  showAlrtSuccess()
}

function confirmDeleteProduct(productId) {
  $('#modalConfirmDelete').modal('show')
  document.getElementById("productIdDelete").value = productId;
}

function deleteProduct() {
  productId = document.getElementById("productIdDelete").value;
  showAlrtSuccess()
  console.log(productId)
  $('#modalConfirmDelete').modal('hide')
}

function saveProduct() {
  const imageProduct = document.getElementById('image').value;
  // let imageUrl = saveImage(imageProduct);
  console.log(imageProduct)

  // By Parsing File
  // var reader = new FileReader(),
  //   binary, base64;
  // reader.addEventListener('loadend', function () {
  //   binary = reader.result; // binary data (stored as string), unsafe for most actions
  //   base64 = btoa(binary); // base64 data, safer but takes up more memory
  // }, false);
  // reader.readAsBinaryString(img);
  
}

function saveImage(file) {

  return file.name;
}