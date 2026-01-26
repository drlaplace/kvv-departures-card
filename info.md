# 🚋 KVV Departures Card

Eine Lovelace-Karte für Home Assistant, die die nächsten **KVV-Abfahrten** anzeigt.

## ✨ Features
- Zeigt Linie, Richtung, Countdown
- Farbliche Hervorhebung pro Linie
- Blinkanzeige für Realtime-Abfahrten
- Bis zu 10 Abfahrten

## 📦 Installation
1. Gehe zu **HACS → Frontend**
2. Klicke auf **Benutzerdefiniertes Repository hinzufügen**
3. Lade die heruntergeladene ZIP-Datei hoch
4. Installiere die Karte
5. Ressource hinzufügen:
   ```
   /hacsfiles/kvv-departures-card/kvv-departures-card.js
   ```
6. Lade das Dashboard neu

## 📐 Konfiguration
```yaml
type: custom:kvv-departures-card
entity: sensor.kvv_abfahrten_berghausen_baden_hummelberg
title: Hummelberg    #optional
max_items: 9         #optional standard 10
```
