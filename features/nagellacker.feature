#language: de

@nagellacker

  #noinspection NonAsciiCharacters
Funktionalität: Nagellacker

  Szenario: Nicht erstellen mit fehlgeschlagener Validierung
    Angenommen ich befinde mich im Nagellacker-Erstellmodus
    Wenn ich das Formular mit den Daten ausfülle
      | Farbe | Dauer der Maniküre | Beschreibung                                                                                                | Hersteller       | Preis      | hemafrei |
      | Rot   | 40                 | Dies ist eine sehr lange Beschreibungstext und sollte mehr als zehn Zeichen umfassen und damit zu lang sein | ["Essie", "OPI"] | 9.99       | true     |
      | Grün  | 40                 | Kurze Beschreibung                                                                                          | ["Essie", "OPI"] | 9.99       | true     |
      | Rot   | 40                 | Kurze Beschreibung                                                                                          | ["Essie", "OPI"] |            | true     |
      | Rot   | 40                 | Kurze Beschreibung                                                                                          | ["Essie", "OPI"] | kein Preis | true     |
      |       | 40                 | Kurze Beschreibung                                                                                          | ["Essie", "OPI"] | 9.99       | true     |
    Und ich den Speichern-CTA im Nagellacker-Erstellmodus betätige
    Dann sehe ich, dass das Speichern nicht erfolgreich ist
    Und ich sehe, dass das Eingabefeld als Fehler markiert ist
      | Eingabefeld  |
      | Beschreibung |
      | Farbe        |
      | Preis        |
      | Preis        |
      | Farbe