function OnCollisionEnter(collision : Collision) { 
    if (collision.gameObject.name == "Sphere"){ // if the hit object's name is Wall...
        Destroy(collision.gameObject); // destroy it
    }
}