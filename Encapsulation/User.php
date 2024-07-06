<?php
class User
{
    private $email;
    private $password;

    public function __construct($email, $password)
    {
        $this->email = $email;
        $this->password = $password;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($email)
    {
        if (preg_match('#(.*)@(.*)', $email)) {
            $this->email = $email;
        }else{
            throw new Exception("Email is not valid");
        }
    }
}
