export default{
   
   tags: [
      [{tag: "ns=2;s=[PLC_ANDON]FIFO_WC_Event[0].Read", type: "String"}, 'dry_mix'],
      [{tag: "ns=2;s=[PLC_ANDON]FIFO_WC_Event[0].Read", type: "String"}, 'pavan'],
      [{tag: "ns=2;s=[PLC_ANDON]FIFO_WC_Event[0].Read", type: "String"}, 'freidor'],
      [{tag: "ns=2;s=[PLC_ANDON]FIFO_WC_Event[0].Read", type: "String"}, 'zazonado'],
      [{tag: "ns=2;s=[PLC_ANDON]FIFO_WC_Event[0].Read", type: "String"}, 'vibradores'],
      [{tag: "ns=2;s=[PLC_ANDON]FIFO_WC_Event[0].Read", type: "String"}, 'wcc_side_a'],
      [{tag: "ns=2;s=[PLC_ANDON]FIFO_WC_Event[0].Read", type: "String"}, 'wcc_side_b'],
      [{tag: "ns=2;s=[PLC_ANDON]FIFO_WC_Event[0].Read", type: "String"}, 'garvey_infinity'],
      [{tag: "ns=2;s=[PLC_ANDON]FIFO_WC_Event[0].Read", type: "String"}, 'mondini_side_a'],
      [{tag: "ns=2;s=[PLC_ANDON]FIFO_WC_Event[0].Read", type: "String"}, 'mondini_side_b'],
      [{tag: "ns=2;s=[PLC_ANDON]FIFO_WC_Event[0].Read", type: "String"}, 'krones'],
      [{tag: "ns=2;s=[PLC_ANDON]FIFO_WC_Event[0].Read", type: "String"}, 'tm_depaletizado'],
      [{tag: "ns=2;s=[PLC_ANDON]FIFO_WC_Event[0].Read", type: "String"}, 'tm_caldera'],
   ],

   dataTable: [
      {equipo: "DRY MIX", class: "dry_mix"}, 
      {equipo: "PAVAN", class: "pavan"}, 
      {equipo: "FREIDOR", class: "freidor"}, 
      {equipo: "ZAZONADO", class: "zazonado"}, 
      {equipo: "VIBRADORES", class: "vibradores"}, 
      {equipo: "WCC SIDE A", class: "wcc_side_a"}, 
      {equipo: "WCC SIDE B", class: "wcc_side_b"}, 
      {equipo: "GARVEY INFINITY", class: "garvey_infinity"}, 
      {equipo: "MONDINI SIDE A", class: "mondini_side_a"}, 
      {equipo: "MONDINI SIDE B", class: "mondini_side_b"}, 
      {equipo: "KRONES", class: "krones"}, 
      {equipo: "TM DEPALETIZADO", class: "tm_depaletizado"}, 
      {equipo: "TM CALDERA", class: "tm_caldera"}
   ]
}