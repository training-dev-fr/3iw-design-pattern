<?php

class AdaptaterMap implements Imap{
    private $externalMap;
    
    public function __construct(ExternalMap $externalMap)
    {
        $this->externalMap = $externalMap;
    }

    public function getPosition($lat,$long){
        $position = new stdClass();
        $position->lat = $lat;
        $position->long = $long;
        return $this->externalMap->getLocation($position);
    }

    public function searchByCity($city){
        //
    }
}