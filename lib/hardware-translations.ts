import {useLocale} from 'next-intl';
import {l3Translations} from './l3-translations';
const translations:Record<string,readonly [string,string,string]>={
  "实时点云": [
    "Real-time point cloud",
    "Echtzeit-Punktwolke",
    "Realtime puntenwolk"
  ],
  "离开现场前，先检查覆盖。": [
    "Check coverage before leaving the site.",
    "Abdeckung prüfen, bevor Sie den Standort verlassen.",
    "Controleer de dekking voordat u vertrekt."
  ],
  "扫描过程中查看点云，检查漏扫区域与采集质量。现场预览是整个数据流程的起点。": [
    "Inspect the point cloud during scanning to identify gaps and assess capture quality. On-site preview is the starting point of the data workflow.",
    "Prüfen Sie die Punktwolke während des Scannens auf Lücken und Aufnahmequalität. Die Vorschau vor Ort ist der Ausgangspunkt des Datenworkflows.",
    "Bekijk tijdens het scannen de puntenwolk om ontbrekende delen en opnamekwaliteit te controleren. De preview op locatie is het begin van de dataworkflow."
  ],
  "LixelGO · 现场采集": [
    "LixelGO · Field capture",
    "LixelGO · Erfassung vor Ort",
    "LixelGO · Opname op locatie"
  ],
  "实时质量检查、点云预览与 App 内量测": [
    "Live quality checks, point cloud preview and in-app measurement",
    "Echtzeit-Qualitätsprüfung, Punktwolkenvorschau und Messung in der App",
    "Realtime kwaliteitscontrole, puntenwolkpreview en meten in de app"
  ],
  "后处理点云": [
    "Post-processed point cloud",
    "Nachbearbeitete Punktwolke",
    "Nabewerkte puntenwolk"
  ],
  "让采集数据进入工程处理。": [
    "Prepare captured data for engineering work.",
    "Aufnahmedaten für die technische Bearbeitung aufbereiten.",
    "Maak opnamedata klaar voor technische verwerking."
  ],
  "在 LixelStudio 中处理扫描数据，进行着色、过滤和后续量测分析，输出工程软件可读取的点云。": [
    "Process scans in LixelStudio for colourisation, filtering and measurement analysis, then export point clouds for engineering software.",
    "Scans in LixelStudio kolorieren, filtern und messtechnisch analysieren; anschließend Punktwolken für technische Software exportieren.",
    "Verwerk scans in LixelStudio voor inkleuring, filtering en meetanalyse en exporteer puntenwolken voor technische software."
  ],
  "LixelStudio · 点云处理": [
    "LixelStudio · Point cloud processing",
    "LixelStudio · Punktwolkenverarbeitung",
    "LixelStudio · Puntenwolkverwerking"
  ],
  "从离散点，到连续表面。": [
    "From discrete points to continuous surfaces.",
    "Von einzelnen Punkten zu zusammenhängenden Oberflächen.",
    "Van losse punten naar doorlopende oppervlakken."
  ],
  "使用 LixelStudio 将采集数据重建为纹理网格，呈现场景的表面与结构。": [
    "Use LixelStudio to reconstruct textured meshes from captured data, representing the scene’s surfaces and structure.",
    "Mit LixelStudio texturierte Meshes aus Aufnahmedaten rekonstruieren, die Oberflächen und Struktur der Szene abbilden.",
    "Reconstrueer in LixelStudio getextureerde meshes uit opnamedata om oppervlakken en structuren weer te geven."
  ],
  "LixelStudio · 网格重建": [
    "LixelStudio · Mesh reconstruction",
    "LixelStudio · Mesh-Rekonstruktion",
    "LixelStudio · Meshreconstructie"
  ],
  "把现场变成可探索的实景。": [
    "Turn the site into an explorable scene.",
    "Den Standort als erkundbare Szene abbilden.",
    "Maak de locatie verkenbaar in 3D."
  ],
  "使用 LCC Studio 重建 3D 高斯泼溅模型，为实景漫游与内容制作保留场景的视觉表现。": [
    "Reconstruct 3D Gaussian Splatting models in LCC Studio to preserve the scene’s visual appearance for virtual exploration and content production.",
    "3D-Gaussian-Splatting-Modelle in LCC Studio rekonstruieren, um das Erscheinungsbild für virtuelle Rundgänge und die Content-Produktion zu bewahren.",
    "Reconstrueer 3D Gaussian Splatting-modellen in LCC Studio en behoud het uiterlijk van de scène voor virtuele verkenning en contentproductie."
  ],
  "LCC Studio · 空间内容": [
    "LCC Studio · Spatial content",
    "LCC Studio · Räumliche Inhalte",
    "LCC Studio · Ruimtelijke content"
  ],
  "房产展示": [
    "Property presentation",
    "Immobilienpräsentation",
    "Vastgoedpresentatie"
  ],
  "让客户先走进空间。": [
    "Let customers explore the space first.",
    "Kunden den Raum vorab erleben lassen.",
    "Laat klanten de ruimte vooraf verkennen."
  ],
  "将房间与空间关系记录为可浏览的实景，方便远程看房、沟通布局和分享现场。": [
    "Record rooms and their spatial relationships as an explorable scene for remote viewing, layout discussions and sharing.",
    "Räume und ihre räumlichen Beziehungen als erkundbare Szene für Fernbesichtigungen, Grundrissbesprechungen und die Weitergabe erfassen.",
    "Leg kamers en hun onderlinge ruimtelijke relaties vast voor bezichtiging op afstand, overleg over de indeling en delen."
  ],
  "影视制作": [
    "Film production",
    "Filmproduktion",
    "Filmproductie"
  ],
  "把勘景现场带回制作团队。": [
    "Bring the location back to the production team.",
    "Den Drehort zum Produktionsteam bringen.",
    "Breng de locatie naar het productieteam."
  ],
  "在数字场景中讨论机位、运动与场面调度，为远程勘景和预演提供空间参考。": [
    "Discuss camera positions, moves and blocking in a digital scene, providing spatial references for remote scouting and pre-visualisation.",
    "Kamerapositionen, Bewegungen und Inszenierung in der digitalen Szene besprechen – als räumliche Referenz für Remote-Scouting und Previsualisierung.",
    "Bespreek camerastandpunten, bewegingen en enscenering in een digitale scène als ruimtelijke referentie voor locatiescouting op afstand en previsualisatie."
  ],
  "内容创作": [
    "Content creation",
    "Content-Erstellung",
    "Contentcreatie"
  ],
  "真实地点，成为可复用的素材。": [
    "Real places become reusable assets.",
    "Reale Orte werden zu wiederverwendbaren Assets.",
    "Echte locaties worden herbruikbare assets."
  ],
  "将采集的空间用于互动内容；通过对应 SDK 接入 Unreal Engine、Unity 或网页应用。": [
    "Use captured spaces in interactive content and connect them to Unreal Engine, Unity or web applications through the corresponding SDK.",
    "Erfasste Räume in interaktiven Inhalten nutzen und über das jeweilige SDK mit Unreal Engine, Unity oder Webanwendungen verbinden.",
    "Gebruik vastgelegde ruimtes in interactieve content en koppel ze via de bijbehorende SDK aan Unreal Engine, Unity of webapplicaties."
  ],
  "扫描与精度": [
    "Scanning & accuracy",
    "Scanning & Genauigkeit",
    "Scannen & nauwkeurigheid"
  ],
  "相对精度¹": [
    "Relative accuracy¹",
    "Relative Genauigkeit¹",
    "Relatieve nauwkeurigheid¹"
  ],
  "绝对精度²": [
    "Absolute accuracy²",
    "Absolute Genauigkeit²",
    "Absolute nauwkeurigheid²"
  ],
  "水平 / 高程均为 3 cm RMSE": [
    "Horizontal / elevation: 3 cm RMSE each",
    "Horizontal / Höhe: jeweils 3 cm RMSE",
    "Horizontaal / hoogte: beide 3 cm RMSE"
  ],
  "实时绝对精度²": [
    "Real-time absolute accuracy²",
    "Absolute Echtzeitgenauigkeit²",
    "Realtime absolute nauwkeurigheid²"
  ],
  "水平 / 高程均为 3 cm RMSE；WGS84 / CGCS2000": [
    "Horizontal / elevation: 3 cm RMSE each; WGS84 / CGCS2000",
    "Horizontal / Höhe: jeweils 3 cm RMSE; WGS84 / CGCS2000",
    "Horizontaal / hoogte: beide 3 cm RMSE; WGS84 / CGCS2000"
  ],
  "重复精度": [
    "Repeatability",
    "Wiederholgenauigkeit",
    "Herhaalbaarheid"
  ],
  "2 cm（实验室条件）": [
    "2 cm (laboratory conditions)",
    "2 cm (Laborbedingungen)",
    "2 cm (laboratoriumomstandigheden)"
  ],
  "后处理点云厚度": [
    "Post-processed point cloud thickness",
    "Dicke der nachbearbeiteten Punktwolke",
    "Dikte van de nabewerkte puntenwolk"
  ],
  "激光测距": [
    "LiDAR range",
    "LiDAR-Messbereich",
    "LiDAR-bereik"
  ],
  "≥40 m @10% 反射率；最大 100 m": [
    "≥40 m at 10% reflectivity; maximum 100 m",
    "≥40 m bei 10 % Reflexion; maximal 100 m",
    "≥40 m bij 10% reflectiviteit; maximaal 100 m"
  ],
  "点频 / 激光视场": [
    "Point rate / LiDAR field of view",
    "Punktrate / LiDAR-Sichtfeld",
    "Puntsnelheid / LiDAR-gezichtsveld"
  ],
  "200,000 点/秒；360° × −7°…+52°": [
    "200,000 pts/s; 360° × −7°…+52°",
    "200.000 Punkte/s; 360° × −7°…+52°",
    "200.000 punten/s; 360° × −7°…+52°"
  ],
  "激光等级": [
    "Laser class",
    "Laserklasse",
    "Laserklasse"
  ],
  "视觉与现场作业": [
    "Vision & fieldwork",
    "Bildgebung & Feldeinsatz",
    "Beeldvorming & veldwerk"
  ],
  "相机": [
    "Cameras",
    "Kameras",
    "Camera’s"
  ],
  "2 鱼眼 + 1 前向；1/2″ CMOS": [
    "2 fisheye + 1 forward; 1/2″ CMOS",
    "2 Fischaugen + 1 Front; 1/2″ CMOS",
    "2 fisheye + 1 front; 1/2″ CMOS"
  ],
  "图像分辨率": [
    "Image resolution",
    "Bildauflösung",
    "Beeldresolutie"
  ],
  "4000 × 3000；卷帘快门": [
    "4000 × 3000; rolling shutter",
    "4000 × 3000; Rolling Shutter",
    "4000 × 3000; rolling shutter"
  ],
  "相机视场": [
    "Camera field of view",
    "Kamera-Sichtfeld",
    "Gezichtsveld camera’s"
  ],
  "全景 200° × 200°；前向 100° × 85°": [
    "Panoramic 200° × 200°; forward 100° × 85°",
    "Panorama 200° × 200°; Front 100° × 85°",
    "Panorama 200° × 200°; front 100° × 85°"
  ],
  "重量": [
    "Weight",
    "Gewicht",
    "Gewicht"
  ],
  "约 1,200 g，含电池和底座，不含其他附件": [
    "Approx. 1,200 g, including battery and base; excluding other accessories",
    "Ca. 1.200 g, einschließlich Akku und Basis, ohne weiteres Zubehör",
    "Circa 1.200 g, inclusief accu en basis, exclusief overige accessoires"
  ],
  "内置模块": [
    "Built-in module",
    "Integriertes Modul",
    "Ingebouwde module"
  ],
  "电池 / 续航": [
    "Battery / runtime",
    "Akku / Laufzeit",
    "Accu / gebruiksduur"
  ],
  "卡扣式 1,900 mAh；约 1.5 小时": [
    "Clip-on 1,900 mAh; approx. 1.5 hours",
    "Steckakku, 1.900 mAh; ca. 1,5 Stunden",
    "Klikaccu van 1.900 mAh; circa 1,5 uur"
  ],
  "环境": [
    "Environment",
    "Umgebung",
    "Omgeving"
  ],
  "存储 / 数据接口": [
    "Storage / data interface",
    "Speicher / Datenschnittstelle",
    "Opslag / data-interface"
  ],
  "成果与配套": [
    "Outputs & accessories",
    "Ausgaben & Zubehör",
    "Resultaten & accessoires"
  ],
  "点云": [
    "Point cloud",
    "Punktwolke",
    "Puntenwolk"
  ],
  "图像 / 网格": [
    "Images / mesh",
    "Bilder / Mesh",
    "Afbeeldingen / mesh"
  ],
  "3DGS / 其他": [
    "3DGS / other",
    "3DGS / weitere",
    "3DGS / overige"
  ],
  "标配": [
    "Included",
    "Im Lieferumfang",
    "Inbegrepen"
  ],
  "手机支架、控制点底座": [
    "Phone mount, control-point base",
    "Smartphone-Halterung, Passpunktbasis",
    "Telefoonhouder, controlepuntbasis"
  ],
  "选配": [
    "Optional",
    "Optional",
    "Optioneel"
  ],
  "延长杆与适配套件": [
    "Extension pole and adapter kit",
    "Verlängerungsstange und Adapterset",
    "Verlengstang en adapterset"
  ],
  "LixelStudio / LCC Studio；版本与授权按报价确认": [
    "LixelStudio / LCC Studio; confirm versions and licences in the quotation",
    "LixelStudio / LCC Studio; Versionen und Lizenzen im Angebot bestätigen",
    "LixelStudio / LCC Studio; bevestig versies en licenties in de offerte"
  ],
  "空间感知与成像": [
    "Spatial sensing & imaging",
    "Raumerfassung & Bildgebung",
    "Ruimtelijke waarneming & beeldvorming"
  ],
  "2 鱼眼 + 2 前向；1/2″ CMOS": [
    "2 fisheye + 2 forward; 1/2″ CMOS",
    "2 Fischaugen + 2 Front; 1/2″ CMOS",
    "2 fisheye + 2 front; 1/2″ CMOS"
  ],
  "鱼眼 200° × 200° / 颗；前向 100° × 85° / 颗": [
    "Fisheye 200° × 200° each; forward 100° × 85° each",
    "Fischauge je 200° × 200°; Front je 100° × 85°",
    "Fisheye elk 200° × 200°; front elk 100° × 85°"
  ],
  "0.1～30 m @10% 反射率；60 m @90%": [
    "0.1–30 m at 10% reflectivity; 60 m at 90%",
    "0,1–30 m bei 10 % Reflexion; 60 m bei 90 %",
    "0,1–30 m bij 10% reflectiviteit; 60 m bij 90%"
  ],
  "激光点频": [
    "LiDAR point rate",
    "LiDAR-Punktrate",
    "LiDAR-puntsnelheid"
  ],
  "856,000 点/秒": [
    "856,000 pts/s",
    "856.000 Punkte/s",
    "856.000 punten/s"
  ],
  "激光视场 / 等级": [
    "LiDAR field of view / class",
    "LiDAR-Sichtfeld / Klasse",
    "LiDAR-gezichtsveld / klasse"
  ],
  "机身与续航": [
    "Hardware & runtime",
    "Gerät & Laufzeit",
    "Apparaat & gebruiksduur"
  ],
  "重量 / 尺寸": [
    "Weight / dimensions",
    "Gewicht / Abmessungen",
    "Gewicht / afmetingen"
  ],
  "870 g，不含三脚架；130 × 90 × 77 mm": [
    "870 g, excluding tripod; 130 × 90 × 77 mm",
    "870 g, ohne Stativ; 130 × 90 × 77 mm",
    "870 g, exclusief statief; 130 × 90 × 77 mm"
  ],
  "机身": [
    "Housing",
    "Gehäuse",
    "Behuizing"
  ],
  "航空级铝合金": [
    "Aerospace-grade aluminium alloy",
    "Aluminiumlegierung in Luftfahrtqualität",
    "Aluminiumlegering van luchtvaartkwaliteit"
  ],
  "电池": [
    "Battery",
    "Akku",
    "Accu"
  ],
  "可拆卸锂电池 · 23.04 Wh": [
    "Removable lithium-ion · 23.04 Wh",
    "Wechselbarer Lithium-Ionen-Akku · 23,04 Wh",
    "Verwisselbare lithium-ionaccu · 23,04 Wh"
  ],
  "连续扫描": [
    "Continuous scanning",
    "Kontinuierliches Scannen",
    "Continu scannen"
  ],
  "60 分钟": [
    "60 minutes",
    "60 Minuten",
    "60 minuten"
  ],
  "充电时间（25 °C）": [
    "Charging time (25 °C)",
    "Ladezeit (25 °C)",
    "Laadtijd (25 °C)"
  ],
  "0～90%：70 分钟；0～100%：90 分钟": [
    "0–90%: 70 minutes; 0–100%: 90 minutes",
    "0–90 %: 70 Minuten; 0–100 %: 90 Minuten",
    "0–90%: 70 minuten; 0–100%: 90 minuten"
  ],
  "工作 / 充电温度": [
    "Operating / charging temperature",
    "Betriebs- / Ladetemperatur",
    "Bedrijfs- / laadtemperatuur"
  ],
  "−20～45 °C（避免阳光直射）/ 5～30 °C": [
    "−20–45 °C (no direct sunlight) / 5–30 °C",
    "−20–45 °C (keine direkte Sonne) / 5–30 °C",
    "−20–45 °C (geen direct zonlicht) / 5–30 °C"
  ],
  "连接与内容交付": [
    "Connectivity & content delivery",
    "Verbindungen & Inhaltsbereitstellung",
    "Connectiviteit & contentlevering"
  ],
  "无线连接": [
    "Wireless connectivity",
    "Drahtlose Verbindungen",
    "Draadloze verbindingen"
  ],
  "Wi-Fi 2.4 / 5 GHz；Bluetooth 5.2；无线距离 20 m": [
    "Wi-Fi 2.4 / 5 GHz; Bluetooth 5.2; wireless range 20 m",
    "WLAN 2,4 / 5 GHz; Bluetooth 5.2; Funkreichweite 20 m",
    "Wifi 2,4 / 5 GHz; Bluetooth 5.2; draadloos bereik 20 m"
  ],
  "现场操作": [
    "Field operation",
    "Bedienung vor Ort",
    "Bediening op locatie"
  ],
  "LCC Scan App；正常建图时支持实时点云预览": [
    "LCC Scan app; live point cloud preview in normal mapping mode",
    "LCC Scan App; Live-Punktwolkenvorschau im normalen Kartierungsmodus",
    "LCC Scan-app; live puntenwolkpreview in normale karteermodus"
  ],
  "重建与分享": [
    "Reconstruction & sharing",
    "Rekonstruktion & Teilen",
    "Reconstructie & delen"
  ],
  "LCC Studio；LCC / PLY 空间内容": [
    "LCC Studio; LCC / PLY spatial content",
    "LCC Studio; räumliche Inhalte als LCC / PLY",
    "LCC Studio; ruimtelijke content als LCC / PLY"
  ],
  "配件": [
    "Accessories",
    "Zubehör",
    "Accessoires"
  ],
  "防护背包；2 m 延长杆为选配": [
    "Protective backpack; optional 2 m extension pole",
    "Schutzrucksack; optionale 2-m-Verlängerungsstange",
    "Beschermrugzak; optionele verlengstang van 2 m"
  ],
  "采购确认": [
    "Before purchase",
    "Vor dem Kauf",
    "Vóór aankoop"
  ],
  "外置 SSD 供货、软件版本与授权范围需单独确认": [
    "Confirm external SSD availability, software versions and licence scope separately",
    "Verfügbarkeit externer SSDs, Softwareversionen und Lizenzumfang gesondert bestätigen",
    "Bevestig beschikbaarheid van externe SSD’s, softwareversies en licentieomvang afzonderlijk"
  ],
  "点云处理 · 量测分析 · 纹理网格": [
    "Point cloud processing · Measurement analysis · Textured mesh",
    "Punktwolkenverarbeitung · Messanalyse · Texturiertes Mesh",
    "Puntenwolkverwerking · Meetanalyse · Getextureerde mesh"
  ],
  "官方图标": [
    "Official icon",
    "Offizielles Symbol",
    "Officieel pictogram"
  ],
  "空间相机": [
    "Spatial camera",
    "Raumkamera",
    "Ruimtelijke camera"
  ],
  "场景应用": [
    "Applications",
    "Anwendungen",
    "Toepassingen"
  ],
  "不止记录画面，记录整个空间。": [
    "Capture more than an image. Capture a space.",
    "Mehr als ein Bild: einen Raum erfassen.",
    "Leg meer vast dan een beeld. Leg een ruimte vast."
  ],
  "轻装扫描，把现场带回办公室。": [
    "Travel light. Bring the site back.",
    "Leicht unterwegs. Den Standort digital mitnehmen.",
    "Licht op pad. De locatie digitaal mee."
  ],
  "PortalCam 官方产品展示": [
    "PortalCam official product showcase",
    "Offizielle PortalCam-Produktpräsentation",
    "Officiële PortalCam-productpresentatie"
  ],
  "Lixel K2 官方整机展示": [
    "Lixel K2 official product image",
    "Offizielles Produktbild des Lixel K2",
    "Officiële productafbeelding van de Lixel K2"
  ],
  "四相机与激光雷达协同记录真实场景，经 LCC Studio 处理为可漫游、编辑与分享的 3DGS 内容。": [
    "Four cameras and LiDAR capture real scenes together. LCC Studio processes the data into 3DGS content you can explore, edit and share.",
    "Vier Kameras und LiDAR erfassen gemeinsam reale Szenen. LCC Studio verarbeitet die Daten zu erkundbaren, bearbeitbaren und teilbaren 3DGS-Inhalten.",
    "Vier camera’s en LiDAR leggen samen echte scènes vast. LCC Studio verwerkt de data tot 3DGS-content die u kunt verkennen, bewerken en delen."
  ],
  "约 1.2 kg 机身，集成激光雷达、三相机与 RTK。一次采集，从现场实时点云到工程数据与实景模型，按交付目标选择处理路径。": [
    "Approx. 1.2 kg with LiDAR, three cameras and RTK. From live point clouds on site to engineering data and reality models, choose a processing path for your deliverable.",
    "Ca. 1,2 kg mit LiDAR, drei Kameras und RTK. Von Live-Punktwolken vor Ort bis zu technischen Daten und Realitätsmodellen: den Verarbeitungsweg passend zum Ergebnis wählen.",
    "Circa 1,2 kg met LiDAR, drie camera’s en RTK. Van live puntenwolken op locatie tot technische data en realiteitsmodellen: kies de verwerking die bij uw eindresultaat past."
  ],
  "页面导航": [
    "Page navigation",
    "Seitennavigation",
    "Paginanavigatie"
  ],
  "拍下的空间，真的可以走进去。": [
    "A captured space you can step into.",
    "Ein erfasster Raum, den Sie betreten können.",
    "Een vastgelegde ruimte die u kunt betreden."
  ],
  "轻量机身，认真对待每一个细节。": [
    "Lightweight hardware. Close attention to detail.",
    "Leichtes Gerät. Präziser Blick aufs Detail.",
    "Lichtgewicht apparaat. Aandacht voor elk detail."
  ],
  "在空间中自由改变观察位置，而不只是站在固定拍摄点旋转视角。下面是官方动态演示。": [
    "Move freely through the space instead of only rotating your view from fixed capture positions. See the official demonstration below.",
    "Den Blickpunkt frei im Raum verändern, statt nur von festen Aufnahmepositionen aus zu schwenken. Die offizielle Demonstration zeigt den Unterschied.",
    "Verplaats uw standpunt vrij door de ruimte in plaats van alleen rond te kijken vanaf vaste opnamepunten. Bekijk hieronder de officiële demonstratie."
  ],
  "现场采集效率与后续数据质量同样重要。先检查覆盖，再处理出符合项目需要的成果。": [
    "Capture efficiency and data quality both matter. Check coverage first, then process the data for the required deliverable.",
    "Erfassungseffizienz und Datenqualität zählen gleichermaßen. Zuerst die Abdeckung prüfen, dann Daten für das gewünschte Ergebnis verarbeiten.",
    "Opname-efficiëntie en datakwaliteit zijn beide belangrijk. Controleer eerst de dekking en verwerk daarna de data voor het gewenste resultaat."
  ],
  "PortalCam 官方空间漫游演示": [
    "PortalCam official spatial exploration demo",
    "Offizielle PortalCam-Demo zur Raumerkundung",
    "Officiële PortalCam-demo van ruimtelijke verkenning"
  ],
  "K2 官方量测精度演示": [
    "K2 official measurement accuracy demo",
    "Offizielle K2-Demo zur Messgenauigkeit",
    "Officiële K2-demo van meetnauwkeurigheid"
  ],
  "激光雷达": [
    "LiDAR",
    "LiDAR",
    "LiDAR"
  ],
  "获取空间结构，为多传感器融合提供几何信息。": [
    "Capture spatial structure to provide geometry for multi-sensor fusion.",
    "Raumstrukturen erfassen und geometrische Daten für die Sensorfusion bereitstellen.",
    "Leg ruimtelijke structuren vast als geometrische basis voor multisensorfusie."
  ],
  "双鱼眼 + 双前向相机": [
    "Dual fisheye + dual forward cameras",
    "Zwei Fischaugen- und zwei Frontkameras",
    "Twee fisheye- en twee frontcamera’s"
  ],
  "鱼眼覆盖环境，前向相机记录局部细节；四相机均为 4000 × 3000 分辨率。": [
    "Fisheye cameras cover the surroundings while forward cameras record local details. All four cameras have 4000 × 3000 resolution.",
    "Fischaugenkameras erfassen die Umgebung, Frontkameras die lokalen Details. Alle vier Kameras bieten 4000 × 3000 Auflösung.",
    "Fisheye-camera’s leggen de omgeving vast, terwijl frontcamera’s lokale details registreren. Alle vier camera’s hebben een resolutie van 4000 × 3000."
  ],
  "Multi-SLAM 融合": [
    "Multi-SLAM fusion",
    "Multi-SLAM-Fusion",
    "Multi-SLAM-fusie"
  ],
  "结合传感器数据完成空间定位与采集，随后由 LCC Studio 进行模型重建。": [
    "Sensor data supports spatial positioning and capture; LCC Studio then reconstructs the model.",
    "Sensordaten unterstützen die räumliche Positionierung und Erfassung; anschließend rekonstruiert LCC Studio das Modell.",
    "Sensordata ondersteunt ruimtelijke positionering en opname; vervolgens reconstrueert LCC Studio het model."
  ],
  "重量（含电池和底座）": [
    "Weight (including battery and base)",
    "Gewicht (einschließlich Akku und Basis)",
    "Gewicht (inclusief accu en basis)"
  ],
  "约 1.2 kg": [
    "Approx. 1.2 kg",
    "Ca. 1,2 kg",
    "Circa 1,2 kg"
  ],
  "¹ 实验室条件，点间距在 10 m 以内。实际结果随场景与作业条件变化。": [
    "¹ Laboratory conditions, with point-to-point distances within 10 m. Actual results vary with the scene and operating conditions.",
    "¹ Laborbedingungen, Punktabstände innerhalb von 10 m. Tatsächliche Ergebnisse hängen von Szene und Einsatzbedingungen ab.",
    "¹ Laboratoriumomstandigheden, met puntafstanden binnen 10 m. Werkelijke resultaten variëren met de scène en werkomstandigheden."
  ],
  "结构与颜色，": [
    "Structure and colour,",
    "Struktur und Farbe",
    "Structuur en kleur,"
  ],
  "都要记录清楚。": [
    "captured clearly.",
    "klar erfassen.",
    "helder vastgelegd."
  ],
  "2 颗鱼眼相机与 1 颗前向相机记录颜色细节，Multi-SLAM 融合空间感知，内置 RTK 为坐标定位提供支持。": [
    "Two fisheye cameras and one forward camera record colour detail. Multi-SLAM fuses spatial sensing, while built-in RTK supports coordinate positioning.",
    "Zwei Fischaugenkameras und eine Frontkamera erfassen Farbdetails. Multi-SLAM fusioniert die Raumerfassung; integriertes RTK unterstützt die Koordinatenpositionierung.",
    "Twee fisheye-camera’s en één frontcamera registreren kleurdetails. Multi-SLAM combineert ruimtelijke waarneming en ingebouwde RTK ondersteunt coördinaatbepaling."
  ],
  "现场扫描辅助与实时质量检查": [
    "Guided scanning and real-time quality checks",
    "Scanführung und Echtzeit-Qualitätsprüfung",
    "Scanbegeleiding en realtime kwaliteitscontrole"
  ],
  "实时动态物体剔除、过滤与着色": [
    "Real-time dynamic object removal, filtering and colourisation",
    "Entfernung dynamischer Objekte, Filterung und Kolorierung in Echtzeit",
    "Realtime verwijdering van bewegende objecten, filtering en inkleuring"
  ],
  "App 内量测与点云文件分享": [
    "In-app measurement and point cloud file sharing",
    "Messung in der App und Teilen von Punktwolkendateien",
    "Meten in de app en puntenwolkbestanden delen"
  ],
  "K2 官方弱光场景点云演示": [
    "K2 official low-light point cloud demo",
    "Offizielle K2-Punktwolkendemo bei wenig Licht",
    "Officiële K2-puntenwolkdemo bij weinig licht"
  ],
  "一次采集，按交付目标选择成果。": [
    "One capture. Choose the output for your project.",
    "Eine Aufnahme. Das passende Ergebnis fürs Projekt.",
    "Eén opname. Kies het resultaat voor uw project."
  ],
  "实时点云用于现场检查；保留原始采集数据，按任务继续处理为工程点云、纹理网格或 3DGS。": [
    "Use the live point cloud for on-site checks. Keep the original capture data for engineering point clouds, textured meshes or 3DGS processing.",
    "Live-Punktwolken vor Ort prüfen. Die Originaldaten für technische Punktwolken, texturierte Meshes oder 3DGS-Verarbeitung aufbewahren.",
    "Gebruik de live puntenwolk voor controles op locatie. Bewaar de oorspronkelijke opnamedata voor technische puntenwolken, getextureerde meshes of 3DGS-verwerking."
  ],
  "选择 K2 数据成果": [
    "Choose K2 output",
    "K2-Ergebnis wählen",
    "Kies K2-resultaat"
  ],
  "K2 官方成果演示：": [
    "K2 official output demo:",
    "Offizielle K2-Ergebnisdemo:",
    "Officiële K2-resultaatdemo:"
  ],
  "网格重建需要相应的着色数据与全景照片。处理功能取决于软件版本和授权；工程点云与 3DGS 的 PLY 数据内容不同。": [
    "Mesh reconstruction requires the corresponding colourised data and panoramic photos. Functions depend on software version and licence; engineering point clouds and 3DGS use different PLY data structures.",
    "Mesh-Rekonstruktion benötigt passende kolorierte Daten und Panoramafotos. Funktionen hängen von Softwareversion und Lizenz ab; technische Punktwolken und 3DGS nutzen unterschiedliche PLY-Datenstrukturen.",
    "Meshreconstructie vereist de bijbehorende ingekleurde data en panoramafoto’s. Functies hangen af van softwareversie en licentie; technische puntenwolken en 3DGS gebruiken verschillende PLY-datastructuren."
  ],
  "从真实地点，到可用的空间内容。": [
    "From real places to usable spatial content.",
    "Von realen Orten zu nutzbaren Rauminhalten.",
    "Van echte locaties naar bruikbare ruimtelijke content."
  ],
  "选择 PortalCam 应用场景": [
    "Choose PortalCam application",
    "PortalCam-Anwendung wählen",
    "Kies PortalCam-toepassing"
  ],
  "PortalCam 官方演示：": [
    "PortalCam official demo:",
    "Offizielle PortalCam-Demo:",
    "Officiële PortalCam-demo:"
  ],
  "采集、重建、分享。": [
    "Capture. Reconstruct. Share.",
    "Erfassen. Rekonstruieren. Teilen.",
    "Vastleggen. Reconstrueren. Delen."
  ],
  "从现场扫描，到项目交付。": [
    "From field capture to project delivery.",
    "Von der Erfassung bis zur Projektübergabe.",
    "Van opname op locatie tot projectoplevering."
  ],
  "LCC Scan 负责现场采集与检查，LCC Studio 负责空间内容重建，再按使用方式编辑与发布。": [
    "LCC Scan handles capture and on-site checks. LCC Studio reconstructs spatial content for editing and publishing.",
    "LCC Scan übernimmt Erfassung und Kontrolle vor Ort. LCC Studio rekonstruiert Rauminhalte zur Bearbeitung und Veröffentlichung.",
    "LCC Scan verzorgt opname en controle op locatie. LCC Studio reconstrueert ruimtelijke content voor bewerking en publicatie."
  ],
  "LixelGO 检查现场覆盖；LixelStudio 处理工程数据；LCC Studio 重建视觉空间内容。": [
    "LixelGO checks field coverage; LixelStudio processes engineering data; LCC Studio reconstructs visual spatial content.",
    "LixelGO prüft die Abdeckung vor Ort; LixelStudio verarbeitet technische Daten; LCC Studio rekonstruiert visuelle Rauminhalte.",
    "LixelGO controleert de dekking op locatie; LixelStudio verwerkt technische data; LCC Studio reconstrueert visuele ruimtelijke content."
  ],
  "现场采集": [
    "Field capture",
    "Erfassung vor Ort",
    "Opname op locatie"
  ],
  "官方产品图": [
    "Official product image",
    "Offizielles Produktbild",
    "Officiële productafbeelding"
  ],
  "边走边采集，查看实时点云和覆盖情况，及时补扫。": [
    "Capture while walking, check live point clouds and coverage, and fill gaps on site.",
    "Im Gehen erfassen, Live-Punktwolken und Abdeckung prüfen und Lücken vor Ort nachscannen.",
    "Leg lopend vast, controleer live puntenwolken en dekking en scan ontbrekende delen ter plaatse bij."
  ],
  "正常建图状态下，App 显示实时点云预览。": [
    "The app displays a live point cloud preview in normal mapping mode.",
    "Die App zeigt im normalen Kartierungsmodus eine Live-Punktwolkenvorschau.",
    "De app toont in de normale karteermodus een live puntenwolkpreview."
  ],
  "保存原始采集数据，按成果目标进入处理。": [
    "Keep the original capture data and process it for the required output.",
    "Originaldaten aufbewahren und für das gewünschte Ergebnis verarbeiten.",
    "Bewaar de oorspronkelijke opnamedata en verwerk ze voor het gewenste resultaat."
  ],
  "图示为 XGRIDS 平台应用生态与技术架构，并非所有成果均可直接导入所有平台；具体需核对格式、软件版本、插件与授权。": [
    "This diagram shows the XGRIDS platform ecosystem and technology architecture. Not every output imports directly into every platform; check formats, software versions, plugins and licences.",
    "Das Diagramm zeigt das XGRIDS-Plattformökosystem und die Technologiearchitektur. Nicht jedes Ergebnis lässt sich direkt in jede Plattform importieren; Formate, Softwareversionen, Plugins und Lizenzen prüfen.",
    "Dit diagram toont het XGRIDS-platformecosysteem en de technologiearchitectuur. Niet elk resultaat kan direct in elk platform worden geïmporteerd; controleer formaten, softwareversies, plug-ins en licenties."
  ],
  "PortalCam 的实时点云用于采集预览，不等于工程点云交付。官方 FAQ 说明不支持纯点云文件导出；LCC / PLY 在这里指空间内容成果。": [
    "PortalCam’s live point cloud is a capture preview, not an engineering deliverable. The official FAQ excludes pure point cloud export; LCC / PLY here refers to spatial content.",
    "Die Live-Punktwolke von PortalCam dient der Aufnahmevorschau, nicht der technischen Datenübergabe. Die offizielle FAQ schließt reine Punktwolkenexporte aus; LCC / PLY bezeichnet hier räumliche Inhalte.",
    "De live puntenwolk van PortalCam is een opnamepreview, geen technisch eindproduct. De officiële FAQ sluit zuivere puntenwolkexport uit; LCC / PLY verwijst hier naar ruimtelijke content."
  ],
  "各处理路径需要对应的软件与授权。格式、插件和目标平台需按实际项目核对，不能将所有输出视为可直接导入所有软件。": [
    "Each processing path needs the corresponding software and licence. Check formats, plugins and target platforms for your project; not every output imports directly into every application.",
    "Jeder Verarbeitungsweg benötigt passende Software und Lizenzen. Formate, Plugins und Zielplattformen projektbezogen prüfen; nicht jede Ausgabe lässt sich direkt in jede Anwendung importieren.",
    "Elk verwerkingstraject vereist de bijbehorende software en licentie. Controleer formaten, plug-ins en doelplatformen voor uw project; niet elk resultaat kan direct in elke toepassing worden geïmporteerd."
  ],
  "完整看一次，": [
    "Watch the full introduction,",
    "Die vollständige Einführung ansehen",
    "Bekijk de volledige introductie"
  ],
  "再决定是否适合。": [
    "then decide if it fits.",
    "und die Eignung beurteilen.",
    "en bepaal of het bij u past."
  ],
  "官网完整介绍片。点击播放，可打开声音、拖动进度或全屏观看。": [
    "Official full introduction. Press play to enable sound, seek or watch full screen.",
    "Vollständiger offizieller Einführungsfilm. Wiedergabe starten, um Ton einzuschalten, zu spulen oder im Vollbild anzusehen.",
    "Volledige officiële introductie. Start de video om geluid in te schakelen, te spoelen of op volledig scherm te kijken."
  ],
  "官方完整介绍视频": [
    "Official full introduction video",
    "Vollständiges offizielles Einführungsvideo",
    "Volledige officiële introductievideo"
  ],
  "把你的交付要求告诉我们。": [
    "Tell us what you need to deliver.",
    "Sagen Sie uns, welches Ergebnis Sie benötigen.",
    "Vertel ons wat u wilt opleveren."
  ],
  "要展示房产、记录勘景，还是接入内容引擎？请说明场景规模、目标平台和团队电脑配置，我们协助核对设备与软件。": [
    "Property presentation, location scouting or a content engine? Tell us the scene size, target platform and your team’s computer setup so we can help confirm the hardware and software.",
    "Immobilienpräsentation, Location-Scouting oder Content-Engine? Nennen Sie Szenengröße, Zielplattform und Rechnerausstattung, damit wir passende Hardware und Software klären können.",
    "Vastgoedpresentatie, locatiescouting of een contentengine? Geef de scèneomvang, het doelplatform en de computerconfiguratie van uw team door, zodat we apparatuur en software kunnen afstemmen."
  ],
  "要交付点云、网格还是 3DGS？请说明作业环境、精度要求和接收数据的软件，我们协助核对配置。": [
    "Point clouds, meshes or 3DGS? Tell us the operating environment, accuracy requirements and receiving software so we can help confirm the configuration.",
    "Punktwolken, Meshes oder 3DGS? Nennen Sie Einsatzumgebung, Genauigkeitsanforderungen und Zielsoftware, damit wir die Konfiguration abstimmen können.",
    "Puntenwolken, meshes of 3DGS? Geef de werkomgeving, nauwkeurigheidseisen en ontvangende software door, zodat we de configuratie kunnen afstemmen."
  ],
  "咨询": [
    "Enquire about",
    "Anfrage zu",
    "Informeer naar"
  ],
  "续航与无线距离受实际环境影响。外置 SSD 在官网概览中标为即将推出，供货以确认结果为准。": [
    "Runtime and wireless range depend on conditions. The official overview marks the external SSD as coming soon; confirm availability before ordering.",
    "Laufzeit und Funkreichweite hängen von den Bedingungen ab. Die offizielle Übersicht kennzeichnet die externe SSD als demnächst verfügbar; Verfügbarkeit vor Bestellung bestätigen.",
    "Gebruiksduur en draadloos bereik hangen af van de omstandigheden. Het officiële overzicht vermeldt de externe SSD als binnenkort beschikbaar; bevestig de beschikbaarheid vóór bestelling."
  ],
  "¹ 相对精度为实验室、点间距 10 m 内的 RMSE。² 绝对精度需开阔天空、无多路径、良好 GNSS 几何与大气条件；实时坐标支持 WGS84 / CGCS2000。续航和实际采集效果随作业条件变化。": [
    "¹ Relative accuracy is laboratory RMSE at point-to-point distances within 10 m. ² Absolute accuracy requires open sky, no multipath, good GNSS geometry and favourable atmospheric conditions; real-time coordinates support WGS84 / CGCS2000. Runtime and capture results vary with conditions.",
    "¹ Relative Genauigkeit: Labor-RMSE bei Punktabständen innerhalb von 10 m. ² Absolute Genauigkeit setzt freien Himmel, keine Mehrwegeeffekte, gute GNSS-Geometrie und günstige Atmosphäre voraus; Echtzeitkoordinaten unterstützen WGS84 / CGCS2000. Laufzeit und Ergebnisse hängen von den Einsatzbedingungen ab.",
    "¹ Relatieve nauwkeurigheid: laboratorium-RMSE bij puntafstanden binnen 10 m. ² Absolute nauwkeurigheid vereist vrij zicht op de hemel, geen multipad, goede GNSS-geometrie en gunstige atmosferische omstandigheden; realtime coördinaten ondersteunen WGS84 / CGCS2000. Gebruiksduur en resultaten variëren met de omstandigheden."
  ],
  "前往官网观看": [
    "Watch on the official site",
    "Auf der offiziellen Website ansehen",
    "Bekijk op de officiële website"
  ]
};
export function useHardwareText(){const locale=useLocale();return (source:string)=>locale==='zh'?source:(translations[source]||l3Translations[source])?.[({en:0,de:1,nl:2} as Record<string,number>)[locale]??0]??source;}
