function BAI3() {
    var name = document.getElementById("name").value;
    var description = document.getElementById("input-description").value;
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0
    var year = currentDate.getFullYear();
    // Format ngày
    
    var formattedDate = day + '/' + month + '/' + year;
    var message = "Cảm ơn " + name + " đã gửi ý kiến" + " \n Nội dung góp ý: " +  description + "\n Ý kiến đã gửi vào ngày " + formattedDate + ".";
    alert(message);
}

