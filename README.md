# **KVV Departures Card** 🚌🚆

![HACS Custom](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)
![Home Assistant](https://img.shields.io/badge/Home%20Assistant-Lovelace%20Card-blue)
![Version](https://img.shields.io/github/v/tag/<dein-user>/kvv-departures-card?label=Release)

Die **KVV Departures Card** ist eine benutzerdefinierte Lovelace-Karte für Home Assistant,  
um die Abfahrten der **KVV Departure Monitor** Integration optisch ansprechend darzustellen.  

![Screenshot](https://github.com/drlaplace/kvv-departures-card/blob/main/images/kvv_departures_card.png)
---

## **Funktionen**
✅ Anzeige von Linien, Ziel, Countdown & Echtzeitstatus  
✅ Dynamische Farben je Linie (z. B. S-Bahn, Bus, Tram)  
✅ Individuell konfigurierbare maximale Anzahl von Abfahrten  
✅ Kompatibel mit der **KVV Departure Monitor** Integration  
✅ Unterstützung für **HACS** und **manuelle Installation**

---

## **Installation über HACS**
1. **HACS öffnen** → **Frontend** → ⚙️ → **Benutzerdefiniertes Repository hinzufügen**
2. Füge dein Repository hinzu:

   ```
   https://github.com/drlaplace/kvv-departures-card
   ```
3. HACS durchsuchen und download

## **Manuelle Installation**
Falls du HACS nicht verwenden möchtest:
1. Lade das Repository als `.zip` herunter
2. Entpacke es nach:
   ```
   /config/www/kvv-departures-card/

## Konfiguration
```yaml
type: custom:kvv-departures-card
entity: sensor.kvv_abfahrten_berghausen_baden_hummelberg
```

## Lizenz
MIT License © 2025
