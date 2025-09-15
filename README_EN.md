
# **KVV Departures Card** 🚌🚆

![HACS Custom](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)
![Home Assistant](https://img.shields.io/badge/Home%20Assistant-Lovelace%20Card-blue)
![Version](https://img.shields.io/github/v/tag/<your-user>/kvv-departures-card?label=Release)

[![Deutsch](https://img.shields.io/badge/Language-German-blue)](README.md)
[![English](https://img.shields.io/badge/Language-English-green)](README_EN.md)

The **KVV Departures Card** is a custom **Lovelace card** for Home Assistant  
to visually display departures from the **KVV Departure Monitor** integration in a clean and compact way.

![Screenshot](https://github.com/drlaplace/kvv-departures-card/blob/main/images/kvv_departures_card.png)

---

## **Features**
✅ Displays line, destination, countdown & real-time status  
✅ Dynamic colors per line (e.g. S-Bahn, tram, bus)  
✅ Configurable maximum number of departures  
✅ Fully compatible with the **KVV Departure Monitor** integration  
✅ Supports **HACS** and **manual installation**

---

## **Installation via HACS**
1. **open HACS**
2. serch KVV Departure Card and download
3. Browser reload

---

## **Manual Installation**
If you prefer not to use HACS:
1. Download the repository as `.zip`
2. Extract it into:
   ```
   /config/www/kvv-departures-card/
   ```
3. Go to **Settings → Dashboards → Resources** in Home Assistant
4. Add a resource:
   ```
   /local/kvv-departures-card/kvv-departures-card.js
   ```
5. Set type to **JavaScript Module**
6. Reload Home Assistant

---

## **Configuration**
1. **Dashboard**->**insert card**->**manuell**->   
Example Lovelace YAML setup:
```yaml
type: custom:kvv-departures-card
entity: sensor.kvv_abfahrten_berghausen_baden_hummelberg
```

---

## **License**
MIT License © 2025
