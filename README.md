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



