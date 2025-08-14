document.addEventListener('DOMContentLoaded', function () {
    const lang = window.ANAMNESE_LANG === 'en' ? 'en' : 'pt-br';
    const dict = {
        'Sim': { en: 'Yes' },
        'Não': { en: 'No' },
        'Não se aplica': { en: 'Not applicable' },
        'Leve': { en: 'Mild' },
        'Moderada': { en: 'Moderate' },
        'Severa': { en: 'Severe' },
        'Abruptamente': { en: 'Abruptly' },
        'Gradualmente': { en: 'Gradually' },
        'Classificar': { en: 'Classify' },
        'Voltar': { en: 'Back' },
        'Tentar novamente': { en: 'Try again' },
        'Classificando anamnese...': { en: 'Classifying anamnesis...' },
        'Características da Dor': { en: 'Pain Characteristics' },
        'Fatores Desencadeantes': { en: 'Trigger Factors' },
        'Sintomas Associados': { en: 'Associated Symptoms' },
        'Histórico da Cefaleia': { en: 'Headache History' },
        'Uso de Medicamentos e Substâncias': { en: 'Medication and Substance Use' },
        'Comorbidades e Antecedentes': { en: 'Comorbidities and History' },
        'História Familiar': { en: 'Family History' },
        'Exames Complementares': { en: 'Complementary Exams' },
        'Outras Cefaleias Primárias': { en: 'Other Primary Headaches' },
        'Cefaleias Secundárias': { en: 'Secondary Headaches' },
        'Distúrbios Metabólicos e Infecções': { en: 'Metabolic Disorders and Infections' },
        'Cefaleias Especiais': { en: 'Special Headaches' },
        'Observações Finais': { en: 'Final Notes' },
        'Qual é a localização da dor?': { en: 'Where is the pain located?' },
        'Qual é o caráter da dor?': { en: 'What is the nature of the pain?' },
        'Qual é a intensidade da dor?': { en: 'What is the intensity of the pain?' },
        'Quanto tempo dura cada crise de dor?': { en: 'How long does each pain episode last?' },
        'Com que frequência a dor ocorre?': { en: 'How often does the pain occur?' },
        'A dor se mantém contínua desde o início?': { en: 'Has the pain remained continuous since it began?' },
        'Houve alguma mudança no padrão habitual da dor?': { en: 'Has there been any change in the usual pattern of the pain?' },
        'A dor começou abruptamente (em segundos) ou gradualmente?': { en: 'Did the pain start abruptly (within seconds) or gradually?' },
        'A dor o acorda durante o sono?': { en: 'Does the pain wake you from sleep?' },
        'A dor piora com esforço físico leve?': { en: 'Does the pain worsen with light physical effort?' },
        'A dor surge após atividade física vigorosa?': { en: 'Does the pain arise after vigorous physical activity?' },
        'A dor é precipitada por tosse, espirro ou evacuação?': { en: 'Is the pain triggered by coughing, sneezing, or straining?' },
        'A dor é influenciada pela posição do corpo (em pé ou deitado)?': { en: 'Is the pain influenced by body position (standing or lying down)?' },
        'A dor de cabeça é provocada por objetos que apertam ou tracionam a cabeça?': { en: 'Is the headache caused by objects that compress or pull on the head?' },
        'Há náuseas ou vômitos durante a dor?': { en: 'Are there nausea or vomiting during the pain?' },
        'Há fotofobia ou fonofobia?': { en: 'Is there photophobia or phonophobia?' },
        'Há sintomas de aura?': { en: 'Are there aura symptoms?' },
        'Há déficits neurológicos transitórios?': { en: 'Are there transient neurological deficits?' },
        'Há sinais autonômicos durante a dor?': { en: 'Are there autonomic signs during the pain?' },
        'Você sente inquietação ou incapacidade de ficar parado durante a crise?': { en: 'Do you feel restlessness or an inability to stay still during the attack?' },
        'Você já teve cefaleias semelhantes antes?': { en: 'Have you had similar headaches before?' },
        'Quando a cefaleia começou pela primeira vez na sua vida?': { en: 'When did the headache first start in your life?' },
        'Esta dor de cabeça é diferente das anteriores?': { en: 'Is this headache different from previous ones?' },
        'É a primeira dor de cabeça da sua vida?': { en: 'Is this the first headache of your life?' },
        'Você já procurou atendimento médico por cefaleia?': { en: 'Have you sought medical care for headache?' },
        'Já realizou tratamento para cefaleia? Qual foi o efeito?': { en: 'Have you undergone treatment for headache? What was the effect?' },
        'Quantos dias por mês você usa analgésicos ou medicações para dor de cabeça?': { en: 'How many days per month do you use painkillers or headache medications?' },
        'Você está usando ou já usou triptanos, ergotamina ou opioides?': { en: 'Are you using or have you used triptans, ergotamine, or opioids?' },
        'Você experimentou indometacina e a dor desapareceu?': { en: 'Did you try indomethacin and the pain disappeared?' },
        'Você usa anticoagulantes?': { en: 'Do you use anticoagulants?' },
        'Você usa antiagregantes (ex.: AAS, clopidogrel)?': { en: 'Do you use antiplatelet agents (e.g., ASA, clopidogrel)?' },
        'Você usa anticoncepcionais hormonais ou terapia de reposição hormonal?': { en: 'Do you use hormonal contraceptives or hormone replacement therapy?' },
        'Você usa nitratos?': { en: 'Do you use nitrates?' },
        'Você usa tadalafila ou sildenafila?': { en: 'Do you use tadalafil or sildenafil?' },
        'Você consome cafeína?': { en: 'Do you consume caffeine?' },
        'Com que frequência você consome café?': { en: 'How often do you drink coffee?' },
        'Você consome álcool?': { en: 'Do you consume alcohol?' },
        'A dor surge logo após consumir álcool (imediata)?': { en: 'Does the pain occur immediately after consuming alcohol?' },
        'A dor surge 5–12 horas após consumo de álcool (tardia)?': { en: 'Does the pain occur 5–12 hours after consuming alcohol?' },
        'Você usa cocaína?': { en: 'Do you use cocaine?' },
        'Você consome cannabis?': { en: 'Do you consume cannabis?' },
        'As crises surgem após exposição a dióxido de carbono, monóxido de carbono ou outros gases específicos?': { en: 'Do attacks arise after exposure to carbon dioxide, carbon monoxide, or other specific gases?' },
        'A dor surgiu após interrupção de cafeína, triptano ou anticoncepcional oral?': { en: 'Did the pain start after stopping caffeine, triptan, or oral contraceptive?' },
        'Você tem hipertensão arterial?': { en: 'Do you have arterial hypertension?' },
        'Você tem diabetes mellitus?': { en: 'Do you have diabetes mellitus?' },
        'Você tem dislipidemia?': { en: 'Do you have dyslipidemia?' },
        'Você tem doença cardiovascular?': { en: 'Do you have cardiovascular disease?' },
        'Você tem insuficiência renal crônica?': { en: 'Do you have chronic kidney failure?' },
        'Você tem doença hepática (insuficiência hepática)?': { en: 'Do you have liver disease (hepatic insufficiency)?' },
        'Você tem hipotireoidismo?': { en: 'Do you have hypothyroidism?' },
        'Você tem apneia do sono ou hipoxia de altitude?': { en: 'Do you have sleep apnea or high-altitude hypoxia?' },
        'Você tem doença neurológica conhecida (epilepsia, esclerose múltipla, etc.)?': { en: 'Do you have a known neurological disease (epilepsy, multiple sclerosis, etc.)?' },
        'Você tem diagnóstico de aneurisma cerebral ou malformação vascular?': { en: 'Do you have a diagnosis of cerebral aneurysm or vascular malformation?' },
        'Você já teve trauma craniano recente?': { en: 'Have you had a recent head trauma?' },
        'Você se submeteu a cirurgia craniana ou raquidiana recentemente?': { en: 'Have you undergone cranial or spinal surgery recently?' },
        'Você tem histórico de AVC?': { en: 'Do you have a history of stroke?' },
        'Você tem histórico de AIT (ataque isquêmico transitório)?': { en: 'Do you have a history of TIA (transient ischemic attack)?' },
        'Você tem histórico de trombose venosa cerebral?': { en: 'Do you have a history of cerebral venous thrombosis?' },
        'Você tem histórico de tumor cerebral?': { en: 'Do you have a history of brain tumor?' },
        'Você teve infecção do sistema nervoso central (abscesso cerebral, encefalite viral ou tuberculose cerebral)?': { en: 'Have you had an infection of the central nervous system (brain abscess, viral encephalitis, or brain tuberculosis)?' },
        'Você teve meningite?': { en: 'Have you had meningitis?' },
        'Você tem HIV?': { en: 'Do you have HIV?' },
        'Você teve neurotuberculose?': { en: 'Have you had neurotuberculosis?' },
        'Você tem neoplasia ou lesão intracraniana conhecida (tumor, malformação vascular ou hidrocefalia)?': { en: 'Do you have a known intracranial neoplasm or lesion (tumor, vascular malformation, or hydrocephalus)?' },
        'Você tem dor de cabeça relacionada a seios paranasais (sinusite), olhos (glaucoma) ou disfunção temporomandibular?': { en: 'Do you have headache related to paranasal sinuses (sinusitis), eyes (glaucoma), or temporomandibular dysfunction?' },
        'Há casos de enxaqueca na sua família?': { en: 'Are there cases of migraine in your family?' },
        'Há casos de cefaleia em salvas na sua família?': { en: 'Are there cases of cluster headache in your family?' },
        'Há casos de aneurisma cerebral na sua família?': { en: 'Are there cases of cerebral aneurysm in your family?' },
        'Há casos de epilepsia na sua família?': { en: 'Are there cases of epilepsy in your family?' },
        'Você já realizou exames de imagem cerebral (TC, RM, angio)? Se sim, descreva os resultados.': { en: 'Have you undergone brain imaging exams (CT, MRI, angiography)? If so, describe the results.' },
        'Você já realizou punção lombar?': { en: 'Have you undergone lumbar puncture?' },
        'Você já realizou eletroencefalograma (EEG)?': { en: 'Have you had an electroencephalogram (EEG)?' },
        'Você já realizou exames oftalmológicos?': { en: 'Have you had ophthalmologic exams?' },
        'Você sente dor súbita e curta, tipo pontada (como um choque elétrico)?': { en: 'Do you feel sudden, brief, stabbing pain (like an electric shock)?' },
        'A dor de cabeça começa apenas com estímulo frio (comer ou inalar algo gelado)?': { en: 'Does the headache start only with cold stimulus (eating or inhaling something cold)?' },
        'A dor ocorre somente associada à atividade sexual, aumentando com a excitação ou no orgasmo?': { en: 'Does the pain occur only associated with sexual activity, increasing with arousal or at orgasm?' },
        'Você tem cefaleias que surgem durante o sono e te acordam (cefaleia hípnica)?': { en: 'Do you have headaches that arise during sleep and wake you (hypnic headache)?' },
        'Você tem dor de cabeça contínua desde o início e que persiste por meses (cefaleia diária persistente nova)?': { en: 'Do you have continuous headache from the start that persists for months (new daily persistent headache)?' },
        'A cefaleia começou logo após um trauma craniano ou cirurgia craniana/raquidiana?': { en: 'Did the headache start right after head trauma or cranial/spinal surgery?' },
        'A dor piora ao deitar e melhora ao ficar em pé (hipotensão intracraniana ou pressão baixa do LCR)?': { en: 'Does the pain worsen when lying down and improve when standing up (intracranial hypotension or low CSF pressure)?' },
        'A dor é pior ao acordar ou ao se deitar, e vem acompanhada de vômitos ou intolerância ao esforço (pressão intracraniana elevada)?': { en: 'Is the pain worse upon waking or when lying down, and accompanied by vomiting or exercise intolerance (elevated intracranial pressure)?' },
        'Você possui diagnóstico de lesão intracraniana, como tumor?': { en: 'Do you have a diagnosis of intracranial lesion, such as a tumor?' },
        'Você possui diagnóstico de lesão intracraniana, como malformação vascular?': { en: 'Do you have a diagnosis of intracranial lesion, such as a vascular malformation?' },
        'Você possui diagnóstico de lesão intracraniana, como hidrocefalia?': { en: 'Do you have a diagnosis of intracranial lesion, such as hydrocephalus?' },
        'Você possui diagnóstico de lesão intracraniana, como angiomatose venosa/Stuge-Weber?': { en: 'Do you have a diagnosis of intracranial lesion, such as venous angioma/Sturge-Weber?' },
        'Você teve infecção cerebral ou sistêmica (abscesso, encefalite viral ou tuberculose)?': { en: 'Have you had a brain or systemic infection (abscess, viral encephalitis, or tuberculosis)?' },
        'Você tem episódios recorrentes de dor facial intensa, em choque ou pontada, que duram segundos a poucos minutos e podem ser desencadeados por tocar o rosto, mastigar, falar ou escovar os dentes?': { en: 'Do you have recurrent episodes of intense facial pain, shock-like or stabbing, lasting seconds to a few minutes and triggered by touching the face, chewing, talking, or brushing teeth?' },
        'A dor de cabeça começa no pescoço ou região occipital e piora com movimentos do pescoço ou ao pressionar essa área?': { en: 'Does the headache start in the neck or occipital region and worsen with neck movement or pressure on that area?' },
        'Você já teve uma dor de cabeça de início abrupto, extremamente intensa, que atingiu sua máxima intensidade em menos de um minuto e durou pelo menos cinco minutos?': { en: 'Have you ever had a headache with abrupt onset, extremely intense, reaching peak intensity in less than one minute and lasting at least five minutes?' },
        'Suas dores de cabeça costumam ser bilaterais, com sensação de pressão ou aperto (não pulsátil), de intensidade leve a moderada e não se agravam com atividades físicas de rotina, além de não causarem náuseas ou vômitos?': { en: 'Are your headaches usually bilateral, with a pressing or tightening sensation (non-pulsating), mild to moderate in intensity, not aggravated by routine physical activity, and without nausea or vomiting?' },
        'Se você é mulher, as crises de enxaqueca costumam ocorrer no período de dois dias antes até três dias após a menstruação em pelo menos dois ciclos de três meses consecutivos?': { en: 'If you are a woman, do migraine attacks usually occur from two days before to three days after menstruation in at least two of three consecutive cycles?' },
        'Você teve um episódio de dor de cabeça associado a sintomas de arterite temporal, como dor ao mastigar?': { en: 'Have you had a headache episode associated with temporal arteritis symptoms, such as jaw claudication?' },
        'Você teve um episódio de dor de cabeça com sensibilidade no couro cabeludo?': { en: 'Have you had a headache episode with scalp tenderness?' },
        'Você teve um episódio de dor de cabeça com perda visual?': { en: 'Have you had a headache episode with vision loss?' },
        'Você teve uma dor de cabeça persistente após punção lombar?': { en: 'Have you had a persistent headache after lumbar puncture?' },
        'Você teve uma dor de cabeça persistente após anestesia raquidiana?': { en: 'Have you had a persistent headache after spinal anesthesia?' },
        'Você teve cefaleia associada a sangramento menstrual anormal?': { en: 'Have you had headache associated with abnormal menstrual bleeding?' },
        'Você teve cefaleia associada à gravidez recente ou puerpério?': { en: 'Have you had headache associated with recent pregnancy or the puerperium?' },
        'Você teve cefaleia que iniciou após o uso de uma medicação nova?': { en: 'Have you had a headache that began after using a new medication?' },
        'Você teve cefaleia após mudança de dose de algum medicamento?': { en: 'Have you had a headache after a change in dose of some medication?' },
        'Você teve cefaleia associada a intoxicação por chumbo?': { en: 'Have you had headache associated with lead poisoning?' },
        'Você teve cefaleia associada a exposição ao monóxido de carbono?': { en: 'Have you had headache associated with exposure to carbon monoxide?' },
        'Você teve cefaleia após contato com solventes ou pesticidas?': { en: 'Have you had headache after contact with solvents or pesticides?' },
        'Você já teve dor de cabeça associada a alteração da pressão ocular como glaucoma agudo?': { en: 'Have you had headache associated with ocular pressure changes such as acute glaucoma?' },
        'Você teve dor de cabeça relacionada a esforço para evacuar?': { en: 'Have you had headache related to straining to defecate?' },
        'Você teve dor de cabeça relacionada a levantar peso ou outro esforço físico intenso?': { en: 'Have you had headache related to lifting weight or other intense physical effort?' },
        'A dor está associada a pressão alta grave, hipotireoidismo, jejum prolongado, insuficiência renal/hepática ou hipoxia (apneia do sono ou altitude)?': { en: 'Is the pain associated with severe high blood pressure, hypothyroidism, prolonged fasting, renal/hepatic failure, or hypoxia (sleep apnea or altitude)?' },
        'Deseja incluir mais alguma informação que julgue importante?': { en: 'Would you like to include any other information you consider important?' },
        'Indique se a dor é unilateral, bilateral, retro‑orbitária, temporal, occipital, etc.': { en: 'Indicate whether the pain is unilateral, bilateral, retro-orbital, temporal, occipital, etc.' },
        'Descreva se a dor é pulsátil, em pressão, em pontadas ou em choque elétrico.': { en: 'Describe whether the pain is pulsating, pressing, stabbing, or like an electric shock.' },
        'Informe a duração de cada episódio (segundos, minutos, horas ou dias).': { en: 'Report the duration of each episode (seconds, minutes, hours, or days).' },
        'Informe quantos dias por mês ou vezes por dia.': { en: 'State how many days per month or times per day.' },
        'Atividades leves como caminhar ou subir escada agravam a dor?': { en: 'Do light activities such as walking or climbing stairs worsen the pain?' },
        'Engloba a manobra de Valsalva, como fazer força ao evacuar.': { en: 'Includes the Valsalva maneuver, such as straining to defecate.' },
        'Por exemplo: óculos apertados, chapéus ou faixas apertadas.': { en: 'For example: tight glasses, hats, or headbands.' },
        'Fotofobia é sensibilidade à luz; fonofobia é sensibilidade a sons.': { en: 'Photophobia is sensitivity to light; phonophobia is sensitivity to sound.' },
        'Ex.: distúrbios visuais em zigue‑zague, escotomas ou formigamentos que duram até 60 minutos.': { en: 'E.g., visual disturbances in zigzag, scotomas, or tingling lasting up to 60 minutes.' },
        'Fraqueza em um membro, dificuldade na fala, alterações sensoriais temporárias.': { en: 'Weakness in a limb, speech difficulties, temporary sensory changes.' },
        'Lacrimejamento, congestão nasal, coriza, olho vermelho, pálpebra caída ou sudorese facial.': { en: 'Tearing, nasal congestion, runny nose, red eye, drooping eyelid, or facial sweating.' },
        'Inclui exposição a CO₂ em câmaras de respiração, monóxido de carbono e outras substâncias voláteis.': { en: 'Includes exposure to CO₂ in breathing chambers, carbon monoxide, and other volatile substances.' },
        'A neuralgia do trigêmeo causa episódios de dor súbita, em choque, em um lado da face, com duração de segundos a minutos. Essas crises podem ser desencadeadas por estímulos leves como tocar o rosto, vento, mastigar, falar ou escovar os dentes.': { en: 'Trigeminal neuralgia causes episodes of sudden shock-like pain on one side of the face lasting seconds to minutes. These attacks can be triggered by mild stimuli such as touching the face, wind, chewing, talking, or brushing teeth.' },
        'A cefaleia cervicogênica é uma dor hemicraniana ou occipital que se origina na coluna cervical ou nos tecidos moles do pescoço. A dor geralmente é provocada ou agravada por movimentos do pescoço ou por pressão nas regiões cervical ou occipital e pode limitar a amplitude de movimento.': { en: 'Cervicogenic headache is a hemicranial or occipital pain originating in the cervical spine or neck soft tissues. It is usually provoked or worsened by neck movements or pressure on cervical or occipital regions and may limit range of motion.' },
        'A chamada “cefaleia em trovoada” é descrita como uma dor de cabeça súbita de início explosivo, que atinge intensidade máxima em 60 segundos e persiste por pelo menos cinco minutos. Essa forma de dor intensa é considerada uma emergência e exige investigação imediata.': { en: 'A so-called “thunderclap headache” is described as a sudden, explosive-onset headache reaching maximum intensity within 60 seconds and lasting at least five minutes. This intense pain is considered an emergency requiring immediate investigation.' },
        'A cefaleia tipo tensional é a forma mais comum de dor de cabeça. Os episódios podem durar de 30 minutos a sete dias; devem ter pelo menos duas das seguintes características: localização bilateral, sensação de aperto ou pressão, intensidade leve ou moderada e não serem agravados por atividades físicas do dia a dia. Nessa condição não há náuseas ou vômitos, e a dor geralmente não é pulsátil.': { en: 'Tension-type headache is the most common form of headache. Episodes can last from 30 minutes to seven days and must have at least two of the following features: bilateral location, pressing or tightening quality, mild or moderate intensity, and not aggravated by routine physical activity. There is no nausea or vomiting, and the pain is usually non-pulsating.' },
        'Estima-se que 7 – 14 % das mulheres sofram exclusivamente de enxaqueca durante a menstruação, e muitas apresentam aumento das crises nesse período. A enxaqueca menstrual é caracterizada por crises que surgem desde dois dias antes até três dias depois do início do ciclo menstrual em pelo menos dois de três ciclos consecutivos.': { en: 'It is estimated that 7–14% of women suffer exclusively from migraine during menstruation, and many experience increased attacks in this period. Menstrual migraine is characterized by attacks occurring from two days before to three days after the start of menstruation in at least two of three consecutive cycles.' },
        'A cefaleia cervicogênica se origina na coluna cervical. Ela piora com movimentos do pescoço ou pressão local e pode limitar a mobilidade cervical.': { en: 'Cervicogenic headache originates in the cervical spine. It worsens with neck movements or local pressure and may limit cervical mobility.' },
        'A cefaleia em trovoada atinge intensidade máxima em 60 segundos e dura ao menos 5 minutos. Pode indicar condições graves como hemorragia subaracnoide ou síndrome de vasoconstrição cerebral reversível.': { en: 'Thunderclap headache reaches maximum intensity within 60 seconds and lasts at least 5 minutes. It may indicate serious conditions such as subarachnoid hemorrhage or reversible cerebral vasoconstriction syndrome.' },
        'Sugere arterite de células gigantes, comum em maiores de 50 anos, podendo causar perda visual irreversível.': { en: 'Suggests giant cell arteritis, common in people over 50 and may cause irreversible visual loss.' },
        'Pode indicar cefaleia por hipotensão do LCR, que melhora ao deitar e piora ao ficar em pé.': { en: 'May indicate low CSF pressure headache, which improves when lying down and worsens when standing.' },
        'O puerpério está associado a maior risco de trombose venosa cerebral e outras cefaleias secundárias.': { en: 'The puerperium is associated with a higher risk of cerebral venous thrombosis and other secondary headaches.' },
        'Alguns medicamentos (como nitratos, ACOs, ISRS) podem induzir cefaleia como efeito adverso.': { en: 'Some medications (such as nitrates, OCs, SSRIs) can induce headache as an adverse effect.' },
        'Exposição a substâncias tóxicas pode desencadear cefaleia por mecanismos diretos ou metabólicos.': { en: 'Exposure to toxic substances can trigger headache through direct or metabolic mechanisms.' },
        'Crises agudas de glaucoma podem causar dor orbitária intensa, náuseas e redução visual.': { en: 'Acute glaucoma attacks can cause severe orbital pain, nausea, and visual reduction.' },
        'A cefaleia por esforço é desencadeada exclusivamente por atividade física vigorosa ou manobra de Valsalva.': { en: 'Exertional headache is triggered exclusively by vigorous physical activity or the Valsalva maneuver.' }
    };

    const style = document.createElement('style');
    style.textContent = `
        .text-input { width: 50%; }
        @media (max-width: 576px) {
            .text-input { width: 100%; }
        }
        .help-text {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
        }
    `;
    document.head.appendChild(style);

    function t(str) {
        return lang === 'en' && dict[str] ? dict[str].en : str;
    }

    document.getElementById('submitBtn').textContent = t('Classificar');
    document.getElementById('backBtn').textContent = t('Voltar');
    document.getElementById('retryBtn').textContent = t('Tentar novamente');
    document.getElementById('spinner-text').textContent = t('Classificando anamnese...');

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
        handleChange(question, t(value));
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
            if (helpText.style.maxHeight && helpText.style.maxHeight !== '0px') {
                helpText.style.maxHeight = '0';
            } else {
                helpText.style.maxHeight = helpText.scrollHeight + 'px';
            }
        }
    }

    const container = document.getElementById('questionnaire');
    const sections = Array.from(new Set(questions.map(q => q.section)));

    sections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'mb-5';

        const h3 = document.createElement('h3');
        h3.className = 'mb-3';
        h3.textContent = t(section);
        sectionDiv.appendChild(h3);

        questions.filter(item => item.section === section).forEach(item => {
            const qDiv = document.createElement('div');
            qDiv.className = 'mb-4';
            qDiv.style.display = 'flex';
            qDiv.style.flexWrap = 'wrap';
            qDiv.style.alignContent = 'flex-start';
            qDiv.style.flexDirection = 'column';

            const label = document.createElement('label');
            label.className = 'form-label fw-medium';
            label.textContent = t(item.q);

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
                helpDiv.className = 'help-text small text-muted mb-2';
                helpDiv.style.maxHeight = '0px';
                helpDiv.textContent = t(item.help);
                qDiv.appendChild(helpDiv);
            }

            if (item.options) {
                const group = document.createElement('div');
                group.className = 'btn-group flex-wrap';
                group.style.width = '30%';
                item.options.forEach(opt => {
                    const btn = document.createElement('button');
                    btn.type = 'button';
                    btn.className = 'btn btn-outline-primary mb-2';
                    btn.textContent = t(opt);
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
                input.className = 'form-control text-input';
                input.addEventListener('input', e => handleChange(item.q, e.target.value));
                qDiv.appendChild(input);
            }

            sectionDiv.appendChild(qDiv);
        });

        container.appendChild(sectionDiv);
    });

    document.getElementById('submitBtn').addEventListener('click', function () {
        const lines = [];
        questions.forEach(item => {
            let answer = formState[item.q];
            if (item.options) {
                if (!answer && item.options.length === 2 && item.options.includes('Sim') && item.options.includes('Não')) {
                    answer = t('Não');
                }
                lines.push(`${t(item.q)} ${answer || ''}`.trim());
            } else if (answer && answer.trim() !== '') {
                lines.push(`${t(item.q)} ${answer}`.trim());
            }
        });
        const log = lines.join('\n');

        document.getElementById('questionnaire').style.display = 'none';
        document.getElementById('submitBtn').style.display = 'none';
        document.getElementById('div-spinner').style.display = 'block';

        $.ajax({
            type: 'POST',
            url: window.ANAMNESE_CLASSIFY_URL,
            data: { text: log, lang },
            success: function(response) {
                $('#div-spinner').hide();
                $('#anamnese-response').show();
                let treatedResponse = response;
                if (response !== 'Nenhuma resposta encontrada.' && response !== 'No response found.') {
                    treatedResponse = treatedResponse.replace(/【[^】]*】/g, '');
                    treatedResponse = treatedResponse.replace(/\*\*(.+?)\*\*/g, '<strong>$1<\/strong>');
                    treatedResponse = treatedResponse.replace(/(\d+\.)/g, '<br><br>$1');
                    $('#response-content').html(treatedResponse);
                } else {
                    if (lang === 'en') {
                        $('#response-content').html('Unable to classify the anamnesis. Please try again.');
                    } else {
                        $('#response-content').html('Não foi possível classificar a anamnese. Tente novamente.');
                    }
                }
                $('#retryBtn').show();
            }
        });
    });

    document.getElementById('retryBtn').addEventListener('click', function () {
        location.reload();
    });
});

