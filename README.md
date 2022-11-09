<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ph-castle/apples2oranges">
    <!-- ******************************************************************** -->
    <img src="https://i.imgur.com/1p7rmlS.gif" alt="Logo">
  </a>

  <h3 align="center">Apples to Oranges</h3>

  <p align="center">
    Apples to Oranges is a fun card game where players submit answer cards to pair with a prompt card. Judges select their favorite card and the players accumulate points for selected cards. This online multiplayer version allows you to play with your friends wherever you are! NSFW option increases the hilarity of gameplay. Create an account and save custom cards to mix things up!
    <br />
    <a href="https://www.cardsagainsthumanity.com/about">Learn more about the game!!!</a>
    <br />
    <br />
   ·
    <a href="https://github.com/ph-castle/apples2oranges">View Demo(DEMO LINK HERE!!!!)</a>

  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

![Gameplay](https://i.imgur.com/zKfnLUM.gif)

Apples to Oranges is a multiplayer card matching game with live chat, music, and interactive UI.

<!-- MORE about what problems we solved here!!!! -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With
<div align="start">

* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
* ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) 
* ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) 
* ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) 
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) 
* ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) 	
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) 
* ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) 
* ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
* ![Boardgame.io](https://img.shields.io/badge/Boardgame.io-bg.io-lightgrey)
* ![Material UI](https://img.shields.io/badge/Material%20UI-MUI-blue)
* ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
* ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
* ![Spotify](https://img.shields.io/badge/Spotify-1ED760?style=for-the-badge&logo=spotify&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

These are instructions on how to get started fast!
 
To run the game in production mode, you need to set debugger to false in ApplesClient.js

You need to have a premium spotify account to access the music player.
Also, create your Spotify developer account here [HERE!]([HERE!](https://developer.spotify.com/dashboard/applications))
and create an app for this project to get client id & client secret. This is optional and will not affect the 
gaming functionality.
To support the upload of user avatar pictures, you will need to create a Cloudinary account (also optional).

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ph-castle/apples2oranges.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
4. Install react-share
   ```js
   npm run install2
   ```   
5. Make a copy of the sample.env file and rename it as .env. Update the env file with correct information.
   ```js
   cp ./sample.env .env
   ```      
6. Run client, server, and boardgame-server each in its own terminal
   ```sh
    npm start
    npm run postgres-server or postgres-server-dev (development mode)
    npm run bg-server
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Screenshots

<details> 
  <summary> Login and Custom Cards </summary>
  <img src="https://i.imgur.com/04x1fgr.gif" alt="Logo">
</details>

<details>
  <summary> Chat </summary>
  <img src="https://i.imgur.com/zJwSFa3.gif" alt="Logo">
</details>

### Contribution
  * ### Project Manager by Royce Chun
    * Backend APIs and database
    * Live Chat Box
    * Custom Cards Functionality
  * ### Project Manager by Caroline Peake
    * Dynamic SPA Routing
  * ### Architect by Andrew Schwaderer
    * Core Game Logic
    * Deployment
  * ### Architect by Kesang Dingtsa
    * User Form and UI
    * Lobby Component functionality
    * Connecting clients into games utilizing built in websocket
  * ### Morale Manager by Daniel Chu
    * Game Score Board
    * Base Game Board Design
  * ### Workflow Manager by Jessica Chen
    * User Authentication and Security
    * Backend APIs and database
    * Live Chat Box
    * Social Media Sharing
  * ### UI / UX by Coty Janeway
    * Interactive Game Design
    * Card Data Collection
    * Styling
  * ### UI / UX by Heemo Yang
    * Interactive Background for UX
    * Spotify Music Player

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Team Links

<table>
  <tr>
    <th>Royce C.</th>
    <th>Caroline P.</th>
    <th>Andrew S.</th>
    <th>Kesang D.</th>
    <th>Daniel C.</th>
    <th>Jessica C.</th>
    <th>Coty J.</th>
    <th>Heemo Y.</th>
  </tr>
  <tr>
    <td>
<!-- GITHUB LINKS      -->
      <a href="https://github.com/rochun"> <!-- Royce    -->
        <img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
      </a>
    <td>
      <a href="https://github.com/carolinepeake"> <!-- Caroline    -->
        <img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/blandschwad"> <!-- Andrew    -->
        <img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/kesang20"> <!-- Kesang    -->
        <img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
      </a>
    </td>
    </td>
    <td>
      <a href="https://github.com/crypto-bender"> <!-- Daniel    -->
        <img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/codingavatar">  <!-- Jessica    -->
        <img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
      </a>
    </td>
  <td>
      <a href="https://github.com/CotyJ">  <!-- Coty    -->
        <img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/heemo521">  <!-- Heemo    -->
        <img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
      </a>
    </td>
  </tr>
  <tr>
      <!-- LINKEDIN LINKS      -->
    <td>
      <a href="https://www.linkedin.com/in/royce-chun/"> <!-- Royce    -->
        <img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
      </a>
    </td>
    <td>
      <a href="https://www.linkedin.com/in/caroline-k-peake/">  <!-- Caroline    -->
        <img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
      </a>
    </td>
    <td>
      <a href="https://www.linkedin.com/in/aschwad/">  <!-- Andrew    -->
        <img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
      </a>
    </td>
     <td>
      <a href="https://www.linkedin.com/in/tsering-kesang-dingtsa/"> <!-- Kesang    -->
        <img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
      </a>
    </td>
   <td>
      <a href="https://www.linkedin.com/in/chuda/"> <!-- Daniel    -->
        <img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
      </a>
    </td>
   <td>
      <a href="https://www.linkedin.com/in/jessica-chen-md/"> <!-- Jessica    -->
        <img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
      </a>
    </td>
   <td>
      <a href="https://www.linkedin.com/in/CotyJ/"> <!-- Coty    -->
        <img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
      </a>
    </td>
   <td>
     <a href="https://www.linkedin.com/in/heemo-yang/"> <!-- Heemo    -->
        <img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
      </a>
    </td>
  </tr>
</table>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

