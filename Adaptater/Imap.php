<?php
    interface IMap{
        public function getPosition($lat,$long);

        public function searchByCity($city);
    }