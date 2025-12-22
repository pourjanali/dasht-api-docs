window.onload = function () {
  //<editor-fold desc="Changeable Configuration Block">

  // Initialize Swagger UI
  window.ui = SwaggerUIBundle({
    url: "dasht-api.json", // This must match your JSON filename exactly
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
    queryConfigEnabled: false,

    // Optional: Add a custom validator URL or disable it
    // validatorUrl: null, 
  });

  //</editor-fold>
};