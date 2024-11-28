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
        'descripcion': 'Has click en la imagen y conoce nuestras tarifas.',
        'id_lista':lista_precios.transporteTradicional
    },
    {
        'imagen': taxi_compartido,
        'titulo': 'Servicio de Taxi Compartido',
        'descripcion': 'Has click en la imagen y conoce nuestras tarifas.',
        'id_lista':lista_precios.transporteIntermunicipal
        
    },
    {
        'imagen': taxi_ejecutivo,
        'titulo': 'Transporte Ejecutivo totalmente personalizable',
        'descripcion': 'Has click en la imagen y conoce nuestras tarifas.',
        'id_lista':lista_precios.transporteTradicional
    },
    {
        'imagen': aeropuerto,
        'titulo': 'Servicio de Transporte hacia el Aeropuerto',
        'descripcion': 'Has click en la imagen y conoce nuestras tarifas.',
        'id_lista':lista_precios.transporteIntermunicipal
    },
    {
        'imagen': nacional_intermunicipal,
        'titulo': 'Transporte Intermunicipal en Antioquia',
        'descripcion': 'Has click en la imagen y conoce nuestras tarifas.',
        'id_lista':lista_precios.transporteTradicional
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
        'titulo': 'Transporte hacia Caracas, Valencia y Maracaibo con conexion en Paraguachon',
        'descripcion': 'Has click en la imagen y conoce nuestras tarifas.',
        'id_lista':lista_precios.transporteIntermunicipal
    }
   ]

export default(
    datos_portafolio
)