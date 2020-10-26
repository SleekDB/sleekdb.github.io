<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SleekDB Documentatior</title>
</head>
<body>

<style>
  * {
    font-family: sans-serif;
  }
  body {
    font-size: 14px;
  }
  .p10 {
    padding: 10px;
  }
  .pt10 {
    padding-top: 10px;
  }
  .text-right {
    text-align: right;
  }
  div.header-wrapper {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .button {
      height: 18px;
      padding: 2px 8px;
      border: 1px solid #F3F3F3;
      -moz-box-shadow: 0 0 0 1px #707070;
      -webkit-box-shadow: 0 0 0 1px #707070;
      box-shadow: 0 0 0 1px #707070;
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
      border-radius: 3px;
      background: -moz-linear-gradient(top, #F2F2F2 0%, #EBEBEB 50%, #DDDDDD 51%, #CFCFCF 100%);
      background: -webkit-gradient(linear, left top, left bottom, color-stop(0,#F2F2F2), color-stop(0.5,#EBEBEB),color-stop(0.51,#DDDDDD),color-stop(1,#CFCFCF));
      background: linear-gradient(top, #F2F2F2 0%, #EBEBEB 50%, #DDDDDD 51%, #CFCFCF 100%);
      font: normal 12px sans-serif;
      color: black;
      text-decoration: none;
  }
  .button:hover {
      border: 1px solid #ECF7FD;
      -moz-box-shadow: 0 0 0 1px #3C7FB1;
      -webkit-box-shadow: 0 0 0 1px #3C7FB1;
      box-shadow: 0 0 0 1px #3C7FB1;
      background: -moz-linear-gradient(top, #EAF6FD 0%, #D9F0FC 50%, #BEE6FD 51%, #A7D9F5 100%);
      background: -webkit-gradient(linear, left top, left bottom, color-stop(0,#EAF6FD), color-stop(0.5,#D9F0FC),color-stop(0.51,#BEE6FD),color-stop(1,#A7D9F5));
      background: linear-gradient(top, #EAF6FD 0%, #D9F0FC 50%, #BEE6FD 51%, #A7D9F5 100%);
  }
  .button:active {
      padding: 2px 7px 3px 9px;
      border: 1px solid #73A7C4;
      border-bottom: 0;
      -moz-box-shadow: 0 0 0 1px #2C628B;
      -webkit-box-shadow: 0 0 0 1px #2C628B;
      box-shadow: 0 0 0 1px #2C628B;
      background: -moz-linear-gradient(top, #E5F4FC 0%, #C4E5F6 50%, #98D1EF 51%, #68B3DB 100%);
      background: -webkit-gradient(linear, left top, left bottom, color-stop(0,#E5F4FC), color-stop(0.5,#C4E5F6),color-stop(0.51,#98D1EF),color-stop(1,#68B3DB));
  }

</style>

<div class="header-wrapper">
  <?php require_once './versions.php'; ?>
  <a class="button" href="addversion.php">Add Version</a>
  <a class="button" href="adddocument.php">Add Document</a>
  <a class="button" href="build.php">Build</a>
  <a class="button" href="publish.php">Publish</a>
</div>
<hr />

<?php 
  if (isset($_GET['success'])) {
    echo '<div class="p10"><span style="margin-right: 10px;">✅</span>' . $_GET['success'] . '</div>';
  }
?>