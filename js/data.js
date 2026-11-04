window.GAMES = [
{id:"bug-hunt",title:"BUG HUNT",category:"Programming",icon:"⌘",difficulty:"MEDIUM",duration:"5 MIN",description:"Hunt down the bugs hiding in real code snippets.",accent:"#4285f4",type:"bug"},
{id:"output",title:"WHAT'S THE OUTPUT?",category:"Programming",icon:"$_",difficulty:"EASY",duration:"3–5 MIN",description:"Read the code, predict the output, prove your instincts.",accent:"#34a853",type:"quiz"},
{id:"code-builder",title:"CODE BUILDER",category:"Programming",icon:"⠿",difficulty:"MEDIUM",duration:"3–5 MIN",description:"Put shuffled code blocks in the right order.",accent:"#8e83f7",type:"builder"},
{id:"bug-feature",title:"BUG OR FEATURE?",category:"Logic",icon:"◈",difficulty:"EASY",duration:"2–3 MIN",description:"Can you tell an intentional behavior from a bug?",accent:"#fbbc04",type:"quiz"},
{id:"password",title:"HACK THE PASSWORD",category:"Cybersecurity",icon:"⌑",difficulty:"MEDIUM",duration:"3–5 MIN",description:"Use clues, logic and limited attempts to unlock the terminal.",accent:"#ea4335",type:"password"},
{id:"phishing",title:"PHISHING DETECTIVE",category:"Cybersecurity",icon:"✉",difficulty:"EASY",duration:"3 MIN",description:"Inspect suspicious messages and spot the red flags.",accent:"#ea7650",type:"quiz"},
{id:"cipher",title:"CRACK THE CODE",category:"Cybersecurity",icon:"⠿",difficulty:"MEDIUM",duration:"3 MIN",description:"Decode messages with classic cryptography techniques.",accent:"#d48be8",type:"cipher"},
{id:"escape",title:"CTRL + ALT + ESCAPE",category:"Logic",icon:"▣",difficulty:"HARD",duration:"5–10 MIN",description:"Clear four system challenges and escape the lockdown.",accent:"#fbbc04",type:"escape"},
{id:"maze",title:"ALGORITHM MAZE",category:"Logic",icon:"⌗",difficulty:"MEDIUM",duration:"3–5 MIN",description:"Program a robot through a maze using simple commands.",accent:"#34a853",type:"maze"},
{id:"ai-human",title:"AI OR HUMAN?",category:"AI",icon:"✳",difficulty:"EASY",duration:"2–3 MIN",description:"Guess whether creative content came from AI or a human.",accent:"#9d8aff",type:"quiz"}
];

