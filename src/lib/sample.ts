export const sample=`Station Name,Reading Date,PM 2.5,PM10,Nitrogen Dioxide,Unit,Inspector Note
Sector 5 - Station,13/11/2026 08:00,72,112,32,ug/m3,calibrated
sector5,13/11/2026 18:00,89,139,41,µg/m³,calibrated
Sec. 5 Stn,14/11/2026 08:00,68,105,29,ug/m3,
Riverfront Monitor,11-14-2026 08:00,0.081,0.140,0.032,mg/m3,portable sensor
Riverfront Monitor,11-14-2026 18:00,0.092,0.151,0.038,mg/m3,portable sensor
Market Junction,12 Nov 2026 8am,124,190,72,ug/m3,traffic queue
Market Junction,12 Nov 2026 8am,124,190,72,ug/m3,duplicate
Market Junction,13 Nov 2026 8am,140,210,88,ug/m3,
Old Town School,13/11/2026 08:00,NA,91,21,ug/m3,
Old Town School,14/11/2026 08:00,45,89,20,ug/m3,
Industrial Gate,13/11/2026 08:00,1201,180,91,ug/m3,sensor check
Industrial Gate,14/11/2026 08:00,--,175,86,ug/m3,offline
Industrial Gate,15/11/2026 08:00,--,--,--,ug/m3,offline
Industrial Gate,16/11/2026 08:00,--,--,--,ug/m3,offline`;
export const previous=sample.replace(/124,190/g,'85,132').replace(/140,210/g,'92,145').replace(/72,112/g,'58,92');
