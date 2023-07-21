import { NextResponse } from "next/server"

const PARADAS = [
    {
        "codigoLinea": 95,
        "codigoCalle": 3618,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "ALMAFUERTE - ENSENADA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3535,
                "descripcion": "ITALIA - ENSENADA",
                "codCalle": 3618,
                "createdAt": 1689953020404,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3618,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "ALMAFUERTE - ENSENADA",
                        "codigoInterseccion": 3535,
                        "descripcionInterseccion": "ITALIA - ENSENADA",
                        "identificadorParada": "EDA2206",
                        "descripcion": "EDA2206",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021479
                    }
                ]
            },
            {
                "codigoInterseccion": 3534,
                "descripcion": "AUSTRIA - ENSENADA",
                "codCalle": 3618,
                "createdAt": 1689953020404,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3618,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "ALMAFUERTE - ENSENADA",
                        "codigoInterseccion": 3534,
                        "descripcionInterseccion": "AUSTRIA - ENSENADA",
                        "identificadorParada": "EDA2208",
                        "descripcion": "EDA2208",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021486
                    }
                ]
            },
            {
                "codigoInterseccion": 3619,
                "descripcion": "HOLANDA (PASARELA) - ENSENADA",
                "codCalle": 3618,
                "createdAt": 1689953020404,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3618,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "ALMAFUERTE - ENSENADA",
                        "codigoInterseccion": 3619,
                        "descripcionInterseccion": "HOLANDA (PASARELA) - ENSENADA",
                        "identificadorParada": "EDA2209",
                        "descripcion": "EDA2209",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021475
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3623,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "ASTILLEROS RIO SANTIAGO - ENSENADA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3624,
                "descripcion": "A.R.S. - ENSENADA",
                "codCalle": 3623,
                "createdAt": 1689953020642,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3623,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "ASTILLEROS RIO SANTIAGO - ENSENADA",
                        "codigoInterseccion": 3624,
                        "descripcionInterseccion": "A.R.S. - ENSENADA",
                        "identificadorParada": "EDA2220",
                        "descripcion": "EDA2220",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021485
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3645,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "AVENIDA 1 - LA PLATA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3701,
                "descripcion": "CALLE 58 - LA PLATA",
                "codCalle": 3645,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3645,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 1 - LA PLATA",
                        "codigoInterseccion": 3701,
                        "descripcionInterseccion": "CALLE 58 - LA PLATA",
                        "identificadorParada": "LP 1714",
                        "descripcion": "1714",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021486
                    }
                ]
            },
            {
                "codigoInterseccion": 3991,
                "descripcion": "CALLE 55 - LA PLATA",
                "codCalle": 3645,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3645,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 1 - LA PLATA",
                        "codigoInterseccion": 3991,
                        "descripcionInterseccion": "CALLE 55 - LA PLATA",
                        "identificadorParada": "LP 1722",
                        "descripcion": "1722",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021485
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3645,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 1 - LA PLATA",
                        "codigoInterseccion": 3991,
                        "descripcionInterseccion": "CALLE 55 - LA PLATA",
                        "identificadorParada": "LP1713",
                        "descripcion": "1713",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021485
                    }
                ]
            },
            {
                "codigoInterseccion": 4030,
                "descripcion": "AVENIDA 51 - LA PLATA",
                "codCalle": 3645,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3645,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 1 - LA PLATA",
                        "codigoInterseccion": 4030,
                        "descripcionInterseccion": "AVENIDA 51 - LA PLATA",
                        "identificadorParada": "LP1719",
                        "descripcion": "LP1719",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021484
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3645,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 1 - LA PLATA",
                        "codigoInterseccion": 4030,
                        "descripcionInterseccion": "AVENIDA 51 - LA PLATA",
                        "identificadorParada": "LP1728",
                        "descripcion": "1728",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021484
                    }
                ]
            },
            {
                "codigoInterseccion": 3646,
                "descripcion": "CALLE 48 - LA PLATA",
                "codCalle": 3645,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3645,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 1 - LA PLATA",
                        "codigoInterseccion": 3646,
                        "descripcionInterseccion": "CALLE 48 - LA PLATA",
                        "identificadorParada": "LP1723",
                        "descripcion": "LP1723",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021486
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3645,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 1 - LA PLATA",
                        "codigoInterseccion": 3646,
                        "descripcionInterseccion": "CALLE 48 - LA PLATA",
                        "identificadorParada": "LP1732",
                        "descripcion": "1732",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021486
                    }
                ]
            },
            {
                "codigoInterseccion": 3664,
                "descripcion": "CALLE 46 - LA PLATA",
                "codCalle": 3645,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3645,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 1 - LA PLATA",
                        "codigoInterseccion": 3664,
                        "descripcionInterseccion": "CALLE 46 - LA PLATA",
                        "identificadorParada": "LP1731",
                        "descripcion": "1731",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021485
                    }
                ]
            },
            {
                "codigoInterseccion": 4070,
                "descripcion": "CALLE 42 - LA PLATA",
                "codCalle": 3645,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3645,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 1 - LA PLATA",
                        "codigoInterseccion": 4070,
                        "descripcionInterseccion": "CALLE 42 - LA PLATA",
                        "identificadorParada": "LP1739",
                        "descripcion": "LP1739",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021485
                    }
                ]
            },
            {
                "codigoInterseccion": 4071,
                "descripcion": "CALLE 45 - LA PLATA",
                "codCalle": 3645,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3645,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 1 - LA PLATA",
                        "codigoInterseccion": 4071,
                        "descripcionInterseccion": "CALLE 45 - LA PLATA",
                        "identificadorParada": "LP1746",
                        "descripcion": "1746",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021486
                    }
                ]
            },
            {
                "codigoInterseccion": 3989,
                "descripcion": "CALLE 57 - LA PLATA",
                "codCalle": 3645,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3645,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 1 - LA PLATA",
                        "codigoInterseccion": 3989,
                        "descripcionInterseccion": "CALLE 57 - LA PLATA",
                        "identificadorParada": "LP 1709",
                        "descripcion": "1709",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021486
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3508,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "AVENIDA 122 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 4095,
                "descripcion": "CALLE 72 - BERISSO",
                "codCalle": 3508,
                "createdAt": 1689953020611,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3508,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - BERISSO",
                        "codigoInterseccion": 4095,
                        "descripcionInterseccion": "CALLE 72 - BERISSO",
                        "identificadorParada": "LP1639",
                        "descripcion": "1639",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021485
                    }
                ]
            },
            {
                "codigoInterseccion": 4097,
                "descripcion": "CALLE 70 - BERISSO",
                "codCalle": 3508,
                "createdAt": 1689953020611,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3508,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - BERISSO",
                        "codigoInterseccion": 4097,
                        "descripcionInterseccion": "CALLE 70 - BERISSO",
                        "identificadorParada": "LP1642",
                        "descripcion": "1642",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021674
                    }
                ]
            },
            {
                "codigoInterseccion": 4098,
                "descripcion": "CALLE 68 - BERISSO",
                "codCalle": 3508,
                "createdAt": 1689953020611,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3508,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - BERISSO",
                        "codigoInterseccion": 4098,
                        "descripcionInterseccion": "CALLE 68 - BERISSO",
                        "identificadorParada": "LP1644",
                        "descripcion": "1644",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021486
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3629,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "AVENIDA 122 - VILLA ELVIRA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3630,
                "descripcion": "CALLE 76 - VILLA ELVIRA",
                "codCalle": 3629,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3629,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - VILLA ELVIRA",
                        "codigoInterseccion": 3630,
                        "descripcionInterseccion": "CALLE 76 - VILLA ELVIRA",
                        "identificadorParada": "LP 1636",
                        "descripcion": "1636",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021631
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3629,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - VILLA ELVIRA",
                        "codigoInterseccion": 3630,
                        "descripcionInterseccion": "CALLE 76 - VILLA ELVIRA",
                        "identificadorParada": "LP1635",
                        "descripcion": "1635",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021631
                    }
                ]
            },
            {
                "codigoInterseccion": 4087,
                "descripcion": "CALLE 95 - VILLA ELVIRA",
                "codCalle": 3629,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3629,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - VILLA ELVIRA",
                        "codigoInterseccion": 4087,
                        "descripcionInterseccion": "CALLE 95 - VILLA ELVIRA",
                        "identificadorParada": "LP1618",
                        "descripcion": "1618",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021486
                    }
                ]
            },
            {
                "codigoInterseccion": 4088,
                "descripcion": "CALLE 94 - VILLA ELVIRA",
                "codCalle": 3629,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3629,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - VILLA ELVIRA",
                        "codigoInterseccion": 4088,
                        "descripcionInterseccion": "CALLE 94 - VILLA ELVIRA",
                        "identificadorParada": "LP1619",
                        "descripcion": "1619",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021810
                    }
                ]
            },
            {
                "codigoInterseccion": 4089,
                "descripcion": "CALLE 92 - VILLA ELVIRA",
                "codCalle": 3629,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3629,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - VILLA ELVIRA",
                        "codigoInterseccion": 4089,
                        "descripcionInterseccion": "CALLE 92 - VILLA ELVIRA",
                        "identificadorParada": "LP1620",
                        "descripcion": "1620",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021798
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3629,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - VILLA ELVIRA",
                        "codigoInterseccion": 4089,
                        "descripcionInterseccion": "CALLE 92 - VILLA ELVIRA",
                        "identificadorParada": "LP1621",
                        "descripcion": "1621",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021798
                    }
                ]
            },
            {
                "codigoInterseccion": 4090,
                "descripcion": "CALLE 90 - VILLA ELVIRA",
                "codCalle": 3629,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3629,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - VILLA ELVIRA",
                        "codigoInterseccion": 4090,
                        "descripcionInterseccion": "CALLE 90 - VILLA ELVIRA",
                        "identificadorParada": "LP1622",
                        "descripcion": "1622",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021844
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3629,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - VILLA ELVIRA",
                        "codigoInterseccion": 4090,
                        "descripcionInterseccion": "CALLE 90 - VILLA ELVIRA",
                        "identificadorParada": "LP1623",
                        "descripcion": "1623",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021844
                    }
                ]
            },
            {
                "codigoInterseccion": 4091,
                "descripcion": "CALLE 87 - VILLA ELVIRA",
                "codCalle": 3629,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3629,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - VILLA ELVIRA",
                        "codigoInterseccion": 4091,
                        "descripcionInterseccion": "CALLE 87 - VILLA ELVIRA",
                        "identificadorParada": "LP1624",
                        "descripcion": "1624",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021797
                    }
                ]
            },
            {
                "codigoInterseccion": 4051,
                "descripcion": "CALLE 85 - VILLA ELVIRA",
                "codCalle": 3629,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3629,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - VILLA ELVIRA",
                        "codigoInterseccion": 4051,
                        "descripcionInterseccion": "CALLE 85 - VILLA ELVIRA",
                        "identificadorParada": "LP1626",
                        "descripcion": "1626",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021836
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3629,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - VILLA ELVIRA",
                        "codigoInterseccion": 4051,
                        "descripcionInterseccion": "CALLE 85 - VILLA ELVIRA",
                        "identificadorParada": "LP1627",
                        "descripcion": "1627",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021836
                    }
                ]
            },
            {
                "codigoInterseccion": 4092,
                "descripcion": "CALLE 81 - VILLA ELVIRA",
                "codCalle": 3629,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3629,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - VILLA ELVIRA",
                        "codigoInterseccion": 4092,
                        "descripcionInterseccion": "CALLE 81 - VILLA ELVIRA",
                        "identificadorParada": "LP1629",
                        "descripcion": "1629",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021869
                    }
                ]
            },
            {
                "codigoInterseccion": 4093,
                "descripcion": "CALLE 82 - VILLA ELVIRA",
                "codCalle": 3629,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3629,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - VILLA ELVIRA",
                        "codigoInterseccion": 4093,
                        "descripcionInterseccion": "CALLE 82 - VILLA ELVIRA",
                        "identificadorParada": "LP1630",
                        "descripcion": "1630",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021810
                    }
                ]
            },
            {
                "codigoInterseccion": 4055,
                "descripcion": "CALLE 80 - VILLA ELVIRA",
                "codCalle": 3629,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3629,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - VILLA ELVIRA",
                        "codigoInterseccion": 4055,
                        "descripcionInterseccion": "CALLE 80 - VILLA ELVIRA",
                        "identificadorParada": "LP1631",
                        "descripcion": "1631",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021813
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3629,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - VILLA ELVIRA",
                        "codigoInterseccion": 4055,
                        "descripcionInterseccion": "CALLE 80 - VILLA ELVIRA",
                        "identificadorParada": "LP1632",
                        "descripcion": "1632",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021813
                    }
                ]
            },
            {
                "codigoInterseccion": 4066,
                "descripcion": "CALLE 78 - VILLA ELVIRA",
                "codCalle": 3629,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3629,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - VILLA ELVIRA",
                        "codigoInterseccion": 4066,
                        "descripcionInterseccion": "CALLE 78 - VILLA ELVIRA",
                        "identificadorParada": "LP1633",
                        "descripcion": "1633",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021809
                    }
                ]
            },
            {
                "codigoInterseccion": 4094,
                "descripcion": "CALLE 77 - VILLA ELVIRA",
                "codCalle": 3629,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3629,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - VILLA ELVIRA",
                        "codigoInterseccion": 4094,
                        "descripcionInterseccion": "CALLE 77 - VILLA ELVIRA",
                        "identificadorParada": "LP1634",
                        "descripcion": "1634",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021816
                    }
                ]
            },
            {
                "codigoInterseccion": 4077,
                "descripcion": "CALLE 74 - VILLA ELVIRA",
                "codCalle": 3629,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3629,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - VILLA ELVIRA",
                        "codigoInterseccion": 4077,
                        "descripcionInterseccion": "CALLE 74 - VILLA ELVIRA",
                        "identificadorParada": "LP1637",
                        "descripcion": "1637",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021856
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3629,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - VILLA ELVIRA",
                        "codigoInterseccion": 4077,
                        "descripcionInterseccion": "CALLE 74 - VILLA ELVIRA",
                        "identificadorParada": "LP1638",
                        "descripcion": "1638",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021856
                    }
                ]
            },
            {
                "codigoInterseccion": 4096,
                "descripcion": "CALLE 72 - VILLA ELVIRA",
                "codCalle": 3629,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3629,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - VILLA ELVIRA",
                        "codigoInterseccion": 4096,
                        "descripcionInterseccion": "CALLE 72 - VILLA ELVIRA",
                        "identificadorParada": "LP1640",
                        "descripcion": "1640",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021816
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3783,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "AVENIDA 122 - LA PLATA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3784,
                "descripcion": "CALLE 5 - LA PLATA",
                "codCalle": 3783,
                "createdAt": 1689953020645,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3783,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - LA PLATA",
                        "codigoInterseccion": 3784,
                        "descripcionInterseccion": "CALLE 5 - LA PLATA",
                        "identificadorParada": "LP10360",
                        "descripcion": "10360",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021856
                    }
                ]
            },
            {
                "codigoInterseccion": 3785,
                "descripcion": "CALLE 62 - LA PLATA",
                "codCalle": 3783,
                "createdAt": 1689953020645,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3783,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - LA PLATA",
                        "codigoInterseccion": 3785,
                        "descripcionInterseccion": "CALLE 62 - LA PLATA",
                        "identificadorParada": "LP10361",
                        "descripcion": "10361",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021754
                    }
                ]
            },
            {
                "codigoInterseccion": 3628,
                "descripcion": "CALLE 64 - LA PLATA",
                "codCalle": 3783,
                "createdAt": 1689953020645,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3783,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - LA PLATA",
                        "codigoInterseccion": 3628,
                        "descripcionInterseccion": "CALLE 64 - LA PLATA",
                        "identificadorParada": "LP10362",
                        "descripcion": "10362",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021708
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3783,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - LA PLATA",
                        "codigoInterseccion": 3628,
                        "descripcionInterseccion": "CALLE 64 - LA PLATA",
                        "identificadorParada": "LP10363",
                        "descripcion": "10363",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021708
                    }
                ]
            },
            {
                "codigoInterseccion": 4015,
                "descripcion": "AVENIDA 52 - LA PLATA",
                "codCalle": 3783,
                "createdAt": 1689953020645,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3783,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - LA PLATA",
                        "codigoInterseccion": 4015,
                        "descripcionInterseccion": "AVENIDA 52 - LA PLATA",
                        "identificadorParada": "LP11601",
                        "descripcion": "FACULTAD HUMANIDADES",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021798
                    }
                ]
            },
            {
                "codigoInterseccion": 3759,
                "descripcion": "AVENIDA 66 - LA PLATA",
                "codCalle": 3783,
                "createdAt": 1689953020645,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3783,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - LA PLATA",
                        "codigoInterseccion": 3759,
                        "descripcionInterseccion": "AVENIDA 66 - LA PLATA",
                        "identificadorParada": "LP11801",
                        "descripcion": "11801",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021817
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3783,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - LA PLATA",
                        "codigoInterseccion": 3759,
                        "descripcionInterseccion": "AVENIDA 66 - LA PLATA",
                        "identificadorParada": "LP1646",
                        "descripcion": "1646",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021817
                    }
                ]
            },
            {
                "codigoInterseccion": 3751,
                "descripcion": "AVENIDA 60 - LA PLATA",
                "codCalle": 3783,
                "createdAt": 1689953020645,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3783,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - LA PLATA",
                        "codigoInterseccion": 3751,
                        "descripcionInterseccion": "AVENIDA 60 - LA PLATA",
                        "identificadorParada": "LP11850",
                        "descripcion": "11850",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021858
                    }
                ]
            },
            {
                "codigoInterseccion": 3678,
                "descripcion": "CALLE 70 - LA PLATA",
                "codCalle": 3783,
                "createdAt": 1689953020645,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3783,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - LA PLATA",
                        "codigoInterseccion": 3678,
                        "descripcionInterseccion": "CALLE 70 - LA PLATA",
                        "identificadorParada": "LP1641",
                        "descripcion": "1641",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021813
                    }
                ]
            },
            {
                "codigoInterseccion": 3676,
                "descripcion": "CALLE 68 - LA PLATA",
                "codCalle": 3783,
                "createdAt": 1689953020645,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3783,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 122 - LA PLATA",
                        "codigoInterseccion": 3676,
                        "descripcionInterseccion": "CALLE 68 - LA PLATA",
                        "identificadorParada": "LP1643",
                        "descripcion": "1643",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021803
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3492,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "AVENIDA 60 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3493,
                "descripcion": "CALLE 123 - BERISSO",
                "codCalle": 3492,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3492,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 60 - BERISSO",
                        "codigoInterseccion": 3493,
                        "descripcionInterseccion": "CALLE 123 - BERISSO",
                        "identificadorParada": "BE5101",
                        "descripcion": "5101",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021811
                    }
                ]
            },
            {
                "codigoInterseccion": 3494,
                "descripcion": "CALLE 124 - BERISSO",
                "codCalle": 3492,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3492,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 60 - BERISSO",
                        "codigoInterseccion": 3494,
                        "descripcionInterseccion": "CALLE 124 - BERISSO",
                        "identificadorParada": "BE5103",
                        "descripcion": "5103",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021679
                    }
                ]
            },
            {
                "codigoInterseccion": 3495,
                "descripcion": "CALLE 127 - BERISSO",
                "codCalle": 3492,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3492,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 60 - BERISSO",
                        "codigoInterseccion": 3495,
                        "descripcionInterseccion": "CALLE 127 - BERISSO",
                        "identificadorParada": "BE5107",
                        "descripcion": "5107",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021852
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3492,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 60 - BERISSO",
                        "codigoInterseccion": 3495,
                        "descripcionInterseccion": "CALLE 127 - BERISSO",
                        "identificadorParada": "BE5132",
                        "descripcion": "5132",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021852
                    }
                ]
            },
            {
                "codigoInterseccion": 3496,
                "descripcion": "CALLE 128 - BERISSO",
                "codCalle": 3492,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3492,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 60 - BERISSO",
                        "codigoInterseccion": 3496,
                        "descripcionInterseccion": "CALLE 128 - BERISSO",
                        "identificadorParada": "BE5109",
                        "descripcion": "5109",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021679
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3492,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 60 - BERISSO",
                        "codigoInterseccion": 3496,
                        "descripcionInterseccion": "CALLE 128 - BERISSO",
                        "identificadorParada": "BE5130",
                        "descripcion": "5130",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021679
                    }
                ]
            },
            {
                "codigoInterseccion": 3506,
                "descripcion": "CALLE 125 - BERISSO",
                "codCalle": 3492,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3492,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 60 - BERISSO",
                        "codigoInterseccion": 3506,
                        "descripcionInterseccion": "CALLE 125 - BERISSO",
                        "identificadorParada": "BE5134",
                        "descripcion": "5134",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    }
                ]
            },
            {
                "codigoInterseccion": 3508,
                "descripcion": "AVENIDA 122 - BERISSO",
                "codCalle": 3492,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3492,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 60 - BERISSO",
                        "codigoInterseccion": 3508,
                        "descripcionInterseccion": "AVENIDA 122 - BERISSO",
                        "identificadorParada": "BE5136",
                        "descripcion": "5136",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021860
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3751,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "AVENIDA 60 - LA PLATA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 4023,
                "descripcion": "CALLE 120 - LA PLATA",
                "codCalle": 3751,
                "createdAt": 1689953020636,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3751,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 60 - LA PLATA",
                        "codigoInterseccion": 4023,
                        "descripcionInterseccion": "CALLE 120 - LA PLATA",
                        "identificadorParada": "LP118013",
                        "descripcion": "118013",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021680
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3751,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 60 - LA PLATA",
                        "codigoInterseccion": 4023,
                        "descripcionInterseccion": "CALLE 120 - LA PLATA",
                        "identificadorParada": "LP11824",
                        "descripcion": "11824",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021680
                    }
                ]
            },
            {
                "codigoInterseccion": 3768,
                "descripcion": "CALLE 118 - LA PLATA",
                "codCalle": 3751,
                "createdAt": 1689953020636,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3751,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 60 - LA PLATA",
                        "codigoInterseccion": 3768,
                        "descripcionInterseccion": "CALLE 118 - LA PLATA",
                        "identificadorParada": "LP118014",
                        "descripcion": "118014",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021679
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3751,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 60 - LA PLATA",
                        "codigoInterseccion": 3768,
                        "descripcionInterseccion": "CALLE 118 - LA PLATA",
                        "identificadorParada": "LP11822",
                        "descripcion": "11822",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021679
                    }
                ]
            },
            {
                "codigoInterseccion": 3778,
                "descripcion": "CALLE 116 - LA PLATA",
                "codCalle": 3751,
                "createdAt": 1689953020636,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3751,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 60 - LA PLATA",
                        "codigoInterseccion": 3778,
                        "descripcionInterseccion": "CALLE 116 - LA PLATA",
                        "identificadorParada": "LP11815",
                        "descripcion": "11815",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021726
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3751,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 60 - LA PLATA",
                        "codigoInterseccion": 3778,
                        "descripcionInterseccion": "CALLE 116 - LA PLATA",
                        "identificadorParada": "LP11818",
                        "descripcion": "11818",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021726
                    }
                ]
            },
            {
                "codigoInterseccion": 3626,
                "descripcion": "CALLE 2 - LA PLATA",
                "codCalle": 3751,
                "createdAt": 1689953020636,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3751,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 60 - LA PLATA",
                        "codigoInterseccion": 3626,
                        "descripcionInterseccion": "CALLE 2 - LA PLATA",
                        "identificadorParada": "LP1800",
                        "descripcion": "1800",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021857
                    }
                ]
            },
            {
                "codigoInterseccion": 3733,
                "descripcion": "CALLE 4 - LA PLATA",
                "codCalle": 3751,
                "createdAt": 1689953020636,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3751,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 60 - LA PLATA",
                        "codigoInterseccion": 3733,
                        "descripcionInterseccion": "CALLE 4 - LA PLATA",
                        "identificadorParada": "LP1802",
                        "descripcion": "1802",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021813
                    }
                ]
            },
            {
                "codigoInterseccion": 3735,
                "descripcion": "CALLE 6 - LA PLATA",
                "codCalle": 3751,
                "createdAt": 1689953020636,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3751,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 60 - LA PLATA",
                        "codigoInterseccion": 3735,
                        "descripcionInterseccion": "CALLE 6 - LA PLATA",
                        "identificadorParada": "LP1804",
                        "descripcion": "LP1804",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021797
                    }
                ]
            },
            {
                "codigoInterseccion": 4032,
                "descripcion": "CALLE 3 - LA PLATA",
                "codCalle": 3751,
                "createdAt": 1689953020636,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3751,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 60 - LA PLATA",
                        "codigoInterseccion": 4032,
                        "descripcionInterseccion": "CALLE 3 - LA PLATA",
                        "identificadorParada": "LP1805",
                        "descripcion": "1805",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    }
                ]
            },
            {
                "codigoInterseccion": 3784,
                "descripcion": "CALLE 5 - LA PLATA",
                "codCalle": 3751,
                "createdAt": 1689953020636,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3751,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 60 - LA PLATA",
                        "codigoInterseccion": 3784,
                        "descripcionInterseccion": "CALLE 5 - LA PLATA",
                        "identificadorParada": "LP1809",
                        "descripcion": "1809",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021866
                    }
                ]
            },
            {
                "codigoInterseccion": 3645,
                "descripcion": "AVENIDA 1 - LA PLATA",
                "codCalle": 3751,
                "createdAt": 1689953020636,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3751,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 60 - LA PLATA",
                        "codigoInterseccion": 3645,
                        "descripcionInterseccion": "AVENIDA 1 - LA PLATA",
                        "identificadorParada": "LP1801",
                        "descripcion": "1801",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021811
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3751,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 60 - LA PLATA",
                        "codigoInterseccion": 3645,
                        "descripcionInterseccion": "AVENIDA 1 - LA PLATA",
                        "identificadorParada": "LP2851",
                        "descripcion": "2851",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021811
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3759,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "AVENIDA 66 - LA PLATA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3627,
                "descripcion": "CALLE 14 - LA PLATA",
                "codCalle": 3759,
                "createdAt": 1689953020565,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3759,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 66 - LA PLATA",
                        "codigoInterseccion": 3627,
                        "descripcionInterseccion": "CALLE 14 - LA PLATA",
                        "identificadorParada": "LP1671",
                        "descripcion": "LP1671",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021867
                    }
                ]
            },
            {
                "codigoInterseccion": 3738,
                "descripcion": "CALLE 16 - LA PLATA",
                "codCalle": 3759,
                "createdAt": 1689953020565,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3759,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 66 - LA PLATA",
                        "codigoInterseccion": 3738,
                        "descripcionInterseccion": "CALLE 16 - LA PLATA",
                        "identificadorParada": "LP1673",
                        "descripcion": "LP1673",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021848
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3759,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 66 - LA PLATA",
                        "codigoInterseccion": 3738,
                        "descripcionInterseccion": "CALLE 16 - LA PLATA",
                        "identificadorParada": "LP1674",
                        "descripcion": "LP1674",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021848
                    }
                ]
            },
            {
                "codigoInterseccion": 3740,
                "descripcion": "CALLE 18 - LA PLATA",
                "codCalle": 3759,
                "createdAt": 1689953020565,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3759,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 66 - LA PLATA",
                        "codigoInterseccion": 3740,
                        "descripcionInterseccion": "CALLE 18 - LA PLATA",
                        "identificadorParada": "LP1677",
                        "descripcion": "LP1677",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021848
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3759,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 66 - LA PLATA",
                        "codigoInterseccion": 3740,
                        "descripcionInterseccion": "CALLE 18 - LA PLATA",
                        "identificadorParada": "LP1678",
                        "descripcion": "LP1678",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021848
                    }
                ]
            },
            {
                "codigoInterseccion": 3744,
                "descripcion": "CALLE 20 - LA PLATA",
                "codCalle": 3759,
                "createdAt": 1689953020565,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3759,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 66 - LA PLATA",
                        "codigoInterseccion": 3744,
                        "descripcionInterseccion": "CALLE 20 - LA PLATA",
                        "identificadorParada": "LP1683",
                        "descripcion": "LP1683",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021852
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3759,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 66 - LA PLATA",
                        "codigoInterseccion": 3744,
                        "descripcionInterseccion": "CALLE 20 - LA PLATA",
                        "identificadorParada": "LP1684",
                        "descripcion": "LP1684",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021852
                    }
                ]
            },
            {
                "codigoInterseccion": 3745,
                "descripcion": "CALLE 22 - LA PLATA",
                "codCalle": 3759,
                "createdAt": 1689953020565,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3759,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 66 - LA PLATA",
                        "codigoInterseccion": 3745,
                        "descripcionInterseccion": "CALLE 22 - LA PLATA",
                        "identificadorParada": "LP1685",
                        "descripcion": "LP1685",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3759,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 66 - LA PLATA",
                        "codigoInterseccion": 3745,
                        "descripcionInterseccion": "CALLE 22 - LA PLATA",
                        "identificadorParada": "LP1688",
                        "descripcion": "LP1688",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    }
                ]
            },
            {
                "codigoInterseccion": 3761,
                "descripcion": "CALLE 21 - LA PLATA",
                "codCalle": 3759,
                "createdAt": 1689953020565,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3759,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 66 - LA PLATA",
                        "codigoInterseccion": 3761,
                        "descripcionInterseccion": "CALLE 21 - LA PLATA",
                        "identificadorParada": "LP1686",
                        "descripcion": "1686",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021875
                    }
                ]
            },
            {
                "codigoInterseccion": 3746,
                "descripcion": "CALLE 24 - LA PLATA",
                "codCalle": 3759,
                "createdAt": 1689953020565,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3759,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 66 - LA PLATA",
                        "codigoInterseccion": 3746,
                        "descripcionInterseccion": "CALLE 24 - LA PLATA",
                        "identificadorParada": "LP1690",
                        "descripcion": "LP1690",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021860
                    }
                ]
            },
            {
                "codigoInterseccion": 3736,
                "descripcion": "CALLE 8 - LA PLATA",
                "codCalle": 3759,
                "createdAt": 1689953020565,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3759,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 66 - LA PLATA",
                        "codigoInterseccion": 3736,
                        "descripcionInterseccion": "CALLE 8 - LA PLATA",
                        "identificadorParada": "LP3392",
                        "descripcion": "LP3392",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3759,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 66 - LA PLATA",
                        "codigoInterseccion": 3736,
                        "descripcionInterseccion": "CALLE 8 - LA PLATA",
                        "identificadorParada": "LP3393",
                        "descripcion": "LP3393",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    }
                ]
            },
            {
                "codigoInterseccion": 4331,
                "descripcion": "CALE 10 - LA PLATA",
                "codCalle": 3759,
                "createdAt": 1689953020565,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3759,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 66 - LA PLATA",
                        "codigoInterseccion": 4331,
                        "descripcionInterseccion": "CALE 10 - LA PLATA",
                        "identificadorParada": "LP3394",
                        "descripcion": "LP3394",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021886
                    }
                ]
            },
            {
                "codigoInterseccion": 3731,
                "descripcion": "CALLE 10 - LA PLATA",
                "codCalle": 3759,
                "createdAt": 1689953020565,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3759,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 66 - LA PLATA",
                        "codigoInterseccion": 3731,
                        "descripcionInterseccion": "CALLE 10 - LA PLATA",
                        "identificadorParada": "LP3395",
                        "descripcion": "LP3395",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    }
                ]
            },
            {
                "codigoInterseccion": 4253,
                "descripcion": "CALLE 12. - LA PLATA",
                "codCalle": 3759,
                "createdAt": 1689953020565,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3759,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 66 - LA PLATA",
                        "codigoInterseccion": 4253,
                        "descripcionInterseccion": "CALLE 12. - LA PLATA",
                        "identificadorParada": "LP3397",
                        "descripcion": "LP3397",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3663,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "AVENIDA 7 - LA PLATA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 4065,
                "descripcion": "CALLE 63 - LA PLATA",
                "codCalle": 3663,
                "createdAt": 1689953020635,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3663,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 7 - LA PLATA",
                        "codigoInterseccion": 4065,
                        "descripcionInterseccion": "CALLE 63 - LA PLATA",
                        "identificadorParada": "LP1669",
                        "descripcion": "1669",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    }
                ]
            },
            {
                "codigoInterseccion": 4016,
                "descripcion": "CALLE 65 - LA PLATA",
                "codCalle": 3663,
                "createdAt": 1689953020635,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3663,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 7 - LA PLATA",
                        "codigoInterseccion": 4016,
                        "descripcionInterseccion": "CALLE 65 - LA PLATA",
                        "identificadorParada": "LP2008",
                        "descripcion": "2008",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3663,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 7 - LA PLATA",
                        "codigoInterseccion": 4016,
                        "descripcionInterseccion": "CALLE 65 - LA PLATA",
                        "identificadorParada": "LP2009",
                        "descripcion": "2009",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    }
                ]
            },
            {
                "codigoInterseccion": 4064,
                "descripcion": "CALLE 61 - LA PLATA",
                "codCalle": 3663,
                "createdAt": 1689953020635,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3663,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 7 - LA PLATA",
                        "codigoInterseccion": 4064,
                        "descripcionInterseccion": "CALLE 61 - LA PLATA",
                        "identificadorParada": "LP2012",
                        "descripcion": "2012",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021886
                    }
                ]
            },
            {
                "codigoInterseccion": 3785,
                "descripcion": "CALLE 62 - LA PLATA",
                "codCalle": 3663,
                "createdAt": 1689953020635,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3663,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 7 - LA PLATA",
                        "codigoInterseccion": 3785,
                        "descripcionInterseccion": "CALLE 62 - LA PLATA",
                        "identificadorParada": "LP2013",
                        "descripcion": "2013",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    }
                ]
            },
            {
                "codigoInterseccion": 3989,
                "descripcion": "CALLE 57 - LA PLATA",
                "codCalle": 3663,
                "createdAt": 1689953020635,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3663,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 7 - LA PLATA",
                        "codigoInterseccion": 3989,
                        "descripcionInterseccion": "CALLE 57 - LA PLATA",
                        "identificadorParada": "LP2022",
                        "descripcion": "2022",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021860
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3663,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 7 - LA PLATA",
                        "codigoInterseccion": 3989,
                        "descripcionInterseccion": "CALLE 57 - LA PLATA",
                        "identificadorParada": "LP2030",
                        "descripcion": "2030",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021860
                    }
                ]
            },
            {
                "codigoInterseccion": 3968,
                "descripcion": "CALLE 59 - LA PLATA",
                "codCalle": 3663,
                "createdAt": 1689953020635,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3663,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 7 - LA PLATA",
                        "codigoInterseccion": 3968,
                        "descripcionInterseccion": "CALLE 59 - LA PLATA",
                        "identificadorParada": "LP2025",
                        "descripcion": "2025",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021816
                    }
                ]
            },
            {
                "codigoInterseccion": 3665,
                "descripcion": "CALLE 56 - LA PLATA",
                "codCalle": 3663,
                "createdAt": 1689953020635,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3663,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 7 - LA PLATA",
                        "codigoInterseccion": 3665,
                        "descripcionInterseccion": "CALLE 56 - LA PLATA",
                        "identificadorParada": "LP2035",
                        "descripcion": "2035",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021964
                    }
                ]
            },
            {
                "codigoInterseccion": 4030,
                "descripcion": "AVENIDA 51 - LA PLATA",
                "codCalle": 3663,
                "createdAt": 1689953020635,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3663,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 7 - LA PLATA",
                        "codigoInterseccion": 4030,
                        "descripcionInterseccion": "AVENIDA 51 - LA PLATA",
                        "identificadorParada": "LP2044",
                        "descripcion": "LP2044",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021817
                    }
                ]
            },
            {
                "codigoInterseccion": 3991,
                "descripcion": "CALLE 55 - LA PLATA",
                "codCalle": 3663,
                "createdAt": 1689953020635,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3663,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 7 - LA PLATA",
                        "codigoInterseccion": 3991,
                        "descripcionInterseccion": "CALLE 55 - LA PLATA",
                        "identificadorParada": "LP2045",
                        "descripcion": "LP2045",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021932
                    }
                ]
            },
            {
                "codigoInterseccion": 4071,
                "descripcion": "CALLE 45 - LA PLATA",
                "codCalle": 3663,
                "createdAt": 1689953020635,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3663,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 7 - LA PLATA",
                        "codigoInterseccion": 4071,
                        "descripcionInterseccion": "CALLE 45 - LA PLATA",
                        "identificadorParada": "LP2050",
                        "descripcion": "2050",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021868
                    }
                ]
            },
            {
                "codigoInterseccion": 3992,
                "descripcion": "AVENIDA 53 - LA PLATA",
                "codCalle": 3663,
                "createdAt": 1689953020635,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3663,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 7 - LA PLATA",
                        "codigoInterseccion": 3992,
                        "descripcionInterseccion": "AVENIDA 53 - LA PLATA",
                        "identificadorParada": "LP2051",
                        "descripcion": "2051",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    }
                ]
            },
            {
                "codigoInterseccion": 3732,
                "descripcion": "CALLE 49 - LA PLATA",
                "codCalle": 3663,
                "createdAt": 1689953020635,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3663,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 7 - LA PLATA",
                        "codigoInterseccion": 3732,
                        "descripcionInterseccion": "CALLE 49 - LA PLATA",
                        "identificadorParada": "LP2060",
                        "descripcion": "LP2060",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021810
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3663,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 7 - LA PLATA",
                        "codigoInterseccion": 3732,
                        "descripcionInterseccion": "CALLE 49 - LA PLATA",
                        "identificadorParada": "LP2065",
                        "descripcion": "2065",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021810
                    }
                ]
            },
            {
                "codigoInterseccion": 4072,
                "descripcion": "CALLE 47 - LA PLATA",
                "codCalle": 3663,
                "createdAt": 1689953020635,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3663,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 7 - LA PLATA",
                        "codigoInterseccion": 4072,
                        "descripcionInterseccion": "CALLE 47 - LA PLATA",
                        "identificadorParada": "LP2068",
                        "descripcion": "2068",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021886
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3663,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA 7 - LA PLATA",
                        "codigoInterseccion": 4072,
                        "descripcionInterseccion": "CALLE 47 - LA PLATA",
                        "identificadorParada": "LP2075",
                        "descripcion": "LP2075",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021886
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3563,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3562,
                "descripcion": "CAMINO A CLUB REGATAS - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3562,
                        "descripcionInterseccion": "CAMINO A CLUB REGATAS - ENSENADA",
                        "identificadorParada": "EDA2078",
                        "descripcion": "EDA2078",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    }
                ]
            },
            {
                "codigoInterseccion": 3564,
                "descripcion": "ACCESO FUERTE BARRAGÁN - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3564,
                        "descripcionInterseccion": "ACCESO FUERTE BARRAGÁN - ENSENADA",
                        "identificadorParada": "EDA2082",
                        "descripcion": "EDA2082",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021964
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3564,
                        "descripcionInterseccion": "ACCESO FUERTE BARRAGÁN - ENSENADA",
                        "identificadorParada": "EDA2179",
                        "descripcion": "EDA2179",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021964
                    }
                ]
            },
            {
                "codigoInterseccion": 3565,
                "descripcion": "CALLE 74 - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3565,
                        "descripcionInterseccion": "CALLE 74 - ENSENADA",
                        "identificadorParada": "EDA2083",
                        "descripcion": "EDA2083",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3565,
                        "descripcionInterseccion": "CALLE 74 - ENSENADA",
                        "identificadorParada": "EDA2178",
                        "descripcion": "EDA2178",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    }
                ]
            },
            {
                "codigoInterseccion": 3566,
                "descripcion": "ABSA - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3566,
                        "descripcionInterseccion": "ABSA - ENSENADA",
                        "identificadorParada": "EDA2084",
                        "descripcion": "EDA2084",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021965
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3566,
                        "descripcionInterseccion": "ABSA - ENSENADA",
                        "identificadorParada": "EDA2177",
                        "descripcion": "EDA2177",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021965
                    }
                ]
            },
            {
                "codigoInterseccion": 3567,
                "descripcion": "PROPULSORA - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3567,
                        "descripcionInterseccion": "PROPULSORA - ENSENADA",
                        "identificadorParada": "EDA2088",
                        "descripcion": "EDA2088",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021963
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3567,
                        "descripcionInterseccion": "PROPULSORA - ENSENADA",
                        "identificadorParada": "EDA2176",
                        "descripcion": "EDA2176",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021963
                    }
                ]
            },
            {
                "codigoInterseccion": 3568,
                "descripcion": "ESC. PROPULSORA - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3568,
                        "descripcionInterseccion": "ESC. PROPULSORA - ENSENADA",
                        "identificadorParada": "EDA2089",
                        "descripcion": "EDA2089",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3568,
                        "descripcionInterseccion": "ESC. PROPULSORA - ENSENADA",
                        "identificadorParada": "EDA2174",
                        "descripcion": "EDA2174",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    }
                ]
            },
            {
                "codigoInterseccion": 3569,
                "descripcion": "CALLE 4 - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3569,
                        "descripcionInterseccion": "CALLE 4 - ENSENADA",
                        "identificadorParada": "EDA2090",
                        "descripcion": "EDA2090",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021964
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3569,
                        "descripcionInterseccion": "CALLE 4 - ENSENADA",
                        "identificadorParada": "EDA2173",
                        "descripcion": "EDA2173",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021964
                    }
                ]
            },
            {
                "codigoInterseccion": 3570,
                "descripcion": "CALLE 8 - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3570,
                        "descripcionInterseccion": "CALLE 8 - ENSENADA",
                        "identificadorParada": "EDA2094",
                        "descripcion": "EDA2094",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    }
                ]
            },
            {
                "codigoInterseccion": 3571,
                "descripcion": "DVBA-VIALIDAD - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3571,
                        "descripcionInterseccion": "DVBA-VIALIDAD - ENSENADA",
                        "identificadorParada": "EDA2096",
                        "descripcion": "EDA2096",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021912
                    }
                ]
            },
            {
                "codigoInterseccion": 3572,
                "descripcion": "CALLE 14 - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3572,
                        "descripcionInterseccion": "CALLE 14 - ENSENADA",
                        "identificadorParada": "EDA2098",
                        "descripcion": "EDA2098",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021916
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3572,
                        "descripcionInterseccion": "CALLE 14 - ENSENADA",
                        "identificadorParada": "EDA2170",
                        "descripcion": "EDA2170",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021916
                    }
                ]
            },
            {
                "codigoInterseccion": 3573,
                "descripcion": "CALLE 16 - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3573,
                        "descripcionInterseccion": "CALLE 16 - ENSENADA",
                        "identificadorParada": "EDA2100",
                        "descripcion": "EDA2100",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021965
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3573,
                        "descripcionInterseccion": "CALLE 16 - ENSENADA",
                        "identificadorParada": "EDA2169",
                        "descripcion": "EDA2169",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021965
                    }
                ]
            },
            {
                "codigoInterseccion": 3574,
                "descripcion": "CALLE 18 - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3574,
                        "descripcionInterseccion": "CALLE 18 - ENSENADA",
                        "identificadorParada": "EDA2102",
                        "descripcion": "EDA2102",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021965
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3574,
                        "descripcionInterseccion": "CALLE 18 - ENSENADA",
                        "identificadorParada": "EDA2168",
                        "descripcion": "EDA2168",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021965
                    }
                ]
            },
            {
                "codigoInterseccion": 3575,
                "descripcion": "CALLE 22 CLUB DE PESCA - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3575,
                        "descripcionInterseccion": "CALLE 22 CLUB DE PESCA - ENSENADA",
                        "identificadorParada": "EDA2106",
                        "descripcion": "EDA2104",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021910
                    }
                ]
            },
            {
                "codigoInterseccion": 3576,
                "descripcion": "CLUB DE PESCA CALLE 22 - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3576,
                        "descripcionInterseccion": "CLUB DE PESCA CALLE 22 - ENSENADA",
                        "identificadorParada": "EDA2108",
                        "descripcion": "EDA2108",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021959
                    }
                ]
            },
            {
                "codigoInterseccion": 3577,
                "descripcion": "CALLE 5 - CAMPING UOCRA - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3577,
                        "descripcionInterseccion": "CALLE 5 - CAMPING UOCRA - ENSENADA",
                        "identificadorParada": "EDA2110",
                        "descripcion": "EDA2110",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    }
                ]
            },
            {
                "codigoInterseccion": 3578,
                "descripcion": "CALLE 42 - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3578,
                        "descripcionInterseccion": "CALLE 42 - ENSENADA",
                        "identificadorParada": "EDA2116",
                        "descripcion": "EDA2116",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3578,
                        "descripcionInterseccion": "CALLE 42 - ENSENADA",
                        "identificadorParada": "EDA2158",
                        "descripcion": "EDA2158",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3578,
                        "descripcionInterseccion": "CALLE 42 - ENSENADA",
                        "identificadorParada": "EDA2159",
                        "descripcion": "EDA2159",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    }
                ]
            },
            {
                "codigoInterseccion": 3579,
                "descripcion": "CALLE 44 - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3579,
                        "descripcionInterseccion": "CALLE 44 - ENSENADA",
                        "identificadorParada": "EDA2117",
                        "descripcion": "EDA2117",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    }
                ]
            },
            {
                "codigoInterseccion": 3580,
                "descripcion": "CALLE 46 BIS - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3580,
                        "descripcionInterseccion": "CALLE 46 BIS - ENSENADA",
                        "identificadorParada": "EDA2118",
                        "descripcion": "EDA2118",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021907
                    }
                ]
            },
            {
                "codigoInterseccion": 3581,
                "descripcion": "CALLE 52 - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3581,
                        "descripcionInterseccion": "CALLE 52 - ENSENADA",
                        "identificadorParada": "EDA2119",
                        "descripcion": "EDA2119",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021917
                    }
                ]
            },
            {
                "codigoInterseccion": 3582,
                "descripcion": "CALLE 56 - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3582,
                        "descripcionInterseccion": "CALLE 56 - ENSENADA",
                        "identificadorParada": "EDA2122",
                        "descripcion": "EDA2122",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3582,
                        "descripcionInterseccion": "CALLE 56 - ENSENADA",
                        "identificadorParada": "EDA2155",
                        "descripcion": "EDA2155",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    }
                ]
            },
            {
                "codigoInterseccion": 3583,
                "descripcion": "CALLE 58 - COMPLEJO E. PERON - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3583,
                        "descripcionInterseccion": "CALLE 58 - COMPLEJO E. PERON - ENSENADA",
                        "identificadorParada": "EDA2124",
                        "descripcion": "EDA2124",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021932
                    }
                ]
            },
            {
                "codigoInterseccion": 3584,
                "descripcion": "ROTONDA -MIRADOR N.KIRCHNER - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3584,
                        "descripcionInterseccion": "ROTONDA -MIRADOR N.KIRCHNER - ENSENADA",
                        "identificadorParada": "EDA2126",
                        "descripcion": "EDA2126",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021875
                    }
                ]
            },
            {
                "codigoInterseccion": 3585,
                "descripcion": "CALLE 72 - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3585,
                        "descripcionInterseccion": "CALLE 72 - ENSENADA",
                        "identificadorParada": "EDA2128",
                        "descripcion": "EDA2128",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021918
                    }
                ]
            },
            {
                "codigoInterseccion": 3586,
                "descripcion": "CALLE 78 - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3586,
                        "descripcionInterseccion": "CALLE 78 - ENSENADA",
                        "identificadorParada": "EDA2130",
                        "descripcion": "EDA2130",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3586,
                        "descripcionInterseccion": "CALLE 78 - ENSENADA",
                        "identificadorParada": "EDA2151",
                        "descripcion": "EDA2151",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021885
                    }
                ]
            },
            {
                "codigoInterseccion": 3587,
                "descripcion": "PQUIA STELLA MARIS - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3587,
                        "descripcionInterseccion": "PQUIA STELLA MARIS - ENSENADA",
                        "identificadorParada": "EDA2131",
                        "descripcion": "EDA2131",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021974
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3587,
                        "descripcionInterseccion": "PQUIA STELLA MARIS - ENSENADA",
                        "identificadorParada": "EDA2149",
                        "descripcion": "EDA2149",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021974
                    }
                ]
            },
            {
                "codigoInterseccion": 3588,
                "descripcion": "ESC. PRIMARIA - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3588,
                        "descripcionInterseccion": "ESC. PRIMARIA - ENSENADA",
                        "identificadorParada": "EDA2133",
                        "descripcion": "EDA2133",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021965
                    }
                ]
            },
            {
                "codigoInterseccion": 3589,
                "descripcion": "CALLE 88 - ESC. SECUNDARIA - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3589,
                        "descripcionInterseccion": "CALLE 88 - ESC. SECUNDARIA - ENSENADA",
                        "identificadorParada": "EDA2134",
                        "descripcion": "EDA2134",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021971
                    }
                ]
            },
            {
                "codigoInterseccion": 3590,
                "descripcion": "CALLE 94 - COMISARIA - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3590,
                        "descripcionInterseccion": "CALLE 94 - COMISARIA - ENSENADA",
                        "identificadorParada": "EDA2135",
                        "descripcion": "EDA2135",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021972
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3590,
                        "descripcionInterseccion": "CALLE 94 - COMISARIA - ENSENADA",
                        "identificadorParada": "EDA2145",
                        "descripcion": "EDA2145",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021972
                    }
                ]
            },
            {
                "codigoInterseccion": 3591,
                "descripcion": "CALLE 96 - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3591,
                        "descripcionInterseccion": "CALLE 96 - ENSENADA",
                        "identificadorParada": "EDA2136",
                        "descripcion": "EDA2136",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021973
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3591,
                        "descripcionInterseccion": "CALLE 96 - ENSENADA",
                        "identificadorParada": "EDA2144",
                        "descripcion": "EDA2144",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021973
                    }
                ]
            },
            {
                "codigoInterseccion": 3592,
                "descripcion": "CALLE 100 - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3592,
                        "descripcionInterseccion": "CALLE 100 - ENSENADA",
                        "identificadorParada": "EDA2137",
                        "descripcion": "EDA2137",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021973
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3592,
                        "descripcionInterseccion": "CALLE 100 - ENSENADA",
                        "identificadorParada": "EDA2142",
                        "descripcion": "EDA2142",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021973
                    }
                ]
            },
            {
                "codigoInterseccion": 3593,
                "descripcion": "CALLE 102 - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3593,
                        "descripcionInterseccion": "CALLE 102 - ENSENADA",
                        "identificadorParada": "EDA2138",
                        "descripcion": "EDA2138",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021999
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3593,
                        "descripcionInterseccion": "CALLE 102 - ENSENADA",
                        "identificadorParada": "EDA2141",
                        "descripcion": "EDA2141",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021999
                    }
                ]
            },
            {
                "codigoInterseccion": 3594,
                "descripcion": "LA PERGOLA CALLE 104 - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3594,
                        "descripcionInterseccion": "LA PERGOLA CALLE 104 - ENSENADA",
                        "identificadorParada": "EDA2140",
                        "descripcion": "EDA2140",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022088
                    }
                ]
            },
            {
                "codigoInterseccion": 3595,
                "descripcion": "CALLE 92 - ESCUELA SECUNDARIA - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3595,
                        "descripcionInterseccion": "CALLE 92 - ESCUELA SECUNDARIA - ENSENADA",
                        "identificadorParada": "EDA2146",
                        "descripcion": "EDA2145",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022382
                    }
                ]
            },
            {
                "codigoInterseccion": 3596,
                "descripcion": "CALLE 88 - ESCUELA PRIMARIA - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3596,
                        "descripcionInterseccion": "CALLE 88 - ESCUELA PRIMARIA - ENSENADA",
                        "identificadorParada": "EDA2147",
                        "descripcion": "EDA2147",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021999
                    }
                ]
            },
            {
                "codigoInterseccion": 3597,
                "descripcion": "CALLE 84 - C.UNIVERSITARIO - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3597,
                        "descripcionInterseccion": "CALLE 84 - C.UNIVERSITARIO - ENSENADA",
                        "identificadorParada": "EDA2148",
                        "descripcion": "EDA2148",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021972
                    }
                ]
            },
            {
                "codigoInterseccion": 3598,
                "descripcion": "CALLE 72 BIS - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3598,
                        "descripcionInterseccion": "CALLE 72 BIS - ENSENADA",
                        "identificadorParada": "EDA2152",
                        "descripcion": "EDA2152",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021971
                    }
                ]
            },
            {
                "codigoInterseccion": 3599,
                "descripcion": "CALLE 70 - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3599,
                        "descripcionInterseccion": "CALLE 70 - ENSENADA",
                        "identificadorParada": "EDA2153",
                        "descripcion": "EDA2153",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022083
                    }
                ]
            },
            {
                "codigoInterseccion": 3600,
                "descripcion": "CALLE 58 - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3600,
                        "descripcionInterseccion": "CALLE 58 - ENSENADA",
                        "identificadorParada": "EDA2154",
                        "descripcion": "EDA2154",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    }
                ]
            },
            {
                "codigoInterseccion": 3601,
                "descripcion": "CALLE 54 BIS - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3601,
                        "descripcionInterseccion": "CALLE 54 BIS - ENSENADA",
                        "identificadorParada": "EDA2156",
                        "descripcion": "EDA2156",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    }
                ]
            },
            {
                "codigoInterseccion": 3602,
                "descripcion": "CALLE 48 - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3602,
                        "descripcionInterseccion": "CALLE 48 - ENSENADA",
                        "identificadorParada": "EDA2157",
                        "descripcion": "EDA2157",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    }
                ]
            },
            {
                "codigoInterseccion": 3603,
                "descripcion": "CALLE 5 - UOCRA - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3603,
                        "descripcionInterseccion": "CALLE 5 - UOCRA - ENSENADA",
                        "identificadorParada": "EDA2164",
                        "descripcion": "EDA2164",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    }
                ]
            },
            {
                "codigoInterseccion": 3604,
                "descripcion": "CALLE 22 A - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3604,
                        "descripcionInterseccion": "CALLE 22 A - ENSENADA",
                        "identificadorParada": "EDA2166",
                        "descripcion": "EDA2166",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    }
                ]
            },
            {
                "codigoInterseccion": 3605,
                "descripcion": "CALLE 20 - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3605,
                        "descripcionInterseccion": "CALLE 20 - ENSENADA",
                        "identificadorParada": "EDA2167",
                        "descripcion": "EDA2167",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    }
                ]
            },
            {
                "codigoInterseccion": 3606,
                "descripcion": "DVBA-VIALIDAD - CALLE 10 - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3606,
                        "descripcionInterseccion": "DVBA-VIALIDAD - CALLE 10 - ENSENADA",
                        "identificadorParada": "EDA2171",
                        "descripcion": "EDA2171",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    }
                ]
            },
            {
                "codigoInterseccion": 3607,
                "descripcion": "CALLE 8 BIS - ENSENADA",
                "codCalle": 3563,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3563,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA ALMIRANTE BROWN - ENSENADA",
                        "codigoInterseccion": 3607,
                        "descripcionInterseccion": "CALLE 8 BIS - ENSENADA",
                        "identificadorParada": "EDA2172",
                        "descripcion": "EDA2172",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3555,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "AVENIDA BOSSINGA - ENSENADA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3551,
                "descripcion": "LINIERS - ENSENADA",
                "codCalle": 3555,
                "createdAt": 1689953020614,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3555,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA BOSSINGA - ENSENADA",
                        "codigoInterseccion": 3551,
                        "descripcionInterseccion": "LINIERS - ENSENADA",
                        "identificadorParada": "EDA2046",
                        "descripcion": "EDA2046",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023060
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3555,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA BOSSINGA - ENSENADA",
                        "codigoInterseccion": 3551,
                        "descripcionInterseccion": "LINIERS - ENSENADA",
                        "identificadorParada": "EDA2072",
                        "descripcion": "EDA2072",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023060
                    }
                ]
            },
            {
                "codigoInterseccion": 3556,
                "descripcion": "L. CONTARELLI - ENSENADA",
                "codCalle": 3555,
                "createdAt": 1689953020614,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3555,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA BOSSINGA - ENSENADA",
                        "codigoInterseccion": 3556,
                        "descripcionInterseccion": "L. CONTARELLI - ENSENADA",
                        "identificadorParada": "EDA2048",
                        "descripcion": "EDA2048",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3555,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA BOSSINGA - ENSENADA",
                        "codigoInterseccion": 3556,
                        "descripcionInterseccion": "L. CONTARELLI - ENSENADA",
                        "identificadorParada": "EDA2190",
                        "descripcion": "EDA2190",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    }
                ]
            },
            {
                "codigoInterseccion": 3547,
                "descripcion": "BOLIVIA - ENSENADA",
                "codCalle": 3555,
                "createdAt": 1689953020614,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3555,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA BOSSINGA - ENSENADA",
                        "codigoInterseccion": 3547,
                        "descripcionInterseccion": "BOLIVIA - ENSENADA",
                        "identificadorParada": "EDA2054",
                        "descripcion": "EDA2054",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    }
                ]
            },
            {
                "codigoInterseccion": 3553,
                "descripcion": "FRANCISCO CESTINO - ENSENADA",
                "codCalle": 3555,
                "createdAt": 1689953020614,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3555,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA BOSSINGA - ENSENADA",
                        "codigoInterseccion": 3553,
                        "descripcionInterseccion": "FRANCISCO CESTINO - ENSENADA",
                        "identificadorParada": "EDA2074",
                        "descripcion": "EDA2074",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3555,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA BOSSINGA - ENSENADA",
                        "codigoInterseccion": 3553,
                        "descripcionInterseccion": "FRANCISCO CESTINO - ENSENADA",
                        "identificadorParada": "EDA2182",
                        "descripcion": "EDA2182",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    }
                ]
            },
            {
                "codigoInterseccion": 3561,
                "descripcion": "JOSÉ HERNÁNDEZ - ENSENADA",
                "codCalle": 3555,
                "createdAt": 1689953020614,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3555,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA BOSSINGA - ENSENADA",
                        "codigoInterseccion": 3561,
                        "descripcionInterseccion": "JOSÉ HERNÁNDEZ - ENSENADA",
                        "identificadorParada": "EDA2076",
                        "descripcion": "EDA2076",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3555,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA BOSSINGA - ENSENADA",
                        "codigoInterseccion": 3561,
                        "descripcionInterseccion": "JOSÉ HERNÁNDEZ - ENSENADA",
                        "identificadorParada": "EDA2181",
                        "descripcion": "EDA2181",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    }
                ]
            },
            {
                "codigoInterseccion": 3608,
                "descripcion": "ACCESO A CLUB REGATAS - ENSENADA",
                "codCalle": 3555,
                "createdAt": 1689953020614,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3555,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA BOSSINGA - ENSENADA",
                        "codigoInterseccion": 3608,
                        "descripcionInterseccion": "ACCESO A CLUB REGATAS - ENSENADA",
                        "identificadorParada": "EDA2180",
                        "descripcion": "EDA2180",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023155
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3497,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "AVENIDA DEL PETROLEO ARGENTINO - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3498,
                "descripcion": "CALLE 140 - BERISSO",
                "codCalle": 3497,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3497,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA DEL PETROLEO ARGENTINO - BERISSO",
                        "codigoInterseccion": 3498,
                        "descripcionInterseccion": "CALLE 140 - BERISSO",
                        "identificadorParada": "BE5111",
                        "descripcion": "5111",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023698
                    }
                ]
            },
            {
                "codigoInterseccion": 3499,
                "descripcion": "CALLE 143 - BERISSO",
                "codCalle": 3497,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3497,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA DEL PETROLEO ARGENTINO - BERISSO",
                        "codigoInterseccion": 3499,
                        "descripcionInterseccion": "CALLE 143 - BERISSO",
                        "identificadorParada": "BE5113",
                        "descripcion": "5113",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023060
                    }
                ]
            },
            {
                "codigoInterseccion": 3500,
                "descripcion": "CALLE 145 - BERISSO",
                "codCalle": 3497,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3497,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA DEL PETROLEO ARGENTINO - BERISSO",
                        "codigoInterseccion": 3500,
                        "descripcionInterseccion": "CALLE 145 - BERISSO",
                        "identificadorParada": "BE5114",
                        "descripcion": "5114",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023155
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3497,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA DEL PETROLEO ARGENTINO - BERISSO",
                        "codigoInterseccion": 3500,
                        "descripcionInterseccion": "CALLE 145 - BERISSO",
                        "identificadorParada": "BE5122",
                        "descripcion": "5122",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023155
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3497,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA DEL PETROLEO ARGENTINO - BERISSO",
                        "codigoInterseccion": 3500,
                        "descripcionInterseccion": "CALLE 145 - BERISSO",
                        "identificadorParada": "BE5124",
                        "descripcion": "5124",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023155
                    }
                ]
            },
            {
                "codigoInterseccion": 3501,
                "descripcion": "CALLE 147 - BERISSO",
                "codCalle": 3497,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3497,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA DEL PETROLEO ARGENTINO - BERISSO",
                        "codigoInterseccion": 3501,
                        "descripcionInterseccion": "CALLE 147 - BERISSO",
                        "identificadorParada": "BE5115",
                        "descripcion": "5115",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023878
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3497,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA DEL PETROLEO ARGENTINO - BERISSO",
                        "codigoInterseccion": 3501,
                        "descripcionInterseccion": "CALLE 147 - BERISSO",
                        "identificadorParada": "BE5120",
                        "descripcion": "5120",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023878
                    }
                ]
            },
            {
                "codigoInterseccion": 3502,
                "descripcion": "CABECERA YPF - BERISSO",
                "codCalle": 3497,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3497,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA DEL PETROLEO ARGENTINO - BERISSO",
                        "codigoInterseccion": 3502,
                        "descripcionInterseccion": "CABECERA YPF - BERISSO",
                        "identificadorParada": "BE5126",
                        "descripcion": "5126",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023921
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3415,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3416,
                "descripcion": "CALLE 2 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3416,
                        "descripcionInterseccion": "CALLE 2 - BERISSO",
                        "identificadorParada": "BE2000",
                        "descripcion": "2000",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023911
                    }
                ]
            },
            {
                "codigoInterseccion": 3417,
                "descripcion": "CALLE 4 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3417,
                        "descripcionInterseccion": "CALLE 4 - BERISSO",
                        "identificadorParada": "BE2001",
                        "descripcion": "2001",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023911
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3417,
                        "descripcionInterseccion": "CALLE 4 - BERISSO",
                        "identificadorParada": "BE2002",
                        "descripcion": "2002",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023911
                    }
                ]
            },
            {
                "codigoInterseccion": 3418,
                "descripcion": "CALLE 5 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3418,
                        "descripcionInterseccion": "CALLE 5 - BERISSO",
                        "identificadorParada": "BE2003",
                        "descripcion": "2003",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023929
                    }
                ]
            },
            {
                "codigoInterseccion": 3419,
                "descripcion": "CALLE 6 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3419,
                        "descripcionInterseccion": "CALLE 6 - BERISSO",
                        "identificadorParada": "BE2004",
                        "descripcion": "2004",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023890
                    }
                ]
            },
            {
                "codigoInterseccion": 3420,
                "descripcion": "CALLE 8 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3420,
                        "descripcionInterseccion": "CALLE 8 - BERISSO",
                        "identificadorParada": "BE2005",
                        "descripcion": "2005",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023920
                    }
                ]
            },
            {
                "codigoInterseccion": 3421,
                "descripcion": "CALLE 9 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3421,
                        "descripcionInterseccion": "CALLE 9 - BERISSO",
                        "identificadorParada": "BE2006",
                        "descripcion": "2006",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023921
                    }
                ]
            },
            {
                "codigoInterseccion": 3422,
                "descripcion": "CALLE 11 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3422,
                        "descripcionInterseccion": "CALLE 11 - BERISSO",
                        "identificadorParada": "BE2007",
                        "descripcion": "2007",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023891
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3422,
                        "descripcionInterseccion": "CALLE 11 - BERISSO",
                        "identificadorParada": "BE2008",
                        "descripcion": "2008",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023891
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3422,
                        "descripcionInterseccion": "CALLE 11 - BERISSO",
                        "identificadorParada": "BE2009",
                        "descripcion": "2009",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023891
                    }
                ]
            },
            {
                "codigoInterseccion": 3423,
                "descripcion": "CALLE 13 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3423,
                        "descripcionInterseccion": "CALLE 13 - BERISSO",
                        "identificadorParada": "BE2010",
                        "descripcion": "2010",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024158
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3423,
                        "descripcionInterseccion": "CALLE 13 - BERISSO",
                        "identificadorParada": "BE2011",
                        "descripcion": "2011",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024158
                    }
                ]
            },
            {
                "codigoInterseccion": 3424,
                "descripcion": "CALLE 14 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3424,
                        "descripcionInterseccion": "CALLE 14 - BERISSO",
                        "identificadorParada": "BE2012",
                        "descripcion": "2012",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024183
                    }
                ]
            },
            {
                "codigoInterseccion": 3425,
                "descripcion": "CALLE 15 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3425,
                        "descripcionInterseccion": "CALLE 15 - BERISSO",
                        "identificadorParada": "BE2013",
                        "descripcion": "2013",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024919
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3425,
                        "descripcionInterseccion": "CALLE 15 - BERISSO",
                        "identificadorParada": "BE2014",
                        "descripcion": "2014",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024919
                    }
                ]
            },
            {
                "codigoInterseccion": 3426,
                "descripcion": "CALLE 17 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3426,
                        "descripcionInterseccion": "CALLE 17 - BERISSO",
                        "identificadorParada": "BE2015",
                        "descripcion": "2015",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024998
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3426,
                        "descripcionInterseccion": "CALLE 17 - BERISSO",
                        "identificadorParada": "BE2016",
                        "descripcion": "2016",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024998
                    }
                ]
            },
            {
                "codigoInterseccion": 3427,
                "descripcion": "CALLE 19 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3427,
                        "descripcionInterseccion": "CALLE 19 - BERISSO",
                        "identificadorParada": "BE2017",
                        "descripcion": "2017",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024984
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3427,
                        "descripcionInterseccion": "CALLE 19 - BERISSO",
                        "identificadorParada": "BE2018",
                        "descripcion": "2018",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024984
                    }
                ]
            },
            {
                "codigoInterseccion": 3428,
                "descripcion": "CALLE20 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3428,
                        "descripcionInterseccion": "CALLE20 - BERISSO",
                        "identificadorParada": "BE2019",
                        "descripcion": "2019",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024914
                    }
                ]
            },
            {
                "codigoInterseccion": 3429,
                "descripcion": "CALLE 21 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3429,
                        "descripcionInterseccion": "CALLE 21 - BERISSO",
                        "identificadorParada": "BE2020",
                        "descripcion": "2020",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024985
                    }
                ]
            },
            {
                "codigoInterseccion": 3430,
                "descripcion": "CALLE 23 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3430,
                        "descripcionInterseccion": "CALLE 23 - BERISSO",
                        "identificadorParada": "BE2021",
                        "descripcion": "2021",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024857
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3430,
                        "descripcionInterseccion": "CALLE 23 - BERISSO",
                        "identificadorParada": "BE2022",
                        "descripcion": "2022",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024857
                    }
                ]
            },
            {
                "codigoInterseccion": 3431,
                "descripcion": "CALLE 25 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3431,
                        "descripcionInterseccion": "CALLE 25 - BERISSO",
                        "identificadorParada": "BE2023",
                        "descripcion": "2023",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024916
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3431,
                        "descripcionInterseccion": "CALLE 25 - BERISSO",
                        "identificadorParada": "BE2024",
                        "descripcion": "2024",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024916
                    }
                ]
            },
            {
                "codigoInterseccion": 3432,
                "descripcion": "CALLE 26 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3432,
                        "descripcionInterseccion": "CALLE 26 - BERISSO",
                        "identificadorParada": "BE2025",
                        "descripcion": "2025",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024984
                    }
                ]
            },
            {
                "codigoInterseccion": 3433,
                "descripcion": "CALLE 27 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3433,
                        "descripcionInterseccion": "CALLE 27 - BERISSO",
                        "identificadorParada": "BE2026",
                        "descripcion": "2026",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024971
                    }
                ]
            },
            {
                "codigoInterseccion": 3434,
                "descripcion": "CALLE 28 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3434,
                        "descripcionInterseccion": "CALLE 28 - BERISSO",
                        "identificadorParada": "BE2027",
                        "descripcion": "2027",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024949
                    }
                ]
            },
            {
                "codigoInterseccion": 3435,
                "descripcion": "CALLE 29 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3435,
                        "descripcionInterseccion": "CALLE 29 - BERISSO",
                        "identificadorParada": "BE2028",
                        "descripcion": "2028",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024950
                    }
                ]
            },
            {
                "codigoInterseccion": 3436,
                "descripcion": "CALLE 30 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3436,
                        "descripcionInterseccion": "CALLE 30 - BERISSO",
                        "identificadorParada": "BE2029",
                        "descripcion": "2029",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024999
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3436,
                        "descripcionInterseccion": "CALLE 30 - BERISSO",
                        "identificadorParada": "BE2030",
                        "descripcion": "2030",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024999
                    }
                ]
            },
            {
                "codigoInterseccion": 3437,
                "descripcion": "CALLE 32 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3437,
                        "descripcionInterseccion": "CALLE 32 - BERISSO",
                        "identificadorParada": "BE2031",
                        "descripcion": "2031",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024998
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3437,
                        "descripcionInterseccion": "CALLE 32 - BERISSO",
                        "identificadorParada": "BE2032",
                        "descripcion": "2032",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024998
                    }
                ]
            },
            {
                "codigoInterseccion": 3438,
                "descripcion": "CALLE 33 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3438,
                        "descripcionInterseccion": "CALLE 33 - BERISSO",
                        "identificadorParada": "BE2033",
                        "descripcion": "2033",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024956
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3438,
                        "descripcionInterseccion": "CALLE 33 - BERISSO",
                        "identificadorParada": "BE2034",
                        "descripcion": "2034",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024956
                    }
                ]
            },
            {
                "codigoInterseccion": 3439,
                "descripcion": "CALLE 34 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3439,
                        "descripcionInterseccion": "CALLE 34 - BERISSO",
                        "identificadorParada": "BE2035",
                        "descripcion": "2035",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024966
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3439,
                        "descripcionInterseccion": "CALLE 34 - BERISSO",
                        "identificadorParada": "BE2036",
                        "descripcion": "2036",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024966
                    }
                ]
            },
            {
                "codigoInterseccion": 3440,
                "descripcion": "CALLE 36 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3440,
                        "descripcionInterseccion": "CALLE 36 - BERISSO",
                        "identificadorParada": "BE2037",
                        "descripcion": "2037",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024971
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3440,
                        "descripcionInterseccion": "CALLE 36 - BERISSO",
                        "identificadorParada": "BE2038",
                        "descripcion": "2038",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024971
                    }
                ]
            },
            {
                "codigoInterseccion": 3441,
                "descripcion": "CALLE 37 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3441,
                        "descripcionInterseccion": "CALLE 37 - BERISSO",
                        "identificadorParada": "BE2039",
                        "descripcion": "2039",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024956
                    }
                ]
            },
            {
                "codigoInterseccion": 3442,
                "descripcion": "CALLE 38 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3442,
                        "descripcionInterseccion": "CALLE 38 - BERISSO",
                        "identificadorParada": "BE2040",
                        "descripcion": "2040",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024857
                    }
                ]
            },
            {
                "codigoInterseccion": 3443,
                "descripcion": "CALLE 39 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3443,
                        "descripcionInterseccion": "CALLE 39 - BERISSO",
                        "identificadorParada": "BE2041",
                        "descripcion": "2041",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024966
                    }
                ]
            },
            {
                "codigoInterseccion": 3444,
                "descripcion": "CALLE 41 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3444,
                        "descripcionInterseccion": "CALLE 41 - BERISSO",
                        "identificadorParada": "BE2042",
                        "descripcion": "2042",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024911
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3444,
                        "descripcionInterseccion": "CALLE 41 - BERISSO",
                        "identificadorParada": "BE2043",
                        "descripcion": "2043",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024911
                    }
                ]
            },
            {
                "codigoInterseccion": 3445,
                "descripcion": "CALLE 42 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3445,
                        "descripcionInterseccion": "CALLE 42 - BERISSO",
                        "identificadorParada": "BE2044",
                        "descripcion": "2044",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024973
                    }
                ]
            },
            {
                "codigoInterseccion": 3446,
                "descripcion": "CALLE 43 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3446,
                        "descripcionInterseccion": "CALLE 43 - BERISSO",
                        "identificadorParada": "BE2045",
                        "descripcion": "2045",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024935
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3446,
                        "descripcionInterseccion": "CALLE 43 - BERISSO",
                        "identificadorParada": "BE2046",
                        "descripcion": "2046",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024935
                    }
                ]
            },
            {
                "codigoInterseccion": 3447,
                "descripcion": "CALLE 44 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3447,
                        "descripcionInterseccion": "CALLE 44 - BERISSO",
                        "identificadorParada": "BE2047",
                        "descripcion": "2047",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024972
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3447,
                        "descripcionInterseccion": "CALLE 44 - BERISSO",
                        "identificadorParada": "BE2048",
                        "descripcion": "2048",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024972
                    }
                ]
            },
            {
                "codigoInterseccion": 3448,
                "descripcion": "CALLE 47 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3448,
                        "descripcionInterseccion": "CALLE 47 - BERISSO",
                        "identificadorParada": "BE2049",
                        "descripcion": "2049",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024950
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3448,
                        "descripcionInterseccion": "CALLE 47 - BERISSO",
                        "identificadorParada": "BE2050",
                        "descripcion": "2050",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024950
                    }
                ]
            },
            {
                "codigoInterseccion": 3449,
                "descripcion": "CALLE 49 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3449,
                        "descripcionInterseccion": "CALLE 49 - BERISSO",
                        "identificadorParada": "BE2051",
                        "descripcion": "2051",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024932
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3449,
                        "descripcionInterseccion": "CALLE 49 - BERISSO",
                        "identificadorParada": "BE2052",
                        "descripcion": "2052",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024932
                    }
                ]
            },
            {
                "codigoInterseccion": 3450,
                "descripcion": "CALLE 52 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3450,
                        "descripcionInterseccion": "CALLE 52 - BERISSO",
                        "identificadorParada": "BE2053",
                        "descripcion": "2053",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024999
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3450,
                        "descripcionInterseccion": "CALLE 52 - BERISSO",
                        "identificadorParada": "BE2056",
                        "descripcion": "2056",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024999
                    }
                ]
            },
            {
                "codigoInterseccion": 3451,
                "descripcion": "CALLE 50 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3451,
                        "descripcionInterseccion": "CALLE 50 - BERISSO",
                        "identificadorParada": "BE2054",
                        "descripcion": "2054",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024913
                    }
                ]
            },
            {
                "codigoInterseccion": 3456,
                "descripcion": "CALLE 31 - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3456,
                        "descripcionInterseccion": "CALLE 31 - BERISSO",
                        "identificadorParada": "BE2368",
                        "descripcion": "2368",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024910
                    }
                ]
            },
            {
                "codigoInterseccion": 3511,
                "descripcion": "NUEVA YORK - BERISSO",
                "codCalle": 3415,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3415,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA MONTEVIDEO - BERISSO",
                        "codigoInterseccion": 3511,
                        "descripcionInterseccion": "NUEVA YORK - BERISSO",
                        "identificadorParada": "BE5200",
                        "descripcion": "5200",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024071
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3455,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "AVENIDA N. H. BEGUIN - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3456,
                "descripcion": "CALLE 31 - BERISSO",
                "codCalle": 3455,
                "createdAt": 1689953020716,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3455,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA N. H. BEGUIN - BERISSO",
                        "codigoInterseccion": 3456,
                        "descripcionInterseccion": "CALLE 31 - BERISSO",
                        "identificadorParada": "BE2104",
                        "descripcion": "2104",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024484
                    }
                ]
            },
            {
                "codigoInterseccion": 3436,
                "descripcion": "CALLE 30 - BERISSO",
                "codCalle": 3455,
                "createdAt": 1689953020716,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3455,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA N. H. BEGUIN - BERISSO",
                        "codigoInterseccion": 3436,
                        "descripcionInterseccion": "CALLE 30 - BERISSO",
                        "identificadorParada": "BE2105",
                        "descripcion": "2105",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024914
                    }
                ]
            },
            {
                "codigoInterseccion": 3469,
                "descripcion": "AVENIDA BANCO PROVINCIA - BERISSO",
                "codCalle": 3455,
                "createdAt": 1689953020716,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3455,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "AVENIDA N. H. BEGUIN - BERISSO",
                        "codigoInterseccion": 3469,
                        "descripcionInterseccion": "AVENIDA BANCO PROVINCIA - BERISSO",
                        "identificadorParada": "BE2133",
                        "descripcion": "2133",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024183
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3620,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "BARADERO - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3621,
                "descripcion": "YPF - BERISSO",
                "codCalle": 3620,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3620,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "BARADERO - BERISSO",
                        "codigoInterseccion": 3621,
                        "descripcionInterseccion": "YPF - BERISSO",
                        "identificadorParada": "EDA2210",
                        "descripcion": "EDA2210",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024183
                    }
                ]
            },
            {
                "codigoInterseccion": 3529,
                "descripcion": "CALLE 4 (EST. SERV.-YPF) - BERISSO",
                "codCalle": 3620,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3620,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "BARADERO - BERISSO",
                        "codigoInterseccion": 3529,
                        "descripcionInterseccion": "CALLE 4 (EST. SERV.-YPF) - BERISSO",
                        "identificadorParada": "EDA2212",
                        "descripcion": "EDA2212",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024916
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3547,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "BOLIVIA - ENSENADA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3557,
                "descripcion": "DOCTOR HARAMBOURE - ENSENADA",
                "codCalle": 3547,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3547,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "BOLIVIA - ENSENADA",
                        "codigoInterseccion": 3557,
                        "descripcionInterseccion": "DOCTOR HARAMBOURE - ENSENADA",
                        "identificadorParada": "EDA2056",
                        "descripcion": "EDA2056",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024183
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3547,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "BOLIVIA - ENSENADA",
                        "codigoInterseccion": 3557,
                        "descripcionInterseccion": "DOCTOR HARAMBOURE - ENSENADA",
                        "identificadorParada": "EDA2188",
                        "descripcion": "EDA2188",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024183
                    }
                ]
            },
            {
                "codigoInterseccion": 3558,
                "descripcion": "QUINTANA - ENSENADA",
                "codCalle": 3547,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3547,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "BOLIVIA - ENSENADA",
                        "codigoInterseccion": 3558,
                        "descripcionInterseccion": "QUINTANA - ENSENADA",
                        "identificadorParada": "EDA2058",
                        "descripcion": "EDA2058",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024183
                    }
                ]
            },
            {
                "codigoInterseccion": 3555,
                "descripcion": "AVENIDA BOSSINGA - ENSENADA",
                "codCalle": 3547,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3547,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "BOLIVIA - ENSENADA",
                        "codigoInterseccion": 3555,
                        "descripcionInterseccion": "AVENIDA BOSSINGA - ENSENADA",
                        "identificadorParada": "EDA2189",
                        "descripcion": "EDA2189",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024212
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3510,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 10 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3479,
                "descripcion": "CALLE 159 - BERISSO",
                "codCalle": 3510,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3510,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 10 - BERISSO",
                        "codigoInterseccion": 3479,
                        "descripcionInterseccion": "CALLE 159 - BERISSO",
                        "identificadorParada": "BE5147",
                        "descripcion": "5147",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024417
                    }
                ]
            },
            {
                "codigoInterseccion": 3505,
                "descripcion": "CALLE 155 - BERISSO",
                "codCalle": 3510,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3510,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 10 - BERISSO",
                        "codigoInterseccion": 3505,
                        "descripcionInterseccion": "CALLE 155 - BERISSO",
                        "identificadorParada": "BE5338",
                        "descripcion": "5338",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024212
                    }
                ]
            },
            {
                "codigoInterseccion": 3490,
                "descripcion": "CALLE 156 - BERISSO",
                "codCalle": 3510,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3510,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 10 - BERISSO",
                        "codigoInterseccion": 3490,
                        "descripcionInterseccion": "CALLE 156 - BERISSO",
                        "identificadorParada": "BE5340",
                        "descripcion": "5340",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024969
                    }
                ]
            },
            {
                "codigoInterseccion": 3480,
                "descripcion": "CALLE 157 - BERISSO",
                "codCalle": 3510,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3510,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 10 - BERISSO",
                        "codigoInterseccion": 3480,
                        "descripcionInterseccion": "CALLE 157 - BERISSO",
                        "identificadorParada": "BE5342",
                        "descripcion": "5342",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024918
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3422,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 11 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3480,
                "descripcion": "CALLE 157 - BERISSO",
                "codCalle": 3422,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3422,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 11 - BERISSO",
                        "codigoInterseccion": 3480,
                        "descripcionInterseccion": "CALLE 157 - BERISSO",
                        "identificadorParada": "BE6024",
                        "descripcion": "6024",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024916
                    }
                ]
            },
            {
                "codigoInterseccion": 3490,
                "descripcion": "CALLE 156 - BERISSO",
                "codCalle": 3422,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3422,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 11 - BERISSO",
                        "codigoInterseccion": 3490,
                        "descripcionInterseccion": "CALLE 156 - BERISSO",
                        "identificadorParada": "BE6026",
                        "descripcion": "6026",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024996
                    }
                ]
            },
            {
                "codigoInterseccion": 3485,
                "descripcion": "CALLE 153 - BERISSO",
                "codCalle": 3422,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3422,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 11 - BERISSO",
                        "codigoInterseccion": 3485,
                        "descripcionInterseccion": "CALLE 153 - BERISSO",
                        "identificadorParada": "BE6028",
                        "descripcion": "6028",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023961
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3503,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 12 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3504,
                "descripcion": "153 - BERISSO",
                "codCalle": 3503,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3503,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 12 - BERISSO",
                        "codigoInterseccion": 3504,
                        "descripcionInterseccion": "153 - BERISSO",
                        "identificadorParada": "BE5131",
                        "descripcion": "5130",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023947
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3675,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 12 - LA PLATA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3759,
                "descripcion": "AVENIDA 66 - LA PLATA",
                "codCalle": 3675,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3675,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 12 - LA PLATA",
                        "codigoInterseccion": 3759,
                        "descripcionInterseccion": "AVENIDA 66 - LA PLATA",
                        "identificadorParada": "LP3396",
                        "descripcion": "3396",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023948
                    }
                ]
            },
            {
                "codigoInterseccion": 3628,
                "descripcion": "CALLE 64 - LA PLATA",
                "codCalle": 3675,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3675,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 12 - LA PLATA",
                        "codigoInterseccion": 3628,
                        "descripcionInterseccion": "CALLE 64 - LA PLATA",
                        "identificadorParada": "LP3399",
                        "descripcion": "LP3399",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023965
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3525,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 129 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3440,
                "descripcion": "CALLE 36 - BERISSO",
                "codCalle": 3525,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3525,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 129 - BERISSO",
                        "codigoInterseccion": 3440,
                        "descripcionInterseccion": "CALLE 36 - BERISSO",
                        "identificadorParada": "BE8007",
                        "descripcion": "BE8007",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953025000
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3423,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 13 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3464,
                "descripcion": "CALLE 165 - BERISSO",
                "codCalle": 3423,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3423,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 13 - BERISSO",
                        "codigoInterseccion": 3464,
                        "descripcionInterseccion": "CALLE 165 - BERISSO",
                        "identificadorParada": "BE5310",
                        "descripcion": "5310",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024973
                    }
                ]
            },
            {
                "codigoInterseccion": 3482,
                "descripcion": "CALLE 163 - BERISSO",
                "codCalle": 3423,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3423,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 13 - BERISSO",
                        "codigoInterseccion": 3482,
                        "descripcionInterseccion": "CALLE 163 - BERISSO",
                        "identificadorParada": "BE5312",
                        "descripcion": "5312",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024997
                    }
                ]
            },
            {
                "codigoInterseccion": 3466,
                "descripcion": "CALLE 162 - BERISSO",
                "codCalle": 3423,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3423,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 13 - BERISSO",
                        "codigoInterseccion": 3466,
                        "descripcionInterseccion": "CALLE 162 - BERISSO",
                        "identificadorParada": "BE5314",
                        "descripcion": "5314",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021910
                    }
                ]
            },
            {
                "codigoInterseccion": 3478,
                "descripcion": "CALLE 161 - BERISSO",
                "codCalle": 3423,
                "createdAt": 1689953020605,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3423,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 13 - BERISSO",
                        "codigoInterseccion": 3478,
                        "descripcionInterseccion": "CALLE 161 - BERISSO",
                        "identificadorParada": "BE5316",
                        "descripcion": "5316",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021973
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3521,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 130 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3466,
                "descripcion": "CALLE 162 - BERISSO",
                "codCalle": 3521,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3521,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 130 - BERISSO",
                        "codigoInterseccion": 3466,
                        "descripcionInterseccion": "CALLE 162 - BERISSO",
                        "identificadorParada": "BE5419",
                        "descripcion": "5419",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024984
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3726,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 131 - ALTOS DE SAN LORENZO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3718,
                "descripcion": "CALLE 74 - ALTOS DE SAN LORENZO",
                "codCalle": 3726,
                "createdAt": 1689953020638,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3726,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 131 - ALTOS DE SAN LORENZO",
                        "codigoInterseccion": 3718,
                        "descripcionInterseccion": "CALLE 74 - ALTOS DE SAN LORENZO",
                        "identificadorParada": "LP10188",
                        "descripcion": "10188",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022090
                    }
                ]
            },
            {
                "codigoInterseccion": 4008,
                "descripcion": "CALLE 73 - ALTOS DE SAN LORENZO",
                "codCalle": 3726,
                "createdAt": 1689953020638,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3726,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 131 - ALTOS DE SAN LORENZO",
                        "codigoInterseccion": 4008,
                        "descripcionInterseccion": "CALLE 73 - ALTOS DE SAN LORENZO",
                        "identificadorParada": "LP11592",
                        "descripcion": "11592",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022092
                    }
                ]
            },
            {
                "codigoInterseccion": 4010,
                "descripcion": "CALLE 72 BIS - ALTOS DE SAN LORENZO",
                "codCalle": 3726,
                "createdAt": 1689953020638,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3726,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 131 - ALTOS DE SAN LORENZO",
                        "codigoInterseccion": 4010,
                        "descripcionInterseccion": "CALLE 72 BIS - ALTOS DE SAN LORENZO",
                        "identificadorParada": "LP11594",
                        "descripcion": "11594",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953021974
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3424,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 14 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3482,
                "descripcion": "CALLE 163 - BERISSO",
                "codCalle": 3424,
                "createdAt": 1689953020645,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3424,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 14 - BERISSO",
                        "codigoInterseccion": 3482,
                        "descripcionInterseccion": "CALLE 163 - BERISSO",
                        "identificadorParada": "BE2388",
                        "descripcion": "2388",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022383
                    }
                ]
            },
            {
                "codigoInterseccion": 3464,
                "descripcion": "CALLE 165 - BERISSO",
                "codCalle": 3424,
                "createdAt": 1689953020645,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3424,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 14 - BERISSO",
                        "codigoInterseccion": 3464,
                        "descripcionInterseccion": "CALLE 165 - BERISSO",
                        "identificadorParada": "BE2389",
                        "descripcion": "2389",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024983
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3627,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 14 - LA PLATA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3628,
                "descripcion": "CALLE 64 - LA PLATA",
                "codCalle": 3627,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3627,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 14 - LA PLATA",
                        "codigoInterseccion": 3628,
                        "descripcionInterseccion": "CALLE 64 - LA PLATA",
                        "identificadorParada": "LP 1546",
                        "descripcion": "1546",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024999
                    }
                ]
            },
            {
                "codigoInterseccion": 3759,
                "descripcion": "AVENIDA 66 - LA PLATA",
                "codCalle": 3627,
                "createdAt": 1689953020586,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3627,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 14 - LA PLATA",
                        "codigoInterseccion": 3759,
                        "descripcionInterseccion": "AVENIDA 66 - LA PLATA",
                        "identificadorParada": "LP5003",
                        "descripcion": "LP5003",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023947
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3425,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 15 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3464,
                "descripcion": "CALLE 165 - BERISSO",
                "codCalle": 3425,
                "createdAt": 1689953020716,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3425,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 15 - BERISSO",
                        "codigoInterseccion": 3464,
                        "descripcionInterseccion": "CALLE 165 - BERISSO",
                        "identificadorParada": "BE2400",
                        "descripcion": "2400",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022086
                    }
                ]
            },
            {
                "codigoInterseccion": 3465,
                "descripcion": "CALLE 164 - BERISSO",
                "codCalle": 3425,
                "createdAt": 1689953020716,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3425,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 15 - BERISSO",
                        "codigoInterseccion": 3465,
                        "descripcionInterseccion": "CALLE 164 - BERISSO",
                        "identificadorParada": "BE2402",
                        "descripcion": "2402",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022090
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3518,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 152 NORTE - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3503,
                "descripcion": "CALLE 12 - BERISSO",
                "codCalle": 3518,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3518,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 152 NORTE - BERISSO",
                        "codigoInterseccion": 3503,
                        "descripcionInterseccion": "CALLE 12 - BERISSO",
                        "identificadorParada": "BE6007",
                        "descripcion": "6007",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022086
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3485,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 153 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3424,
                "descripcion": "CALLE 14 - BERISSO",
                "codCalle": 3485,
                "createdAt": 1689953020642,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3485,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 153 - BERISSO",
                        "codigoInterseccion": 3424,
                        "descripcionInterseccion": "CALLE 14 - BERISSO",
                        "identificadorParada": "BE5332",
                        "descripcion": "5332",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022086
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3485,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 153 - BERISSO",
                        "codigoInterseccion": 3424,
                        "descripcionInterseccion": "CALLE 14 - BERISSO",
                        "identificadorParada": "BE5334",
                        "descripcion": "5334",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022086
                    }
                ]
            },
            {
                "codigoInterseccion": 3422,
                "descripcion": "CALLE 11 - BERISSO",
                "codCalle": 3485,
                "createdAt": 1689953020642,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3485,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 153 - BERISSO",
                        "codigoInterseccion": 3422,
                        "descripcionInterseccion": "CALLE 11 - BERISSO",
                        "identificadorParada": "BE5336",
                        "descripcion": "5336",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022762
                    }
                ]
            },
            {
                "codigoInterseccion": 3463,
                "descripcion": "CALLE 7 - BERISSO",
                "codCalle": 3485,
                "createdAt": 1689953020642,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3485,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 153 - BERISSO",
                        "codigoInterseccion": 3463,
                        "descripcionInterseccion": "CALLE 7 - BERISSO",
                        "identificadorParada": "BE6002",
                        "descripcion": "6002",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022669
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3520,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 154 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3422,
                "descripcion": "CALLE 11 - BERISSO",
                "codCalle": 3520,
                "createdAt": 1689953020715,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3520,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 154 - BERISSO",
                        "codigoInterseccion": 3422,
                        "descripcionInterseccion": "CALLE 11 - BERISSO",
                        "identificadorParada": "BE5404",
                        "descripcion": "5404",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022770
                    }
                ]
            },
            {
                "codigoInterseccion": 3423,
                "descripcion": "CALLE 13 - BERISSO",
                "codCalle": 3520,
                "createdAt": 1689953020715,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3520,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 154 - BERISSO",
                        "codigoInterseccion": 3423,
                        "descripcionInterseccion": "CALLE 13 - BERISSO",
                        "identificadorParada": "BE5405",
                        "descripcion": "5405",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022922
                    }
                ]
            },
            {
                "codigoInterseccion": 3424,
                "descripcion": "CALLE 14 - BERISSO",
                "codCalle": 3520,
                "createdAt": 1689953020715,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3520,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 154 - BERISSO",
                        "codigoInterseccion": 3424,
                        "descripcionInterseccion": "CALLE 14 - BERISSO",
                        "identificadorParada": "BE5406",
                        "descripcion": "5406",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022762
                    }
                ]
            },
            {
                "codigoInterseccion": 3425,
                "descripcion": "CALLE 15 - BERISSO",
                "codCalle": 3520,
                "createdAt": 1689953020715,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3520,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 154 - BERISSO",
                        "codigoInterseccion": 3425,
                        "descripcionInterseccion": "CALLE 15 - BERISSO",
                        "identificadorParada": "BE5407",
                        "descripcion": "5407",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022762
                    }
                ]
            },
            {
                "codigoInterseccion": 3426,
                "descripcion": "CALLE 17 - BERISSO",
                "codCalle": 3520,
                "createdAt": 1689953020715,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3520,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 154 - BERISSO",
                        "codigoInterseccion": 3426,
                        "descripcionInterseccion": "CALLE 17 - BERISSO",
                        "identificadorParada": "BE5408",
                        "descripcion": "5408",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022833
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3480,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 157 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3435,
                "descripcion": "CALLE 29 - BERISSO",
                "codCalle": 3480,
                "createdAt": 1689953020653,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3480,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 157 - BERISSO",
                        "codigoInterseccion": 3435,
                        "descripcionInterseccion": "CALLE 29 - BERISSO",
                        "identificadorParada": "BE2316",
                        "descripcion": "2316",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022922
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3480,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 157 - BERISSO",
                        "codigoInterseccion": 3435,
                        "descripcionInterseccion": "CALLE 29 - BERISSO",
                        "identificadorParada": "BE2324",
                        "descripcion": "2324",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022922
                    }
                ]
            },
            {
                "codigoInterseccion": 3431,
                "descripcion": "CALLE 25 - BERISSO",
                "codCalle": 3480,
                "createdAt": 1689953020653,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3480,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 157 - BERISSO",
                        "codigoInterseccion": 3431,
                        "descripcionInterseccion": "CALLE 25 - BERISSO",
                        "identificadorParada": "BE2318",
                        "descripcion": "2318",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022922
                    }
                ]
            },
            {
                "codigoInterseccion": 3434,
                "descripcion": "CALLE 28 - BERISSO",
                "codCalle": 3480,
                "createdAt": 1689953020653,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3480,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 157 - BERISSO",
                        "codigoInterseccion": 3434,
                        "descripcionInterseccion": "CALLE 28 - BERISSO",
                        "identificadorParada": "BE2323",
                        "descripcion": "2323",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022925
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3481,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 158 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3420,
                "descripcion": "CALLE 8 - BERISSO",
                "codCalle": 3481,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3481,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 158 - BERISSO",
                        "codigoInterseccion": 3420,
                        "descripcionInterseccion": "CALLE 8 - BERISSO",
                        "identificadorParada": "BE5400",
                        "descripcion": "5400",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022776
                    }
                ]
            },
            {
                "codigoInterseccion": 3529,
                "descripcion": "CALLE 4 (EST. SERV.-YPF) - BERISSO",
                "codCalle": 3481,
                "createdAt": 1689953020598,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3481,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 158 - BERISSO",
                        "codigoInterseccion": 3529,
                        "descripcionInterseccion": "CALLE 4 (EST. SERV.-YPF) - BERISSO",
                        "identificadorParada": "EDA2000",
                        "descripcion": "EDA2000",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022833
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3530,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 158 - ENSENADA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3531,
                "descripcion": "CLUB YPF - ENSENADA",
                "codCalle": 3530,
                "createdAt": 1689953020614,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3530,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 158 - ENSENADA",
                        "codigoInterseccion": 3531,
                        "descripcionInterseccion": "CLUB YPF - ENSENADA",
                        "identificadorParada": "EDA2004",
                        "descripcion": "EDA2004",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022925
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3479,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 159 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3420,
                "descripcion": "CALLE 8 - BERISSO",
                "codCalle": 3479,
                "createdAt": 1689953020645,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3479,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 159 - BERISSO",
                        "codigoInterseccion": 3420,
                        "descripcionInterseccion": "CALLE 8 - BERISSO",
                        "identificadorParada": "BE6004",
                        "descripcion": "6004",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022832
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3478,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 161 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3425,
                "descripcion": "CALLE 15 - BERISSO",
                "codCalle": 3478,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3478,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 161 - BERISSO",
                        "codigoInterseccion": 3425,
                        "descripcionInterseccion": "CALLE 15 - BERISSO",
                        "identificadorParada": "BE5318",
                        "descripcion": "5318",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023929
                    }
                ]
            },
            {
                "codigoInterseccion": 3426,
                "descripcion": "CALLE 17 - BERISSO",
                "codCalle": 3478,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3478,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 161 - BERISSO",
                        "codigoInterseccion": 3426,
                        "descripcionInterseccion": "CALLE 17 - BERISSO",
                        "identificadorParada": "BE5320",
                        "descripcion": "5320",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024323
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3466,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 162 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3435,
                "descripcion": "CALLE 29 - BERISSO",
                "codCalle": 3466,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3466,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 162 - BERISSO",
                        "codigoInterseccion": 3435,
                        "descripcionInterseccion": "CALLE 29 - BERISSO",
                        "identificadorParada": "BE2370",
                        "descripcion": "2370",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023965
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3466,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 162 - BERISSO",
                        "codigoInterseccion": 3435,
                        "descripcionInterseccion": "CALLE 29 - BERISSO",
                        "identificadorParada": "BE5418",
                        "descripcion": "5418",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023965
                    }
                ]
            },
            {
                "codigoInterseccion": 3433,
                "descripcion": "CALLE 27 - BERISSO",
                "codCalle": 3466,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3466,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 162 - BERISSO",
                        "codigoInterseccion": 3433,
                        "descripcionInterseccion": "CALLE 27 - BERISSO",
                        "identificadorParada": "BE2372",
                        "descripcion": "2372",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023965
                    }
                ]
            },
            {
                "codigoInterseccion": 3432,
                "descripcion": "CALLE 26 - BERISSO",
                "codCalle": 3466,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3466,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 162 - BERISSO",
                        "codigoInterseccion": 3432,
                        "descripcionInterseccion": "CALLE 26 - BERISSO",
                        "identificadorParada": "BE2374",
                        "descripcion": "2374",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023961
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3466,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 162 - BERISSO",
                        "codigoInterseccion": 3432,
                        "descripcionInterseccion": "CALLE 26 - BERISSO",
                        "identificadorParada": "BE5426",
                        "descripcion": "5426",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023961
                    }
                ]
            },
            {
                "codigoInterseccion": 3431,
                "descripcion": "CALLE 25 - BERISSO",
                "codCalle": 3466,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3466,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 162 - BERISSO",
                        "codigoInterseccion": 3431,
                        "descripcionInterseccion": "CALLE 25 - BERISSO",
                        "identificadorParada": "BE2376",
                        "descripcion": "2376",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024484
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3466,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 162 - BERISSO",
                        "codigoInterseccion": 3431,
                        "descripcionInterseccion": "CALLE 25 - BERISSO",
                        "identificadorParada": "BE5417",
                        "descripcion": "5417",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024484
                    }
                ]
            },
            {
                "codigoInterseccion": 3430,
                "descripcion": "CALLE 23 - BERISSO",
                "codCalle": 3466,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3466,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 162 - BERISSO",
                        "codigoInterseccion": 3430,
                        "descripcionInterseccion": "CALLE 23 - BERISSO",
                        "identificadorParada": "BE2378",
                        "descripcion": "2378",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024183
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3466,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 162 - BERISSO",
                        "codigoInterseccion": 3430,
                        "descripcionInterseccion": "CALLE 23 - BERISSO",
                        "identificadorParada": "BE5416",
                        "descripcion": "5416",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024183
                    }
                ]
            },
            {
                "codigoInterseccion": 3429,
                "descripcion": "CALLE 21 - BERISSO",
                "codCalle": 3466,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3466,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 162 - BERISSO",
                        "codigoInterseccion": 3429,
                        "descripcionInterseccion": "CALLE 21 - BERISSO",
                        "identificadorParada": "BE2380",
                        "descripcion": "2380",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024213
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3466,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 162 - BERISSO",
                        "codigoInterseccion": 3429,
                        "descripcionInterseccion": "CALLE 21 - BERISSO",
                        "identificadorParada": "BE5415",
                        "descripcion": "5415",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024213
                    }
                ]
            },
            {
                "codigoInterseccion": 3427,
                "descripcion": "CALLE 19 - BERISSO",
                "codCalle": 3466,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3466,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 162 - BERISSO",
                        "codigoInterseccion": 3427,
                        "descripcionInterseccion": "CALLE 19 - BERISSO",
                        "identificadorParada": "BE2382",
                        "descripcion": "2382",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023963
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3466,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 162 - BERISSO",
                        "codigoInterseccion": 3427,
                        "descripcionInterseccion": "CALLE 19 - BERISSO",
                        "identificadorParada": "BE5414",
                        "descripcion": "5414",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023963
                    }
                ]
            },
            {
                "codigoInterseccion": 3426,
                "descripcion": "CALLE 17 - BERISSO",
                "codCalle": 3466,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3466,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 162 - BERISSO",
                        "codigoInterseccion": 3426,
                        "descripcionInterseccion": "CALLE 17 - BERISSO",
                        "identificadorParada": "BE2384",
                        "descripcion": "2384",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023965
                    }
                ]
            },
            {
                "codigoInterseccion": 3425,
                "descripcion": "CALLE 15 - BERISSO",
                "codCalle": 3466,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3466,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 162 - BERISSO",
                        "codigoInterseccion": 3425,
                        "descripcionInterseccion": "CALLE 15 - BERISSO",
                        "identificadorParada": "BE2385",
                        "descripcion": "2385",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023995
                    }
                ]
            },
            {
                "codigoInterseccion": 3424,
                "descripcion": "CALLE 14 - BERISSO",
                "codCalle": 3466,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3466,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 162 - BERISSO",
                        "codigoInterseccion": 3424,
                        "descripcionInterseccion": "CALLE 14 - BERISSO",
                        "identificadorParada": "BE2387",
                        "descripcion": "2387",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023965
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3465,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 164 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3431,
                "descripcion": "CALLE 25 - BERISSO",
                "codCalle": 3465,
                "createdAt": 1689953020672,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3465,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 164 - BERISSO",
                        "codigoInterseccion": 3431,
                        "descripcionInterseccion": "CALLE 25 - BERISSO",
                        "identificadorParada": "BE2334",
                        "descripcion": "2334",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023993
                    }
                ]
            },
            {
                "codigoInterseccion": 3430,
                "descripcion": "CALLE 23 - BERISSO",
                "codCalle": 3465,
                "createdAt": 1689953020672,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3465,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 164 - BERISSO",
                        "codigoInterseccion": 3430,
                        "descripcionInterseccion": "CALLE 23 - BERISSO",
                        "identificadorParada": "BE2336",
                        "descripcion": "2336",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024055
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3465,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 164 - BERISSO",
                        "codigoInterseccion": 3430,
                        "descripcionInterseccion": "CALLE 23 - BERISSO",
                        "identificadorParada": "BE2406",
                        "descripcion": "2406",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024055
                    }
                ]
            },
            {
                "codigoInterseccion": 3429,
                "descripcion": "CALLE 21 - BERISSO",
                "codCalle": 3465,
                "createdAt": 1689953020672,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3465,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 164 - BERISSO",
                        "codigoInterseccion": 3429,
                        "descripcionInterseccion": "CALLE 21 - BERISSO",
                        "identificadorParada": "BE2338",
                        "descripcion": "BE2338",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023993
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3465,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 164 - BERISSO",
                        "codigoInterseccion": 3429,
                        "descripcionInterseccion": "CALLE 21 - BERISSO",
                        "identificadorParada": "BE2405",
                        "descripcion": "2405",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023993
                    }
                ]
            },
            {
                "codigoInterseccion": 3427,
                "descripcion": "CALLE 19 - BERISSO",
                "codCalle": 3465,
                "createdAt": 1689953020672,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3465,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 164 - BERISSO",
                        "codigoInterseccion": 3427,
                        "descripcionInterseccion": "CALLE 19 - BERISSO",
                        "identificadorParada": "BE2340",
                        "descripcion": "2340",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024014
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3465,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 164 - BERISSO",
                        "codigoInterseccion": 3427,
                        "descripcionInterseccion": "CALLE 19 - BERISSO",
                        "identificadorParada": "BE2404",
                        "descripcion": "2404",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024014
                    }
                ]
            },
            {
                "codigoInterseccion": 3483,
                "descripcion": "CALLE 18 - BERISSO",
                "codCalle": 3465,
                "createdAt": 1689953020672,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3465,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 164 - BERISSO",
                        "codigoInterseccion": 3483,
                        "descripcionInterseccion": "CALLE 18 - BERISSO",
                        "identificadorParada": "BE2342",
                        "descripcion": "2342",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023995
                    }
                ]
            },
            {
                "codigoInterseccion": 3426,
                "descripcion": "CALLE 17 - BERISSO",
                "codCalle": 3465,
                "createdAt": 1689953020672,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3465,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 164 - BERISSO",
                        "codigoInterseccion": 3426,
                        "descripcionInterseccion": "CALLE 17 - BERISSO",
                        "identificadorParada": "BE2403",
                        "descripcion": "2403",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023993
                    }
                ]
            },
            {
                "codigoInterseccion": 3489,
                "descripcion": "CALLE 24 - BERISSO",
                "codCalle": 3465,
                "createdAt": 1689953020672,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3465,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 164 - BERISSO",
                        "codigoInterseccion": 3489,
                        "descripcionInterseccion": "CALLE 24 - BERISSO",
                        "identificadorParada": "BE2407",
                        "descripcion": "2407",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024014
                    }
                ]
            },
            {
                "codigoInterseccion": 3432,
                "descripcion": "CALLE 26 - BERISSO",
                "codCalle": 3465,
                "createdAt": 1689953020672,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3465,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 164 - BERISSO",
                        "codigoInterseccion": 3432,
                        "descripcionInterseccion": "CALLE 26 - BERISSO",
                        "identificadorParada": "BE2408",
                        "descripcion": "2408",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024983
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3426,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 17 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3478,
                "descripcion": "CALLE 161 - BERISSO",
                "codCalle": 3426,
                "createdAt": 1689953020667,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3426,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 17 - BERISSO",
                        "codigoInterseccion": 3478,
                        "descripcionInterseccion": "CALLE 161 - BERISSO",
                        "identificadorParada": "BE2386",
                        "descripcion": "2386",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024992
                    }
                ]
            },
            {
                "codigoInterseccion": 3479,
                "descripcion": "CALLE 159 - BERISSO",
                "codCalle": 3426,
                "createdAt": 1689953020667,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3426,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 17 - BERISSO",
                        "codigoInterseccion": 3479,
                        "descripcionInterseccion": "CALLE 159 - BERISSO",
                        "identificadorParada": "BE5322",
                        "descripcion": "5322",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024988
                    }
                ]
            },
            {
                "codigoInterseccion": 3480,
                "descripcion": "CALLE 157 - BERISSO",
                "codCalle": 3426,
                "createdAt": 1689953020667,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3426,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 17 - BERISSO",
                        "codigoInterseccion": 3480,
                        "descripcionInterseccion": "CALLE 157 - BERISSO",
                        "identificadorParada": "BE5324",
                        "descripcion": "5324",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024212
                    }
                ]
            },
            {
                "codigoInterseccion": 3490,
                "descripcion": "CALLE 156 - BERISSO",
                "codCalle": 3426,
                "createdAt": 1689953020667,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3426,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 17 - BERISSO",
                        "codigoInterseccion": 3490,
                        "descripcionInterseccion": "CALLE 156 - BERISSO",
                        "identificadorParada": "BE5326",
                        "descripcion": "5326",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024243
                    }
                ]
            },
            {
                "codigoInterseccion": 3520,
                "descripcion": "CALLE 154 - BERISSO",
                "codCalle": 3426,
                "createdAt": 1689953020667,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3426,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 17 - BERISSO",
                        "codigoInterseccion": 3520,
                        "descripcionInterseccion": "CALLE 154 - BERISSO",
                        "identificadorParada": "BE5328",
                        "descripcion": "5328",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024482
                    }
                ]
            },
            {
                "codigoInterseccion": 3485,
                "descripcion": "CALLE 153 - BERISSO",
                "codCalle": 3426,
                "createdAt": 1689953020667,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3426,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 17 - BERISSO",
                        "codigoInterseccion": 3485,
                        "descripcionInterseccion": "CALLE 153 - BERISSO",
                        "identificadorParada": "BE5330",
                        "descripcion": "5330",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024210
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3512,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 171 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3445,
                "descripcion": "CALLE 42 - BERISSO",
                "codCalle": 3512,
                "createdAt": 1689953020670,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3512,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 171 - BERISSO",
                        "codigoInterseccion": 3445,
                        "descripcionInterseccion": "CALLE 42 - BERISSO",
                        "identificadorParada": "BE2113",
                        "descripcion": "2113",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024216
                    }
                ]
            },
            {
                "codigoInterseccion": 3458,
                "descripcion": "CALLE 45 - BERISSO",
                "codCalle": 3512,
                "createdAt": 1689953020670,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3512,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 171 - BERISSO",
                        "codigoInterseccion": 3458,
                        "descripcionInterseccion": "CALLE 45 - BERISSO",
                        "identificadorParada": "BE2144",
                        "descripcion": "2144",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024212
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3483,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 18 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3464,
                "descripcion": "CALLE 165 - BERISSO",
                "codCalle": 3483,
                "createdAt": 1689953020645,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3483,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 18 - BERISSO",
                        "codigoInterseccion": 3464,
                        "descripcionInterseccion": "CALLE 165 - BERISSO",
                        "identificadorParada": "BE2344",
                        "descripcion": "BE2344",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024216
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3483,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 18 - BERISSO",
                        "codigoInterseccion": 3464,
                        "descripcionInterseccion": "CALLE 165 - BERISSO",
                        "identificadorParada": "BE2346",
                        "descripcion": "2346",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024216
                    }
                ]
            },
            {
                "codigoInterseccion": 3505,
                "descripcion": "CALLE 155 - BERISSO",
                "codCalle": 3483,
                "createdAt": 1689953020645,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3483,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 18 - BERISSO",
                        "codigoInterseccion": 3505,
                        "descripcionInterseccion": "CALLE 155 - BERISSO",
                        "identificadorParada": "BE5409",
                        "descripcion": "5409",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024983
                    }
                ]
            },
            {
                "codigoInterseccion": 3490,
                "descripcion": "CALLE 156 - BERISSO",
                "codCalle": 3483,
                "createdAt": 1689953020645,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3483,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 18 - BERISSO",
                        "codigoInterseccion": 3490,
                        "descripcionInterseccion": "CALLE 156 - BERISSO",
                        "identificadorParada": "BE5410",
                        "descripcion": "5410",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024999
                    }
                ]
            },
            {
                "codigoInterseccion": 3480,
                "descripcion": "CALLE 157 - BERISSO",
                "codCalle": 3483,
                "createdAt": 1689953020645,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3483,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 18 - BERISSO",
                        "codigoInterseccion": 3480,
                        "descripcionInterseccion": "CALLE 157 - BERISSO",
                        "identificadorParada": "BE5411",
                        "descripcion": "5411",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024949
                    }
                ]
            },
            {
                "codigoInterseccion": 3479,
                "descripcion": "CALLE 159 - BERISSO",
                "codCalle": 3483,
                "createdAt": 1689953020645,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3483,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 18 - BERISSO",
                        "codigoInterseccion": 3479,
                        "descripcionInterseccion": "CALLE 159 - BERISSO",
                        "identificadorParada": "BE5412",
                        "descripcion": "5412",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024985
                    }
                ]
            },
            {
                "codigoInterseccion": 3478,
                "descripcion": "CALLE 161 - BERISSO",
                "codCalle": 3483,
                "createdAt": 1689953020645,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3483,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 18 - BERISSO",
                        "codigoInterseccion": 3478,
                        "descripcionInterseccion": "CALLE 161 - BERISSO",
                        "identificadorParada": "BE5413",
                        "descripcion": "5413",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024950
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3626,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 2 - LA PLATA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3625,
                "descripcion": "AVENIDA 44 - LA PLATA",
                "codCalle": 3626,
                "createdAt": 1689953020672,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3626,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 2 - LA PLATA",
                        "codigoInterseccion": 3625,
                        "descripcionInterseccion": "AVENIDA 44 - LA PLATA",
                        "identificadorParada": "LP1764",
                        "descripcion": "1764",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024915
                    }
                ]
            },
            {
                "codigoInterseccion": 4070,
                "descripcion": "CALLE 42 - LA PLATA",
                "codCalle": 3626,
                "createdAt": 1689953020672,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3626,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 2 - LA PLATA",
                        "codigoInterseccion": 4070,
                        "descripcionInterseccion": "CALLE 42 - LA PLATA",
                        "identificadorParada": "LP2351",
                        "descripcion": "2351",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024949
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3746,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 24 - LA PLATA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3759,
                "descripcion": "AVENIDA 66 - LA PLATA",
                "codCalle": 3746,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3746,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 24 - LA PLATA",
                        "codigoInterseccion": 3759,
                        "descripcionInterseccion": "AVENIDA 66 - LA PLATA",
                        "identificadorParada": "LP1687",
                        "descripcion": "LP1687",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024983
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3432,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 26 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3481,
                "descripcion": "CALLE 158 - BERISSO",
                "codCalle": 3432,
                "createdAt": 1689953020639,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3432,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 26 - BERISSO",
                        "codigoInterseccion": 3481,
                        "descripcionInterseccion": "CALLE 158 - BERISSO",
                        "identificadorParada": "BE2319",
                        "descripcion": "2319",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024948
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3432,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 26 - BERISSO",
                        "codigoInterseccion": 3481,
                        "descripcionInterseccion": "CALLE 158 - BERISSO",
                        "identificadorParada": "BE2322",
                        "descripcion": "2322",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024948
                    }
                ]
            },
            {
                "codigoInterseccion": 3467,
                "descripcion": "CALLE 160 - BERISSO",
                "codCalle": 3432,
                "createdAt": 1689953020639,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3432,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 26 - BERISSO",
                        "codigoInterseccion": 3467,
                        "descripcionInterseccion": "CALLE 160 - BERISSO",
                        "identificadorParada": "BE2320",
                        "descripcion": "2320",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024949
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3432,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 26 - BERISSO",
                        "codigoInterseccion": 3467,
                        "descripcionInterseccion": "CALLE 160 - BERISSO",
                        "identificadorParada": "BE2321",
                        "descripcion": "2321",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024949
                    }
                ]
            },
            {
                "codigoInterseccion": 3466,
                "descripcion": "CALLE 162 - BERISSO",
                "codCalle": 3432,
                "createdAt": 1689953020639,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3432,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 26 - BERISSO",
                        "codigoInterseccion": 3466,
                        "descripcionInterseccion": "CALLE 162 - BERISSO",
                        "identificadorParada": "BE2330",
                        "descripcion": "2330",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024973
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3432,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 26 - BERISSO",
                        "codigoInterseccion": 3466,
                        "descripcionInterseccion": "CALLE 162 - BERISSO",
                        "identificadorParada": "BE2410",
                        "descripcion": "2410",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024973
                    }
                ]
            },
            {
                "codigoInterseccion": 3482,
                "descripcion": "CALLE 163 - BERISSO",
                "codCalle": 3432,
                "createdAt": 1689953020639,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3432,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 26 - BERISSO",
                        "codigoInterseccion": 3482,
                        "descripcionInterseccion": "CALLE 163 - BERISSO",
                        "identificadorParada": "BE2332",
                        "descripcion": "2332",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024933
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3432,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 26 - BERISSO",
                        "codigoInterseccion": 3482,
                        "descripcionInterseccion": "CALLE 163 - BERISSO",
                        "identificadorParada": "BE2409",
                        "descripcion": "2409",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024933
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3748,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 26 - LA PLATA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3780,
                "descripcion": "CALLE 67 - LA PLATA",
                "codCalle": 3748,
                "createdAt": 1689953020643,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3748,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 26 - LA PLATA",
                        "codigoInterseccion": 3780,
                        "descripcionInterseccion": "CALLE 67 - LA PLATA",
                        "identificadorParada": "LP1693",
                        "descripcion": "1693",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024983
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3436,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 30 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3457,
                "descripcion": "173 NORTE - BERISSO",
                "codCalle": 3436,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3436,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 30 - BERISSO",
                        "codigoInterseccion": 3457,
                        "descripcionInterseccion": "173 NORTE - BERISSO",
                        "identificadorParada": "BE2106",
                        "descripcion": "2106",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024992
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3436,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 30 - BERISSO",
                        "codigoInterseccion": 3457,
                        "descripcionInterseccion": "173 NORTE - BERISSO",
                        "identificadorParada": "BE2131",
                        "descripcion": "2131",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024992
                    }
                ]
            },
            {
                "codigoInterseccion": 3415,
                "descripcion": "AVENIDA MONTEVIDEO - BERISSO",
                "codCalle": 3436,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3436,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 30 - BERISSO",
                        "codigoInterseccion": 3415,
                        "descripcionInterseccion": "AVENIDA MONTEVIDEO - BERISSO",
                        "identificadorParada": "BE2107",
                        "descripcion": "2107",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024986
                    }
                ]
            },
            {
                "codigoInterseccion": 3468,
                "descripcion": "PUNTA PIEDRAS - BERISSO",
                "codCalle": 3436,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3436,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 30 - BERISSO",
                        "codigoInterseccion": 3468,
                        "descripcionInterseccion": "PUNTA PIEDRAS - BERISSO",
                        "identificadorParada": "BE2130",
                        "descripcion": "2130",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024972
                    }
                ]
            },
            {
                "codigoInterseccion": 3455,
                "descripcion": "AVENIDA N. H. BEGUIN - BERISSO",
                "codCalle": 3436,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3436,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 30 - BERISSO",
                        "codigoInterseccion": 3455,
                        "descripcionInterseccion": "AVENIDA N. H. BEGUIN - BERISSO",
                        "identificadorParada": "BE2132",
                        "descripcion": "2132",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024935
                    }
                ]
            },
            {
                "codigoInterseccion": 3461,
                "descripcion": "CALLE 172 - BERISSO",
                "codCalle": 3436,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3436,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 30 - BERISSO",
                        "codigoInterseccion": 3461,
                        "descripcionInterseccion": "CALLE 172 - BERISSO",
                        "identificadorParada": "BE2300",
                        "descripcion": "2300",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024997
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3436,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 30 - BERISSO",
                        "codigoInterseccion": 3461,
                        "descripcionInterseccion": "CALLE 172 - BERISSO",
                        "identificadorParada": "BE5424",
                        "descripcion": "5424",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024997
                    }
                ]
            },
            {
                "codigoInterseccion": 3474,
                "descripcion": "CALLE 170 - BERISSO",
                "codCalle": 3436,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3436,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 30 - BERISSO",
                        "codigoInterseccion": 3474,
                        "descripcionInterseccion": "CALLE 170 - BERISSO",
                        "identificadorParada": "BE2302",
                        "descripcion": "2302",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024950
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3436,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 30 - BERISSO",
                        "codigoInterseccion": 3474,
                        "descripcionInterseccion": "CALLE 170 - BERISSO",
                        "identificadorParada": "BE5423",
                        "descripcion": "5423",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024950
                    }
                ]
            },
            {
                "codigoInterseccion": 3475,
                "descripcion": "CALLE 168 - BERISSO",
                "codCalle": 3436,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3436,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 30 - BERISSO",
                        "codigoInterseccion": 3475,
                        "descripcionInterseccion": "CALLE 168 - BERISSO",
                        "identificadorParada": "BE2304",
                        "descripcion": "2304",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024966
                    }
                ]
            },
            {
                "codigoInterseccion": 3476,
                "descripcion": "CALLE 166 - BERISSO",
                "codCalle": 3436,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3436,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 30 - BERISSO",
                        "codigoInterseccion": 3476,
                        "descripcionInterseccion": "CALLE 166 - BERISSO",
                        "identificadorParada": "BE2306",
                        "descripcion": "2306",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024914
                    }
                ]
            },
            {
                "codigoInterseccion": 3465,
                "descripcion": "CALLE 164 - BERISSO",
                "codCalle": 3436,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3436,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 30 - BERISSO",
                        "codigoInterseccion": 3465,
                        "descripcionInterseccion": "CALLE 164 - BERISSO",
                        "identificadorParada": "BE2308",
                        "descripcion": "BE2308",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024217
                    }
                ]
            },
            {
                "codigoInterseccion": 3477,
                "descripcion": "CALLE 162 NORTE - BERISSO",
                "codCalle": 3436,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3436,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 30 - BERISSO",
                        "codigoInterseccion": 3477,
                        "descripcionInterseccion": "CALLE 162 NORTE - BERISSO",
                        "identificadorParada": "BE2310",
                        "descripcion": "2310",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024323
                    }
                ]
            },
            {
                "codigoInterseccion": 3478,
                "descripcion": "CALLE 161 - BERISSO",
                "codCalle": 3436,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3436,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 30 - BERISSO",
                        "codigoInterseccion": 3478,
                        "descripcionInterseccion": "CALLE 161 - BERISSO",
                        "identificadorParada": "BE2312",
                        "descripcion": "2312",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024323
                    }
                ]
            },
            {
                "codigoInterseccion": 3479,
                "descripcion": "CALLE 159 - BERISSO",
                "codCalle": 3436,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3436,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 30 - BERISSO",
                        "codigoInterseccion": 3479,
                        "descripcionInterseccion": "CALLE 159 - BERISSO",
                        "identificadorParada": "BE2314",
                        "descripcion": "2314",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024323
                    }
                ]
            },
            {
                "codigoInterseccion": 3481,
                "descripcion": "CALLE 158 - BERISSO",
                "codCalle": 3436,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3436,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 30 - BERISSO",
                        "codigoInterseccion": 3481,
                        "descripcionInterseccion": "CALLE 158 - BERISSO",
                        "identificadorParada": "BE2325",
                        "descripcion": "2325",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024323
                    }
                ]
            },
            {
                "codigoInterseccion": 3467,
                "descripcion": "CALLE 160 - BERISSO",
                "codCalle": 3436,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3436,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 30 - BERISSO",
                        "codigoInterseccion": 3467,
                        "descripcionInterseccion": "CALLE 160 - BERISSO",
                        "identificadorParada": "BE2326",
                        "descripcion": "2326",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024323
                    }
                ]
            },
            {
                "codigoInterseccion": 3482,
                "descripcion": "CALLE 163 - BERISSO",
                "codCalle": 3436,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3436,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 30 - BERISSO",
                        "codigoInterseccion": 3482,
                        "descripcionInterseccion": "CALLE 163 - BERISSO",
                        "identificadorParada": "BE5420",
                        "descripcion": "5420",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024999
                    }
                ]
            },
            {
                "codigoInterseccion": 3464,
                "descripcion": "CALLE 165 - BERISSO",
                "codCalle": 3436,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3436,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 30 - BERISSO",
                        "codigoInterseccion": 3464,
                        "descripcionInterseccion": "CALLE 165 - BERISSO",
                        "identificadorParada": "BE5421",
                        "descripcion": "5421",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024849
                    }
                ]
            },
            {
                "codigoInterseccion": 3522,
                "descripcion": "CALLE 167 - BERISSO",
                "codCalle": 3436,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3436,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 30 - BERISSO",
                        "codigoInterseccion": 3522,
                        "descripcionInterseccion": "CALLE 167 - BERISSO",
                        "identificadorParada": "BE5422",
                        "descripcion": "5422",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024864
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3437,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 32 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3454,
                "descripcion": "GENERAL SAVIO - BERISSO",
                "codCalle": 3437,
                "createdAt": 1689953020636,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3437,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 32 - BERISSO",
                        "codigoInterseccion": 3454,
                        "descripcionInterseccion": "GENERAL SAVIO - BERISSO",
                        "identificadorParada": "BE2103",
                        "descripcion": "2103",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024991
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3439,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 34 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3452,
                "descripcion": "SAAVEDRA - BERISSO",
                "codCalle": 3439,
                "createdAt": 1689953020668,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3439,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 34 - BERISSO",
                        "codigoInterseccion": 3452,
                        "descripcionInterseccion": "SAAVEDRA - BERISSO",
                        "identificadorParada": "BE2100",
                        "descripcion": "2100",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024848
                    }
                ]
            },
            {
                "codigoInterseccion": 3415,
                "descripcion": "AVENIDA MONTEVIDEO - BERISSO",
                "codCalle": 3439,
                "createdAt": 1689953020668,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3439,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 34 - BERISSO",
                        "codigoInterseccion": 3415,
                        "descripcionInterseccion": "AVENIDA MONTEVIDEO - BERISSO",
                        "identificadorParada": "BE2138",
                        "descripcion": "2138",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024848
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3439,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 34 - BERISSO",
                        "codigoInterseccion": 3415,
                        "descripcionInterseccion": "AVENIDA MONTEVIDEO - BERISSO",
                        "identificadorParada": "LP2386",
                        "descripcion": "2386",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024848
                    }
                ]
            },
            {
                "codigoInterseccion": 3461,
                "descripcion": "CALLE 172 - BERISSO",
                "codCalle": 3439,
                "createdAt": 1689953020668,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3439,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 34 - BERISSO",
                        "codigoInterseccion": 3461,
                        "descripcionInterseccion": "CALLE 172 - BERISSO",
                        "identificadorParada": "BE2390",
                        "descripcion": "2390",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024849
                    }
                ]
            },
            {
                "codigoInterseccion": 3488,
                "descripcion": "CALLE 169 - BERISSO",
                "codCalle": 3439,
                "createdAt": 1689953020668,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3439,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 34 - BERISSO",
                        "codigoInterseccion": 3488,
                        "descripcionInterseccion": "CALLE 169 - BERISSO",
                        "identificadorParada": "BE2392",
                        "descripcion": "2392",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024999
                    }
                ]
            },
            {
                "codigoInterseccion": 3474,
                "descripcion": "CALLE 170 - BERISSO",
                "codCalle": 3439,
                "createdAt": 1689953020668,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3439,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 34 - BERISSO",
                        "codigoInterseccion": 3474,
                        "descripcionInterseccion": "CALLE 170 - BERISSO",
                        "identificadorParada": "BE2394",
                        "descripcion": "2394",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024848
                    }
                ]
            },
            {
                "codigoInterseccion": 3462,
                "descripcion": "CALLE 173 - BERISSO",
                "codCalle": 3439,
                "createdAt": 1689953020668,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3439,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 34 - BERISSO",
                        "codigoInterseccion": 3462,
                        "descripcionInterseccion": "CALLE 173 - BERISSO",
                        "identificadorParada": "BE2396",
                        "descripcion": "2396",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024848
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3439,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 34 - BERISSO",
                        "codigoInterseccion": 3462,
                        "descripcionInterseccion": "CALLE 173 - BERISSO",
                        "identificadorParada": "LP2388",
                        "descripcion": "2388",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024848
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3440,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 36 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3495,
                "descripcion": "CALLE 127 - BERISSO",
                "codCalle": 3440,
                "createdAt": 1689953020645,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3440,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 36 - BERISSO",
                        "codigoInterseccion": 3495,
                        "descripcionInterseccion": "CALLE 127 - BERISSO",
                        "identificadorParada": "BE8008",
                        "descripcion": "BE8008",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024914
                    }
                ]
            },
            {
                "codigoInterseccion": 3513,
                "descripcion": "CALLE 126 - BERISSO",
                "codCalle": 3440,
                "createdAt": 1689953020645,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3440,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 36 - BERISSO",
                        "codigoInterseccion": 3513,
                        "descripcionInterseccion": "CALLE 126 - BERISSO",
                        "identificadorParada": "BE8009",
                        "descripcion": "BE8009",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024849
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3417,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 4 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3484,
                "descripcion": "CALE 166 - BERISSO",
                "codCalle": 3417,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3417,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 4 - BERISSO",
                        "codigoInterseccion": 3484,
                        "descripcionInterseccion": "CALE 166 - BERISSO",
                        "identificadorParada": "BE2348",
                        "descripcion": "2348",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024983
                    }
                ]
            },
            {
                "codigoInterseccion": 3465,
                "descripcion": "CALLE 164 - BERISSO",
                "codCalle": 3417,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3417,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 4 - BERISSO",
                        "codigoInterseccion": 3465,
                        "descripcionInterseccion": "CALLE 164 - BERISSO",
                        "identificadorParada": "BE2350",
                        "descripcion": "2350",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024866
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3417,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 4 - BERISSO",
                        "codigoInterseccion": 3465,
                        "descripcionInterseccion": "CALLE 164 - BERISSO",
                        "identificadorParada": "BE2353",
                        "descripcion": "2353",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024866
                    }
                ]
            },
            {
                "codigoInterseccion": 3415,
                "descripcion": "AVENIDA MONTEVIDEO - BERISSO",
                "codCalle": 3417,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3417,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 4 - BERISSO",
                        "codigoInterseccion": 3415,
                        "descripcionInterseccion": "AVENIDA MONTEVIDEO - BERISSO",
                        "identificadorParada": "BE2351",
                        "descripcion": "2351",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024848
                    }
                ]
            },
            {
                "codigoInterseccion": 3466,
                "descripcion": "CALLE 162 - BERISSO",
                "codCalle": 3417,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3417,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 4 - BERISSO",
                        "codigoInterseccion": 3466,
                        "descripcionInterseccion": "CALLE 162 - BERISSO",
                        "identificadorParada": "BE2352",
                        "descripcion": "2352",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023154
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3417,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 4 - BERISSO",
                        "codigoInterseccion": 3466,
                        "descripcionInterseccion": "CALLE 162 - BERISSO",
                        "identificadorParada": "BE2355",
                        "descripcion": "2355",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023154
                    }
                ]
            },
            {
                "codigoInterseccion": 3467,
                "descripcion": "CALLE 160 - BERISSO",
                "codCalle": 3417,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3417,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 4 - BERISSO",
                        "codigoInterseccion": 3467,
                        "descripcionInterseccion": "CALLE 160 - BERISSO",
                        "identificadorParada": "BE2354",
                        "descripcion": "2354",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023041
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3417,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 4 - BERISSO",
                        "codigoInterseccion": 3467,
                        "descripcionInterseccion": "CALLE 160 - BERISSO",
                        "identificadorParada": "BE2357",
                        "descripcion": "2357",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023041
                    }
                ]
            },
            {
                "codigoInterseccion": 3479,
                "descripcion": "CALLE 159 - BERISSO",
                "codCalle": 3417,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3417,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 4 - BERISSO",
                        "codigoInterseccion": 3479,
                        "descripcionInterseccion": "CALLE 159 - BERISSO",
                        "identificadorParada": "BE2356",
                        "descripcion": "2356",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3417,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 4 - BERISSO",
                        "codigoInterseccion": 3479,
                        "descripcionInterseccion": "CALLE 159 - BERISSO",
                        "identificadorParada": "BE2359",
                        "descripcion": "2359",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    }
                ]
            },
            {
                "codigoInterseccion": 3481,
                "descripcion": "CALLE 158 - BERISSO",
                "codCalle": 3417,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3417,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 4 - BERISSO",
                        "codigoInterseccion": 3481,
                        "descripcionInterseccion": "CALLE 158 - BERISSO",
                        "identificadorParada": "BE2358",
                        "descripcion": "2358",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024911
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3417,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 4 - BERISSO",
                        "codigoInterseccion": 3481,
                        "descripcionInterseccion": "CALLE 158 - BERISSO",
                        "identificadorParada": "BE2460",
                        "descripcion": "2460",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024911
                    }
                ]
            },
            {
                "codigoInterseccion": 3480,
                "descripcion": "CALLE 157 - BERISSO",
                "codCalle": 3417,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3417,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 4 - BERISSO",
                        "codigoInterseccion": 3480,
                        "descripcionInterseccion": "CALLE 157 - BERISSO",
                        "identificadorParada": "BE2360",
                        "descripcion": "2360",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023058
                    }
                ]
            },
            {
                "codigoInterseccion": 3485,
                "descripcion": "CALLE 153 - BERISSO",
                "codCalle": 3417,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3417,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 4 - BERISSO",
                        "codigoInterseccion": 3485,
                        "descripcionInterseccion": "CALLE 153 - BERISSO",
                        "identificadorParada": "BE2362",
                        "descripcion": "2362",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023309
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3417,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 4 - BERISSO",
                        "codigoInterseccion": 3485,
                        "descripcionInterseccion": "CALLE 153 - BERISSO",
                        "identificadorParada": "BE2463",
                        "descripcion": "2463",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023309
                    }
                ]
            },
            {
                "codigoInterseccion": 3486,
                "descripcion": "CALLE 151 - BERISSO",
                "codCalle": 3417,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3417,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 4 - BERISSO",
                        "codigoInterseccion": 3486,
                        "descripcionInterseccion": "CALLE 151 - BERISSO",
                        "identificadorParada": "BE2364",
                        "descripcion": "2364",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3417,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 4 - BERISSO",
                        "codigoInterseccion": 3486,
                        "descripcionInterseccion": "CALLE 151 - BERISSO",
                        "identificadorParada": "BE2365",
                        "descripcion": "2365",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    }
                ]
            },
            {
                "codigoInterseccion": 3487,
                "descripcion": "CALLE 150 - BERISSO",
                "codCalle": 3417,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3417,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 4 - BERISSO",
                        "codigoInterseccion": 3487,
                        "descripcionInterseccion": "CALLE 150 - BERISSO",
                        "identificadorParada": "BE2366",
                        "descripcion": "2366",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022766
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3417,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 4 - BERISSO",
                        "codigoInterseccion": 3487,
                        "descripcionInterseccion": "CALLE 150 - BERISSO",
                        "identificadorParada": "BE2367",
                        "descripcion": "2367",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022766
                    }
                ]
            },
            {
                "codigoInterseccion": 3490,
                "descripcion": "CALLE 156 - BERISSO",
                "codCalle": 3417,
                "createdAt": 1689953020644,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3417,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 4 - BERISSO",
                        "codigoInterseccion": 3490,
                        "descripcionInterseccion": "CALLE 156 - BERISSO",
                        "identificadorParada": "BE2461",
                        "descripcion": "2461",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022828
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 4029,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 40 - LA PLATA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3626,
                "descripcion": "CALLE 2 - LA PLATA",
                "codCalle": 4029,
                "createdAt": 1689953020714,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 4029,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 40 - LA PLATA",
                        "codigoInterseccion": 3626,
                        "descripcionInterseccion": "CALLE 2 - LA PLATA",
                        "identificadorParada": "LP11900",
                        "descripcion": "LP11900",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022921
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3445,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 42 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3461,
                "descripcion": "CALLE 172 - BERISSO",
                "codCalle": 3445,
                "createdAt": 1689953020645,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3445,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 42 - BERISSO",
                        "codigoInterseccion": 3461,
                        "descripcionInterseccion": "CALLE 172 - BERISSO",
                        "identificadorParada": "BE2114",
                        "descripcion": "2114",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022832
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3445,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 42 - BERISSO",
                        "codigoInterseccion": 3461,
                        "descripcionInterseccion": "CALLE 172 - BERISSO",
                        "identificadorParada": "BE2142",
                        "descripcion": "2142",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022832
                    }
                ]
            },
            {
                "codigoInterseccion": 3462,
                "descripcion": "CALLE 173 - BERISSO",
                "codCalle": 3445,
                "createdAt": 1689953020645,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3445,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 42 - BERISSO",
                        "codigoInterseccion": 3462,
                        "descripcionInterseccion": "CALLE 173 - BERISSO",
                        "identificadorParada": "BE2115",
                        "descripcion": "2115",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023058
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3445,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 42 - BERISSO",
                        "codigoInterseccion": 3462,
                        "descripcionInterseccion": "CALLE 173 - BERISSO",
                        "identificadorParada": "BE2140",
                        "descripcion": "2140",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023058
                    }
                ]
            },
            {
                "codigoInterseccion": 34394,
                "descripcion": "CALLE 174 - BERISSO",
                "codCalle": 3445,
                "createdAt": 1689953020645,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3445,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 42 - BERISSO",
                        "codigoInterseccion": 34394,
                        "descripcionInterseccion": "CALLE 174 - BERISSO",
                        "identificadorParada": "BE2116",
                        "descripcion": "2116",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024914
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3445,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 42 - BERISSO",
                        "codigoInterseccion": 34394,
                        "descripcionInterseccion": "CALLE 174 - BERISSO",
                        "identificadorParada": "BE2139",
                        "descripcion": "2139",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024914
                    }
                ]
            },
            {
                "codigoInterseccion": 3512,
                "descripcion": "CALLE 171 - BERISSO",
                "codCalle": 3445,
                "createdAt": 1689953020645,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3445,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 42 - BERISSO",
                        "codigoInterseccion": 3512,
                        "descripcionInterseccion": "CALLE 171 - BERISSO",
                        "identificadorParada": "BE2141",
                        "descripcion": "2141",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024956
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 4070,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 42 - LA PLATA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 4032,
                "descripcion": "CALLE 3 - LA PLATA",
                "codCalle": 4070,
                "createdAt": 1689953020645,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 4070,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 42 - LA PLATA",
                        "codigoInterseccion": 4032,
                        "descripcionInterseccion": "CALLE 3 - LA PLATA",
                        "identificadorParada": "LP2355",
                        "descripcion": "2355",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023972
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3458,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 45 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3462,
                "descripcion": "CALLE 173 - BERISSO",
                "codCalle": 3458,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3458,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 45 - BERISSO",
                        "codigoInterseccion": 3462,
                        "descripcionInterseccion": "CALLE 173 - BERISSO",
                        "identificadorParada": "BE2109",
                        "descripcion": "2109",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024056
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3458,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 45 - BERISSO",
                        "codigoInterseccion": 3462,
                        "descripcionInterseccion": "CALLE 173 - BERISSO",
                        "identificadorParada": "BE2146",
                        "descripcion": "2146",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024056
                    }
                ]
            },
            {
                "codigoInterseccion": 3461,
                "descripcion": "CALLE 172 - BERISSO",
                "codCalle": 3458,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3458,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 45 - BERISSO",
                        "codigoInterseccion": 3461,
                        "descripcionInterseccion": "CALLE 172 - BERISSO",
                        "identificadorParada": "BE2110",
                        "descripcion": "2110",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024182
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3458,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 45 - BERISSO",
                        "codigoInterseccion": 3461,
                        "descripcionInterseccion": "CALLE 172 - BERISSO",
                        "identificadorParada": "BE2145",
                        "descripcion": "2145",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024182
                    }
                ]
            },
            {
                "codigoInterseccion": 3512,
                "descripcion": "CALLE 171 - BERISSO",
                "codCalle": 3458,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3458,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 45 - BERISSO",
                        "codigoInterseccion": 3512,
                        "descripcionInterseccion": "CALLE 171 - BERISSO",
                        "identificadorParada": "BE2111",
                        "descripcion": "2111",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022907
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3643,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 54 - LA PLATA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3663,
                "descripcion": "AVENIDA 7 - LA PLATA",
                "codCalle": 3643,
                "createdAt": 1689953020645,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3643,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 54 - LA PLATA",
                        "codigoInterseccion": 3663,
                        "descripcionInterseccion": "AVENIDA 7 - LA PLATA",
                        "identificadorParada": "LP11799",
                        "descripcion": "11799",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022881
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3628,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 64 - LA PLATA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3627,
                "descripcion": "CALLE 14 - LA PLATA",
                "codCalle": 3628,
                "createdAt": 1689953020650,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3628,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 64 - LA PLATA",
                        "codigoInterseccion": 3627,
                        "descripcionInterseccion": "CALLE 14 - LA PLATA",
                        "identificadorParada": "LP1543",
                        "descripcion": "LP1543",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024163
                    }
                ]
            },
            {
                "codigoInterseccion": 3675,
                "descripcion": "CALLE 12 - LA PLATA",
                "codCalle": 3628,
                "createdAt": 1689953020650,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3628,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 64 - LA PLATA",
                        "codigoInterseccion": 3675,
                        "descripcionInterseccion": "CALLE 12 - LA PLATA",
                        "identificadorParada": "LP3398",
                        "descripcion": "LP3398",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022843
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 4016,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 65 - LA PLATA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3747,
                "descripcion": "AVENIDA 25 - LA PLATA",
                "codCalle": 4016,
                "createdAt": 1689953020682,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 4016,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 65 - LA PLATA",
                        "codigoInterseccion": 3747,
                        "descripcionInterseccion": "AVENIDA 25 - LA PLATA",
                        "identificadorParada": "LP1694",
                        "descripcion": "LP1694",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022889
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3780,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 67 - LA PLATA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3747,
                "descripcion": "AVENIDA 25 - LA PLATA",
                "codCalle": 3780,
                "createdAt": 1689953020716,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3780,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 67 - LA PLATA",
                        "codigoInterseccion": 3747,
                        "descripcionInterseccion": "AVENIDA 25 - LA PLATA",
                        "identificadorParada": "LP1691",
                        "descripcion": "1691",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022907
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3463,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 7 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3464,
                "descripcion": "CALLE 165 - BERISSO",
                "codCalle": 3463,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3463,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 7 - BERISSO",
                        "codigoInterseccion": 3464,
                        "descripcionInterseccion": "CALLE 165 - BERISSO",
                        "identificadorParada": "BE2117",
                        "descripcion": "2117",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022922
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3463,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 7 - BERISSO",
                        "codigoInterseccion": 3464,
                        "descripcionInterseccion": "CALLE 165 - BERISSO",
                        "identificadorParada": "BE5123",
                        "descripcion": "5123",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022922
                    }
                ]
            },
            {
                "codigoInterseccion": 3465,
                "descripcion": "CALLE 164 - BERISSO",
                "codCalle": 3463,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3463,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 7 - BERISSO",
                        "codigoInterseccion": 3465,
                        "descripcionInterseccion": "CALLE 164 - BERISSO",
                        "identificadorParada": "BE2118",
                        "descripcion": "2118",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022907
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3463,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 7 - BERISSO",
                        "codigoInterseccion": 3465,
                        "descripcionInterseccion": "CALLE 164 - BERISSO",
                        "identificadorParada": "BE5121",
                        "descripcion": "5121",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022907
                    }
                ]
            },
            {
                "codigoInterseccion": 3466,
                "descripcion": "CALLE 162 - BERISSO",
                "codCalle": 3463,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3463,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 7 - BERISSO",
                        "codigoInterseccion": 3466,
                        "descripcionInterseccion": "CALLE 162 - BERISSO",
                        "identificadorParada": "BE2119",
                        "descripcion": "2119",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022921
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3463,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 7 - BERISSO",
                        "codigoInterseccion": 3466,
                        "descripcionInterseccion": "CALLE 162 - BERISSO",
                        "identificadorParada": "BE5313",
                        "descripcion": "5313",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022921
                    }
                ]
            },
            {
                "codigoInterseccion": 3467,
                "descripcion": "CALLE 160 - BERISSO",
                "codCalle": 3463,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3463,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 7 - BERISSO",
                        "codigoInterseccion": 3467,
                        "descripcionInterseccion": "CALLE 160 - BERISSO",
                        "identificadorParada": "BE2120",
                        "descripcion": "2120",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022917
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3463,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 7 - BERISSO",
                        "codigoInterseccion": 3467,
                        "descripcionInterseccion": "CALLE 160 - BERISSO",
                        "identificadorParada": "BE5311",
                        "descripcion": "5311",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022917
                    }
                ]
            },
            {
                "codigoInterseccion": 3486,
                "descripcion": "CALLE 151 - BERISSO",
                "codCalle": 3463,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3463,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 7 - BERISSO",
                        "codigoInterseccion": 3486,
                        "descripcionInterseccion": "CALLE 151 - BERISSO",
                        "identificadorParada": "BE5117",
                        "descripcion": "5117",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022907
                    }
                ]
            },
            {
                "codigoInterseccion": 3505,
                "descripcion": "CALLE 155 - BERISSO",
                "codCalle": 3463,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3463,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 7 - BERISSO",
                        "codigoInterseccion": 3505,
                        "descripcionInterseccion": "CALLE 155 - BERISSO",
                        "identificadorParada": "BE5305",
                        "descripcion": "5305",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022907
                    }
                ]
            },
            {
                "codigoInterseccion": 3490,
                "descripcion": "CALLE 156 - BERISSO",
                "codCalle": 3463,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3463,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 7 - BERISSO",
                        "codigoInterseccion": 3490,
                        "descripcionInterseccion": "CALLE 156 - BERISSO",
                        "identificadorParada": "BE5307",
                        "descripcion": "5307",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022922
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3463,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 7 - BERISSO",
                        "codigoInterseccion": 3490,
                        "descripcionInterseccion": "CALLE 156 - BERISSO",
                        "identificadorParada": "BE6008",
                        "descripcion": "6008",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022922
                    }
                ]
            },
            {
                "codigoInterseccion": 3481,
                "descripcion": "CALLE 158 - BERISSO",
                "codCalle": 3463,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3463,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 7 - BERISSO",
                        "codigoInterseccion": 3481,
                        "descripcionInterseccion": "CALLE 158 - BERISSO",
                        "identificadorParada": "BE5309",
                        "descripcion": "5309",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022922
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3463,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 7 - BERISSO",
                        "codigoInterseccion": 3481,
                        "descripcionInterseccion": "CALLE 158 - BERISSO",
                        "identificadorParada": "BE6000",
                        "descripcion": "6000",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022922
                    }
                ]
            },
            {
                "codigoInterseccion": 3485,
                "descripcion": "CALLE 153 - BERISSO",
                "codCalle": 3463,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3463,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 7 - BERISSO",
                        "codigoInterseccion": 3485,
                        "descripcionInterseccion": "CALLE 153 - BERISSO",
                        "identificadorParada": "BE6010",
                        "descripcion": "6010",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022922
                    }
                ]
            },
            {
                "codigoInterseccion": 3487,
                "descripcion": "CALLE 150 - BERISSO",
                "codCalle": 3463,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3463,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 7 - BERISSO",
                        "codigoInterseccion": 3487,
                        "descripcionInterseccion": "CALLE 150 - BERISSO",
                        "identificadorParada": "BE6012",
                        "descripcion": "6012",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022907
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3421,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE 9 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3480,
                "descripcion": "CALLE 157 - BERISSO",
                "codCalle": 3421,
                "createdAt": 1689953020716,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3421,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 9 - BERISSO",
                        "codigoInterseccion": 3480,
                        "descripcionInterseccion": "CALLE 157 - BERISSO",
                        "identificadorParada": "BE5401",
                        "descripcion": "5401",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022930
                    }
                ]
            },
            {
                "codigoInterseccion": 3505,
                "descripcion": "CALLE 155 - BERISSO",
                "codCalle": 3421,
                "createdAt": 1689953020716,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3421,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 9 - BERISSO",
                        "codigoInterseccion": 3505,
                        "descripcionInterseccion": "CALLE 155 - BERISSO",
                        "identificadorParada": "BE5402",
                        "descripcion": "5402",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022962
                    }
                ]
            },
            {
                "codigoInterseccion": 3520,
                "descripcion": "CALLE 154 - BERISSO",
                "codCalle": 3421,
                "createdAt": 1689953020716,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3421,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE 9 - BERISSO",
                        "codigoInterseccion": 3520,
                        "descripcionInterseccion": "CALLE 154 - BERISSO",
                        "identificadorParada": "BE5403",
                        "descripcion": "5403",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022925
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3532,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE GILBERTO GAGGINO - ENSENADA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3533,
                "descripcion": "HOLANDA - ENSENADA",
                "codCalle": 3532,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3532,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE GILBERTO GAGGINO - ENSENADA",
                        "codigoInterseccion": 3533,
                        "descripcionInterseccion": "HOLANDA - ENSENADA",
                        "identificadorParada": "EDA2006",
                        "descripcion": "EDA2006",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022962
                    }
                ]
            },
            {
                "codigoInterseccion": 3534,
                "descripcion": "AUSTRIA - ENSENADA",
                "codCalle": 3532,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3532,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE GILBERTO GAGGINO - ENSENADA",
                        "codigoInterseccion": 3534,
                        "descripcionInterseccion": "AUSTRIA - ENSENADA",
                        "identificadorParada": "EDA2008",
                        "descripcion": "EDA2008",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022925
                    }
                ]
            },
            {
                "codigoInterseccion": 3535,
                "descripcion": "ITALIA - ENSENADA",
                "codCalle": 3532,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3532,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE GILBERTO GAGGINO - ENSENADA",
                        "codigoInterseccion": 3535,
                        "descripcionInterseccion": "ITALIA - ENSENADA",
                        "identificadorParada": "EDA2010",
                        "descripcion": "EDA2010",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023018
                    }
                ]
            },
            {
                "codigoInterseccion": 3536,
                "descripcion": "ORTIZ DE ROSAS - ENSENADA",
                "codCalle": 3532,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3532,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE GILBERTO GAGGINO - ENSENADA",
                        "codigoInterseccion": 3536,
                        "descripcionInterseccion": "ORTIZ DE ROSAS - ENSENADA",
                        "identificadorParada": "EDA2012",
                        "descripcion": "EDA2012",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022993
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 26912,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE LA MERCED - ENSENADA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 26913,
                "descripcion": "CALLE ALBERDI - ENSENADA",
                "codCalle": 26912,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 26912,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE LA MERCED - ENSENADA",
                        "codigoInterseccion": 26913,
                        "descripcionInterseccion": "CALLE ALBERDI - ENSENADA",
                        "identificadorParada": "EDA2016",
                        "descripcion": "EDA2016",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022962
                    }
                ]
            },
            {
                "codigoInterseccion": 26914,
                "descripcion": "CALLE MARQUÉS DE AVILÉS - ENSENADA",
                "codCalle": 26912,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 26912,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE LA MERCED - ENSENADA",
                        "codigoInterseccion": 26914,
                        "descripcionInterseccion": "CALLE MARQUÉS DE AVILÉS - ENSENADA",
                        "identificadorParada": "EDA2018",
                        "descripcion": "EDA2018",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023019
                    }
                ]
            },
            {
                "codigoInterseccion": 26915,
                "descripcion": "CALLE PERÚ - ENSENADA",
                "codCalle": 26912,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 26912,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE LA MERCED - ENSENADA",
                        "codigoInterseccion": 26915,
                        "descripcionInterseccion": "CALLE PERÚ - ENSENADA",
                        "identificadorParada": "EDA2020",
                        "descripcion": "EDA2020",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022987
                    }
                ]
            },
            {
                "codigoInterseccion": 26916,
                "descripcion": "CALLE LA PAZ - ENSENADA",
                "codCalle": 26912,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 26912,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE LA MERCED - ENSENADA",
                        "codigoInterseccion": 26916,
                        "descripcionInterseccion": "CALLE LA PAZ - ENSENADA",
                        "identificadorParada": "EDA2022",
                        "descripcion": "EDA2022",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    }
                ]
            },
            {
                "codigoInterseccion": 26917,
                "descripcion": "CALLE DON BOSCO - ENSENADA",
                "codCalle": 26912,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 26912,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE LA MERCED - ENSENADA",
                        "codigoInterseccion": 26917,
                        "descripcionInterseccion": "CALLE DON BOSCO - ENSENADA",
                        "identificadorParada": "EDA2024",
                        "descripcion": "EDA2024",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022993
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 26910,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE ORTIZ DE ROSAS - ENSENADA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 26911,
                "descripcion": "CAALE J. MARÍA JEREZ (POLIDEPORTIVO) - ENSENADA",
                "codCalle": 26910,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 26910,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE ORTIZ DE ROSAS - ENSENADA",
                        "codigoInterseccion": 26911,
                        "descripcionInterseccion": "CAALE J. MARÍA JEREZ (POLIDEPORTIVO) - ENSENADA",
                        "identificadorParada": "EDA2014",
                        "descripcion": "EDA2014",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022993
                    }
                ]
            },
            {
                "codigoInterseccion": 26921,
                "descripcion": "CALLE J.M.JEREZ - ENSENADA",
                "codCalle": 26910,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 26910,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE ORTIZ DE ROSAS - ENSENADA",
                        "codigoInterseccion": 26921,
                        "descripcionInterseccion": "CALLE J.M.JEREZ - ENSENADA",
                        "identificadorParada": "EDA2204",
                        "descripcion": "EDA2204",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 26918,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE PRESIDENTE PERÓN - ENSENADA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 26919,
                "descripcion": "CALLE SIDOTTI - ENSENADA",
                "codCalle": 26918,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 26918,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE PRESIDENTE PERÓN - ENSENADA",
                        "codigoInterseccion": 26919,
                        "descripcionInterseccion": "CALLE SIDOTTI - ENSENADA",
                        "identificadorParada": "EDA2199",
                        "descripcion": "EDA2199",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 26919,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "CALLE SIDOTTI - ENSENADA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 26920,
                "descripcion": "CALLE FERELLA - ENSENADA",
                "codCalle": 26919,
                "createdAt": 1689953020716,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 26919,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE SIDOTTI - ENSENADA",
                        "codigoInterseccion": 26920,
                        "descripcionInterseccion": "CALLE FERELLA - ENSENADA",
                        "identificadorParada": "EDA2200",
                        "descripcion": "EDA2200",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022993
                    }
                ]
            },
            {
                "codigoInterseccion": 26915,
                "descripcion": "CALLE PERÚ - ENSENADA",
                "codCalle": 26919,
                "createdAt": 1689953020716,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 26919,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE SIDOTTI - ENSENADA",
                        "codigoInterseccion": 26915,
                        "descripcionInterseccion": "CALLE PERÚ - ENSENADA",
                        "identificadorParada": "EDA2201",
                        "descripcion": "EDA2201",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022930
                    }
                ]
            },
            {
                "codigoInterseccion": 26914,
                "descripcion": "CALLE MARQUÉS DE AVILÉS - ENSENADA",
                "codCalle": 26919,
                "createdAt": 1689953020716,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 26919,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE SIDOTTI - ENSENADA",
                        "codigoInterseccion": 26914,
                        "descripcionInterseccion": "CALLE MARQUÉS DE AVILÉS - ENSENADA",
                        "identificadorParada": "EDA2202",
                        "descripcion": "EDA2202",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022993
                    }
                ]
            },
            {
                "codigoInterseccion": 3616,
                "descripcion": "AVENIDA HORACIO CESTINO - VIEJA ESTACION - ENSENADA",
                "codCalle": 26919,
                "createdAt": 1689953020716,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 26919,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "CALLE SIDOTTI - ENSENADA",
                        "codigoInterseccion": 3616,
                        "descripcionInterseccion": "AVENIDA HORACIO CESTINO - VIEJA ESTACION - ENSENADA",
                        "identificadorParada": "EDA2203",
                        "descripcion": "EDA2203",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022998
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3559,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "COMBATIENTES DE MALVINAS - ENSENADA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3560,
                "descripcion": "MAIPÚ - ENSENADA",
                "codCalle": 3559,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3559,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "COMBATIENTES DE MALVINAS - ENSENADA",
                        "codigoInterseccion": 3560,
                        "descripcionInterseccion": "MAIPÚ - ENSENADA",
                        "identificadorParada": "EDA2060",
                        "descripcion": "EDA2060",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022993
                    }
                ]
            },
            {
                "codigoInterseccion": 3558,
                "descripcion": "QUINTANA - ENSENADA",
                "codCalle": 3559,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3559,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "COMBATIENTES DE MALVINAS - ENSENADA",
                        "codigoInterseccion": 3558,
                        "descripcionInterseccion": "QUINTANA - ENSENADA",
                        "identificadorParada": "EDA2187",
                        "descripcion": "EDA2187",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023012
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3970,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "DIAGONAL 74 - LA PLATA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3733,
                "descripcion": "CALLE 4 - LA PLATA",
                "codCalle": 3970,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3970,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "DIAGONAL 74 - LA PLATA",
                        "codigoInterseccion": 3733,
                        "descripcionInterseccion": "CALLE 4 - LA PLATA",
                        "identificadorParada": "LP2200",
                        "descripcion": "LP2200",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022992
                    }
                ]
            },
            {
                "codigoInterseccion": 3735,
                "descripcion": "CALLE 6 - LA PLATA",
                "codCalle": 3970,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3970,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "DIAGONAL 74 - LA PLATA",
                        "codigoInterseccion": 3735,
                        "descripcionInterseccion": "CALLE 6 - LA PLATA",
                        "identificadorParada": "LP2204",
                        "descripcion": "2204",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022993
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3970,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "DIAGONAL 74 - LA PLATA",
                        "codigoInterseccion": 3735,
                        "descripcionInterseccion": "CALLE 6 - LA PLATA",
                        "identificadorParada": "LP2207",
                        "descripcion": "2207",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022993
                    }
                ]
            },
            {
                "codigoInterseccion": 3748,
                "descripcion": "CALLE 26 - LA PLATA",
                "codCalle": 3970,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3970,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "DIAGONAL 74 - LA PLATA",
                        "codigoInterseccion": 3748,
                        "descripcionInterseccion": "CALLE 26 - LA PLATA",
                        "identificadorParada": "LP2228",
                        "descripcion": "2228",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    }
                ]
            },
            {
                "codigoInterseccion": 3749,
                "descripcion": "CALLE 28 - LA PLATA",
                "codCalle": 3970,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3970,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "DIAGONAL 74 - LA PLATA",
                        "codigoInterseccion": 3749,
                        "descripcionInterseccion": "CALLE 28 - LA PLATA",
                        "identificadorParada": "LP2231",
                        "descripcion": "2231",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023019
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3970,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "DIAGONAL 74 - LA PLATA",
                        "codigoInterseccion": 3749,
                        "descripcionInterseccion": "CALLE 28 - LA PLATA",
                        "identificadorParada": "LP2232",
                        "descripcion": "LP2232",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023019
                    }
                ]
            },
            {
                "codigoInterseccion": 3750,
                "descripcion": "CALLE 30 - LA PLATA",
                "codCalle": 3970,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3970,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "DIAGONAL 74 - LA PLATA",
                        "codigoInterseccion": 3750,
                        "descripcionInterseccion": "CALLE 30 - LA PLATA",
                        "identificadorParada": "LP 2234",
                        "descripcion": "2234",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023006
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3970,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "DIAGONAL 74 - LA PLATA",
                        "codigoInterseccion": 3750,
                        "descripcionInterseccion": "CALLE 30 - LA PLATA",
                        "identificadorParada": "LP2235",
                        "descripcion": "LP2235",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023006
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3966,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "DIAGONAL 79 - LA PLATA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3968,
                "descripcion": "CALLE 59 - LA PLATA",
                "codCalle": 3966,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3966,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "DIAGONAL 79 - LA PLATA",
                        "codigoInterseccion": 3968,
                        "descripcionInterseccion": "CALLE 59 - LA PLATA",
                        "identificadorParada": "LP1960",
                        "descripcion": "1960",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022993
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3966,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "DIAGONAL 79 - LA PLATA",
                        "codigoInterseccion": 3968,
                        "descripcionInterseccion": "CALLE 59 - LA PLATA",
                        "identificadorParada": "LP1961",
                        "descripcion": "1961",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022993
                    }
                ]
            },
            {
                "codigoInterseccion": 3989,
                "descripcion": "CALLE 57 - LA PLATA",
                "codCalle": 3966,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3966,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "DIAGONAL 79 - LA PLATA",
                        "codigoInterseccion": 3989,
                        "descripcionInterseccion": "CALLE 57 - LA PLATA",
                        "identificadorParada": "LP1962",
                        "descripcion": "1962",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023134
                    }
                ]
            },
            {
                "codigoInterseccion": 3643,
                "descripcion": "CALLE 54 - LA PLATA",
                "codCalle": 3966,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3966,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "DIAGONAL 79 - LA PLATA",
                        "codigoInterseccion": 3643,
                        "descripcionInterseccion": "CALLE 54 - LA PLATA",
                        "identificadorParada": "LP1964",
                        "descripcion": "1964",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023041
                    }
                ]
            },
            {
                "codigoInterseccion": 3733,
                "descripcion": "CALLE 4 - LA PLATA",
                "codCalle": 3966,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3966,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "DIAGONAL 79 - LA PLATA",
                        "codigoInterseccion": 3733,
                        "descripcionInterseccion": "CALLE 4 - LA PLATA",
                        "identificadorParada": "LP1965",
                        "descripcion": "1965",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023060
                    }
                ]
            },
            {
                "codigoInterseccion": 3784,
                "descripcion": "CALLE 5 - LA PLATA",
                "codCalle": 3966,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3966,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "DIAGONAL 79 - LA PLATA",
                        "codigoInterseccion": 3784,
                        "descripcionInterseccion": "CALLE 5 - LA PLATA",
                        "identificadorParada": "LP1969",
                        "descripcion": "1969",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023309
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3544,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "DOCTOR A. U. ILLIA - ENSENADA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3545,
                "descripcion": "SAN MARTÍN - ENSENADA",
                "codCalle": 3544,
                "createdAt": 1689953020714,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3544,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "DOCTOR A. U. ILLIA - ENSENADA",
                        "codigoInterseccion": 3545,
                        "descripcionInterseccion": "SAN MARTÍN - ENSENADA",
                        "identificadorParada": "EDA2028",
                        "descripcion": "EDA2028",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024062
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3546,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "ECUADOR - ENSENADA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3612,
                "descripcion": "S.MARTIN Y SIDOTTI - ENSENADA",
                "codCalle": 3546,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3546,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "ECUADOR - ENSENADA",
                        "codigoInterseccion": 3612,
                        "descripcionInterseccion": "S.MARTIN Y SIDOTTI - ENSENADA",
                        "identificadorParada": "EDA2198",
                        "descripcion": "EDA2198",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024183
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3553,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "FRANCISCO CESTINO - ENSENADA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3554,
                "descripcion": "EVA PERÓN - ENSENADA",
                "codCalle": 3553,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3553,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "FRANCISCO CESTINO - ENSENADA",
                        "codigoInterseccion": 3554,
                        "descripcionInterseccion": "EVA PERÓN - ENSENADA",
                        "identificadorParada": "EDA2042",
                        "descripcion": "EDA2042",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024071
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3553,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "FRANCISCO CESTINO - ENSENADA",
                        "codigoInterseccion": 3554,
                        "descripcionInterseccion": "EVA PERÓN - ENSENADA",
                        "identificadorParada": "EDA2191",
                        "descripcion": "EDA2191",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024071
                    }
                ]
            },
            {
                "codigoInterseccion": 3555,
                "descripcion": "AVENIDA BOSSINGA - ENSENADA",
                "codCalle": 3553,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3553,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "FRANCISCO CESTINO - ENSENADA",
                        "codigoInterseccion": 3555,
                        "descripcionInterseccion": "AVENIDA BOSSINGA - ENSENADA",
                        "identificadorParada": "EDA2044",
                        "descripcion": "EDA2044",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024014
                    }
                ]
            },
            {
                "codigoInterseccion": 3545,
                "descripcion": "SAN MARTÍN - ENSENADA",
                "codCalle": 3553,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3553,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "FRANCISCO CESTINO - ENSENADA",
                        "codigoInterseccion": 3545,
                        "descripcionInterseccion": "SAN MARTÍN - ENSENADA",
                        "identificadorParada": "EDA2192",
                        "descripcion": "EDA2192",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024062
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3454,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "GENERAL SAVIO - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3470,
                "descripcion": "PALO BLANCO - BERISSO",
                "codCalle": 3454,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3454,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "GENERAL SAVIO - BERISSO",
                        "codigoInterseccion": 3470,
                        "descripcionInterseccion": "PALO BLANCO - BERISSO",
                        "identificadorParada": "BE2134",
                        "descripcion": "2134",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024071
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3556,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "L. CONTARELLI - ENSENADA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3558,
                "descripcion": "QUINTANA - ENSENADA",
                "codCalle": 3556,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3556,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "L. CONTARELLI - ENSENADA",
                        "codigoInterseccion": 3558,
                        "descripcionInterseccion": "QUINTANA - ENSENADA",
                        "identificadorParada": "EDA2066",
                        "descripcion": "EDA2066",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023060
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3556,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "L. CONTARELLI - ENSENADA",
                        "codigoInterseccion": 3558,
                        "descripcionInterseccion": "QUINTANA - ENSENADA",
                        "identificadorParada": "EDA2184",
                        "descripcion": "EDA2184",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023060
                    }
                ]
            },
            {
                "codigoInterseccion": 3557,
                "descripcion": "DOCTOR HARAMBOURE - ENSENADA",
                "codCalle": 3556,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3556,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "L. CONTARELLI - ENSENADA",
                        "codigoInterseccion": 3557,
                        "descripcionInterseccion": "DOCTOR HARAMBOURE - ENSENADA",
                        "identificadorParada": "EDA2068",
                        "descripcion": "EDA2068",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023060
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3556,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "L. CONTARELLI - ENSENADA",
                        "codigoInterseccion": 3557,
                        "descripcionInterseccion": "DOCTOR HARAMBOURE - ENSENADA",
                        "identificadorParada": "EDA2183",
                        "descripcion": "EDA2183",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023060
                    }
                ]
            },
            {
                "codigoInterseccion": 3555,
                "descripcion": "AVENIDA BOSSINGA - ENSENADA",
                "codCalle": 3556,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3556,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "L. CONTARELLI - ENSENADA",
                        "codigoInterseccion": 3555,
                        "descripcionInterseccion": "AVENIDA BOSSINGA - ENSENADA",
                        "identificadorParada": "EDA2070",
                        "descripcion": "EDA2070",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024183
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3538,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "LA MERCED - ENSENADA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3544,
                "descripcion": "DOCTOR A. U. ILLIA - ENSENADA",
                "codCalle": 3538,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3538,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "LA MERCED - ENSENADA",
                        "codigoInterseccion": 3544,
                        "descripcionInterseccion": "DOCTOR A. U. ILLIA - ENSENADA",
                        "identificadorParada": "EDA2026",
                        "descripcion": "EDA2026",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023315
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3560,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "MAIPÚ - ENSENADA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3556,
                "descripcion": "L. CONTARELLI - ENSENADA",
                "codCalle": 3560,
                "createdAt": 1689953020715,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3560,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "MAIPÚ - ENSENADA",
                        "codigoInterseccion": 3556,
                        "descripcionInterseccion": "L. CONTARELLI - ENSENADA",
                        "identificadorParada": "EDA2064",
                        "descripcion": "EDA2064",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023315
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3560,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "MAIPÚ - ENSENADA",
                        "codigoInterseccion": 3556,
                        "descripcionInterseccion": "L. CONTARELLI - ENSENADA",
                        "identificadorParada": "EDA2185",
                        "descripcion": "EDA2185",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023315
                    }
                ]
            },
            {
                "codigoInterseccion": 3559,
                "descripcion": "COMBATIENTES DE MALVINAS - ENSENADA",
                "codCalle": 3560,
                "createdAt": 1689953020715,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3560,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "MAIPÚ - ENSENADA",
                        "codigoInterseccion": 3559,
                        "descripcionInterseccion": "COMBATIENTES DE MALVINAS - ENSENADA",
                        "identificadorParada": "EDA2186",
                        "descripcion": "EDA2186",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023315
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3511,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "NUEVA YORK - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3488,
                "descripcion": "CALLE 169 - BERISSO",
                "codCalle": 3511,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3511,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "NUEVA YORK - BERISSO",
                        "codigoInterseccion": 3488,
                        "descripcionInterseccion": "CALLE 169 - BERISSO",
                        "identificadorParada": "BE5151",
                        "descripcion": "5151",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023397
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3511,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "NUEVA YORK - BERISSO",
                        "codigoInterseccion": 3488,
                        "descripcionInterseccion": "CALLE 169 - BERISSO",
                        "identificadorParada": "BE5204",
                        "descripcion": "5204",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023397
                    }
                ]
            },
            {
                "codigoInterseccion": 3512,
                "descripcion": "CALLE 171 - BERISSO",
                "codCalle": 3511,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3511,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "NUEVA YORK - BERISSO",
                        "codigoInterseccion": 3512,
                        "descripcionInterseccion": "CALLE 171 - BERISSO",
                        "identificadorParada": "BE5153",
                        "descripcion": "5153",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024166
                    }
                ]
            },
            {
                "codigoInterseccion": 3475,
                "descripcion": "CALLE 168 - BERISSO",
                "codCalle": 3511,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3511,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "NUEVA YORK - BERISSO",
                        "codigoInterseccion": 3475,
                        "descripcionInterseccion": "CALLE 168 - BERISSO",
                        "identificadorParada": "BE52021",
                        "descripcion": "52021",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024180
                    }
                ]
            },
            {
                "codigoInterseccion": 3474,
                "descripcion": "CALLE 170 - BERISSO",
                "codCalle": 3511,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3511,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "NUEVA YORK - BERISSO",
                        "codigoInterseccion": 3474,
                        "descripcionInterseccion": "CALLE 170 - BERISSO",
                        "identificadorParada": "BE5206",
                        "descripcion": "5206",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024183
                    }
                ]
            },
            {
                "codigoInterseccion": 3461,
                "descripcion": "CALLE 172 - BERISSO",
                "codCalle": 3511,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3511,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "NUEVA YORK - BERISSO",
                        "codigoInterseccion": 3461,
                        "descripcionInterseccion": "CALLE 172 - BERISSO",
                        "identificadorParada": "BE5208",
                        "descripcion": "5208",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023315
                    }
                ]
            },
            {
                "codigoInterseccion": 3519,
                "descripcion": "173 - BERISSO",
                "codCalle": 3511,
                "createdAt": 1689953020684,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3511,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "NUEVA YORK - BERISSO",
                        "codigoInterseccion": 3519,
                        "descripcionInterseccion": "173 - BERISSO",
                        "identificadorParada": "BE5210",
                        "descripcion": "5210",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023315
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3470,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "PALO BLANCO - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3453,
                "descripcion": "TEODORO FUNCHS - BERISSO",
                "codCalle": 3470,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3470,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "PALO BLANCO - BERISSO",
                        "codigoInterseccion": 3453,
                        "descripcionInterseccion": "TEODORO FUNCHS - BERISSO",
                        "identificadorParada": "BE2135",
                        "descripcion": "2135",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023704
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 4236,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "PLAZA DARDO ROCHA - LA PLATA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3663,
                "descripcion": "AVENIDA 7 - LA PLATA",
                "codCalle": 4236,
                "createdAt": 1689953020716,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 4236,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "PLAZA DARDO ROCHA - LA PLATA",
                        "codigoInterseccion": 3663,
                        "descripcionInterseccion": "AVENIDA 7 - LA PLATA",
                        "identificadorParada": "LP2014",
                        "descripcion": "2014",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023704
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 4236,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "PLAZA DARDO ROCHA - LA PLATA",
                        "codigoInterseccion": 3663,
                        "descripcionInterseccion": "AVENIDA 7 - LA PLATA",
                        "identificadorParada": "LP2015",
                        "descripcion": "2015",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023704
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3993,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "PLAZA DOMINGO FAUSTINO SARMIENTO - LA PLATA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3700,
                "descripcion": "AVENIDA 19 - LA PLATA",
                "codCalle": 3993,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3993,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "PLAZA DOMINGO FAUSTINO SARMIENTO - LA PLATA",
                        "codigoInterseccion": 3700,
                        "descripcionInterseccion": "AVENIDA 19 - LA PLATA",
                        "identificadorParada": "LP1681",
                        "descripcion": "1681",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023911
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3993,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "PLAZA DOMINGO FAUSTINO SARMIENTO - LA PLATA",
                        "codigoInterseccion": 3700,
                        "descripcionInterseccion": "AVENIDA 19 - LA PLATA",
                        "identificadorParada": "LP1682",
                        "descripcion": "LP1682",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023911
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 4103,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "PLAZA ESPAÑA - LA PLATA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3759,
                "descripcion": "AVENIDA 66 - LA PLATA",
                "codCalle": 4103,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 4103,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "PLAZA ESPAÑA - LA PLATA",
                        "codigoInterseccion": 3759,
                        "descripcionInterseccion": "AVENIDA 66 - LA PLATA",
                        "identificadorParada": "LP1670",
                        "descripcion": "1670",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023658
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3567,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "PROPULSORA - ENSENADA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3622,
                "descripcion": "PROPULSORA. - ENSENADA",
                "codCalle": 3567,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3567,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "PROPULSORA - ENSENADA",
                        "codigoInterseccion": 3622,
                        "descripcionInterseccion": "PROPULSORA. - ENSENADA",
                        "identificadorParada": "EDA2215",
                        "descripcion": "EDA2215",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024183
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3413,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "RUTA PROVINCIAL 11 - VILLA ELVIRA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3414,
                "descripcion": "CALLE 615 - VILLA ELVIRA",
                "codCalle": 3413,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3413,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 11 - VILLA ELVIRA",
                        "codigoInterseccion": 3414,
                        "descripcionInterseccion": "CALLE 615 - VILLA ELVIRA",
                        "identificadorParada": "11500",
                        "descripcion": "11500",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023636
                    }
                ]
            },
            {
                "codigoInterseccion": 4028,
                "descripcion": "CALLE 96 - VILLA ELVIRA",
                "codCalle": 3413,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3413,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 11 - VILLA ELVIRA",
                        "codigoInterseccion": 4028,
                        "descripcionInterseccion": "CALLE 96 - VILLA ELVIRA",
                        "identificadorParada": "LP11870",
                        "descripcion": "11870",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023929
                    }
                ]
            },
            {
                "codigoInterseccion": 4080,
                "descripcion": "CALLE 608 - VILLA ELVIRA",
                "codCalle": 3413,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3413,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 11 - VILLA ELVIRA",
                        "codigoInterseccion": 4080,
                        "descripcionInterseccion": "CALLE 608 - VILLA ELVIRA",
                        "identificadorParada": "LP1602",
                        "descripcion": "1602",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024174
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3413,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 11 - VILLA ELVIRA",
                        "codigoInterseccion": 4080,
                        "descripcionInterseccion": "CALLE 608 - VILLA ELVIRA",
                        "identificadorParada": "LP1603",
                        "descripcion": "1603",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024174
                    }
                ]
            },
            {
                "codigoInterseccion": 3661,
                "descripcion": "CALLE 609 - VILLA ELVIRA",
                "codCalle": 3413,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3413,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 11 - VILLA ELVIRA",
                        "codigoInterseccion": 3661,
                        "descripcionInterseccion": "CALLE 609 - VILLA ELVIRA",
                        "identificadorParada": "LP1604",
                        "descripcion": "1604",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023921
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3413,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 11 - VILLA ELVIRA",
                        "codigoInterseccion": 3661,
                        "descripcionInterseccion": "CALLE 609 - VILLA ELVIRA",
                        "identificadorParada": "LP1607",
                        "descripcion": "1607",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023921
                    }
                ]
            },
            {
                "codigoInterseccion": 4024,
                "descripcion": "CALLE 610 - VILLA ELVIRA",
                "codCalle": 3413,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3413,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 11 - VILLA ELVIRA",
                        "codigoInterseccion": 4024,
                        "descripcionInterseccion": "CALLE 610 - VILLA ELVIRA",
                        "identificadorParada": "LP1605",
                        "descripcion": "1605",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023786
                    }
                ]
            },
            {
                "codigoInterseccion": 4081,
                "descripcion": "CALLE 606 - VILLA ELVIRA",
                "codCalle": 3413,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3413,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 11 - VILLA ELVIRA",
                        "codigoInterseccion": 4081,
                        "descripcionInterseccion": "CALLE 606 - VILLA ELVIRA",
                        "identificadorParada": "LP1606",
                        "descripcion": "1606",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023794
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3413,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 11 - VILLA ELVIRA",
                        "codigoInterseccion": 4081,
                        "descripcionInterseccion": "CALLE 606 - VILLA ELVIRA",
                        "identificadorParada": "LP1609",
                        "descripcion": "1609",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023794
                    }
                ]
            },
            {
                "codigoInterseccion": 4082,
                "descripcion": "CALLE 604 - VILLA ELVIRA",
                "codCalle": 3413,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3413,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 11 - VILLA ELVIRA",
                        "codigoInterseccion": 4082,
                        "descripcionInterseccion": "CALLE 604 - VILLA ELVIRA",
                        "identificadorParada": "LP1608",
                        "descripcion": "1608",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023786
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3413,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 11 - VILLA ELVIRA",
                        "codigoInterseccion": 4082,
                        "descripcionInterseccion": "CALLE 604 - VILLA ELVIRA",
                        "identificadorParada": "LP1611",
                        "descripcion": "1611",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023786
                    }
                ]
            },
            {
                "codigoInterseccion": 4083,
                "descripcion": "CALLE 603 - VILLA ELVIRA",
                "codCalle": 3413,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3413,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 11 - VILLA ELVIRA",
                        "codigoInterseccion": 4083,
                        "descripcionInterseccion": "CALLE 603 - VILLA ELVIRA",
                        "identificadorParada": "LP1610",
                        "descripcion": "1610",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023825
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3413,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 11 - VILLA ELVIRA",
                        "codigoInterseccion": 4083,
                        "descripcionInterseccion": "CALLE 603 - VILLA ELVIRA",
                        "identificadorParada": "LP1613",
                        "descripcion": "1613",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023825
                    }
                ]
            },
            {
                "codigoInterseccion": 4084,
                "descripcion": "CALLE 601 - VILLA ELVIRA",
                "codCalle": 3413,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3413,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 11 - VILLA ELVIRA",
                        "codigoInterseccion": 4084,
                        "descripcionInterseccion": "CALLE 601 - VILLA ELVIRA",
                        "identificadorParada": "LP1612",
                        "descripcion": "1612",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023825
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3413,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 11 - VILLA ELVIRA",
                        "codigoInterseccion": 4084,
                        "descripcionInterseccion": "CALLE 601 - VILLA ELVIRA",
                        "identificadorParada": "LP1615",
                        "descripcion": "1615",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023825
                    }
                ]
            },
            {
                "codigoInterseccion": 4085,
                "descripcion": "CALLE 99 - VILLA ELVIRA",
                "codCalle": 3413,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3413,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 11 - VILLA ELVIRA",
                        "codigoInterseccion": 4085,
                        "descripcionInterseccion": "CALLE 99 - VILLA ELVIRA",
                        "identificadorParada": "LP1614",
                        "descripcion": "1614",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023833
                    }
                ]
            },
            {
                "codigoInterseccion": 4086,
                "descripcion": "CALLE 97 - VILLA ELVIRA",
                "codCalle": 3413,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3413,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 11 - VILLA ELVIRA",
                        "codigoInterseccion": 4086,
                        "descripcionInterseccion": "CALLE 97 - VILLA ELVIRA",
                        "identificadorParada": "LP1617",
                        "descripcion": "1617",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023841
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 33647,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "RUTA PROVINCIAL 15 - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3491,
                "descripcion": "ACCESO A LA BALANDRA - BERISSO",
                "codCalle": 33647,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 33647,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 15 - BERISSO",
                        "codigoInterseccion": 3491,
                        "descripcionInterseccion": "ACCESO A LA BALANDRA - BERISSO",
                        "identificadorParada": "BE2508",
                        "descripcion": "2508",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023921
                    }
                ]
            },
            {
                "codigoInterseccion": 33644,
                "descripcion": "ACCESO BAGLIARDI - BERISSO",
                "codCalle": 33647,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 33647,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 15 - BERISSO",
                        "codigoInterseccion": 33644,
                        "descripcionInterseccion": "ACCESO BAGLIARDI - BERISSO",
                        "identificadorParada": "BE3001",
                        "descripcion": "3001",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024071
                    }
                ]
            },
            {
                "codigoInterseccion": 33645,
                "descripcion": "HOGAR DE ANCIANOS - BERISSO",
                "codCalle": 33647,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 33647,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 15 - BERISSO",
                        "codigoInterseccion": 33645,
                        "descripcionInterseccion": "HOGAR DE ANCIANOS - BERISSO",
                        "identificadorParada": "BE3002",
                        "descripcion": "3002",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024183
                    }
                ]
            },
            {
                "codigoInterseccion": 33648,
                "descripcion": "BARRIO ALTO LOS TALAS - BERISSO",
                "codCalle": 33647,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 33647,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 15 - BERISSO",
                        "codigoInterseccion": 33648,
                        "descripcionInterseccion": "BARRIO ALTO LOS TALAS - BERISSO",
                        "identificadorParada": "BE3003",
                        "descripcion": "3003",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024061
                    }
                ]
            },
            {
                "codigoInterseccion": 33649,
                "descripcion": "CAMPING S.U.P.E.H. - BERISSO",
                "codCalle": 33647,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 33647,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 15 - BERISSO",
                        "codigoInterseccion": 33649,
                        "descripcionInterseccion": "CAMPING S.U.P.E.H. - BERISSO",
                        "identificadorParada": "BE3004",
                        "descripcion": "3004",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024183
                    }
                ]
            },
            {
                "codigoInterseccion": 33650,
                "descripcion": "DESTACAMENTO LOS TALAS - BERISSO",
                "codCalle": 33647,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 33647,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 15 - BERISSO",
                        "codigoInterseccion": 33650,
                        "descripcionInterseccion": "DESTACAMENTO LOS TALAS - BERISSO",
                        "identificadorParada": "BE3005",
                        "descripcion": "3005",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024183
                    }
                ]
            },
            {
                "codigoInterseccion": 33651,
                "descripcion": "ESC. 23 - ARROYO EL PESCADO - BERISSO",
                "codCalle": 33647,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 33647,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 15 - BERISSO",
                        "codigoInterseccion": 33651,
                        "descripcionInterseccion": "ESC. 23 - ARROYO EL PESCADO - BERISSO",
                        "identificadorParada": "BE3006",
                        "descripcion": "3006",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024183
                    }
                ]
            },
            {
                "codigoInterseccion": 33652,
                "descripcion": "ACC. BALNEARIO MUNICIPAL - BERISSO",
                "codCalle": 33647,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 33647,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 15 - BERISSO",
                        "codigoInterseccion": 33652,
                        "descripcionInterseccion": "ACC. BALNEARIO MUNICIPAL - BERISSO",
                        "identificadorParada": "BE3007",
                        "descripcion": "3007",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023019
                    }
                ]
            },
            {
                "codigoInterseccion": 33663,
                "descripcion": "ACC. BALNEARIO MUNICIPAL (A BALANDRA) - BERISSO",
                "codCalle": 33647,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 33647,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 15 - BERISSO",
                        "codigoInterseccion": 33663,
                        "descripcionInterseccion": "ACC. BALNEARIO MUNICIPAL (A BALANDRA) - BERISSO",
                        "identificadorParada": "BE3008",
                        "descripcion": "3008",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023021
                    }
                ]
            },
            {
                "codigoInterseccion": 33660,
                "descripcion": "DESTACAMENTO LOS TALAS (A BALANDRA) - BERISSO",
                "codCalle": 33647,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 33647,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 15 - BERISSO",
                        "codigoInterseccion": 33660,
                        "descripcionInterseccion": "DESTACAMENTO LOS TALAS (A BALANDRA) - BERISSO",
                        "identificadorParada": "BE3009",
                        "descripcion": "3009",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    }
                ]
            },
            {
                "codigoInterseccion": 33664,
                "descripcion": "BARRIO ALTO LOS TALAS (A BALANDRA) - BERISSO",
                "codCalle": 33647,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 33647,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 15 - BERISSO",
                        "codigoInterseccion": 33664,
                        "descripcionInterseccion": "BARRIO ALTO LOS TALAS (A BALANDRA) - BERISSO",
                        "identificadorParada": "BE3010",
                        "descripcion": "3010",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953022993
                    }
                ]
            },
            {
                "codigoInterseccion": 33662,
                "descripcion": "HOGAR DE ANCIANOS (A BALANDRA) - BERISSO",
                "codCalle": 33647,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 33647,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 15 - BERISSO",
                        "codigoInterseccion": 33662,
                        "descripcionInterseccion": "HOGAR DE ANCIANOS (A BALANDRA) - BERISSO",
                        "identificadorParada": "BE3011",
                        "descripcion": "3011",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023020
                    }
                ]
            },
            {
                "codigoInterseccion": 33665,
                "descripcion": "ACCESO BAGLIARDI (A BALANDRA) - BERISSO",
                "codCalle": 33647,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 33647,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 15 - BERISSO",
                        "codigoInterseccion": 33665,
                        "descripcionInterseccion": "ACCESO BAGLIARDI (A BALANDRA) - BERISSO",
                        "identificadorParada": "BE3012",
                        "descripcion": "3012",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024183
                    }
                ]
            },
            {
                "codigoInterseccion": 33666,
                "descripcion": "CAMPING S.U.P.E.H. (A BALANDRA) - BERISSO",
                "codCalle": 33647,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 33647,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 15 - BERISSO",
                        "codigoInterseccion": 33666,
                        "descripcionInterseccion": "CAMPING S.U.P.E.H. (A BALANDRA) - BERISSO",
                        "identificadorParada": "BE3013",
                        "descripcion": "3013",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024062
                    }
                ]
            },
            {
                "codigoInterseccion": 33667,
                "descripcion": "ESC. 23 - ARROYO EL PESCADO (A BALANDRA) - BERISSO",
                "codCalle": 33647,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 33647,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "RUTA PROVINCIAL 15 - BERISSO",
                        "codigoInterseccion": 33667,
                        "descripcionInterseccion": "ESC. 23 - ARROYO EL PESCADO (A BALANDRA) - BERISSO",
                        "identificadorParada": "BE3014",
                        "descripcion": "3014",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024183
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3545,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "SAN MARTÍN - ENSENADA",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3546,
                "descripcion": "ECUADOR - ENSENADA",
                "codCalle": 3545,
                "createdAt": 1689953020716,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3545,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "SAN MARTÍN - ENSENADA",
                        "codigoInterseccion": 3546,
                        "descripcionInterseccion": "ECUADOR - ENSENADA",
                        "identificadorParada": "EDA2030",
                        "descripcion": "EDA2030",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024183
                    }
                ]
            },
            {
                "codigoInterseccion": 3547,
                "descripcion": "BOLIVIA - ENSENADA",
                "codCalle": 3545,
                "createdAt": 1689953020716,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3545,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "SAN MARTÍN - ENSENADA",
                        "codigoInterseccion": 3547,
                        "descripcionInterseccion": "BOLIVIA - ENSENADA",
                        "identificadorParada": "EDA2032",
                        "descripcion": "EDA2032",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024183
                    }
                ]
            },
            {
                "codigoInterseccion": 3548,
                "descripcion": "CHILE - ENSENADA",
                "codCalle": 3545,
                "createdAt": 1689953020716,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3545,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "SAN MARTÍN - ENSENADA",
                        "codigoInterseccion": 3548,
                        "descripcionInterseccion": "CHILE - ENSENADA",
                        "identificadorParada": "EDA2034",
                        "descripcion": "EDA2034",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024183
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3545,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "SAN MARTÍN - ENSENADA",
                        "codigoInterseccion": 3548,
                        "descripcionInterseccion": "CHILE - ENSENADA",
                        "identificadorParada": "EDA2196",
                        "descripcion": "EDA2196",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024183
                    }
                ]
            },
            {
                "codigoInterseccion": 3549,
                "descripcion": "PARAGUAY - ENSENADA",
                "codCalle": 3545,
                "createdAt": 1689953020716,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3545,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "SAN MARTÍN - ENSENADA",
                        "codigoInterseccion": 3549,
                        "descripcionInterseccion": "PARAGUAY - ENSENADA",
                        "identificadorParada": "EDA2036",
                        "descripcion": "EDA2036",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023019
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3545,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "SAN MARTÍN - ENSENADA",
                        "codigoInterseccion": 3549,
                        "descripcionInterseccion": "PARAGUAY - ENSENADA",
                        "identificadorParada": "EDA2195",
                        "descripcion": "EDA2195",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023019
                    }
                ]
            },
            {
                "codigoInterseccion": 3550,
                "descripcion": "ARIAS DE SAAVEDRA - ENSENADA",
                "codCalle": 3545,
                "createdAt": 1689953020716,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3545,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "SAN MARTÍN - ENSENADA",
                        "codigoInterseccion": 3550,
                        "descripcionInterseccion": "ARIAS DE SAAVEDRA - ENSENADA",
                        "identificadorParada": "EDA2038",
                        "descripcion": "EDA2038",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023023
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3545,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "SAN MARTÍN - ENSENADA",
                        "codigoInterseccion": 3550,
                        "descripcionInterseccion": "ARIAS DE SAAVEDRA - ENSENADA",
                        "identificadorParada": "EDA2194",
                        "descripcion": "EDA2194",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023023
                    }
                ]
            },
            {
                "codigoInterseccion": 3551,
                "descripcion": "LINIERS - ENSENADA",
                "codCalle": 3545,
                "createdAt": 1689953020716,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3545,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "SAN MARTÍN - ENSENADA",
                        "codigoInterseccion": 3551,
                        "descripcionInterseccion": "LINIERS - ENSENADA",
                        "identificadorParada": "EDA2039",
                        "descripcion": "EDA2039",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    },
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3545,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "SAN MARTÍN - ENSENADA",
                        "codigoInterseccion": 3551,
                        "descripcionInterseccion": "LINIERS - ENSENADA",
                        "identificadorParada": "EDA2193",
                        "descripcion": "EDA2193",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    }
                ]
            },
            {
                "codigoInterseccion": 3552,
                "descripcion": "F. CESTINO - ENSENADA",
                "codCalle": 3545,
                "createdAt": 1689953020716,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3545,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "SAN MARTÍN - ENSENADA",
                        "codigoInterseccion": 3552,
                        "descripcionInterseccion": "F. CESTINO - ENSENADA",
                        "identificadorParada": "EDA2040",
                        "descripcion": "EDA2040",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024183
                    }
                ]
            },
            {
                "codigoInterseccion": 3611,
                "descripcion": "BRASIL - ENSENADA",
                "codCalle": 3545,
                "createdAt": 1689953020716,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3545,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "SAN MARTÍN - ENSENADA",
                        "codigoInterseccion": 3611,
                        "descripcionInterseccion": "BRASIL - ENSENADA",
                        "identificadorParada": "EDA2197",
                        "descripcion": "EDA2197",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024183
                    }
                ]
            }
        ]
    },
    {
        "codigoLinea": 95,
        "codigoCalle": 3453,
        "descripcionLinea": "LINEA 202",
        "descripcionCalle": "TEODORO FUNCHS - BERISSO",
        "createdAt": 1689953020063,
        "intersecciones": [
            {
                "codigoInterseccion": 3438,
                "descripcion": "CALLE 33 - BERISSO",
                "codCalle": 3453,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3453,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "TEODORO FUNCHS - BERISSO",
                        "codigoInterseccion": 3438,
                        "descripcionInterseccion": "CALLE 33 - BERISSO",
                        "identificadorParada": "BE2101",
                        "descripcion": "2101",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953024183
                    }
                ]
            },
            {
                "codigoInterseccion": 3437,
                "descripcion": "CALLE 32 - BERISSO",
                "codCalle": 3453,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3453,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "TEODORO FUNCHS - BERISSO",
                        "codigoInterseccion": 3437,
                        "descripcionInterseccion": "CALLE 32 - BERISSO",
                        "identificadorParada": "BE2102",
                        "descripcion": "2102",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    }
                ]
            },
            {
                "codigoInterseccion": 3471,
                "descripcion": "AVENIDA 9 DE JULIO - BERISSO",
                "codCalle": 3453,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3453,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "TEODORO FUNCHS - BERISSO",
                        "codigoInterseccion": 3471,
                        "descripcionInterseccion": "AVENIDA 9 DE JULIO - BERISSO",
                        "identificadorParada": "BE2136",
                        "descripcion": "2136",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023031
                    }
                ]
            },
            {
                "codigoInterseccion": 3439,
                "descripcion": "CALLE 34 - BERISSO",
                "codCalle": 3453,
                "createdAt": 1689953020717,
                "paradas": [
                    {
                        "codigoLinea": 95,
                        "codigoCalle": 3453,
                        "descripcionLinea": "LINEA 202",
                        "descripcionCalle": "TEODORO FUNCHS - BERISSO",
                        "codigoInterseccion": 3439,
                        "descripcionInterseccion": "CALLE 34 - BERISSO",
                        "identificadorParada": "BE2137",
                        "descripcion": "2137",
                        "latitud": null,
                        "longitud": null,
                        "createdAt": 1689953023880
                    }
                ]
            }
        ]
    }
]

export async function GET (response) {
    return NextResponse.json(PARADAS)
}