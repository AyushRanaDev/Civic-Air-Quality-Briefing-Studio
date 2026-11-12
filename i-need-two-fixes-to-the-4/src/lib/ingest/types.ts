export type Status='recorded'|'derived'|'estimated'|'missing'|'flagged';
export type Reading={rowId:string;sourceRowNumber:number;originalValueRaw:string;originalUnit:string;normalizedValue:number|null;normalizedUnit:'µg/m³'|'mg/m³';station:string;timestamp:string|null;pollutant:string;status:Status;flags:string[];raw:Record<string,string>};
export type Mapping={station?:string;timestamp?:string;pollutant?:string;value?:string;unit?:string;widePollutants:Record<string,string>;ambiguous:string[];ignored:string[]};
export type IngestResult={readings:Reading[];mapping:Mapping;headers:string[];rows:Record<string,string>[];errors:string[];mergeMap:Record<string,string>};
