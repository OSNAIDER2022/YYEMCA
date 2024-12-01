import aeropuerto from '../portafolio/aeropuerto.jpg'
import taxi_tradicional from '../portafolio/taxi_tradicional.jpg'
import taxi_compartido from '../portafolio/taxi_compartido.jpg'
import taxi_ejecutivo from '../portafolio/taxi_ejecutivo.jpg'
import nacional_intermunicipal from '../portafolio/nacional_intermunicipal.jpg'
import chofer_personalizado from '../portafolio/chofer_personalizado.jpg'
import administracion_taxis from '../portafolio/administracion_taxis.jpg'
import venezuela from '../portafolio/venezuela.jpg'

import lista_precios from './lista_precios'

   const datos_portafolio = [
    {
        'imagen': taxi_tradicional,
        'titulo': 'Servicio de Taxi Tradicional',
        'descripcion': 'Transporte destinado a movilizarte dentro de la ciudad y zonas aledañas',
        'id_lista':lista_precios.transporteTradicional
    },
    {
        'imagen': taxi_compartido,
        'titulo': 'Servicio de Taxi Puerta a Puerta',
        'descripcion': 'Si deseas transportarte con varios acompañantes, esta opción es para tí.',
        'id_lista':lista_precios.transporteCompartido
        
    },
    {
        'imagen': taxi_ejecutivo,
        'titulo': 'Transporte Ejecutivo totalmente personalizable',
        'descripcion': 'Contamos con profesionales altamente calificados, para hacer de tu experiencia lo mas placentera posible.',
        'id_lista':lista_precios.transporteEjecutivo
    },
    {
        'imagen': aeropuerto,
        'titulo': 'Servicio de Transporte hacia el Aeropuerto',
        'descripcion': 'Te llevamos desde la puerta de tu casa hacia el aeropuerto de forma ágil y segura.',
        'id_lista':lista_precios.transporteAeropuerto
    },
    {
        'imagen': nacional_intermunicipal,
        'titulo': 'Transporte Intermunicipal en Antioquia',
        'descripcion': 'Transportamos hacia la gran parte de los municipios a nivel antioquia, conoce nuestras tarifas.',
        'id_lista':lista_precios.transporteIntermunicipal
    },
    // {
    //     'imagen': chofer_personalizado,
    //     'titulo': 'Transporte personalizado con chofer',
    //     'descripcion':'Has click en la imagen y conoce nuestras tarifas.',
    //     'id_lista':lista_precios.transporteIntermunicipal
    // },
    // {
    //     'imagen': administracion_taxis,
    //     'titulo': 'Administracion de vehiculos tipo Taxi',
    //     'descripcion': 'Has click en la imagen y conoce nuestras tarifas.',
    //     'id_lista':lista_precios.transporteTradicional
    // },
    {
        'imagen': venezuela,
        'titulo': 'Transporte a Venezuela',
        'descripcion': 'Te llevamos desde cualquier lugar de Colombia hasta cualquier ciudad de Venezuela, haciendo trasbordo en Paraguachón o en San Antonio',
        'id_lista':lista_precios.transporteAVenezuela
    }
   ]

export default(
    datos_portafolio
)