// Official DJI sources reviewed on 2026-10-25. Text tuples: zh, en, de, nl.
export type Text = [string,string,string,string];
type Feature = {title:Text;text:Text;note:Text};
type Product = {id:string;slug:string;name:string;group:'inspection'|'dock'|'delivery'|'agriculture';asset:string;source:string;tagline:Text;intro:Text;metrics:[Text,string][];features:Feature[];choiceTitle:Text;choices:Feature[];specs:{label:Text;value:Text;note:Text}[];hero:string;faq:{question:Text;answer:Text}[]};
const products:Product[]=[
  {
    "id": "m4t",
    "slug": "matrice-4t",
    "name": "DJI Matrice 4T",
    "group": "inspection",
    "asset": "m4",
    "source": "https://enterprise.dji.com/matrice-4-series",
    "tagline": [
      "把现场看清，把温差看见",
      "See the scene. Reveal the heat.",
      "Die Lage erfassen. Wärme erkennen.",
      "Overzicht krijgen. Warmte zichtbaar maken."
    ],
    "intro": [
      "集成广角、中长焦、热成像和激光测距的便携巡检机型。可见光与温度信息在同一平台采集，适合巡检与搜救现场观察。",
      "A compact inspection aircraft combining wide and tele cameras, thermal imaging and laser ranging. Capture visual and temperature information for inspection and search-and-rescue observation.",
      "Kompakte Inspektionsdrohne mit Weitwinkel, Telekameras, Wärmebild und Laserentfernungsmesser für Inspektion und Lagebeurteilung bei Suche und Rettung.",
      "Compacte inspectiedrone met groothoek, telecamera’s, warmtebeeld en laserafstandsmeter voor inspecties en observatie bij zoek- en reddingsacties."
    ],
    "metrics": [
      [
        [
          "原生热成像分辨率",
          "Native thermal resolution",
          "Native Wärmebildauflösung",
          "Oorspronkelijke thermische resolutie"
        ],
        "640 × 512"
      ],
      [
        [
          "最长飞行时间",
          "Max. flight time",
          "Max. Flugzeit",
          "Max. vliegtijd"
        ],
        "49 min"
      ],
      [
        [
          "激光测距",
          "Laser rangefinder",
          "Laserentfernungsmesser",
          "Laserafstandsmeter"
        ],
        "1,800 m"
      ],
      [
        [
          "起飞重量",
          "Takeoff weight",
          "Startgewicht",
          "Startgewicht"
        ],
        "1,219 g"
      ]
    ],
    "features": [
      {
        "title": [
          "可见光与热成像互补",
          "Visual and thermal views",
          "Sicht- und Wärmebild",
          "Zichtbaar licht en warmtebeeld"
        ],
        "text": [
          "三个可见光焦段配合热成像，在全景判断、细节观察和温度异常检查之间切换。",
          "Three visual focal lengths complement thermal imaging for scene context, detail inspection and temperature anomalies.",
          "Drei sichtbare Brennweiten ergänzen das Wärmebild für Überblick, Details und Temperaturanomalien.",
          "Drie brandpuntsafstanden vullen warmtebeeld aan voor overzicht, details en temperatuurafwijkingen."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "title": [
          "看清远处细节",
          "Inspect distant details",
          "Details aus der Entfernung",
          "Details op afstand"
        ],
        "text": [
          "70 mm 中长焦与 168 mm 长焦均为 48 MP，激光测距辅助获取目标距离。",
          "48 MP cameras at 70 mm and 168 mm, with laser ranging to measure target distance.",
          "48-MP-Kameras mit 70 und 168 mm; Laserentfernungsmessung ergänzt die Beobachtung.",
          "48MP-camera’s met 70 en 168 mm; laserafstandmeting vult de waarneming aan."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "title": [
          "夜间观察",
          "Low-light observation",
          "Beobachtung bei wenig Licht",
          "Waarneming bij weinig licht"
        ],
        "text": [
          "夜景模式、热成像和近红外补光共同服务低照度观察。",
          "Night mode, thermal imaging and near-infrared illumination support low-light observation.",
          "Nachtmodus, Wärmebild und Nahinfrarotbeleuchtung unterstützen Beobachtungen bei wenig Licht.",
          "Nachtmodus, warmtebeeld en nabij-infraroodverlichting ondersteunen observatie bij weinig licht."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "title": [
          "轻便的现场部署",
          "Portable field deployment",
          "Mobiler Einsatz",
          "Mobiele inzet"
        ],
        "text": [
          "折叠机身、集成 RTK 与 DJI Pilot 2，支持航线任务和现场数据采集。",
          "A folding airframe, integrated RTK and DJI Pilot 2 support route missions and field capture.",
          "Faltbare Bauform, integriertes RTK und DJI Pilot 2 für Flugrouten und Datenerfassung.",
          "Een opvouwbaar toestel, geïntegreerde RTK en DJI Pilot 2 voor routemissies en gegevensverzameling."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      }
    ],
    "choiceTitle": [
      "围绕观察任务选配附件",
      "Accessories for your observation task",
      "Zubehör für Ihre Beobachtungsaufgabe",
      "Accessoires voor uw observatietaak"
    ],
    "choices": [
      {
        "title": [
          "基础巡检",
          "Inspection",
          "Inspektion",
          "Inspectie"
        ],
        "text": [
          "使用内置可见光、热成像和测距模块；不需要另配 Zenmuse 云台相机。",
          "Use the integrated visual, thermal and ranging modules; no separate Zenmuse camera is required.",
          "Integrierte Sicht-, Wärmebild- und Entfernungsmodule nutzen; keine separate Zenmuse-Kamera erforderlich.",
          "Gebruik de geïntegreerde beeld-, warmte- en afstandsmodules; een aparte Zenmuse-camera is niet nodig."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "title": [
          "DJI AL1",
          "DJI AL1",
          "DJI AL1",
          "DJI AL1"
        ],
        "text": [
          "官方聚光灯附件，用于需要额外照明的任务。",
          "Official spotlight accessory for tasks requiring additional illumination.",
          "Offizieller Scheinwerfer für Aufgaben mit zusätzlichem Lichtbedarf.",
          "Officiële schijnwerper voor taken die extra verlichting vereisen."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "title": [
          "DJI AS1",
          "DJI AS1",
          "DJI AS1",
          "DJI AS1"
        ],
        "text": [
          "官方喊话器附件；可与 AL1 配合使用，附件会影响续航。",
          "Official speaker accessory; can be used with AL1. Accessories affect flight time.",
          "Offizieller Lautsprecher, mit AL1 kombinierbar. Zubehör beeinflusst die Flugzeit.",
          "Officiële luidspreker, te combineren met AL1. Accessoires beïnvloeden de vliegtijd."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      }
    ],
    "specs": [
      {
        "label": [
          "广角相机",
          "Wide camera",
          "Weitwinkelkamera",
          "Groothoekcamera"
        ],
        "value": [
          "1/1.3″ CMOS · 48 MP · 24 mm",
          "1/1.3″ CMOS · 48 MP · 24 mm",
          "1/1.3″ CMOS · 48 MP · 24 mm",
          "1/1.3″ CMOS · 48 MP · 24 mm"
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "label": [
          "原生热成像分辨率",
          "Native thermal resolution",
          "Native Wärmebildauflösung",
          "Oorspronkelijke thermische resolutie"
        ],
        "value": [
          "640 × 512 · 30 Hz",
          "640 × 512 · 30 Hz",
          "640 × 512 · 30 Hz",
          "640 × 512 · 30 Hz"
        ],
        "note": [
          "超分辨率输出 1280×1024，并非原生探测器分辨率。",
          "Super-resolution output is 1280×1024, not the native detector resolution.",
          "Superauflösung 1280×1024 ist nicht die native Sensorauflösung.",
          "Superresolutie-uitvoer van 1280×1024 is niet de oorspronkelijke sensorresolutie."
        ]
      },
      {
        "label": [
          "测温范围",
          "Temperature measurement",
          "Temperaturmessbereich",
          "Temperatuurmeting"
        ],
        "value": [
          "−20–150 °C / 0–550 °C",
          "−20–150 °C / 0–550 °C",
          "−20–150 °C / 0–550 °C",
          "−20–150 °C / 0–550 °C"
        ],
        "note": [
          "高增益 / 低增益。",
          "High / low gain.",
          "Hohe / niedrige Verstärkung.",
          "Hoge / lage versterking."
        ]
      },
      {
        "label": [
          "最长飞行时间",
          "Max. flight time",
          "Max. Flugzeit",
          "Max. vliegtijd"
        ],
        "value": [
          "49 min",
          "49 min",
          "49 min",
          "49 min"
        ],
        "note": [
          "标准桨、无外挂、无风、约 9 m/s 飞至电量 0%；低噪桨为 46 分钟。",
          "Standard propellers, no accessories, no wind, about 9 m/s to 0% battery; 46 min with low-noise propellers.",
          "Standardpropeller, ohne Zubehör, windstill, ca. 9 m/s bis 0 % Akku; 46 Min. mit geräuscharmen Propellern.",
          "Standaardpropellers, zonder accessoires, windstil, circa 9 m/s tot 0% accu; 46 min met geluidsarme propellers."
        ]
      },
      {
        "label": [
          "中长焦相机",
          "Tele cameras",
          "Telekameras",
          "Telecamera’s"
        ],
        "value": [
          "48 MP · 70 mm / 48 MP · 168 mm",
          "48 MP · 70 mm / 48 MP · 168 mm",
          "48 MP · 70 mm / 48 MP · 168 mm",
          "48 MP · 70 mm / 48 MP · 168 mm"
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "label": [
          "激光测距",
          "Laser rangefinder",
          "Laserentfernungsmesser",
          "Laserafstandsmeter"
        ],
        "value": [
          "1,800 m",
          "1,800 m",
          "1,800 m",
          "1,800 m"
        ],
        "note": [
          "1 Hz；20% 反射率目标，测距性能取决于环境与目标。",
          "At 1 Hz with a 20% reflective target; performance depends on target and environment.",
          "Bei 1 Hz und 20 % Zielreflexion; abhängig von Ziel und Umgebung.",
          "Bij 1 Hz en 20% doelreflectie; afhankelijk van doel en omgeving."
        ]
      },
      {
        "label": [
          "RTK 固定解精度",
          "RTK fixed-solution accuracy",
          "RTK-Genauigkeit bei fester Lösung",
          "RTK-nauwkeurigheid bij fixed solution"
        ],
        "value": [
          "1 cm + 1 ppm / 1.5 cm + 1 ppm",
          "1 cm + 1 ppm / 1.5 cm + 1 ppm",
          "1 cm + 1 ppm / 1.5 cm + 1 ppm",
          "1 cm + 1 ppm / 1.5 cm + 1 ppm"
        ],
        "note": [
          "水平 / 垂直；定位精度不等于最终测绘成果精度。",
          "Horizontal / vertical; positioning accuracy is not final survey accuracy.",
          "Horizontal / vertikal; Positionsgenauigkeit ist nicht die Genauigkeit des Vermessungsergebnisses.",
          "Horizontaal / verticaal; positioneringsnauwkeurigheid is niet de nauwkeurigheid van het eindresultaat."
        ]
      },
      {
        "label": [
          "图传距离（CE）",
          "Transmission range (CE)",
          "Übertragungsreichweite (CE)",
          "Transmissiebereik (CE)"
        ],
        "value": [
          "12 km",
          "12 km",
          "12 km",
          "12 km"
        ],
        "note": [
          "无遮挡、无干扰的通信测试距离，不是往返作业半径。",
          "Communication test range without obstruction or interference, not a round-trip operating radius.",
          "Kommunikationsreichweite ohne Hindernisse oder Störungen, kein Einsatzradius mit Rückflug.",
          "Communicatiebereik zonder obstakels of storing, geen werkstraal inclusief terugvlucht."
        ]
      },
      {
        "label": [
          "起飞重量",
          "Takeoff weight",
          "Startgewicht",
          "Startgewicht"
        ],
        "value": [
          "1,219 g",
          "1,219 g",
          "1,219 g",
          "1,219 g"
        ],
        "note": [
          "含标准桨、电池与存储卡。",
          "With standard propellers, battery and microSD card.",
          "Mit Standardpropellern, Akku und microSD-Karte.",
          "Met standaardpropellers, accu en microSD-kaart."
        ]
      },
      {
        "label": [
          "工作温度",
          "Operating temperature",
          "Betriebstemperatur",
          "Bedrijfstemperatuur"
        ],
        "value": [
          "−10–40 °C",
          "−10–40 °C",
          "−10–40 °C",
          "−10–40 °C"
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "label": [
          "最大抗风能力",
          "Max. wind resistance",
          "Max. Windwiderstand",
          "Max. windbestendigheid"
        ],
        "value": [
          "12 m/s",
          "12 m/s",
          "12 m/s",
          "12 m/s"
        ],
        "note": [
          "起飞与降落。",
          "During takeoff and landing.",
          "Bei Start und Landung.",
          "Bij opstijgen en landen."
        ]
      }
    ],
    "hero": "/images/drones/dji/official/m4.webp",
    "faq": [
      {
        "question": [
          "4T 能换成测绘相机吗？",
          "Can I swap in a mapping camera?",
          "Lässt sich eine Vermessungskamera einsetzen?",
          "Kan ik een karteringscamera monteren?"
        ],
        "answer": [
          "4T 使用集成相机系统。若主要需求是机械快门航测，应比较 Matrice 4E，而不是把 4T 当作 M400 那样的可换云台平台。",
          "4T has integrated cameras. For mechanical-shutter mapping compare Matrice 4E; 4T is not an interchangeable-gimbal platform like M400.",
          "4T besitzt integrierte Kameras. Für Vermessung mit mechanischem Verschluss die 4E vergleichen; kein Wechselgimbalsystem wie M400.",
          "4T heeft geïntegreerde camera’s. Vergelijk voor kartering met mechanische sluiter de 4E; 4T heeft geen verwisselbaar gimbalplatform zoals M400."
        ]
      },
      {
        "question": [
          "需要额外购买 RTK 基站吗？",
          "Do I need an RTK base station?",
          "Brauche ich eine RTK-Basisstation?",
          "Heb ik een RTK-basisstation nodig?"
        ],
        "answer": [
          "不一定。需根据网络 RTK 服务覆盖、现场网络和精度要求确认修正数据来源；机内 RTK 不等于自动获得修正服务或保证最终成果精度。",
          "Not necessarily. Choose a correction source based on network RTK coverage, connectivity and accuracy needs. Onboard RTK does not include a correction service or guarantee final output accuracy.",
          "Nicht zwingend. Korrekturquelle nach Netzwerk-RTK-Abdeckung, Verbindung und Genauigkeitsbedarf wählen. Integriertes RTK beinhaltet keinen Korrekturdienst und garantiert keine Ergebnisgenauigkeit.",
          "Niet altijd. Kies de correctiebron op basis van netwerk-RTK-dekking, verbinding en nauwkeurigheidseisen. Ingebouwde RTK omvat geen correctiedienst en garandeert geen eindnauwkeurigheid."
        ]
      },
      {
        "question": [
          "报价会包含哪些内容？",
          "What will the quotation include?",
          "Was enthält das Angebot?",
          "Wat staat er in de offerte?"
        ],
        "answer": [
          "我们会按需求列清飞行器、作业系统或附件、电池与充电设备，以及需要的软件和服务。官网图片与能力展示不代表所有项目均为标配；最终以确认报价为准。",
          "We will itemise the aircraft, task systems or accessories, batteries, charging equipment and requested software/services. Images and capabilities do not mean everything is included; the confirmed quotation defines the package.",
          "Wir führen Fluggerät, Systeme/Zubehör, Akkus, Ladetechnik sowie gewünschte Software und Leistungen auf. Bilder bedeuten keinen vollständigen Lieferumfang; maßgeblich ist das bestätigte Angebot.",
          "We specificeren toestel, systemen/accessoires, accu’s, laadapparatuur en gewenste software/diensten. Afbeeldingen betekenen niet dat alles inbegrepen is; de bevestigde offerte bepaalt het pakket."
        ]
      }
    ]
  },
  {
    "id": "m4e",
    "slug": "matrice-4e",
    "name": "DJI Matrice 4E",
    "group": "inspection",
    "asset": "m4",
    "source": "https://enterprise.dji.com/matrice-4-series",
    "tagline": [
      "让每一张影像，进入测绘流程",
      "Capture with mapping in mind",
      "Aufnahmen für die Vermessung",
      "Beelden met kartering als doel"
    ],
    "intro": [
      "以 4/3 英寸机械快门广角相机为核心，搭配 RTK、快速定时拍摄和倾斜摄影功能，面向航测、建模与工程记录。",
      "Built around a 4/3-inch wide camera with mechanical shutter, RTK and fast interval capture for surveying, modelling and project documentation.",
      "4/3-Zoll-Weitwinkelkamera mit mechanischem Verschluss, RTK und schnellen Intervallaufnahmen für Vermessung, Modellierung und Projektdokumentation.",
      "Een 4/3-inch groothoekcamera met mechanische sluiter, RTK en snelle intervalopnamen voor landmeting, modellering en projectdocumentatie."
    ],
    "metrics": [
      [
        [
          "广角相机",
          "Wide camera",
          "Weitwinkelkamera",
          "Groothoekcamera"
        ],
        "4/3″ · 20 MP"
      ],
      [
        [
          "最短拍照间隔",
          "Min. photo interval",
          "Min. Fotointervall",
          "Min. foto-interval"
        ],
        "0.5 s"
      ],
      [
        [
          "最长飞行时间",
          "Max. flight time",
          "Max. Flugzeit",
          "Max. vliegtijd"
        ],
        "49 min"
      ],
      [
        [
          "激光测距",
          "Laser rangefinder",
          "Laserentfernungsmesser",
          "Laserafstandsmeter"
        ],
        "1,800 m"
      ]
    ],
    "features": [
      {
        "title": [
          "机械快门航测相机",
          "Mechanical-shutter mapping",
          "Mechanischer Verschluss",
          "Mechanische sluiter"
        ],
        "text": [
          "20 MP 广角相机与机械快门，减少运动造成的果冻效应；JPEG 最短拍照间隔 0.5 秒。",
          "The 20 MP wide camera uses a mechanical shutter to reduce rolling-shutter distortion; JPEG intervals start at 0.5 seconds.",
          "20-MP-Weitwinkelkamera mit mechanischem Verschluss reduziert Rolling-Shutter-Verzerrungen; JPEG-Intervalle ab 0,5 Sekunden.",
          "De 20MP-groothoekcamera gebruikt een mechanische sluiter tegen rolling-shuttervervorming; JPEG-intervallen vanaf 0,5 seconde."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "title": [
          "多角度获取建模影像",
          "Capture multiple angles",
          "Mehrere Aufnahmewinkel",
          "Meerdere opnamehoeken"
        ],
        "text": [
          "支持智能倾斜摄影与五向倾斜摄影，服务建筑和地形建模影像采集。",
          "Smart oblique and five-directional oblique capture support imagery collection for buildings and terrain models.",
          "Intelligente und fünffach gerichtete Schrägaufnahmen für Gebäude- und Geländemodelle.",
          "Slimme en vijfrichtings-schuine opnamen ondersteunen beeldverzameling voor gebouwen en terreinmodellen."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "title": [
          "RTK 定位",
          "RTK positioning",
          "RTK-Positionierung",
          "RTK-positionering"
        ],
        "text": [
          "内置 RTK 配合修正数据，为影像提供精确位置参考。成果质量仍取决于航线、重叠度和处理流程。",
          "Integrated RTK with correction data provides precise image positions. Outputs still depend on routes, overlap and processing.",
          "Integriertes RTK mit Korrekturdaten liefert präzise Bildpositionen. Ergebnisse hängen auch von Route, Überlappung und Verarbeitung ab.",
          "Geïntegreerde RTK met correctiedata levert nauwkeurige beeldposities. Resultaten hangen ook af van route, overlap en verwerking."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "title": [
          "兼顾细节检查",
          "Inspect details too",
          "Auch Details prüfen",
          "Ook details inspecteren"
        ],
        "text": [
          "70 mm 和 168 mm 长焦配合激光测距，补充工程现场的细节观察。",
          "70 mm and 168 mm tele cameras plus laser ranging complement site documentation with detail views.",
          "70- und 168-mm-Telekameras sowie Laserentfernungsmessung ergänzen die Baustellendokumentation.",
          "Telecamera’s van 70 en 168 mm en laserafstandmeting vullen bouwplaatsdocumentatie aan."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      }
    ],
    "choiceTitle": [
      "从采集到成果",
      "From capture to deliverables",
      "Von der Aufnahme zum Ergebnis",
      "Van opname tot resultaat"
    ],
    "choices": [
      {
        "title": [
          "规划与采集",
          "Plan and capture",
          "Planen und erfassen",
          "Plannen en opnemen"
        ],
        "text": [
          "在 DJI Pilot 2 中规划航测任务，按项目选择正射或倾斜采集。",
          "Plan mapping missions in DJI Pilot 2 and choose nadir or oblique capture for the project.",
          "Vermessungsmissionen in DJI Pilot 2 planen und Nadir- oder Schrägaufnahmen wählen.",
          "Plan karteringsmissies in DJI Pilot 2 en kies nadir- of schuine opnamen."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "title": [
          "RTK 修正来源",
          "RTK corrections",
          "RTK-Korrekturen",
          "RTK-correcties"
        ],
        "text": [
          "根据现场网络与覆盖条件确认网络 RTK 或 D-RTK 3 基站方案。",
          "Confirm network RTK or a D-RTK 3 station according to connectivity and coverage.",
          "Netzwerk-RTK oder D-RTK 3 entsprechend Verbindung und Abdeckung wählen.",
          "Kies netwerk-RTK of een D-RTK 3-station op basis van verbinding en dekking."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "title": [
          "DJI Terra",
          "DJI Terra",
          "DJI Terra",
          "DJI Terra"
        ],
        "text": [
          "影像可进入 DJI Terra 重建流程；软件许可与交付成果要求单独确认。",
          "Process imagery in DJI Terra; confirm software licensing and required deliverables separately.",
          "Bildverarbeitung in DJI Terra; Softwarelizenz und benötigte Ergebnisse separat abstimmen.",
          "Verwerk beelden in DJI Terra; bevestig softwarelicenties en gewenste resultaten afzonderlijk."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      }
    ],
    "specs": [
      {
        "label": [
          "广角相机",
          "Wide camera",
          "Weitwinkelkamera",
          "Groothoekcamera"
        ],
        "value": [
          "4/3″ CMOS · 20 MP · 24 mm",
          "4/3″ CMOS · 20 MP · 24 mm",
          "4/3″ CMOS · 20 MP · 24 mm",
          "4/3″ CMOS · 20 MP · 24 mm"
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "label": [
          "机械快门",
          "Mechanical shutter",
          "Mechanischer Verschluss",
          "Mechanische sluiter"
        ],
        "value": [
          "2–1/2000 s",
          "2–1/2000 s",
          "2–1/2000 s",
          "2–1/2000 s"
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "label": [
          "最短拍照间隔",
          "Min. photo interval",
          "Min. Fotointervall",
          "Min. foto-interval"
        ],
        "value": [
          "0.5 s",
          "0.5 s",
          "0.5 s",
          "0.5 s"
        ],
        "note": [
          "JPEG；JPEG+RAW 最短 2 秒。",
          "JPEG; JPEG+RAW starts at 2 seconds.",
          "JPEG; JPEG+RAW ab 2 Sekunden.",
          "JPEG; JPEG+RAW vanaf 2 seconden."
        ]
      },
      {
        "label": [
          "最长飞行时间",
          "Max. flight time",
          "Max. Flugzeit",
          "Max. vliegtijd"
        ],
        "value": [
          "49 min",
          "49 min",
          "49 min",
          "49 min"
        ],
        "note": [
          "标准桨、无外挂、无风、约 9 m/s 飞至电量 0%；低噪桨为 46 分钟。",
          "Standard propellers, no accessories, no wind, about 9 m/s to 0% battery; 46 min with low-noise propellers.",
          "Standardpropeller, ohne Zubehör, windstill, ca. 9 m/s bis 0 % Akku; 46 Min. mit geräuscharmen Propellern.",
          "Standaardpropellers, zonder accessoires, windstil, circa 9 m/s tot 0% accu; 46 min met geluidsarme propellers."
        ]
      },
      {
        "label": [
          "中长焦相机",
          "Tele cameras",
          "Telekameras",
          "Telecamera’s"
        ],
        "value": [
          "48 MP · 70 mm / 48 MP · 168 mm",
          "48 MP · 70 mm / 48 MP · 168 mm",
          "48 MP · 70 mm / 48 MP · 168 mm",
          "48 MP · 70 mm / 48 MP · 168 mm"
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "label": [
          "激光测距",
          "Laser rangefinder",
          "Laserentfernungsmesser",
          "Laserafstandsmeter"
        ],
        "value": [
          "1,800 m",
          "1,800 m",
          "1,800 m",
          "1,800 m"
        ],
        "note": [
          "1 Hz；20% 反射率目标，测距性能取决于环境与目标。",
          "At 1 Hz with a 20% reflective target; performance depends on target and environment.",
          "Bei 1 Hz und 20 % Zielreflexion; abhängig von Ziel und Umgebung.",
          "Bij 1 Hz en 20% doelreflectie; afhankelijk van doel en omgeving."
        ]
      },
      {
        "label": [
          "RTK 固定解精度",
          "RTK fixed-solution accuracy",
          "RTK-Genauigkeit bei fester Lösung",
          "RTK-nauwkeurigheid bij fixed solution"
        ],
        "value": [
          "1 cm + 1 ppm / 1.5 cm + 1 ppm",
          "1 cm + 1 ppm / 1.5 cm + 1 ppm",
          "1 cm + 1 ppm / 1.5 cm + 1 ppm",
          "1 cm + 1 ppm / 1.5 cm + 1 ppm"
        ],
        "note": [
          "水平 / 垂直；定位精度不等于最终测绘成果精度。",
          "Horizontal / vertical; positioning accuracy is not final survey accuracy.",
          "Horizontal / vertikal; Positionsgenauigkeit ist nicht die Genauigkeit des Vermessungsergebnisses.",
          "Horizontaal / verticaal; positioneringsnauwkeurigheid is niet de nauwkeurigheid van het eindresultaat."
        ]
      },
      {
        "label": [
          "图传距离（CE）",
          "Transmission range (CE)",
          "Übertragungsreichweite (CE)",
          "Transmissiebereik (CE)"
        ],
        "value": [
          "12 km",
          "12 km",
          "12 km",
          "12 km"
        ],
        "note": [
          "无遮挡、无干扰的通信测试距离，不是往返作业半径。",
          "Communication test range without obstruction or interference, not a round-trip operating radius.",
          "Kommunikationsreichweite ohne Hindernisse oder Störungen, kein Einsatzradius mit Rückflug.",
          "Communicatiebereik zonder obstakels of storing, geen werkstraal inclusief terugvlucht."
        ]
      },
      {
        "label": [
          "起飞重量",
          "Takeoff weight",
          "Startgewicht",
          "Startgewicht"
        ],
        "value": [
          "1,219 g",
          "1,219 g",
          "1,219 g",
          "1,219 g"
        ],
        "note": [
          "含标准桨、电池与存储卡。",
          "With standard propellers, battery and microSD card.",
          "Mit Standardpropellern, Akku und microSD-Karte.",
          "Met standaardpropellers, accu en microSD-kaart."
        ]
      },
      {
        "label": [
          "工作温度",
          "Operating temperature",
          "Betriebstemperatur",
          "Bedrijfstemperatuur"
        ],
        "value": [
          "−10–40 °C",
          "−10–40 °C",
          "−10–40 °C",
          "−10–40 °C"
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "label": [
          "最大抗风能力",
          "Max. wind resistance",
          "Max. Windwiderstand",
          "Max. windbestendigheid"
        ],
        "value": [
          "12 m/s",
          "12 m/s",
          "12 m/s",
          "12 m/s"
        ],
        "note": [
          "起飞与降落。",
          "During takeoff and landing.",
          "Bei Start und Landung.",
          "Bij opstijgen en landen."
        ]
      }
    ],
    "hero": "/images/drones/dji/official/m4.webp",
    "faq": [
      {
        "question": [
          "4E 有热成像功能吗？",
          "Does 4E have thermal imaging?",
          "Hat die 4E eine Wärmebildkamera?",
          "Heeft 4E warmtebeeld?"
        ],
        "answer": [
          "没有。4E 的重点是机械快门航测；需要温度信息或热成像搜寻时，应比较 Matrice 4T。",
          "No. 4E focuses on mechanical-shutter mapping; compare Matrice 4T for thermal or temperature information.",
          "Nein. 4E konzentriert sich auf Vermessung mit mechanischem Verschluss. Für Wärmebild die Matrice 4T vergleichen.",
          "Nee. 4E richt zich op kartering met mechanische sluiter. Vergelijk de Matrice 4T voor warmtebeeld."
        ]
      },
      {
        "question": [
          "需要额外购买 RTK 基站吗？",
          "Do I need an RTK base station?",
          "Brauche ich eine RTK-Basisstation?",
          "Heb ik een RTK-basisstation nodig?"
        ],
        "answer": [
          "不一定。需根据网络 RTK 服务覆盖、现场网络和精度要求确认修正数据来源；机内 RTK 不等于自动获得修正服务或保证最终成果精度。",
          "Not necessarily. Choose a correction source based on network RTK coverage, connectivity and accuracy needs. Onboard RTK does not include a correction service or guarantee final output accuracy.",
          "Nicht zwingend. Korrekturquelle nach Netzwerk-RTK-Abdeckung, Verbindung und Genauigkeitsbedarf wählen. Integriertes RTK beinhaltet keinen Korrekturdienst und garantiert keine Ergebnisgenauigkeit.",
          "Niet altijd. Kies de correctiebron op basis van netwerk-RTK-dekking, verbinding en nauwkeurigheidseisen. Ingebouwde RTK omvat geen correctiedienst en garandeert geen eindnauwkeurigheid."
        ]
      },
      {
        "question": [
          "报价会包含哪些内容？",
          "What will the quotation include?",
          "Was enthält das Angebot?",
          "Wat staat er in de offerte?"
        ],
        "answer": [
          "我们会按需求列清飞行器、作业系统或附件、电池与充电设备，以及需要的软件和服务。官网图片与能力展示不代表所有项目均为标配；最终以确认报价为准。",
          "We will itemise the aircraft, task systems or accessories, batteries, charging equipment and requested software/services. Images and capabilities do not mean everything is included; the confirmed quotation defines the package.",
          "Wir führen Fluggerät, Systeme/Zubehör, Akkus, Ladetechnik sowie gewünschte Software und Leistungen auf. Bilder bedeuten keinen vollständigen Lieferumfang; maßgeblich ist das bestätigte Angebot.",
          "We specificeren toestel, systemen/accessoires, accu’s, laadapparatuur en gewenste software/diensten. Afbeeldingen betekenen niet dat alles inbegrepen is; de bevestigde offerte bepaalt het pakket."
        ]
      }
    ]
  },
  {
    "id": "m4d",
    "slug": "matrice-4d-series",
    "name": "DJI Matrice 4D / 4TD",
    "group": "dock",
    "asset": "m4d",
    "source": "https://enterprise.dji.com/dock-3",
    "tagline": [
      "从航测到热成像，选择合适的机场机型",
      "Mapping or thermal missions. Choose your aircraft.",
      "Vermessung oder Wärmebild. Die passende Drohne.",
      "Kartering of warmtebeeld. Kies uw toestel."
    ],
    "intro": [
      "为 DJI Dock 3 设计的两款飞行器：4D 侧重机械快门航测，4TD 增加热成像与红外补光。也可搭配 DJI RC Plus 2 Enterprise 独立使用。",
      "Two aircraft designed for DJI Dock 3: 4D prioritises mechanical-shutter mapping; 4TD adds thermal imaging and infrared illumination. Both also support standalone use with DJI RC Plus 2 Enterprise.",
      "Zwei Fluggeräte für DJI Dock 3: 4D für Vermessung mit mechanischem Verschluss, 4TD mit Wärmebild und Infrarotbeleuchtung. Auch separat mit DJI RC Plus 2 Enterprise einsetzbar.",
      "Twee toestellen voor DJI Dock 3: 4D voor kartering met mechanische sluiter; 4TD voegt warmtebeeld en infraroodverlichting toe. Ook zelfstandig inzetbaar met DJI RC Plus 2 Enterprise."
    ],
    "metrics": [
      [
        [
          "最长飞行时间",
          "Max. flight time",
          "Max. Flugzeit",
          "Max. vliegtijd"
        ],
        "54 min"
      ],
      [
        [
          "防护等级",
          "Ingress protection",
          "Schutzart",
          "Beschermingsklasse"
        ],
        "IP55"
      ],
      [
        [
          "起飞重量",
          "Takeoff weight",
          "Startgewicht",
          "Startgewicht"
        ],
        "1,850 g"
      ],
      [
        [
          "最大抗风能力",
          "Max. wind resistance",
          "Max. Windwiderstand",
          "Max. windbestendigheid"
        ],
        "12 m/s"
      ]
    ],
    "features": [
      {
        "title": [
          "4D：为测绘采集影像",
          "4D: mapping imagery",
          "4D: Vermessungsbilder",
          "4D: karteringsbeelden"
        ],
        "text": [
          "4/3 英寸 20 MP 广角相机、机械快门，配合 70 mm 和 168 mm 长焦与激光测距。",
          "A 4/3-inch 20 MP wide camera with mechanical shutter, 70 mm and 168 mm tele cameras and laser ranging.",
          "4/3-Zoll-Weitwinkelkamera mit 20 MP und mechanischem Verschluss, 70-/168-mm-Telekameras und Laserentfernungsmessung.",
          "4/3-inch 20MP-groothoekcamera met mechanische sluiter, telecamera’s van 70/168 mm en laserafstandmeting."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "title": [
          "4TD：面向昼夜巡检",
          "4TD: day and night inspection",
          "4TD: Inspektion bei Tag und Nacht",
          "4TD: inspectie overdag en ’s nachts"
        ],
        "text": [
          "48 MP 广角相机与 640×512 原生热成像，支持高分辨率红外输出和近红外补光。",
          "A 48 MP wide camera and native 640×512 thermal sensor, with enhanced infrared output and near-infrared illumination.",
          "48-MP-Weitwinkelkamera und nativer 640×512-Wärmebildsensor mit erhöhter Infrarot-Ausgabeauflösung und Nahinfrarotbeleuchtung.",
          "48MP-groothoekcamera en oorspronkelijke 640×512-warmtesensor, met verbeterde infrarooduitvoer en nabij-infraroodverlichting."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "title": [
          "机场远程作业",
          "Remote dock operations",
          "Ferngesteuerter Dock-Betrieb",
          "Op afstand werken via een dock"
        ],
        "text": [
          "配合 Dock 3 和 FlightHub 2 规划、执行与管理远程任务，机场和飞行器的防护等级分别计算。",
          "Use Dock 3 and FlightHub 2 to plan, execute and manage remote missions. Dock and aircraft have separate protection ratings.",
          "Mit Dock 3 und FlightHub 2 ferngesteuerte Missionen planen und verwalten. Dock und Drohne haben unterschiedliche Schutzarten.",
          "Plan, voer uit en beheer missies met Dock 3 en FlightHub 2. Dock en drone hebben afzonderlijke beschermingsklassen."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "title": [
          "现场也能独立飞行",
          "Standalone field use",
          "Auch ohne Dock einsetzbar",
          "Ook zonder dock inzetbaar"
        ],
        "text": [
          "支持 RC Plus 2 Enterprise；选配障碍物感知模块可扩展复杂环境感知能力。",
          "Supports RC Plus 2 Enterprise; an optional obstacle-sensing module extends sensing for complex environments.",
          "Unterstützt RC Plus 2 Enterprise; ein optionales Hinderniserkennungsmodul erweitert die Wahrnehmung.",
          "Ondersteunt RC Plus 2 Enterprise; een optionele obstakelsensormodule breidt de waarneming uit."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      }
    ],
    "choiceTitle": [
      "先选相机，再选部署方式",
      "Choose the camera, then deployment",
      "Erst Kamera, dann Betriebsart",
      "Eerst de camera, dan de inzetvorm"
    ],
    "choices": [
      {
        "title": [
          "Matrice 4D",
          "Matrice 4D",
          "Matrice 4D",
          "Matrice 4D"
        ],
        "text": [
          "优先关注正射影像、倾斜摄影与工程测绘：选择带机械快门的 4D。",
          "For orthophotos, oblique capture and surveying, choose the mechanical-shutter 4D.",
          "Für Orthofotos, Schrägaufnahmen und Vermessung: 4D mit mechanischem Verschluss.",
          "Voor orthofoto’s, schuine opnamen en landmeting: 4D met mechanische sluiter."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "title": [
          "Matrice 4TD",
          "Matrice 4TD",
          "Matrice 4TD",
          "Matrice 4TD"
        ],
        "text": [
          "需要热成像与夜间观察：选择 4TD；它不是 4D 相机上可选装的热成像云台。",
          "For thermal imaging and night observation choose 4TD; thermal imaging is not a removable option for the 4D camera.",
          "Für Wärmebild und Nachtbeobachtung: 4TD. Wärmebild ist kein nachrüstbarer 4D-Kameragimbal.",
          "Voor warmtebeeld en nachtobservatie: 4TD. Warmtebeeld is geen verwisselbare optie voor de 4D-camera."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "title": [
          "DJI Dock 3 / RC Plus 2",
          "DJI Dock 3 / RC Plus 2",
          "DJI Dock 3 / RC Plus 2",
          "DJI Dock 3 / RC Plus 2"
        ],
        "text": [
          "机场部署需确认电源、网络和场地；手持遥控作业需单独确认遥控器与电池配置。",
          "Dock installation requires power, connectivity and site planning; manual operations require a confirmed controller and battery package.",
          "Dock-Installation erfordert Strom, Netzwerk und Standortplanung; manueller Betrieb benötigt passende Fernsteuerung und Akkus.",
          "Dock-installatie vereist stroom, netwerk en locatieplanning; handmatige inzet vereist passende controller en accu’s."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      }
    ],
    "specs": [
      {
        "label": [
          "最长飞行时间",
          "Max. flight time",
          "Max. Flugzeit",
          "Max. vliegtijd"
        ],
        "value": [
          "54 min",
          "54 min",
          "54 min",
          "54 min"
        ],
        "note": [
          "无风、海拔 20 m、12 m/s 匀速飞行至电量 0%，关闭避障；实际任务需预留返航电量。",
          "No wind, 20 m altitude, 12 m/s to 0% battery, obstacle avoidance off; reserve energy for return.",
          "Windstill, 20 m Höhe, 12 m/s bis 0 % Akku, Hindernisvermeidung aus; Rückflugreserve einplanen.",
          "Windstil, 20 m hoogte, 12 m/s tot 0% accu, obstakelvermijding uit; reserveer energie voor de terugvlucht."
        ]
      },
      {
        "label": [
          "广角相机",
          "Wide camera",
          "Weitwinkelkamera",
          "Groothoekcamera"
        ],
        "value": [
          "4D：4/3″ · 20 MP；4TD：1/1.3″ · 48 MP",
          "4D: 4/3″ · 20 MP; 4TD: 1/1.3″ · 48 MP",
          "4D: 4/3″ · 20 MP; 4TD: 1/1.3″ · 48 MP",
          "4D: 4/3″ · 20 MP; 4TD: 1/1.3″ · 48 MP"
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "label": [
          "中长焦相机",
          "Tele cameras",
          "Telekameras",
          "Telecamera’s"
        ],
        "value": [
          "48 MP · 70 mm / 48 MP · 168 mm",
          "48 MP · 70 mm / 48 MP · 168 mm",
          "48 MP · 70 mm / 48 MP · 168 mm",
          "48 MP · 70 mm / 48 MP · 168 mm"
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "label": [
          "原生热成像分辨率",
          "Native thermal resolution",
          "Native Wärmebildauflösung",
          "Oorspronkelijke thermische resolutie"
        ],
        "value": [
          "4TD: 640 × 512",
          "4TD: 640 × 512",
          "4TD: 640 × 512",
          "4TD: 640 × 512"
        ],
        "note": [
          "增强模式输出 1280×1024；4D 无热成像。",
          "Enhanced output 1280×1024; 4D has no thermal camera.",
          "Erhöhte Ausgabeauflösung 1280×1024; 4D ohne Wärmebildkamera.",
          "Verbeterde uitvoer 1280×1024; 4D heeft geen warmtecamera."
        ]
      },
      {
        "label": [
          "激光测距",
          "Laser rangefinder",
          "Laserentfernungsmesser",
          "Laserafstandsmeter"
        ],
        "value": [
          "1,800 m",
          "1,800 m",
          "1,800 m",
          "1,800 m"
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "label": [
          "防护等级",
          "Ingress protection",
          "Schutzart",
          "Beschermingsklasse"
        ],
        "value": [
          "IP55",
          "IP55",
          "IP55",
          "IP55"
        ],
        "note": [
          "防护能力会随磨损下降，不代表可在任意天气作业。",
          "Protection can decline with wear; this does not mean operation in all weather.",
          "Schutz kann mit Verschleiß abnehmen; kein Betrieb bei beliebigem Wetter.",
          "Bescherming kan afnemen door slijtage; dit betekent geen inzet onder alle weersomstandigheden."
        ]
      },
      {
        "label": [
          "工作温度",
          "Operating temperature",
          "Betriebstemperatur",
          "Bedrijfstemperatuur"
        ],
        "value": [
          "−30–50 °C",
          "−30–50 °C",
          "−30–50 °C",
          "−30–50 °C"
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "label": [
          "起飞重量",
          "Takeoff weight",
          "Startgewicht",
          "Startgewicht"
        ],
        "value": [
          "1,850 g",
          "1,850 g",
          "1,850 g",
          "1,850 g"
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "label": [
          "最大抗风能力",
          "Max. wind resistance",
          "Max. Windwiderstand",
          "Max. windbestendigheid"
        ],
        "value": [
          "12 m/s",
          "12 m/s",
          "12 m/s",
          "12 m/s"
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "label": [
          "配套机场",
          "Compatible dock",
          "Passendes Dock",
          "Compatibel dock"
        ],
        "value": [
          "DJI Dock 3",
          "DJI Dock 3",
          "DJI Dock 3",
          "DJI Dock 3"
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "label": [
          "Dock 3 充电时间",
          "Dock 3 charging time",
          "Ladezeit im Dock 3",
          "Laadtijd in Dock 3"
        ],
        "value": [
          "27 min",
          "27 min",
          "27 min",
          "27 min"
        ],
        "note": [
          "25 °C，关机状态，15% 至 95%。",
          "25 °C, powered off, 15% to 95%.",
          "25 °C, ausgeschaltet, 15 % bis 95 %.",
          "25 °C, uitgeschakeld, 15% tot 95%."
        ]
      }
    ],
    "hero": "/images/drones/dji/official/m4d-landscape.webp",
    "faq": [
      {
        "question": [
          "买了机场就能直接开始远程作业吗？",
          "Can the dock operate immediately after purchase?",
          "Ist das Dock nach dem Kauf sofort einsatzbereit?",
          "Kan het dock direct na aankoop worden ingezet?"
        ],
        "answer": [
          "还需完成场地、电源、接地、网络和通信覆盖核查，配置云平台并进行现场调试。请提供部署地址与任务范围，以便确认安装和运行所需条件。",
          "Site, power, grounding, network and communications checks, cloud setup and commissioning are still required. Share the deployment location and mission area to confirm requirements.",
          "Standort, Strom, Erdung, Netzwerk und Funkabdeckung sowie Cloud-Einrichtung und Inbetriebnahme sind erforderlich. Standort und Einsatzgebiet angeben.",
          "Controle van locatie, stroom, aarding, netwerk en radiodekking, cloudinstelling en inbedrijfstelling blijven nodig. Geef locatie en missiegebied door."
        ]
      },
      {
        "question": [
          "报价会包含哪些内容？",
          "What will the quotation include?",
          "Was enthält das Angebot?",
          "Wat staat er in de offerte?"
        ],
        "answer": [
          "我们会按需求列清飞行器、作业系统或附件、电池与充电设备，以及需要的软件和服务。官网图片与能力展示不代表所有项目均为标配；最终以确认报价为准。",
          "We will itemise the aircraft, task systems or accessories, batteries, charging equipment and requested software/services. Images and capabilities do not mean everything is included; the confirmed quotation defines the package.",
          "Wir führen Fluggerät, Systeme/Zubehör, Akkus, Ladetechnik sowie gewünschte Software und Leistungen auf. Bilder bedeuten keinen vollständigen Lieferumfang; maßgeblich ist das bestätigte Angebot.",
          "We specificeren toestel, systemen/accessoires, accu’s, laadapparatuur en gewenste software/diensten. Afbeeldingen betekenen niet dat alles inbegrepen is; de bevestigde offerte bepaalt het pakket."
        ]
      }
    ]
  },
  {
    "id": "dock4",
    "slug": "dock-4",
    "name": "DJI Dock 4 · Matrice 5TD",
    "group": "dock",
    "asset": "dock4",
    "source": "https://enterprise.dji.com/dock-4",
    "tagline": [
      "换电接力，让远程任务更连贯",
      "Battery swaps for continuous remote workflows",
      "Akkuwechsel für fortlaufende Fernmissionen",
      "Accuwissels voor doorlopende missies op afstand"
    ],
    "intro": [
      "Dock 4 将自动换电、Matrice 5TD 多传感器飞行器与独立 O4 地面站结合。重点不仅是单次飞行，而是现场部署、任务周转与远程管理。",
      "Dock 4 combines automated battery swapping, the multisensor Matrice 5TD and a separate O4 Ground Station. Plan the site, turnaround and remote workflow as a complete system.",
      "Dock 4 verbindet automatischen Akkuwechsel, Matrice 5TD mit mehreren Sensoren und eine separate O4-Bodenstation. Standort, Einsatzwechsel und Fernbetrieb bilden ein Gesamtsystem.",
      "Dock 4 combineert automatische accuwissels, de multisensor Matrice 5TD en een apart O4-grondstation. Plan locatie, wisseltijd en bediening op afstand als één systeem."
    ],
    "metrics": [
      [
        [
          "换电时间",
          "Battery swap",
          "Akkuwechsel",
          "Accuwissel"
        ],
        "<25 s"
      ],
      [
        [
          "5TD 最长飞行",
          "5TD max. flight",
          "5TD max. Flugzeit",
          "5TD max. vliegtijd"
        ],
        "59 min"
      ],
      [
        [
          "机场防护",
          "Dock protection",
          "Dock-Schutzart",
          "Dockbescherming"
        ],
        "IP56"
      ],
      [
        [
          "原生热成像分辨率",
          "Native thermal resolution",
          "Native Wärmebildauflösung",
          "Oorspronkelijke thermische resolutie"
        ],
        "1280 × 1024"
      ]
    ],
    "features": [
      {
        "title": [
          "快速周转",
          "Fast turnaround",
          "Schneller Einsatzwechsel",
          "Snelle inzetwissel"
        ],
        "text": [
          "自动换电小于 25 秒；官方落地至再次起飞的周转时间小于 45 秒。",
          "Automated swapping takes under 25 seconds; DJI specifies under 45 seconds from landing to the next takeoff.",
          "Automatischer Akkuwechsel unter 25 Sekunden; laut DJI unter 45 Sekunden von Landung bis erneutem Start.",
          "Automatisch wisselen duurt minder dan 25 seconden; DJI noemt minder dan 45 seconden van landing tot opnieuw opstijgen."
        ],
        "note": [
          "换电计时从舱盖完全关闭开始，均为受控环境测试值。",
          "Swap timing starts when the cover is fully closed; both figures are controlled-test results.",
          "Wechselzeit ab vollständig geschlossenem Deckel; beide Werte stammen aus kontrollierten Tests.",
          "Wisseltijd vanaf volledig gesloten deksel; beide waarden gelden voor gecontroleerde tests."
        ]
      },
      {
        "title": [
          "5TD 昼夜成像",
          "5TD day and night imaging",
          "5TD-Bildgebung bei Tag und Nacht",
          "5TD-beeldvorming overdag en ’s nachts"
        ],
        "text": [
          "三个 50 MP 可见光相机、252 mm 长焦与原生 1280×1024 热成像，支持可见光与红外融合观察。",
          "Three 50 MP visual cameras, 252 mm telephoto and native 1280×1024 thermal imaging support visual/thermal fusion views.",
          "Drei 50-MP-Sichtkameras, 252-mm-Tele und natives 1280×1024-Wärmebild unterstützen kombinierte Ansichten.",
          "Drie 50MP-camera’s, 252mm-tele en oorspronkelijk 1280×1024-warmtebeeld ondersteunen gecombineerde weergaven."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "title": [
          "多传感器环境感知",
          "Multisensor environment sensing",
          "Umfelderfassung mit mehreren Sensoren",
          "Omgevingswaarneming met meerdere sensoren"
        ],
        "text": [
          "旋转激光雷达、毫米波雷达与双目视觉协同感知障碍；感知性能受环境和目标影响。",
          "Rotating LiDAR, mmWave radar and binocular vision sense obstacles; performance depends on the environment and targets.",
          "Rotierendes LiDAR, mmWave-Radar und Stereosicht erkennen Hindernisse; Leistung abhängig von Umgebung und Ziel.",
          "Roterende LiDAR, mmWave-radar en stereovisie detecteren obstakels; prestaties hangen af van omgeving en doelen."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "title": [
          "独立布置通信节点",
          "Position communications independently",
          "Kommunikation separat positionieren",
          "Communicatie afzonderlijk plaatsen"
        ],
        "text": [
          "O4 地面站可与机场分开安装，用于通信与 RTK；FlightHub 2 负责远程任务和设备管理。",
          "The O4 Ground Station can be mounted separately for communications and RTK; FlightHub 2 manages remote missions and devices.",
          "O4-Bodenstation separat für Kommunikation und RTK montierbar; FlightHub 2 verwaltet Missionen und Geräte.",
          "Het O4-grondstation kan apart worden geplaatst voor communicatie en RTK; FlightHub 2 beheert missies en apparaten."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      }
    ],
    "choiceTitle": [
      "部署前，把系统条件确认完整",
      "Confirm the complete deployment",
      "Gesamte Installation abstimmen",
      "De volledige installatie afstemmen"
    ],
    "choices": [
      {
        "title": [
          "机场与飞行器",
          "Dock and aircraft",
          "Dock und Fluggerät",
          "Dock en toestel"
        ],
        "text": [
          "以 Dock 4 和 Matrice 5TD 为基础，确认备电池数量与周转需求；不可把 4D / 4TD 当作同一配套机型。",
          "Start with Dock 4 and Matrice 5TD; confirm spare batteries and turnaround needs. 4D/4TD are a different dock aircraft family.",
          "Dock 4 und Matrice 5TD bilden die Basis; Wechselakkus und Einsatzfolge abstimmen. 4D/4TD gehören zu einer anderen Dock-Familie.",
          "Begin met Dock 4 en Matrice 5TD; bepaal reserveaccu’s en wisselbehoefte. 4D/4TD behoren tot een andere dockfamilie."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "title": [
          "供电与网络",
          "Power and network",
          "Strom und Netzwerk",
          "Stroom en netwerk"
        ],
        "text": [
          "机场支持 100–240 V 交流输入，最大 2000 W；现场需确认接地、防雷与地面站网络链路。",
          "The dock accepts 100–240 V AC at up to 2000 W; confirm grounding, surge protection and the ground-station network link.",
          "100–240 V AC, maximal 2000 W; Erdung, Überspannungsschutz und Netzwerk der Bodenstation prüfen.",
          "100–240 V AC, maximaal 2000 W; controleer aarding, overspanningsbeveiliging en het netwerk van het grondstation."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "title": [
          "DJI FlightHub 2",
          "DJI FlightHub 2",
          "DJI FlightHub 2",
          "DJI FlightHub 2"
        ],
        "text": [
          "确认任务管理、数据存储与软件服务范围；安装与运行条件须结合部署地点评估。",
          "Confirm mission management, storage and software services; assess installation and operating conditions for the site.",
          "Missionsverwaltung, Speicherung und Softwareleistungen abstimmen; Installation und Betrieb standortbezogen prüfen.",
          "Stem missiebeheer, opslag en softwarediensten af; beoordeel installatie en gebruik voor de locatie."
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      }
    ],
    "specs": [
      {
        "label": [
          "自动换电",
          "Automatic battery swap",
          "Automatischer Akkuwechsel",
          "Automatische accuwissel"
        ],
        "value": [
          "<25 s",
          "<25 s",
          "<25 s",
          "<25 s"
        ],
        "note": [
          "舱盖完全关闭至完成换电。",
          "Cover fully closed to swap completion.",
          "Ab geschlossenem Deckel bis Wechselabschluss.",
          "Van volledig gesloten deksel tot voltooide wissel."
        ]
      },
      {
        "label": [
          "任务周转",
          "Operational turnaround",
          "Einsatzwechsel",
          "Inzetwissel"
        ],
        "value": [
          "<45 s",
          "<45 s",
          "<45 s",
          "<45 s"
        ],
        "note": [
          "落地至再次起飞，受控测试。",
          "Landing to next takeoff, controlled test.",
          "Landung bis Start, kontrollierter Test.",
          "Landing tot opstijgen, gecontroleerde test."
        ]
      },
      {
        "label": [
          "机场电池存储 / 并行充电",
          "Dock battery storage / parallel charging",
          "Akkulagerung / paralleles Laden",
          "Accuopslag / parallel laden"
        ],
        "value": [
          "3 / 2",
          "3 / 2",
          "3 / 2",
          "3 / 2"
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "label": [
          "电池充电",
          "Battery charging",
          "Akkuladung",
          "Acculaden"
        ],
        "value": [
          "27 min",
          "27 min",
          "27 min",
          "27 min"
        ],
        "note": [
          "25 °C，15% 至 95%。",
          "25 °C, 15% to 95%.",
          "25 °C, 15 % bis 95 %.",
          "25 °C, 15% tot 95%."
        ]
      },
      {
        "label": [
          "最长飞行时间",
          "Max. flight time",
          "Max. Flugzeit",
          "Max. vliegtijd"
        ],
        "value": [
          "59 min",
          "59 min",
          "59 min",
          "59 min"
        ],
        "note": [
          "5TD 无载荷，海拔 20 m、无风、15 m/s 至电量 0%。",
          "5TD without payload, 20 m altitude, no wind, 15 m/s to 0% battery.",
          "5TD ohne Nutzlast, 20 m Höhe, windstill, 15 m/s bis 0 % Akku.",
          "5TD zonder lading, 20 m hoogte, windstil, 15 m/s tot 0% accu."
        ]
      },
      {
        "label": [
          "原生热成像分辨率",
          "Native thermal resolution",
          "Native Wärmebildauflösung",
          "Oorspronkelijke thermische resolutie"
        ],
        "value": [
          "1280 × 1024",
          "1280 × 1024",
          "1280 × 1024",
          "1280 × 1024"
        ],
        "note": [
          "UHR 输出 2560×2048，不是原生分辨率。",
          "UHR output 2560×2048 is not native resolution.",
          "UHR-Ausgabe 2560×2048 ist nicht nativ.",
          "UHR-uitvoer 2560×2048 is niet de oorspronkelijke resolutie."
        ]
      },
      {
        "label": [
          "防护等级",
          "Ingress protection",
          "Schutzart",
          "Beschermingsklasse"
        ],
        "value": [
          "机场 IP56 / 飞行器 IP55",
          "Dock IP56 / aircraft IP55",
          "Dock IP56 / Drohne IP55",
          "Dock IP56 / drone IP55"
        ],
        "note": [
          "防护能力会随磨损下降，不代表可在任意天气作业。",
          "Protection can decline with wear; this does not mean operation in all weather.",
          "Schutz kann mit Verschleiß abnehmen; kein Betrieb bei beliebigem Wetter.",
          "Bescherming kan afnemen door slijtage; dit betekent geen inzet onder alle weersomstandigheden."
        ]
      },
      {
        "label": [
          "工作温度",
          "Operating temperature",
          "Betriebstemperatur",
          "Bedrijfstemperatuur"
        ],
        "value": [
          "−40–50 °C",
          "−40–50 °C",
          "−40–50 °C",
          "−40–50 °C"
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "label": [
          "机场重量",
          "Dock weight",
          "Dock-Gewicht",
          "Dockgewicht"
        ],
        "value": [
          "66 kg",
          "66 kg",
          "66 kg",
          "66 kg"
        ],
        "note": [
          "不含机场电池及飞行器。",
          "Excludes stored batteries and aircraft.",
          "Ohne gelagerte Akkus und Fluggerät.",
          "Zonder opgeslagen accu’s en toestel."
        ]
      },
      {
        "label": [
          "交流输入",
          "AC input",
          "AC-Eingang",
          "AC-ingang"
        ],
        "value": [
          "100–240 V · ≤2000 W",
          "100–240 V · ≤2000 W",
          "100–240 V · ≤2000 W",
          "100–240 V · ≤2000 W"
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "label": [
          "最大抗风能力",
          "Max. wind resistance",
          "Max. Windwiderstand",
          "Max. windbestendigheid"
        ],
        "value": [
          "12 m/s",
          "12 m/s",
          "12 m/s",
          "12 m/s"
        ],
        "note": [
          "",
          "",
          "",
          ""
        ]
      }
    ],
    "hero": "/images/drones/dji/official/dock4.webp",
    "faq": [
      {
        "question": [
          "买了机场就能直接开始远程作业吗？",
          "Can the dock operate immediately after purchase?",
          "Ist das Dock nach dem Kauf sofort einsatzbereit?",
          "Kan het dock direct na aankoop worden ingezet?"
        ],
        "answer": [
          "还需完成场地、电源、接地、网络和通信覆盖核查，配置云平台并进行现场调试。请提供部署地址与任务范围，以便确认安装和运行所需条件。",
          "Site, power, grounding, network and communications checks, cloud setup and commissioning are still required. Share the deployment location and mission area to confirm requirements.",
          "Standort, Strom, Erdung, Netzwerk und Funkabdeckung sowie Cloud-Einrichtung und Inbetriebnahme sind erforderlich. Standort und Einsatzgebiet angeben.",
          "Controle van locatie, stroom, aarding, netwerk en radiodekking, cloudinstelling en inbedrijfstelling blijven nodig. Geef locatie en missiegebied door."
        ]
      },
      {
        "question": [
          "报价会包含哪些内容？",
          "What will the quotation include?",
          "Was enthält das Angebot?",
          "Wat staat er in de offerte?"
        ],
        "answer": [
          "我们会按需求列清飞行器、作业系统或附件、电池与充电设备，以及需要的软件和服务。官网图片与能力展示不代表所有项目均为标配；最终以确认报价为准。",
          "We will itemise the aircraft, task systems or accessories, batteries, charging equipment and requested software/services. Images and capabilities do not mean everything is included; the confirmed quotation defines the package.",
          "Wir führen Fluggerät, Systeme/Zubehör, Akkus, Ladetechnik sowie gewünschte Software und Leistungen auf. Bilder bedeuten keinen vollständigen Lieferumfang; maßgeblich ist das bestätigte Angebot.",
          "We specificeren toestel, systemen/accessoires, accu’s, laadapparatuur en gewenste software/diensten. Afbeeldingen betekenen niet dat alles inbegrepen is; de bevestigde offerte bepaalt het pakket."
        ]
      }
    ]
  }
];
const labels={
  "overview": [
    "核心能力",
    "Capabilities",
    "Funktionen",
    "Functies"
  ],
  "configuration": [
    "方案选择",
    "Options",
    "Optionen",
    "Opties"
  ],
  "specifications": [
    "技术参数",
    "Specifications",
    "Daten",
    "Specificaties"
  ],
  "inquiry": [
    "咨询采购",
    "Enquire",
    "Anfrage",
    "Aanvragen"
  ],
  "catalogue": [
    "DJI 产品",
    "DJI products",
    "DJI-Produkte",
    "DJI-producten"
  ],
  "capabilitiesTitle": [
    "先看清它能做什么",
    "Understand what it can do",
    "Verstehen, was es leistet",
    "Begrijpen wat het kan"
  ],
  "specsTitle": [
    "关键参数，连同适用条件",
    "Key specifications, with conditions",
    "Technische Daten mit Bedingungen",
    "Specificaties met voorwaarden"
  ],
  "specsIntro": [
    "把不同机型、工作模式与选配条件分开比较，避免只看最大值。",
    "Compare models, operating modes and optional equipment separately, rather than relying on peak figures.",
    "Modelle, Betriebsarten und Optionen getrennt vergleichen, statt nur Höchstwerte zu betrachten.",
    "Vergelijk modellen, bedrijfsmodi en opties afzonderlijk in plaats van alleen piekwaarden."
  ],
  "conditions": [
    "数字为 DJI 指定条件下的测试值。实际表现随载荷、环境和系统配置变化，详细条件见参数表。",
    "Figures are DJI test values under specified conditions. Actual performance varies with load, environment and configuration; see the specification notes.",
    "Werte aus DJI-Tests unter definierten Bedingungen. Leistung abhängig von Last, Umgebung und Konfiguration; Hinweise in der Tabelle beachten.",
    "Cijfers zijn DJI-testwaarden onder opgegeven omstandigheden. Prestaties hangen af van lading, omgeving en configuratie; zie de tabelnotities."
  ],
  "note": [
    "说明：",
    "Note: ",
    "Hinweis: ",
    "Toelichting: "
  ],
  "choiceIntro": [
    "选择一个方向查看说明，可将关注的方向带入咨询。以下不是已确认的销售套餐。",
    "Select a direction to explore and include it in your enquiry. These are not confirmed sales packages.",
    "Eine Option ansehen und in die Anfrage übernehmen. Dies sind keine bestätigten Verkaufspakete.",
    "Bekijk een optie en neem deze mee in uw aanvraag. Dit zijn geen bevestigde verkooppakketten."
  ],
  "interest": [
    "咨询此方向",
    "Enquire about this option",
    "Diese Option anfragen",
    "Deze optie aanvragen"
  ],
  "selected": [
    "已选咨询方向",
    "Selected enquiry topic",
    "Gewähltes Anfragethema",
    "Gekozen aanvraagonderwerp"
  ],
  "none": [
    "尚未选择，可直接描述需求",
    "Not selected; describe your needs below",
    "Nicht gewählt; Bedarf unten beschreiben",
    "Niet gekozen; beschrijf uw wensen hieronder"
  ],
  "source": [
    "DJI 官方产品资料",
    "DJI official product information",
    "Offizielle DJI-Produktinformationen",
    "Officiële DJI-productinformatie"
  ],
  "sourceSpecs": [
    "DJI 完整规格与测试条件",
    "Full DJI specifications and test conditions",
    "Vollständige DJI-Daten und Testbedingungen",
    "Volledige DJI-specificaties en testvoorwaarden"
  ],
  "faq": [
    "采购前，值得确认的事",
    "Questions before you buy",
    "Fragen vor dem Kauf",
    "Vragen vóór aankoop"
  ],
  "enquiryTitle": [
    "让配置贴近你的实际项目",
    "Build the quotation around your project",
    "Ein Angebot passend zu Ihrem Projekt",
    "Een offerte voor uw project"
  ],
  "enquiryIntro": [
    "告诉我们任务、交付地区与现有设备。我们会核对产品配置、可用服务、价格和交期；提交表单不会创建订单或扣款。",
    "Tell us about the task, delivery region and existing equipment. We will check configuration, services, price and lead time. Submitting this form does not place an order or take payment.",
    "Aufgabe, Lieferregion und vorhandene Ausrüstung angeben. Wir prüfen Konfiguration, Leistungen, Preis und Lieferzeit. Das Formular löst keine Bestellung oder Zahlung aus.",
    "Vertel ons over de taak, leverregio en bestaande uitrusting. We controleren configuratie, diensten, prijs en levertijd. Het formulier plaatst geen bestelling en verwerkt geen betaling."
  ],
  "placeholder": [
    "例如：作业目标、面积或航线距离、需要采集的数据/运输的货物、已有设备、预计交期……",
    "For example: task, area or route length, data to capture or cargo to carry, existing equipment and preferred delivery date…",
    "Zum Beispiel: Aufgabe, Fläche oder Strecke, benötigte Daten oder Fracht, vorhandene Ausrüstung und gewünschter Liefertermin …",
    "Bijvoorbeeld: taak, oppervlakte of routeafstand, gewenste data of vracht, bestaande uitrusting en gewenste leverdatum…"
  ],
  "photo": [
    "DJI 官方场景图；图示附件不代表报价内含",
    "Official DJI imagery; pictured accessories do not define the quotation",
    "Offizielles DJI-Bild; abgebildetes Zubehör definiert nicht den Lieferumfang",
    "Officieel DJI-beeld; getoonde accessoires bepalen niet de offerte-inhoud"
  ],
  "related": [
    "继续比较 DJI 产品",
    "Compare other DJI products",
    "Weitere DJI-Produkte vergleichen",
    "Andere DJI-producten vergelijken"
  ],
  "group": {
    "inspection": [
      "巡检与测绘",
      "Inspection & mapping",
      "Inspektion & Vermessung",
      "Inspectie & kartering"
    ],
    "dock": [
      "远程与机场作业",
      "Remote & dock operations",
      "Fern- & Dock-Betrieb",
      "Inzet op afstand & docks"
    ],
    "delivery": [
      "专业运输",
      "Professional delivery",
      "Professioneller Transport",
      "Professioneel transport"
    ],
    "agriculture": [
      "数字农业",
      "Digital agriculture",
      "Digitale Landwirtschaft",
      "Digitale landbouw"
    ]
  }
};
const index=(locale:string)=>Math.max(0,['zh','en','de','nl'].indexOf(locale));
export const djiSlugs=products.map(p=>p.slug);
export const djiRoutes=Object.fromEntries(products.map(p=>[p.id,p.slug]));
export function getDjiProduct(slug:string,locale:string){const p=products.find(p=>p.slug===slug);if(!p)return null;const pick=(v:readonly string[])=>v[index(locale)];return {...p,tagline:pick(p.tagline),intro:pick(p.intro),metrics:p.metrics.map(([label,value])=>({label:pick(label),value})),features:p.features.map(f=>({title:pick(f.title),text:pick(f.text),note:pick(f.note)})),choiceTitle:pick(p.choiceTitle),choices:p.choices.map(f=>({title:pick(f.title),text:pick(f.text),note:pick(f.note)})),specs:p.specs.map(s=>({label:pick(s.label),value:pick(s.value),note:pick(s.note)})),faq:p.faq.map(q=>({question:pick(q.question),answer:pick(q.answer)})),ui:{...Object.fromEntries(Object.entries(labels).filter(([key])=>key!=='group').map(([key,v])=>[key,pick(v as Text)])),group:pick(labels.group[p.group])} as Record<string,string>};}
export type DjiProductData=NonNullable<ReturnType<typeof getDjiProduct>>;
