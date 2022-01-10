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
  "It was a Saturday afternoon in April of 2015. I was watching a movie in the TV room with my dad. The clock had read 11:55 AM when the ground surface started to jolt. In no time, I was getting a see-saw experience. It was an earthquake.",
  "My dad was quick to react; he promptly moved both of us under a door. Every second then was a nightmare: the bookshelves of my room crashed, and from the window, I saw the nearby buildings colliding with each other. The havoc continued for 55 seconds when the vibrations finally stopped.",
  "I walked towards the closest open field with my dad. On the road, I first saw the dismantled debris of the wall of my school—a wall so large that its shadow covered us during morning assemblies. I also saw the building of my school—the one where we studied—dislodged from its place, hitting a nearby building. I was completely inarticulate! Had it not been a holiday, how precarious would the situation have been? I could only imagine!",
  "Over the whole day, we experienced many aftershocks, which would be a general trend for more than a month. Schools were closed in the earthquake-prone areas, governmental activities slowed or completely stopped, and Nepal suffered from extreme poverty. Meanwhile, approximately 10,000 Nepalese lost their lives. My country witnessed such uncertainty and havoc that we had never had before.",
  "Every day in the aftershock month, I criticized the government for all the havoc we had. However, it’s not that the government is only responsible for every misfortune. It also comes down to the cutting-edge advanced technology and the intellectual manpower of the country. I realized this after 18 days of the devastating earthquake. Even after the government had created a high alert, many people lost their lives after a 7.3 Richter Scale aftershock hit the valley. Though many questions have obsessed me after this day, one truly inspires me: if there was an intelligent prediction system that could predict the earthquake of 2015, we would have not lost many lives. But not even the best intelligent systems can predict earthquakes!",
  "To tackle this problem, I’ve embarked on a journey of making myself capable of solving real-life problems using computer programs. My first stop was learning to code, where I still remember my first “Hello World!” program. When the screen displayed the output, I got lost: the satisfaction given by a simple one-line code made me fall in love with the charisma of coding. From then on, my stops have always been intellectual pursuits on different coding topics. Whether creating a simple hospital database using file handling or designing a complex carousel using event-driven programming, I always tried to accumulate ideas that strengthened my basics.",
  "However, I know that my journey has just started, and there are miles to go. I’ve embraced another extra mile by understanding fundamental machine learning algorithms and implementing them in my custom projects. And I’m very excited to learn more because I realize that an abundant knowledge base with regular updates is pivotal to challenging my problem. Today, I look forward to extending my knowledge base further by developing my data analysis and visualization skills. I want to understand geological events through research, analysis, modeling, and simulation, and accurately frame these events using Computer Science and Mathematics.",
  "Moreover, the existing intelligent systems are not up to the mark like that of other current technologies of today. For instance, take the forest fire prediction system. We use advanced technologies like hydrology, remote sensing, satellite data, and environmental engineering to develop a deep learning model of forest fire prediction systems. However, the maximum accuracy for a random forest fire to occur is only a few numbers over 90%. Therefore, doing advanced research into a wide range of time series data throughout my life, I want to improve the accuracy of these systems and help them catch up with other technologies of today.",
  "Furthermore, as earthquake prediction systems are one of the biggest necessities in my country, I want to make these technologies a possibility. They should not be only magnitude showing machines or unreliable systems that rightly predict earthquakes once in a blue moon. But they should be accurate systems, which have the power of saving humans through precise predictions every time. Therefore, I aspire to become a Data Scientist and develop smart systems that can help avert natural disasters. I look forward to achieving this because I’m optimistic that it holds the fate of my country—in that the havocs like 2015 will not bury us under their devastation."
);
const leadership_p_text = new Array(
  "“Namaste! Welcome to Kathmandu.” I greeted the teacher of Gandaki Boarding School and his students, who had traveled all the way from Pokhara to participate in our national level Mathematics quiz. As the president of the organizing committee, I reached the bus station to personally receive them—a form of hospitality I wanted to express. Before that day, my shy nature refrained me from starting any conversation because I waited for the other party to break the silence. Though the latter is never in our control, the former definitely is—at least for me now.",
  "At the station, my first expression looking at the guests was a smile because every time I looked at them, it radiated a vibrant feeling in me. When I look back, it was because of the contentment brought to me by the arrival of the guests. I had done a lot of hard work to make that event possible, and seeing the guests, who indeed were our first outside-valley participants, was quite satisfying. Meanwhile, there was evident exhaustion in their faces because of the 9-hour road trip. Therefore, I booked a cab to quickly escort them to their hotel.",
  "Reaching our destination would take a minimum of one hour—a time enough for people to have lengthy conversations and understand each other. More importantly, one can’t simply keep his hands folded and look at the background scenery throughout that period. For a few minutes, there was pin-drop silence. Someone had to break it, which I also knew. “You are the president. How can you be so reckless to avoid speaking with the guests of your own event?” My inner self fired me this question time and again, and honestly, I didn’t have an answer.",
  "Regardless of any challenges, I had never been a reckless leader. To prove this, I started the conversation: “How was your journey, sir? How often have you been to Kathmandu?” This question was a small initiative for the beginning of a beautiful conversation that would not only be limited in the introduction but would stretch over wide subjects related to the Kathmandu valley. We touched upon the culture, language, hardships, natural beauty, and overall life in the valley. From the conversation, I also got to know the inner desire of the guests to visit Basantapur Durbar Square, a historic place in Kathmandu which is also listed in the UNESCO’s world heritage list. Therefore, I managed a Basantapur visit for the guests later that day and accompanied them as a tour guide.",
  "It has always been like this: leadership inspires me to lose anxiety, forget all my limitations, and be a believer. I thrive in my interpersonal skills, become audacious, and build confidence to embrace things that I care about. The same spirit commanded me to lead the BloomED project and put in efforts towards my commitment to developing the Ed-tech sector in Nepal. The same spirit also empowered me to commence environmental advocacy at Clean Energy Nepal and work towards my love and concern for mother nature. And the same spirit motivated me to launch the startup idea of Math World Nepal as a solution to narrow the gap between Nepalese students and the rest of the world while learning Mathematics.",
  "Today, having realized the power of leadership, I look forward to making continued efforts in growing as a leader. Having developed myself as a visionary and capable leader in the future, I want to put my best foot forward in developing something tangible for society with my intellect and leadership."
);
const activism_p_text = new Array(
  "A bam on the door shook me awake.",
  "“Get up, Adit! It’s already past your running time.”",
  "I perceived it was mom's utterance and glanced at the wall clock—6:15. I could feel the guilty conscience in me, making my heart thump louder than ever before. I had set a new record: waking up after 6 for over one whole month now.",
  "I quickly wore my tracksuit and rushed towards the kitchen to eat something. Like other days, my mom had already cooked dal for the morning meal. What was unusual though was that she was constantly yawning. However, this would not stop her from chopping vegetables for tarkari.",
  "My mom is my superhero: not because she is made of steel, but because of her steel-like resolve. She moved to Kathmandu after my dad’s first spinal surgery in August of 2018, and every day since has accepted any pain for the sake of the family. Along with the household chores, she finds time to back me in every way: be it cooking food, waking early, or massaging my body after extensive practice.",
  "Every moment inside the kitchen, my actions of the past month reminded me of my betrayal to my superhero, but more importantly, to myself. I reproached myself for being a reckless person; the feeling was agonizing. I promised myself, ”I’ll wake up on time from tomorrow.”",
  "The next morning, I got woken up by the sound of the alarm. Snoozing it, I stuffed myself inside the blanket. “I’ll wake up on time from tomorrow.” The previous day’s promise appeared in my memories. Every second after this, my heart exhorted me to wake up. Impulsively, I came out of the blanket and brushed my teeth before the alarm rang again. After exercising for 30 minutes, I went running exactly on time.",
  "Ever since I developed a passion for long-distance running, winning marathons became the ultimate dream. 5th St. Xaviers Mini-marathon, my high school’s national level competition, was just around the corner. But to have any chance of winning, I still needed to improve my endurance. Therefore, I went with my first conscience—to push myself the hardest I can. This meant practicing progressive rigor, done by adding a kilometer or two at the end of every running session until I ran out of breath.",
  "On Marathon day, I ran one of the hardest-fought races of my life, leading me to not only becoming the second runner-up but also breaking my personal best by four minutes. During the award ceremony, I felt a humbling sense of victory walking up to the stage. Never before, the fruits of discipline and hard work had raised so much self-respect and happiness in me. I wanted to have such contentment in everything I did.",
  "Click! A nearby cameraman snapped my photo, flashing in the memories of two months—the strenuous preparation. I knew what I had to do.",
  "You know that one child who was hellbent on achieving his goals? It is not that he lives free from distractions but he carries a vitality for life that helps him optimize productivity. The same vitality has given him the ability to introspect, outdo lethargies and temptations, and push him to be the person he is today.",
  "This is my story, a story of proactiveness. Such energy wakes me up at 5 AM every morning, motivates me to maintain strict diets, and empowers me to practice regularly for marathons. Such energy is far beyond everything and applies to the way I look at the world with every promise I do, every activity I initiate, and every decision I make."
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
