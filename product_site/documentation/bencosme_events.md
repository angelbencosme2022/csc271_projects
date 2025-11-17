Here’s how to apply the three steps **based on your code**—this is essentially the “event-handling pattern” your professor wants you to demonstrate:

---

# ✅ **1. Select the element(s) you want the script to respond to**

Use **querySelector** or **querySelectorAll** to target HTML elements.

Examples from your script:

```js
const navLinks = document.querySelectorAll(".header-nav a");
```

```js
const onboardingButton = document.createElement("button");
```

```js
const sections = document.querySelectorAll("main section");
```

---

# ✅ **2. Specify which event will trigger the response**

This is done using `addEventListener()` or an inline `onclick`.

Examples from your script:

### Mouse events:

```js
link.addEventListener("mouseover", function () { ... });
link.addEventListener("mouseout", function () { ... });
```

### Keyboard events:

```js
link.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    this.click();
  }
});
```

### Click event:

```js
onboardingButton.onclick = userOnboarding;
```

---

# ✅ **3. Define the code (or function) that will run when the event occurs**

You can:

### 👉 Write the logic inline

```js
link.addEventListener("focus", function () {
  this.style.outline = "2px solid #4CAF50";
});
```

### 👉 Or point to a function

```js
onboardingButton.onclick = userOnboarding;
```

`userOnboarding()` is a full function that then runs a decision tree.

---

# ✔ **Putting all 3 steps together in one example**

### Example from your script:

```js
const navLinks = document.querySelectorAll(".header-nav a");

for (let i = 0; i < navLinks.length; i++) {
  const link = navLinks[i];

  // (2) Event: mouseover
  link.addEventListener("mouseover", function () {

    // (3) Code that runs on hover
    this.style.transform = "translateY(-2px)";
  });
}
```

Broken down:

### **1. Select element(s):**

```js
const navLinks = document.querySelectorAll(".header-nav a");
```

### **2. Specify event:**

```js
link.addEventListener("mouseover", ...)
```

### **3. Define the code that runs:**

```js
this.style.transform = "translateY(-2px)";
```

---

# ✔ Another example from your script

### **Decision Tree Button**

**1. Select or create element:**

```js
const onboardingButton = document.createElement("button");
```

**2. Specify event:**

```js
onboardingButton.onclick = userOnboarding;
```

**3. Define function:**
(`userOnboarding()` defined above in full)

---