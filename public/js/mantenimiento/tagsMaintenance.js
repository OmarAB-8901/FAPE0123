export default{

   tags: [
      [{tag: "ns=3;s=[PLC_B2M]FIFO_DryMix_IND_MTTO[0]", type: "String"}, 'dry_mix'],
      [{tag: "ns=3;s=[PLC_B2M]FIFO_Pavan_IND_MTTO[0]", type: "String"}, 'pavan'],
      [{tag: "ns=3;s=[PLC_B2M]FIFO_Freidor_IND_MTTO[0]", type: "String"}, 'freidor'],
      [{tag: "ns=3;s=[PLC_B2M]FIFO_Sazonado_IND_MTTO[0]", type: "String"}, 'zazonado'],
      [{tag: "ns=3;s=[PLC_B2M]FIFO_vibradores_IND_MTTO[0]", type: "String"}, 'vibradores'],
      [{tag: "ns=3;s=[PLC_B2M]FIFO_Wcc_Side_A_IND_MTTO[0]", type: "String"}, 'wcc_side_a'],
      [{tag: "ns=3;s=[PLC_B2M]FIFO_Wcc_Side_B_IND_MTTO[0]", type: "String"}, 'wcc_side_b'],
      [{tag: "ns=3;s=[PLC_B2M]FIFO_Garvey_Infinity_IND_MTTO[0]", type: "String"}, 'garvey_infinity'],
      [{tag: "ns=3;s=[PLC_B2M]FIFO_Mondini_Side_A_IND_MTTO[0]", type: "String"}, 'mondini_side_a'],
      [{tag: "ns=3;s=[PLC_B2M]FIFO_Mondini_Side_B_IND_MTTO[0]", type: "String"}, 'mondini_side_b'],
      [{tag: "ns=3;s=[PLC_B2M]FIFO_Krones_IND_MTTO[0]", type: "String"}, 'krones'],
      [{tag: "ns=3;s=[PLC_B2M]FIFO_Tm_Depaletizado_IND_MTTO[0]", type: "String"}, 'tm_depaletizado'],
      [{tag: "ns=3;s=[PLC_B2M]FIFO_Tm_Caldera_IND_MTTO[0]", type: "String"}, 'tm_caldera'],
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
