const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const screen = document.getElementById("body");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
  screen.style.overflowY = "hidden";
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
  screen.style.overflowY = "auto";
}
const passion_p_text = new Array(
  "It was a Saturday afternoon of April of 2015. After taking lunch, I was watching a movie at the TV room with my mom. The clock had read 11:55 AM when it started. The ground surface vibrated so strongly and in no time, I was getting a see-saw experience; it was an earthquake. My mom was quick to react as she promptly moved me and herself underneath the door. Every second at that moment was a nightmare: the bookshelves of my room crashed and from the window, I saw the nearby buildings colliding with each other. The background noise of screaming people and barking dogs amplified the trepidation of the situation. The havoc continued for a total of 55 seconds when the vibrations finally stopped.",
  "I walked towards the closest open field with my mom. On the road, I first saw the broken wall of my school—a wall so large that its shadow covered us during morning assemblies.  Secondly, I saw the fallen trees at the pre-primary block. And thirdly, I saw my school’s building—the one where we studied, resting on a nearby building. I was completely inarticulate; had it not been a holiday, how precarious the situation would have been. The school wall would have crashed upon our heads if mother nature had shown her anger in the morning. The small children, merely 2-3 years old, who have just learned to speak, would have been squeezed up like a fruit coming under the trees. And I can’t put it into words to what would have happened to us, had we been studying at the school building.",
  "Over the whole day, we experienced many aftershocks, which would be a general trend for more than a month. Everyday there would be many small aftershocks with one or two big ones. But most disappointing was the impact that the havoc had. Schools were closed in Kathmandu for over a month because parents feared sending their children to school. Many governmental activities slowed or completely stopped because of the damage to governmental buildings. Many cultural heritages lost their original shape as they got destroyed by the earthquake, including the Durbar Squares of the valley, which were enlisted in the UNESCO’s world heritage list. Meanwhile, more than 10,000 Nepali brothers and sisters lost their lives.",
  "You know, I believe in living without havoc and uncertainty—and that my country and its people should also live the same way. Every day in that aftershock month, I criticized the government and its policies for all the havoc we had. However, for every misfortune of the country, it’s not that the government is only responsible. It also comes down to the technology and the manpower of the country; more specifically the cutting-edge advanced technology and intellectual manpower. I realized this after 18 days of the devastating earthquake: even after the government had created a high alert, lots of people lost their lives after a 7.3 Richter Scale aftershock hit the valley. Though many questions have obsessed me after this day, one of them truly inspires me—that if there was an intelligent prediction system which could predict the earthquake of 2015, even before 1 hour, we would have not lost many lives.",
  "To answer this question, I’ve embarked on a journey to tackle real life problems using computer programs. My first stop was learning to code. I still remember my first “Hello World!” program. When the output displayed on the screen, I got lost: the satisfaction given by a simple one-line code made me fall in love with the charisma of coding. From then on, my stops have always been intellectual pursuits on different topics of coding. Whether it be building a math tool to learn structural programming or creating a simple hospital database using file handling, building a game element to learn object-oriented programming or designing a carousel using event-driven programming, I’ve always tried to accumulate ideas that will strengthen my basics. It’s because I believe that doing so broadens my ways of solving problems. However, I know that my journey has just started and there’s miles to go. Understanding fundamental machine learning algorithms and implementing them upon my custom projects, I’ve embraced upon another extra mile. And I’m very excited to learn more because I realize that abundant knowledge with regular updates is pivotal to challenge my problem.",
  "Today, I look forward to developing my data analysis skills and extending my knowledge base even farther. I want to understand geological events through a unique dimension. This dimension, through research, data analysis, and prediction, incorporates the idea of Computer Science and Mathematics to accurately frame geological events. However, I also understand that my unique dimension is not completely unique: many intelligent systems of today use it. But I know that these systems are not up to the mark like that of other current technologies of today. Take the forest fire prediction system for instance. We use advanced technologies like hydrology, remote sensing, satellite data, and environmental engineering to develop a deep learning model of forest fire prediction systems. However, the maximum accuracy for a random forest fire to occur is only a few numbers over 90%. Doing advanced research into a wide range of time series data throughout my life, I want to improve the accuracy of these systems and help them catch up with other technologies of today.",
  "Furthermore, as the earthquake prediction systems are the worst of all, in fact the biggest problem to my country, I definitely want to work on them. They should not be only a magnitude showing machine or an unreliable system which rightly predicts earthquakes once in blue moon. But they should be accurate systems, which hold the power to save humans through precise predictions every time. Therefore, I aspire to be a Data Scientist and implement my unique dimension to build these systems for my country. I look forward to achieving this because I’m optimistic that it holds the fate of my country—in that the havocs like 2015 will not bury us under their devastation."
);
const leadership_p_text = new Array(
  "“Namaste sir! Welcome to Kathmandu.” I greeted the esteemed teacher of Gandaki Boarding School (GBS), and his students, who had travelled all the way from Pokhara to participate at our national level Mathematics League. As the president of the organizing committee, I had reached the bus station to receive them—a form of hospitality we wanted to express. Before that day, to start any conversation, I waited for the other person to make the first word—and if they didn’t, I remained silent. Though the former is never in our control, the latter definitely is—at least for me now.",
  "At the station, my first expression looking at the guests was a smile—one that was totally natural. I can’t tell exactly why, but looking at their faces radiated a vibrant feeling in me. Today, when I look back, it was probably because I had done a lot of hard work to make that event happen, and seeing them, who were, in fact, our first outside-valley participants, gave me a lot of satisfaction. Meanwhile, coming back to the guests, I could sense a feeling of exhaustion from their faces. Obviously, it was the impact of a road journey, roughly 8.5 hours, from Pokhara to Kathmandu. Therefore, I wanted to quickly escort them to the hotel and booked a nearby taxi.",
  "Reaching our destination would take a minimum of one hour— a time enough for people to have lengthy conversations and understand each other. More importantly, one can’t simply keep their hands folded and look at the background scenery throughout that time period. For a few minutes, there was a pin-drop silence. Someone had to break it, which I also knew. “You are the president. How can you be so reckless to not speak with the guests of your own event?” My inner self fired me this question time and again, and honestly, I didn’t have any answer. But, regardless of anything, I’m never reckless. To prove this, I started the conversation: “Sir, how often have you visited Kathmandu? And what are your to-visit locations inside the valley?”",
  "This question was only the beginning as its answer motivated me to ask another question, yet another one, and indefinitely continue the conversation; someone had to say that we reached the hotel. Our conversation was so vibrant that we touched a lot of things: the culture, language, hardships, natural beauty, and the overall life in the valley. The GBS sir even called me to accompany him and his students while visiting Basantapur Durbar Square—later that day.",
  "You know, it is always like this: leadership inspires me to lose anxiety and forget all my limitations. I thrive every day in my interpersonal skills and build confidence to work on real-world issues to make something tangible, even if I’ve to take the road less chosen. The same thought process and leadership has motivated me to launch the startup idea of Math World Nepal and continuously work to expand it.",
  "Actually, I had participated at the National Math Olympiad selections of 2020. In this event, I couldn’t come within top six as I got 11th position after the final round. The top six position was important because only six students from every country are sent to represent the nation in the International Math Olympiad (IMO). Obviously, I was sad for missing out on IMO, but it was easy to digest. I’ve no shame to accept that more competent students, who have proven their competency through the exams, were the ones representing the country. However, what was not at all easy to digest was the difficulty that I faced while preparing for the event.",
  "I came to know about IMO only in the 11th grade. Worst of all, there were very few resources that I could use as study material. Also, when I started preparing, there was no one who could guide me on the topics or at least provide some insights into tackling the problems; I had prepared everything on my own. Though I completely admire independent study, I also believe that it holds many caveats when learning something really challenging. This fact, with no doubt, holds true for the preparation of an international event like IMO: the preparation can’t be a solely independent study.",
  "This story relates to most kids in Nepal. They are talented enough to participate at international competitions but don’t know about such events or don’t have a genuine preparation resource. Therefore, I wanted to create an ardent group that connects like-minded Nepalese Math enthusiasts to build a genuine preparation platform. This platform embarks to address the general problem while learning Mathematics, of every kid in Nepal, through insightful study and exposure. As a result, Math World Nepal (MWN) was founded.",
  "In MWN, I’ve collected more than 35 students from all over Nepal to help me in my vision. Working in teams and coordinated projects, we are building quality Math resources covering syllabus of international events and college-level topics, which are freely available to anyone. Through our platform, students can learn complex Math topics, connect with Olympiad finalists and university professors, get one-on-one mentoring sessions, and be involved in interdisciplinary research. We believe in building such a place where every student, regardless of race, ethnic origin, sexual orientation, belief, disability, and financial hardship, can find a strong foundation to learn Mathematics. As a leader, I aim to invest my intellect and skills in everything that the Math World Nepal demands: research, coding, video-editing, public relations, and executive. I’ll help as many students as possible by bringing the idea of MWN upon a larger student base.",
  "LET OUT-OF-HAND DISPOSSESSION NOT DECIDE ANYONE’S FATE!"
);
const activism_p_text = new Array(
  'A bam on the door shook me awake. "Get up, Adit! It\'s time for running." I perceived it was mom\'s utterance and glanced at the wall clock—5:30 sharp. To a boy who ran every morning, precisely at 5:30, it wasn’t the time he should be waking up. Louder than ever before, my heart resonated to berate me. I had set a new record: "Waking up late for one whole month." Like other days, I rushed towards the kitchen to make myself ready for running. I noticed that my mom had already cooked dal and was chopping lettuce for tarkari. I could see a strong desire to sleep in her eyes—ten days straight that I noticed it.',
  "My mom finds time for all the household tasks, along with backing me in every step: be it to cook food by waking early or to massage my body after extensive training. I couldn’t justify my actions and reproached myself for being a reckless person. This feeling was agonizing—it was enough! I promised myself,” I’ll wake up on time from tomorrow.”",
  "The next morning, my eyes opened by the ring of alarm. It was 5:00 AM—very cold outside. Snoozing the alarm, I stuffed myself inside the blanket. “I’ll wake at time from tomorrow.” The promise of the previous day appeared in my memories. Every second after this, my heart exhorted me to wake up. Impulsively, I came out of the blanket and brushed my teeth before the alarm rang again. After exercising for 30 minutes, I went running exactly on time. That morning, I hit 5 kilometers in 23 minutes. The running pace didn’t bother me because I had completed my daily running quota.",
  "Meanwhile, St. Xaviers Mini-Marathon, a regional level competition, was just round the corner. Ever since I joined St. Xaviers, winning it was one of my dreams. Though getting up at time ensured me running every day, I still needed to improve my endurance. Therefore, I ensured one thing: I pushed myself to the penultimate level while running. At the end of every running session, I questioned myself: “Can I run 400 meters more?” Saying no was definitely not an option! Instead of doing cool down exercises, I ran additional 400 meters, yet another 400 meters, and the loop continued until I ran out of breath. After two months, I was accustomed to two things: getting up without an alarm and ¬¬running 10 kilometers daily.",
  'December 7, 2019: The Marathon Day. I revert to the finishing moment. I was gasping; legs couldn’t run anymore. With two runners ahead of me and the last 300 meters remaining, I didn’t want to lose. As the whole race summarized, I pushed myself over my level and just inched over one of them at the finish line. Looking at the timer, I was stunned: I improved my personal best by four minutes. My friends came running towards me, shook my hands, and said, "Congrats! Karki. You finished second.” At that moment, my heart was emotional by the triumph I had just performed. The strenuous preparation flashed in my eyes and I visualized the reason: my reinstated tenacity towards running.',
  "While my name was called for presenting the certificate, my happiness had no limits. Every step towards the stage depicted my aptitude to succeed—once I resisted my incompetence to run. Upon comprehension, my satisfaction was paramount; I wanted to continue having such a contentment in whatever I did. In doing so, I haven’t faltered from that day. I’ve implemented what I learned: bringing proactiveness in exercise and training sessions.",
  "Today, I maintain a strict diet, which consists of abundant protein-giving food sources, milk, and at least four eggs/day. More importantly, I eat junk food once in a blue moon. In the morning, I wake up exactly at 5:00 AM and do routine stretching sessions and warm-up exercises for half an hour. After taking my morning diet, which consists of nuts and an egg, I go for running sessions, which are one hour on average. I jog for a while and run the entire perimeter of Singha Durbar twice (approximately 7 kms). While running, I prepare strategies for mini-marathons and half-marathons because they are my premier events: I’ve also participated in the national level Half-marathons like the Kathmandu Half-Marathon of 2018, 2019, and 2020.",
  "My running proactiveness has also entrusted me in the path of activism in the societal areas which I care about. I’m greatly distressed seeing the increase in global warming and climate change, which are the biggest problems the mother nature faces today. In tackling these problems, I believe that every human has the role to play. I know that some people, even though being well-aware about environmental problems, pollute mother nature. However, many people are uneducated and hence, unaware about correct environmental practices. Therefore, I joined environmental organizations like nature clubs, Clean Energy Nepal, and Anamnagar Tole Sudhar to participate in environmental conservation and awareness events. In these organizations, I worked at a wide range of environmental activities: plastic collection and recycling, society cleanliness and sanitation, plantation, air conservation workshops, mass awareness dramas, and so on. I’ve been able to make people around me aware and more accountable for the environment, where they at least think twice before polluting mother nature.",
  "Today, having realized the importance of activism, I want to practice it more. Moving forward, I want to make continued efforts in both running and environmental advocacy—in putting my best foot forward in these fields."
);

