export default{

   tags: [
      [{tag: "ns=3;s=[PLC_B2M]Humedad_Frito", type: "Double"}, 'humedad'],
      [{tag: "ns=3;s=[PLC_B2M]Adicion_Emulsificante", type: "Bool"}, 'emulsificante_activa'],
      [{tag: "ns=3;s=[PLC_B2M]Adicion_Emulsificante_Real", type: "Double"}, 'emulsificante_lectura'],
      [{tag: "ns=3;s=[PLC_B2M]Temperatura_Freidor", type: "Double"}, 'temp_freidor'],
      [{tag: "ns=3;s=[PLC_B2M]Tiempo_Freido_Papa", type: "Double"}, 'residencia_freidor'],
      [{tag: "ns=3;s=[PLC_B2M]Feeders_En_Funcionamiento", type: "Bool"}, 'feeders'],
      [{tag: "ns=3;s=[PLC_B2M]Dosificacion_Flake", type: "Bool"}, 'flake_activa'],
      [{tag: "ns=3;s=[PLC_B2M]Dosificacion_Flake_Real", type: "Double"}, 'flake_lectura'],
      [{tag: "ns=3;s=[PLC_B2M]Dosificacion_Minors", type: "Bool"}, 'minors_activa'],
      [{tag: "ns=3;s=[PLC_B2M]Dosificacion_Minors_Real", type: "Double"}, 'minors_lectura'],
      [{tag: "ns=3;s=[PLC_B2M]Dosificacion_Sucrosa", type: "Bool"}, 'sucrosa_activa'],
      [{tag: "ns=3;s=[PLC_B2M]Dosificacion_Sucrosa_Real", type: "Double"}, 'sucrosa_lectura'],
      [{tag: "ns=3;s=[PLC_B2M]Adicion_Agua_Pavan", type: "Bool"}, 'pavan_activo'],
      [{tag: "ns=3;s=[PLC_B2M]Adicion_Agua_Pavan_Real", type: "Double"}, 'pavan_lectura'],
   ],

   dataTable: [
      {event: "Humedad en frito (In FL-710)", tipo_dato: "FLOTANTE", valor_referencia: "10", plc: "FREIDOR, ZAZONADO", class: "humedad"},
      {event: "Adicion de Emulsificante ACTIVA", tipo_dato: "BOOL", valor_referencia: "TRUE", plc: "DRY MIX", class: "emulsificante_activa"},
      {event: "Adicion de Emulsificante LECTURA", tipo_dato: "FLOTANTE", valor_referencia: "10", plc: "DRY MIX", class: "emulsificante_lectura"},
      {event: "Temperartura de el freidor", tipo_dato: "FLOTANTE", valor_referencia: "10", plc: "FREIDOR", class: "temp_freidor"},
      {event: "Temperartura de residencia en freidor", tipo_dato: "FLOTANTE", valor_referencia: "10", plc: "FREIDOR", class: "residencia_freidor"},
      {event: "Feeders en funcionamiento", tipo_dato: "BOOL", valor_referencia: "FALSE", plc: "SAZONADO", class: "feeders"},
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
