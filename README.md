# RPGGame

<img src="https://user-images.githubusercontent.com/103478551/210188655-ce0c1a1a-1c0e-4a65-b33a-81c35d54e56e.jpg">

Welcome to the RPG game!
This game is a text-based adventure that allows you to explore a fantasy world, complete quests, and fight monsters as you progress through the story.
As you explore the world, you will encounter various NPCs (non-player characters) who will offer quests for you to complete. These quests may involve retrieving an item, defeating a certain number of enemies, or solving a puzzle. Completing quests will reward you with experience points, which will allow you to level up and become more powerful. In addition to completing quests, you will also encounter monsters as you explore the world. You can choose to fight them or try to run away, but be warned: the monsters in this game are not easy to defeat! Be sure to use your abilities and items wisely in combat to give yourself the best chance of victory.

<h2 id="top">Table of Contents</h2>

* [Languages used](#languages)
* [Supported functionality](#functionality)
  + [Sign Up](#sign-up)
  + [Log In or Out](#log-in-or-out)
  + [Follow or Unfollow a User](#follow-or-unfollow-a-user)
  + [Scroll Through Feed](#scroll-through-feed)
  + [Create a Post](#create-a-post)
  + [Like or Unlike a Post](#like-or-unlike-a-post)
  + [Add Profile Status](#add-profile-status)
  + [Change Profile or Background Picture](#change-profile-or-background-picture)
* [Backend](#backend)
* [Installation](#installation)

## Languages
[![Typing SVG](https://readme-typing-svg.demolab.com/?lines=Languages;)](https://git.io/typing-svg)
<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/> 
<img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=whit"/>
<img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white"/>
</p>
<br>
<a href="#top" class="btn">Back to table of contents</a>
<hr>

## Functionality

#### Sign Up
![image](https://user-images.githubusercontent.com/103478551/209669670-178f3942-f529-4717-9d38-fa2ade107b93.png)
Signing up adds the new user to the database, and gives them the default profile and background image. It checks to see if passwords match, and checks if the user already exists in the database before doing so. 
<br>
<a href="#top" class="btn">Back to table of contents</a>
<hr>

#### Log In or Out
<img src="https://media.giphy.com/media/LdoUkF2twXT4gkoihl/giphy.gif" width="900" height="730">
Logging in simply checks if the user exists in the databse. If so, it checks if the passwords match. If so, then they can move on their own home page. 
Logging out simply clears the memory of the browser such that the user has to log back in, either with the same credentials or a different one. 
<br>
<a href="#top" class="btn">Back to table of contents</a><hr>

#### Follow or Unfollow a User
Following a user and unfollowing them is similar to liking the post. Clicking the follow button allows the user to be added to the userBeingFollowed's array of followers, and adds the userBeingFollowed to the user's array of followings. Pressing the button again reverses this process. This is shown above. 
![image](https://user-images.githubusercontent.com/103478551/209669125-72bd695a-6728-4076-acfb-eb4087ddff74.png)
<br>
<a href="#top" class="btn">Back to table of contents</a><hr>

#### Scroll Through Feed
<img src="https://media.giphy.com/media/ZFBd9pxKvjqMK1Aqgk/giphy.gif" width="900" height="730">
The feed is created by appending all the posts of the users who are followed in the database, then ordering the posts using the timestamps so that the most recent post in on top. 
<br>
<a href="#top" class="btn">Back to table of contents</a><hr>

#### Create a Post
<img src="https://media.giphy.com/media/HPUz3qclIElvlhsMyf/giphy.gif" width="900" height="730">
One can create a post that includes a text, an image, or both. The functionality is supported for any option, and each post has its own ID in the backend, and is timestamped so that they are shown in chronological order.
<br>
<a href="#top" class="btn">Back to table of contents</a><hr>

#### Like or Unlike a Post
<img src="https://media.giphy.com/media/wpVh4p82R9T7XxPsrd/giphy.gif" width="900" height="730">
Liking a post is simply done through pressing the like button, which increments the post's number of likes by 1. Clicking the button again removes the like from the post
<br>
<a href="#top" class="btn">Back to table of contents</a><hr>

#### Add Profile Status
<img src="https://media.giphy.com/media/fq8JaLSUalKxwwKbAt/giphy.gif" width="900" height="730">
At the click of a button, the user is able to access their status. They can change the fields, their information, and the respective picture, for background and profile. 
<br>
<a href="#top" class="btn">Back to table of contents</a><hr>

#### Change Profile/Background Picture]
<img src="https://media.giphy.com/media/74f209Zeae9b08qCag/giphy.gif" width="900" height="730">
This is performed in the same way as above
<br>
<a href="#top" class="btn">Back to table of contents</a><hr>
<hr>


## Installation

- First, make sure that you have the necessary files for the game saved on your computer, downloaded from this github repository. 
- These include an HTML file, a CSS file, and a JavaScript file. 
- Open the HTML file in your text editor. 
- This file should contain the basic structure of the game and links to the CSS and JavaScript files. 
- Modify the HTML, CSS, and JavaScript files as needed to customize the game.
- Save the modified files and open the HTML file in your web browser. 
- The game should now be running and ready to play.
