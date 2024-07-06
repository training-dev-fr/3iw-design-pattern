<?php
    $hello = new Hello();
    $hello = new BirthdayHelloDecorator($hello);
    echo $hello->sayHello("Aurélien");