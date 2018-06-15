

void Start(){
  character = GetComponent<GameObject>();
  navMeshAgent = character.GetComponent<NavMeshAgent>();
}

void OnUpdate (){
  Vector3 navMeshVelocity = Mathf.Abs(Vector3.Normalize(navMeshAgent.getVelocity()));
  float moveSpeed = character.GetAttribute("moveSpeed");
  float newVelocity = Mathf.Lerp(moveSpeed,navMeshVelocity.x,Time.DeltaTime)/100;
  character.SetAttribute("moveSpeed",newVelocity);
}