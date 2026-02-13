const form = document.getElementById("eventForm");
const eventList = document.getElementById("eventList");
const clearBtn = document.getElementById("clearEvents");
const sampleBtn = document.getElementById("sampleEvents");
const demoBox = document.getElementById("demoBox");

let events = [];

function renderEvents() {
  eventList.innerHTML = "";

  if (events.length === 0) {
    eventList.innerHTML = `<p class="empty">No events yet. Add your first event!</p>`;
    return;
  }

  events.forEach(event => {
    const div = document.createElement("div");
    div.classList.add("event");

    div.innerHTML = `
      <strong>${event.title}</strong><br>
      ${event.date} | ${event.category}<br>
      ${event.description}
    `;

    eventList.appendChild(div);
  });
}

form.addEventListener("submit", e => {
  e.preventDefault();

  const newEvent = {
    title: document.getElementById("title").value,
    date: document.getElementById("date").value,
    category: document.getElementById("category").value,
    description: document.getElementById("description").value
  };

  events.push(newEvent);
  renderEvents();
  form.reset();
});

clearBtn.addEventListener("click", () => {
  events = [];
  renderEvents();
});

sampleBtn.addEventListener("click", () => {
  events = [
    {
      title: "Tech Conference",
      date: "2026-03-10",
      category: "Conference",
      description: "AI and Data Science event"
    },
    {
      title: "Team Meeting",
      date: "2026-03-15",
      category: "Meeting",
      description: "Project discussion"
    }
  ];
  renderEvents();
});
