<?php
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

date_default_timezone_set('America/Lima');
require_once "vendor/autoload.php";

$isDevMode = true;
$config = Setup::createAnnotationMetadataConfiguration(array(__DIR__."/src"), $isDevMode, $proxyDir, $cache, $useSimpleAnnotationReader);
$conn = array(
'host' => 'ec2-46-137-124-19.eu-west-1.compute.amazonaws.com',
'driver' => 'pdo_pgsql',
'user' => 'jaohvtlhimtrkk',
'password' => '361dc5ed0468c502de20a9d7d3cb4de1b77faeb463be3171c7f2956d06415cd8',
'dbname' => 'd650o1vmcqppr7',
'port' => '5432'
);


$entityManager = EntityManager::create($conn, $config);

return $entityManager;