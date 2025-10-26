# Somnia.ai

### An Intelligent Sleep & Dream Wellness Application


**Live Demo:** [https://aperry938.github.io/somnia-ai-wellness-app/](https://aperry938.github.io/somnia-ai-wellness-app/)

---

## Project Vision

Somnia.ai is a comprehensive wellness application designed to transform our relationship with sleep and the subconscious. It replaces the traditional alarm clock with an intelligent, multi-functional ecosystem that assists the user through the entire sleep cycle—from pre-sleep relaxation to post-waking dream analysis. By leveraging a state-of-the-art AI, Somnia.ai serves as a personalized sleep coach, dream interpreter, and data analyst, providing users with profound insights into their inner world.

This project was architected as a single-page application using modern web technologies, with a focus on a serene, futuristic user experience and robust, science-backed functionality.

## Core Features

### 🌙 The Sleep Gateway: Prepare for Rest
- **AI Sleep Coach:** A conversational AI providing personalized, evidence-based advice for improving sleep hygiene.
- **Evening Reflection:** Log qualitative data about your day—including a 1-5 rating and personal notes—to provide the AI with crucial context for analysis.
- **Science-Backed Soundscapes:** A library of programmatically generated audio environments (White, Pink, Brown Noise), binaural beats (Delta, Theta, Alpha waves), and high-fidelity natural sounds, all with custom duration controls.
- **Live Guided Relaxation:** Interactive, multi-sensory breathing exercises (4-7-8 Breathing, Box Breathing) with perfectly synchronized audio-visual cues to calm the nervous system.
- **Sleep Preparation Checklist:** An interactive checklist to encourage scientifically-backed sleep hygiene practices, with all data logged for nightly analysis.

### ☀️ The Ascent: Awaken with Intention
- **Adaptive Progressive Alarm:** A gentle yet effective alarm that starts with low-frequency tones and gradually increases in volume and complexity, waking the user at the lowest necessary intensity.
- **The Dream Scribe:** A modal that appears upon waking, allowing for immediate dream capture via text or voice-to-text transcription powered by the browser's SpeechRecognition API.
- **Sleep Quality Rating:** A sophisticated star-rating system to log subjective sleep quality for data correlation.

### 🔮 The Chronicle: Explore Your Inner World
- **AI-Powered Dream Analysis:** Each dream is analyzed by "The Oneironaut," an AI persona engineered to deliver deep, insightful interpretations based on principles from psychology, mythology, and somatic wisdom.
- **AI-Generated Dream Visualization:** A unique, artistic image is generated for every dream, providing a stunning visual representation of the subconscious narrative. These images can be viewed in a full-screen, immersive modal.
- **Interactive AI Dialogue:** After receiving the initial analysis, users can engage in a follow-up conversation with the AI to explore specific symbols and themes in greater depth.
- **Persistent Journal:** A chronological log of all dreams, featuring their AI-generated titles and visual thumbnails for easy browsing.

### 📊 The Insights Hub: Discover Yourself
- **Biometrics & Personalization:** A dedicated section to log personal data (age, gender, average sleep) to fuel deeper AI customization.
- **Sleep Quality Trends:** A responsive line chart that provides an intuitive, at-a-glance visualization of sleep quality over time.
- **AI Dream Weaving:** A powerful analytical tool that synthesizes the user's entire dream journal to identify and interpret recurring themes, symbols, and narrative patterns.
- **AI Sleep Science:** An intelligent analyst that correlates sleep preparation habits and daily well-being with sleep quality outcomes, providing data-driven recommendations for experimentation.

## Technical Architecture
- **Frontend:** Built with **React** and **TypeScript** for a robust, type-safe, and component-based architecture.
- **Styling:** Styled with **Tailwind CSS** for a responsive and modern user interface, featuring a dynamic Day/Night theme.
- **AI Integration:** Powered by the **Google Gemini API** for all generative features, including dream analysis, image generation, and conversational AI.
- **Audio:** Utilizes the **Web Audio API** for programmatically generating all soundscapes, binaural beats, and the progressive alarm sound, ensuring high performance and offline capability.
- **Data Persistence:** All user data (alarms, dreams, biometrics) is saved locally using the browser's **LocalStorage API**.

## Setup & Running
This project is a self-contained single-page application. To run it locally:
1.  Clone or download the repository.
2.  Open the `index.html` file in any modern web browser.
3.  To enable AI features, you must set your Google Gemini API key as an environment variable (`process.env.API_KEY`) in a compatible development environment.

---

Created by **Anthony Perry**.
