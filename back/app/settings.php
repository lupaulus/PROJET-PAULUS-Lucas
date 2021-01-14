<?php
declare(strict_types=1);

use DI\ContainerBuilder;
use Monolog\Logger;

return function (ContainerBuilder $containerBuilder) {
    // Global Settings Object
    $containerBuilder->addDefinitions([
        'settings' => [
            'displayErrorDetails' => true,
            'logger' => [
                'name' => 'slim-app',
                'path' => isset($_ENV['docker']) ? 'php://stdout' : __DIR__ . '/../logs/app.log',
                'level' => Logger::DEBUG,
                'file_permission' => 0775
            ],
            'doctrine' => [
                'meta' => [
                    'entity_path' => [
                        '/src'
                    ],
                    'auto_generate_proxies' => true,
                    'proxy_dir' =>  __DIR__.'/../cache/proxies',
                    'cache' => null,
                ],
                'connection' => [
                    'driver'   => 'pdo_pgsql',
                    'host'     => 'ec2-46-137-124-19.eu-west-1.compute.amazonaws.com',
                    'dbname'   => 'd650o1vmcqppr7',
                    'user'     => 'jaohvtlhimtrkk',
                    'password' => '361dc5ed0468c502de20a9d7d3cb4de1b77faeb463be3171c7f2956d06415cd8',
                ]
            ]
        ],
    ]);
};