import { motion } from "framer-motion";

const iconClass = "size-11 shrink-0 text-primary";

/** Agujas minimalistas */
function IconAcupuncture() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <line x1="8" y1="6" x2="8" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="4" x2="12" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="6" x2="16" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="5" r="1.25" fill="currentColor" />
      <circle cx="12" cy="3" r="1.25" fill="currentColor" />
      <circle cx="16" cy="5" r="1.25" fill="currentColor" />
    </svg>
  );
}

/** Habano inclinado hacia abajo + humo que asciende desde la punta inferior */
function IconMoxa() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <line
        x1="6.5"
        y1="7"
        x2="17.5"
        y2="18"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M8 8.5c.32-.18.62-.32.92-.42"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.42"
      />
      <path
        d="M17.35 17.65C15.4 16.4 14.2 14.2 12.8 12.5C11.4 10.8 10.6 8.8 9.2 7.2C7.8 5.6 6.6 4 5.5 2.2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.62"
      />
      <path
        d="M17.35 17.65C17.9 16 16.5 14.4 17.5 12.6C18.2 10.8 16.4 9.2 17.1 7.4C17.6 5.6 16.5 3.8 16.3 1.8"
        stroke="currentColor"
        strokeWidth="1.28"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.78"
      />
      <path
        d="M17.35 17.65C19.3 16.3 20.6 14.1 21.9 12.3C23.1 10.6 23.4 8.5 23.2 6.6C23 5 22.4 3.4 22 1.9"
        stroke="currentColor"
        strokeWidth="1.18"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.58"
      />
    </svg>
  );
}

/** Copa de ventosa (cupping): cuello estrecho, paredes curvas, boca ancha hacia la piel */
function IconCupping() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <line x1="12" y1="3.5" x2="12" y2="7.85" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M12 7.85C8.6 8 6.45 11.8 6.45 16.4A5.55 1.4 0 0 1 17.55 16.4C17.55 11.8 15.4 8 12 7.85z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/** Diálogo / escucha: círculos que se solapan */
function IconListening() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="9.5" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14.5" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/** Árbol lineal, dos copas y tronco (mismo lenguaje que el resto de iconos) */
function IconTreeMinimal() {
  return (
    <svg
      className="size-6 shrink-0 text-primary"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 2.5 6.5 12.5 17.5 12.5z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M12 7.5 7.5 16.5 16.5 16.5z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <line x1="12" y1="16.5" x2="12" y2="22" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const services = [
  {
    name: "Acupuntura",
    desc: "Estímulo de puntos específicos para restablecer el flujo energético y aliviar síntomas desde la raíz.",
    Icon: IconAcupuncture,
  },
  {
    name: "Moxibustión",
    desc: "Calor terapéutico que nutre, calienta y moviliza la energía en zonas de bloqueo.",
    Icon: IconMoxa,
  },
  {
    name: "Ventosas",
    desc: "Liberación de tensiones profundas acumuladas en el cuerpo.",
    Icon: IconCupping,
  },
  {
    name: "Espacio de escucha terapéutica",
    desc: "Un lugar seguro para explorar lo que sentís, sin juicio, con presencia.",
    Icon: IconListening,
  },
] as const;

const ServicesSection = () => (
  <section className="py-24 md:py-32 bg-card">
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-6"
        >
          Qué ofrezco
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-16 h-px bg-primary mx-auto mb-8"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-muted-foreground"
        >
          No es solo una técnica. Es un abordaje integral.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-background rounded-2xl p-8 border border-border"
          >
            <div className="flex gap-4 items-start">
              <div className="shrink-0 pt-0.5">
                <s.Icon />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading text-xl font-semibold text-foreground leading-snug mb-3">{s.name}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-12 flex flex-wrap items-center justify-center gap-2.5 text-center"
      >
        <IconTreeMinimal />
        <p className="font-body text-foreground text-base md:text-lg">
          <span className="font-heading font-semibold text-primary">¿En dónde? </span>
          Unquillo, Córdoba
        </p>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
