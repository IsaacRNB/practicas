<?php
    
    namespace proyecto;
    
    use Exception;

   try{
  require("../vendor/autoload.php");
  
//

        $p = new Persona();
        $p->nombre = "";
        $p->edad = "";
        $p->apellido_paterno = "";
        $p->apellido_materno = "";
        $p->save();

        $c = new Ciudad();
        /*
        $c->nombre = "Monterrey";
        $c->estado = "Nuevo Leon";
        $c->save();
        */

      echo($p->nombre);
      echo($c->nombre);

      $c->delete(5);
      $c->find(6);
      $p->PersonasMayores(30);
//
//
    } catch (Exception $e) {
           echo($e->getMessage());
    }
//






