/* Vertrag für die spätere PHP-/MariaDB-Anbindung. Alle Endpunkte liefern JSON. */
window.URBEX_API = { API_ENABLED: false, baseUrl: '/api', endpoints: {
  spots: '/spots.php', comments: '/comments.php', uploads: '/uploads.php',
  moderation: '/moderation.php', subscriptions: '/subscriptions.php', notifications: '/notifications.php',
  ratings: '/ratings.php', savedSpots: '/saved-spots.php'
} };
