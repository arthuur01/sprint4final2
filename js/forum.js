function search(event) {
    event.preventDefault(); 
  
    var searchInput = document.getElementById("searchInput").value;
    var periodoSelect = document.getElementById("filtroSelect").value;
    var dateInput = document.getElementById("dateInput").value;
  
    var posts = [
        {
        local: "Local 1",
        data: "2023-06-11",
        horario: "10:00",
        detalhes: "Detalhes do Post 1"
      },
      {
        local: "Local 2",
        data: "2023-06-12",
        horario: "15:30",
        detalhes: "Detalhes do Post 2"
      },
      {
        local: "Local 3",
        data: "2023-06-13",
        horario: "09:00",
        detalhes: "Detalhes do Post 3"
      },
      {
        local: "Local 4",
        data: "2023-06-14",
        horario: "14:00",
        detalhes: "Detalhes do Post 4"
      },
      {
        local: "Local 5",
        data: "2023-06-15",
        horario: "17:30",
        detalhes: "Detalhes do Post 5"
      },
      {
        local: "Local 6",
        data: "2023-06-16",
        horario: "11:00",
        detalhes: "Detalhes do Post 6"
      },
      {
        local: "Local 7",
        data: "2023-06-17",
        horario: "19:00",
        detalhes: "Detalhes do Post 7"
      },
      {
        local: "Local 8",
        data: "2023-06-18",
        horario: "16:30",
        detalhes: "Detalhes do Post 8"
      },
      {
        local: "Local 9",
        data: "2023-06-19",
        horario: "12:30",
        detalhes: "Detalhes do Post 9"
      }
    ];
    if (!searchInput && !periodoSelect && !dateInput) {
        clearCards();
        for (var i = 0; i < posts.length; i++) {
          var card = createCard(posts[i].local, posts[i].data, posts[i].horario, posts[i].detalhes);
          addCardToContainer(card);
        }
        return;
      }
    var filteredPosts = posts.filter(post => {
      if (searchInput && !post.local.toLowerCase().includes(searchInput.toLowerCase())) {
        return false;
      }
      if (periodoSelect && post.periodo !== periodoSelect) {
        return false;
      }
      if (dateInput && post.data !== dateInput) {
        return false;
      }
      return true;
    });
  
    clearCards();
  
    for (var i = 0; i < filteredPosts.length; i++) {
      var card = createCard(filteredPosts[i].local, filteredPosts[i].data, filteredPosts[i].horario, filteredPosts[i].detalhes);
      addCardToContainer(card);
    }
  }
  
  function createCard(local, data, horario, detalhes) {
    var container = document.createElement("div");
    container.className = "container2";
  
    var title = document.createElement("h1");
    title.style.textAlign = "center";
    title.innerHTML = local;
    container.appendChild(title);
  
    var paragraph1 = document.createElement("p");
    paragraph1.innerHTML = "Data: " + data;
    container.appendChild(paragraph1);
  
    var small = document.createElement("small");
    small.innerHTML = "Horário: " + horario;
    container.appendChild(small);
  
    var paragraph2 = document.createElement("p");
    paragraph2.innerHTML = "Detalhes: " + detalhes;
    container.appendChild(paragraph2);
  
    return container;
  }
  
  function addCardToContainer(card) {
    var container = document.querySelector(".box");
    container.appendChild(card);
  }
  
  function clearCards() {
    var container = document.querySelector(".box");
    container.innerHTML = "";
  }
  