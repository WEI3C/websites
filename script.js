function search() {
  var searchInput = document.getElementById("search-input").value;
  var resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = "";

  // 在此處進行與後台的通信和查詢，以下是一個示例的回應
  var response = [
    {
      "認證ID": "123456",
      "名稱": "創作者1",
      "類別": "專業1",
      "平台": "平台1"
    },
    {
      "認證ID": "789012",
      "名稱": "創作者2",
      "類別": "專業2",
      "平台": "平台2"
    },
    // 在這裡添加其他創作者資訊項目
  ];

  for (var i = 0; i < response.length; i++) {
    var resultCard = document.createElement("div");
    resultCard.classList.add("result-card");
    resultCard.innerHTML = "<h3>結果 " + (i + 1) + "</h3>" +
      "<p><span>認證ID:</span> " + response[i]["認證ID"] + "</p>" +
      "<p><span>名稱:</span> " + response[i]["名稱"] + "</p>" +
      "<p><span>類別:</span> " + response[i]["類別"] + "</p>" +
      "<p><span>平台:</span> " + response[i]["平台"] + "</p>";

    resultContainer.appendChild(resultCard);
  }

  resultContainer.style.display = "block";
}
