// English long-form landing pages. Each targets one search intent cluster found in
// Google autocomplete research (Nov 2026) and answers it directly in the first
// paragraph, so search engines and AI assistants can quote it.
// Claims must match AutoBurst/AppStore/PRODUCT_FACTS.md.

export interface Guide {
  slug: string;
  navLabel: string;
  title: string; // <title>, ~60 chars
  description: string; // meta description, ~155 chars
  h1: string;
  answer: string; // answer-first summary
  keyPoints: string[];
  stepsTitle: string;
  steps: { t: string; d: string }[];
  shot: number; // UI capture 1-9
  shotAlt: string;
  chip?: string;
  body: string; // HTML
  faq: { q: string; a: string }[];
  related: string[];
}

export const GUIDES: Guide[] = [
  {
    slug: 'iphone-self-timer-burst',
    navLabel: 'iPhone self timer burst',
    title: 'iPhone Self Timer Burst: Take Multiple Photos with a Timer',
    description:
      'Why the iPhone camera timer takes 10 photos, how to control it, and how to get a self timer that shoots as many photos as you want at the interval you choose.',
    h1: 'How to take multiple photos with the iPhone self timer',
    answer:
      'The built-in iPhone Camera timer (3 or 10 seconds) takes a short, fixed burst when Live Photos is off, and you cannot choose how many photos it takes or how far apart they are. To get a self timer that keeps shooting, use a camera app with a timed burst. In BuzzCam, Timed mode counts down 3, 5 or 10 seconds and then shoots a burst at the interval you pick (from about 0.1 s to 3 s) until you stop it or hit the count or duration you set.',
    keyPoints: [
      'iPhone Camera timer: 3 or 10 s, short fixed burst, no interval control',
      'BuzzCam Timed: 3, 5 or 10 s, then a burst you control',
      'Shot interval: Fastest (about 0.1 s), 0.4 s, 1 s, 2 s or 3 s',
      'Stop by photo count, by duration, or with a second tap',
      'Countdown light flashes the torch so you can see the timer from afar',
    ],
    stepsTitle: 'How to shoot a timed burst with BuzzCam',
    steps: [
      { t: 'Set up the iPhone', d: 'Put it on a tripod or a steady surface and frame the shot with the rear camera.' },
      { t: 'Choose Timed', d: 'Switch the mode at the bottom of the viewfinder to Timed, then pick a 3, 5 or 10 second countdown.' },
      { t: 'Pick an interval and a limit', d: 'Fastest for action, 1 to 3 s for posing. Optionally set a maximum number of photos or a duration.' },
      { t: 'Tap the shutter and get in place', d: 'After the countdown BuzzCam shoots a burst. Tap the shutter again to stop.' },
    ],
    shot: 3,
    shotAlt: 'BuzzCam in Timed mode with a 10 second countdown and Countdown light on',
    chip: 'Timed · 10 s',
    body: `
<h2>Why does the iPhone camera timer take 10 photos?</h2>
<p>When you set the timer in the iPhone Camera app and Live Photos is off, the camera fires a quick burst of about ten frames instead of a single shot. Apple does this so one closed eye doesn't ruin the picture. With Live Photos on, the timer takes a single Live Photo instead. The exact behavior depends on your iOS version and camera settings.</p>
<p>That burst helps, but it has limits that matter when you're photographing yourself:</p>
<ul>
  <li>The burst is short and the frames are very close together, so you can't change pose between them.</li>
  <li>You can't choose how many photos it takes or the time between shots.</li>
  <li>Every new pose means walking back to the phone and starting the timer again.</li>
  <li>There are only two countdown lengths: 3 and 10 seconds.</li>
</ul>

<h2>How to set the timer on the iPhone Camera</h2>
<p>Open Camera, open the camera controls (tap the arrow at the top of the screen or swipe up on the viewfinder, depending on your iOS version), tap the timer icon and choose 3s or 10s. Then press the shutter. To get a single photo instead of a burst, turn Live Photos on.</p>

<h2>A self timer that keeps shooting: BuzzCam Timed mode</h2>
<p>BuzzCam was built for the moment the built-in timer ends. In <strong>Timed</strong> mode, the countdown is 3, 5 or 10 seconds, and then a burst starts that keeps going until you stop it. You decide the rhythm:</p>
<table>
  <thead><tr><th>Shot interval</th><th>Good for</th></tr></thead>
  <tbody>
    <tr><td>Fastest (about 0.1 s target)</td><td>Jumps, spins, hair flips, kids running</td></tr>
    <tr><td>0.4 s</td><td>Walking shots, laughing, natural movement</td></tr>
    <tr><td>1 s</td><td>Small pose changes, solo travel portraits</td></tr>
    <tr><td>2–3 s</td><td>Outfit photos and full poses, couples changing position</td></tr>
  </tbody>
</table>
<p>Actual speed depends on your iPhone, the resolution, the format and processing. 48 MP and ProRAW frames take longer to save than 12 MP HEIF.</p>

<h2>See the countdown from across the street</h2>
<p>A phone screen is hard to read from five meters away. Turn on <strong>Countdown light</strong> and the torch flashes during the countdown (on iPhones with a torch), so you know when the burst is about to begin.</p>

<h2>Skip the countdown entirely</h2>
<p>If you don't want to guess when to be ready, use <a href="/smile-shutter/">Automatic Capture</a> instead. BuzzCam waits until you smile, look at the lens, or until everyone is in the frame, and shoots then.</p>

<h2>Where do burst photos go?</h2>
<p>BuzzCam saves every frame straight to Apple Photos as a normal photo, not a collapsed burst stack, so you can scroll through them, favorite the best ones and delete the rest. A button in the app opens Photos directly.</p>
`,
    faq: [
      { q: 'Can the iPhone timer take more than 10 photos?', a: 'Not with the built-in Camera app. Its timer burst is fixed. BuzzCam’s Timed mode keeps shooting until you stop it, or until a photo count or duration you set.' },
      { q: 'How do I stop the iPhone timer from taking a burst?', a: 'In the iPhone Camera app, turn Live Photos on and the timer takes one Live Photo. In BuzzCam, use Photo mode for single shots.' },
      { q: 'Can I set a 5 second timer on iPhone?', a: 'The built-in Camera offers 3 and 10 seconds. BuzzCam offers 3, 5 and 10 seconds.' },
      { q: 'What interval should I use for posing?', a: 'Use 1 s for small changes and 2 to 3 s when you want to move into a new pose between frames.' },
    ],
    related: ['solo-travel-photos', 'outfit-photos', 'smile-shutter'],
  },
  {
    slug: 'smile-shutter',
    navLabel: 'Smile shutter camera',
    title: 'Smile Shutter for iPhone: Camera That Shoots When You Smile',
    description:
      'BuzzCam is an iPhone camera app that takes the picture automatically when someone smiles, looks at the lens, faces the camera or when everyone is in the frame.',
    h1: 'A camera app that takes the picture when you smile',
    answer:
      'BuzzCam has a smile shutter for iPhone. Open Automatic Capture, choose Smiling, tap the shutter once and put the phone down: the camera waits and takes the photo when it detects a smile. It can also trigger on a person in frame, a visible face, someone facing the camera, someone looking at the lens, or a minimum of 1 to 10 people. Detection runs on the iPhone and nothing is uploaded.',
    keyPoints: [
      'Conditions: Person in frame, Face visible, Smiling, Facing the camera, Looking at the lens',
      'Minimum people 1 to 10, counted among people who meet the condition',
      'Optional: Wait for a steady pose',
      'Works with Photo and Burst; Burst pauses when the condition is lost',
      'Detects people only, not pets',
    ],
    stepsTitle: 'How to use the smile shutter',
    steps: [
      { t: 'Open Automatic Capture', d: 'Tap the face icon at the top of the viewfinder.' },
      { t: 'Choose Smiling', d: 'Slide to Smiling. Set Minimum people if more than one person must smile.' },
      { t: 'Tap the shutter to start waiting', d: 'BuzzCam shows “Waiting for conditions”. Nothing is captured yet.' },
      { t: 'Smile', d: 'When the condition is met, the shutter fires. In Burst it keeps shooting while you smile. Tap again to end.' },
    ],
    shot: 1,
    shotAlt: 'BuzzCam shooting automatically as four friends smile, with Smiling selected',
    chip: 'Smiling',
    body: `
<h2>What each Automatic Capture condition does</h2>
<table>
  <thead><tr><th>Condition</th><th>The shutter fires when…</th><th>Use it for</th></tr></thead>
  <tbody>
    <tr><td>Person in frame</td><td>a person appears in the shot</td><td>Walking into a landscape, wide travel shots</td></tr>
    <tr><td>Face visible</td><td>a face can be seen</td><td>Portraits where the face must be in view</td></tr>
    <tr><td>Smiling</td><td>someone smiles</td><td>Selfies, couples, friends, family</td></tr>
    <tr><td>Facing the camera</td><td>a face turns toward the iPhone</td><td>Kids who keep looking away</td></tr>
    <tr><td>Looking at the lens</td><td>the eyes appear to look at the lens</td><td>Eye-contact portraits, group photos</td></tr>
  </tbody>
</table>
<p><strong>Minimum people</strong> (1 to 10) counts only people who meet the chosen condition. With Smiling and a minimum of 4, the shutter fires when four people are smiling at the same time. <strong>Wait for a steady pose</strong> adds a short wait until upper-body movement settles, for calmer frames.</p>

<h2>Smile shutter plus burst</h2>
<p>Most smile cameras take one photo and stop. In BuzzCam's Burst mode, Automatic Capture keeps shooting while the condition holds, pauses when it's lost (someone stops smiling, a person steps out) and resumes when it comes back. You get many good frames instead of one lucky one.</p>

<h2>Tips for better automatic photos</h2>
<ul>
  <li>Keep faces reasonably large in the frame. Very distant faces are harder to detect.</li>
  <li>“Looking at the lens” is estimated from eye position. Sunglasses, side profiles and long distances reduce accuracy.</li>
  <li>For steady pose detection, keep your upper body inside the frame.</li>
  <li>Some cameras or lenses may not support Automatic Capture; the app tells you when that happens.</li>
</ul>

<h2>What it doesn't do</h2>
<p>BuzzCam decides when to press the shutter. It doesn't pick the best photo, coach your pose, beautify faces or recognize who someone is. It detects people only, so for pets use a fast <a href="/iphone-self-timer-burst/">burst or timed burst</a>.</p>

<h2>Privacy</h2>
<p>Face, smile and gaze detection run on the iPhone using Apple's on-device Vision framework. BuzzCam has no account, collects no data and only has permission to add photos to your library, not read them.</p>
`,
    faq: [
      { q: 'Is there an iPhone camera that takes a picture when you smile?', a: 'The built-in Camera app doesn’t have a smile shutter. BuzzCam adds one: choose Smiling in Automatic Capture and it shoots when someone smiles.' },
      { q: 'Can it wait until everyone in a group is smiling?', a: 'Yes. Set Minimum people to the group size with Smiling selected. The shutter fires when that many people are smiling.' },
      { q: 'Does the smile shutter work with the front camera?', a: 'Automatic Capture works with the cameras the iPhone supports for it. If a lens is not supported, the app shows a notice.' },
      { q: 'Does it work on dogs and cats?', a: 'No. Detection is for people only. Use fast burst for pets.' },
    ],
    related: ['group-photos', 'iphone-self-timer-burst', 'solo-travel-photos'],
  },
  {
    slug: 'group-photos',
    navLabel: 'Group photos with everyone',
    title: 'How to Take a Group Photo with Everyone in It (Including You)',
    description:
      'Get the photographer into the group photo: put your iPhone on a tripod, set BuzzCam to wait for the whole group, and it shoots when everyone is in frame and smiling.',
    h1: 'How to take a group photo with everyone in it',
    answer:
      'To take a group photo that includes the photographer, set the iPhone on a tripod or a steady surface, open BuzzCam’s Automatic Capture and set Minimum people to the number of people in the group. Tap the shutter and join the others. BuzzCam waits until that many people are in the frame, then shoots. Add Smiling or Looking at the lens so it only fires when everyone is smiling or looking at the camera.',
    keyPoints: [
      'Minimum people: 1 to 10',
      'Combine with Smiling or Looking at the lens',
      'Burst pauses if someone steps out and resumes when they’re back',
      'No running back to the phone, no 10 second sprint',
    ],
    stepsTitle: 'Group photo in four steps',
    steps: [
      { t: 'Place the iPhone', d: 'Tripod, table, wall or car roof, at about chest height. Use Ultra Wide if the group is large.' },
      { t: 'Set Minimum people', d: 'In Automatic Capture, set the number to everyone in the group, including you.' },
      { t: 'Choose a condition', d: 'Smiling for happy photos, Looking at the lens for eye contact, Person in frame for candid ones.' },
      { t: 'Tap and join', d: 'Tap the shutter, walk into the group. BuzzCam shoots once everyone is in place.' },
    ],
    shot: 2,
    shotAlt: 'Automatic Capture panel with Smiling selected and Minimum people set',
    chip: 'Minimum people',
    body: `
<h2>Why group photos usually go wrong</h2>
<p>The classic method is the 10 second timer and a sprint. Someone always arrives late, someone blinks, and the photographer ends up half-turned at the edge of the frame. Asking a stranger works, until they cut off feet or take one blurry shot.</p>
<p>BuzzCam replaces the countdown with a condition. Instead of “shoot in 10 seconds”, you tell it “shoot when six people are in the frame and smiling”.</p>

<h2>Recommended settings</h2>
<table>
  <thead><tr><th>Situation</th><th>Condition</th><th>Mode</th></tr></thead>
  <tbody>
    <tr><td>Friends on a trip</td><td>Smiling + Minimum people = group size</td><td>Burst</td></tr>
    <tr><td>Family with small kids</td><td>Looking at the lens or Facing the camera</td><td>Burst</td></tr>
    <tr><td>Formal or team photo</td><td>Face visible + Wait for a steady pose</td><td>Burst at 1 s</td></tr>
    <tr><td>Party or wedding table</td><td>Smiling</td><td>Burst, Fastest</td></tr>
  </tbody>
</table>

<h2>Framing tips</h2>
<ul>
  <li>Put the phone slightly above eye level and angle it down a little. It's flattering for everyone.</li>
  <li>Use Ultra Wide for big groups, but keep people away from the edges where wide lenses stretch faces.</li>
  <li>Leave a gap for yourself so you don't push others out of frame when you arrive.</li>
  <li>In bright sun, face the group away from the sun to avoid squinting.</li>
</ul>

<h2>No tripod?</h2>
<p>Lean the iPhone against a bag on a table, a wall ledge or a car window. Automatic Capture doesn't need the phone at a perfect height. It just needs to see everyone's faces.</p>
`,
    faq: [
      { q: 'How many people can BuzzCam wait for?', a: 'Minimum people goes from 1 to 10.' },
      { q: 'What if someone walks out of the frame?', a: 'In Burst mode, shooting pauses when the condition is no longer met and resumes when it is met again.' },
      { q: 'Will it pick the best group shot?', a: 'No. You choose your favorites in Apple Photos. Burst gives you many frames to choose from.' },
    ],
    related: ['smile-shutter', 'solo-travel-photos', 'iphone-self-timer-burst'],
  },
  {
    slug: 'solo-travel-photos',
    navLabel: 'Solo travel photos',
    title: 'How to Take Pictures of Yourself When Traveling Alone (iPhone)',
    description:
      'A practical guide to solo travel photos with an iPhone: what to pack, where to put the phone, which timer settings to use, and how to get natural shots without asking strangers.',
    h1: 'How to take pictures of yourself when traveling alone',
    answer:
      'The easiest way to take photos of yourself while traveling solo is to put your iPhone on a small tripod (or a wall, bench or backpack), frame the scene with the rear camera, and use a self timer that shoots a burst. With BuzzCam, set Timed to 10 seconds and the interval to 1 or 2 seconds, tap the shutter, walk into place and move naturally. You get dozens of frames to choose from, and nobody has to hold your phone.',
    keyPoints: [
      'Rear camera + tripod beats a selfie at arm’s length',
      'Timed: 10 s countdown, then a burst at 1–2 s',
      'Countdown light makes the timer visible from far away',
      'Or use Person in frame: it shoots when you walk into the scene',
    ],
    stepsTitle: 'The solo travel photo routine',
    steps: [
      { t: 'Find a stable spot', d: 'Mini tripod, a wall, a railing, a bench or your daypack.' },
      { t: 'Frame with the rear camera', d: 'Put yourself on a third line and leave room for the scenery. Take one test shot.' },
      { t: 'Set Timed 10 s, interval 1–2 s', d: 'Turn on Countdown light. Set a limit of 20 to 30 photos if you like.' },
      { t: 'Walk in and keep moving', d: 'Walk, turn, look away, look back. Natural motion beats a stiff pose.' },
    ],
    shot: 3,
    shotAlt: 'Traveler walking into a street scene during a BuzzCam timed burst',
    chip: 'Countdown light',
    body: `
<h2>What to pack</h2>
<ul>
  <li><strong>A small phone tripod</strong> with flexible legs or a clamp. It's the single best upgrade for solo travel photos.</li>
  <li><strong>Your iPhone's rear camera.</strong> It's sharper than the front camera and gives you Ultra Wide and Telephoto options.</li>
  <li>Optional: a phone grip or magnetic mount for railings and lamp posts.</li>
</ul>

<h2>Settings that work</h2>
<table>
  <thead><tr><th>Shot</th><th>BuzzCam setting</th></tr></thead>
  <tbody>
    <tr><td>Walking toward or away from the camera</td><td>Timed 10 s, interval 0.4 s</td></tr>
    <tr><td>Standing portrait with scenery</td><td>Timed 5–10 s, interval 1–2 s</td></tr>
    <tr><td>Jump at a viewpoint</td><td>Timed 5 s, interval Fastest</td></tr>
    <tr><td>Walking into a wide landscape</td><td>Automatic Capture: Person in frame, Burst</td></tr>
    <tr><td>Close portrait with a smile</td><td>Automatic Capture: Smiling</td></tr>
  </tbody>
</table>

<h2>Composition tips for solo travelers</h2>
<ul>
  <li>Stand on a third of the frame and let the landmark fill the rest.</li>
  <li>Place the phone lower than eye level to make you look taller and the scene bigger.</li>
  <li>Use Telephoto (on iPhones that have it) from farther away to compress the background, as with a famous skyline.</li>
  <li>Don't look at the camera every frame. Looking at the view reads as a travel moment, not a selfie.</li>
</ul>

<h2>Safety and etiquette</h2>
<p>Keep the phone where you can see it, avoid leaving it unattended in crowded places, and check local rules before using a tripod at landmarks, stations or museums.</p>

<h2>Review fast, keep the best</h2>
<p>BuzzCam saves straight to Apple Photos. Scroll through the burst, favorite the two or three you like and delete the rest to save space. With Default processing, originals are ready right away for AirDrop.</p>
`,
    faq: [
      { q: 'Is a selfie stick or a tripod better for solo travel?', a: 'A tripod lets you step away and show the whole scene and your full outfit. A selfie stick keeps you close and the angle looks like a selfie.' },
      { q: 'How do I take full-body photos of myself without a tripod?', a: 'Lean the iPhone on a wall, a bench or your bag, angle it slightly up, and use a timed burst so you have time to step back.' },
      { q: 'Can BuzzCam start shooting when I walk into the frame?', a: 'Yes. Choose Person in frame in Automatic Capture and tap the shutter. It shoots when you appear.' },
    ],
    related: ['iphone-self-timer-burst', 'outfit-photos', 'smile-shutter'],
  },
  {
    slug: 'outfit-photos',
    navLabel: 'Outfit & full-body photos',
    title: 'How to Take Outfit Photos by Yourself (Full-Body, iPhone)',
    description:
      'Take outfit-of-the-day and full-body photos alone with your iPhone: phone placement, the best lens and angle, and interval shooting so you can change poses hands-free.',
    h1: 'How to take outfit photos by yourself',
    answer:
      'To take full-body outfit photos alone, put your iPhone at hip height on a tripod or shelf, use the rear Wide lens a few meters away, and shoot an interval burst so you can change pose between frames. In BuzzCam, set Timed or Burst with a 2 or 3 second shot interval: one tap gives you a whole set of poses without walking back to the phone, and there are no beauty filters altering your look.',
    keyPoints: [
      'Phone at hip height, slightly tilted up',
      'Rear Wide lens, 2–4 m away',
      'Shot interval 1 to 3 s to change pose',
      'No beauty filters or retouching',
    ],
    stepsTitle: 'Outfit photo setup',
    steps: [
      { t: 'Place the phone at hip height', d: 'It keeps your proportions natural. Tilt very slightly upward for longer legs.' },
      { t: 'Use the Wide lens, step back', d: 'Stand 2 to 4 meters away so head and shoes fit with some margin.' },
      { t: 'Set the interval to 2 s', d: 'In Timed or Burst, choose 2 s (or 3 s for bigger pose changes).' },
      { t: 'Flow through poses', d: 'Hand in pocket, look away, step forward, turn. Stop with a second tap.' },
    ],
    shot: 6,
    shotAlt: 'Full-body outfit photo with a 2 second shot interval in BuzzCam',
    chip: 'Shot interval · 2 s',
    body: `
<h2>Why interval shooting beats the timer for outfits</h2>
<p>With a normal timer you get one pose per trip back to the phone. With an interval burst you set the rhythm once and keep posing. Twenty poses take a minute instead of twenty walks.</p>

<h2>Pose ideas for a set</h2>
<ul>
  <li>Straight on, weight on one leg</li>
  <li>Three-quarter turn, looking past the camera</li>
  <li>Walking toward the camera (use 0.4 s)</li>
  <li>Hand on bag strap or in pocket</li>
  <li>Back view to show the cut of a coat</li>
  <li>Seated on steps for shoes and trousers</li>
</ul>

<h2>Light and background</h2>
<ul>
  <li>Open shade (a doorway, the shady side of a street) gives soft, even light.</li>
  <li>Pick a plain wall, door or textured facade that doesn't fight the outfit.</li>
  <li>Avoid strong backlight unless you want a silhouette.</li>
</ul>

<h2>Natural color, ready to edit</h2>
<p>BuzzCam has no beauty filter, smoothing or face shaping. Shoot HEIF for quick posting, or RAW (DNG) and Apple ProRAW on supported iPhones if you color-grade your feed. On supported iPhones and lenses, 48 MP gives you room to crop a vertical post from a wider frame.</p>
`,
    faq: [
      { q: 'What is the best height for full-body photos?', a: 'Around hip height, angled slightly up. Shooting from eye level makes legs look shorter.' },
      { q: 'Which interval should I use for outfit photos?', a: 'Use 2 s for most poses. Use 3 s if you change position a lot, and 0.4 s for walking shots.' },
      { q: 'Does BuzzCam beautify or slim faces?', a: 'No. There are no beauty filters, smoothing or retouching.' },
    ],
    related: ['solo-travel-photos', 'iphone-self-timer-burst', 'proraw-burst'],
  },
  {
    slug: 'proraw-burst',
    navLabel: 'ProRAW & 48 MP burst',
    title: 'ProRAW Burst and 48 MP Burst Camera for iPhone',
    description:
      'Shoot bursts in Apple ProRAW, RAW (DNG), HEIF or JPEG at 12 MP or 48 MP on supported iPhones, with a self timer, interval shooting and Speed Priority processing.',
    h1: 'ProRAW and 48 MP burst shooting on iPhone',
    answer:
      'BuzzCam shoots bursts and timed bursts in HEIF, JPEG, RAW (DNG) or Apple ProRAW, at 12 MP or 48 MP on supported iPhones and lenses. Choose Default processing to save each original right away (ready for AirDrop), or Speed Priority to shoot 48 MP HEIF and ProRAW bursts faster while iOS finishes processing in the background on supported devices.',
    keyPoints: [
      'Formats: HEIF, JPEG, RAW (DNG), Apple ProRAW',
      'Resolution: 12 MP or 48 MP on supported iPhones and lenses',
      'Processing: Default or Speed Priority',
      'Lens switching: Ultra Wide, Wide, Telephoto',
    ],
    stepsTitle: 'Set up a RAW burst',
    steps: [
      { t: 'Open Photo Options', d: 'Tap the format and resolution button at the top of the viewfinder.' },
      { t: 'Choose RAW and 48 MP', d: 'Select RAW (ProRAW on compatible cameras, DNG otherwise) and 48 MP if available.' },
      { t: 'Pick the interval and processing', d: 'Use 1 s or slower for 48 MP RAW, or enable Speed Priority on supported devices.' },
      { t: 'Shoot Burst or Timed', d: 'Tap to start, tap to stop. Files land in Apple Photos.' },
    ],
    shot: 9,
    shotAlt: 'BuzzCam Photo Options with RAW, 48 MP, shot interval and processing settings',
    body: `
<h2>Which format should you use?</h2>
<table>
  <thead><tr><th>Format</th><th>Best for</th><th>Trade-off</th></tr></thead>
  <tbody>
    <tr><td>HEIF</td><td>Everyday photos, sharing</td><td>Small files, less editing latitude</td></tr>
    <tr><td>JPEG</td><td>Maximum compatibility</td><td>Larger than HEIF at similar quality</td></tr>
    <tr><td>RAW (DNG)</td><td>Editing in Lightroom and other apps</td><td>Large files, slower bursts</td></tr>
    <tr><td>Apple ProRAW</td><td>Editing with Apple's computational detail</td><td>Largest files; compatible cameras only</td></tr>
  </tbody>
</table>

<h2>12 MP or 48 MP?</h2>
<p>48 MP keeps more detail for cropping and large prints, on supported iPhones and lenses. 12 MP bursts are faster and much smaller. For action, 12 MP HEIF at the Fastest interval is the most responsive. For landscapes with you in them, 48 MP at a 1 to 2 second interval is a good balance.</p>

<h2>Default vs Speed Priority</h2>
<p><strong>Default</strong> finishes and saves each original right away, so you can AirDrop or edit as soon as you stop shooting. <strong>Speed Priority</strong> (supported devices with 48 MP HEIF or ProRAW bursts) captures faster and lets iOS complete processing in the background, so photos may take a moment to appear at full quality.</p>

<h2>Realistic burst speed</h2>
<p>“Fastest” targets about 0.1 s between shots. Actual speed depends on the iPhone model, resolution, format and processing. Large RAW files take longer to save than HEIF, so expect slower RAW bursts.</p>

<h2>Combine RAW with hands-free shooting</h2>
<p>Every format works with <a href="/iphone-self-timer-burst/">timed bursts</a> and <a href="/smile-shutter/">Automatic Capture</a>, so you can shoot ProRAW self-portraits and group photos without touching the phone.</p>
`,
    faq: [
      { q: 'Can the iPhone shoot ProRAW in burst?', a: 'With BuzzCam, yes, on iPhones with ProRAW-compatible cameras. Speed depends on the model and resolution.' },
      { q: 'Which iPhones support 48 MP and ProRAW?', a: 'It depends on the model and the lens. BuzzCam shows only the options your iPhone and selected camera support.' },
      { q: 'Where are the RAW files saved?', a: 'In Apple Photos, like every BuzzCam photo.' },
    ],
    related: ['iphone-self-timer-burst', 'outfit-photos', 'smile-shutter'],
  },
];

export const guideBySlug = (slug: string) => GUIDES.find((g) => g.slug === slug);
