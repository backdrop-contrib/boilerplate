<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en" xml:lang="<?php print $language->language; ?>" lang="en" dir="<?php print $language->dir; ?>" <?php print $rdf_namespaces; ?>> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en" xml:lang="<?php print $language->language; ?>" lang="en" dir="<?php print $language->dir; ?>" <?php print $rdf_namespaces; ?>> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en" xml:lang="<?php print $language->language; ?>" lang="en" dir="<?php print $language->dir; ?>" <?php print $rdf_namespaces; ?>> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" xml:lang="<?php print $language->language; ?>" lang="en" dir="<?php print $language->dir; ?>" <?php print $rdf_namespaces; ?>> <!--<![endif]-->

<head profile="<?php print $grddl_profile; ?>">
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>
  <?php print $styles; ?>
  <?php print $scripts; ?>
</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?>>
  <div id="skip">
    <a href="#main-menu"><?php print t('Jump to Navigation'); ?></a>
  </div>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
</body>
</html>
