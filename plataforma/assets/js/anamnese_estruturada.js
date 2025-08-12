document.addEventListener('DOMContentLoaded', function () {
    const questions = [
        /* Características da dor */
        {
            section: "Características da Dor",
            q: "Qual é a localização da dor?",
            help: "Indique se a dor é unilateral, bilateral, retro‑orbitária, temporal, occipital, etc.",
        },
        {
            section: "Características da Dor",
            q: "Qual é o caráter da dor?",
            help: "Descreva se a dor é pulsátil, em pressão, em pontadas ou em choque elétrico.",
        },
        {
            section: "Características da Dor",
            q: "Qual é a intensidade da dor?",
            options: ["Leve", "Moderada", "Severa"],
        },
        {
            section: "Características da Dor",
            q: "Quanto tempo dura cada crise de dor?",
            help: "Informe a duração de cada episódio (segundos, minutos, horas ou dias).",
        },
        {
            section: "Características da Dor",
            q: "Com que frequência a dor ocorre?",
            help: "Informe quantos dias por mês ou vezes por dia.",
        },
        {
            section: "Características da Dor",
            q: "A dor se mantém contínua desde o início?",
            options: ["Sim", "Não"],
        },
        {
            section: "Características da Dor",
            q: "Houve alguma mudança no padrão habitual da dor?",
            options: ["Sim", "Não"],
        },
        {
            section: "Características da Dor",
            q: "A dor começou abruptamente (em segundos) ou gradualmente?",
            options: ["Abruptamente", "Gradualmente"],
        },
        {
            section: "Características da Dor",
            q: "A dor o acorda durante o sono?",
            options: ["Sim", "Não"],
        },
        {
            section: "Características da Dor",
            q: "A dor piora com esforço físico leve?",
            help: "Atividades leves como caminhar ou subir escada agravam a dor?",
            options: ["Sim", "Não"],
        },

        /* Fatores desencadeantes */
        {
            section: "Fatores Desencadeantes",
            q: "A dor surge após atividade física vigorosa?",
            options: ["Sim", "Não"],
        },
        {
            section: "Fatores Desencadeantes",
            q: "A dor é precipitada por tosse, espirro ou evacuação?",
            help: "Engloba a manobra de Valsalva, como fazer força ao evacuar.",
            options: ["Sim", "Não"],
        },
        {
            section: "Fatores Desencadeantes",
            q: "A dor é influenciada pela posição do corpo (em pé ou deitado)?",
            options: ["Sim", "Não"],
        },
        {
            section: "Fatores Desencadeantes",
            q: "A dor de cabeça é provocada por objetos que apertam ou tracionam a cabeça?",
            help: "Por exemplo: óculos apertados, chapéus ou faixas apertadas.",
            options: ["Sim", "Não"],
        },

        /* Sintomas associados */
        {
            section: "Sintomas Associados",
            q: "Há náuseas ou vômitos durante a dor?",
            options: ["Sim", "Não"],
        },
        {
            section: "Sintomas Associados",
            q: "Há fotofobia ou fonofobia?",
            help: "Fotofobia é sensibilidade à luz; fonofobia é sensibilidade a sons.",
            options: ["Sim", "Não"],
        },
        {
            section: "Sintomas Associados",
            q: "Há sintomas de aura?",
            help: "Ex.: distúrbios visuais em zigue‑zague, escotomas ou formigamentos que duram até 60 minutos.",
            options: ["Sim", "Não"],
        },
        {
            section: "Sintomas Associados",
            q: "Há déficits neurológicos transitórios?",
            help: "Fraqueza em um membro, dificuldade na fala, alterações sensoriais temporárias.",
            options: ["Sim", "Não"],
        },
        {
            section: "Sintomas Associados",
            q: "Há sinais autonômicos durante a dor?",
            help: "Lacrimejamento, congestão nasal, coriza, olho vermelho, pálpebra caída ou sudorese facial.",
            options: ["Sim", "Não"],
        },
        {
            section: "Sintomas Associados",
            q: "Você sente inquietação ou incapacidade de ficar parado durante a crise?",
            options: ["Sim", "Não"],
        },

        /* Histórico da cefaleia */
        {
            section: "Histórico da Cefaleia",
            q: "Você já teve cefaleias semelhantes antes?",
            options: ["Sim", "Não"],
        },
        {
            section: "Histórico da Cefaleia",
            q: "Quando a cefaleia começou pela primeira vez na sua vida?",
        },
        {
            section: "Histórico da Cefaleia",
            q: "Esta dor de cabeça é diferente das anteriores?",
            options: ["Sim", "Não"],
        },
        {
            section: "Histórico da Cefaleia",
            q: "É a primeira dor de cabeça da sua vida?",
            options: ["Sim", "Não"],
        },
        {
            section: "Histórico da Cefaleia",
            q: "Você já procurou atendimento médico por cefaleia?",
            options: ["Sim", "Não"],
        },
        {
            section: "Histórico da Cefaleia",
            q: "Já realizou tratamento para cefaleia? Qual foi o efeito?",
            multiline: true,
        },

        /* Uso de medicamentos e substâncias */
        {
            section: "Uso de Medicamentos e Substâncias",
            q: "Quantos dias por mês você usa analgésicos ou medicações para dor de cabeça?",
        },
        {
            section: "Uso de Medicamentos e Substâncias",
            q: "Você está usando ou já usou triptanos, ergotamina ou opioides?",
            options: ["Sim", "Não"],
        },
        {
            section: "Uso de Medicamentos e Substâncias",
            q: "Você experimentou indometacina e a dor desapareceu?",
            options: ["Sim", "Não"],
        },
        {
            section: "Uso de Medicamentos e Substâncias",
            q: "Você usa anticoagulantes?",
            options: ["Sim", "Não"],
        },
        {
            section: "Uso de Medicamentos e Substâncias",
            q: "Você usa antiagregantes (ex.: AAS, clopidogrel)?",
            options: ["Sim", "Não"],
        },
        {
            section: "Uso de Medicamentos e Substâncias",
            q: "Você usa anticoncepcionais hormonais ou terapia de reposição hormonal?",
            options: ["Sim", "Não"],
        },
        {
            section: "Uso de Medicamentos e Substâncias",
            q: "Você usa nitratos?",
            options: ["Sim", "Não"],
        },
        {
            section: "Uso de Medicamentos e Substâncias",
            q: "Você usa tadalafila ou sildenafila?",
            options: ["Sim", "Não"],
        },
        {
            section: "Uso de Medicamentos e Substâncias",
            q: "Você consome cafeína?",
            options: ["Sim", "Não"],
        },
        {
            section: "Uso de Medicamentos e Substâncias",
            q: "Com que frequência você consome café?",
        },
        {
            section: "Uso de Medicamentos e Substâncias",
            q: "Você consome álcool?",
            options: ["Sim", "Não"],
        },
        {
            section: "Uso de Medicamentos e Substâncias",
            q: "A dor surge logo após consumir álcool (imediata)?",
            options: ["Sim", "Não"],
        },
        {
            section: "Uso de Medicamentos e Substâncias",
            q: "A dor surge 5–12 horas após consumo de álcool (tardia)?",
            options: ["Sim", "Não"],
        },
        {
            section: "Uso de Medicamentos e Substâncias",
            q: "Você usa cocaína?",
            options: ["Sim", "Não"],
        },
        {
            section: "Uso de Medicamentos e Substâncias",
            q: "Você consome cannabis?",
            options: ["Sim", "Não"],
        },
        {
            section: "Uso de Medicamentos e Substâncias",
            q: "As crises surgem após exposição a dióxido de carbono, monóxido de carbono ou outros gases específicos?",
            help: "Inclui exposição a CO₂ em câmaras de respiração, monóxido de carbono e outras substâncias voláteis.",
            options: ["Sim", "Não"],
        },
        {
            section: "Uso de Medicamentos e Substâncias",
            q: "A dor surgiu após interrupção de cafeína, triptano ou anticoncepcional oral?",
            options: ["Sim", "Não"],
        },

        /* Comorbidades e antecedentes */
        {
            section: "Comorbidades e Antecedentes",
            q: "Você tem hipertensão arterial?",
            options: ["Sim", "Não"],
        },
        {
            section: "Comorbidades e Antecedentes",
            q: "Você tem diabetes mellitus?",
            options: ["Sim", "Não"],
        },
        {
            section: "Comorbidades e Antecedentes",
            q: "Você tem dislipidemia?",
            options: ["Sim", "Não"],
        },
        {
            section: "Comorbidades e Antecedentes",
            q: "Você tem doença cardiovascular?",
            options: ["Sim", "Não"],
        },
        {
            section: "Comorbidades e Antecedentes",
            q: "Você tem insuficiência renal crônica?",
            options: ["Sim", "Não"],
        },
        {
            section: "Comorbidades e Antecedentes",
            q: "Você tem doença hepática (insuficiência hepática)?",
            options: ["Sim", "Não"],
        },
        {
            section: "Comorbidades e Antecedentes",
            q: "Você tem hipotireoidismo?",
            options: ["Sim", "Não"],
        },
        {
            section: "Comorbidades e Antecedentes",
            q: "Você tem apneia do sono ou hipoxia de altitude?",
            options: ["Sim", "Não"],
        },
        {
            section: "Comorbidades e Antecedentes",
            q: "Você tem doença neurológica conhecida (epilepsia, esclerose múltipla, etc.)?",
            options: ["Sim", "Não"],
        },
        {
            section: "Comorbidades e Antecedentes",
            q: "Você tem diagnóstico de aneurisma cerebral ou malformação vascular?",
            options: ["Sim", "Não"],
        },
        {
            section: "Comorbidades e Antecedentes",
            q: "Você já teve trauma craniano recente?",
            options: ["Sim", "Não"],
        },
        {
            section: "Comorbidades e Antecedentes",
            q: "Você se submeteu a cirurgia craniana ou raquidiana recentemente?",
            options: ["Sim", "Não"],
        },
        {
            section: "Comorbidades e Antecedentes",
            q: "Você tem histórico de AVC?",
            options: ["Sim", "Não"],
        },
        {
            section: "Comorbidades e Antecedentes",
            q: "Você tem histórico de AIT (ataque isquêmico transitório)?",
            options: ["Sim", "Não"],
        },
        {
            section: "Comorbidades e Antecedentes",
            q: "Você tem histórico de trombose venosa cerebral?",
            options: ["Sim", "Não"],
        },
        {
            section: "Comorbidades e Antecedentes",
            q: "Você tem histórico de tumor cerebral?",
            options: ["Sim", "Não"],
        },
        {
            section: "Comorbidades e Antecedentes",
            q: "Você teve infecção do sistema nervoso central (abscesso cerebral, encefalite viral ou tuberculose cerebral)?",
            options: ["Sim", "Não"],
        },
        {
            section: "Comorbidades e Antecedentes",
            q: "Você teve meningite?",
            options: ["Sim", "Não"],
        },
        {
            section: "Comorbidades e Antecedentes",
            q: "Você tem HIV?",
            options: ["Sim", "Não"],
        },
        {
            section: "Comorbidades e Antecedentes",
            q: "Você teve neurotuberculose?",
            options: ["Sim", "Não"],
        },
        {
            section: "Comorbidades e Antecedentes",
            q: "Você tem neoplasia ou lesão intracraniana conhecida (tumor, malformação vascular ou hidrocefalia)?",
            options: ["Sim", "Não"],
        },
        {
            section: "Comorbidades e Antecedentes",
            q: "Você tem dor de cabeça relacionada a seios paranasais (sinusite), olhos (glaucoma) ou disfunção temporomandibular?",
            options: ["Sim", "Não"],
        },

        /* História familiar */
        {
            section: "História Familiar",
            q: "Há casos de enxaqueca na sua família?",
            options: ["Sim", "Não"],
        },
        {
            section: "História Familiar",
            q: "Há casos de cefaleia em salvas na sua família?",
            options: ["Sim", "Não"],
        },
        {
            section: "História Familiar",
            q: "Há casos de aneurisma cerebral na sua família?",
            options: ["Sim", "Não"],
        },
        {
            section: "História Familiar",
            q: "Há casos de epilepsia na sua família?",
            options: ["Sim", "Não"],
        },

        /* Exames complementares */
        {
            section: "Exames Complementares",
            q: "Você já realizou exames de imagem cerebral (TC, RM, angio)? Se sim, descreva os resultados.",
            multiline: true,
        },
        {
            section: "Exames Complementares",
            q: "Você já realizou punção lombar?",
            options: ["Sim", "Não"],
        },
        {
            section: "Exames Complementares",
            q: "Você já realizou eletroencefalograma (EEG)?",
            options: ["Sim", "Não"],
        },
        {
            section: "Exames Complementares",
            q: "Você já realizou exames oftalmológicos?",
            options: ["Sim", "Não"],
        },

        /* Outras cefaleias primárias */
        {
            section: "Outras Cefaleias Primárias",
            q: "Você sente dor súbita e curta, tipo pontada (como um choque elétrico)?",
            options: ["Sim", "Não"],
        },
        {
            section: "Outras Cefaleias Primárias",
            q: "A dor de cabeça começa apenas com estímulo frio (comer ou inalar algo gelado)?",
            options: ["Sim", "Não"],
        },
        {
            section: "Outras Cefaleias Primárias",
            q: "A dor ocorre somente associada à atividade sexual, aumentando com a excitação ou no orgasmo?",
            options: ["Sim", "Não"],
        },
        {
            section: "Outras Cefaleias Primárias",
            q: "Você tem cefaleias que surgem durante o sono e te acordam (cefaleia hípnica)?",
            options: ["Sim", "Não"],
        },
        {
            section: "Outras Cefaleias Primárias",
            q: "Você tem dor de cabeça contínua desde o início e que persiste por meses (cefaleia diária persistente nova)?",
            options: ["Sim", "Não"],
        },

        /* Cefaleias secundárias por trauma, pressão e lesões */
        {
            section: "Cefaleias Secundárias",
            q: "A cefaleia começou logo após um trauma craniano ou cirurgia craniana/raquidiana?",
            options: ["Sim", "Não"],
        },
        {
            section: "Cefaleias Secundárias",
            q: "A dor piora ao deitar e melhora ao ficar em pé (hipotensão intracraniana ou pressão baixa do LCR)?",
            options: ["Sim", "Não"],
        },
        {
            section: "Cefaleias Secundárias",
            q: "A dor é pior ao acordar ou ao se deitar, e vem acompanhada de vômitos ou intolerância ao esforço (pressão intracraniana elevada)?",
            options: ["Sim", "Não"],
        },
        {
            section: "Cefaleias Secundárias",
            q: "Você possui diagnóstico de lesão intracraniana, como tumor?",
            options: ["Sim", "Não"],
        },
        {
            section: "Cefaleias Secundárias",
            q: "Você possui diagnóstico de lesão intracraniana, como malformação vascular?",
            options: ["Sim", "Não"],
        },
        {
            section: "Cefaleias Secundárias",
            q: "Você possui diagnóstico de lesão intracraniana, como hidrocefalia?",
            options: ["Sim", "Não"],
        },
        {
            section: "Cefaleias Secundárias",
            q: "Você possui diagnóstico de lesão intracraniana, como angiomatose venosa/Stuge-Weber?",
            options: ["Sim", "Não"],
        },

        /* Cefaleias atribuídas a distúrbios metabólicos e infecções */
        {
            section: "Distúrbios Metabólicos e Infecções",
            q: "Você teve infecção cerebral ou sistêmica (abscesso, encefalite viral ou tuberculose)?",
            options: ["Sim", "Não"],
        },
        {
            section: "Cefaleias Especiais",
            q: "Você tem episódios recorrentes de dor facial intensa, em choque ou pontada, que duram segundos a poucos minutos e podem ser desencadeados por tocar o rosto, mastigar, falar ou escovar os dentes?",
            options: ["Sim", "Não"],
            help: "A neuralgia do trigêmeo causa episódios de dor súbita, em choque, em um lado da face, com duração de segundos a minutos. Essas crises podem ser desencadeadas por estímulos leves como tocar o rosto, vento, mastigar, falar ou escovar os dentes."
        },
        {
            section: "Cefaleias Especiais",
            q: "A dor de cabeça começa no pescoço ou região occipital e piora com movimentos do pescoço ou ao pressionar essa área?",
            options: ["Sim", "Não"],
            help: "A cefaleia cervicogênica é uma dor hemicraniana ou occipital que se origina na coluna cervical ou nos tecidos moles do pescoço. A dor geralmente é provocada ou agravada por movimentos do pescoço ou por pressão nas regiões cervical ou occipital e pode limitar a amplitude de movimento."
        },
        {
            section: "Cefaleias Especiais",
            q: "Você já teve uma dor de cabeça de início abrupto, extremamente intensa, que atingiu sua máxima intensidade em menos de um minuto e durou pelo menos cinco minutos?",
            options: ["Sim", "Não"],
            help: "A chamada “cefaleia em trovoada” é descrita como uma dor de cabeça súbita de início explosivo, que atinge intensidade máxima em 60 segundos e persiste por pelo menos cinco minutos. Essa forma de dor intensa é considerada uma emergência e exige investigação imediata."
        },
        {
            section: "Cefaleias Especiais",
            q: "Suas dores de cabeça costumam ser bilaterais, com sensação de pressão ou aperto (não pulsátil), de intensidade leve a moderada e não se agravam com atividades físicas de rotina, além de não causarem náuseas ou vômitos?",
            options: ["Sim", "Não"],
            help: "A cefaleia tipo tensional é a forma mais comum de dor de cabeça. Os episódios podem durar de 30 minutos a sete dias; devem ter pelo menos duas das seguintes características: localização bilateral, sensação de aperto ou pressão, intensidade leve ou moderada e não serem agravados por atividades físicas do dia a dia. Nessa condição não há náuseas ou vômitos, e a dor geralmente não é pulsátil."
        },
        {
            section: "Cefaleias Especiais",
            q: "Se você é mulher, as crises de enxaqueca costumam ocorrer no período de dois dias antes até três dias após a menstruação em pelo menos dois ciclos de três meses consecutivos?",
            options: ["Sim", "Não", "Não se aplica"],
            help: "Estima-se que 7 – 14 % das mulheres sofram exclusivamente de enxaqueca durante a menstruação, e muitas apresentam aumento das crises nesse período. A enxaqueca menstrual é caracterizada por crises que surgem desde dois dias antes até três dias depois do início do ciclo menstrual em pelo menos dois de três ciclos consecutivos."
        },
        {
            section: "Cefaleias Secundárias",
            q: "A dor de cabeça começa no pescoço ou região occipital e piora com movimentos do pescoço ou ao pressionar essa área?",
            options: ["Sim", "Não"],
            help: "A cefaleia cervicogênica se origina na coluna cervical. Ela piora com movimentos do pescoço ou pressão local e pode limitar a mobilidade cervical."
        },
        {
            section: "Cefaleias Secundárias",
            q: "Você já teve uma dor de cabeça de início abrupto, extremamente intensa, que atingiu sua máxima intensidade em menos de um minuto e durou pelo menos cinco minutos?",
            options: ["Sim", "Não"],
            help: "A cefaleia em trovoada atinge intensidade máxima em 60 segundos e dura ao menos 5 minutos. Pode indicar condições graves como hemorragia subaracnoide ou síndrome de vasoconstrição cerebral reversível."
        },
        {
            section: "Cefaleias Secundárias",
            q: "Você teve um episódio de dor de cabeça associado a sintomas de arterite temporal, como dor ao mastigar?",
            options: ["Sim", "Não"],
            help: "Sugere arterite de células gigantes, comum em maiores de 50 anos, podendo causar perda visual irreversível."
        },
        {
            section: "Cefaleias Secundárias",
            q: "Você teve um episódio de dor de cabeça com sensibilidade no couro cabeludo?",
            options: ["Sim", "Não"],
            help: "Sugere arterite de células gigantes, comum em maiores de 50 anos, podendo causar perda visual irreversível."
        },
        {
            section: "Cefaleias Secundárias",
            q: "Você teve um episódio de dor de cabeça com perda visual?",
            options: ["Sim", "Não"],
            help: "Sugere arterite de células gigantes, comum em maiores de 50 anos, podendo causar perda visual irreversível."
        },
        {
            section: "Cefaleias Secundárias",
            q: "Você teve uma dor de cabeça persistente após punção lombar?",
            options: ["Sim", "Não"],
            help: "Pode indicar cefaleia por hipotensão do LCR, que melhora ao deitar e piora ao ficar em pé."
        },
        {
            section: "Cefaleias Secundárias",
            q: "Você teve uma dor de cabeça persistente após anestesia raquidiana?",
            options: ["Sim", "Não"],
            help: "Pode indicar cefaleia por hipotensão do LCR, que melhora ao deitar e piora ao ficar em pé."
        },
        {
            section: "Cefaleias Secundárias",
            q: "Você teve cefaleia associada a sangramento menstrual anormal?",
            options: ["Sim", "Não"],
            help: "O puerpério está associado a maior risco de trombose venosa cerebral e outras cefaleias secundárias."
        },
        {
            section: "Cefaleias Secundárias",
            q: "Você teve cefaleia associada à gravidez recente ou puerpério?",
            options: ["Sim", "Não"],
            help: "O puerpério está associado a maior risco de trombose venosa cerebral e outras cefaleias secundárias."
        },
        {
            section: "Cefaleias Secundárias",
            q: "Você teve cefaleia que iniciou após o uso de uma medicação nova?",
            options: ["Sim", "Não"],
            help: "Alguns medicamentos (como nitratos, ACOs, ISRS) podem induzir cefaleia como efeito adverso."
        },
        {
            section: "Cefaleias Secundárias",
            q: "Você teve cefaleia após mudança de dose de algum medicamento?",
            options: ["Sim", "Não"],
            help: "Alguns medicamentos (como nitratos, ACOs, ISRS) podem induzir cefaleia como efeito adverso."
        },
        {
            section: "Cefaleias Secundárias",
            q: "Você teve cefaleia associada a intoxicação por chumbo?",
            options: ["Sim", "Não"],
            help: "Exposição a substâncias tóxicas pode desencadear cefaleia por mecanismos diretos ou metabólicos."
        },
        {
            section: "Cefaleias Secundárias",
            q: "Você teve cefaleia associada a exposição ao monóxido de carbono?",
            options: ["Sim", "Não"],
            help: "Exposição a substâncias tóxicas pode desencadear cefaleia por mecanismos diretos ou metabólicos."
        },
        {
            section: "Cefaleias Secundárias",
            q: "Você teve cefaleia após contato com solventes ou pesticidas?",
            options: ["Sim", "Não"],
            help: "Exposição a substâncias tóxicas pode desencadear cefaleia por mecanismos diretos ou metabólicos."
        },
        {
            section: "Cefaleias Secundárias",
            q: "Você já teve dor de cabeça associada a alteração da pressão ocular como glaucoma agudo?",
            options: ["Sim", "Não"],
            help: "Crises agudas de glaucoma podem causar dor orbitária intensa, náuseas e redução visual."
        },
        {
            section: "Cefaleias Secundárias",
            q: "Você teve dor de cabeça relacionada a esforço para evacuar?",
            options: ["Sim", "Não"],
            help: "A cefaleia por esforço é desencadeada exclusivamente por atividade física vigorosa ou manobra de Valsalva."
        },
        {
            section: "Cefaleias Secundárias",
            q: "Você teve dor de cabeça relacionada a levantar peso ou outro esforço físico intenso?",
            options: ["Sim", "Não"],
            help: "A cefaleia por esforço é desencadeada exclusivamente por atividade física vigorosa ou manobra de Valsalva."
        },
        {
            section: "Distúrbios Metabólicos e Infecções",
            q: "A dor está associada a pressão alta grave, hipotireoidismo, jejum prolongado, insuficiência renal/hepática ou hipoxia (apneia do sono ou altitude)?",
            options: ["Sim", "Não"],
        },

        /* Pergunta livre */
        {
            section: "Observações Finais",
            q: "Deseja incluir mais alguma informação que julgue importante?",
            multiline: true,
        },
    ];

    const formState = {};

    function handleChange(question, value) {
        formState[question] = value;
    }

    function selectOption(question, value, btn) {
        handleChange(question, value);
        const group = btn.parentElement;
        group.querySelectorAll('button').forEach(b => {
            b.classList.remove('btn-primary');
            b.classList.add('btn-outline-primary');
        });
        btn.classList.remove('btn-outline-primary');
        btn.classList.add('btn-primary');
    }

    function toggleHelp(btn) {
        const helpText = btn.closest('.mb-4').querySelector('.help-text');
        if (helpText) {
            helpText.classList.toggle('d-none');
        }
    }

    const container = document.getElementById('questionnaire');
    const sections = Array.from(new Set(questions.map(q => q.section)));

    sections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'mb-5';

        const h3 = document.createElement('h3');
        h3.className = 'mb-3';
        h3.textContent = section;
        sectionDiv.appendChild(h3);

        questions.filter(item => item.section === section).forEach(item => {
            const qDiv = document.createElement('div');
            qDiv.className = 'mb-4';

            const label = document.createElement('label');
            label.className = 'form-label fw-medium';
            label.textContent = item.q;

            if (item.help) {
                const helpBtn = document.createElement('button');
                helpBtn.type = 'button';
                helpBtn.className = 'btn btn-sm btn-outline-secondary ms-2';
                helpBtn.innerHTML = '<i class="fa fa-info-circle"></i>';
                helpBtn.addEventListener('click', () => toggleHelp(helpBtn));
                label.appendChild(helpBtn);
            }

            qDiv.appendChild(label);

            if (item.help) {
                const helpDiv = document.createElement('div');
                helpDiv.className = 'help-text small text-muted d-none mb-2';
                helpDiv.textContent = item.help;
                qDiv.appendChild(helpDiv);
            }

            if (item.options) {
                const group = document.createElement('div');
                group.className = 'btn-group flex-wrap';
                item.options.forEach(opt => {
                    const btn = document.createElement('button');
                    btn.type = 'button';
                    btn.className = 'btn btn-outline-primary mb-2';
                    btn.textContent = opt;
                    btn.addEventListener('click', () => selectOption(item.q, opt, btn));
                    group.appendChild(btn);
                });
                qDiv.appendChild(group);
            } else if (item.multiline) {
                const textarea = document.createElement('textarea');
                textarea.className = 'form-control';
                textarea.rows = 4;
                textarea.addEventListener('input', e => handleChange(item.q, e.target.value));
                qDiv.appendChild(textarea);
            } else {
                const input = document.createElement('input');
                input.type = 'text';
                input.className = 'form-control';
                input.addEventListener('input', e => handleChange(item.q, e.target.value));
                qDiv.appendChild(input);
            }

            sectionDiv.appendChild(qDiv);
        });

        container.appendChild(sectionDiv);
    });

    document.getElementById('submitBtn').addEventListener('click', function () {
        const lines = questions.map(item => {
            const answer = formState[item.q] || '';
            return `${item.q} ${answer}`.trim();
        });
        const log = lines.join('\n');
        document.getElementById('log').textContent = log;
        document.getElementById('logContainer').style.display = 'block';
    });
});

