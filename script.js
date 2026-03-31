let state = "start";
let errorCount = 0;

// -------------------
// Fake tracking database
// -------------------
const trackingData = {
  "12345678": "In Transit 🚚",
  "87654321": "Out for Delivery 🏠",
  "11223344": "Delivered ✅"
};

// -------------------
// Add message to chat
// -------------------
function addMessage(text, sender="bot") {
  const chatBox = document.getElementById("chat-box");
  const msg = document.createElement("div");
  msg.className = sender;
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// -------------------
// Show buttons/options
// -------------------
function showOptions(options) {
  const container = document.getElementById("options");
  container.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt.label;
    btn.className = "option-btn";
    btn.onclick = () => handleInput(opt.value);
    container.appendChild(btn);
  });
}

// -------------------
// Send message from input
// -------------------
function sendMessage() {
  const input = document.getElementById("user-input");
  const text = input.value.trim();
  if (!text) return;
  handleInput(text);
  input.value = "";
}

// -------------------
// Temporary error messages
// -------------------
let errorTimeout;
function showError(text) {
  const chatBox = document.getElementById("chat-box");
  const previousError = document.getElementById("error-msg");
  if (previousError) previousError.remove();

  const msg = document.createElement("div");
  msg.className = "bot";
  msg.id = "error-msg";
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;

  clearTimeout(errorTimeout);
  errorTimeout = setTimeout(() => { msg.remove(); }, 3000);
}

// -------------------
// Clear chat
// -------------------
function clearChat() {
  document.getElementById("chat-box").innerHTML = "";
  document.getElementById("options").innerHTML = "";
}

// -------------------
// Main input handler
// -------------------
function handleInput(input) {
  if (input) addMessage(input, "user");

  // -------------------
  // Handle "Back to Menu"
  // -------------------
  if (input.toLowerCase() === "back") {
    state = "start";
    handleInput(""); // return to main menu
    return;
  }

  // -------------------
  // START / MAIN MENU
  // -------------------
  if (state === "start") {
    clearChat();
    addMessage("Hi! What can I help you with?");
    showOptions([
      { label: "Track Package", value: "track" },
      { label: "Choose Product", value: "product" },
      { label: "Troubleshoot", value: "troubleshoot" }
    ]);
    state = "menu";
    return;
  }

  // -------------------
  // MENU SELECTION
  // -------------------
  if (state === "menu") {
    if (input === "track") {
      state = "track";
      clearChat();
      addMessage("Please enter your tracking ID:");
      showOptions([]);
      return;
    }
    if (input === "product") {
      state = "product";
      clearChat();
      addMessage("What product are you looking for?");
      showOptions([
        { label: "Laptop", value: "laptop" },
        { label: "Phone Plan", value: "plan" }
      ]);
      return;
    }
    if (input === "troubleshoot") {
      state = "troubleshoot";
      clearChat();
      addMessage("What issue are you facing?");
      showOptions([
        { label: "Internet not working", value: "internet" },
        { label: "Device not turning on", value: "device" }
      ]);
      return;
    }
    return handleError(); // example 2: unknown input at menu
  }

  // -------------------
  // TRACK FLOW
  // -------------------
  if (state === "track") {
    // ----- Example 1: Invalid Tracking ID -----
    if (!input || input.length < 8 || input.length > 12) {
      showError("❌ Invalid tracking ID (8–12 chars). Try again.");
      return; // <-- stays in tracking flow, does NOT go to handleError
    }

    // Check if tracking ID exists in database
    addMessage("Checking your package...");
    setTimeout(() => {
      if (trackingData[input]) {
        const chatBox = document.getElementById("chat-box");
        const msg = document.createElement("div");
        msg.className = "status-msg";
        msg.innerText = `📦 Status for ${input}: ${trackingData[input]}`;
        chatBox.appendChild(msg);
        chatBox.scrollTop = chatBox.scrollHeight;

        addMessage("You can enter another tracking ID or click 'Back to Menu'.");
        showOptions([{ label: "Back to Menu", value: "back" }]);
      } else {
        addMessage("⚠️ Package not found. Report as lost?");
        showOptions([
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
          { label: "Back to Menu", value: "back" }
        ]);
        state = "lostConfirm";
      }
    }, 500);
    return;
  }

  // -------------------
  // LOST PACKAGE CONFIRMATION
  // -------------------
  if (state === "lostConfirm") {
    if (input === "yes") addMessage("✅ Your request has been submitted. Our team will contact you.");
    else addMessage("Okay, returning to tracking menu.");

    state = "track";
    addMessage("You can enter another tracking ID or click 'Back to Menu'.");
    showOptions([{ label: "Back to Menu", value: "back" }]);
    return;
  }

  // -------------------
  // PRODUCT FLOW
  // -------------------
  if (state === "product") {
    if (input === "laptop") addMessage("Recommended: 16GB RAM, SSD laptop.");
    else if (input === "plan") addMessage("Recommended: Unlimited data plan under budget.");
    else return handleError(); // example 2: unknown input in product

    addMessage("You can choose another product or click 'Back to Menu'.");
    showOptions([
      { label: "Laptop", value: "laptop" },
      { label: "Phone Plan", value: "plan" },
      { label: "Back to Menu", value: "back" }
    ]);
    return;
  }

  // -------------------
  // TROUBLESHOOT FLOW
  // -------------------
  if (state === "troubleshoot") {
    if (input === "internet") addMessage("Step 1: Restart your router.");
    else if (input === "device") addMessage("Step 1: Hold the power button for 10 seconds.");
    else return handleError(); // example 2: unknown input in troubleshoot

    addMessage("Did this fix your issue?");
    showOptions([
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
      { label: "Back to Menu", value: "back" }
    ]);
    state = "feedback";
    return;
  }

  // -------------------
  // FEEDBACK FLOW
  // -------------------
  if (state === "feedback") {
    if (input === "yes") addMessage("✅ Glad I could help!");
    else addMessage("👨‍💻 Escalating to human support...");

    state = "troubleshoot";
    addMessage("You can choose another issue or click 'Back to Menu'.");
    showOptions([
      { label: "Internet not working", value: "internet" },
      { label: "Device not turning on", value: "device" },
      { label: "Back to Menu", value: "back" }
    ]);
    return;
  }
}

// -------------------
// Handle unrecognized input
// -------------------
function handleError() {
  errorCount++;
  if (errorCount >= 2) {
    showError("⚠️ I'm having trouble understanding. Connecting you to an agent...");
    errorCount = 0;
  } else {
    showError("❌ Sorry, I didn’t understand. Please try again.");
  }
}

// -------------------
// INIT
// -------------------
window.onload = () => {
  handleInput("");
  document.getElementById("user-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") sendMessage();
  });
};