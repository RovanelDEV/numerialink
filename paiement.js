// ⚠️ Utilisation directe de la clé API (pour test uniquement)
async function demarrerPaiement() {
  const url = "https://api.lygosapp.com/v1/gateway";

  const payload = {
    amount: 20000,
    shop_name: "Nike",
    message: "Contactez-nous sur WA pour toutes vos questions",
    order_id: crypto.randomUUID()
  };

  const headers = {
    "api-key": "lygosapp-871ff755-b02f-4e09-abe8-7ab513b2ea29", // <-- Remplacé avec une clé API
    "Content-Type": "application/json"
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (data.link) {
      window.location.href = data.link; // Redirige vers le lien Lygos
    } else {
      alert("Erreur: lien de paiement non reçu.");
      console.error(data);
    }
  } catch (error) {
    console.error("Erreur de paiement:", error);
    alert("Échec de la session de paiement.");
  }
}
