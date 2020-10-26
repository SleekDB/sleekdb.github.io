<?php
  require_once './vendor/autoload.php';
  require_once './dbinit.php';
  $all = $versionStore->fetch();
?>

<style>
  div.version-wrapper {
    display: inline;
  }
  div.version-wrapper select.version {
    height: 20px;
    outline: none;
  }
</style>

<div class="version-wrapper">
  Version: 
  <select class="version button name=" id="">
    <?php
      foreach ($all as $key => $ver) {
        echo '<option>'.$ver['name'].'</option>';
      }
    ?>
  </select>
</div>