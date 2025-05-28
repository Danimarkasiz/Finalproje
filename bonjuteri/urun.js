
 
  const bankaOdemeSayfasi = "odeme-banka.html";
  const kapidaOdemeSayfasi = "odeme-kapida.html";

  
  document.getElementById("bankaBtn").addEventListener("click", function() {
    window.location.href = bankaOdemeSayfasi;
  });

  document.getElementById("kapidaBtn").addEventListener("click", function() {
    window.location.href = kapidaOdemeSayfasi;
  });
