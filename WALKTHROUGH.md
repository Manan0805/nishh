# Nishhu's Birthday Website — Walkthrough & Summary

A handcrafted, interactive, mobile-first birthday website created by **Mann** for **Nishhu** for her birthday on **7 October 2026**, commemorating their special **3 October 2026** memory.

---

## 🎨 Visual Identity & Emotional Balance

The website strikes the exact intended balance:
- **40% Cute & Tender**
- **30% Playful & Teasing**
- **20% Emotional & Grounding**
- **10% Romantic**

### Color Palette
- **Base Background**: Warm Ivory & Cream (`#FAF7F2`, `#FDFBF7`) with subtle paper grain texture
- **Warm Accents**: Soft Blush Pink (`#F4DCD6`, `#EAA89B`, `#DE8373`)
- **Organic Details**: Muted Sage Green (`#CFDBCB`, `#8DA387`)
- **Typography**: Editorial Serif (*Cormorant Garamond* / *Playfair Display*) paired with clean modern sans-serif (*Plus Jakarta Sans*) in warm charcoal text (`#2C2520`).

---

## 📱 Interactive Sections Breakdown

### 1. Opening Screen (`OpeningScreen.tsx`)
- Elegant staggered text entrance:
  - *"Hiii Nishuu 👀"*
  - *"You were probably expecting a birthday paragraph from me."*
  - *"Unfortunately for you... I decided to show off a little. 😂"*
  - *"So I made you something."*
  - *"Happy birthday, birthday girl. ❤️"*
- Fullscreen ivory-blush background with gentle floating botanical petals.
- Tactile CTA: `come on, birthday girl →` with smooth auto-scroll.

### 2. 7 Things I Like About You (`SevenThings.tsx`)
- Subtitle: *"Since it's your birthday on the 7th, here's a little list."*
- Seven interactive cards with smooth tap-to-expand / accordion reveal:
  1. **Your Eyes**: *"Still not over them. I genuinely could stare at them for an unnecessarily long amount of time. 👀"*
  2. **Your Sleepy Face**: *"Especially after that cab ride on 3rd October. You looked ridiculously cute, and you didn't even know it. 😂"*
  3. **Your Attitude**: *"Sometimes you act like you don't need anyone. And then somehow you end up being the cutest person ever. Very confusing behaviour, Nishhu. 😂"*
  4. **Your Voice**: *"Especially when you're tired. I don't even know how to explain this one. I just really like listening to you."*
  5. **Your Random Rants**: *"One minute we're discussing something serious. The next minute we're talking absolute nonsense. And somehow, I enjoy both equally. 😂"*
  6. **Your Trust**: *"I know trusting someone isn't always easy for you. And I genuinely appreciate the little moments when you feel comfortable enough to be yourself around me."*
  7. **You** *(Visually distinct with rose-gold gradient, heart badge, and accented highlight)*: *"Honestly, I could keep going. But then you'd get too confident. And we absolutely cannot allow that. 😌"*
- Live counter tracking revealed cards (`x of 7 uncovered`).

### 3. The 03.10.2026 Cab Ride Memory (`MemoryJournal.tsx`)
- Scrapbook memory-journal style with washi-tape detail and polaroid layout.
- The full cab ride narrative honoring the peaceful moment where Nishhu fell asleep on Mann's shoulder.
- Atmospheric night cab-window graphic with glowing bokeh city lights and raindrops.
- Includes Mann's interactive photo slot where real photos can be previewed or permanently placed.
- Ending playfully: *"You officially owe my shoulder another nap. 😌"*

### 4. Something I Want You to Remember (`RememberSection.tsx`)
- Calm, warm reassurance section.
- Gentle botanical illustrations framing the message.
- Reassures Nishhu without guilt or pressure:
  - *"You deserve moments where you don't have to overthink everything."*
  - *"Moments where you can laugh without worrying about what happens next."*
  - *"Moments where you can simply enjoy being yourself."*
  - *"Also... I hope I get to annoy you through at least a few of them. 😂🫂"*

### 5. It's The Little Things (`LittleThings.tsx`)
- Interactive cards/vignettes for the favorite moments:
  - *Random conversations*
  - *Your stupid jokes*
  - *Our FaceTime calls*
  - *Holding hands*
  - *Hugs*
  - *Falling asleep on my shoulder*
  - *Playing with your hair*
- Tapping any moment uncovers sweet, handwritten-style notes.

### 6. Before You Go... (`BeforeYouGo.tsx`)
- Organic reflection on how a random Bumble connection turned into something genuinely valued:
  *"So here's to more good conversations, more laughter, and hopefully a lot more happy memories. One day at a time. 🫂"*

### 7. Birthday Finale & Final Surprise (`BirthdayFinale.tsx` & `FinalSurpriseModal.tsx`)
- Full-screen centerpiece letter signed:
  *"Yours lovingly, Mann"*
- Large CTA button: `one last thing →`
- Clicking reveals the playful final modal:
  *"Waitttt. You thought I was finally done? 😂 Okay, fine. I'll stop annoying you now. Enjoy your birthday, Nishhu. And smile a little, okay? — Mann 🫶"*
- An animated blooming flower SVG and a gentle shower of rose, cream, and sage petals.

---

## 🚀 How to Run & Deploy

```bash
# Start local development server
npm run dev
```

### Deploying to Netlify / Vercel:
- The production build is compiled in the `dist` directory.
- You can drag-and-drop the `dist` folder into Netlify Drop ([app.netlify.com/drop](https://app.netlify.com/drop)) for an instant live URL.
- Or push the repository to GitHub and import it into Vercel for continuous deployment.
