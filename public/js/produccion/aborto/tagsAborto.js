export default{
   
  tags: [
     [{tag: "ns=2;s=[PLC_ANDON]FIFO_WC_Event[0].Read", type: "String"}, 'humedad'],
  ],

  dataTable: [
     {line: "Humedad en frito (In FL-710)", tipo_dato: "FLOTANTE", valor_referencia: "10", plc: "FREIDOR, ZAZONADO", class: "humedad"},
  ]
}