window.QUESTIONS = {
output:[
{code:"x = [1, 2, 3]\\nprint(x[-1])",q:"What will this Python code print?",a:["1","2","3","Error"],correct:2,why:"Negative indexing starts from the end. Index -1 refers to the last item."},
{code:"let x = 5;\\nconsole.log(x++);",q:"What is printed in JavaScript?",a:["5","6","undefined","Error"],correct:0,why:"Post-increment returns the current value first, then increments x."},
{code:"int x = 7 / 2;\\ncout << x;",q:"What is printed in C++ with integer division?",a:["3.5","3","4","Error"],correct:1,why:"Both operands are integers, so the fractional part is discarded."},
{code:"print(bool([]))",q:"What is the output in Python?",a:["True","False","None","Error"],correct:1,why:"An empty list is falsy in Python."},
{code:"console.log(typeof null)",q:"What does JavaScript return?",a:["null","object","undefined","boolean"],correct:1,why:"This is a long-standing JavaScript behavior: typeof null is 'object'."}
],
bug:[
{code:"1  def average(numbers):\\n2      total = 0\\n3      for n in numbers:\\n4          total += n\\n5      return total / len(numbers)\\n\\n# Input: []",q:"Which line causes a runtime error when the list is empty?",a:["Line 1","Line 3","Line 5","No bug"],correct:2,why:"len(numbers) is zero, causing division by zero. Validate the list before dividing."},
{code:"1  password = input('Password: ')\\n2  if password = 'arcade':\\n3      print('Access granted')",q:"Which line contains the syntax bug?",a:["Line 1","Line 2","Line 3","No bug"],correct:1,why:"Python comparisons use ==. A single = is assignment, not comparison."},
{code:"1  const items = [1, 2, 3];\\n2  for (let i = 0; i <= items.length; i++) {\\n3    console.log(items[i]);\\n4  }",q:"Which line introduces an off-by-one bug?",a:["Line 1","Line 2","Line 3","Line 4"],correct:1,why:"The last valid index is length - 1. Use i < items.length."},
{code:"1  int values[] = {2,4,6};\\n2  for(int i=0; i<3; i++)\\n3      cout << values[i+1];",q:"Which line can access memory out of bounds?",a:["Line 1","Line 2","Line 3","None"],correct:2,why:"When i is 2, values[i+1] accesses values[3], outside the array."}
],
feature:[
{code:"In JavaScript: [] == false evaluates to true.",q:"BUG or FEATURE?",a:["BUG","FEATURE"],correct:1,why:"It's intentional language behavior caused by abstract equality coercion. It can still be surprising—prefer ===."},
{code:"A browser remembers a page after you press Back, showing an older version.",q:"BUG or FEATURE?",a:["BUG","FEATURE"],correct:1,why:"Often this is the browser back-forward cache (bfcache), a performance feature."},
{code:"A program crashes when it tries to divide an integer by zero.",q:"BUG or FEATURE?",a:["BUG","FEATURE"],correct:0,why:"The program should handle invalid input or the zero divisor gracefully."},
{code:"Python considers an empty list [] to be False in a condition.",q:"BUG or FEATURE?",a:["BUG","FEATURE"],correct:1,why:"This is Python's truth-value testing design for empty containers."}
],
phishing:[
{code:"FROM: security@paypaI-support.example\\nSUBJECT: URGENT: Account suspended\\n\\nYour account will be deleted in 30 minutes. Verify your password using the attached form immediately.",q:"Is this message phishing or legitimate?",a:["PHISHING","LEGITIMATE"],correct:0,why:"Look-alike sender spelling (capital I), urgency, password request and unexpected attachment are strong warning signs."},
{code:"FROM: events@gdg-assiut.example\\nSUBJECT: Your workshop registration\\n\\nHi Alex, your registration is confirmed. You can review the agenda from the event page you already use.",q:"Is this message phishing or legitimate?",a:["PHISHING","LEGITIMATE"],correct:1,why:"The sender matches the fictional community domain, it avoids requesting secrets, and refers to a known event page."},
{code:"FROM: helpdesk@micros0ft-alert.example\\nSUBJECT: Mailbox full\\n\\nYour mailbox is full. Sign in now and send us your password to prevent message loss.",q:"Is this message phishing or legitimate?",a:["PHISHING","LEGITIMATE"],correct:0,why:"A look-alike domain and request to send a password are clear phishing indicators."},
{code:"FROM: noreply@library.example\\nSUBJECT: Due date reminder\\n\\nYour borrowed book is due tomorrow. Visit the library website by typing its known address in your browser.",q:"Is this message phishing or legitimate?",a:["PHISHING","LEGITIMATE"],correct:1,why:"It gives a routine reminder and recommends navigating to the known site directly."}
],
ai:[
{code:"“The city woke beneath a blanket of rain, while every window held a small universe of light.”\\n\\nSource card: Sample A",q:"Who created this sample?",a:["AI GENERATED","HUMAN CREATED"],correct:0,why:"In this arcade's fictional sample set, this line is labelled as AI-generated. Real-world authorship cannot be reliably determined from style alone."},
{code:"“I kept the ticket from that tiny concert. The ink is fading, but I still remember the drummer missing the first beat.”\\n\\nSource card: Sample B",q:"Who created this sample?",a:["AI GENERATED","HUMAN CREATED"],correct:1,why:"This is a fictional human-written sample in the game. The label is part of the curated quiz, not an AI detector."},
{code:"“A good interface is a conversation: it listens, responds, and never makes the user guess what happens next.”\\n\\nSource card: Sample C",q:"Who created this sample?",a:["AI GENERATED","HUMAN CREATED"],correct:0,why:"This curated example is labelled AI-generated. Style alone is not proof of authorship."},
{code:"“My first app had three buttons, two bugs, and one user: my sister. She found all the bugs before lunch.”\\n\\nSource card: Sample D",q:"Who created this sample?",a:["AI GENERATED","HUMAN CREATED"],correct:1,why:"This curated example is labelled human-created. The game uses preloaded examples, not live detection."}
]
};