<?php

  require_once './vendor/autoload.php';
  require_once './dbinit.php';

  if(isset($_POST['submitted'])) {
    if (!empty($_POST['name'])) {
      $versionStore->insert([
        'name' => $_POST['name']
      ]);
      header("Location: addversion.php?success=New version has been added");
    }
  }

  require_once './header.php';

  $all = $versionStore->fetch();
  echo "<div class='p10'>";
    echo "Available versions: ";
    foreach ($all as $key => $ver) {
      echo '<span style="margin-right: 15px;">'.$ver['name'].'</span>';
    }
  echo "</div>";

  ?>

  <form class="p10" action="addversion.php" method="post">
    <div>
      <i>Version Name*</i>
      <input type="text" name="name" required/>
    </div>
    <div class="pt10">
      <button class="button" name="submitted">Add</button>
    </div>
  </form>

  <?php require_once './footer.php';