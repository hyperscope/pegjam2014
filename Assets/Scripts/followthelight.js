 	var target : Transform;
    var smoothTime = 0.3;
    var xOffset : float = 1.0;
    var zOffset : float = 1.0;
 
    private var thisTransform : Transform;
    private var velocity : Vector2;
    private var shouldFollow : boolean = true;
 	public var AIWander : AIWander;
 
   function Start()
    {
       thisTransform = transform;
   }
 
    function LateUpdate()
    {
   if (shouldFollow) {
           thisTransform.position.x = Mathf.Lerp( thisTransform.position.x, target.position.x + xOffset, Time.deltaTime * smoothTime);
 
           thisTransform.position.z = Mathf.Lerp( thisTransform.position.z, target.position.z + zOffset, Time.deltaTime * smoothTime);
   }
    }
    
    function OnTriggerEnter(other : Collider ) {
     if (other.gameObject.tag == "Player") {
      shouldFollow = true;
      AIWander.enabled = false;
     }
    }
    
    function OnTriggerExit(other : Collider) {
     if (other.gameObject.tag == "Player") {
      shouldFollow = false;
     AIWander.enabled = true;
     }
    }