<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">
<?php $this->load->view('header'); ?>
<body>
    <style>
        body {
            background-color: #FDFBF5;
            font-family: 'Montserrat', sans-serif;
            margin: 0;
            color: #1B2D59;
        }

        .about-page {
            max-width: 1100px;
            margin: 0 auto;
            padding: 2.5rem 1.5rem 3.5rem;
            display: flex;
            flex-direction: column;
            gap: 1.8rem;
        }

        .top-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
        }

        .back-link {
            text-decoration: none;
            color: #1B2D59;
            font-weight: 700;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.4rem 0.75rem;
            border-radius: 12px;
            transition: background 0.2s ease;
        }

        .back-link:hover {
            background-color: rgba(27, 45, 89, 0.06);
        }

        .cta-menu {
            padding: 0.55rem 1.5rem;
            border-radius: 30px;
            font-size: 1rem;
            font-weight: 700;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            background-color: #1B2D59;
            color: #FFFFFF;
            text-decoration: none;
        }

        .cta-menu:hover {
            background-color: #0F1C3A;
        }

        .hero {
            background: linear-gradient(135deg, #E4EDFF 0%, #F9F4FF 100%);
            border-radius: 24px;
            padding: 2rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        .hero h1 {
            margin: 0;
            font-size: 2.6rem;
            color: #1B2D59;
            letter-spacing: -0.02em;
        }

        .hero p {
            margin: 0.7rem 0 0;
            font-size: 1.1rem;
            line-height: 1.6;
            color: #273b74;
        }

        .card {
            background: #FFFFFF;
            border-radius: 18px;
            padding: 1.6rem 1.75rem;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
        }

        .card h2 {
            margin-top: 0;
            font-size: 1.35rem;
            color: #1B2D59;
            letter-spacing: -0.01em;
        }

        .card p {
            margin: 0.6rem 0 0.4rem;
            line-height: 1.55;
            color: #2c3e70;
        }

        .card ul {
            margin: 0.3rem 0 0.6rem 1.2rem;
            padding: 0;
            color: #2c3e70;
            line-height: 1.5;
        }

        .card li + li {
            margin-top: 0.35rem;
        }

        .badge {
            display: inline-block;
            background: #FFC610;
            color: #1B2D59;
            padding: 0.25rem 0.65rem;
            border-radius: 12px;
            font-weight: 700;
            font-size: 0.85rem;
        }

        .reference {
            font-size: 0.95rem;
            line-height: 1.5;
            color: #273b74;
        }

        .disclaimer {
            background: #fff4e0;
            border-radius: 16px;
            padding: 1.2rem 1.4rem;
            border: 1px solid #ffe1b0;
            color: #7c4a00;
            line-height: 1.55;
        }

        .section-title {
            font-size: 1.05rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: #6d7da8;
            margin: 1.4rem 0 0.4rem;
        }

        @media (max-width: 768px) {
            .about-page {
                padding: 1.5rem 1rem 2.5rem;
            }

            .hero h1 {
                font-size: 2.2rem;
            }
        }
    </style>

    <div class="about-page">
        <div class="top-bar">
            <a class="back-link" href="<?= base_url('menu') ?>">
                <span aria-hidden="true">←</span>
                <span>Back</span>
            </a>
            <a class="cta-menu" href="<?= base_url('menu') ?>">Go to menu</a>
        </div>

        <section class="hero">
            <span class="badge">Terms of Use &amp; About</span>
            <h1>Head.AI</h1>
            <p>
                Head.AI is a free clinical decision-support platform for structured headache classification using
                GPT-4o–powered NLP and the ICHD-3 ontology. Below are the terms of use, platform purpose, and legal details.
            </p>
        </section>

        <article class="card">
            <div class="section-title">1. About</div>
            <h2>Origins and Concept</h2>
            <p>
                Head.AI is a free clinical decision-support platform conceived and led by
                <a href="http://lattes.cnpq.br/3171245597498498" target="_blank" rel="noopener noreferrer">João Brainer Clares de Andrade</a>,
                neurologist and researcher in Health Informatics. The system was designed based on the full methodology and
                results described in a peer-reviewed BMC Neurology publication validating accuracy, calibration, and diagnostic performance.
            </p>
            <p>
                The platform was partially programmed by
                <a href="https://www.linkedin.com/in/danielsciarotta?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">Daniel Zaveri</a>,
                who contributed to core backend components and infrastructure integration.
            </p>
            <p>
                Head.AI uses a GPT-4o–based natural language processing architecture combined with an expert-curated ICHD-3 ontology, integrating:
            </p>
            <ul>
                <li>The full hierarchical structure of the ICHD-3.</li>
                <li>A structured JSON knowledge base containing diagnostic criteria, codes, minimum episode durations, and phenotype metadata.</li>
                <li>Standardized prompt engineering, validity checks, and fallback routines to ensure output consistency.</li>
            </ul>
            <p>As demonstrated in the scientific validation (heatmaps in Figures 1–3 and logistic regression results), the platform achieved:</p>
            <ul>
                <li>89.5% first-hypothesis diagnostic accuracy, outperforming Claude Sonnet 4.0, Grok 3.0, and Gemini 2.5.</li>
                <li>A citation rate &gt;97%, with only 7/315 cases uncited.</li>
                <li>High calibration, with a Brier Score of 0.153.</li>
            </ul>
            <p>
                The platform supports multilingual input and outputs standardized diagnostic labels in English for clinical research interoperability.
                No user data are stored, retained, or repurposed. The system operates within a secure environment compatible with GDPR and LGPD requirements.
            </p>
            <p class="reference">
                Andrade JBC, Costa TLBS, Vasconcelos JL, Lopes TLM, Balsells MD, Cristofolini VL, Querobin SO, Rezende Filho FM.
                Validation of an AI-based platform for structured diagnosis of headache disorders using ICHD-3 criteria. BMC Neurol.
                2025;25:489. doi:10.1186/s12883-025-04473-1.
            </p>
            <div class="disclaimer">
                Head.AI is intended for educational and decision-support purposes only. It does not provide medical diagnosis, treatment recommendations,
                or clinical directives. Users remain fully responsible for interpreting results and exercising professional judgment.
            </div>

            <div class="section-title">2. Purpose of the Platform</div>
            <h2>Scope</h2>
            <p>
                Head.AI is an online clinical decision-support and educational tool designed to assist users in structured classification of headache disorders based on the ICHD-3.
                The Platform uses NLP powered by GPT-4o and a curated knowledge base developed by experts.
            </p>
            <p>
                The Platform does not provide medical diagnosis, medical advice, therapeutic indication, or professional clinical services.
                All information is generated automatically and must be interpreted cautiously and critically.
            </p>

            <div class="section-title">3. No Medical Advice</div>
            <p>The Platform is not intended to substitute:</p>
            <ul>
                <li>Clinical judgment or specialized neurological evaluation.</li>
                <li>Professional diagnosis or therapeutic decision-making.</li>
                <li>Emergency medical assessment.</li>
            </ul>
            <p>Users agree that:</p>
            <ul>
                <li>The Platform does not establish a doctor–patient relationship.</li>
                <li>Results must not be used as the sole basis for diagnosis, treatment, or clinical decisions.</li>
                <li>The Platform cannot and does not guarantee accuracy, despite validated performance described in scientific publications.</li>
            </ul>

            <div class="section-title">4. User Responsibilities</div>
            <p>By using the Platform, the user agrees to:</p>
            <ul>
                <li>Independently verify any information produced.</li>
                <li>Exercise full professional judgment before acting on any output.</li>
                <li>Assume all risks associated with clinical decisions.</li>
                <li>Use the Platform only for lawful, ethical, and non-diagnostic purposes.</li>
                <li>Not rely on the Platform for medical emergencies or time-sensitive conditions.</li>
            </ul>

            <div class="section-title">5. Privacy &amp; Data</div>
            <h2>Data Handling</h2>
            <p>The Platform:</p>
            <ul>
                <li>Does not store, retain, or reuse user-submitted clinical data.</li>
                <li>Uses encrypted communication.</li>
                <li>Operates in compliance with relevant data protection regulations, including GDPR and LGPD.</li>
            </ul>
            <p>Users are responsible for ensuring that the information they enter does not contain identifiable patient data, unless allowed by applicable law and handled in accordance with institutional policies.</p>

            <div class="section-title">6. Accuracy and Limitations</div>
            <p>
                While the Platform demonstrated high diagnostic performance in published research—including 89.5% accuracy for first-hypothesis predictions and robust calibration (Brier Score 0.153)—the user acknowledges that:
            </p>
            <ul>
                <li>These results were derived from synthetic clinical vignettes.</li>
                <li>Real-world language variability, comorbidities, and ambiguity may alter performance.</li>
                <li>No system guarantees full correctness, completeness, or applicability.</li>
                <li>The Platform may generate incomplete, inconsistent, or non-clinically appropriate responses.</li>
            </ul>
            <p>The Platform is provided “as is” without warranties, express or implied.</p>

            <div class="section-title">7. Intellectual Property</div>
            <p>
                All intellectual property rights related to system design, knowledge base, clinical ontology, written content, research methodology, and platform architecture
                are owned by João Brainer Clares de Andrade. Users may not copy, reproduce, distribute, or modify the Platform or its outputs without prior written authorization.
            </p>

            <div class="section-title">8. Limitation of Liability</div>
            <h2>Liability &amp; Legal</h2>
            <p>
                To the fullest extent permitted by law, the Platform, its creators, and contributors shall not be liable for any direct, indirect, incidental, consequential,
                or special damages arising from use or inability to use the Platform. The owner and contributors assume no responsibility for clinical decisions, outcomes,
                or patient management actions. Users accept full responsibility for any decisions or interpretations derived from the Platform’s outputs.
            </p>

            <div class="section-title">9. Amendments</div>
            <p>We may update or modify these Terms of Use at any time. Continued use of the Platform constitutes acceptance of the updated terms.</p>

            <div class="section-title">10. Governing Law</div>
            <p>
                These Terms shall be governed by and interpreted in accordance with the laws of Brazil and relevant international regulations regarding digital services
                and clinical decision-support tools.
            </p>
        </article>
    </div>
</body>
<?php $this->load->view('footer'); ?>
</html>
