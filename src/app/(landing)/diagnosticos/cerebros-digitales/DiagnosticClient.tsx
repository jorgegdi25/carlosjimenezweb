"use client";

import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  Check,
  Lightbulb,
  LockKeyhole,
  RefreshCcw,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Target,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState, type CSSProperties } from "react";

import {
  categories,
  diagnostics,
  type Category,
  type DiagnosticType,
} from "./diagnostic-data";
import styles from "./page.module.css";

type Screen = "home" | "quiz" | "results";
type Answers = Record<string, number>;
type Scores = Record<Category, number>;

const answerOptions = [
  { value: 1, label: "Nada" },
  { value: 2, label: "Poco" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Mucho" },
  { value: 5, label: "Totalmente" },
];

const emptyScores = (): Scores => ({ A: 0, B: 0, C: 0, D: 0 });

export default function DiagnosticClient() {
  const [screen, setScreen] = useState<Screen>("home");
  const [diagnosticType, setDiagnosticType] =
    useState<DiagnosticType>("pensamiento");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const diagnostic = diagnostics[diagnosticType];
  const currentQuestion = diagnostic.questions[questionIndex];
  const currentAnswer = currentQuestion
    ? answers[currentQuestion.id]
    : undefined;

  const scores = useMemo(() => {
    const nextScores = emptyScores();

    diagnostic.questions.forEach((question) => {
      nextScores[question.category] += answers[question.id] ?? 0;
    });

    return nextScores;
  }, [answers, diagnostic]);

  const ranking = useMemo(
    () =>
      [...categories].sort((left, right) => {
        const difference = scores[right] - scores[left];
        return difference || categories.indexOf(left) - categories.indexOf(right);
      }),
    [scores],
  );

  const dominantCategory = ranking[0];
  const secondaryCategory = ranking[1];
  const dominant = diagnostic.interpretations[dominantCategory];
  const secondary = diagnostic.interpretations[secondaryCategory];
  const hasTie = scores[dominantCategory] === scores[secondaryCategory];
  const answeredCount = Object.keys(answers).length;
  const progress = ((questionIndex + 1) / diagnostic.questions.length) * 100;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [screen, questionIndex]);

  const startDiagnostic = (type: DiagnosticType) => {
    setDiagnosticType(type);
    setAnswers({});
    setQuestionIndex(0);
    setScreen("quiz");
  };

  const reset = () => {
    setAnswers({});
    setQuestionIndex(0);
    setScreen("home");
  };

  const chooseAnswer = (value: number) => {
    setAnswers((current) => ({
      ...current,
      [currentQuestion.id]: value,
    }));
  };

  const goBack = () => {
    if (questionIndex === 0) {
      reset();
      return;
    }

    setQuestionIndex((current) => current - 1);
  };

  const continueQuiz = () => {
    if (!currentAnswer) return;

    if (questionIndex === diagnostic.questions.length - 1) {
      setScreen("results");
      return;
    }

    setQuestionIndex((current) => current + 1);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/cursos/cerebros-digitales">
          <Brain aria-hidden="true" size={30} strokeWidth={1.8} />
          <span>
            <strong>Cerebros digitales</strong>
            <small>Diagnóstico interactivo</small>
          </span>
        </Link>
        <Link className={styles.bookLink} href="/cursos/cerebros-digitales">
          <BookOpen aria-hidden="true" size={18} />
          Ver biblioteca
        </Link>
      </header>

      <main>
        {screen === "home" && (
          <>
            <section className={styles.intro}>
              <div className={styles.shell}>
                <p className={styles.eyebrow}>Exploración neurocognitiva</p>
                <h1>
                  Descubre los patrones que orientan
                  <span> tu forma de pensar y elegir</span>
                </h1>
                <p className={styles.introLead}>
                  Dos recorridos breves inspirados en el enfoque del Cerebro
                  Total y en la obra neuropedagógica de Carlos Alberto Jiménez.
                </p>
                <div className={styles.introFacts}>
                  <p><Target aria-hidden="true" /> 12 afirmaciones por diagnóstico</p>
                  <p><LockKeyhole aria-hidden="true" /> Tus respuestas no se almacenan</p>
                  <p><BarChart3 aria-hidden="true" /> Resultado inmediato</p>
                </div>
              </div>
            </section>

            <section className={styles.selector}>
              <div className={styles.shell}>
                <div className={styles.sectionHeading}>
                  <p>Elige un recorrido</p>
                  <h2>¿Qué quieres explorar hoy?</h2>
                </div>

                <div className={styles.diagnosticGrid}>
                  <article className={styles.diagnosticOption}>
                    <span className={styles.optionIcon}>
                      <Brain aria-hidden="true" />
                    </span>
                    <p className={styles.optionNumber}>Diagnóstico 01</p>
                    <h3>Estilos de pensamiento</h3>
                    <p>
                      Reconoce cómo aprendes, organizas información y aportas
                      naturalmente a un equipo.
                    </p>
                    <button
                      type="button"
                      onClick={() => startDiagnostic("pensamiento")}
                    >
                      Comenzar
                      <ArrowRight aria-hidden="true" size={19} />
                    </button>
                  </article>

                  <article className={styles.diagnosticOption}>
                    <span className={`${styles.optionIcon} ${styles.optionIconGreen}`}>
                      <ShoppingCart aria-hidden="true" />
                    </span>
                    <p className={styles.optionNumber}>Diagnóstico 02</p>
                    <h3>Estilos de consumo</h3>
                    <p>
                      Identifica qué factores racionales, emocionales y sociales
                      intervienen cuando eliges una marca.
                    </p>
                    <button
                      type="button"
                      onClick={() => startDiagnostic("consumo")}
                    >
                      Comenzar
                      <ArrowRight aria-hidden="true" size={19} />
                    </button>
                  </article>
                </div>

                <aside className={styles.orientation}>
                  <ShieldCheck aria-hidden="true" />
                  <div>
                    <h2>Una herramienta educativa y orientativa</h2>
                    <p>
                      No mide inteligencia, no establece diagnósticos clínicos y
                      no clasifica tu personalidad de manera definitiva. Todos
                      usamos los cuatro estilos y podemos desarrollarlos.
                    </p>
                  </div>
                </aside>
              </div>
            </section>
          </>
        )}

        {screen === "quiz" && (
          <section className={styles.quiz}>
            <div className={styles.quizShell}>
              <div className={styles.quizTopline}>
                <button type="button" onClick={goBack} className={styles.backButton}>
                  <ArrowLeft aria-hidden="true" size={19} />
                  {questionIndex === 0 ? "Cambiar diagnóstico" : "Anterior"}
                </button>
                <span>
                  {answeredCount} de {diagnostic.questions.length} respondidas
                </span>
              </div>

              <div
                className={styles.progressTrack}
                role="progressbar"
                aria-label="Progreso del diagnóstico"
                aria-valuemin={0}
                aria-valuemax={diagnostic.questions.length}
                aria-valuenow={questionIndex + 1}
              >
                <span style={{ width: `${progress}%` }}></span>
              </div>

              <div className={styles.quizHeading}>
                <p>{diagnostic.shortTitle}</p>
                <h1>
                  Pregunta {questionIndex + 1}
                  <span> de {diagnostic.questions.length}</span>
                </h1>
              </div>

              <div className={styles.questionPanel} aria-live="polite">
                <h2>{currentQuestion.text}</h2>
                <p>¿Qué tanto te identificas con esta afirmación?</p>

                <div className={styles.scale} role="radiogroup" aria-label="Selecciona una respuesta">
                  {answerOptions.map((option) => (
                    <button
                      className={currentAnswer === option.value ? styles.selectedAnswer : undefined}
                      key={option.value}
                      type="button"
                      role="radio"
                      aria-checked={currentAnswer === option.value}
                      onClick={() => chooseAnswer(option.value)}
                    >
                      <span>{option.value}</span>
                      <small>{option.label}</small>
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.quizActions}>
                <p>Selecciona la opción que mejor te describa hoy.</p>
                <button
                  type="button"
                  className={styles.nextButton}
                  disabled={!currentAnswer}
                  onClick={continueQuiz}
                >
                  {questionIndex === diagnostic.questions.length - 1
                    ? "Ver mi resultado"
                    : "Siguiente"}
                  <ArrowRight aria-hidden="true" size={20} />
                </button>
              </div>
            </div>
          </section>
        )}

        {screen === "results" && (
          <section className={styles.results}>
            <div className={styles.resultsShell}>
              <div className={styles.resultsHeading}>
                <p>Resultado orientativo</p>
                <h1>{diagnostic.title}</h1>
                <span>
                  Tus respuestas muestran una preferencia actual. Esta puede
                  cambiar según el contexto y la experiencia.
                </span>
              </div>

              <div className={styles.resultsGrid}>
                <section
                  className={styles.mainResult}
                  style={{ "--profile-color": dominant.color } as CSSProperties}
                >
                  <div className={styles.resultLabel}>
                    <Sparkles aria-hidden="true" size={18} />
                    {hasTie ? "Preferencias compartidas" : "Preferencia principal"}
                  </div>
                  <h2>{dominant.title}</h2>
                  <p>{dominant.profile}</p>
                  {hasTie && (
                    <div className={styles.tieNotice}>
                      <strong>Resultado equilibrado:</strong> tu puntaje también
                      destaca el perfil {secondary.shortTitle.toLowerCase()}.
                    </div>
                  )}
                </section>

                <aside className={styles.distribution}>
                  <h2>Tu distribución</h2>
                  <div>
                    {categories.map((category) => {
                      const interpretation = diagnostic.interpretations[category];
                      const percentage = Math.round((scores[category] / 15) * 100);

                      return (
                        <div className={styles.scoreRow} key={category}>
                          <p>
                            <span
                              className={styles.categoryKey}
                              style={{ backgroundColor: interpretation.color }}
                            >
                              {category}
                            </span>
                            {interpretation.shortTitle}
                            <strong>{scores[category]}/15</strong>
                          </p>
                          <div className={styles.scoreTrack}>
                            <span
                              style={{
                                width: `${percentage}%`,
                                backgroundColor: interpretation.color,
                              }}
                            ></span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </aside>
              </div>

              <div className={styles.insightGrid}>
                <article>
                  <span className={styles.insightIcon}>
                    <Check aria-hidden="true" />
                  </span>
                  <div>
                    <p>Fortaleza que puedes aprovechar</p>
                    <h2>¿Para qué te sirve?</h2>
                    <p>{dominant.strength}</p>
                  </div>
                </article>

                <article>
                  <span className={`${styles.insightIcon} ${styles.challengeIcon}`}>
                    <Lightbulb aria-hidden="true" />
                  </span>
                  <div>
                    <p>Oportunidad de desarrollo</p>
                    <h2>Tu reto neuropedagógico</h2>
                    <p>{dominant.challenge}</p>
                  </div>
                </article>
              </div>

              <section className={styles.secondaryResult}>
                <div>
                  <p>Tu segunda preferencia</p>
                  <h2>{secondary.title}</h2>
                </div>
                <p>
                  Este perfil también participa de manera importante en tus
                  decisiones. La combinación entre ambos ofrece una lectura más
                  útil que una etiqueta única.
                </p>
              </section>

              <div className={styles.resultActions}>
                <button
                  type="button"
                  onClick={() => startDiagnostic(diagnosticType)}
                >
                  <RefreshCcw aria-hidden="true" size={18} />
                  Repetir diagnóstico
                </button>
                <button
                  type="button"
                  onClick={() =>
                    startDiagnostic(
                      diagnosticType === "pensamiento" ? "consumo" : "pensamiento",
                    )
                  }
                >
                  Hacer el otro diagnóstico
                  <ArrowRight aria-hidden="true" size={18} />
                </button>
                <Link href="/cursos/cerebros-digitales">
                  <BookOpen aria-hidden="true" size={18} />
                  Conocer la biblioteca
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className={styles.footer}>
        <p>
          Inspirado en la teoría del Cerebro Total y en el enfoque
          neuropedagógico de Carlos Alberto Jiménez.
        </p>
        <Link href="/cursos/cerebros-digitales">Cerebros Digitales</Link>
      </footer>
    </div>
  );
}
