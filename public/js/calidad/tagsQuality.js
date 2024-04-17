export default{
   
   tags: [
      [{tag: "ns=2;s=[PLC_ANDON]FIFO_WC_Event[0].Read", type: "String"}, 'humedad'],
   ],

   dataTable: [
      {event: "Humedad en frito (In FL-710)", tipo_dato: "FLOTANTE", valor_referencia: "10", plc: "FREIDOR, ZAZONADO", class: "humedad"}, 
      {event: "Adicion de Emulsificante ACTIVA", tipo_dato: "BOOL", valor_referencia: "TRUE", plc: "DRY MIX", class: "emulsificante_activa"}, 
      {event: "Adicion de Emulsificante LECTURA", tipo_dato: "FLOTANTE", valor_referencia: "10", plc: "DRY MIX", class: "emulsificante_lectura"}, 
      {event: "Temperartura de el freidor", tipo_dato: "FLOTANTE", valor_referencia: "10", plc: "FREIDOR", class: "temp_freidor"}, 
      {event: "Temperartura de residencia en freidor", tipo_dato: "FLOTANTE", valor_referencia: "10", plc: "FREIDOR", class: "residencia_freidor"}, 
      {event: "Feeders en funcionamiento", tipo_dato: "BOOL", valor_referencia: "FALSE", plc: "SAZONADO", class: "freeders"}, 
      {event: "Docificacion de flake ACTIVA", tipo_dato: "BOOL", valor_referencia: "TRUE", plc: "DRY MIX", class: "flake_activa"}, 
      {event: "Docificacion de flake LECTURA", tipo_dato: "FLOTANTE", valor_referencia: "10", plc: "DRY MIX", class: "flake_lectura"}, 
      {event: "Docificacion de minors ACTIVA", tipo_dato: "BOOL", valor_referencia: "FALSE", plc: "DRY MIX", class: "minors_activa"}, 
      {event: "Docificacion de minors LECTURA", tipo_dato: "FLOTANTE", valor_referencia: "10", plc: "DRY MIX", class: "minors_lectura"}, 
      {event: "Docificacion Sucrosa ACTIVA", tipo_dato: "BOOL", valor_referencia: "TRUE", plc: "DRY MIX", class: "sucrosa_activa"}, 
      {event: "Docificacion Sucrosa LECTURA", tipo_dato: "FLOTANTE", valor_referencia: "10", plc: "DRY MIX", class: "sucrosa_lectura"}, 
      {event: "Adicion de agua en Pavan ACTIVO", tipo_dato: "BOOL", valor_referencia: "TRUE", plc: "DRY MIX", class: "pavan_activo"}, 
      {event: "Adicion de agua en Pavan LECTURA", tipo_dato: "FLOTANTE", valor_referencia: "10", plc: "DRY MIX", class: "pavan_lectura"}
   ]
}