var itemAccessCount = "",
    thingIWantCount = "",
    contactCount    = "",
    stockCount      = "",
    addInfoText     = "",
    addInfoeElements = "",
    productNameClass = document.getElementsByClassName("product_name"),
    itemTilesSupportCompleteCount = 0,
    xhr,
    targetProductNameClass;
for(var index in productNameClass){
  try{
    xhr = new XMLHttpRequest();
    xhr.onload = function() {
      itemAccessCount = "アクセス:" + this.responseXML.getElementsByClassName("ac_count")[0].innerText + "／";
      thingIWantCount = "ほしいもの登録:" + this.responseXML.getElementsByClassName("fav_count")[0].innerText + "／";
      contactCount    = "お問い合わせ:" + this.responseXML.getElementById("tabmenu_inqcnt").innerText + "／";
      stockCount      = "在庫:" + this.responseXML.getElementById("s_quantity").getElementsByTagName("dd")[0].innerText.replace(/ |  （？）/g, "");
      addInfoText     = itemAccessCount + thingIWantCount + contactCount + stockCount;
      addInfoeElements= document.createElement('small');
      addInfoeElements.textContent = addInfoText;
      targetProductNameClass = productNameClass[itemTilesSupportCompleteCount];
      targetProductNameClass.parentNode.insertBefore(addInfoeElements, targetProductNameClass.nextSibling);
      itemTilesSupportCompleteCount++;
    }
    xhr.open("GET", productNameClass[index].getElementsByTagName('a')[0].href);
    xhr.responseType = "document";
    xhr.send();
  }catch(e){};
};
