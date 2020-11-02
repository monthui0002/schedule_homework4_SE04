$(document).ready(function () {
    function randomData() {
        for (i = 1; i < 10; i++) {
            var tr = document.createElement("tr");

            var tdID = document.createElement("td");
            tdID.appendChild(document.createTextNode(i));

            var tdCode = document.createElement("td");
            tdCode.appendChild(document.createTextNode("MAT00" + i));

            var tdName = document.createElement("td");
            tdName.appendChild(document.createTextNode("Môn học " + i));

            var tdCount = document.createElement("td");
            tdCount.appendChild(document.createTextNode("MAT00" + i));

            var tdStatus = document.createElement("td");
            tdStatus.appendChild(document.createTextNode("Đăng ký lần đầu"));

            var tdFee = document.createElement("td");
            tdFee.appendChild(document.createTextNode(i*100000 + " VNĐ"));

            var tdClassCode = document.createElement("td");
            tdClassCode.appendChild(document.createTextNode("MAT00" + i + " " + i));

            var tdDay = document.createElement("td");
            tdDay.appendChild(document.createTextNode(i < 8 && i > 1 ? "Thứ" + i : "Chủ nhật"));

            var tdTiet = document.createElement("td");
            tdTiet.appendChild(document.createTextNode("Tiết " + i + "-" + (i+1)));

            var tdClassAddr = document.createElement("td");
            tdClassAddr.appendChild(document.createTextNode("Phòng " + (i*100 + i) + " T5"));

            tr.appendChild(tdID);
            tr.appendChild(tdCode);
            tr.appendChild(tdName);
            tr.appendChild(tdCount);
            tr.appendChild(tdStatus);
            tr.appendChild(tdFee);
            tr.appendChild(tdClassCode);
            tr.appendChild(tdDay);
            tr.appendChild(tdTiet);
            tr.appendChild(tdClassAddr);

            document.getElementById("tbody").appendChild(tr)
        }
    }
    randomData()
})