"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[1477],{30010:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"/2022/11/26/one-time-sponsoring","metadata":{"permalink":"/blog/2022/11/26/one-time-sponsoring","editUrl":"https://github.com/evcc-io/docs/tree/main/blog/2022-11-26/one-time-sponsoring.md","source":"@site/blog/2022-11-26/one-time-sponsoring.md","title":"Sponsoring und Umz\xfcge","description":"Es sind schon wieder siebzehn Releases seit unserem letzten Update hier im Blog vergangen. Wie immer ist eine Menge passiert. Einige Bugfixes, aber auch viele neue Integrationen und Funktionen sind dazu gekommen. Zu unseren Highlights der letzten Monate in einem sp\xe4teren Blogartikel mehr.","date":"2022-11-26T00:00:00.000Z","formattedDate":"26. November 2022","tags":[{"label":"sponsoring","permalink":"/blog/tags/sponsoring"}],"readingTime":4.3,"truncated":false,"authors":[{"name":"Michael Geers","title":"Core-Team, UI","url":"https://github.com/naltatis","imageURL":"https://github.com/naltatis.png","key":"naltatis"}],"frontMatter":{"title":"Sponsoring und Umz\xfcge","authors":["naltatis"],"tags":["sponsoring"],"hide_table_of_contents":false},"nextItem":{"title":"Phasenhandling, Templates und Lithauisch","permalink":"/blog/2022/05/08/phases-templates-lithuanian"}},"content":"Es sind schon wieder siebzehn Releases seit unserem letzten Update hier im Blog vergangen. Wie immer ist eine Menge passiert. Einige Bugfixes, aber auch viele neue Integrationen und Funktionen sind dazu gekommen. Zu unseren Highlights der letzten Monate in einem sp\xe4teren Blogartikel mehr.\\n\\n## \ud83c\udf31 Nachhaltige Open Source Entwicklung\\n\\nevcc hat als kleines Hobbyprojekt angefangen, weil wir unzufrieden mit den bestehenden L\xf6sungen f\xfcr PV-\xdcberschussladen waren und uns etwas Besseres bauen wollten. Inzwischen macht evcc aber nicht nur unser privates Sonnenladen leichter. Es gibt vermutlich mehrere tausend Installationen, die morgens das Auto wecken, sobald die Sonne auf die heimische PV-Anlage scheint. Der Gedanke macht uns sehr froh.\\n\\nGenaue Zahlen \xfcber unsere Nutzerbasis haben wir nicht. Wir m\xf6gen Datensparsamkeit und haben daher auch keine Ambition ein allgemeines Tracking in unsere Webseite oder die Applikation einzubauen. Dennoch k\xf6nnen wir anhand von Zahlen aus Docker (bisher >1 Mio. Pulls) und Cloudsmith (aktuell ~4.5k Paketdownloads pro Tag) ziemlich gut erkennen, dass sich Viele im Alltag auf evcc verlassen.\\n\\nDamit wir das Projekt mit ausreichendem Fokus pflegen und weiterentwickeln k\xf6nnen, ist nachhaltige Finanzierung ein wichtiges Thema. Hinter evcc steckt kein gro\xdfes Unternehmen, kein Wallboxhersteller und wir haben auch keine Lust auf das Startupspiel mit Investoren. Aktuell ist evcc ein Projekt, was wir in unserer Freizeit vorantreiben. Wir sind \xfcberzeugt davon, dass es eine gute Idee ist, direkt f\xfcr euch, die Nutzer zu arbeiten und unabh\xe4ngig von anderen Verpflichtungen und Zw\xe4ngen zu sein.\\n\\nMit **GitHub\'s Sponsoring** haben wir eine sehr leichtgewichtige und einfache L\xf6sung gefunden, um finanzielle Unterst\xfctzung direkt von Nutzern entgegennehmen zu k\xf6nnen. Zudem haben wir dadurch die M\xf6glichkeit, **einige Funktionen exklusiv f\xfcr Sponsoren** bereitzustellen. Momentan sind dies bestimmte Wallbox-Typen und die Telemetry Funktion, wir k\xf6nnen uns aber durchaus vorstellen dieses Modell in Zukunft noch anzupassen.\\n\\n## \ud83d\udc9a Danke an alle Sponsoren\\n\\nAktuell haben wir **\xfcber 1.500 Sponsoren** \ud83e\udd73, die einen monatlichen Beitrag von mindestens $2 zahlen. Das ist ziemlich cool, ein gro\xdfer Vertrauensbeweis und best\xe4rkt uns darin weiter viel Zeit in das Projekt zu investieren.\\n\\nZus\xe4tzlich zum Sponsortoken um Funktionen freizuschalten schicken wir allen Unterst\xfctzern auch gerne Sticker. Damit k\xf6nnt ihr Laptop, Raspberry, Wallbox oder euer Ladeequipment versch\xf6nern. Den Link zum Stickerformular findet ihr in der evcc UI unten rechts beim Klick auf das Sonnensymbol.\\n\\n| [@evcc_io](https://twitter.com/evcc_io/status/1489667714411114502)                                                    | [@Ein_Klimawender](https://twitter.com/Ein_Klimawender/status/1589844295992819712)                                        | [@frd9900](https://twitter.com/frd9900/status/1591416016848162816)                                                      |\\n| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |\\n| [![Tweet @evcc_io](sticker_evcc.jpeg)](https://twitter.com/evcc_io/status/1489667714411114502)                        | [![Tweet @Ein_Klimawender](sticker_Ein_Klimawender.jpeg)](https://twitter.com/Ein_Klimawender/status/1589844295992819712) | [![Tweet @frd9900](sticker_frd9900.jpeg)](https://twitter.com/frd9900/status/1591416016848162816)                       |\\n| [@ABBolle](https://github.com/evcc-io/evcc/discussions/4446#discussioncomment-4069333)                                | [@rediculum](https://github.com/evcc-io/evcc/discussions/4446#discussion-4393578)                                         | [@123aerox](https://github.com/evcc-io/evcc/discussions/4446#discussioncomment-4013806)                                 |\\n| [![GitHub @ABBolle](sticker_ABBolle.jpg)](https://github.com/evcc-io/evcc/discussions/4446#discussioncomment-4069333) | [![GitHub @rediculum](sticker_rediculum.png)](https://github.com/evcc-io/evcc/discussions/4446#discussion-4393578)        | [![GitHub @123aerox](sticker_123aerox.jpg)](https://github.com/evcc-io/evcc/discussions/4446#discussioncomment-4013806) |\\n\\n## \ud83d\udcee Einmal-Sponsoring\\n\\nWir haben schon mehrfach das Feedback bekommen, dass Nutzer Bauchschmerzen mit monatlichen Zahlungen haben und sich eine M\xf6glichkeit der Einmalzahlung w\xfcnschen, um ein Sponsortoken zu erhalten. Dies ist nun m\xf6glich. Auf der [GitHub Sponsoring Seite](https://github.com/sponsors/evcc-io?frequency=one-time) gibt es jetzt neben den monatlichen auch One-time-Stufen. Folgende Preisstufen haben wir uns \xfcberlegt:\\n\\n- **\ud83c\udf31 $100 - Nachhaltige Entwicklung**<br />Du tr\xe4gst dazu bei, dass wir auch zuk\xfcnftig viel Energie in die Weiterentwicklung von evcc investieren k\xf6nnen. Au\xdferdem bekommst du **ein unbefristetes Sponsortoken**, mit dem du alle evcc Funktionen nutzen kannst.\\n- **\u2600\ufe0f $150 - Friends & Family**<br />Du bekommst **drei unbefristete Sponsortoken**. Eins f\xfcr dich und zwei weitere, die du an Freunde oder Familie weitergeben kannst. Du wirst als Sponsor auf [evcc.io](https://evcc.io) erw\xe4hnt.\\n- **\ud83d\ude9b $1.000 - Multiplikator**<br />F\xfcr Elektriker und Solarteure. Du bekommst **zehn unbefristete Sponsortoken**, die du f\xfcr deine Kundenprojekte einsetzen kannst.\\n\\nDie Ausstellung f\xfcr die unbefristeten Sponsortoken funktioniert genauso wie der aktuelle Prozess \xfcber [cloud.evcc.io](https://cloud.evcc.io). Einziger Unterschied ist, dass das Token nicht abl\xe4uft.\\n\\n_Hinweis: Momentan wird nur das erste Token pro Benutzer automatisch ausgestellt. W\xe4hlst du die **Friends & Family** oder **Multiplikator** Stufe, stellen wir dir deine weiteren Token manuell aus. Schreib dazu einfach [info@evcc.io](mailto:info@evcc.io) an._\\n\\n## \ud83c\udf9f\ufe0f Contributor-Token\\n\\nCommunity-Mitglieder, die \xfcber GitHub PRs zu substanziell zu evcc beigetragen haben, k\xf6nnen auch ein freies Token erhalten. Wir sind immer froh \xfcber Bugfixes, brauchen aber auch dringend Unterst\xfctzung im Bereich Dokumentation und [\xdcbersetzung](https://github.com/evcc-io/evcc/discussions/5218).\\n\\nWas genau eine substantielle Contribution ist, haben wir nicht klar geregelt. Einen Kommafehler rausmachen qualifiziert noch nicht, das Beheben eines fiesen Bugs reicht aber definitiv. Schreib uns einfach eine Mail mit Verweis auf deinen GitHub Nutzernamen.\\n\\n## \ud83d\ude9a GitHub Sponsoring zieht um\\n\\nAktuell l\xe4uft das GitHub Sponsoring \xfcber den Account von [@andig](https://github.com/andig), dem Gr\xfcnder von evcc. Der Betrag, der nach Ausgaben (Infrastruktur, Sticker, ...) im Monat \xfcbrig bleibt, wird \xfcber einen Verteilungsschl\xfcssel an alle drei Mitglieder vom Core-Team verteilt. Um diesen Prozess transparenter zu machen, ziehen wir unser GitHub Sponsoring jetzt auf die [evcc-io Organisation](https://github.com/sponsors/evcc-io) um. Wenn ihr bereits Sponsor seid, m\xfcsst ihr nichts ver\xe4ndern. Euer Token l\xe4uft wie gewohnt weiter und auch der Beitrag findet den Weg an alle Teammitglieder. Wir haben aber alle Links zum Sponsoring auf die Organisation umgestellt. Einmalzahlungen gibt es auch nur dort.\\n\\n[![Migration GitHub Sponsoring](migrate-sponsoring.png)](https://github.com/sponsors/evcc-io)\\n\\n## \ud83d\udc33 Docker Image zieht um\\n\\nIm gleichen Zug ziehen wir auch unsere Docker Images um. Bislang wurden die Pakete unter `andig/evcc` ver\xf6ffentlicht. Nun findet ihr die offiziellen Versionen unter `evcc/evcc`.\\n\\nAn dieser Stelle noch einmal Danke an das Docker Team, die evcc als [Docker-Sponsored Open-Source-Projekt](https://www.docker.com/community/open-source/application/) qualifiziert haben. Dadurch bekommen wir kostenfreien Zugang zu Team-Funktionen von Docker Hub.\\n\\n[![Migration Docker Hub](migrate-docker.png)](https://hub.docker.com/u/evcc)\\n\\n---\\n\\n**Danke f\xfcr eure Unterst\xfctzung!**\\nevcc Core Team<br />\\n[@andig](https://github.com/andig), [@premultiply](https://github.com/premultiply) und [@naltatis](https://github.com/naltatis)"},{"id":"/2022/05/08/phases-templates-lithuanian","metadata":{"permalink":"/blog/2022/05/08/phases-templates-lithuanian","editUrl":"https://github.com/evcc-io/docs/tree/main/blog/2022-05-08/phases-templates-lithuanian.md","source":"@site/blog/2022-05-08/phases-templates-lithuanian.md","title":"Phasenhandling, Templates und Lithauisch","description":"Seit dem letzten Blogartikel sind schon wieder ein paar Monate vergangen. Wird also Zeit, dass wir hier mal wieder eine kurze Zusammenfassung und einen \xdcberblick \xfcber das geben was sich bei evcc in den letzten elf Releases (v0.81 bis v0.91) getan an.","date":"2022-05-08T00:00:00.000Z","formattedDate":"8. Mai 2022","tags":[{"label":"release","permalink":"/blog/tags/release"}],"readingTime":3.52,"truncated":false,"authors":[{"name":"Michael Geers","title":"Core-Team, UI","url":"https://github.com/naltatis","imageURL":"https://github.com/naltatis.png","key":"naltatis"}],"frontMatter":{"title":"Phasenhandling, Templates und Lithauisch","authors":["naltatis"],"tags":["release"],"hide_table_of_contents":false},"prevItem":{"title":"Sponsoring und Umz\xfcge","permalink":"/blog/2022/11/26/one-time-sponsoring"},"nextItem":{"title":"evcc im pv magazin","permalink":"/blog/2022/01/18/pvmagazin"}},"content":"Seit dem letzten Blogartikel sind schon wieder ein paar Monate vergangen. Wird also Zeit, dass wir hier mal wieder eine kurze Zusammenfassung und einen \xdcberblick \xfcber das geben was sich bei evcc in den letzten elf Releases (v0.81 bis v0.91) getan an.\\n\\n## Neu unterst\xfctzte Ger\xe4te\\n\\nDie Liste der von evcc unterst\xfctzten Hardware w\xe4chst flei\xdfig weiter.\\n\\n### Wallboxen \ud83d\udd0c\\n\\nWir haben einige Wallbox-Anbindungen hinzugef\xfcgt. Da evcc nun auch den sehr verbreiteten [Bender Controller unterst\xfctzt](https://github.com/evcc-io/evcc/pull/3103) konnten wir unsere Unterst\xfctzung deutlich verbreitern.\\n\\nHier die Hersteller, die seit Anfang des Jahres neu dazu gekommen sind: Alphatec, Ebee, Ensto, Garo, HardyBarth, Innogy, Juice, Mennekes, OpenWB Pro, Optec, PC Electric, SmartWB, TechniSat, Tapo Smarthome, Ubitricity Vestel, Webasto. [(Alle Wallboxen)](/docs/devices/chargers)\\n\\n### Fahrzeuge \ud83d\ude97 \ud83d\udef5\\n\\nAudi (e-tron), Cupra, Jaguar, Landrover, Mercedes, Silence S01, Smart. [(Alle Fahrzeuge)](/docs/devices/vehicles)\\n\\n### Wechselrichter \u2600\ufe0f \ud83d\udd0b\\n\\nSMA (Smart Energy Hybrid), Huawei (SUN2000), Solarwatt, Solax, Varta. [(Alle Wechselrichter)](/docs/devices/meters)\\n\\n### Netzz\xe4hler \ud83d\udcdf\\n\\nSMA (Data Manager M Lite), Shelly (1PM, 3EM), Siemens (PAC 2200), OpenEMS, TQ. [(Alle Messger\xe4te)](/docs/devices/meters)\\n\\n### RFID Support \ud83e\udeaa\\n\\nBei den Wallboxen von Easee und Warp kann nun auch evcc\'s [RFID Funktion zur Fahrzeugerkennung](/docs/guides/vehicles#erkennung-\xfcber-rfid-karten) verwendet werden.\\n\\n## Verbesserte Phasenumschaltung (1P/3P)\\n\\nDie erste Version der Phasenumschaltung f\xfcr unterst\xfctzte Wallboxen ist bereits seit Mitte letzten Jahres in evcc vorhanden. Wir konnten einige Erfahrungen sammeln und haben auf dieser Grundlage im Februar [ein gr\xf6\xdferes Redesign](https://github.com/evcc-io/evcc/pull/2613) an der Mechanik durchgef\xfchrt. Damit ist die Phasenumschaltung deutlich zuverl\xe4ssiger geworden und verh\xe4lt sich auch in Situationen mit unbekannten oder unplausiblen Konfigurations-/ bzw. Messwerten besser.\\n\\n## Templates und Dokumentation\\n\\n[Im Dezember](/blog/2021/12/12/version-0-73#evcc-configure) haben wir mit dem CLI Einrichtungsassistenten `evcc configure` die Grundlagen f\xfcr eine einfachere Ersteinrichtung gelegt.\\n\\nDie Konfigurationssyntax von evcc ist sehr flexibel und m\xe4chtig. So lassen sich bspw. noch nicht offiziell unterst\xfctzte Ger\xe4te oft rein per Konfiguration anbinden, wenn man die entsprechenden Modbus Felder und JSON Strukturen der Schnittstelle kennt. Im nun archivierten `evcc-io/config` Repository hatten wir Beispielkonfigurationen gesammelt, die man per Copy & Paste in seine eigene Konfiguration \xfcbernehmen konnte.\\n\\nZusammen mit dem Kommandozeilenwizzard haben wir das Konzept von **Templates** eingef\xfchrt. Durch Templates ist es uns m\xf6glich Boilerplate und internes Ger\xe4tewissen (Protokolle, Adresse, Datentypen, Feldnamen) sauber zu kapseln. Das folgende Beispiel f\xfcr die Einrichtung eines Solarlog Netzz\xe4hlers illustriert die Umstellung ganz gut:\\n\\nVorher:\\n\\n```yaml\\nmeters:\\n  - name: my_solarlog\\n    type: custom\\n    power:\\n      source: calc\\n      add:\\n        - source: modbus\\n          uri: 192.168.0.77:502\\n          id: 1\\n          register:\\n            address: 3502\\n            type: input\\n            decode: uint32s\\n          scale: -1\\n        - source: modbus\\n          uri: 192.168.0.77:502\\n          id: 1\\n          register:\\n            address: 3518\\n            type: input\\n            decode: uint32s\\n```\\n\\nNachher:\\n\\n```yaml\\nmeters:\\n  - name: my_solarlog\\n    type: template\\n    template: solarlog\\n    usage: grid\\n    host: 192.168.0.77\\n```\\n\\nDer Nutzer muss nun nur noch den Hostnamen oder die IP-Adresse seiner Solarlog Instanz wissen und eingeben - Protokoll und Datenstruktur werden im `solarlog` Template gekapselt.\\n\\nZus\xe4tzlich erhalten Templates auch eine strukturierte Beschreibung aller erforderlichen und optionalen Parameter, sowie ggf. Standardwerte und lokalisierte Hilfetexte.\\n\\n[Seit M\xe4rz](https://github.com/evcc-io/docs/pull/92) haben wir die [Ger\xe4tedokumentation unter docs.evcc.io](/docs/devices/chargers) auf Templates umgestellt. Die bisherigen Schreibweisen funktionieren nat\xfcrlich weiterhin. Da zuk\xfcnftige Feature wie die webbasierte Einrichtung (ja, das wird kommen \ud83d\ude04) auf `type: template` aufbauen werden empfehlen wir, dass ihr eure bestehenden Konfigurationen bereits jetzt auf das neue Format umschreibt.\\n\\n## Neue Lokalisierung: Litauisch \ud83c\uddf1\ud83c\uddf9\\n\\nMit v0.91 haben wir eine neue Lokalisation erhalten. Die evcc UI ist nun auch auf lithauisch verf\xfcgbar. Das ist neben Deutsch, Englisch und Itali\xe4nisch nun die vierte Sprache. Vielen Dank [RTTTC](https://github.com/RTTTC) \ud83d\udc9a.\\n\\nDa unser Sprachwissen relativ beschr\xe4nkt ist sind wir immer dankbar f\xfcr \xdcbersetzungs-Contributions. Eine Dokumentation daf\xfcr gibts momentan noch nicht, aber schaut euch bei Interesse einfach [RTTC\'s Pull Request](https://github.com/evcc-io/evcc/pull/3205) an. Das ist kein Hexenwerk \ud83e\uddd9\u200d\u2640\ufe0f.\\n\\n## What\'s next?\\n\\nEinige von euch werden es sicher schon gesehen haben. Mit dem n\xe4chsten Release wird evcc eine optisch komplett \xfcberarbeitete Benutzeroberfl\xe4che bekommen. Diese ist bereits in den aktuellen Nightly Builds verf\xfcgbar und ihr findet [hier](https://github.com/evcc-io/evcc/discussions/3149) und [hier](https://github.com/evcc-io/evcc/pull/2889) Infos zum Entwicklungsprozess. Mehr dazu aber im n\xe4chsten Blogartikel.\\n\\n## Fehlerkorrekturen\\n\\nDie letzten Versionen erhalten nat\xfcrlich wieder eine Reihe von Fehlerkorrekturen und vielen kleinen Verbesserungen. Schaut euch gerne \xfcber den Changelog Link unten eine detaillierte Auflistung an.\\n\\n## Changelogs\\n\\nHier findet ihr mehr Details zu den letzten Neuerungen:\\n\\n- [Version 0.91](https://github.com/evcc-io/evcc/releases/tag/0.91)\\n- [Version 0.90](https://github.com/evcc-io/evcc/releases/tag/0.90)\\n- [Version 0.89](https://github.com/evcc-io/evcc/releases/tag/0.89)\\n- [Version 0.88](https://github.com/evcc-io/evcc/releases/tag/0.88)\\n- [Version 0.87](https://github.com/evcc-io/evcc/releases/tag/0.87)\\n- [Version 0.86](https://github.com/evcc-io/evcc/releases/tag/0.86)\\n- [Version 0.85](https://github.com/evcc-io/evcc/releases/tag/0.85)\\n- [Version 0.84](https://github.com/evcc-io/evcc/releases/tag/0.84)\\n- [Version 0.83](https://github.com/evcc-io/evcc/releases/tag/0.83)\\n- [Version 0.82](https://github.com/evcc-io/evcc/releases/tag/0.82)\\n- [Version 0.81](https://github.com/evcc-io/evcc/releases/tag/0.81)"},{"id":"/2022/01/18/pvmagazin","metadata":{"permalink":"/blog/2022/01/18/pvmagazin","editUrl":"https://github.com/evcc-io/docs/tree/main/blog/2022-01-18/pvmagazin.md","source":"@site/blog/2022-01-18/pvmagazin.md","title":"evcc im pv magazin","description":"Unser Core Entwickler Andreas Linde und unser Anwender Tjarko Tjaden haben dem pv magazin Deutschland ein Interview zum Thema Open-Source-Lademanager Schnittstellen zu Wallbox und Photovoltaik-Anlage meistern gegeben.","date":"2022-01-18T00:00:00.000Z","formattedDate":"18. Januar 2022","tags":[],"readingTime":0.155,"truncated":false,"authors":[{"name":"Michael Geers","title":"Core-Team, UI","url":"https://github.com/naltatis","imageURL":"https://github.com/naltatis.png","key":"naltatis"}],"frontMatter":{"title":"evcc im pv magazin","authors":["naltatis"],"hide_table_of_contents":false},"prevItem":{"title":"Phasenhandling, Templates und Lithauisch","permalink":"/blog/2022/05/08/phases-templates-lithuanian"},"nextItem":{"title":"Version 0.80","permalink":"/blog/2022/01/09/version-0-80"}},"content":"Unser Core Entwickler [Andreas Linde](https://twitter.com/DerAndereAndi) und unser Anwender [Tjarko Tjaden](https://twitter.com/TjarkoTjaden) haben dem pv magazin Deutschland ein Interview zum Thema [Open-Source-Lademanager Schnittstellen zu Wallbox und Photovoltaik-Anlage meistern](https://www.pv-magazine.de/2022/01/14/mit-open-source-lademanager-schnittstellen-zu-wallbox-und-photovoltaik-anlage-meistern/) gegeben.\\n\\n[![Interview im pv magazin](pv-magazin.png)](https://www.pv-magazine.de/2022/01/14/mit-open-source-lademanager-schnittstellen-zu-wallbox-und-photovoltaik-anlage-meistern/)"},{"id":"/2022/01/09/version-0-80","metadata":{"permalink":"/blog/2022/01/09/version-0-80","editUrl":"https://github.com/evcc-io/docs/tree/main/blog/2022-01-09/version-0-80.md","source":"@site/blog/2022-01-09/version-0-80.md","title":"Version 0.80","description":"Auch dieses Jahr geht es weiter mit weiteren Aktualisierungen :) Zus\xe4tzlich zu den kleineren Updates mit 0.78 und 0.79, gibt es nun auch ein paar gr\xf6\xdfere \xc4nderungen mit der Version 0.80.","date":"2022-01-09T00:00:00.000Z","formattedDate":"9. Januar 2022","tags":[{"label":"release","permalink":"/blog/tags/release"}],"readingTime":1.555,"truncated":false,"authors":[{"name":"Andreas Linde","title":"Core-Team, Allrounder","url":"https://github.com/DerAndereAndi","imageURL":"https://github.com/DerAndereAndi.png","key":"derandereandi"},{"name":"Michael Geers","title":"Core-Team, UI","url":"https://github.com/naltatis","imageURL":"https://github.com/naltatis.png","key":"naltatis"}],"frontMatter":{"title":"Version 0.80","authors":["derandereandi","naltatis"],"tags":["release"],"hide_table_of_contents":false},"prevItem":{"title":"evcc im pv magazin","permalink":"/blog/2022/01/18/pvmagazin"},"nextItem":{"title":"Version 0.77","permalink":"/blog/2021/12/31/version-0-77"}},"content":"Auch dieses Jahr geht es weiter mit weiteren Aktualisierungen :) Zus\xe4tzlich zu den kleineren Updates mit 0.78 und 0.79, gibt es nun auch ein paar gr\xf6\xdfere \xc4nderungen mit der Version 0.80.\\n\\n## `evcc configure` Verbesserungen\\n\\nWenn man eine Konfiguration mit `evcc configure` erstellt, wird zuerst nach dem eigenen Know How gefragt. So k\xf6nnen fortgeschrittene Anwender die Konfiguration in technischen Bereichen etwas genauer einstellen. Dieser Modus ist weiterhin auch \xfcber `evcc configure --advanced` direkt verf\xfcgbar. Einsteiger empfehlen wir diesen Modus jedoch nicht, da mehr Know-How erforderlich ist.\\n\\nZust\xe4tzlich gibt es weitere Ger\xe4te Templates, Korrekturen an bisherigen Templates und weitere Einstellm\xf6glichkeiten.\\n\\n## Sonnenenergieanteil und Ersparnis\\n\\n![Ersparnisdialog](ersparnis.png)\\n\\nDas neue Ersparnisfeature zeigt dir an wie viel deines Ladestroms durch selbsproduzierte Sonnenenergie gedeckt werden konnte.\\nDer Prozentwert wird unten rechts in der Ecke angezeigt.\\nBeim Klick darauf bekommst du weitere Details in einem Dialog angezeigt.\\nDort siehst du neben der Energiemenge auch deinen effektiven Energiepreis und die Gesamtersparnis gegen\xfcber reinem Netzbezug.\\nHier findest du mehr Informationen zur [Berechnung und Preiskonfiguration](/docs/guides/setup#ersparnisberechnung).\\n\\n[Sponsoren](/docs/sponsorship) finden in dem neuen Dialog unter dem Dankesch\xf6n-Konfetti-Button einen, _\\\\*drumroll\\\\*_, Link um unsere neuen evcc Sticker zu bekommen.\\nIhr seid die Besten. Danke f\xfcr euren Support! \ud83d\udc9a\ud83e\udd73\\n\\n## Docker\\n\\nWer Docker verwendet, kann nun \xfcber die Tags `latest` jeweils die aktuelle Version verwenden. Mit dem Tag `nightly` gibt es dann t\xe4glich neue Builds, die aber noch nicht so gut getestet sein k\xf6nnen. Weitere Informationen zur Docker Installation sind hier zu finden: [Docker, Synology](/docs/installation/docker)\\n\\n## Fehlerkorrekturen\\n\\nDiese Version enth\xe4lt nat\xfcrlich wieder eine Reihe von Fehlerkorrekturen und vielen kleinen Verbesserungen. Schaut euch gerne \xfcber den Changelog Link unten eine detaillierte Auflistung an.\\n\\n## Download & Installation\\n\\n- [Debian, Ubuntu, Raspberry Pi](/docs/installation/linux)\\n- [macOS Homebrew](/docs/installation/macos)\\n- [Docker, Synology](/docs/installation/docker)\\n- [Manuell (inkl. Windows)](/docs/installation/manual)\\n\\n## Changelog\\n\\n### Version 0.80\\n\\n- [Detaillierte Liste der \xc4nderungen](https://github.com/evcc-io/evcc/releases/tag/0.80)\\n\\n### Version 0.79\\n\\n- [Detaillierte Liste der \xc4nderungen](https://github.com/evcc-io/evcc/releases/tag/0.79)\\n\\n### Version 0.78\\n\\n- [Detaillierte Liste der \xc4nderungen](https://github.com/evcc-io/evcc/releases/tag/0.78)"},{"id":"/2021/12/31/version-0-77","metadata":{"permalink":"/blog/2021/12/31/version-0-77","editUrl":"https://github.com/evcc-io/docs/tree/main/blog/2021-12-31/version-0-77.md","source":"@site/blog/2021-12-31/version-0-77.md","title":"Version 0.77","description":"Auf den letzten Metern des Jahres 2021 kommt doch nochmals eine Aktualisierung mit ein paar Fehlerkorrekturen. Das Jahr soll ja schlie\xdflich positiv enden ;)","date":"2021-12-31T00:00:00.000Z","formattedDate":"31. Dezember 2021","tags":[{"label":"release","permalink":"/blog/tags/release"}],"readingTime":0.43,"truncated":false,"authors":[{"name":"Andreas Linde","title":"Core-Team, Allrounder","url":"https://github.com/DerAndereAndi","imageURL":"https://github.com/DerAndereAndi.png","key":"derandereandi"}],"frontMatter":{"title":"Version 0.77","authors":["derandereandi"],"tags":["release"],"hide_table_of_contents":false},"prevItem":{"title":"Version 0.80","permalink":"/blog/2022/01/09/version-0-80"},"nextItem":{"title":"Version 0.76","permalink":"/blog/2021/12/29/version-0-76"}},"content":"Auf den letzten Metern des Jahres 2021 kommt doch nochmals eine Aktualisierung mit ein paar Fehlerkorrekturen. Das Jahr soll ja schlie\xdflich positiv enden ;)\\n\\n## Fehlerkorrekturen\\n\\nGegen\xfcber der Version 0.76 haben wir Korrekturen f\xfcr die Verwendung einiger Ger\xe4te und der Handhabung von PV Timern in der UI eingepflegt. Schaut euch gerne \xfcber den Changelog Link unten eine detaillierte Auflistung an.\\n\\n## Download & Installation\\n\\n- [Debian, Ubuntu, Raspberry Pi](/docs/installation/linux)\\n- [macOS Homebrew](/docs/installation/macos)\\n- [Docker, Synology](/docs/installation/docker)\\n- [Manuell (inkl. Windows)](/docs/installation/manual)\\n\\n## Changelog\\n\\n- [Detaillierte Liste der \xc4nderungen](https://github.com/evcc-io/evcc/releases/tag/0.77)"},{"id":"/2021/12/29/version-0-76","metadata":{"permalink":"/blog/2021/12/29/version-0-76","editUrl":"https://github.com/evcc-io/docs/tree/main/blog/2021-12-29/version-0-76.md","source":"@site/blog/2021-12-29/version-0-76.md","title":"Version 0.76","description":"Heute gibt es zum Jahresende nochmals eine Aktualisierung mit einigen Neuerungen.","date":"2021-12-29T00:00:00.000Z","formattedDate":"29. Dezember 2021","tags":[{"label":"release","permalink":"/blog/tags/release"}],"readingTime":0.465,"truncated":false,"authors":[{"name":"Andreas Linde","title":"Core-Team, Allrounder","url":"https://github.com/DerAndereAndi","imageURL":"https://github.com/DerAndereAndi.png","key":"derandereandi"}],"frontMatter":{"title":"Version 0.76","authors":["derandereandi"],"tags":["release"],"hide_table_of_contents":false},"prevItem":{"title":"Version 0.77","permalink":"/blog/2021/12/31/version-0-77"},"nextItem":{"title":"Version 0.74","permalink":"/blog/2021/12/19/version-0-74"}},"content":"Heute gibt es zum Jahresende nochmals eine Aktualisierung mit einigen Neuerungen.\\n\\n## Weitere Fahrzeuge und Wallbox\\n\\nEs werden nun die Dacia und Smart EQ EVs unterst\xfctzt, ebenso die Wallbox Innogy eBox.\\n\\n## Fehlerkorrekturen\\n\\nDiese Version enth\xe4lt eine Reihe von Fehlerkorrekturen und vielen kleinen Verbesserungen. Schaut euch gerne \xfcber den Changelog Link unten eine detaillierte Auflistung an.\\n\\n## Download & Installation\\n\\n- [Debian, Ubuntu, Raspberry Pi](/docs/installation/linux)\\n- [macOS Homebrew](/docs/installation/macos)\\n- [Docker, Synology](/docs/installation/docker)\\n- [Manuell (inkl. Windows)](/docs/installation/manual)\\n\\n## Changelog\\n\\n### Version 0.76\\n\\n- [Detaillierte Liste der \xc4nderungen](https://github.com/evcc-io/evcc/releases/tag/0.76)\\n\\n### Version 0.75\\n\\n- [Detaillierte Liste der \xc4nderungen](https://github.com/evcc-io/evcc/releases/tag/0.75)"},{"id":"/2021/12/19/version-0-74","metadata":{"permalink":"/blog/2021/12/19/version-0-74","editUrl":"https://github.com/evcc-io/docs/tree/main/blog/2021-12-19/version-0-74.md","source":"@site/blog/2021-12-19/version-0-74.md","title":"Version 0.74","description":"Heute gibt es ein kleines Update haupts\xe4chlich mit einigen Fehlerkorrekturen und weiteren Verbesserungen.","date":"2021-12-19T00:00:00.000Z","formattedDate":"19. Dezember 2021","tags":[{"label":"release","permalink":"/blog/tags/release"}],"readingTime":0.625,"truncated":false,"authors":[{"name":"Andreas Linde","title":"Core-Team, Allrounder","url":"https://github.com/DerAndereAndi","imageURL":"https://github.com/DerAndereAndi.png","key":"derandereandi"}],"frontMatter":{"title":"Version 0.74","authors":["derandereandi"],"tags":["release"],"hide_table_of_contents":false},"prevItem":{"title":"Version 0.76","permalink":"/blog/2021/12/29/version-0-76"},"nextItem":{"title":"Version 0.73","permalink":"/blog/2021/12/12/version-0-73"}},"content":"Heute gibt es ein kleines Update haupts\xe4chlich mit einigen Fehlerkorrekturen und weiteren Verbesserungen.\\n\\n## Timer in der UI\\n\\nDie Oberfl\xe4che zeigt euch nun die im Hintergrund laufenden Timer an:\\n\\n![Timer Phasenumschaltung](1p3p.png)\\n\\n- Im PV Modus:\\n  - Wann wird das Laden unterbrochen\\n  - Wann wird mit dem Laden wieder begonnen\\n- 1p3p Phasenumschaltung:\\n  - Wann wird auf 3p hochgeschaltet\\n  - Wann wird auf 1p heruntergeschaltet\\n\\nZus\xe4tzlich wird auch angezeigt mit wievielen Phasen geladen wird.\\n\\n## Zielladen\\n\\n![Zielladen UI](zielladen.png)\\n\\nDie Zielladen Funktionalit\xe4t ist zur\xfcck. Hiermit kann man das EV auf ein bestimmtes Datum und Uhrzeit auf den geew\xfcnschten SoC Wert laden.\\n\\n## Download & Installation\\n\\n- [Debian, Ubuntu, Raspberry Pi](/docs/installation/linux)\\n- [macOS Homebrew](/docs/installation/macos)\\n- [Docker, Synology](/docs/installation/docker)\\n- [Manuell (inkl. Windows)](/docs/installation/manual)\\n\\n## Changelog\\n\\n- [Detaillierte Liste der \xc4nderungen](https://github.com/evcc-io/evcc/releases/tag/0.74)"},{"id":"/2021/12/12/version-0-73","metadata":{"permalink":"/blog/2021/12/12/version-0-73","editUrl":"https://github.com/evcc-io/docs/tree/main/blog/2021-12-12/version-0-73.md","source":"@site/blog/2021-12-12/version-0-73.md","title":"Version 0.73","description":"Heute gibt es ein kleines Update haupts\xe4chlich mit einigen Fehlerkorrekturen und weiteren Verbesserungen.","date":"2021-12-12T00:00:00.000Z","formattedDate":"12. Dezember 2021","tags":[{"label":"release","permalink":"/blog/tags/release"}],"readingTime":0.75,"truncated":false,"authors":[{"name":"Andreas Linde","title":"Core-Team, Allrounder","url":"https://github.com/DerAndereAndi","imageURL":"https://github.com/DerAndereAndi.png","key":"derandereandi"}],"frontMatter":{"title":"Version 0.73","authors":["derandereandi"],"tags":["release"],"hide_table_of_contents":false},"prevItem":{"title":"Version 0.74","permalink":"/blog/2021/12/19/version-0-74"},"nextItem":{"title":"Version 0.72","permalink":"/blog/2021/12/10/version-0-72"}},"content":"Heute gibt es ein kleines Update haupts\xe4chlich mit einigen Fehlerkorrekturen und weiteren Verbesserungen.\\n\\n## `evcc configure`\\n\\nDas Kommando zur gef\xfchrten Erstellung einer Konfigurationsdatei und die darunterliegenden Templates hat folgende Verbesserungen erhalten:\\n\\n- Bei einem Ladepunkt kann nun eingestellt werden, ob beim Abstecken des Ladekabels die Lade-Standardeinstellungen wieder hergestellt werden sollen. Mehr dazu in unserer Dokumentation unter [`resetOnDisconnect`](/docs/reference/configuration/loadpoints#resetondisconnect)\\n- Es k\xf6nnen nun Fahrzeugspezifische Lade-Standardwerte eingerichtet werden. Interaktiv sind diese mit `evcc configure --advanced` verf\xfcgbar. Mehr dazu in der Dokumentation unter [`onIdentify`](/docs/reference/configuration/vehicles#onidentify)\\n- Ger\xe4te mit Modbus erzeugen nun korrekte Konfigurationen\\n- Verbesserter Umgang wenn eine `evcc.yaml` Datei bereits im aktuellen Ordner existiert aber andere Zugriffsrechte hat.\\n\\n## Standort-Erkennung\\n\\nF\xfcr einige Fahrzeuge kann **evcc** nun den aktuellen Standort erkennen. Dies wird momentan jedoch noch nicht aktiv verwendet.\\n\\n## Download & Installation\\n\\n- [Debian, Ubuntu, Raspberry Pi](/docs/installation/linux)\\n- [macOS Homebrew](/docs/installation/macos)\\n- [Docker, Synology](/docs/installation/docker)\\n- [Manuell (inkl. Windows)](/docs/installation/manual)\\n\\n## Changelog\\n\\n- [Detaillierte Liste der \xc4nderungen](https://github.com/evcc-io/evcc/releases/tag/0.73)"},{"id":"/2021/12/10/version-0-72","metadata":{"permalink":"/blog/2021/12/10/version-0-72","editUrl":"https://github.com/evcc-io/docs/tree/main/blog/2021-12-10/version-0-72.md","source":"@site/blog/2021-12-10/version-0-72.md","title":"Version 0.72","description":"Es hat sich in den letzten Wochen viel getan, und dar\xfcber m\xf6chten wir heute etwas ausf\xfchrlicher berichten was es alles in Version 0.72 an Neuem zu entdecken gibt.","date":"2021-12-10T00:00:00.000Z","formattedDate":"10. Dezember 2021","tags":[{"label":"release","permalink":"/blog/tags/release"}],"readingTime":1.385,"truncated":false,"authors":[{"name":"Andreas Linde","title":"Core-Team, Allrounder","url":"https://github.com/DerAndereAndi","imageURL":"https://github.com/DerAndereAndi.png","key":"derandereandi"}],"frontMatter":{"title":"Version 0.72","authors":["derandereandi"],"tags":["release"],"hide_table_of_contents":false},"prevItem":{"title":"Version 0.73","permalink":"/blog/2021/12/12/version-0-73"},"nextItem":{"title":"Neue Dokumentation und Blog","permalink":"/blog/2021/12/09/blog-und-dokumentation"}},"content":"Es hat sich in den letzten Wochen viel getan, und dar\xfcber m\xf6chten wir heute etwas ausf\xfchrlicher berichten was es alles in Version 0.72 an Neuem zu entdecken gibt.\\n\\n![evcc configure example](configure.gif)\\n\\n## Einfachere Installation\\n\\nDer Zugang zu **evcc** erforderte bisher doch einige technische Kenntnisse im Umgang mit dem jeweiligen Betriebssystem. F\xfcr Linux (Debian, Ubuntu, Raspberry Pi OS) und macOS gibt es nun eine deutlich vereinfachte Installation. So unterst\xfctzt **evcc** nun die Installation \xfcber die Paketmanager `apt` unter Linux und [`homebrew`](https://brew.sh) unter macOS.\\n\\nHierf\xfcr haben wir die Installationsanleitungen nochmals \xfcberarbeitet und damit die Installation weiter vereinfacht. Schaut doch mal in der [dazugeh\xf6rigen Dokumentation](/docs/installation/overview) vorbei.\\n\\n## Einfachere Konfiguration\\n\\nAuch die Einrichtung von **evcc** war bisher noch sehr technisch gepr\xe4gt. Seien es die Formatierungsvorgaben von [YAML](https://yaml.org), welches die Synthax der Konfigurations vorgibt, oder die Ausgestaltung und Anpassung der Konfiguration der eigenen Ger\xe4te in der Konfigurationsdatei. F\xfcr den ein oder anderen sind das doch recht hohe H\xfcrden. Aber das Projektk ist noch jung und das Team \xfcberschaubar, vor allem wenn man bedenkt dass dies f\xfcr die Entwickler \\"nur\\" ein Hobby ist.\\n\\nUm diese H\xfcrden etwas zu minimieren, f\xfchren wir mit dieser neuen Version 0.72 von **evcc** eine neue Funktionalit\xe4t ein: Die gef\xfchrte Konfiguration mit `evcc configure`.\\n\\nMit diesem Kommando l\xe4sst sich interaktiv eine funktionierende Konfigurationsdatei f\xfcr die eigene Installation erstellen! Es gibt sicher hier und da noch einige Probleme und Fehler, aber wir hoffen es ist ein guter erster Schritt in die richtige Richtung.\\n\\n## Download & Installation\\n\\n- [Debian, Ubuntu, Raspberry Pi](/docs/installation/linux)\\n- [macOS Homebrew](/docs/installation/macos)\\n- [Docker, Synology](/docs/installation/docker)\\n- [Manuell (inkl. Windows)](/docs/installation/manual)\\n\\n## Changelog\\n\\n### Version 0.72\\n\\n- [Detaillierte Liste der \xc4nderungen](https://github.com/evcc-io/evcc/releases/tag/0.72)\\n\\n### Version 0.71\\n\\n- [Detaillierte Liste der \xc4nderungen](https://github.com/evcc-io/evcc/releases/tag/0.71)"},{"id":"/2021/12/09/blog-und-dokumentation","metadata":{"permalink":"/blog/2021/12/09/blog-und-dokumentation","editUrl":"https://github.com/evcc-io/docs/tree/main/blog/2021-12-09/blog-und-dokumentation.md","source":"@site/blog/2021-12-09/blog-und-dokumentation.md","title":"Neue Dokumentation und Blog","description":"evcc hat nun eine Dokumentation und dieses Blog und wir m\xf6chten euch diese heute etwas n\xe4her vorstellen.","date":"2021-12-09T00:00:00.000Z","formattedDate":"9. Dezember 2021","tags":[{"label":"allgemein","permalink":"/blog/tags/allgemein"}],"readingTime":1.52,"truncated":false,"authors":[{"name":"Andreas Linde","title":"Core-Team, Allrounder","url":"https://github.com/DerAndereAndi","imageURL":"https://github.com/DerAndereAndi.png","key":"derandereandi"}],"frontMatter":{"title":"Neue Dokumentation und Blog","authors":["derandereandi"],"tags":["allgemein"],"hide_table_of_contents":false},"prevItem":{"title":"Version 0.72","permalink":"/blog/2021/12/10/version-0-72"}},"content":"evcc hat nun eine Dokumentation und dieses Blog und wir m\xf6chten euch diese heute etwas n\xe4her vorstellen.\\n\\n## Ein paar Zahlen\\n\\nAm 6.3.2020 hatte [andig](https://github.com/andig/) **evcc** mit dem [ersten Commit](https://github.com/evcc-io/evcc/commit/3c503b333dfc9a1206dd8bcfbfda89d93746c2c6) zum Leben erweckt. Und er h\xe4tte sich nicht ertr\xe4umen k\xf6nnen was dieses Projekt bisher f\xfcr einen Weg genommen hat. \xdcber 1300 Commits sp\xe4ter, mit inzwischen [369 Stars](https://github.com/evcc-io/evcc/stargazers), [90 Forks](https://github.com/evcc-io/evcc/network/members), [34 Contributors](https://github.com/evcc-io/evcc/graphs/contributors) und mehr als [70 Releases](https://github.com/evcc-io/evcc/releases) w\xe4chst **evcc** immer weiter.\\n\\nAuch die Zahl der Anwender w\xe4chst, auch wenn wir hier keine genauen Zahlen haben (und das muss auch nicht sein). Aber das [Forum](https://github.com/evcc-io/evcc/discussions) z\xe4hlt auch schon fast 450 Diskussionen mit vielen Teilnehmern. Auch in unserem [Entwickler Slack Channel](https://evcc.io/slack) tummeln sich viele Interessierte.\\n\\n## Neue Dokumentation\\n\\nUm dieser Breite an Personen, vor allem auch hinsichtlich dem jeweiligen technischen Hintergrund, einen besseren Zugang zu \\\\*_evcc_ zu geben, haben wir begonnen eine neue Dokumentation auf [docs.evcc.io](https://docs.evcc.io/docs/Home) auf Basis von dem Open Source Projekt [Docusaurus](https://docusaurus.io) aufzubauen.\\n\\nWir haben folgende Bereiche eingerichtet:\\n\\n- **Erste Schritte**: Installation und Konfiguration von **evcc**.\\n- **Anleitungen**: Verschiedene Themen und H\xe4ufige Fragen.\\n- **Ger\xe4te**: Eine Liste der bekannten, unterst\xfctzten Ger\xe4te und derer Konfiguration.\\n- **Referenz**: All die (auch technischen) Details und Konfigurationsm\xf6glichkeiten, f\xfcr diejenidgen die etwas mehr in die Tiefe gehen wollen.\\n\\nWir w\xfcrden uns freuen wenn ihr uns hierbei unterst\xfctzt. Ob es sich um Korrekturen von Rechtschreibfehlern oder neuen besseren Inhalten handelt, die Dokumentation ist ebenfalls auf Github unter [github.com/evcc-io/docs](https://github.com/evcc-io/docs) zu finden und wir freuen uns \xfcber euer Mitwirken!\\n\\n## Blog\\n\\nZus\xe4tzlich er\xf6ffnen wir heute dieses Blog. Hier wird es in unregelm\xe4\xdfigen Abst\xe4nden verschiedene Inhalte rund um **evcc** und Themen rund um das Laden zu Hause geben. Wir haben ein paar Ideen, lasst euch \xfcberraschen. Unser Hauptaugenmerkt bleibt jedoch auf der Entwicklung von **evcc** selbst. Aber einen Blick hinter die Kulissen, ist sicher auch immer wieder f\xfcr den ein oder anderen interessant :)"}]}')}}]);