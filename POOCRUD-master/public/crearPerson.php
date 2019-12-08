<?php
    namespace proyecto;

    use function extract;
    extract($_GET);

    try{
     require("../vendor/autoload.php");
        $persona = new Persona();
        $persona->nombre = $nombre;
        $persona->edad = $edad;
        $persona->ApellidoPaterno = $ApellidoPaterno;
        $persona->ApellidoMaterno = $ApellidoMaterno;
        $persona->save();

        echo json_encode(["status"=> 1,"datos"=> $persona]);

    } catch (Exception $e) {
                echo json_encode(["status"=> 0,"datos"=> $persona]);

    }
?>