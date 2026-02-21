import { Link } from 'react-router-dom';
import './TermsOfService.css';

function TermsOfService() {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-content">
          <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
          <p className="last-updated">Zuletzt aktualisiert: 19. Februar 2026</p>

          <section className="legal-section">
            <h2>1. Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Nutzung der Website 
              und der Software Vela (nachfolgend "Dienst" genannt), die vom Vela Development Team 
              (nachfolgend "Anbieter" genannt) bereitgestellt wird.
            </p>
            <p>
              Durch die Nutzung des Dienstes erklären Sie sich mit diesen AGB einverstanden. 
              Wenn Sie mit diesen Bedingungen nicht einverstanden sind, nutzen Sie den Dienst bitte nicht.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Leistungsbeschreibung</h2>
            <p>
              Vela ist eine Domain-Specific Language (DSL) für den Aufbau von Websites. 
              Der Dienst umfasst:
            </p>
            <ul>
              <li>Zugang zur Vela-Software und Dokumentation</li>
              <li>Compiler zur Umwandlung von Vela-Code in HTML, CSS und JavaScript</li>
              <li>Entwicklungswerkzeuge und Build-Tools</li>
              <li>Community-Support und Ressourcen</li>
            </ul>
            <p>
              Der Dienst wird als Open-Source-Software bereitgestellt. Der Anbieter behält sich das Recht vor, 
              den Funktionsumfang jederzeit zu erweitern, zu ändern oder einzuschränken.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Nutzungsrechte und Lizenzen</h2>
            <h3>3.1 Open-Source-Lizenz</h3>
            <p>
              Die Vela-Software wird unter der MIT-Lizenz bereitgestellt. Sie haben das Recht:
            </p>
            <ul>
              <li>Die Software zu verwenden, zu kopieren, zu modifizieren und zu verteilen</li>
              <li>Die Software für kommerzielle und nicht-kommerzielle Zwecke zu nutzen</li>
              <li>Die Software in eigene Projekte zu integrieren</li>
            </ul>

            <h3>3.2 Einschränkungen</h3>
            <p>
              Sie verpflichten sich:
            </p>
            <ul>
              <li>Die Software nicht für illegale Zwecke zu verwenden</li>
              <li>Die Urheberrechts- und Lizenzhinweise nicht zu entfernen</li>
              <li>Keine schädlichen oder bösartigen Inhalte zu erstellen</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Pflichten des Nutzers</h2>
            <p>
              Der Nutzer verpflichtet sich:
            </p>
            <ul>
              <li>Bei der Nutzung des Dienstes geltende Gesetze und Vorschriften einzuhalten</li>
              <li>Keine Inhalte zu erstellen oder zu verbreiten, die gegen geltendes Recht verstoßen</li>
              <li>Die technische Infrastruktur des Dienstes nicht zu beeinträchtigen oder zu überlasten</li>
              <li>Keine automatisierten Systeme zu verwenden, die den Dienst übermäßig beanspruchen</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Verfügbarkeit</h2>
            <p>
              Der Anbieter bemüht sich um eine möglichst hohe Verfügbarkeit des Dienstes. 
              Eine Verfügbarkeit von 100% kann jedoch nicht garantiert werden. Der Anbieter 
              behält sich das Recht vor, den Dienst für Wartungsarbeiten vorübergehend einzuschränken 
              oder zu unterbrechen.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Haftung</h2>
            <h3>6.1 Haftungsbeschränkung</h3>
            <p>
              Die Software wird "wie besehen" (AS IS) bereitgestellt, ohne Gewährleistung jeglicher Art. 
              Der Anbieter haftet nicht für:
            </p>
            <ul>
              <li>Direkte oder indirekte Schäden durch die Nutzung oder Nichtnutzung der Software</li>
              <li>Datenverlust oder Schäden an Hardware oder Software</li>
              <li>Entgangene Gewinne oder geschäftliche Verluste</li>
              <li>Fehler, Bugs oder Sicherheitslücken in der Software</li>
            </ul>

            <h3>6.2 Ausnahmen</h3>
            <p>
              Die Haftungsbeschränkung gilt nicht für:
            </p>
            <ul>
              <li>Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit</li>
              <li>Vorsatz und grobe Fahrlässigkeit</li>
              <li>Haftung nach dem Produkthaftungsgesetz</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>7. Urheberrecht und geistiges Eigentum</h2>
            <p>
              Alle Inhalte dieser Website, einschließlich Texte, Grafiken, Logos, Bilder und Software, 
              sind urheberrechtlich geschützt und Eigentum des Anbieters oder seiner Lizenzgeber.
            </p>
            <p>
              Der vom Nutzer mit Vela erstellte Code und die generierten Websites gehören dem Nutzer. 
              Der Anbieter erhebt keine Ansprüche auf vom Nutzer erstellte Inhalte.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Datenschutz</h2>
            <p>
              Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer{' '}
              <Link to="/datenschutz">Datenschutzerklärung</Link>. Durch die Nutzung des Dienstes 
              stimmen Sie der Datenverarbeitung gemäß der Datenschutzerklärung zu.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Änderungen der AGB</h2>
            <p>
              Der Anbieter behält sich das Recht vor, diese AGB jederzeit zu ändern. 
              Änderungen werden auf dieser Seite veröffentlicht. Die fortgesetzte Nutzung 
              des Dienstes nach Veröffentlichung von Änderungen gilt als Zustimmung zu den geänderten AGB.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Beendigung der Nutzung</h2>
            <p>
              Sie können die Nutzung des Dienstes jederzeit beenden, indem Sie die Software deinstallieren 
              und die Website nicht mehr besuchen.
            </p>
            <p>
              Der Anbieter behält sich das Recht vor, Nutzern den Zugang zum Dienst zu sperren, 
              wenn diese gegen diese AGB verstoßen.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Salvatorische Klausel</h2>
            <p>
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, 
              bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt. 
              Die unwirksame Bestimmung wird durch eine wirksame ersetzt, die dem 
              wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Anwendbares Recht und Gerichtsstand</h2>
            <p>
              Für diese AGB und alle Rechtsbeziehungen zwischen dem Anbieter und dem Nutzer 
              gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
            </p>
            <p>
              Sofern der Nutzer Kaufmann, juristische Person des öffentlichen Rechts oder 
              öffentlich-rechtliches Sondervermögen ist, ist ausschließlicher Gerichtsstand 
              für alle Streitigkeiten der Sitz des Anbieters.
            </p>
          </section>

          <section className="legal-section">
            <h2>13. Kontakt</h2>
            <p>
              Bei Fragen zu diesen AGB wenden Sie sich bitte an:
            </p>
            <p className="contact-info">
              Vela Development Team<br />
              E-Mail: ihorr30@gmail.com
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

export default TermsOfService;
