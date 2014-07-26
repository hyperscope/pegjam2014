    var target : Transform;
    var smoothTime = 0.3;
    var xOffset : float = 1.0;
    var zOffset : float = 1.0;
 
    private var thisTransform : Transform;
    private var velocity : Vector2;
    private var shouldFollow : boolean;
 //	public var aiwander : aiwander;
 
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
    		//aiwander.enabled = false;
    	}
    }
    
    function OnTriggerExit(other : Collider) {
    	if (other.gameObject.tag == "Player") {
    		shouldFollow = false;
    		//aiwander.enabled = true;
    	}
    }