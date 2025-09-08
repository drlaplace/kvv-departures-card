
class KVVDeparturesCard extends HTMLElement {
  static getConfigElement() {
    return document.createElement("hui-generic-entity-row");
  }

  static getStubConfig() {
    return { entity: "sensor.kvv_abfahrten_berghausen_baden_hummelberg" };
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error("Bitte eine KVV-Abfahrten-Entität konfigurieren.");
    }
    this.config = config;
    this.colors = {
      "S1": "#009639", "S11": "#00A651", "S2": "#E30613", "S31": "#F28D00",
      "S32": "#FFB600", "S4": "#7030A0", "S41": "#A05095", "S42": "#8B1E6D",
      "S5": "#0072BC", "S51": "#0091D5", "S7": "#F58220", "S8": "#1F497D",
      "S9": "#B5121B", "1": "#E30613", "2": "#009639", "3": "#FFB600",
      "4": "#7030A0", "5": "#0072BC", "6": "#00A651"
    };
    this.attachShadow({ mode: "open" });
  }

  set hass(hass) {
    const entity = hass.states[this.config.entity];
    if (!entity) {
      this.renderError("Sensor nicht gefunden!");
      return;
    }

    const departures = entity.attributes.abfahrten || [];
    const stationName = entity.attributes.station_name || "Unbekannt";

    this.shadowRoot.innerHTML = `
      <style>
        .kvv-card {
          padding: 12px;
          border-radius: 12px;
          background: var(--card-background-color);
          box-shadow: var(--ha-card-box-shadow, none);
          font-family: Arial, sans-serif;
        }
        .kvv-title {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 10px;
          color: var(--primary-text-color);
        }
        .departure-row {
          display: flex;
          align-items: center;
          margin-bottom: 6px;
        }
        .line {
          color: white;
          font-weight: bold;
          font-size: 13px;
          padding: 2px 8px;
          border-radius: 6px;
          min-width: 36px;
          text-align: center;
          margin-right: 10px;
        }
        .direction {
          flex: 1;
          font-size: 14px;
          color: var(--primary-text-color);
        }
        .countdown {
          font-size: 14px;
          color: var(--secondary-text-color);
          min-width: 50px;
          text-align: right;
        }
        .realtime {
          animation: blink 1s infinite alternate;
        }
        @keyframes blink {
          from { opacity: 1; }
          to { opacity: 0.3; }
        }
      </style>

      <ha-card class="kvv-card">
        <div class="kvv-title">Abfahrten an ${stationName}</div>
        ${departures.length === 0
          ? "<div>Keine Abfahrten verfügbar</div>"
          : departures
              .slice(0, 10)
              .map(dep => {
                const bgColor = this.colors[dep.line] || "#6D4C41";
                const realtimeClass = dep.realtime ? "realtime" : "";
                return `
                  <div class="departure-row">
                    <div class="line" style="background-color: ${bgColor};">${dep.line}</div>
                    <div class="direction">${dep.direction}</div>
                    <div class="countdown ${realtimeClass}">${dep.countdown} Min</div>
                  </div>
                `;
              })
              .join("")}
      </ha-card>
    `;
  }

  renderError(message) {
    this.shadowRoot.innerHTML = `
      <ha-card class="kvv-card">
        <div class="kvv-title">Fehler</div>
        <div>${message}</div>
      </ha-card>
    `;
  }
}

customElements.define("kvv-departures-card", KVVDeparturesCard);
