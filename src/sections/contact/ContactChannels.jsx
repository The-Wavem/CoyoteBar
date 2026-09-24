import React from 'react';
import {
  WhatsApp,
  Instagram,
  PlaceOutlined,
  AccessTimeOutlined,
  PhoneInTalkOutlined,
  NearMeOutlined,
} from '@mui/icons-material';
import styles from './ContactChannels.module.css';

export default function ContactChannels() {
  const WHATSAPP_PHONE = '5541997683925';
  const DISPLAY_PHONE = '(41) 99768-3925';

  const quickMessages = [
    {
      label: 'Reservar Mesa pro Fim de Semana',
      text: 'Opa! Gostaria de reservar uma mesa para curtir o Coyote Bar.',
    },
    {
      label: 'Comemorar Meu Aniversário',
      text: 'Salve galera do Coyote! Quero comemorar meu aniversário aí com a tropa.',
    },
    {
      label: 'Almoço de Sábado (Feijoada)',
      text: 'Olá! Gostaria de saber sobre o buffet de Feijoada deste sábado.',
    },
  ];

  return (
    <section className={styles.contactSection} aria-labelledby="contact-heading">
      <div className={styles.container}>
        {/* Cabeçalho Sem Badges */}
        <div className={styles.header}>
          <h1 id="contact-heading" className={styles.mainTitle}>
            CHEGA JUNTO. <span className={styles.highlight}>O BALCÃO TÁ ABERTO.</span>
          </h1>
          <p className={styles.subtitle}>
            Quer juntar a tropa, comemorar aniversário ou saber se tem mesa livre? É só mandar uma
            mensagem ou aparecer.
          </p>
          <span className={styles.handwrittenHook}>
            "aniversariante ganha brinde da casa com a galera!"
          </span>
        </div>

        {/* Linha Principal de Contato (Número Gigante + Atalhos) */}
        <div className={styles.primaryContactBlock}>
          <div className={styles.phoneDisplayCol}>
            <span className={styles.channelLabel}>
              <PhoneInTalkOutlined fontSize="small" />
              WHATSAPP & LIGAÇÃO DIRETA
            </span>
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.hugePhone}
              aria-label={`Ligar ou mandar mensagem no WhatsApp para ${DISPLAY_PHONE}`}
            >
              {DISPLAY_PHONE}
            </a>
            <p className={styles.phoneSub}>
              Fale direto com o balcão da Dona Ana. Atendimento ágil e sem enrolação.
            </p>
          </div>

          <div className={styles.quickTriggersCol}>
            <span className={styles.triggersLabel}>O QUE VOCÊ PRECISA HOJE?</span>
            <div className={styles.triggersList}>
              {quickMessages.map((item, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(item.text)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.quickTriggerBtn}
                  aria-label={item.label}
                >
                  <WhatsApp fontSize="small" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Faixas Tipográficas de Informações Complementares */}
        <div className={styles.infoLinesGroup}>
          {/* Linha 1: Instagram */}
          <div className={styles.infoLine}>
            <div className={styles.infoIconBox}>
              <Instagram fontSize="small" />
            </div>
            <div className={styles.infoContent}>
              <span className={styles.infoTitle}>INSTAGRAM OFICIAL</span>
              <a
                href="https://instagram.com/coyotebarcwb"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoLink}
                aria-label="Abrir perfil oficial @coyotebarcwb no Instagram"
              >
                @coyotebarcwb
              </a>
              <span className={styles.infoNote}>
                "dá uma olhada nos stories pra ver quem tá no palco hoje"
              </span>
            </div>
          </div>

          {/* Linha 2: O Ponto / Endereço */}
          <div className={styles.infoLine}>
            <div className={styles.infoIconBox}>
              <PlaceOutlined fontSize="small" />
            </div>
            <div className={styles.infoContent}>
              <span className={styles.infoTitle}>O NOSSO PONTO NA CIC</span>
              <span className={styles.infoText}>
                R. Gastão de Abreu Pires, 210 • Cidade Industrial de Curitiba, PR
              </span>
              <a
                href="https://maps.google.com/?q=Coyote+Bar+Curitiba"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.gpsLink}
                aria-label="Abrir rota para o Coyote Bar no Google Maps"
              >
                <NearMeOutlined fontSize="inherit" />
                <span>Abrir Rota no Google Maps</span>
              </a>
            </div>
          </div>

          {/* Linha 3: Horários do Balcão */}
          <div className={styles.infoLine}>
            <div className={styles.infoIconBox}>
              <AccessTimeOutlined fontSize="small" />
            </div>
            <div className={styles.infoContent}>
              <span className={styles.infoTitle}>QUANDO O CHOPP TÁ TRINCANDO</span>
              <div className={styles.hoursSchedule}>
                <span>
                  Terça a Quinta: <strong>18h às 00h</strong>
                </span>
                <span>
                  Sexta & Sábado (Noite): <strong>18h às 02h</strong>
                </span>
                <span>
                  Sábado (Almoço): <strong>11h30 às 15h00</strong>
                </span>
                <em>Segunda e Domingo: Descanso da tropa</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
