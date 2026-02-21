import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-content">
          <h1>Datenschutzerklärung</h1>
          <p className="last-updated">Zuletzt aktualisiert: 19. Februar 2026</p>

          <section className="legal-section">
            <h2>1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="contact-info">
              Vela Development Team<br />
              E-Mail: ihorr30@gmail.com
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
            <h3>2.1 Beim Besuch der Website</h3>
            <p>
              Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden 
              Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen 
              werden temporär in einem sogenannten Logfile gespeichert. Folgende Informationen werden dabei 
              ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
            </p>
            <ul>
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
            </ul>
            <p>
              Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:
            </p>
            <ul>
              <li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website</li>
              <li>Gewährleistung einer komfortablen Nutzung unserer Website</li>
              <li>Auswertung der Systemsicherheit und -stabilität</li>
              <li>Zu weiteren administrativen Zwecken</li>
            </ul>
            <p>
              Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. 
              Unser berechtigtes Interesse folgt aus oben aufgelisteten Zwecken zur Datenerhebung.
            </p>

            <h3>2.2 Kontaktformular</h3>
            <p>
              Bei Nutzung unseres Kontaktformulars werden folgende personenbezogene Daten erhoben:
            </p>
            <ul>
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Nachricht</li>
            </ul>
            <p>
              Diese Daten werden ausschließlich zum Zweck der Bearbeitung Ihrer Anfrage verwendet. 
              Die Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Cookies</h2>
            <p>
              Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die im Internetbrowser 
              bzw. vom Internetbrowser auf dem Computersystem des Nutzers gespeichert werden.
            </p>
            <p>
              Wir verwenden folgende Arten von Cookies:
            </p>
            <ul>
              <li>
                <strong>Technisch notwendige Cookies:</strong> Diese Cookies sind zwingend erforderlich, 
                um die Website ordnungsgemäß darzustellen und grundlegende Funktionen zu gewährleisten.
              </li>
              <li>
                <strong>Funktionale Cookies:</strong> Diese Cookies ermöglichen es, Ihre Präferenzen 
                zu speichern (z.B. Spracheinstellungen).
              </li>
            </ul>
            <p>
              Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten unter Verwendung 
              technisch notwendiger Cookies ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Weitergabe von Daten</h2>
            <p>
              Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden 
              aufgeführten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an 
              Dritte weiter, wenn:
            </p>
            <ul>
              <li>Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrückliche Einwilligung dazu erteilt haben</li>
              <li>Die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder 
                  Verteidigung von Rechtsansprüchen erforderlich ist</li>
              <li>Eine gesetzliche Verpflichtung zur Weitergabe besteht</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Betroffenenrechte</h2>
            <p>
              Sie haben das Recht:
            </p>
            <ul>
              <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung 
                  Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen und 
                  maschinenlesbaren Format zu erhalten</li>
              <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit zu widerrufen</li>
              <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Widerspruchsrecht</h2>
            <p>
              Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß 
              Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO 
              Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür 
              Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Cookie-Richtlinie</h2>
            <h3>7.1 Was sind Cookies?</h3>
            <p>
              Cookies sind kleine Textdateien, die auf Ihrem Computer oder mobilen Gerät gespeichert werden, 
              wenn Sie unsere Website besuchen. Sie ermöglichen es der Website, Ihre Präferenzen zu speichern 
              und Ihre Erfahrung zu verbessern.
            </p>

            <h3>7.2 Welche Cookies verwenden wir?</h3>
            <p>
              Wir verwenden folgende Arten von Cookies:
            </p>
            <ul>
              <li>
                <strong>Notwendige Cookies:</strong> Diese Cookies sind für den Betrieb der Website erforderlich 
                und können nicht deaktiviert werden. Sie speichern beispielsweise Ihre Cookie-Präferenzen.
              </li>
              <li>
                <strong>Funktionale Cookies:</strong> Diese Cookies ermöglichen es uns, Ihre Präferenzen zu 
                speichern und die Website-Funktionalität zu verbessern.
              </li>
              <li>
                <strong>Analytische Cookies:</strong> Diese Cookies helfen uns zu verstehen, wie Besucher 
                mit unserer Website interagieren, indem sie Informationen anonym sammeln und melden.
              </li>
            </ul>

            <h3>7.3 Cookie-Einstellungen</h3>
            <p>
              Sie können Ihre Cookie-Einstellungen jederzeit ändern, indem Sie:
            </p>
            <ul>
              <li>Die Cookie-Einstellungen in Ihrem Browser anpassen</li>
              <li>Gespeicherte Cookies löschen</li>
              <li>Ihre Zustimmung über unsere Website widerrufen (localStorage löschen)</li>
            </ul>
            <p>
              Bitte beachten Sie, dass das Deaktivieren von Cookies die Funktionalität unserer Website 
              beeinträchtigen kann.
            </p>

            <h3>7.4 Gespeicherte Informationen</h3>
            <p>
              Wir speichern lokal in Ihrem Browser:
            </p>
            <ul>
              <li><code>cookieConsent</code> - Ihre Cookie-Zustimmung (accepted/declined)</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>8. Datensicherheit</h2>
            <p>
              Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) 
              in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. 
              Ob eine einzelne Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an 
              der geschlossenen Darstellung des Schüssel- beziehungsweise Schloss-Symbols in der unteren Statusleiste 
              Ihres Browsers.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Februar 2026. Durch die 
              Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher 
              beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
            </p>
          </section>

          <div className="back-link">
            <Link to="/">&larr; Zurück zur Startseite</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
