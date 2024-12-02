import aeropuerto from '../services/aeropuerto.jpg'
import taxi_tradicional from '../services/taxi_tradicional.jpg'
import taxi_compartido from '../services/taxi_compartido.jpg'
import taxi_ejecutivo from '../services/taxi_ejecutivo.jpg'
import nacional_intermunicipal from '../services/nacional_intermunicipal.jpg'
import chofer_personalizado from '../services/chofer_personalizado.jpg'
import administracion_taxis from '../services/administracion_taxis.jpg'
import venezuela from '../services/venezuela.jpg'

import serviceContext from './serviceContext'

   const servicesData = [
    {
        'imagen': taxi_tradicional,
        'titulo': 'Servicio de Taxi Tradicional',
        'descripcion': 'Transporte destinado a movilizarte dentro de la ciudad y zonas aledañas',
        'id_lista':serviceContext.transporteTradicional
    },
    {
        'imagen': taxi_compartido,
        'titulo': 'Servicio de Taxi Puerta a Puerta',
        'descripcion': 'Si deseas transportarte con varios acompañantes, esta opción es para tí.',
        'id_lista':serviceContext.transporteCompartido
        
    },
    {
        'imagen': taxi_ejecutivo,
        'titulo': 'Transporte Ejecutivo totalmente personalizable',
        'descripcion': 'Contamos con profesionales altamente calificados, para hacer de tu experiencia lo mas placentera posible.',
        'id_lista':serviceContext.transporteEjecutivo
    },
    {
        'imagen': aeropuerto,
        'titulo': 'Servicio de Transporte hacia el Aeropuerto',
        'descripcion': 'Te llevamos desde la puerta de tu casa hacia el aeropuerto de forma ágil y segura.',
        'id_lista':serviceContext.transporteAeropuerto
    },
    {
        'imagen': nacional_intermunicipal,
        'titulo': 'Transporte Intermunicipal en Antioquia',
        'descripcion': 'Transportamos hacia la gran parte de los municipios a nivel antioquia, conoce nuestras tarifas.',
        'id_lista':serviceContext.transporteIntermunicipal
    },
    {
        'imagen': chofer_personalizado,
        'titulo': 'Transporte personalizado con chofer',
        'descripcion':'Has click en la imagen y conoce nuestras tarifas.',
        'id_lista':serviceContext.transportePersonalizado
    },
    {
        'imagen': administracion_taxis,
        'titulo': 'Servicio de Mudanzas desde Colombia hacia Venezuela',
        'descripcion': 'Amigo Venezolano, te brindamos la solución para que no regales tus enceres y puedas llevarlos a Venezuela. Conoce las soluciones que tenemos para tí.',
        'id_lista':serviceContext.transporteMudanzas
    },
    {
        'imagen': venezuela,
        'titulo': 'Transporte a Venezuela',
        'descripcion': 'Te llevamos desde cualquier lugar de Colombia hasta cualquier ciudad de Venezuela, haciendo trasbordo en Paraguachón o en San Antonio',
        'id_lista':serviceContext.transporteAVenezuela
    }
   ]

export default(
    servicesData
)