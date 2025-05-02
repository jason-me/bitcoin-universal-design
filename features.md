---
layout: default
title: Accessibility Features
nav_order: 2
---

# Accessibility Features for Bitcoin Applications

The table below shows how accessibility features designed for specific users can create benefits for everyone:

| **Accessibility Feature** | **Who It Helps First** | **How It Helps Everyone** |
|-----------------------|--------------------|-----------------------|
| **Captions & Transcripts** | Deaf or hard-of-hearing users | Quiet or noisy environments, faster information parsing |
| **Voice Control / Keyboard Nav** | Limited mobility | Hands-free convenience, power-user efficiency |
| **High Contrast / Text Size** | Vision impairments | Sunlight use, aging eyes, general readability |
| **Simple UI & Terminology** | Cognitive impairments | Reduces mistakes, speeds up onboarding |
| **Colorblind-friendly design** | Colorblind users | Clearer and more distinguishable for everyone |
| **Larger tap targets / gestures** | Motor impairments | Fewer mis-taps on mobile, faster transactions |
| **Offline & Low-bandwidth Support** | Remote or resource-constrained users | Global access, better performance everywhere |

## Accessible Feature Implementation

### Visual Accessibility

#### **Use sufficient contrast ratios**
- Make sure text like addresses and balances have adequate contrast against backgrounds
    - [WCAG2](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) 4.5:1 for regular text and 3:1 for large bolded text(at least 14pt + bold or 18pt+). ([SC 1.4.3](https://www.w3.org/TR/WCAG22/#contrast-minimum))
    - [APCA](https://www.myndex.com/APCA/) Lightness contrast (Lc) 60+ for most text measured across both font size and weight
    

 #### **Don't rely solely on color to convey information**
- Use recognizable symbols, font weight, style, and other visual indicators alongside color coding to indicate information such as transaction status ([SC 1.4.1](https://www.w3.org/TR/WCAG22/#use-of-color))

#### Support text resizing and reflow without breaking layouts
    - Ensure addresses transaction details, and other important content remains fully visible and readable when users zoom to 200% ([SC 1.4.4](https://www.w3.org/TR/WCAG22/#resize-text))
    - When users zoom to 400% content structure reflows without loss of information or functionality ([SC 1.4.10](https://www.w3.org/TR/WCAG22/#reflow))

- **Test with screen readers for semantic structure**
    - Structure wallet dashboard elements within proper headings, regions, and semantic markup for easy navigation ([SC 1.3.1](https://www.w3.org/TR/WCAG22/#info-and-relationships))
    - Ensure links, buttons, and wallet controls have a name, role, and appropriate value to ensure screen reader users understand the controls name, state, and purpose ([SC 4.1.2](https://www.w3.org/TR/WCAG22/#name-role-value))

## 2. Cognitive Accessibility

- **Use clear, non-technical language**
    - Explain complex terminology like "private key", "UTXO", "XPUB", and "block confirmation" in plain language ([SC 3.1.5](https://www.w3.org/TR/WCAG22/#reading-level))

- **Provide contextual help and tooltips**
    - Include clear instructions alongside bitcoin address fields and transaction forms ([SC 3.3.2](https://www.w3.org/TR/WCAG22/#labels-or-instructions))

- **Break complex processes into manageable steps**
    - Create step-by-step wizards for wallet setup, backup procedures, and sending transactions ([SC 3.3.4](https://www.w3.org/TR/WCAG22/#error-prevention-legal-financial-data))

- **Use consistent patterns and visual cues**
    - Maintain the same layout and button positions for key actions like send, receive, and confirm ([SC 3.2.3](https://www.w3.org/TR/WCAG22/#consistent-navigation))

## 3. Motor Accessibility

- **Ensure touch targets are at least 24×24 pixels**
    - Make transaction buttons and navigation elements large enough for users with tremors ([SC 2.5.8](https://www.w3.org/TR/WCAG22/#target-size-minimum))

- **Provide keyboard-only navigation options**
    - Allow users to tab through controls and use keyboard shortcuts for common actions ([SC 2.1.1](https://www.w3.org/TR/WCAG22/#keyboard))

- **Minimize the need for precise gestures (e.g. dragging)**
    - Provide simple tap alternatives instead of requiring swipes or drags for transaction confirmation ([SC 2.5.1](https://www.w3.org/TR/WCAG22/#pointer-gestures))

- **Include confirmation steps for irreversible actions**
    - Add review screens and explicit confirmation dialogs before sending funds ([SC 3.3.4](https://www.w3.org/TR/WCAG22/#error-prevention-legal-financial-data))

## 4. Hearing Accessibility

- **Include visual alternatives to audio cues (such as visual alerts)**
    - Provide visible notifications for transaction confirmations and security alerts ([SC 1.1.1](https://www.w3.org/TR/WCAG22/#non-text-content))

- **Provide captions and transcripts for video content**
    - Add captions to all wallet tutorial videos ([SC 1.2.2](https://www.w3.org/TR/WCAG22/#captions-prerecorded))

- **Use multi-sensory notification methods**
    - Combine visual indicators, sounds, and haptic feedback when transactions are confirmed ([SC 1.3.3](https://www.w3.org/TR/WCAG22/#sensory-characteristics))

## 5. Situational Constraints

- **Design for offline functionality**
    - Allow users to view balances and prepare transactions without internet connection (**BP**)  
    _Best practice for resilience; critical for users in unstable network environments._

- **Optimize for low bandwidth**
    - Create lightweight interfaces that function on slow connections in developing regions (**BP**)  
    _Best practice to ensure usability in low-resource settings where full media loads may fail._

- **Consider environmental factors (sunlight, noise, distraction)**
    - Design interfaces that remain usable in bright sunlight and distracting environments ([SC 1.4.3 Contrast (Minimum)](https://www.w3.org/TR/WCAG22/#contrast-minimum), [SC 1.4.11 Non-Text Contrast](https://www.w3.org/TR/WCAG22/#non-text-contrast))  
    _Ensures text, icons, and essential controls remain visible and usable under harsh visual conditions._

[See Real-World Examples →](examples.html)


