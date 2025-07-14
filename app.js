async function payer() {
  const orderId = crypto.randomUUID();

  const response = await fetch("https://api.lygosapp.com/v1/gateway", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": "VOTRE_CLE_API_LYGOS"
    },
    body: JSON.stringify({
      amount: 5000,
      shop_name: "Numérialink",
      message: "Paiement Casque Bluetooth",
      order_id: orderId,
      success_url: "https://votre-site.com/success",
      failure_url: "https://votre-site.com/failure"
    })
  });

  const data = await response.json();
  if (data.link) {
    window.location.href = data.link; // Redirige vers Lygos / MoMo
  } else {
    alert("Erreur lors de la création du paiement.");
    console.error(data);
  }
}
