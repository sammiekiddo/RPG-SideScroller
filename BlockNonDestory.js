var XPos : float;
var YPos : float;
var ZPos : float;

function Start()
{
	Xpos =transform.position.x;
	Ypos =transform.position.y;
	Zpos =transform.position.z;
}

function OnTriggerEnter(col : Collider)
{
	transform.GetComponent.<Collider>().isTrigger = false;
	if(col.gameObject.tag == "Player") 
	{
		this.transform.position = Vector3(XPos, YPos+0.2, ZPos);
		yield WaitForSeconds(0.08);
		this.transform.position = Vector3(XPos, YPos, ZPos);
		yield WaitForSeconds(0.25);
		transform.GetComponent.<Collider>().isTrigger = true;
	}
}