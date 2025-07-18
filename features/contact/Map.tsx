"use client";
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

// Estilos CSS para controlar el z-index de los elementos de Leaflet
const leafletStyles = `
  .leaflet-container {
    z-index: 10 !important;
  }
  .leaflet-popup {
    z-index: 20 !important;
  }
  .leaflet-control {
    z-index: 15 !important;
  }
  .leaflet-control-zoom {
    z-index: 15 !important;
  }
  .leaflet-control-attribution {
    z-index: 15 !important;
  }
`;

export function Map() {
    const mapRef = useRef<HTMLDivElement>(null);
    const leafletMapRef = useRef<any>(null);

    useEffect(() => {
        let mapInstance: any = null;
        let isMounted = true;

        // Agregar estilos CSS para controlar z-index
        const styleElement = document.createElement('style');
        styleElement.textContent = leafletStyles;
        styleElement.setAttribute('data-leaflet-styles', 'true');
        document.head.appendChild(styleElement);

        const initializeMap = async () => {
            if (!mapRef.current) return;

            // Importa Leaflet dinámicamente
            const L = await import("leaflet");

            // Si ya existe un mapa, elimínalo
            if (leafletMapRef.current) {
                leafletMapRef.current.remove();
                leafletMapRef.current = null;
            }

            // Limpia el contenedor
            mapRef.current.innerHTML = "";

            // Crea el mapa
            mapInstance = L.map(mapRef.current).setView([21.5, -79.5], 7);
            leafletMapRef.current = mapInstance;

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "© OpenStreetMap contributors",
                maxZoom: 19,
            }).addTo(mapInstance);

            // Icono personalizado
            const empetIcon = L.icon({
                iconUrl: "/icons/line-md--map-marker.png",
                iconSize: [32, 32],
                iconAnchor: [16, 32],
                popupAnchor: [0, -32],
            });

            // Coordenadas reales de las oficinas de EMPet en Cuba (extraídas de Google Maps)
            const locations = [
                {
                    name: "Oficina Central",
                    coords: [23.104905, -82.288379], // La Habana - Oficina Central
                    description: "Oficina Central de EMPET",
                },
                {
                    name: "División Occidente",
                    coords: [23.13414, -82.32121], // La Habana - División Occidente
                    description: "EMPET - División Occidente",
                },
                {
                    name: "División Matanzas",
                    coords: [23.065879, -81.542283], // Matanzas
                    description: "EMPET - División Matanzas",
                },
                {
                    name: "División Nuevitas",
                    coords: [21.554928, -77.274129], // Nuevitas, Camagüey
                    description: "EMPET - División Nuevitas",
                },
                {
                    name: "División Santiago de Cuba",
                    coords: [20.000671, -75.870259], // Santiago de Cuba
                    description: "EMPET - División Santiago de Cuba",
                },
            ];

            const markers = locations.map((location) =>
                L.marker(location.coords as [number, number], { icon: empetIcon })
                    .addTo(mapInstance)
                    .bindPopup(`<b>${location.name}</b><br>${location.description}`)
            );

            const group = L.featureGroup(markers);
            mapInstance.fitBounds(group.getBounds(), {
                padding: [50, 50],
            });
        };

        initializeMap();

        // Cleanup al desmontar
        return () => {
            isMounted = false;
            if (leafletMapRef.current) {
                leafletMapRef.current.remove();
                leafletMapRef.current = null;
            }
            // Remover estilos CSS
            const styleElement = document.querySelector('style[data-leaflet-styles]');
            if (styleElement) {
                styleElement.remove();
            }
        };
    }, []);

    return (
        <div
            ref={mapRef}
            className="w-full h-[500px] rounded-lg shadow-md relative"
            style={{
                height: "500px",
                width: "100%",
                minWidth: "300px",
                maxWidth: "100%",
                zIndex: 10,
            }}
        />
    );
} 