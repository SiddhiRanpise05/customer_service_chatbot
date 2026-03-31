# Customer Service Chatbot

This is a simple **customer service chatbot** prototype built using **HTML, CSS, and JavaScript**. It can help users:  
1. Track a lost package  
2. Choose the right product (e.g., laptop, phone plan)  
3. Guide through simple technical troubleshooting  

---

## **Setup / Installation**

1. **Clone or download the repository**  
```bash
git clone <your-repo-url>
````

2. **Navigate to the project folder**

```bash
cd <your-project-folder>
```

3. **Open `index.html` in a web browser**

* No server or installation required — the chatbot runs completely in the browser.
* Recommended browsers: **Chrome, Edge, Firefox**.

4. **Optional: Run with Live Server in VS Code**

* If you want a live-reload development environment:

  1. Install the **Live Server extension** in VS Code.
  2. Right-click `index.html` → **Open with Live Server**.

---

## **Approach / Explanation**

The chatbot is designed using a **flow-based conversation model**. Key features of the approach:

1. **Conversation Design**

* Each user request (track package, choose product, troubleshoot) has a **dedicated flow**.
* Users remain in the current flow until they complete it or choose “Back to Menu.”
* Buttons and text input allow easy interaction and navigation.

2. **State Management**

* JavaScript tracks the **current state** of the conversation (start, menu, track, product, troubleshoot, feedback).
* This ensures the chatbot responds appropriately to each user input.

3. **Error Handling**

* Invalid tracking IDs trigger friendly error messages.
* Unexpected text input is handled with prompts like “Sorry, I didn’t understand.”

4. **Simulated Data**

* Three sample tracking IDs are included for demonstration:

  * `12345678` → In Transit
  * `87654321` → Out for Delivery
  * `11223344` → Delivered

5. **UI / UX Design**

* Centered chat window with a clean interface.
* Color-coded messages: bot = blue, user = green, errors = red.
* Supports pressing **Enter** to submit input.

---

## **Screenshots**



✅ **Tips:**  
- Replace `<your-repo-url>` and `<your-project-folder>` with your actual GitHub repository URL and folder name.  
- After adding screenshots, you can include them like:  

```markdown
![Tracking Example](screenshots/tracking.png)
![Product Flow](screenshots/product.png)
````

---
Generate a complete PowerPoint-ready content for my Customer Service Chatbot project. Include all slides with titles, bullet points, explanations, and the flowchart for Slide 2. Format it clearly so I can copy-paste directly into PowerPoint. Use the following structure:

Slide 1 – Your Design Choices
- Title: Chatbot Design Choices
- Content:
  • Purpose: Provide quick customer support for package tracking, product selection, and troubleshooting.
  • Conversation Design:
      - Flow-based decision tree ensures clear paths for each user need.
      - Buttons/options guide the user while still allowing text input.
      - Keeps the user on the current flow until they choose “Back to Menu.”
  • UI Choices:
      - Chat window centered on screen, previous messages persist for context.
      - Clean, simple colors: bot messages in blue, user messages in green, errors in red.
  • Error Handling:
      - Invalid tracking IDs show temporary messages.
      - Unexpected text triggers friendly error prompts.
- Note: Include a screenshot of the chatbot UI.

Slide 2 – Conversation Flow / Flowchart
- Title: Chatbot Conversation Flow
- Content (text flowchart for PowerPoint):
Start
  │
  ▼
Hi! What can I help you with? (Main Menu)
  │
  ├─ Track Package → Enter Tracking ID
  │       │
  │       ├─ Invalid ID (less than 8 or >12 chars) 
  │       │         → ❌ Invalid tracking ID → loop back to Enter Tracking ID
  │       │
  │       ├─ Valid ID
  │       │     │
  │       │     ├─ ID exists → 📦 Show Status → Enter another ID or Back to Menu
  │       │     │
  │       │     └─ ID not found → ⚠️ Report as lost? 
  │       │                        Yes → ✅ Complaint submitted → loop back to Enter Tracking ID
  │       │                        No → Back to Tracking Menu
  │
  ├─ Choose Product → Select product type
  │       │
  │       ├─ Laptop → Recommended: 16GB RAM Laptop → Choose another / Back to Menu
  │       ├─ Phone Plan → Recommended: Unlimited Data Plan → Choose another / Back to Menu
  │       └─ Unknown input → ❌ Sorry, I didn’t understand → loop back to Select product
  │
  └─ Troubleshoot → Select issue
          │
          ├─ Internet → Step 1: Restart Router → Did it fix? 
          │                  Yes → ✅ Glad I could help → Back to Troubleshoot / Menu
          │                  No → 👨‍💻 Escalate to human support
          ├─ Device → Step 1: Hold power button 10 sec → Did it fix? 
          │                  Yes → ✅ Glad I could help → Back to Troubleshoot / Menu
          │                  No → 👨‍💻 Escalate to human support
          └─ Unknown input → ❌ Sorry, I didn’t understand → loop back to Select issue
- Note: Rectangle = message, Diamond = decision, Colors: Bot=Blue, User=Green, Error=Red, Decision=Yellow.

Slide 3 – Technical Implementation
- Title: Technical Implementation
- Content:
  • Front-End: HTML/CSS for chat UI design.
  • JS handles conversation state, user input, and dynamic responses.
  • Features Implemented:
      - Error Handling: Invalid Tracking ID, unknown input.
      - Tracking Data Simulation: 3 sample IDs (12345678, 87654321, 11223344).
      - Persistent Flows: Users remain in current screen until “Back to Menu.”
  • Keyboard Support: Enter key submits messages.
- Note: Include a small JS snippet showing error handling.

Slide 4 – Challenges Faced & Future Improvements
- Title: Challenges & Improvements
- Challenges:
  • Managing conversation state across multiple flows.
  • Handling unexpected user inputs gracefully.
  • Ensuring UI stays clean and readable.
- Future Improvements:
  • Connect to real backend for tracking IDs.
  • Integrate AI/NLP for flexible conversation instead of fixed buttons.
  • Add user personalization/login.
  • Improve UI/UX with animations and transitions.
  • Add more customer service flows like returns, refunds, payments.
- Note: Use two-column layout in PowerPoint (left: challenges, right: improvements).


