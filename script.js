const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Arrête de me chauffer, Nagatoro  - épisode 1 VOSTFR",
      description: "Vous regardez",
      image: "https://cdn.statically.io/gh/Anime-Sama/IMG/img/animes/animes%20wallpapers/ijiranaide-nagatorocarousel.jpg",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m110.syncusercontent.com/mfs-60:85b2a655b3fb582b11beb2b67c6b18e6=============================/p/épisode%201.mp4?allowdd=0&datakey=gqWEvCWsNIGtuO8KhxNC7gOPgsCstq07JIdQYyaoLNdOxVqCxC8nFUWOGOiYn2oLZ0SQKFgNsbLNgEDZzjGclgwheqaRg8Lkr1SW8uqLRnbvDALUfBn9QhqjEquU20asu1EZzrED0ovFLYl1uF/wSCjfjsE8C5ii4TCVFKfpotw3/37w1tsFfveoEWaQKH8ety/WqYLESdTGirAmrYX1UJEKxSyBE78WqRCbvs8D8tyBX6TWRTdqRxDpS6R6NKgHxTHzjeYUHYnUgsEKlAow9+SkWedSsISIYWhZZgA2fcn9kFb8uzkkHN0q0LULodt10Eadk9ZHxtGGgeR1pP7RUg&engine=ln-2.3.7.3&errurl=YSdBvM2GhI9R/JuXwg3nlG8bx/nZkSGlloeSmyOGeTG7bBr7lqHtVzRVAWqNzXYh9/BFD1RzigxdeylhpcXh+3acg7qBOChautuPCA8tybl0cDHzzXldCrmHH1+EiPvAS52Ljy426M4iqeExuIgRxFF4UJA1r1Umd2e+HIBXLdVmdDVuHRgUuo0YtC3Gjqj6fQHbL6/xPFhvZ5aFjrJWfZytufn+kxm4VzUxCJD902Tm9QcK8YUEbv1vfrXCgsh6AaBPD0tFRe9awc6MSbhl8WPeJDj3LAgJ75IxfASPPk7PWS95Trxr2f8WeIeIonocSfSYAzWOu7ll7RLDckY8Lg==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iJUMzJUE5cGlzb2RlJTIwMS5tcDQiO2ZpbGVuYW1lKj1VVEYtOCcnJUMzJUE5cGlzb2RlJTIwMS5tcDQ7&ipaddress=1458994159&linkcachekey=90e5d0bb0&linkoid=1982860011&mode=101&sharelink_id=9628443550011&timestamp=1672607240522&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=fcde4dd1a61c34a4a8df4bdab3d05eaa2f1f71da&cachekey=60:85b2a655b3fb582b11beb2b67c6b18e6=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
