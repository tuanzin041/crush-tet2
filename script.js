// Hiển thị Popup khi load trang
window.onload = function() {
    setTimeout(function() {
        document.getElementById("popup").classList.add("show");
    }, 2000); // Hiện popup sau 2 giây
}

// Đóng popup khi click vào nút
function closePopup() {
    document.getElementById("popup").classList.remove("show");
}