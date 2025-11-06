# Sato custom code documentation

## Step 1: Create a div with an id, wherever you want to add the video player, and name it as you wish.

#### For this demo, we are naming the id as "player"

```html
<div id="player"></div>
```

<!-- ## Step 2: Pass the attributes: data-src (custom video url) and data-media-type (custom video media type)to the div you created in Step 1, like the example below.

### Note : If the video type is hls then pass the data-media-type as "hls", otherwise you need to pass it as "mp4" (Currently Splay supports only "hls" and "mp4")

```html
Example :

<div
  id="player"
  data-src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
  data-media-type="hls"
></div>
``` -->

## Step 2: Copy this CSS link

`
https://splay-plugin-web.s3.ap-south-1.amazonaws.com/production/v0.1.58/index.css`

## Step 3: Create a 'link' tag and add the CSS link you copied in Step 3.

```html
<link
  rel="stylesheet"
  href="https://splay-plugin-web.s3.ap-south-1.amazonaws.com/production/v0.1.58/index.css"
/>
```

## Step 4: Now copy this JS link

`
https://splay-plugin-web.s3.ap-south-1.amazonaws.com/production/v0.1.58/index.js`

## Step 5: Create a 'script' tag inside body element and add the JS link you copied in Step 5

```html
<script src="https://splay-plugin-web.s3.ap-south-1.amazonaws.com/production/v0.1.58/index.js"></script>
```

<!-- ```html
<head>
  <link
    rel="stylesheet"
    href="https://splay-plugin-web.s3.ap-south-1.amazonaws.com/production/v0.1.58/index.css"
  />
</head>

<body>
  <div
    id="player"
    data-src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    data-media-type="hls"
  ></div>

  <script src="https://splay-plugin-web.s3.ap-south-1.amazonaws.com/production/v0.1.58/index.js"></script>
</body>
``` -->

## Step 6: To add functionality to the video player, add the following code to your main JS file or under 'script' tag inside the body element of HTML.

### Note: For No-code builders like Webflow, it is to be added in the custom code field.

#### To use in JS file

```js
const id = "b8579cc0-9d40-43ef-8636-a32976e84899";

const player = new window.SkaraPlayer("player", id);
player.start();
```

#### To use in HTML script tag

```html
<body>
  <script>
    const id = "b8579cc0-9d40-43ef-8636-a32976e84899";

    const player = new window.SkaraPlayer("player", id);
    player.start();
  </script>
</body>
```

### Note : Sato player required parameter is 'id', which is available on the Sato dashboard.

<!-- ### The div id is the one you created in Step 2 -->

## Step 7 : To add custom play and pause button, write this in the HTML file

```html
<button id="play-btn">play</button>

<button id="pause-btn">puase</button>
```

## Step 8 : To add custom play and pause button functionality, use the following in JS file or HTML script tag created in Step 7

```js
const playBtn = document.querySelector("#play-btn");
playBtn.addEventListener("click", () => player.play());

const pauseBtn = document.querySelector("#pause-btn");
pauseBtn.addEventListener("click", () => player.pause());
```

## This is what the code will finally look like

#### For usage in HTML only

```html
<html>
  <head>
    <link
      rel="stylesheet"
      href="https://splay-plugin-web.s3.ap-south-1.amazonaws.com/production/v0.1.58/index.css"
    />
  </head>

  <body>
    <div id="player"></div>

    <button id="play-btn">play</button>
    <button id="pause-btn">puase</button>

    <script src="https://splay-plugin-web.s3.ap-south-1.amazonaws.com/production/v0.1.58/index.js"></script>
    <script>
      const id = "b8579cc0-9d40-43ef-8636-a32976e84899";

      const player = new window.SkaraPlayer("player", id);
      player.start();

      const playBtn = document.querySelector("#play-btn");
      playBtn.addEventListener("click", () => player.play());

      const pauseBtn = document.querySelector("#pause-btn");
      pauseBtn.addEventListener("click", () => player.pause());
    </script>
  </body>
</html>
```

#### For usage in HTML and JS

```html
index.html ->

<html>
  <head>
    <link
      rel="stylesheet"
      href="https://splay-plugin-web.s3.ap-south-1.amazonaws.com/production/v0.1.58/index.css"
    />
  </head>

  <body>
    <div id="player"></div>

    <button id="play-btn">play</button>
    <button id="pause-btn">puase</button>

    <script src="https://splay-plugin-web.s3.ap-south-1.amazonaws.com/production/v0.1.58/index.js"></script>
    <script src="index.js"></script>
  </body>
</html>
```

```js
index.js ->

const id = "b8579cc0-9d40-43ef-8636-a32976e84899";

const player = new window.SkaraPlayer("player", id);
player.start();

const playBtn = document.querySelector("#play-btn");
playBtn.addEventListener("click", () => player.play());

const pauseBtn = document.querySelector("#pause-btn");
pauseBtn.addEventListener("click", () => player.pause());
```

## Available methods

### Start

Starts the player

```
player.start()
```

### Play

- Attempts to begin playback of the media.
- It returns a `Promise` which is resolved when playback has been successfully started.

```
player.play()
```

### Pause

- Method will pause playback of the media,
- if the media is already in a paused state this method will have no effect.

```
player.pause()
```

### Toggle full screen

```
player.toggleFullScreen()
```

### Toggle mute

A `true` value means the player is muted

```
player.muted(true)
```

### Increase volume

The value to increase volume

```
player.incVolume(1)
```

### Decrease volume

The value to decrease volume

```
player.decVolume(1)
```

### Seek forward

The number of seconds the go forward

```
player.seekForward(10)
```

### Seek backward

The number of seconds the go backward

```
player.seekBackward(10)
```
