<?php
    class MegaDrive2{
        private $controller1;
        private $controller2;

        public function __construct(){
            $this->controller1 = new Controller();
            $this->controller2 = new PowerGlove();
        }
    }