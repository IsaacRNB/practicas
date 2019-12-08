<?php
    
    namespace proyecto;
 

    /**
     * Class Persona
     */
    
    class Ciudad extends Models
    {
        /**
         * @var array
         */
        protected $filleable = ["nombre", "estado"];
        protected $table = "ciudades";
        public $nombre = "";
        public $edad = "";
        public $apellido_paterno = "";
        public $apellido_materno = "";
        
    }
