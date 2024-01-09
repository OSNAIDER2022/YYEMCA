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
        'titulo': 'Taxi Tradicional',
        'descripcion': '¿Necesitas un transporte seguro y confiable? ¡Reserva tu taxi con nosotros! Has click en la imagen y conoce nuestras tarifas.',
        'id_lista':lista_precios.transporteTradicional
    },
    {
        'imagen': taxi_compartido,
        'titulo': 'Taxi compartido',
        'descripcion': '¿Buscas un transporte asequible, ecológico y seguro? ¡Nuestro servicio de taxi compartido es la mejor opción! Has click en la imagen y conoce nuestras tarifas.',
        'id_lista':lista_precios.transporteIntermunicipal
        
    },
    {
        'imagen': taxi_ejecutivo,
        'titulo': 'Transporte Ejecutivo',
        'descripcion': '¿Buscas un servicio de transporte de lujo, cómodo y personalizado? ¡Nuestro servicio de transporte ejecutivo es la mejor opción! Has click en la imagen y conoce nuestras tarifas.',
        'id_lista':lista_precios.transporteTradicional
    },
    {
        'imagen': aeropuerto,
        'titulo': 'Transporte hacia el Aeropuerto',
        'descripcion': '¿Necesitas un transporte seguro y confiable para llegar al aeropuerto? ¡Reserva tu taxi con nosotros! Has click en la imagen y conoce nuestras tarifas.',
        'id_lista':lista_precios.transporteIntermunicipal
    },
    {
        'imagen': nacional_intermunicipal,
        'titulo': 'Transporte Intermunicipal y Nacional',
        'descripcion': 'Quieres viajar a tu destino favorito sin preocuparte por nada? ¡Nuestro servicio de transporte nacional e intermunicipal es la mejor opción! Has click en la imagen y conoce nuestras tarifas.',
        'id_lista':lista_precios.transporteTradicional
    },
    {
        'imagen': chofer_personalizado,
        'titulo': 'Transporte personalizado con chofer',
        'descripcion':'¿Quieres viajar como una estrella de cine? ¡Nuestro servicio de transporte personalizado con chofer asignado es la opción perfecta! Has click en la imagen y conoce nuestras tarifas.',
        'id_lista':lista_precios.transporteIntermunicipal
    },
    {
        'imagen': administracion_taxis,
        'titulo': 'Administracion de vehiculos tipo Taxi',
        'descripcion': '¿Quieres ahorrar tiempo y dinero en la gestión de tu negocio de taxis? ¡Nuestro servicio de administración de vehículos tipo taxi es la solución perfecta! Has click en la imagen y conoce nuestras tarifas.',
        'id_lista':lista_precios.transporteTradicional
    },
    {
        'imagen': venezuela,
        'titulo': 'Transporte hacia Caracas, Valencia y Maracaibo con conexion en Paraguachon',
        'descripcion': '¿Quieres viajar a Caracas, Valencia o Maracaibo de forma segura y cómoda? ¡Nuestro servicio de transporte es la mejor opción! Has click en la imagen y conoce nuestras tarifas.',
        'id_lista':lista_precios.transporteIntermunicipal
    }
   ]

export default(
    datos_portafolio
)