function addLearnMoreBlogs() {
  for (counter = 0; counter < passion_p_text.length; counter++) {
    var new_p = document.createElement("p");
    var textNode = document.createTextNode(passion_p_text[counter]);
    new_p.appendChild(textNode);
    document.getElementById("passion-modal-para").appendChild(new_p);
  }
  for (counter = 0; counter < leadership_p_text.length; counter++) {
    var new_p = document.createElement("p");
    var textNode = document.createTextNode(leadership_p_text[counter]);
    new_p.appendChild(textNode);
    document.getElementById("leadership-modal-para").appendChild(new_p);
  }
  for (counter = 0; counter < activism_p_text.length; counter++) {
    var new_p = document.createElement("p");
    var textNode = document.createTextNode(activism_p_text[counter]);
    new_p.appendChild(textNode);
    document.getElementById("activism-modal-para").appendChild(new_p);
  }
}
addLearnMoreBlogs();

document
  .getElementById("submit-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const message = document.getElementById("contact-response-para");
    while (message.lastChild) {
      message.removeChild(message.lastChild);
    }
    var user_name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var sent_message = document.getElementById("textarea").value;
    if (email !== "" && user_name !== "" && sent_message !== "") {
      const reply_email = new Array(
        "Hi " + user_name.split(" ")[0] + ",",
        "Thank you so much for the message!",
        "I will try my best to reach out to you at your email (" +
          email +
          "). " +
          "If there was something very urgent, do contact me via Direct Messaging at the messenger: ",
        "Best Wishes,",
        "Aditya Karki",
        "Anamnagar-29, Kathmandu, Nepal"
      );
      for (counter = 0; counter < reply_email.length; counter++) {
        var new_p = document.createElement("p");
        var textNode = document.createTextNode(reply_email[counter]);
        new_p.appendChild(textNode);
        if (counter == 2) {
          new_p.style.display = "inline";
          document.getElementById("contact-response-para").appendChild(new_p);
          var new_a = document.createElement("a");
          new_a.innerText = "facebook/AdityaKarki. ";
          new_a.href = "https://www.facebook.com/asAdityakarki";
          new_a.target = "_blank";
          document.getElementById("contact-response-para").appendChild(new_a);
        } else {
          document.getElementById("contact-response-para").appendChild(new_p);
        }
        if (counter > 2) {
          if (counter == 3) {
            new_p.style.marginTop = "1rem";
          }
          new_p.style.marginBottom = 0;
        }
      }
    } else {
      const reply_email = new Array(
        "Hey!",
        "Sorry, you can't make the submission. You are trying to submit an incomplete form.",
        "Please fill all the fields to make a valid submission.",
        "Thank You!"
      );
      for (counter = 0; counter < reply_email.length; counter++) {
        var new_p = document.createElement("p");
        var textNode = document.createTextNode(reply_email[counter]);
        new_p.appendChild(textNode);
        document.getElementById("contact-response-para").appendChild(new_p);
      }
    }
    document.getElementById("form").reset();
  });
$(".noEnterSubmit").keypress(function (e) {
  if (e.which == 13) return false;
  //or...
  if (e.which == 13) e.preventDefault();
});
