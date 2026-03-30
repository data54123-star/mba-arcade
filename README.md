# mba-arcade
MBA Arcade - PWA Projekt
Projektarbeit im Rahmen der Vorlesung Web-Entwicklung / PWA-Programmierung
Dozent: Prof. Dr. Pfisterer

1. Motivation & Projektidee
Mein primäres Ziel war es, im Rahmen dieser Prüfungsleistung eine Applikation zu entwickeln, die über die reine Vorlesung hinaus einen echten, privaten Mehrwert bietet. Da ich mich regelmäßig mit alten Klassenkameraden über Microsoft Teams oder WhatsApp austausche, entstand die Idee einer webbasierten "Arcade-Umgebung". Die Plattform dient uns als digitaler Treffpunkt, um während der Calls unkompliziert, geräteübergreifend und in Echtzeit miteinander spielen zu können.

2. Enthaltene Spiele
Die Plattform bietet eine Mischung aus Singleplayer-Highscore-Games und synchronen Echtzeit-Multiplayer-Spielen:

🐍 MBA Snake: Der Arcade-Klassiker mit globalem Leaderboard.

🍄 Super MBA Bros: Ein responsives Jump & Run.

🐎 Multiplayer Derby (Pferderennen): Ein synchrones Echtzeit-Rennen mit integriertem Wettsystem.

🚌 Busfahrer: Die digitale Multiplayer-Adaption des bekannten Trinkspiels.

🃏 Ausblick/Geplante Erweiterung: Das Kartenspiel "Fuck the Dealer" wird in einem zukünftigen Update ergänzt.

3. Technische Umsetzung als Progressive Web App (PWA)
Die Applikation wurde konsequent als PWA konzipiert. Dabei wurden folgende Kernkonzepte umgesetzt:

Web App Manifest (Installierbarkeit): Über die manifest.json ist die App auf mobilen Endgeräten und Desktop-Browsern als eigenständige App installierbar.

Service Worker (Caching & Background Tasks): Eine sw.js fängt Netzwerkanfragen ab und speichert Assets im Cache, um schnelle Ladezeiten zu garantieren.

Offline-Fähigkeit (Connectivity Independence): Die UI reagiert dynamisch auf den Netzwerkstatus (navigator.onLine). Ist das Gerät offline, wird fehlerhaftes Speichern (z.B. von Highscores) im JavaScript präventiv geblockt.

Responsives Design (Mobile First & Fluid): Durch CSS-Grid, Flexbox und Media-Queries passt sich die App an alle Bildschirmgrößen an (inklusive "Stealth-Modus" für UI-Buttons auf kleinen Bildschirmen).

App-like User Experience (Bediengefühl): Durch das dynamische Ein- und Ausblenden von Views (Single-Page-Application-Gefühl) und CSS-Regeln wie touch-action: none (verhindert ungewolltes Scrollen beim Tippen) fühlt sich die Website wie eine native App an.

4. Hardware-APIs: Geofencing für den JGA
Ein besonderes Feature nutzt die Web Geolocation API für einen praxisnahen Anwendungsfall: Meine Freunde planen aktuell einen Überraschungs-Junggesellenabschied für mich. Ich habe ein Geofencing-Skript integriert, das – sofern die Freunde die App während der Fahrt geöffnet haben – die GPS-Koordinaten abgleicht. Sobald sich ein Signal auf weniger als 50 km an Würzburg annähert, löst die App bei mir einen Alarm aus.

5. Security-Anekdote: Der "Snake" Highscore-Krieg
Ein sehr lehrreiches Erlebnis im Bereich Web-Security ergab sich durch einen Wettstreit mit einem Kollegen aus der Firmen-IT. Er versuchte beharrlich, das System zu manipulieren, um sich mit einem unrealistisch hohen Score auf Platz 1 bei "Snake" zu setzen.

Mein 1. Ansatz (State Management): Ich blockierte die Speicher-Funktion clientseitig, sobald das Spiel regulär beendet war (Flag gameIsRunning = false). Der Bypass: Der Kollege nutzte die Browser-DevTools, hielt den Code per Debugger exakt vor der Statusänderung an und injizierte seinen Fake-Score.

Mein 2. Ansatz (Code-Obfuskation): Als Reaktion darauf versuchte ich, den kompletten HTML- und JavaScript-Quellcode zu verschleiern. Ich nutzte ein Obfuskations-Tool (z.B. Javascript Obfuscator), das Variablen umbenennt, Kontrollflüsse verändert und den Code in unleserliche Strings verpackt. Die Hoffnung war, dass die Logik für den Datenbank-Eintrag nicht mehr offensichtlich zu verstehen ist. Der Bypass: Da der Browser den Code am Ende ausführen muss, kann Frontend-Code niemals zu 100% versteckt werden. Auch dies half letztlich nicht; der Kollege kannte den ursprünglichen Code bereits gut genug (oder hätte notfalls die Zeit zur Deobfuskation investiert) und trug erneut einen Fake-Highscore ein.

Mein finaler Fix (Backend Validation): Dies führte zur wichtigsten Erkenntnis des Projekts: "Never trust the client!". Als finale Lösung implementierte ich restriktive Security Rules direkt auf der Firebase-Datenbank. Die Datenbank akzeptiert seitdem serverseitig nur noch Werte unter einem definierten Schwellenwert (z.B. max. 150 Punkte).

Dies beendete den "Hack" auf technischer Ebene, war ein großer Spaß für alle Beteiligten und lieferte tolle Einblicke in die Grenzen von Client-Side-Security und die Notwendigkeit serverseitiger Validierung.

6. Entwicklungsumgebung & Testing
Aufgrund von Restriktionen auf meinem Geschäftsrechner war es mir leider nicht möglich, eine virtuelle Umgebung wie Android Studio (Emulator) zu installieren. Daher habe ich mich stark auf Microsoft Edge und die integrierten Chromium Developer Tools (Geräte-Simulation, Service-Worker-Debugging und native PWA-Installation im Edge-Browser) gestützt, was hervorragend funktioniert hat.

Fazit
Insgesamt war dies eine tolle, praxisnahe Vorlesung, die mir extrem viele neue Einsichten, Konzepte und Perspektiven in der modernen Web-Entwicklung ermöglicht hat
