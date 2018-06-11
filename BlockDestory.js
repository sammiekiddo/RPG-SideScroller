var XPos : float;
var YPos : float;
var ZPos : float;
var Waiting : float = 0.1;

function Start()
{
	Xpos =transform.position.x;
	Ypos =transform.position.y;
	Zpos =transform.position.z;
}

function OnTriggerEnter(col : Collider)
{
	
	if(col.gameObject.tag == "Player") 
	{
		this.transform.position = Vector3(XPos, YPos+0.1, ZPos);
		yield WaitForSeconds(Waiting);
		this.transform.position = Vector3(XPos, YPos+0.2, ZPos);
		yield WaitForSeconds(Waiting);
		transform.GetComponent.<Collider>().isTrigger = false;
		this.transform.position = Vector3(XPos, YPos+0.3, ZPos+0.8);
		yield WaitForSeconds(Waiting);
		this.transform.position = Vector3(XPos, YPos-0.4, ZPos+1.0);
		yield WaitForSeconds(Waiting);
		this.transform.position = Vector3(XPos, YPos-0.1, ZPos+1.5);
		yield WaitForSeconds(Waiting);
		this.transform.position = Vector3(XPos, YPos-0.8, ZPos+2.0);
		yield WaitForSeconds(Waiting);
		this.transform.position = Vector3(XPos, YPos-1.6, ZPos+2.0);
		yield WaitForSeconds(Waiting);
		this.transform.position = Vector3(XPos, YPos-2.0, ZPos+2.0);
		yield WaitForSeconds(Waiting);
		transform.GetComponent.<Collider>().isTrigger = true;
		Destroy(gameObject);
		}
}