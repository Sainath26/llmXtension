LLMXtension is a browser extension that enables users to right-click on any text on a website and select "Get it explained by LLM" from the context menu. This opens a popup window providing explanations and answers to the selected text/question, leveraging the power of Large Language Models (LLMs).

**Features**
- Context menu integration for seamless user experience
- Popup window with explanations and answers
- Utilizes Gemini API and Langchain for LLM functionality
- Localhost server for development and testing

**Installation**
1. Clone the repository: `git clone https://github.com/Sainath26/llmXtension`
2. Install dependencies: npm install (or yarn install)
3. Load the extension in your browser:
    - Google Chrome: chrome://extensions/, enable Developer mode, and load unpacked extension from the repository folder.
    - Mozilla Firefox: about:debugging, load temporary extension from the repository folder.
4. Navigate to the server folder and run `node server.js`. This will run the local server.
 
Usage
1. Right-click on any text on a website.
2. Select "Get it explained by LLM" from the context menu.
3. View explanations and answers in the popup window.


This project is actively being developed. Contributions and feature requests are welcome.
