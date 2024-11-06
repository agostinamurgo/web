function showDetails(tool) {
    let title = "";
    let description = "";

    // Asignar el título y la descripción según la herramienta seleccionada
    switch (tool) {
        case "tool1":
            title = "Beautiful.AI";
            description = "Beautiful.AI es una herramienta de IA que ayuda a crear presentaciones profesionales con facilidad. Ofrece plantillas inteligentes y diseño automatizado.";
            break;
        case "tool2":
            title = "Copy.ai";
            description = "Copy.ai utiliza IA para generar textos creativos y persuasivos para cualquier tipo de presentación o contenido web, ahorrando tiempo en la creación de ideas.";
            break;
        case "tool3":
            title = "Zyro";
            description = "Zyro es una plataforma de creación de sitios web que incorpora IA para ayudar en el diseño y la creación de contenido, como imágenes y textos.";
            break;
        case "tool4":
            title = "Jasper AI";
            description = "Jasper es una herramienta de IA que permite generar contenido escrito, desde blogs hasta presentaciones, con un enfoque en marketing digital y ventas.";
            break;
        case "tool5":
            title = "Webflow (IA de diseño web)";
            description = "Webflow es una plataforma de diseño web que utiliza IA para facilitar la creación de páginas web, integrando diseño, desarrollo y CMS en una sola herramienta.";
            break;
    }

    // Mostrar el modal con la información correspondiente
    document.getElementById("tool-title").innerText = title;
    document.getElementById("tool-description").innerText = description;
    document.getElementById("tool-modal").style.display = "block";
}

// Cerrar el modal cuando el usuario haga clic en el botón de cerrar
document.getElementById("close-modal").onclick = function() {
    document.getElementById("tool-modal").style.display = "none";
};

// Cerrar el modal si el usuario hace clic fuera del modal
window.onclick = function(event) {
    if (event.target == document.getElementById("tool-modal")) {
        document.getElementById("tool-modal").style.display = "none";
    }
};
