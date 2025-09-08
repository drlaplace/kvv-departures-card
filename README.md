# 🚋 KVV Departures Card

Eine Home Assistant Lovelace-Karte, um die nächsten Abfahrten der **KVV-Departure-Monitor** Integration anzuzeigen.


## Features
- Anzeige von bis zu **10 Abfahrten**
- **Linienfarben** automatisch erkannt
- Kompatibel mit HACS


## Installation
1. Lade die ZIP-Datei herunter
2. Gehe zu **HACS → Frontend → Benutzerdefiniertes Repository**
3. Lade die ZIP-Datei hoch
4. Installiere die Karte
5. Ressource hinzufügen:
   ```
   /hacsfiles/kvv-departures-card/kvv-departures-card.js
   ```
6. Home Assistant neu laden

## Konfiguration
```yaml
type: custom:kvv-departures-card
entity: sensor.kvv_abfahrten_berghausen_baden_hummelberg
```

## Lizenz
MIT License © 2025
