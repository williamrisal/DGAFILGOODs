import axios from "axios";

function calculateAverage(str) {
  // Vérifier si la chaîne est vide
  if (!str) {
    return 0;
  }

  // Convertir la chaîne en tableau de nombres
  const arr = JSON.parse(str);

  // Calculer la somme des éléments du tableau
  const sum = arr.reduce((acc, val) => acc + val, 0);

  // Calculer la moyenne et arrondir à deux décimales
  const avg = Number((sum / arr.length).toFixed(2));

  return avg;
}

export default async function parsing_GraphBar() {
  const labels = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://localhost:8080/ccercity/bordeaux",
    headers: {},
  };

  try {
    const response = await axios(config);
    var monthlyAverages = new Array(12).fill(0); // tableau de 12 éléments initialisé à 0

    for (var a = 0; a < response.data.length; a++) {
      var month = new Date(response.data[a].createdAt).getMonth(); // récupérer le mois de la date de la stat
      var stats = response.data[a].stats;
      monthlyAverages[month] += calculateAverage(stats); // ajouter la valeur à la somme des valeurs pour ce mois
    }
    monthlyAverages = monthlyAverages.map(function (sum) {
      return sum / response.data.length; // calculer la moyenne pour le mois
    });

    return monthlyAverages;
  } catch (error) {
    console.log(error);
    return null;
  }
}
